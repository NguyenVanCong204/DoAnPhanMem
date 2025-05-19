import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import _ from "lodash";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import DatePicker from "../../../components/Input/DatePicker";
class ModelEditUserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      licenseFileName: "",
      Date: null,
      yesterday: new Date(new Date().setDate(new Date().getDate() - 1)),
    };
    this.fileInputRef = React.createRef();
  }
  toggle = () => {
    this.props.toggleFromParent();
  };
  handleStartDateChange = (date) => {
    this.setState({ Date: date });
  };
  handleFileUpload = (event) => {
    let file = event.target.files[0];
    if (file) {
      this.setState({ licenseFileName: file.name });
    }
  };
  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={() => {
          this.toggle();
        }}
        className="model-user-container"
        size="lg"
        centered
      >
        <ModalHeader
          className="model-user-header"
          toggle={() => {
            this.toggle();
          }}
        >
          <div className="title-header">Cập nhập cán bộ</div>
        </ModalHeader>
        <ModalBody>
          <div className="model-user-body">
            <div className="input-container">
              <label>Họ và tên</label>
              <input type="text" readOnly placeholder="Nguyễn Văn Công"></input>
            </div>
            <div className="input-container">
              <label>Địa chỉ</label>
              <input type="text"></input>
            </div>
            <div className="input-container">
              <label>Ngày sinh</label>
              <div className="SelectDate">
                <DatePicker
                  selected={this.state.Date}
                  onChange={this.handleStartDateChange}
                  className="form-control"
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Chọn ngày sinh"
                  minDate={this.state.yesterday}
                />
                <i className="fa-solid fa-calendar-days"></i>
              </div>
            </div>
            <div className="input-container">
              <label>Email</label>
              <input type="text"></input>
            </div>
            <div className="input-container">
              <FormControl>
                <label>Giới tính:</label>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  onChange={this.handleGenderChange}
                >
                  <FormControlLabel value="0" control={<Radio />} label="Nữ" />
                  <FormControlLabel value="1" control={<Radio />} label="Nam" />
                </RadioGroup>
              </FormControl>
            </div>
            <div className="input-container">
              <label>Số điện thoại</label>
              <input type="text"></input>
            </div>
            <div className="input-container">
              <label>Số CCCD/CMND</label>
              <input type="text"></input>
            </div>
            <div className="input-container">
              <label>Chức vụ</label>
              <select style={{ height: "30px" }}>
                <option value="1">Cán bộ thanh tra</option>
                <option value="2">Cán bộ quản lý hồ sơ</option>
                <option value="3">Người tiêu dùng</option>
                <option value="4">Chủ hộ kinh doanh</option>
                <option value="5">Trưởng ban quản lý</option>
                <option value="6">Quản trị viên</option>
              </select>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            className="px-3"
            onClick={() => {
              this.handUpdateUser();
            }}
          >
            Lưu thông tin
          </Button>{" "}
          <Button
            color="secondary"
            className="px-3"
            onClick={() => {
              this.toggle();
            }}
          >
            Thoát
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModelEditUserManage);
