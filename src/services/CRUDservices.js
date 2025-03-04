
import bcrypt from 'bcryptjs';
import db from '../models/index';
import { where } from 'sequelize';
import { raw } from 'body-parser';

const salt = bcrypt.genSaltSync(10);    //const khai báo biến và không dc khai báo lại

let createNewUser =(data)=>{
    return new Promise(async (resolve,reject)=>{
        if (!data.email || !data.password) {
            return resolve(""); // Gửi thông báo lỗi
        }
        try {
                let hashPasswordFromBcrypt=await hashUserPassword(data.password);
                await db.User.create({
                email: data.email,
                password: hashPasswordFromBcrypt,
                firstName: data.Firtname,
                lastName: data.Lastname,
                address: data.Address,
                phonenumber: data.Phonenumber,
                gender: data.gender==='1' ? true : false,      
                roleId: data.roleId,      
        })
            resolve('Thêm thành công')
            
        } catch (error) {
            reject(error)
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
let getAllUser=()=>{
    return new Promise(async(resolve,reject)=>{
        try {
            let users =await db.User.findAll({
                row:true,
            });
            resolve(users)
        } catch (e) {
            reject(e)
        }
    })
}
let getUserInfoById=(userID)=>{
    return new Promise(async (resolve,reject)=>{
        try {
            let user=await db.User.findOne({
                where: { id: userID},    
                raw:true,
            })
            if(user){
                resolve(user)
            }
            else{
                resolve({})
            }
        } catch (e) {
            reject(e);
        }
    })
}
let updateUserData=(data)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            let user = await db.User.findOne({
                where: {id : data.id}
            })
            if(user){
                user.firstName=data.Firtname;
                user.lastName=data.Lastname;
                user.address=data.Address;

                await user.save();

                let allUsers=await db.User.findAll();

                resolve(allUsers);
            }
            else{
                resolve();
            }
        } catch (e) {
            reject(e)
        }
    })
}
let deleteUserById=(userid)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            let user =await db.User.findOne({
                where: {id : userid}
            })
            if(user){
                await user.destroy();
            }
            resolve();
        } catch (error) {
            reject(error);
        }
    })
}
module.exports={
    createNewUser: createNewUser,
    getAllUser: getAllUser,
    getUserInfoById:getUserInfoById,
    updateUserData:updateUserData,
    deleteUserById:deleteUserById
}