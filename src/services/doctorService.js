import bcrypt from 'bcryptjs';
import db from '../models/index';
import { Model, where } from 'sequelize';
import { raw } from 'body-parser';
import { response } from 'express';

let getTopDoctorHome = (limitInput)=>{
    return new Promise(async (resolve,reject)=>{
        try {
            let users=await db.User.findAll ({
                limit : limitInput,
                where : {roleId :'R2'},
                order : [['createdAt' , 'DESC']],
                attributes:{
                    exclude : ['password']    //Không hiển thị lên password
                },
                include:[
                    {model : db.Allcode , as : 'positionData' ,attributes:['valueEn','valueVi']},
                    {model : db.Allcode, as : 'genderData' , attributes:['valueEn','valueVi']}
                ],
                raw: true ,
                nest : true
            })
            resolve({
                errCode : 0,
                data : users
            })
        } catch (error) {
            reject(error)
        }
    })

}
let getAllDoctorss=()=>{
    return new Promise(async (resolve,reject)=>{
        try {
            let doctors = await db.User.findAll({
                where:{roleId:'R2'},
                attributes:{
                    exclude : ['password','image'] 
                },
            })
            resolve({
                errCode:0,
                data : doctors
            })
        } catch (error) {
            reject(error)
        }
    })
}

let saveInforDoctorService =(dataInput)=>{
    return new Promise(async (resolve,reject)=>{
        try {
            if(!dataInput.doctorId || !dataInput.contentHTML || !dataInput.contentMarkdown){
                resolve({
                    errCode:1,
                    errMessage:'Missing parameter'
                })
            }
            else{
                await db.Markdown.create({
                    contentHTML : dataInput.contentHTML,
                    contentMarkdown : dataInput.contentMarkdown,
                    description : dataInput.description,
                    doctorId : dataInput.doctorId,
                })
                resolve({
                    errCode:0,
                    errMessage:"Save infor doctor success !"
                })
            }
        } catch (error) {
            reject(error)
        }
    })
}
let getDetailDoctorByIdService =(InputId)=>{
    return new Promise(async (resolve,reject)=>{
        try {
            if(!InputId){
                resolve({
                    errCode:1,
                    errMessage:"Missing required parameter"
                })
            }else{
                let data= await db.User.findOne({
                    where :{
                        id:InputId
                    },
                    attributes:{
                        exclude : ['password','image']    //Không hiển thị lên password
                    },
                    include:[
                        {
                            model : db.Markdown, 
                            attributes:['description','contentHTML','contentMarkdown']
                        },
                        {
                            model : db.Allcode, 
                            as :'positionData',
                            attributes:['valueEn','valueVi']
                        },
                    ],
                    raw: true ,
                    nest : true
                })
                resolve({
                    errCode : 0,
                    data:data
                })
            }
        } catch (error) {
            reject(error)
        }
    })
}
module.exports={
    getTopDoctorHome:getTopDoctorHome,
    getAllDoctorss:getAllDoctorss,
    saveInforDoctorService:saveInforDoctorService,
    getDetailDoctorByIdService:getDetailDoctorByIdService
}