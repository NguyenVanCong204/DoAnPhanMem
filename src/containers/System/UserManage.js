import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import {getAllUsers,createNewUserService,deleteUserService,updateUserService} from "../../services/userService"
import ModalUser from './ModalUser';
import { emitter } from '../../utils/emitter';
import ModalEditUser from './ModalEditUser';


class UserManage extends Component {

    constructor(props){
        super(props);
        this.state={
            arrUser: [],
            isOpenModalUser: false,
            isOpenModalEditUser:false,
            userEdit:{}
        }
    }

    async componentDidMount() {
        await this.getAllUsersFromReact();
    }

    getAllUsersFromReact= async()=>{
        let response = await getAllUsers('ALL');
        if(response&& response.errCode===0){
            this.setState({
                arrUser:response.userData
            })
        }
    }
    

    handleAddNewUser=()=>{
        this.setState({
            isOpenModalUser:true
        })
    }
    toggleUserModal=()=>{
        this.setState({
            isOpenModalUser: ! this.state.isOpenModalUser
        })
    }
    toggleEditUserModal=()=>{
      this.setState({
        isOpenModalEditUser: ! this.state.isOpenModalEditUser
      })
  }
    createNewUser=async (data)=>{
        try {
            let reponse =await createNewUserService(data);
            console.log(data)
            if(reponse&&reponse.errCode!==0){
                alert(reponse.message)         
            }
            else{
                this.componentDidMount();
                this.setState({
                    isOpenModalUser:false
                })
                emitter.emit('EVENT_CLEAR_MODAL_DATA')  //Gán sự kiện thêm mới có tên là EVENT_CLEAR_MODAL_DATA
            }
            
        } catch (e) {
            console.log(e)
        }
    }
    updateUser=async (data)=>{
      try {
        let reponse=await updateUserService(data);
        console.log(reponse)
        if(reponse&&reponse.errCode!=0){
          alert(reponse.message)
        }
        else{
          alert(reponse.message)
          this.componentDidMount();
                this.setState({
                  isOpenModalEditUser: false,
                });
        }
        
      } catch (e) {
        console.log(e)
      }
    }
    checkGender=(user)=>{
      try {
        if(user.gender===1){
          return 'Made';
        }
        else if(user.gender===0){
          return 'Female';
        }
      } catch (e) {
        console.log(e)
      }
    }
    checkRoleId=(user)=>{
      try {
        if(user.roleId==='1'){
          return 'Admin';
        }
        else if(user.roleId==='2'){
          return 'Docter';
        }
        else if(user.roleId==='3'){
          return 'Patient';
        }
        else{
          return 'Không xác định';
        }
      } catch (e) {
        console.log(e)
      }
    }
    
    handleDeleteUser=async (user)=>{
      try {
        let res=await deleteUserService(user.id);
        if(res&&res.errCode===0){
          this.componentDidMount();
        }
        else{
          alert(res.message);
        }
        
      } catch (e) {
        console.log(e);
      }
    }
    handleEditUser=(user)=>{
      this.setState({
        isOpenModalEditUser:true,
        userEdit : user
      })

    }

    render() {
        let arrUsers=this.state.arrUser;
        return (
          <div className="users-container">
            <ModalUser
              isOpen={this.state.isOpenModalUser}
              toggleFromParent={this.toggleUserModal}
              createNewUser={this.createNewUser}
            />
            {
              this.state.isOpenModalEditUser&&
              <ModalEditUser
                isOpen={this.state.isOpenModalEditUser}
                toggleFromParent={this.toggleEditUserModal}
                currentUser={this.state.userEdit}
                updateUser={this.updateUser}
              />
            }
            <div className="title text-center">Manage users with Eric</div>
            <div className="mx-1">
              <button
                className="btn btn-primary px-3"
                onClick={() => this.handleAddNewUser()}
              >
                <i className="fa-solid fa-plus"></i> Add new user
              </button>
            </div>
            <div className="users-table mt-3 mx-1">
              <table id="customers">
                <tbody>
                  <tr>
                    <th>Email</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Address</th>
                    <th>Actions</th>
                    <th>Gender</th>
                    <th>RoleId</th>
                  </tr>

                  {arrUsers &&
                    arrUsers.map((item, index) => {
                      //Kiểm tra có tồn tại arrUsers //map vòng lặp item: dữ liệu index : Số dòng dữ liệu
                      return (
                        <tr>
                          <td>{item.email}</td>
                          <td>{item.firstName}</td>
                          <td>{item.lastName}</td>
                          <td>{item.address}</td>
                          <td>{this.checkGender(item)}</td>
                          <td>{this.checkRoleId(item)}</td>
                          <td>
                            <button
                              className="btn-edit"
                              onClick={() => this.handleEditUser(item)}
                            >
                              <i className="fa-solid fa-pencil-alt"></i>
                            </button>
                            <button
                              className="btn-delete"
                              onClick={() => this.handleDeleteUser(item)}
                            >
                              <i className="fa-solid fa-trash-can"></i>
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};
const mapDispatchToProps = dispatch => {
    return {
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
