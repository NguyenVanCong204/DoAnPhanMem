import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeSelection.scss";
import { FormattedMessage } from "react-intl";
import { push } from "connected-react-router";
import Slider from "react-slick";

class HomeSelection extends Component {
  handleEditUser = () => {
    this.props.navigate("/user");
  };
  handleGoHome = () => {
    this.props.navigate("/home");
  };
  render() {
    return (
      <div className="section-homeselection">
        <div className="section-container">
          <div className="section-header">
            <ul className="menu-top">
              <li onClick={() => this.handleGoHome()}>
                <a>
                  <i className="fa-solid fa-house"></i> Trang chủ
                </a>
              </li>
              <li>
                <a>Giới thiệu</a>
              </li>
              <li>
                <a>Tin tức - Sự kiện</a>
              </li>
              <li>
                <a>Thanh tra - Kiểm tra</a>
              </li>
              <li>
                <a onClick={() => this.handleEditUser()}>Cá nhân</a>
              </li>
            </ul>
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
  return { navigate: (path) => dispatch(push(path)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeSelection);
