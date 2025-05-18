import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import HomeSelection from "../../HomeHeader/Section/HomeSelection";
import Slider from "react-slick";
import logo from "../../../assets/images/image.png";
import menu from "../../../assets/images/menu.png";
import "./UserBusiness.scss";
import ModalEditUserBusiness from "./ModalEditUserBusiness";
import ModalAddUserBusiness from "./ModalAddUserBusiness";
import About from "../../HomeHeader/Section/About";

class UserBusiness extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenModalUser: false,
      isOpenModalEditUser: false,
    };
  }
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
        <div className="Business-container">
          <ModalAddUserBusiness
            isOpen={this.state.isOpenModalUser}
            toggleFromParent={this.toggleUserModal}
          />
          <ModalEditUserBusiness
            isOpen={this.state.isOpenModalEditUser}
            toggleFromParent={this.toggleEditUserModal}
          />
          <h5>Cập nhập thông tin cơ sở kinh doanh</h5>
          <button onClick={() => this.handleAddNewUser()}>Thêm cơ sở</button>
          <table className="TableManageUser">
            <tbody>
              <tr>
                <th>STT</th>
                <th>Tên cơ sở</th>
                <th>Địa chỉ</th>
                <th>Số điện thoại</th>
                <th>Email</th>
                <th>Tình trạng giấy phép</th>
                <th>Loại hình kinh doanh</th>
                <th>Chức năng</th>
              </tr>
              <tr>
                <td>1</td>
                <td>CÔNG TY CỔ PHẦN DƯỢC PHẨM THIÊN NGUYÊN</td>
                <td>48 Cao Thắng, Hải Châu, Đà Nẵng</td>
                <td>098765</td>
                <td>cong@gmail.com</td>
                <td>Đạt</td>
                <td>Thực phẩm</td>
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
                <td>CÔNG TY NƯỚC KHOÁNG HẢI CHÂU</td>
                <td>49 Cao Thắng, Hải Châu, Đà Nẵng</td>
                <td>098765</td>
                <td>cong@gmail.com</td>
                <td>Không đạt</td>
                <td>Đồ uống</td>
                <td>
                  <button className="update">Sửa</button>
                  <button className="delete">Xóa</button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>CÔNG TY TNHH SÔNG HÀN</td>
                <td>50 Cao Thắng, Hải Châu, Đà Nẵng</td>
                <td>098765</td>
                <td>cong@gmail.com</td>
                <td>Không đạt</td>
                <td>Thực phẩm</td>
                <td>
                  <button className="update">Sửa</button>
                  <button className="delete">Xóa</button>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>CÔNG TY CỔ PHẦN DƯỢC PHẨM THIÊN NGUYÊN</td>
                <td>51 Cao Thắng, Hải Châu, Đà Nẵng</td>
                <td>098765</td>
                <td>cong@gmail.com</td>
                <td>Đạt</td>
                <td>Thực phẩm</td>
                <td>
                  <button className="update">Sửa</button>
                  <button className="delete">Xóa</button>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>CÔNG TY CỔ PHẦN DƯỢC PHẨM THIÊN NGUYÊN</td>
                <td>52 Cao Thắng, Hải Châu, Đà Nẵng</td>
                <td>098765</td>
                <td>cong@gmail.com</td>
                <td>Đạt</td>
                <td>Thực phẩm</td>
                <td>
                  <button className="update">Sửa</button>
                  <button className="delete">Xóa</button>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>CÔNG TY CỔ PHẦN DƯỢC PHẨM THIÊN NGUYÊN</td>
                <td>53 Cao Thắng, Hải Châu, Đà Nẵng</td>
                <td>098765</td>
                <td>cong@gmail.com</td>
                <td>Đạt</td>
                <td>Thực phẩm</td>
                <td>
                  <button className="update">Sửa</button>
                  <button className="delete">Xóa</button>
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td>CÔNG TY CỔ PHẦN DƯỢC PHẨM THIÊN NGUYÊN</td>
                <td>54 Cao Thắng, Hải Châu, Đà Nẵng</td>
                <td>098765</td>
                <td>cong@gmail.com</td>
                <td>Đạt</td>
                <td>Thực phẩm</td>
                <td>
                  <button className="update">Sửa</button>
                  <button className="delete">Xóa</button>
                </td>
              </tr>
              <tr>
                <td>8</td>
                <td>CÔNG TY CỔ PHẦN DƯỢC PHẨM THIÊN NGUYÊN</td>
                <td>55 Cao Thắng, Hải Châu, Đà Nẵng</td>
                <td>098765</td>
                <td>cong@gmail.com</td>
                <td>Đạt</td>
                <td>Thực phẩm</td>
                <td>
                  <button className="update">Sửa</button>
                  <button className="delete">Xóa</button>
                </td>
              </tr>
              <tr>
                <td>9</td>
                <td>CÔNG TY CỔ PHẦN DƯỢC PHẨM THIÊN NGUYÊN</td>
                <td>56 Cao Thắng, Hải Châu, Đà Nẵng</td>
                <td>098765</td>
                <td>cong@gmail.com</td>
                <td>Đạt</td>
                <td>Thực phẩm</td>
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
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserBusiness);
