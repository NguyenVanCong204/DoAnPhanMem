import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import HomeSelection from "../../HomeHeader/Section/HomeSelection";
import Slider from "react-slick";
import logo from "../../../assets/images/image.png";
import menu from "../../../assets/images/menu.png";
import "./UserManage.scss";
import ModalEditUserManage from "./ModelEditUserManage";
import ModalAddUserManage from "./ModelAddUserManage";
import About from "../../HomeHeader/Section/About";
import { push } from "connected-react-router";

class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenModalUser: false,
      isOpenModalEditUser: false,
    };
  }
  handleRegister = () => {
    this.props.navigate("/register");
  };
  handleLogin = () => {
    this.props.navigate("/login");
  };
  handleAddNewUser = () => {
    this.setState({
      isOpenModalUser: true,
    });
  };
  handleEditUser = () => {
    this.setState({
      isOpenModalEditUser: true,
    });
  };
  toggleUserModal = () => {
    this.setState({
      isOpenModalUser: !this.state.isOpenModalUser,
    });
  };
  toggleEditUserModal = () => {
    this.setState({
      isOpenModalEditUser: !this.state.isOpenModalEditUser,
    });
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
        <div className="User-container">
          <ModalAddUserManage
            isOpen={this.state.isOpenModalUser}
            toggleFromParent={this.toggleUserModal}
          />
          <ModalEditUserManage
            isOpen={this.state.isOpenModalEditUser}
            toggleFromParent={this.toggleEditUserModal}
          />
          <h5>Danh sách cán bộ</h5>
          <button onClick={() => this.handleAddNewUser()}>Thêm cán bộ</button>
          <table className="TableManageUser">
            <tbody>
              <tr>
                <th>STT</th>
                <th>Tên cán bộ</th>
                <th>Số điện thoại</th>
                <th>Căn cước công dân</th>
                <th>Giới tính</th>
                <th>Chức vụ</th>
                <th>Chức năng</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Nguyễn Văn Công</td>
                <td>0765421908</td>
                <td>33442106754598</td>
                <td>Nam</td>
                <td>Trưởng ban quản lý</td>
                <td>
                  <button
                    className="update"
                    onClick={() => this.handleEditUser()}
                  >
                    Sửa
                  </button>
                  <button
                    className="delete"
                    onClick={() => {
                      const confirmDelete = window.confirm(
                        "Bạn có chắc chắn muốn xóa không?"
                      );
                    }}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Nguyễn Văn Công 1</td>
                <td>0765421908</td>
                <td>33442106754598</td>
                <td>Nữ</td>
                <td>Cán bộ thanh tra</td>
                <td>
                  <button className="update">Sửa</button>
                  <button className="delete">Xóa</button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Nguyễn Văn Công 2</td>
                <td>0765421908</td>
                <td>33442106754598</td>
                <td>Nữ</td>
                <td>Cán bộ quản lý hồ sơ</td>
                <td>
                  <button className="update">Sửa</button>
                  <button className="delete">Xóa</button>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Nguyễn Văn Công 3</td>
                <td>0765421908</td>
                <td>33442106754598</td>
                <td>Nam</td>
                <td>Trưởng ban quản lý</td>
                <td>
                  <button className="update">Sửa</button>
                  <button className="delete">Xóa</button>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>Nguyễn Văn Công 4</td>
                <td>0765421908</td>
                <td>33442106754598</td>
                <td>Nam</td>
                <td>Trưởng ban quản lý</td>
                <td>
                  <button className="update">Sửa</button>
                  <button className="delete">Xóa</button>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>Nguyễn Văn Công 5</td>
                <td>0765421908</td>
                <td>33442106754598</td>
                <td>Nữ</td>
                <td>Trưởng ban quản lý</td>
                <td>
                  <button className="update">Sửa</button>
                  <button className="delete">Xóa</button>
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td>Nguyễn Văn Công 6</td>
                <td>0765421908</td>
                <td>33442106754598</td>
                <td>Nam</td>
                <td>Trưởng ban quản lý</td>
                <td>
                  <button className="update">Sửa</button>
                  <button className="delete">Xóa</button>
                </td>
              </tr>
              <tr>
                <td>8</td>
                <td>Nguyễn Văn Công 7</td>
                <td>0765421908</td>
                <td>33442106754598</td>
                <td>Nam</td>
                <td>Trưởng ban quản lý</td>
                <td>
                  <button className="update">Sửa</button>
                  <button className="delete">Xóa</button>
                </td>
              </tr>
              <tr>
                <td>9</td>
                <td>Nguyễn Văn Công 8</td>
                <td>0765421908</td>
                <td>33442106754598</td>
                <td>Nam</td>
                <td>Trưởng ban quản lý</td>
                <td>
                  <button className="update">Sửa</button>
                  <button className="delete">Xóa</button>
                </td>
              </tr>
            </tbody>
          </table>
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
  return { navigate: (path) => dispatch(push(path)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
