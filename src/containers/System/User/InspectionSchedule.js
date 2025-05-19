import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import HomeSelection from "../../HomeHeader/Section/HomeSelection";
import Slider from "react-slick";
import { push } from "connected-react-router";
import logo from "../../../assets/images/image.png";
import menu from "../../../assets/images/menu.png";
import "./InspectionSchedule.scss";
import { getInspectionSchedule } from "../../../services/userService";
import About from "../../HomeHeader/Section/About";

class InspectionSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scheduleList: [],
      checkValueSchedule: "0",
    };
  }
  async componentDidMount() {
    let defaultPurpose = "0";
    let response = await getInspectionSchedule(defaultPurpose);
    if (response && response.errCode === 0 && response.data) {
      const dataArray = Array.isArray(response.data)
        ? response.data
        : [response.data];
      this.setState({
        scheduleList: dataArray,
      });
    }
  }
  handleAddInspectionSchedule = () => {
    this.props.navigate("/addinspectionschedule");
  };
  handleRegister = () => {
    this.props.navigate("/register");
  };
  handleLogin = () => {
    this.props.navigate("/login");
  };
  handeScheduleChange = async (Event) => {
    let mucdich = Event.target.value;
    let response = await getInspectionSchedule(mucdich);
    if (response && response.errCode === 0 && response.data) {
      const dataArray = Array.isArray(response.data)
        ? response.data
        : [response.data];
      this.setState({
        scheduleList: dataArray,
        checkValueSchedule: mucdich,
      });
    } else {
      this.setState({ scheduleList: [] });
    }
  };
  handleRowClick = (maLich) => {
    let selectedPurpose = this.state.checkValueSchedule;
    this.props.navigate(
      `/schedulebusiness/${maLich}?purpose=${selectedPurpose}`
    );
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
            <span className="title">Danh sách lịch thanh tra</span>
            <div className="add-schedule">
              <i className="fa-solid fa-plus"></i>
              <button
                onClick={() => {
                  this.handleAddInspectionSchedule();
                }}
              >
                Thêm lịch thanh tra
              </button>
            </div>
            <div className="search-purpose">
              <div className="list-business">
                <span>Mục đích thanh tra : </span>
                <select
                  style={{ height: "30px" }}
                  onChange={this.handeScheduleChange}
                >
                  <option value="0">Thanh tra thường niên</option>
                  <option value="1">Thanh tra cấp giấy phép</option>
                </select>
              </div>
              <div className="search">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input placeholder="Tìm kiếm lịch thanh tra" />
              </div>
            </div>
            <div className="table-schedule">
              <table className="TableManageUser">
                <thead>
                  <tr>
                    <th>Mã lịch</th>
                    <th>Tên lịch</th>
                    <th>Ngày bắt đầu</th>
                    <th>Ngày kết thúc</th>
                    <th>Ghi chú</th>
                    <th>Cán bộ phụ trách</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.scheduleList.map((item, index) => (
                    <tr
                      key={index}
                      onClick={() => this.handleRowClick(item.MALICH)}
                    >
                      <td>{item.MALICH}</td>
                      <td>{item.TENLICH}</td>
                      <td>{item.NGAYBATDAU}</td>
                      <td>{item.NGAYKETTHUC}</td>
                      <td>{item.GHICHU}</td>
                      <td>{item.MANGUOIDUNGData?.HOTEN}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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

export default connect(mapStateToProps, mapDispatchToProps)(InspectionSchedule);
