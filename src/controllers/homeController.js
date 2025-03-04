import db from '../models/index';
import CRUDService from '../services/CRUDservices';

let getHomePage = async (req,res) => {
    try {
        let data = await db.User.findAll();       //Lấy tất cả dữ liệu người dùng trong bảng User
        return res.render('homepage.ejs',{
            data: JSON.stringify(data)            //Biến dữ liệu thành một chuỗi
        });
    } catch (e) {
        console.log(e);
    }
}
let getAboutPage=(req,res) => {         //Hàm để test thử
    return res.render('test/about.ejs');
}
let getCRUD=async (req,res)=>{
    return res.render('crud.ejs');
}
let postCRUD=async (req,res)=>{
    if(req.body.action==="create"){
        await CRUDService.createNewUser(req.body);   //Thêm dữ liệu vào data thành công thì hiển thị ra giao diện mới
        return res.send('post crud form server');
    }
    else if(req.body.action==="test"){
        return res.render('test/about.ejs'); // Thay đổi đường dẫn theo nhu cầu
    }
    
}
let displayGetCRUD=async (req,res)=>{
    let data = await CRUDService.getAllUser();
    console.log('---------------')
    console.log(data)
    console.log('---------------')
    return res.render('displayCRUD.ejs',{
        dataTable: data
    });
}
let getEditCRUD=async (req,res)=>{
    let userId= req.query.id;
    if(userId){
        let userData =await CRUDService.getUserInfoById(userId);
        console.log('----------------')
        console.log(userData)
        console.log('----------------')

        return res.render('editCRUD.ejs',{
            user:userData
        })
        
    }
    else{
        return res.send("User not found!");
    }

    
}
let putCRUD=async (req,res)=>{
    let data = req.body
    let allUser = await CRUDService.updateUserData(data);
    return res.render('displayCRUD.ejs',{
        dataTable: allUser
    });
}
let deleteCRUD=async (req,res)=>{
    let id= req.query.id;
    if(id){
        await CRUDService.deleteUserById(id);
        let allUser= await CRUDService.getAllUser();
        return res.render('displayCRUD.ejs',{
            dataTable:allUser
        });
    }
    else{
        return res.send('User not fount !')
    }
}
module.exports={
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD:getCRUD,
    postCRUD:postCRUD,
    displayGetCRUD:displayGetCRUD,
    getEditCRUD:getEditCRUD,
    putCRUD:putCRUD,
    deleteCRUD:deleteCRUD
}
