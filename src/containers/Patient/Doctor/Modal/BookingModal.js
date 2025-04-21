import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import "./BookingModal.scss";
import { FormattedMessage } from "react-intl";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import ProfileDoctor from "../ProfileDoctor";
import { isEmpty } from "lodash";

class BookingModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.language !== prevProps.language) {
    }
  }
  render() {
    let { isOpenModel, closeBookingClose, dataTime } = this.props;
    let doctorId = "";
    if (dataTime && !isEmpty(dataTime)) {
      doctorId = dataTime.doctorID;
    }
    return (
      <Modal
        isOpen={isOpenModel}
        className="booking-modal-container"
        size="lg" //Set độ rộng cho Modal sm md lg
        centered //Cho Modal vào giữa màn hình
        // form-group Lable sẽ đứng trên input
      >
        <div className="booking-modal-content">
          <div className="booking-modal-header">
            <span className="left">Thông tin đặt lịch khám bệnh</span>
            <span className="right" onClick={closeBookingClose}>
              <i className="fas fa-times"></i>
            </span>
          </div>
          <div className="booking-modal-body">
            {/* {JSON.stringify(dataTime)} Chyển từ kiểu object sang string */}
            <div className="doctor-infor">
              <ProfileDoctor doctorId={doctorId} />
            </div>
            <div className="row">
              <div className="col-6 form-group mb-2">
                <label>Họ tên</label>
                <input className="form-control"></input>
              </div>
              <div className="col-6 form-group mb-2">
                <label>Số điện thoại</label>
                <input className="form-control"></input>
              </div>
              <div className="col-6 form-group mb-2">
                <label>Địa chỉ Email</label>
                <input className="form-control"></input>
              </div>
              <div className="col-6 form-group mb-2">
                <label>Địa chỉ liên hệ</label>
                <input className="form-control"></input>
              </div>
              <div className="col-12 form-group mb-2">
                <label>Lý do khám</label>
                <input className="form-control"></input>
              </div>
              <div className="col-6 form-group mb-2">
                <label>Đặt cho ai</label>
                <input className="form-control"></input>
              </div>
              <div className="col-6 form-group mb-2">
                <label>Giới tính</label>
                <input className="form-control"></input>
              </div>
            </div>
          </div>
          <div className="booking-modal-footer">
            <button className="btn-booking-confirm">Xác nhận</button>
            <button className="btn-booking-cancel" onClick={closeBookingClose}>
              Hủy
            </button>
          </div>
        </div>
      </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(BookingModal);
