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

module.exports={
    getTopDoctorHome:getTopDoctorHome
}