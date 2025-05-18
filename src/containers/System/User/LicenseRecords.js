import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import HomeSelection from "../../HomeHeader/Section/HomeSelection";
import Slider from "react-slick";
import { push } from "connected-react-router";
import logo from "../../../assets/images/image.png";
import menu from "../../../assets/images/menu.png";
import "./LicenseRecords.scss";
import hinh1 from "../../../assets/images/Làm-thế-nào-mở-cửa-hàng-kinh-doanh-thực-phẩm-sạch-e1504685331947.jpg";
import hinh2 from "../../../assets/images/thuc pham sach.gif";

class LicenseRecords extends Component {
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
        <div className="Information-containt row">
          <h5 className="title-license">Thông tin hồ sơ</h5>
          <div className="form-group col-6">
            <label>Tên cơ sở kinh doanh</label>
            <input
              readOnly
              placeholder="CÔNG TY CỔ PHẦN DƯỢC PHẨM THIÊN NGUYÊN"
            ></input>
          </div>
          <div className="form-group col-6">
            <label>Ngày đăng ký</label>
            <input readOnly placeholder="05/05/2025"></input>
          </div>
          <div className="form-group col-6">
            <label>Địa chỉ</label>
            <input
              readOnly
              placeholder="48 Cao Thắng, Hải Châu, Đà Nẵng"
            ></input>
          </div>
          <div className="form-group col-6">
            <label>Giấy lập luận kiến thức về an toàn vệ sinh thực phẩm</label>
            <input className="viewfile" value="File1.pdf"></input>
          </div>
          <div className="form-group col-6">
            <label>Tên chủ cơ sở</label>
            <input readOnly placeholder="Nguyễn Văn Công"></input>
          </div>
          <div className="form-group col-6">
            <label>
              Giấy chứng nhận đủ sức khỏe của cơ sở và nhân viên sản xuất
            </label>
            <input className="viewfile" value="File2.pdf"></input>
          </div>
          <div className="form-group col-6">
            <label>Ngày thẩm định</label>
            <input readOnly placeholder="12/05/2025"></input>
          </div>
          <div className="form-group col-6">
            <label>Bản thuyết trình về cơ sở vật chất</label>
            <input className="viewfile" value="File3.pdf"></input>
          </div>
          <div className="form-group col-6">
            <label>Cán bộ thanh tra</label>
            <input readOnly placeholder="Nguyễn Văn Công"></input>
          </div>
          <div className="form-group col-6">
            <label>Đơn đề nghị cấp giấy phép</label>
            <input className="viewfile" value="File4.pdf"></input>
          </div>
          <div className="form-group col-6">
            <label>Hình ảnh kiểm tra</label>
            <div className="view-image">
              <img className="hinh1" src={hinh1} />
              <img className="hinh2" src={hinh2} />
            </div>
          </div>
          <div className="form-group col-6">
            <label>Giấy phép kinh doanh</label>
            <input className="viewfile" value="File5.pdf"></input>
          </div>
          <div className="form-group col-12">
            <button className="browse-profile">Duyệt hồ sơ</button>
          </div>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LicenseRecords);
