import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import HomeHeader from "../../HomePage/HomeHeader";
import "./DoctorSchedule.scss";
import { getScheduleDoctorByDate } from "../../../services/userService";
import { languages } from "../../../utils";
import localization from "moment/locale/vi";
import moment from "moment";
import { FormattedMessage } from "react-intl";
import BookingModal from "./Modal/BookingModal";

class DoctorSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allDays: [],
      allAvalableTime: [],
      isOpenModelBooking: false,
      dataScheduleTimeModel: {},
    };
  }
  componentDidMount() {
    let { language } = this.props;
    let arrDays = this.getArrdays(language);
    this.setState({
      allDays: arrDays,
    });
  }
  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.language !== prevProps.language) {
      let arrDays = this.getArrdays(this.props.language);
      this.setState({
        allDays: arrDays,
      });
    }
    if (this.props.doctorIdFromParent !== prevProps.doctorIdFromParent) {
      let arrDays = this.getArrdays(this.props.language);
      let res = await getScheduleDoctorByDate(
        this.props.doctorIdFromParent,
        arrDays[0].value
      );
      if (res && res.errCode === 0) {
        this.setState({
          allAvalableTime: res.data ? res.data : [],
        });
      }
    }
  }
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  getArrdays = (language) => {
    // console.log(moment(new Date()).format("dddd - DD/MM"));
    // console.log(moment(new Date()).locale("en").format("ddd - DD/MM"));
    let arrDays = [];
    for (let i = 0; i < 7; i++) {
      let object = {};
      if (language === languages.VI) {
        if (i === 0) {
          let labeVi = moment(new Date()).format("DD/MM");
          let today = `Hôm nay - ${labeVi}`;
          object.label = this.capitalizeFirstLetter(today);
        } else {
          let labeVi = moment(new Date()).add(i, "days").format("dddd - DD/MM");
          object.label = this.capitalizeFirstLetter(labeVi);
        }
      } else if (language === languages.EN) {
        if (i === 0) {
          let labeEn = moment(new Date()).locale("en").format("DD/MM");
          let today = `Today - ${labeEn}`;
          object.label = this.capitalizeFirstLetter(today);
        } else {
          object.label = moment(new Date())
            .add(i, "days")
            .locale("en")
            .format("ddd - DD/MM");
        }
      }
      object.value = moment(new Date()).add(i, "days").startOf("day").valueOf();
      // ValueOf Chuyển ngày sang dạng Unix Timestamp
      // startOf trả về thời gian bắt đầu ngày hôm đó 00:00:00
      arrDays.push(object);
    }
    return arrDays;
  };

  handleOnChangeSelect = async (event) => {
    if (this.props.doctorIdFromParent && this.props.doctorIdFromParent !== -1) {
      let id = this.props.doctorIdFromParent;
      let date = event.target.value;
      let res = await getScheduleDoctorByDate(id, date);
      if (res && res.errCode === 0) {
        this.setState({
          allAvalableTime: res.data ? res.data : [],
        });
      }
    }
  };
  closeBookingClose = () => {
    this.setState({
      isOpenModelBooking: false,
    });
  };
  handleScheduleTime = (time) => {
    this.setState({
      isOpenModelBooking: true,
      dataScheduleTimeModel: time,
    });
  };
  render() {
    let { allDays, allAvalableTime } = this.state;
    let { language } = this.props;
    return (
      <Fragment>
        <div className="doctor-chedule-container">
          <div className="all_schedule">
            <select onChange={(event) => this.handleOnChangeSelect(event)}>
              {allDays &&
                allDays.length > 0 &&
                allDays.map((item, index) => {
                  return (
                    <option value={item.value} key={index}>
                      {item.label}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className="all-available-time">
            <div className="text-calendar">
              <i className="fa-solid fa-calendar-days">
                <span>
                  <FormattedMessage id="patient.detail-doctor.examination-schedule" />
                </span>
              </i>
            </div>
            <div className="time-content">
              {allAvalableTime && allAvalableTime.length > 0 ? (
                <Fragment>
                  {allAvalableTime.map((item, index) => {
                    let timeDisplay =
                      language === languages.VI
                        ? item.timeTypeData.valueVi
                        : item.timeTypeData.valueEn;
                    return (
                      <button
                        key={index}
                        onClick={() => this.handleScheduleTime(item)}
                      >
                        {timeDisplay}
                      </button>
                    );
                  })}
                  <div className="book-free">
                    <span>
                      <FormattedMessage id="patient.detail-doctor.choose" />
                      <i className="fa-regular fa-hand-point-up"></i>{" "}
                      <FormattedMessage id="patient.detail-doctor.book-free" />
                    </span>
                  </div>
                </Fragment>
              ) : (
                <div className="none-schedule">
                  <FormattedMessage id="patient.detail-doctor.none-schedule" />
                </div>
              )}
            </div>
          </div>
        </div>
        <BookingModal
          isOpenModel={this.state.isOpenModelBooking}
          closeBookingClose={this.closeBookingClose}
          dataTime={this.state.dataScheduleTimeModel}
        />
      </Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(DoctorSchedule);
