import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import "./ProfileDoctor.scss";
import { getProfileDoctorById } from "../../../services/userService";
import { languages } from "../../../utils";
import NumberFormat from "react-number-format";

class ProfileDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataProfile: {},
    };
  }
  async componentDidMount() {
    let data = await this.getInforDoctor(this.props.doctorId);
    this.setState({
      dataProfile: data,
    });
  }
  getInforDoctor = async (id) => {
    let result = {};
    if (id) {
      let res = await getProfileDoctorById(id);
      if (res && res.errCode === 0) {
        result = res.data;
      }
    }
    return result;
  };
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.language !== prevProps.language) {
    }
    if (this.props.doctorId !== prevProps.doctorId) {
      this.getInforDoctor(this.props.doctorId);
    }
  }

  render() {
    let { dataProfile } = this.state;
    let positionDataVi = "",
      positionDataEn = "";
    let { language } = this.props;
    if (dataProfile && dataProfile.positionData) {
      positionDataVi = `${dataProfile.positionData.valueVi},${dataProfile.lastName} ${dataProfile.firstName}`;
      positionDataEn = `${dataProfile.positionData.valueEn},${dataProfile.firstName} ${dataProfile.lastName}`;
    }
    return (
      <div className="profile-doctor-container">
        <div className="intro-doctor">
          <div
            className="content-left"
            style={{
              backgroundImage: `url(${
                dataProfile.image ? dataProfile.image : ""
              })`,
            }}
          ></div>
          <div className="content-right">
            <div className="up">
              {language === languages.VI ? positionDataVi : positionDataEn}
            </div>
            <div className="down">
              {dataProfile.Markdown && dataProfile.Markdown.description ? (
                <span>{dataProfile.Markdown.description}</span>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="price">
            Giá Khám :{" "}
            {dataProfile &&
              dataProfile.Doctor_Infor &&
              dataProfile.Doctor_Infor.priceData &&
              language === languages.VI && (
                <NumberFormat
                  className="currency"
                  displayType={"text"}
                  value={dataProfile.Doctor_Infor.priceData.valueVi}
                  thousandSeparator={true}
                  suffix={"VNĐ"}
                />
              )}
            {dataProfile &&
              dataProfile.Doctor_Infor &&
              dataProfile.Doctor_Infor.priceData &&
              language === languages.EN && (
                <NumberFormat
                  className="currency"
                  displayType={"text"}
                  value={dataProfile.Doctor_Infor.priceData.valueEn}
                  thousandSeparator={true}
                  suffix={"$"}
                />
              )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDoctor);
