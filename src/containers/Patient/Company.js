import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import logo from "../../assets/images/image.png";
import menu from "../../assets/images/menu.png";
import HomeSelection from "../HomeHeader/Section/HomeSelection";
import Slider from "react-slick";
import "./Company.scss";
import hinh1 from "../../assets/images/Làm-thế-nào-mở-cửa-hàng-kinh-doanh-thực-phẩm-sạch-e1504685331947.jpg";
import hinh2 from "../../assets/images/thuc pham sach.gif";
import About from "../HomeHeader/Section/About";

class Company extends Component {
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

          <div className="InfomationCompany">
            <div className="InforLeft">
              <div className="title">
                CÔNG TY CỔ PHẦN DƯỢC PHẨM THIÊN NGUYÊN
              </div>
              <div className="body">
                <ul>
                  <li>
                    <b>Chủ sở hữu : </b>Nguyễn Văn Công
                  </li>
                  <li>
                    <b>Số điện thoại : </b>0987654321
                  </li>
                  <li>
                    <b>Email : </b>congnguyenvan522@gmail.com
                  </li>
                  <li>
                    <b>Loại hình kinh doanh : </b>Kinh doanh thực phẩm
                  </li>
                  <li>
                    <b>Ngày thành lập : </b>29-04-2025
                  </li>
                  <li>
                    <b>Địa chỉ : </b>48 Cao Thắng, Hải Châu, Đà Nẵng
                  </li>
                </ul>
              </div>
            </div>
            <div className="InforRight">
              <div className="title">HÌNH ẢNH TỔNG QUAN</div>
              <div className="hinhminhhoa">
                <img className="hinh1" src={hinh1} />
                <img className="hinh2" src={hinh2} />
              </div>
            </div>
          </div>
          <div className="complaints">
            <b className="reflect">Phản ánh, khiếu nại</b>
            <div className="body">
              <ul>
                <li>
                  <b>Nội dung phản ánh : </b>
                  <textarea></textarea>
                </li>
                <li>
                  <b>Hình ảnh minh chứng : </b>
                  <input className="upload"></input>
                  <i className="fa-solid fa-upload"></i>
                </li>
                <li>
                  <b>Thời gian : </b>
                  <input className="calanda"></input>
                  <i className="fa-solid fa-calendar-days"></i>
                </li>
              </ul>
            </div>
            <button>Gửi phản ánh</button>
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
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Company);
