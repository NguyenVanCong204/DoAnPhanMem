import bcrypt from 'bcryptjs';
import db from '../models/index';
import { where } from 'sequelize';
import { raw } from 'body-parser';
import { response } from 'express';

const salt = bcrypt.genSaltSync(10);    //const khai báo biến và không dc khai báo lại

let handleUserLogin=(email,password)=>{
    return new Promise(async (resolve,reject)=>{
        try {
            let userData={};
            let isExitst = await checkUserEmail(email);
            if(isExitst){

                let user=await db.User.findOne({
                    where : { email : email},
                    attributes:['email','roleId','password','firstName','lastName'],  //Lấy các trường muốn lấy phải lấy trường user and passwork 
                                                                //vì ở dưới cần 2 thuộc tính này để só sánh
                    raw: true  //Trả về user thành một object thay vì các đối tượng Sequelize.
                });
                if(user){
                    let check = await bcrypt.compare(password, user.password);
                    if(check){
                        userData.errCode=0;
                        userData.errMessage='OK';
                        delete user.password;    //Không muốn hiển thị passwork
                        userData.user=user;
                    }
                    else{
                        userData.errCode=3;
                        userData.errMessage='Wrong password';
                    }
                }else{
                    userData.errCode=2;
                    userData.errMessage="User's not found~";
                }
            }
            else{
                userData.errCode=1;
                userData.errMessage="Your's Email isn't exits in you system. Plz try other email!";
            }
            resolve(userData)
        } catch (e) {
            reject(e)
        }
    })
}
let checkUserEmail=(userEmail)=>{
    return new Promise(async (resolve,reject)=>{
        try {
            let user = await db.User.findOne({
                where : {email : userEmail}
            })
            if(user){
                resolve(true)
            }else{
                resolve(false)
            }
        } catch (e) {
            reject(e);
        }
    })
}
let getAllUsers=(userId)=>{
    return new Promise(async (resolve,reject)=>{
        try {
            let data='';
            if(userId === 'ALL'){
                data= await db.User.findAll({
                    attributes:{
                        exclude : ['password']    //Không hiển thị lên password
                    }
                })
            }
            else if(userId && userId !== 'ALL'){
                data=await db.User.findOne({
                    where : {id : userId},
                    attributes:{
                        exclude : ['password']    //Không hiển thị lên password
                    }
                })
            }
            resolve(data)
        } catch (e) {
            reject(e);
        }
    })
}
let createNewUser=(data)=>{
    return new Promise(async (resolve,reject)=>{
        try {
            let check=await checkUserEmail(data.email);
            if(check===true){
                resolve({
                    errCode:1,
                    message:'Your email is already in user, Plz try anothee email'
                })
            }
            else{
                let hashPasswordFromBcrypt=await hashUserPassword(data.password);
                await db.User.create({
                email: data.email,
                password: hashPasswordFromBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phonenumber: data.phonenumber,
                gender: data.gender,      
                roleId: data.roleId,
                positionId : data.positionId,
                image:data.avatar      
                })
            }
            resolve({
                errCode:0,
                message: 'OK'
            })
            } catch (e) {
            reject(e);
        }
    })
}
let hashUserPassword = (password)=>{
    return new Promise(async (resolve,reject)=>{                     //Trả về Promise xử lí việc mà hóa
        try {
            const salt = await bcrypt.genSalt(10); // Tạo salt với 10 vòng
            const hashPassword = await bcrypt.hash(password, salt); // Mã hóa mật khẩu
            resolve(hashPassword);
        } catch (e) {
            reject(e);
        }    
    })
}
let deleteUser=(userid)=>{
    return new Promise(async (resolve,reject)=>{
        try {
            let user=await db.User.findOne({
                where : {id : userid},
                raw:false  //Vì đã ép kiểu nó thành object trong config nên sẽ không nhận được kiểu sequellize ở nodejs
            })              //Nên phải set lại nó là false để trả về kiểu sequellize
            if(!user){
                resolve({
                    errCode:2,
                    message:"The user isn't exist"
                })
            }
            await user.destroy();
            resolve({
                errCode:0,
                message:"Delete User succeeds"
            })
        } catch (e) {
            reject(e)
        }
    })
}
let updateUser=(data)=>{
    return new Promise(async (resolve,reject)=>{
        try {
            if(!data.id || !data.roleId || !data.positionId || !data.gender){
                resolve({
                    errCode:2,
                    message:"Missing required prame!"
                })
            }
           let user=await db.User.findOne({
            where : {id : data.id},
            raw:false  //Vì đã ép kiểu nó thành object trong config nên sẽ không nhận được kiểu sequellize ở nodejs
                        //Nên phải set lại nó là false để trả về kiểu sequellize
           }) 
           if(!user){
            resolve({
                errCode:1,
                message:"User's not found!"
            })
           }
           else{    
                user.email=data.email;
                user.firstName=data.firstName;
                user.lastName=data.lastName;
                user.address=data.address;
                user.phonenumber=data.phonenumber;
                user.gender=data.gender;
                user.roleId=data.roleId;
                user.positionId=data.positionId;
                if(data.avatar){
                    user.image=data.avatar
                }       
                await user.save();
                resolve({
                    errCode:0,
                    message:"Update the user succeeds"
                })
           }
        } catch (e) {   
            reject(e)
        }
    })
}
let getAlllCode=(typeInput)=>{
    return new Promise(async (resolve,reject)=>{
        try {
            let res={};
            if(!typeInput){
                res.errCode=1;
                res.message='Missing required parameters !';
            }else{
                
                let allCode=await db.Allcode.findAll({
                    where : {type : typeInput}
                });
                res.errCode=0;
                res.message='OK';
                res.data=allCode;
            }
            resolve(res)
        } catch (e) {
            reject(e);
        }
    })
}
module.exports={
    handleUserLogin:handleUserLogin,
    getAllUsers:getAllUsers,
    createNewUser:createNewUser,
    deleteUser:deleteUser,
    updateUser:updateUser,
    getAlllCode:getAlllCode
}