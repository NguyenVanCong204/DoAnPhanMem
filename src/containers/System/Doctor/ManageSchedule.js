import React, { Component } from "react";
import { connect } from "react-redux";
import "./ManageSchedule.scss";
import { FormattedMessage } from "react-intl";
import { languages, dateFormat } from "../../../utils";
import * as actions from "../../../store/actions";
import Select from "react-select";
import DatePicker from "../../../components/Input/DatePicker"; //Chọn ngày
import moment from "moment"; //format ngày tháng năm
import { toast } from "react-toastify";
import _ from "lodash";
import { saveBulkScheduleDoctor } from "../../../services/userService";

class ManageSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDoctor: {},
      listDoctors: [],
      currentDate: new Date(), //Lấy ngày hiện tại
      rangeTime: [],
    };
  }
  componentDidMount() {
    this.props.fetchAllDoctor();
    this.props.getTimeStart();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.AllDoctors !== this.props.AllDoctors) {
      let dataSelect = this.builtDataInputSelect(this.props.AllDoctors);
      this.setState({
        listDoctors: dataSelect,
      });
    }
    if (prevProps.language !== this.props.language) {
      let dataSelect = this.builtDataInputSelect(this.props.AllDoctors);
      this.setState({
        listDoctors: dataSelect,
      });
    }
    if (prevProps.allScheduleTime !== this.props.allScheduleTime) {
      let data = this.props.allScheduleTime;
      if (data && data.length > 0) {
        data = data.map((item) => ({ ...item, isSelect: false }));
      }
      this.setState({
        rangeTime: data,
      });
    }
  }
  handleChangeSelect = async (selectedDoctorr) => {
    this.setState({ selectedDoctor: selectedDoctorr });
  };
  builtDataInputSelect = (inputData) => {
    let result = [];
    let { language } = this.props;

    if (inputData && inputData.length > 0) {
      inputData.map((item, index) => {
        let object = {};
        let labelVi = `${item.lastName} ${item.firstName}`;
        let labelEn = `${item.firstName} ${item.lastName}`;

        object.label = language === languages.EN ? labelEn : labelVi;
        object.value = item.id;

        result.push(object);
      });
    }
    return result;
  };
  handleOnchangeDatePicker = (date) => {
    this.setState({
      currentDate: date[0],
    });
  };
  handleClickBtnTime = (time) => {
    let { rangeTime } = this.state;
    if (rangeTime && rangeTime.length > 0) {
      rangeTime = rangeTime.map((item) => {
        if (item.id === time.id) {
          item.isSelect = !item.isSelect;
        }
        return item;
      });
    }
    this.setState({
      rangeTime: rangeTime,
    });
  };
  handleSaveSchedule = async () => {
    let { rangeTime, selectedDoctor, currentDate } = this.state;
    let result = [];
    if (!currentDate) {
      toast.error("Invalid date!");
      return;
    }
    if (selectedDoctor && _.isEmpty(selectedDoctor)) {
      toast.error("Invalid selected doctor!");
      return;
    }

    // let formateDate = moment(currentDate).format(dateFormat.SEND_TO_SERVER);
    let formateDate = new Date(currentDate).getTime();

    if (rangeTime && rangeTime.length > 0) {
      let selectedTime = rangeTime.filter((item) => item.isSelect === true); //filter tạo một mảng mới chỉ thỏa mãn điều kiện
      if (selectedTime && selectedTime.length > 0) {
        selectedTime.map((schedule) => {
          let object = {};
          object.doctorID = selectedDoctor.value;
          object.date = formateDate;
          object.timeType = schedule.keyMap;
          result.push(object);
        });
      } else {
        toast.error("Invalid selected time !");
        return;
      }
    }

    let res = await saveBulkScheduleDoctor({
      arrSchedule: result,
      doctorId: selectedDoctor.value,
      formateDate: formateDate,
    });
    toast.success("Successfully saved schedule");
  };
  render() {
    let { rangeTime } = this.state;
    let lang = this.props.lang;
    return (
      <div className="manage-schedule-container">
        <div className="manage-schedule-title">
          <FormattedMessage id="manage-schedule.title" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6 form-group">
              <label>
                <FormattedMessage id="manage-schedule.choose-a-doctor" />
              </label>
              <Select
                value={this.state.selectedDoctor}
                onChange={this.handleChangeSelect}
                options={this.state.listDoctors}
              />
            </div>
            <div className="col-6 form-group">
              <label>
                <FormattedMessage id="manage-schedule.select-date" />
              </label>
              <DatePicker
                onChange={this.handleOnchangeDatePicker}
                className="form-control"
                value={this.state.currentDate}
                minDate={new Date()} //Lấy ngày hiện tại
              />
            </div>
            <div className="col-12 pick-hour-container">
              {rangeTime &&
                rangeTime.length > 0 &&
                rangeTime.map((item, index) => {
                  return (
                    <button
                      className={
                        item.isSelect === false
                          ? "btn btn-schedule"
                          : "btn btn-schedule active"
                      }
                      key={index}
                      onClick={() => this.handleClickBtnTime(item)}
                    >
                      {lang === languages.VI ? item.valueVi : item.valueEn}
                    </button>
                  );
                })}
            </div>
            <div className="col-12">
              <button
                className="col-1 btn btn-primary btn-save-schedule"
                onClick={() => this.handleSaveSchedule()}
              >
                <FormattedMessage id="manage-schedule.save-information" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.app.language,
    AllDoctors: state.admin.AllDoctors,
    isLoggedIn: state.user.isLoggedIn,
    allScheduleTime: state.admin.times,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllDoctor: () => dispatch(actions.fetchAllDoctor()),
    getTimeStart: () => dispatch(actions.fetchAllScheduleTime()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageSchedule);
