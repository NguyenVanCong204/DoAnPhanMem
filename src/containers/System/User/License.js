import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import HomeSelection from "../../HomeHeader/Section/HomeSelection";
import Slider from "react-slick";
import { push } from "connected-react-router";
import logo from "../../../assets/images/image.png";
import menu from "../../../assets/images/menu.png";
import "./License.scss";
import About from "../../HomeHeader/Section/About";

class License extends Component {
  constructor(props) {
    super(props);
    this.state = {
      licenseFileNames: ["", "", "", "", ""],
      selectedBusiness: "1",
    };
    this.fileInputRefs = Array.from({ length: 5 }, () => React.createRef());
  }
  handleBusinessChange = (event) => {
    let selectedValue = event.target.value;
    if (selectedValue !== "1") {
      alert("Cơ sở này đã có giấy phép ATVSTP");
    }
    this.setState({ selectedBusiness: event.target.value });
  };
  handleFileUpload = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const newFileNames = [...this.state.licenseFileNames];
      newFileNames[index] = file.name;
      this.setState({ licenseFileNames: newFileNames });
    }
  };
  handleRegister = () => {
    this.props.navigate("/register");
  };
  handleLogin = () => {
    this.props.navigate("/login");
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
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
        <div className="license-container">
          <div className="license-content">
            <h5>Đăng kí giấy phép An toàn vệ sinh thực phẩm</h5>
            <div className="business">
              <label>Cơ sở kinh doanh : </label>
              <div className="list-business">
                <select
                  style={{ height: "30px" }}
                  value={this.state.selectedBusiness}
                  onChange={this.handleBusinessChange}
                >
                  <option value="1">
                    CÔNG TY CỔ PHẦN DƯỢC PHẨM THIÊN NGUYÊN
                  </option>
                  <option value="2">CÔNG TY NƯỚC KHOÁNG HẢI CHÂU</option>
                  <option value="3">CÔNG TY TNHH SÔNG HÀN</option>
                </select>
              </div>
            </div>
            {this.state.selectedBusiness === "1" ? (
              <div className="single">
                {[
                  "Đơn đề nghị cấp giấy chứng nhận :",
                  "Bản thuyết minh cơ sở vật chất,\ntrang thiết bị dụng cụ :",
                  "Giấy lập luận kiến thức về\nan toàn vệ sinh thực phẩm :",
                  "Giấy phép kinh doanh :",
                  "Giấy chứng nhận đủ sức khỏe\ncủa cơ sở và nhân viên sản xuất :",
                ].map((label, index) => (
                  <div className="input-container" key={index}>
                    <label>
                      {label.split("\n").map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </label>
                    <input
                      type="text"
                      readOnly
                      value={this.state.licenseFileNames[index]}
                    />
                    <i
                      className="fa-solid fa-upload"
                      onClick={() => this.fileInputRefs[index].current.click()}
                    ></i>
                    <input
                      type="file"
                      ref={this.fileInputRefs[index]}
                      style={{ display: "none" }}
                      onChange={(e) => this.handleFileUpload(index, e)}
                    />
                  </div>
                ))}
                <button>Gửi đăng kí</button>
              </div>
            ) : (
              <div className="single">
                <div className="had-license"></div>
              </div>
            )}
          </div>
        </div>
        <About />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    lang: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(License);
