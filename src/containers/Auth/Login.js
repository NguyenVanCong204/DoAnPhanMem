import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

import * as actions from "../../store/actions";

import "./Login.scss";

import "@fortawesome/fontawesome-free/css/all.min.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isShowPassword: false,
      errMessage: "",
    };
  }

  handleOnChangeUsername = (Event) => {
    this.setState({
      username: Event.target.value,
    });
  };
  handleOnChangePassword = (Event) => {
    this.setState({
      password: Event.target.value,
    });
  };
  handleShowHidePassword = () => {
    this.setState({
      isShowPassword: !this.state.isShowPassword,
    });
  };
  handleRegister = () => {
    this.props.navigate("/register");
  };
  handleLogin = () => {
    let { username } = this.state;

    if (username === "1") {
      this.props.navigate("/usermanage");
    } else {
      this.props.navigate("/home");
    }
  };
  render() {
    return (
      <div className="login-background">
        <div className="login-container">
          <div className="login-content row">
            <div className="col-12 text-center text-login">Đăng Nhập</div>
            <div className="col-12 form-group login-input">
              <label>Email:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nhập email của bạn"
                value={this.state.username}
                onChange={(Event) => this.handleOnChangeUsername(Event)}
              />
            </div>
            <div className="col-12 form-group login-input">
              <label>Mật khẩu:</label>
              <div className="custom-input-password">
                <input
                  type={this.state.isShowPassword ? "text" : "password"}
                  className="form-control"
                  placeholder="Nhập mật khẩu của bạn"
                  value={this.state.password}
                  onChange={(Event) => this.handleOnChangePassword(Event)}
                  onKeyDown={this.handleKeyDown}
                />
                <span onClick={() => this.handleShowHidePassword()}>
                  <i
                    className={
                      this.state.isShowPassword
                        ? "fa-regular fa-eye"
                        : "fa-regular fa-eye-slash"
                    }
                  ></i>
                </span>
              </div>
            </div>
            <div className="col-12" style={{ color: "red" }}>
              {this.state.errMessage}
            </div>
            <div className="col-12">
              <button
                className="btn-login"
                onClick={() => {
                  this.handleLogin();
                }}
              >
                Đăng Nhập
              </button>
            </div>
            <div className="col-12">
              <button
                className="btn-register"
                onClick={() => {
                  this.handleRegister();
                }}
              >
                Đăng Kí
              </button>
            </div>
            <div className="col-12">
              <span className="forgot-password">Quên mật khẩu của bạn?</span>
            </div>
            <div className="col-12 text-center mt-3">
              <span className="text-other-login">Đăng nhập bằng:</span>
            </div>
            <div className="col-12 social-login">
              <i className="fa-brands fa-google-plus-g gogle"></i>
              <i className="fa-brands fa-facebook-f facebook"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    userLoginSuccess: (userInfor) =>
      dispatch(actions.userLoginSuccess(userInfor)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
