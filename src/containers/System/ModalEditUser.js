import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { emitter } from '../../utils/emitter';
import _ from 'lodash'; //Xử lí về amgr object
class ModelEditUser extends Component {

    constructor(props){
        super(props);
            this.state={
                id:'',
                email:'',
                password:'',
                FirstName:'',
                LastName:'',
                Address:'',
                Phonenumber:'',
                Gender:'1',
                RoleId:'1'
            }
    }
checkGender=()=>{
  try {
    let check=this.props.checkGioiTinh(this.state)
    if(check){
        this.setState({
          check
        })
      }
    else{
      console.error('User or user.gender is undefined');
    }
    console.error('User or user.gender is undefined');
  } catch (e) {
    console.log(e);
  }
}

  listenToEmitter() {
    this.clearModalData = () => {
      this.setState({
        id:"",
        email: "",
        password: "",
        FirstName: "",
        LastName: "",
        Address: "",
        Phonenumber:"",
        Gender:"1",
        RoleId:"1"
      });
    };
    
   
}

    componentDidMount() {
        let user=this.props.currentUser
        if(user && !_.isEmpty(user)){ //Check user có rỗng hay không bằng isemty của lodash //Nếu có và không rỗng
            this.setState({
                id:user.id,
                email:user.email,
                password:"aaaaaaaaaa",
                FirstName:user.firstName,
                LastName:user.lastName,
                Address:user.address,
                Phonenumber:user.phonenumber,
                Gender:user.gender,
                RoleId:user.roleId
            })
        }
        
    }
    handUpdateUser=()=>{
        this.props.updateUser(this.state)
    }

    handleOnChageEmail=(event,id)=>{
        let copyState={...this.state};
        copyState[id]=event.target.value;
        this.setState({
            ...copyState
        })
    }
    toggle=()=>{
        this.props.toggleFromParent()
    }

    render() {
        
        return (
          <Modal
            isOpen={this.props.isOpen}
            toggle={() => {
              this.toggle();
            }}
            className="model-user-container"
            size="lg" //Set độ rộng cho Modal sm md lg
            centered //Cho Modal vào giữa màn hình
            // form-group Lable sẽ đứng trên input
          >
            <ModalHeader
              toggle={() => {
                this.toggle();
              }}
            >
              Modal update user
            </ModalHeader>
            <ModalBody>
              <div className="model-user-body">
                <div className="input-container">
                  <label>Email</label>
                  <input type="text" onChange={(event)=>{this.handleOnChageEmail(event,"email")}} value={this.state.email}
                  disabled  //ko cho thay đổi
                  ></input>
                </div>
                <div className="input-container">
                  <label>Password</label>
                  <input type="password" onChange={(event)=>{this.handleOnChageEmail(event,"password")}} value={this.state.password}
                  disabled  //ko cho thay đổi
                  ></input>
                </div>
                <div className="input-container">
                  <label>First Name</label>
                  <input type="text" onChange={(event)=>{this.handleOnChageEmail(event,"FirstName")}} value={this.state.FirstName}></input>
                </div>
                <div className="input-container">
                  <label>Last Name</label>
                  <input type="text" onChange={(event)=>this.handleOnChageEmail(event,"LastName")} value={this.state.LastName}></input>
                </div>
                <div className="input-container max-width">
                  <label>Address</label>
                  <input type="text" onChange={(event)=>this.handleOnChageEmail(event,"Address")} value={this.state.Address}></input>
                </div>
                <div className="input-container max-width">
                  <label>Phonenumber</label>
                  <input type="text" onChange={(event)=>this.handleOnChageEmail(event,"Phonenumber")} value={this.state.Phonenumber}></input>
                </div>
                <div className="input-container">
                  <label>Gender</label>
                  <select onChange={(event)=>{this.handleOnChageEmail(event,"Gender")}}>
                    <option  value="1">Made</option>
                    <option  value="0">Female</option>
                  </select>
                </div>
                <div className="input-container">
                  <label>RoleId</label>
                  <select onChange={(event)=>{this.handleOnChageEmail(event,"RoleId")}}>
                      <option value="1">Admin</option>
                      <option value="2">Docter</option>
                      <option value="3">Patient</option>
                  </select>
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                className='px-3'
                onClick={() => {
                  this.handUpdateUser();
                }}
              >
                Save changes
              </Button>{" "}
              <Button
                color="secondary"
                className='px-3'
                onClick={() => {
                  this.toggle();
                }}
              >
                Close
              </Button>
            </ModalFooter>
          </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(ModelEditUser);
