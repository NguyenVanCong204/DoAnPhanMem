import { Json } from 'sequelize/lib/utils';
import db from '../models/index';
import doctorService from '../services/doctorService';
import { response } from 'express';

let getTopDoctorHome = async(req,res)=>{
    let limit=req.query.limit;
    if(!limit){
        limit =10;
    }
    try {
        let response = await doctorService.getTopDoctorHome(+limit);
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(200).json({
            errCode : -1,
            message : 'Error from server ...'
        })
    }
}

module.exports={
   getTopDoctorHome : getTopDoctorHome
}