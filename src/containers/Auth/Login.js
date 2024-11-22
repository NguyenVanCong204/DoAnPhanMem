import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";


import './Login.scss';
import { FormattedMessage } from 'react-intl';
import {handleLoginApi} from "../../services/userService";

import '@fortawesome/fontawesome-free/css/all.min.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            username: "",
            password: "",
            isShowPassword:false,
            errMessage: ''
        }
    }


    handleOnChangeUsername=(Event)=>{
        this.setState({
            username: Event.target.value
        })
    }
    handleOnChangePassword=(Event)=>{
        this.setState({
            password: Event.target.value
        })
    }
    handleLogin=async ()=>{
        this.setState({
            errMessage:''
        })
        try {
            let data=await handleLoginApi(this.state.username,this.state.password);
            if(data && data.errCode!==0){
                this.setState({
                    errMessage : data.message
                })
            }
            else if(data && data.errCode===0){
                this.props.userLoginSuccess(data.user);
                console.log('login succeeds')
            }
        } catch (error)
        {
            if(error.response){
                if(error.response.data){
                    this.setState({
                        errMessage:error.response.data.message
                    })
                }
            }
            console.log("Văn Công",error.response)
           
        }
    }
    handleShowHidePassword=()=>{
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }
    render() {
        return (
            <div className="login-background">
                <div className="login-container">
                    <div className="login-content row">
                        <div className="col-12 text-center text-login">Login</div>
                        <div className="col-12 form-group login-input">
                            <label>Username:</label>
                            <input type='text' 
                                className='form-control' 
                                placeholder='Enter your username' 
                                value={this.state.username}
                                onChange={(Event)=>this.handleOnChangeUsername(Event)}
                            />
                        </div><div className="col-12 form-group login-input">
                            <label>Password:</label>
                            <div className='custom-input-password'>
                            <input type={this.state.isShowPassword ? 'text' : 'password' } 
                                className='form-control' 
                                placeholder='Enter your password'
                                value={this.state.password}
                                onChange={(Event)=>this.handleOnChangePassword(Event)}
                            />
                            <span onClick={()=>this.handleShowHidePassword()}>
                                <i className={this.state.isShowPassword ? "fa-regular fa-eye" :  "fa-regular fa-eye-slash"}></i>
                            </span>
                            
                            </div>
                        </div>
                        <div className='col-12' style={{ color : 'red'}}>
                            {this.state.errMessage}
                        </div>
                        <div className="col-12">
                            <button className='btn-login' onClick={()=>{this.handleLogin()}}>Login</button>
                        </div>
                        <div className='col-12'>
                            <span className='forgot-password'>Forgot your password?</span>
                        </div>
                        <div className='col-12 text-center mt-3'>
                            <span className='text-other-login'>Or Login with:</span>
                        </div>
                        <div className='col-12 social-login'>
                            <i className="fa-brands fa-google-plus-g gogle"></i>
                            <i className="fa-brands fa-facebook-f facebook"></i>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        // userLoginFail: () => dispatch(actions.adminLoginFail()),
        userLoginSuccess: (userInfor) => dispatch(actions.userLoginSuccess(userInfor))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
