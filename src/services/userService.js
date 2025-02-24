import axios from "../axios"

const handleLoginApi=(userEmail,userPassword)=>{
    return axios.post('/api/login',{email : userEmail,password : userPassword});  
}
const getAllUsers=(userId)=>{
    return axios({
        method: 'get',
        url:'/api/get-all-users',
        params:{id : userId}
    });
};

const createNewUserService=(data)=>{
    return axios.post('/api/create-new-user',data)
}
const deleteUserService=(userId)=>{
    return axios({
        method:'delete',
        url:'/api/delete-user',
        params:{id : userId}
    });
};
const updateUserService=(data)=>{
    return axios({
        method:'post',
        url:'/api/edit-user',
        data:data
    })
}
const getAllCodeService=(inputType)=>{
    return axios({
        method: 'get',
        url:'/api/AllCode',
        params:{type : inputType}
    });
}
export{handleLoginApi,getAllUsers,createNewUserService,deleteUserService,updateUserService,getAllCodeService}