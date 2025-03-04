import { Json } from 'sequelize/lib/utils';
import db from '../models/index';
import userService from '../services/userService';

let handleLogin = async(req,res)=>{
    let email=req.body.email;
    let password=req.body.password;
    if(!email||!password){
        return res.status(500).json({
            errCode:1,
            message: "Missing inputs parameter!"
        })
    }

    let userData= await  userService.handleUserLogin(email,password);

    return res.status(200).json({
        errCode:userData.errCode,
        message: userData.errMessage,
        user: userData.user ? userData.user : {} 
    })
}

let handleGetAllUsers=async (req,res)=>{
    let id=req.query.id

    if(!id){
        return res.status(200).json({
            errCode:1,
            message:"Missing reqred parameters",
            userData:[]
        })
    }

    let userData= await userService.getAllUsers(id);
    
    return res.status(200).json({
        errCode:0,
        message: 'OK',
        userData
    })
}
let hanldeCreateNewUser= async(req,res)=>{
    let message=await userService.createNewUser(req.body);
    return res.status(200).json(message);
}
let hanldeEditUser=async (req,res)=>{
    let data=req.body
    let message=await userService.updateUser(data)
    return res.status(200).json(message)
}
let hanldeDeleteUser=async (req,res)=>{
    if(!req.query.id){
        return res.status(200).json({
            errCode:1,
            message:"Missing required prameters !"
        })
    }
    let message=await userService.deleteUser(req.query.id)
    return res.status(200).json(message)
}
let AllCode=async(req,res)=>{
    try {
        let type=req.query.type
        let data=await userService.getAlllCode(type);
        return res.status(200).json(data)
    } catch (error) {
        res.status(200).json({
            errCode:-1,
            errMessage:'Error Form server'
        })
    }
}
module.exports={
    handleLogin:handleLogin,
    handleGetAllUsers:handleGetAllUsers,
    hanldeCreateNewUser:hanldeCreateNewUser,
    hanldeEditUser:hanldeEditUser,
    hanldeDeleteUser:hanldeDeleteUser,
    AllCode:AllCode,
}