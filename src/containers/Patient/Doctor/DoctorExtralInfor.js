import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import "./DoctorExtralInfor.scss";
import { getExtraInforDoctor } from "../../../services/userService";
import { languages } from "../../../utils";
import { FormattedMessage } from "react-intl";
import NumberFormat from "react-number-format";

class DoctorExtralInfor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowDetailInfor: false,
      extraInfor: {},
    };
  }
  componentDidMount() {}
  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.language !== prevProps.language) {
    }
    if (this.props.doctorIdFromParent !== prevProps.doctorIdFromParent) {
      let res = await getExtraInforDoctor(this.props.doctorIdFromParent);
      if (res && res.errCode === 0) {
        this.setState({
          extraInfor: res.data,
        });
      }
    }
  }

  showHideDetailInfor = () => {
    let { isShowDetailInfor } = this.state;
    this.setState({
      isShowDetailInfor: !isShowDetailInfor,
    });
  };
  render() {
    let { isShowDetailInfor, extraInfor } = this.state;
    let { language } = this.props;
    return (
      <div className="doctor-extral-infor-container">
        <div className="content-up">
          <div className="text-address">
            <FormattedMessage id="admin.manage-doctor.examination-address" />
          </div>
          <div className="name-clinic">
            {extraInfor && extraInfor.nameClinic ? extraInfor.nameClinic : ""}
          </div>
          <div className="detail-address">
            {extraInfor && extraInfor.addressClinic
              ? extraInfor.addressClinic
              : ""}
          </div>
        </div>
        <div className="content-down">
          {isShowDetailInfor === false && (
            <div className="short-infor">
              <FormattedMessage id="admin.manage-doctor.examination-price" />
              {extraInfor &&
                extraInfor.priceData &&
                language === languages.VI && (
                  <NumberFormat
                    className="currency"
                    displayType={"text"}
                    value={extraInfor.priceData.valueVi}
                    thousandSeparator={true}
                    suffix={"VNĐ"}
                  />
                )}
              {extraInfor &&
                extraInfor.priceData &&
                language === languages.EN && (
                  <NumberFormat
                    className="currency"
                    displayType={"text"}
                    value={extraInfor.priceData.valueEn}
                    thousandSeparator={true}
                    suffix={"$"}
                  />
                )}
              <span
                className="detail"
                onClick={() => this.showHideDetailInfor()}
              >
                <FormattedMessage id="admin.manage-doctor.see-details" />
              </span>
            </div>
          )}
          {isShowDetailInfor === true && (
            <Fragment>
              <div className="title-price">
                <FormattedMessage id="admin.manage-doctor.examination-price" />{" "}
              </div>
              <div className="detail-infor">
                <div className="price">
                  <span className="left">
                    <FormattedMessage id="admin.manage-doctor.examination-price-information" />
                  </span>
                  <span className="right">
                    {extraInfor &&
                      extraInfor.priceData &&
                      language === languages.VI && (
                        <NumberFormat
                          className="currency"
                          displayType={"text"}
                          value={extraInfor.priceData.valueVi}
                          thousandSeparator={true}
                          suffix={"VNĐ"}
                        />
                      )}
                    {extraInfor &&
                      extraInfor.priceData &&
                      language === languages.EN && (
                        <NumberFormat
                          className="currency"
                          displayType={"text"}
                          value={extraInfor.priceData.valueEn}
                          thousandSeparator={true}
                          suffix={"$"}
                        />
                      )}
                  </span>
                </div>
                <div className="note">
                  {extraInfor && extraInfor.note ? extraInfor.note : ""}
                </div>
              </div>
              <div className="payment">
                <FormattedMessage id="admin.manage-doctor.patients-can-pay-the-cost-by" />{" "}
                {extraInfor &&
                extraInfor.paymentData &&
                language === languages.VI
                  ? extraInfor.paymentData.valueVi
                  : extraInfor.paymentData.valueEn}
              </div>
              <div className="hide-price">
                <span onClick={() => this.showHideDetailInfor()}>
                  <FormattedMessage id="admin.manage-doctor.hide-price-list" />
                </span>
              </div>
            </Fragment>
          )}
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

export default connect(mapStateToProps, mapDispatchToProps)(DoctorExtralInfor);
