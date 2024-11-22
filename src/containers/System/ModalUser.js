import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { emitter } from '../../utils/emitter';

class ModelUser extends Component {

    constructor(props){
        super(props);
            this.state={
                email:'',
                password:'',
                firstName:'',
                lastName:'',
                address:'',
                phonenumber:'',
                gender:'1',
                roleId:'1'
            }
            this.listenToEmitter();
    }

  componentWillUnmount() {
    // Xóa listener khi component bị hủy
    emitter.off('EVENT_CLEAR_MODAL_DATA', this.clearModalData);
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
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        address: "",
        phonenumber:"",
        gender:"1",
        roleId:"1"
      });
    };
    
    // Đăng ký listener
    emitter.on('EVENT_CLEAR_MODAL_DATA', this.clearModalData);
}

    componentDidMount() {
    }

    handleOnChageEmail=(event,id)=>{
        let copyState={...this.state};
        copyState[id]=event.target.value;
        this.setState({
            ...copyState
        })
    }

    handAddNewUser=()=>{
        let check=this.checkValideInput();
        if(check===true){
            this.props.createNewUser(this.state)
        }
        else{
            
        }
        
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
              Modal create new user
            </ModalHeader>
            <ModalBody>
              <div className="model-user-body">
                <div className="input-container">
                  <label>Email</label>
                  <input type="text" onChange={(event)=>{this.handleOnChageEmail(event,"email")}} value={this.state.email}></input>
                </div>
                <div className="input-container">
                  <label>Password</label>
                  <input type="password" onChange={(event)=>{this.handleOnChageEmail(event,"password")}} value={this.state.password}></input>
                </div>
                <div className="input-container">
                  <label>First Name</label>
                  <input type="text" onChange={(event)=>{this.handleOnChageEmail(event,"firstName")}} value={this.state.firstName}></input>
                </div>
                <div className="input-container">
                  <label>Last Name</label>
                  <input type="text" onChange={(event)=>this.handleOnChageEmail(event,"lastName")} value={this.state.lastName}></input>
                </div>
                <div className="input-container max-width">
                  <label>Address</label>
                  <input type="text" onChange={(event)=>this.handleOnChageEmail(event,"address")} value={this.state.address}></input>
                </div>
                <div className="input-container max-width">
                  <label>Phonenumber</label>
                  <input type="text" onChange={(event)=>this.handleOnChageEmail(event,"phonenumber")} value={this.state.phonenumber}></input>
                </div>
                <div className="input-container">
                  <label>Gender</label>
                  <select onChange={(event)=>{this.handleOnChageEmail(event,"gender")}}>
                    <option  value="1">Made</option>
                    <option  value="0">Female</option>
                  </select>
                </div>
                <div className="input-container">
                  <label>RoleId</label>
                  <select onChange={(event)=>{this.handleOnChageEmail(event,"roleId")}}>
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
                  this.handAddNewUser();
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

export default connect(mapStateToProps, mapDispatchToProps)(ModelUser);
