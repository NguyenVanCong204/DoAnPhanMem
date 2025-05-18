import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";
import logo from "../../assets/images/image.png";
import menu from "../../assets/images/menu.png";
import { FormattedMessage } from "react-intl";
import { push } from "connected-react-router";
import { languages } from "../../utils";
import { changeLanguageApp } from "../../store/actions";
import { withRouter } from "react-router";
import HomeSelection from "../HomeHeader/Section/HomeSelection";
import HomeBusiness from "../HomeHeader/Section/HomeBusiness";
import About from "../HomeHeader/Section/About";

class HomeHeader extends Component {
  handleLogin = () => {
    this.props.navigate("/login");
  };
  handleLicense = () => {
    this.props.navigate("/license");
  };
  handleLicenseApproval = () => {
    this.props.navigate("/licenseapproval");
  };
  handleInspectionSchedule = () => {
    this.props.navigate("/inspectionschedule");
  };
  handleRegister = () => {
    this.props.navigate("/register");
  };
  handleShop = () => {
    this.props.navigate("/shop");
  };
  handleCotegoryError = () => {
    this.props.navigate("/categoryerror");
  };
  render() {
    let language = this.props.lang;
    console.log(language);
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

          {this.props.isShowBanner === true && (
            <div className="home-header-banner">
              <div className="content-up">
                <div className="title1">
                  Trang quản lí an toàn vệ sinh thực phẩm
                </div>
                <div className="title2">Thành phố Đà Nẵng</div>
                <div className="search">
                  <i className="fa-solid fa-magnifying-glass"></i>
                  <input placeholder="Tìm kiếm cơ sở kinh doanh" />
                </div>
              </div>
              <div className="content-down">
                <div className="options">
                  <div className="option-child">
                    <div className="icon-child">
                      <i className="fa-solid fa-hospital"></i>
                    </div>
                    <div className="text-child">Kiểm tra vệ sinh cơ sở</div>
                  </div>
                  <div className="option-child">
                    <div className="icon-child">
                      <i className="fa-solid fa-id-badge"></i>
                    </div>
                    <div
                      className="text-child"
                      onClick={() => this.handleLicenseApproval()}
                    >
                      Duyệt giấy phép ATVSTP
                    </div>
                  </div>
                  <div className="option-child">
                    <div className="icon-child">
                      <i className="fa-solid fa-bug"></i>
                    </div>
                    <div
                      className="text-child"
                      onClick={() => this.handleCotegoryError()}
                    >
                      Danh mục lỗi xử phạt
                    </div>
                  </div>
                  <div className="option-child">
                    <div className="icon-child">
                      <i className="fa-regular fa-calendar-days"></i>
                    </div>
                    <div
                      className="text-child"
                      onClick={() => this.handleInspectionSchedule()}
                    >
                      Lịch thanh tra
                    </div>
                  </div>
                  <div className="option-child">
                    <div className="icon-child">
                      <i className="fa-solid fa-id-card"></i>
                    </div>
                    <div
                      className="text-child"
                      onClick={() => this.handleLicense()}
                    >
                      Giấy phép ATVSTP
                    </div>
                  </div>
                  <div className="option-child">
                    <div className="icon-child">
                      <i className="fa-solid fa-shop"></i>
                    </div>
                    <div
                      className="text-child"
                      onClick={() => this.handleShop()}
                    >
                      Cơ sở kinh doanh
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <HomeBusiness />
          {/* <div className="line2"></div> */}
          <About />
        </div>
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
    changLanguageAppRedux: (language) => dispatch(changeLanguageApp(language)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomeHeader)
);
