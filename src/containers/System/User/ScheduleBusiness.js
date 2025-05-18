import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import HomeSelection from "../../HomeHeader/Section/HomeSelection";
import Slider from "react-slick";
import { push } from "connected-react-router";
import logo from "../../../assets/images/image.png";
import menu from "../../../assets/images/menu.png";
import "./ScheduleBusiness.scss";
import { getBusinessSchedule } from "../../../services/userService";
import { withRouter } from "react-router-dom";
import { times } from "lodash";
import AnnualInspection from "./AnnualInspection";
import LicenseInspection from "./LicenseInspection";
import About from "../../HomeHeader/Section/About";

class ScheduleBusiness extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schedulebusinessList: [],
      checkpurpose: "",
      isOpenModalAnnual: false,
      isOpenModalLicense: false,

      nameannual: "",
      addressannual: "",
      codeannual: "",

      namelicense: "",
      addresslicense: "",
      codelicense: "",
    };
  }
  handleModalAnnual = () => {
    this.setState({
      isOpenModalAnnual: true,
    });
  };
  toggleModalAnnual = () => {
    this.setState({
      isOpenModalAnnual: !this.state.isOpenModalAnnual,
    });
  };
  toggleModalLicense = () => {
    this.setState({
      isOpenModalLicense: !this.state.isOpenModalLicense,
    });
  };
  handleModalLicense = () => {
    this.setState({
      isOpenModalLicense: true,
    });
  };
  handleCheckAnnualLicense = (item) => {
    const searchParams = new URLSearchParams(this.props.location.search);
    const purpose = searchParams.get("purpose");
    console.log("check : ", purpose);
    if (purpose === "0") {
      this.handleModalAnnual();
      this.setState({
        nameannual: item.MACOSOKDDATA?.TENCOSOKD,
        addressannual: item.MACOSOKDDATA?.DIACHICOSOKD,
        codeannual: item.MACOSOKDDATA?.MACOSOKD,
      });
    } else if (purpose === "1") {
      this.handleModalLicense();
      this.setState({
        namelicense: item.MACOSOKDDATA?.TENCOSOKD,
        addresslicense: item.MACOSOKDDATA?.DIACHICOSOKD,
        codelicense: item.MACOSOKDDATA?.MACOSOKD,
      });
    }
  };
  async componentDidMount() {
    let { maLich } = this.props.match.params;
    let response = await getBusinessSchedule(maLich);

    const searchParams = new URLSearchParams(this.props.location.search);
    const purpose = searchParams.get("purpose");

    if (response && response.errCode === 0 && response.data) {
      const dataArray = Array.isArray(response.data)
        ? response.data
        : [response.data];
      this.setState({
        schedulebusinessList: dataArray,
        checkpurpose: purpose,
      });
    } else {
      this.setState({ schedulebusinessList: [] });
    }
  }
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
        <div className="schedulebusiness-container">
          <AnnualInspection
            isOpen={this.state.isOpenModalAnnual}
            toggleFromParent={this.toggleModalAnnual}
            nameannual={this.state.nameannual}
            addressannual={this.state.addressannual}
            codeannual={this.state.codeannual}
          />
          <LicenseInspection
            isOpen={this.state.isOpenModalLicense}
            toggleFromParent={this.toggleModalLicense}
            namelicense={this.state.namelicense}
            addresslicense={this.state.addresslicense}
            codelicense={this.state.codelicense}
          />
          <div className="schedulebusiness-content">
            <span className="title">Danh sách cơ sở kinh doanh</span>
            <div className="calendar-code">
              <span>Mã lịch : </span>
              <span>
                {this.state.schedulebusinessList.length > 0
                  ? this.state.schedulebusinessList[0].MALICH
                  : "Không có dữ liệu"}
              </span>
            </div>
            <div className="table-business">
              <table className="TableManageUser">
                <thead>
                  <tr>
                    <th>Mã cơ sở</th>
                    <th>Tên cơ sở</th>
                    <th>Địa chỉ</th>
                    <th>SĐT</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.schedulebusinessList.map((item, index) => (
                    <tr
                      key={index}
                      onClick={() => this.handleCheckAnnualLicense(item)}
                    >
                      <td>{item.MACOSOKDDATA?.MACOSOKD}</td>
                      <td>{item.MACOSOKDDATA?.TENCOSOKD}</td>
                      <td>{item.MACOSOKDDATA?.DIACHICOSOKD}</td>
                      <td>{item.MACOSOKDDATA?.SDT}</td>
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

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ScheduleBusiness)
);
