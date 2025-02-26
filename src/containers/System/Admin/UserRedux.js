import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import {getAllCodeService} from "../../../services/userService";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import {languages} from "../../../utils"
import "./UserRedux.scss"
import TableManageUser from './TableManageUser';

import * as actions from "../../../store/actions"

class UserRedux extends Component {
    constructor(props){
        super(props);
        this.state={
            positionArr: [],
            genderArr: [],
            roleArr: [],
            priviewImgURL:"",
            isOpen : false,

            email :"",
            password:"",
            firstName:"",
            lastName : "",
            phoneNumber : "",
            gender : "",
            address:"",
            position:"",
            role : "",
            avatar : "",
        }
    }

    async componentDidMount() {

      this.props.getGenderStart();
      this.props.getPositionStart();
      this.props.getRoleStart();


        // try {
        //     let res = await getAllCodeService('gender');
        //     let res1 =await getAllCodeService('position');
        //     let res2=await getAllCodeService('role');
        //     if(res && res.errCode===0||res1&&res1.errCode===0||res2&&res2.errCode===0){
        //         this.setState({
        //             genderArr : res.data,
        //             positionArr : res1.data,
        //             roleArr : res2.data
        //         })
        //     }
        // } catch (error) {
        //     console.log(error)
        // }
    }

    componentDidUpdate(prevProps,prevState,snapshot){
      let arrGenders=this.props.genderRedux;
      let arrPositions=this.props.positionRedux;
      let arrRoles=this.props.roleRedux;
      if(prevProps.genderRedux !== this.props.genderRedux){
        this.setState({
          genderArr : this.props.genderRedux,
          gender : arrGenders && arrGenders.length>0 ? arrGenders[0].key : ""
        })
      }
      if(prevProps.positionRedux !== this.props.positionRedux){
        this.setState({
          positionArr : this.props.positionRedux,
          position : arrPositions && arrPositions.length>0 ? arrPositions[0].key : ""
        })
      }
      if(prevProps.roleRedux !== this.props.roleRedux){
        this.setState({
          roleArr :this.props.roleRedux,
          role : arrRoles && arrRoles.length>0 ? arrRoles[0].key : ""
        })
      }
      if(prevProps.listUser !== this.props.listUser){
        this.setState({
          email: "",
          password: "",
          firstName: "",
          lastName: "",
          phoneNumber: "",
          gender: "",
          address: "",
          position: "",
          role: "",
          avatar: "",
        });
      }
    }


    handleOnchangeImage=(event)=>{
      let data = event.target.files;
      let file=data[0];

      if(file){
        let objectUrl = URL.createObjectURL(file)
        this.setState({
          priviewImgURL:objectUrl,
          avatar : file
        })
      }
      
    }

    openPreviewImage =()=>{
      if(!this.state.priviewImgURL) return;
      this.setState({
        isOpen:true
      })
    }
    handleSaveUser=()=>{
      let isValid = this.checkValidateInput();
      if(isValid===false) return;

      this.props.createNewUser({
                email: this.state.email,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                address: this.state.address,
                phonenumber: this.state.phoneNumber,
                gender: this.state.gender,      
                roleId: this.state.role,
                positionId : this.state.position  
      })
      // setTimeout(()=>{
      //   this.props.fetchUserRedux();
      // },1000)
    }


    onChangeInput=(event,id)=>{
      let copyState = {...this.state}

      copyState[id]=event.target.value;
      this.setState({
        ...copyState
      },()=>{
        console.log("NVC  : ",this.state)
      })
      
    }

    checkValidateInput = () =>{
      let isValid =true;
      let arrCheck = ['email','password','firstName','lastName','phoneNumber','address'];
      for (let i=0 ; i<arrCheck.length;i++){
        if(!this.state[arrCheck[i]]){
          isValid=false;
          alert("This input is required : "+arrCheck[i])
          break;
        }
      }
      return isValid
    }
    render() {
        let isGetGenders = this.props.isLoadingGender;

        let genders=this.state.genderArr;
        let positions=this.state.positionArr;
        let roles=this.state.roleArr;
        let lang = this.props.lang;

        let {email,password,firstName,lastName,phoneNumber,address,gender,position,role,avatar} = this.state;
        return (
          <div className="user-redux-container">
            <div className="title">Learn React-Redux Nguyễn Văn Công</div>

            <div className="user-redux-body">

              <div className="container">
                <div className="row">
                  <div className="col-12 my-3">
                    <FormattedMessage id="manage-user.add" />
                  </div>

                  <div className="col-12">
                    {isGetGenders === true ? "Loading gender" : ""}
                  </div>

                  <div className="col-3">
                    <label>
                      <FormattedMessage id="manage-user.email" />
                    </label>
                    <input className="form-control" type="email" value={email} onChange={(event)=>{this.onChangeInput(event,"email")}}/>
                  </div>
                  <div className="col-3">
                    <label>
                      <FormattedMessage id="manage-user.password" />
                    </label>
                    <input className="form-control" type="password" value={password} onChange={(event)=>{this.onChangeInput(event,"password")}}/>
                  </div>
                  <div className="col-3">
                    <label>
                      <FormattedMessage id="manage-user.first-name" />
                    </label>
                    <input className="form-control" type="text" value={firstName} onChange={(event)=>{this.onChangeInput(event,"firstName")}}/>
                  </div>
                  <div className="col-3">
                    <label>
                      <FormattedMessage id="manage-user.last-name" />
                    </label>
                    <input className="form-control" type="text" value={lastName} onChange={(event)=>{this.onChangeInput(event,"lastName")}}/>
                  </div>


                  <div className="col-3">
                    <label>
                      <FormattedMessage id="manage-user.phone-number" />
                    </label>
                    <input className="form-control" type="text" value={phoneNumber} onChange={(event)=>{this.onChangeInput(event,"phoneNumber")}}/>
                  </div>
                  <div className="col-9">
                    <label>
                      <FormattedMessage id="manage-user.address" />
                    </label>
                    <input className="form-control" type="text" value={address} onChange={(event)=>{this.onChangeInput(event,"address")}}/>
                  </div>
                  <div className="col-3">
                    <label>
                      <FormattedMessage id="manage-user.gender" />
                    </label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={(event)=>{this.onChangeInput(event,"gender")}}
                    >
                      {genders &&
                        genders.length > 0 &&
                        genders.map((item, index) => {
                          return (
                            <option key={index} value={item.key}>
                              {lang === languages.VI
                                ? item.valueVi
                                : item.valueEn}
                            </option>
                          );
                        })}
                    </select>
                  </div>

                  <div className="col-3">
                    <label>
                      <FormattedMessage id="manage-user.position" />
                    </label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={(event)=>{this.onChangeInput(event,"position")}}
                    >
                      {positions &&
                        positions.length > 0 &&
                        positions.map((item, index) => {
                          return (
                            <option key={index} value={item.key}>
                              {lang === languages.VI
                                ? item.valueVi
                                : item.valueEn}
                            </option>
                          );
                        })}
                    </select>
                  </div>

                  <div className="col-3">
                    <label>
                      <FormattedMessage id="manage-user.role" />
                    </label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={(event)=>{this.onChangeInput(event,"role")}}
                    >
                      {roles &&
                        roles.length > 0 &&
                        roles.map((item, index) => {
                          return (
                            <option key={index} value={item.key}>
                              {lang === languages.VI
                                ? item.valueVi
                                : item.valueEn}
                            </option>
                          );
                        })}
                    </select>
                  </div>

                  <div className="col-3">
                    <label>
                      <FormattedMessage id="manage-user.image" />
                    </label>
                    <div className='preview-img-container'>
                      <input id='previewImg' type="file" hidden
                        onChange={(event)=>this.handleOnchangeImage(event)}
                      />
                      <label className='lable-upload' htmlFor='previewImg'>Tải ảnh <i className="fa-solid fa-upload"></i></label>
                      <div className="preview-iamge" style={{backgroundImage: `url(${this.state.priviewImgURL})`}}
                        onClick={()=>this.openPreviewImage()}
                      >

                      </div>
                    </div>
                  </div>
                  <div className="col-12 my-3">
                    <button className="btn btn-primary px-3" onClick={()=>this.handleSaveUser()}>
                      <FormattedMessage id="manage-user.save" />
                    </button>
                  </div>
                  <div className='col-12 mb-5'>
                    <TableManageUser/>
                  </div>
                </div>
              </div>
            </div>

            {this.state.isOpen===true && 
              <Lightbox
              mainSrc={this.state.priviewImgURL}
              onCloseRequest={() => this.setState({ isOpen: false })}
              />
            }
            
          </div>
        );
    }
    
}

const mapStateToProps = state => {
    return {
        lang: state.app.language,
        genderRedux : state.admin.genders,
        positionRedux : state.admin.positions,
        roleRedux : state.admin.roles,
        isLoadingGender : state.admin.isLoadingGender,
        listUser : state.admin.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
      getGenderStart:()=>dispatch(actions.fetchGenderStart()),
      getPositionStart:()=>dispatch(actions.fetchPositionStart()),
      getRoleStart:()=>dispatch(actions.fetchRoleStart()),
      createNewUser:(data)=>dispatch(actions.createNewUser(data)),
      // fetchUserRedux:()=>dispatch(actions.fetchAllUserStart())

      // processLogout: () => dispatch(actions.processLogout()),
      // changLanguageAppRedux : (language) => dispatch(actions.changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
