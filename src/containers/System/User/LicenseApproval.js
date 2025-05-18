import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import HomeSelection from "../../HomeHeader/Section/HomeSelection";
import Slider from "react-slick";
import { push } from "connected-react-router";
import logo from "../../../assets/images/image.png";
import menu from "../../../assets/images/menu.png";
import "./LicenseApproval.scss";
import About from "../../HomeHeader/Section/About";

class LicenseApproval extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: "1",
    };
  }
  handleLicenseRecords = () => {
    this.props.navigate("/licenserecords");
  };
  handleLicenseApprovalChange = (event) => {
    this.setState({
      check: event.target.value,
    });
  };
  handleEditCategoryError = () => {
    this.setState({
      nameerror: "Nguyên liệu không rõ nguồn gốc, không có hóa đơn chứng từ",
      priceerror: "3.000.000",
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
        <div className="approval-container">
          <h5>Duyệt đăng kí giấy phép ATVSTP</h5>
          <div className="approval-content">
            <div className="title-status">Tình trạng giấy phép : </div>
            <div className="status-list">
              <select
                style={{ height: "30px" }}
                value={this.state.check}
                onChange={this.handleLicenseApprovalChange}
              >
                <option value="1">Chưa duyệt</option>
                <option value="2">Đã duyệt</option>
              </select>
            </div>
          </div>
          {this.state.check === "1" ? (
            <div className="table-approval">
              <table className="TableManageUser">
                <tbody>
                  <tr>
                    <th>STT</th>
                    <th>Tên cơ sở kinh doanh</th>
                    <th>Địa chỉ</th>
                    <th>Tên chủ cơ sở</th>
                    <th>Ngày thẩm định</th>
                    <th>Cán bộ thanh tra</th>
                    <th>Ngày đăng kí</th>
                    <th>Tình trạng</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>CÔNG TY CỔ PHẦN DƯỢC PHẨM THIÊN NGUYÊN</td>
                    <td>48 Cao Thắng, Hải Châu, Đà Nẵng</td>
                    <td>Nguyễn Văn Công</td>
                    <td>12/05/2025</td>
                    <td>Nguyễn Văn A</td>
                    <td>05/05/2025</td>
                    <td>
                      <span onClick={() => this.handleLicenseRecords()}>
                        Chưa duyệt
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>CÔNG TY NƯỚC KHOÁNG HẢI CHÂU</td>
                    <td>49 Cao Thắng, Hải Châu, Đà Nẵng</td>
                    <td>Nguyễn Văn Hiếu</td>
                    <td>20/05/2025</td>
                    <td>Nguyễn Văn A</td>
                    <td>11/05/2025</td>
                    <td>
                      <span>Chưa duyệt</span>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>CÔNG TY TNHH SÔNG HÀN</td>
                    <td>50 Cao Thắng, Hải Châu, Đà Nẵng</td>
                    <td>Nguyễn Văn Quyết</td>
                    <td>15/05/2025</td>
                    <td>Nguyễn Văn A</td>
                    <td>13/05/2025</td>
                    <td>
                      <span>Chưa duyệt</span>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>CÔNG TY CỔ PHẦN DƯỢC PHẨM THIÊN NGUYÊN</td>
                    <td>48 Cao Thắng, Hải Châu, Đà Nẵng</td>
                    <td>Nguyễn Văn Công</td>
                    <td>12/05/2025</td>
                    <td>Nguyễn Văn A</td>
                    <td>05/05/2025</td>
                    <td>
                      <span>Chưa duyệt</span>
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>CÔNG TY CỔ PHẦN DƯỢC PHẨM THIÊN NGUYÊN</td>
                    <td>48 Cao Thắng, Hải Châu, Đà Nẵng</td>
                    <td>Nguyễn Văn Công</td>
                    <td>12/05/2025</td>
                    <td>Nguyễn Văn A</td>
                    <td>05/05/2025</td>
                    <td>
                      <span>Chưa duyệt</span>
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>CÔNG TY CỔ PHẦN DƯỢC PHẨM THIÊN NGUYÊN</td>
                    <td>48 Cao Thắng, Hải Châu, Đà Nẵng</td>
                    <td>Nguyễn Văn Công</td>
                    <td>12/05/2025</td>
                    <td>Nguyễn Văn A</td>
                    <td>05/05/2025</td>
                    <td>
                      <span>Chưa duyệt</span>
                    </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>CÔNG TY CỔ PHẦN DƯỢC PHẨM THIÊN NGUYÊN</td>
                    <td>48 Cao Thắng, Hải Châu, Đà Nẵng</td>
                    <td>Nguyễn Văn Công</td>
                    <td>12/05/2025</td>
                    <td>Nguyễn Văn A</td>
                    <td>05/05/2025</td>
                    <td>
                      <span>Chưa duyệt</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <div className="table-approval">
              <table className="TableManageUserSuccess">
                <tbody>
                  <tr>
                    <th>STT</th>
                    <th>Tên cơ sở kinh doanh</th>
                    <th>Địa chỉ</th>
                    <th>Tên chủ cơ sở</th>
                    <th>Ngày thẩm định</th>
                    <th>Cán bộ thanh tra</th>
                    <th>Ngày đăng kí</th>
                    <th>Tình trạng</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>CÔNG TY CỔ PHẦN DƯỢC PHẨM THIÊN NGUYÊN</td>
                    <td>48 Cao Thắng, Hải Châu, Đà Nẵng</td>
                    <td>Nguyễn Văn Công</td>
                    <td>12/05/2025</td>
                    <td>Nguyễn Văn A</td>
                    <td>05/05/2025</td>
                    <td>
                      <span>Đã duyệt</span>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>CÔNG TY CỔ PHẦN DƯỢC PHẨM THIÊN NGUYÊN</td>
                    <td>48 Cao Thắng, Hải Châu, Đà Nẵng</td>
                    <td>Nguyễn Văn Công</td>
                    <td>12/05/2025</td>
                    <td>Nguyễn Văn A</td>
                    <td>05/05/2025</td>
                    <td>
                      <span>Đã duyệt</span>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>CÔNG TY CỔ PHẦN DƯỢC PHẨM THIÊN NGUYÊN</td>
                    <td>48 Cao Thắng, Hải Châu, Đà Nẵng</td>
                    <td>Nguyễn Văn Công</td>
                    <td>12/05/2025</td>
                    <td>Nguyễn Văn A</td>
                    <td>05/05/2025</td>
                    <td>
                      <span>Đã duyệt</span>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>CÔNG TY CỔ PHẦN DƯỢC PHẨM THIÊN NGUYÊN</td>
                    <td>48 Cao Thắng, Hải Châu, Đà Nẵng</td>
                    <td>Nguyễn Văn Công</td>
                    <td>12/05/2025</td>
                    <td>Nguyễn Văn A</td>
                    <td>05/05/2025</td>
                    <td>
                      <span>Đã duyệt</span>
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>CÔNG TY CỔ PHẦN DƯỢC PHẨM THIÊN NGUYÊN</td>
                    <td>48 Cao Thắng, Hải Châu, Đà Nẵng</td>
                    <td>Nguyễn Văn Công</td>
                    <td>12/05/2025</td>
                    <td>Nguyễn Văn A</td>
                    <td>05/05/2025</td>
                    <td>
                      <span>Đã duyệt</span>
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>CÔNG TY CỔ PHẦN DƯỢC PHẨM THIÊN NGUYÊN</td>
                    <td>48 Cao Thắng, Hải Châu, Đà Nẵng</td>
                    <td>Nguyễn Văn Công</td>
                    <td>12/05/2025</td>
                    <td>Nguyễn Văn A</td>
                    <td>05/05/2025</td>
                    <td>
                      <span>Đã duyệt</span>
                    </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>CÔNG TY CỔ PHẦN DƯỢC PHẨM THIÊN NGUYÊN</td>
                    <td>48 Cao Thắng, Hải Châu, Đà Nẵng</td>
                    <td>Nguyễn Văn Công</td>
                    <td>12/05/2025</td>
                    <td>Nguyễn Văn A</td>
                    <td>05/05/2025</td>
                    <td>
                      <span>Đã duyệt</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
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

export default connect(mapStateToProps, mapDispatchToProps)(LicenseApproval);
