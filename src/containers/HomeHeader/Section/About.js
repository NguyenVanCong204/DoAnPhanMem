import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";

class About extends Component {
  render() {
    return (
      <div className="section-share section-about">
        <div className="section-about-header"></div>
        <div className="section-about-content">
          <div className="content-left">
            <ul>
              <li>
                <h5>
                  ĐƠN VỊ QUẢN LÝ: CHI CỤC AN TOÀN VỆ SINH THỰC PHẨM CHI CỤC
                  ATVSTP
                </h5>
              </li>
              <li>
                <i class="fa-solid fa-location-dot"></i>
                <span>
                  <b>Địa chỉ : </b>48 Cao Thắng, Thanh Bình, Hải Châu, Đà Nẵng
                </span>
              </li>
              <li>
                <i class="fa-solid fa-phone"></i>
                <span>
                  <b>Điện Thoại: </b>0987654321
                </span>
              </li>
              <li>
                <i class="fa-solid fa-envelope"></i>
                <span>
                  <b>Email: </b>
                </span>
                congnguyenvan522@gmail.com
              </li>
              <li>
                <i class="fa-solid fa-user"></i>
                <span>
                  <b>Cơ quan chủ quản: </b>CHI CỤC AN TOÀN VỆ SINH THỰC PHẨM CHI
                  CỤC ATVSTP
                </span>
              </li>
              <li></li>
            </ul>
          </div>
          <div className="container-right">
            <div className="content-right">
              <div className="help">HỖ TRỢ</div>
              <ul>
                <li>Hướng dẫn sử dụng</li>
                <li>Hỗ trợ</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
