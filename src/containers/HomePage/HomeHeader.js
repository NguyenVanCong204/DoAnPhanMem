import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";
import logo from "../../assets/images/bookingcare-logo-v3.png";
import { FormattedMessage } from "react-intl";
import { languages } from "../../utils";
import { changeLanguageApp } from "../../store/actions";
import { withRouter } from "react-router";

class HomeHeader extends Component {
  SetLanguage = (language) => {
    this.props.changLanguageAppRedux(language);
  };
  returnHome = () => {
    if (this.props.history) {
      this.props.history.push(`/home`);
    }
  };
  render() {
    let language = this.props.lang;
    console.log(language);
    return (
      <React.Fragment>
        <div className="home-header-container">
          <div className="home-header-content">
            <div className="left-content">
              <i className="fa-solid fa-bars"></i>
              <img src={logo} onClick={() => this.returnHome()} />
              <div className="header-logo"></div>
            </div>
            <div className="center-content">
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="home-header.speciality" />{" "}
                  </b>
                </div>
                <div className="subs-title">
                  <FormattedMessage id="home-header.searchdoctor" />
                </div>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="home-header.medicalfacility" />
                  </b>
                </div>
                <div className="subs-title">
                  <FormattedMessage id="home-header.hospitalclinic" />
                </div>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="home-header.doctor" />
                  </b>
                </div>
                <div className="subs-title">
                  <FormattedMessage id="home-header.gooddoctor" />
                </div>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="home-header.examinationpackage" />
                  </b>
                </div>
                <div className="subs-title">
                  <FormattedMessage id="home-header.generalhealthexamination" />
                </div>
              </div>
            </div>
            <div className="right-content">
              <div className="support">
                <i className="fa-solid fa-circle-question"></i>
                <FormattedMessage id="home-header.help" />
              </div>
              <div
                className={
                  language === languages.VI
                    ? "language-vi active"
                    : "language-vi"
                }
              >
                <span onClick={() => this.SetLanguage(languages.VI)}>VI</span>
              </div>
              <div
                className={
                  language === languages.EN
                    ? "language-en active"
                    : "language-en"
                }
              >
                <span onClick={() => this.SetLanguage(languages.EN)}>EN</span>
              </div>
            </div>
          </div>

          {this.props.isShowBanner === true && (
            <div className="home-header-banner">
              <div className="content-up">
                <div className="title1">
                  <FormattedMessage id="home-header.medicalfoundation" />
                </div>
                <div className="title2">
                  <FormattedMessage id="home-header.comprehensivehealthcare" />
                </div>
                <div className="search">
                  <i className="fa-solid fa-magnifying-glass"></i>
                  <input placeholder="Tìm kiếm chuyên khoa" />
                </div>
              </div>
              <div className="content-down">
                <div className="options">
                  <div className="option-child">
                    <div className="icon-child">
                      <i className="fa-solid fa-hospital"></i>
                    </div>
                    <div className="text-child">
                      <FormattedMessage id="home-header.specializedexamination" />
                    </div>
                  </div>
                  <div className="option-child">
                    <div className="icon-child">
                      <i className="fa-solid fa-mobile-screen-button"></i>
                    </div>
                    <div className="text-child">
                      <FormattedMessage id="home-header.remoteexamination" />
                    </div>
                  </div>
                  <div className="option-child">
                    <div className="icon-child">
                      <i className="fa-solid fa-bed-pulse"></i>
                    </div>
                    <div className="text-child">
                      <FormattedMessage id="home-header.generalexamination" />
                    </div>
                  </div>
                  <div className="option-child">
                    <div className="icon-child">
                      <i className="fa-solid fa-microscope"></i>
                    </div>
                    <div className="text-child">
                      <FormattedMessage id="home-header.medicaltests" />
                    </div>
                  </div>
                  <div className="option-child">
                    <div className="icon-child">
                      <i className="fa-solid fa-user-doctor"></i>
                    </div>
                    <div className="text-child">
                      <FormattedMessage id="home-header.mentalhealth" />
                    </div>
                  </div>
                  <div className="option-child">
                    <div className="icon-child">
                      <i className="fa-solid fa-tooth"></i>
                    </div>
                    <div className="text-child">
                      <FormattedMessage id="home-header.dentalexamination" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
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
    changLanguageAppRedux: (language) => dispatch(changeLanguageApp(language)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomeHeader)
);
