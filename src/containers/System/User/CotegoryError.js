import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import HomeSelection from "../../HomeHeader/Section/HomeSelection";
import Slider from "react-slick";
import { push } from "connected-react-router";
import logo from "../../../assets/images/image.png";
import menu from "../../../assets/images/menu.png";
import "./CotegoryError.scss";
import About from "../../HomeHeader/Section/About";

class CotegoryError extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameerror: "",
      priceerror: "",
    };
  }
  handleEditCategoryError = () => {
    this.setState({
      nameerror: "Nguyên liệu không rõ nguồn gốc, không có hóa đơn chứng từ",
      priceerror: "3.000.000",
    });
  };
  handleOnchangePriceerror = (e) => {
    this.setState({
      priceerror: e.target.value,
    });
  };
  handleOnChangeCategoryError = (e) => {
    this.setState({
      nameerror: e.target.value,
    });
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
        <div className="CategoryError-container">
          <h5>Danh mục lỗi xử phạt</h5>
          <div className="category-content">
            <div className="title-add-error">Thêm lỗi xử phạt</div>
            <div className="category-error">
              <div className="name-error">
                <span>Tên lỗi : </span>
                <input
                  type="text"
                  value={this.state.nameerror}
                  onChange={(e) => this.handleOnChangeCategoryError(e)}
                ></input>
              </div>
              <div className="price-error">
                <span>Tiền phạt : </span>
                <input
                  type="text"
                  value={this.state.priceerror}
                  onChange={(e) => this.handleOnchangePriceerror(e)}
                ></input>{" "}
                VND
              </div>
              <button>Thêm lỗi</button>
            </div>
          </div>
          <table className="TableManageUser">
            <tbody>
              <tr>
                <th>STT</th>
                <th>Tên lỗi</th>
                <th>Tiền phạt</th>
                <th>Chức năng</th>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  Nguyên liệu không rõ nguồn gốc, không có hóa đơn chứng từ
                </td>
                <td>3.000.000 VNĐ</td>
                <td>
                  <button
                    className="update"
                    onClick={() => this.handleEditCategoryError()}
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
                <td>1</td>
                <td>
                  Sử dụng nguyên liệu hư hỏng, ôi thiu, mốc, hết hạn sử dụng
                </td>
                <td>5.000.000 VNĐ</td>
                <td>
                  <button className="update">Sửa</button>
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
                <td>Chế biến ở khu vực không đảm bảo vệ sinh</td>
                <td>3.000.000 VNĐ</td>
                <td>
                  <button className="update">Sửa</button>
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
                <td>3</td>
                <td>Dụng cụ bẩn, không phân biệt sống – chín</td>
                <td>1.000.000 VNĐ</td>
                <td>
                  <button className="update">Sửa</button>
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
                <td>4</td>
                <td>Dùng bao bì, thùng chứa không đảm bảo an toàn</td>
                <td>1.000.000 VNĐ</td>
                <td>
                  <button className="update">Sửa</button>
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
                <td>5</td>
                <td>Thiếu giấy xác nhận kiến thức an toàn thực phẩm</td>
                <td>3.000.000 VNĐ</td>
                <td>
                  <button className="update">Sửa</button>
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
                <td>6</td>
                <td>
                  Cơ sở không có giấy chứng nhận đủ điều kiện an toàn thực phẩm
                </td>
                <td>20.000.000 VNĐ</td>
                <td>
                  <button className="update">Sửa</button>
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
  return {
    navigate: (path) => dispatch(push(path)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CotegoryError);
