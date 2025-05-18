import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import HomeSelection from "../../HomeHeader/Section/HomeSelection";
import Slider from "react-slick";
import { push } from "connected-react-router";
import logo from "../../../assets/images/image.png";
import menu from "../../../assets/images/menu.png";
import "./AddInspectionSchedle.scss";
import DatePicker from "../../../components/Input/DatePicker";
import About from "../../HomeHeader/Section/About";

class AddInspectionSchedle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      yesterday: new Date(new Date().setDate(new Date().getDate() - 1)), // nếu bạn cần minDate
    };
  }

  handleStartDateChange = (date) => {
    this.setState({ startDate: date });
  };

  handleEndDateChange = (date) => {
    this.setState({ endDate: date });
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
        <div className="inspection-container">
          <div className="inspection-content">
            <span className="title">Thêm lịch thanh tra</span>
            <div className="search-purpose">
              <div className="list-business">
                <span>Mục đích thanh tra : </span>
                <select
                  style={{ height: "30px" }}
                  //   value={this.state.selectedBusiness}
                  //   onChange={this.handleBusinessChange}
                >
                  <option value="1">Thanh tra thường niên</option>
                  <option value="2">Thanh tra cấp giấy phép</option>
                </select>
                <div className="test-date">
                  <div className="date-start">
                    <span>Ngày bắt đầu : </span>
                    <DatePicker
                      selected={this.state.startDate}
                      onChange={this.handleStartDateChange}
                      className="form-control"
                      dateFormat="dd/MM/yyyy"
                      placeholderText="Chọn ngày bắt đầu"
                      minDate={this.state.yesterday}
                    />
                    <i className="fa-solid fa-calendar-days"></i>
                  </div>
                  <div className="date-end">
                    <span>Ngày kết thúc : </span>
                    <DatePicker
                      selected={this.state.endDate}
                      onChange={this.handleEndDateChange}
                      className="form-control"
                      dateFormat="dd/MM/yyyy"
                      placeholderText="Chọn ngày kết thúc"
                      minDate={this.state.yesterday}
                    />
                    <i className="fa-solid fa-calendar-days"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="title-search">
              <div className="title-table">Cơ sở kiểm tra</div>
              <div className="search">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input placeholder="Tìm kiếm cơ sở cần thanh tra" />
              </div>
            </div>
            <div className="table-schedule">
              <table className="TableManageUser">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Mã cơ sở</th>
                    <th>Tên cơ sở</th>
                    <th>Ngày thẩm định</th>
                    <th>Địa chỉ cơ sở</th>
                    <th></th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>123</td>
                    <td>CÔNG TY CỔ PHẦN DƯỢC PHẨM THIÊN NGUYÊN</td>
                    <td>11/05/2025</td>
                    <td>48 Cao Thắng, Hải Châu, Đà Nẵng</td>
                    <td>
                      <input type="checkbox"></input>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>456</td>
                    <td>CÔNG TY NƯỚC KHOÁNG HẢI CHÂU</td>
                    <td>11/05/2025</td>
                    <td>48 Cao Thắng, Hải Châu, Đà Nẵng</td>
                    <td>
                      <input type="checkbox"></input>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>123456</td>
                    <td>CÔNG TY TNHH SÔNG HÀN</td>
                    <td>11/05/2025</td>
                    <td>48 Cao Thắng, Hải Châu, Đà Nẵng</td>
                    <td>
                      <input type="checkbox"></input>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>123123</td>
                    <td>CÔNG TY CỔ PHẦN DƯỢC PHẨM THIÊN NGUYÊN</td>
                    <td>11/05/2025</td>
                    <td>48 Cao Thắng, Hải Châu, Đà Nẵng</td>
                    <td>
                      <input type="checkbox"></input>
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>123</td>
                    <td>CÔNG TY CỔ PHẦN DƯỢC PHẨM THIÊN NGUYÊN</td>
                    <td>11/05/2025</td>
                    <td>48 Cao Thắng, Hải Châu, Đà Nẵng</td>
                    <td>
                      <input type="checkbox"></input>
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>123</td>
                    <td>CÔNG TY CỔ PHẦN DƯỢC PHẨM THIÊN NGUYÊN</td>
                    <td>11/05/2025</td>
                    <td>48 Cao Thắng, Hải Châu, Đà Nẵng</td>
                    <td>
                      <input type="checkbox"></input>
                    </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>123</td>
                    <td>CÔNG TY CỔ PHẦN DƯỢC PHẨM THIÊN NGUYÊN</td>
                    <td>11/05/2025</td>
                    <td>48 Cao Thắng, Hải Châu, Đà Nẵng</td>
                    <td>
                      <input type="checkbox"></input>
                    </td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>123</td>
                    <td>CÔNG TY CỔ PHẦN DƯỢC PHẨM THIÊN NGUYÊN</td>
                    <td>11/05/2025</td>
                    <td>48 Cao Thắng, Hải Châu, Đà Nẵng</td>
                    <td>
                      <input type="checkbox"></input>
                    </td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>123</td>
                    <td>CÔNG TY CỔ PHẦN DƯỢC PHẨM THIÊN NGUYÊN</td>
                    <td>11/05/2025</td>
                    <td>48 Cao Thắng, Hải Châu, Đà Nẵng</td>
                    <td>
                      <input type="checkbox"></input>
                    </td>
                  </tr>
                </thead>
              </table>
            </div>
            <div className="personnel-check">
              <span>Cán bộ phụ trách : </span>
              <select style={{ height: "30px" }}>
                <option value="1">Nguyễn Văn Công</option>
                <option value="2">Nguyễn Văn Công 1</option>
                <option value="3">Nguyễn Văn Công 2</option>
                <option value="4">Nguyễn Văn Công 3</option>
              </select>
              <button className="add-schedule1">Thêm lịch</button>
            </div>
            <div className="note">
              <span>Ghi chú : </span>
              <textarea></textarea>
            </div>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddInspectionSchedle);
