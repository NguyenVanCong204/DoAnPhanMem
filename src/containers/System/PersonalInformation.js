import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import "./PersonalInformation.scss";
import logo from "../../assets/images/image.png";
import menu from "../../assets/images/menu.png";
import HomeSelection from "../HomeHeader/Section/HomeSelection";
import { connect } from "react-redux";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import About from "../HomeHeader/Section/About";
import { push } from "connected-react-router";
class PersonalInformation extends Component {
  handleRegister = () => {
    this.props.navigate("/register");
  };
  handleLogin = () => {
    this.props.navigate("/login");
  };
  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <div className="home-header-container">
          <div className="sticky-wrapper">
            <div className="home-header-content">
              <div className="left-content">
                <img className="menu" src={menu} />
                <img className="logo" src={logo} />
                <div className="header-logo"></div>
              </div>
              <div className="center-content">
                <button className="login" onClick={() => this.handleLogin()}>
                  đăng nhập
                </button>
                <button
                  className="regient"
                  onClick={() => this.handleRegister()}
                >
                  đăng kí
                </button>
              </div>
              <div className="right-content">
                <div className="support">
                  <i className="fa-solid fa-circle-question"></i>
                  <span>Hỗ trợ</span>
                </div>
              </div>
            </div>
            <HomeSelection />
          </div>
        </div>
        <div className="body-container">
          <div className="centent-right">
            <div className="title">Cập nhập thông tin cá nhân</div>
            <div className="body">
              <ul>
                <li>
                  <b>Họ và tên : </b>Nguyễn Văn Công
                </li>
                <li>
                  <b>Ngày sinh : </b>25/06/2004
                </li>
                <li>
                  <b>Email : </b>congnguyenvan522@gmail.com
                </li>
                <li>
                  <b>Địa chỉ : </b>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nhập địa chỉ của bạn"
                  />
                </li>
                <li>
                  <b>Số điện thoại : </b>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nhập số điện thoại của bạn"
                  />
                </li>
                <li>
                  <FormControl>
                    <label>Giới tính:</label>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                      onChange={this.handleGenderChange}
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Nữ"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Nam"
                      />
                    </RadioGroup>
                  </FormControl>
                </li>
                <li>
                  <b>Số CCCD/CMND : </b>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nhập Số CCCD/CMND  của bạn"
                  />
                </li>
              </ul>
              <button className="btnUpdate">Cập nhập</button>
            </div>
          </div>
          <div className="content-left">
            <div className="title">Cập nhập mật khẩu</div>
            <div className="body">
              <ul>
                <li>
                  <b>Mật khẩu cũ : </b>
                  <div className="custom-input-password">
                    <input type="password" className="form-control" />
                    <i className="fa-regular fa-eye" />
                  </div>
                </li>
                <li>
                  <b>Mật khẩu mới : </b>
                  <div className="custom-input-password">
                    <input type="password" className="form-control" />
                    <i className="fa-regular fa-eye" />
                  </div>
                </li>
                <li>
                  <b>Nhập lại mật khẩu mới : </b>
                  <div className="custom-input-password">
                    <input type="password" className="form-control" />
                    <i className="fa-regular fa-eye" />
                  </div>
                </li>
              </ul>
              <button className="btnUpdatePassword">Thay đổi mật khẩu</button>
            </div>
          </div>
        </div>
        <About />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return { navigate: (path) => dispatch(push(path)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonalInformation);
