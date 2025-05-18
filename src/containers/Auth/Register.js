import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import "./Register.scss";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { createNewUserService } from "../../services/userService";
import { toast } from "react-toastify";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmpassword: "",
      name: "",
      ngaysinh: "",
      sdt: "",
      cccd: "",
      diachi: "",
      gioitinh: "",
      mavaitro: "",
    };
  }
  handleOnChangeEmail = (Event) => {
    this.setState({
      email: Event.target.value,
    });
  };
  handleOnChangePassword = (Event) => {
    this.setState({
      password: Event.target.value,
    });
  };
  handleOnChangeConfirmPassword = (Event) => {
    this.setState({
      confirmpassword: Event.target.value,
    });
  };
  handleOnChangeName = (Event) => {
    this.setState({
      name: Event.target.value,
    });
  };
  handleOnChangeBirtday = (Event) => {
    this.setState({
      ngaysinh: Event.target.value,
    });
  };
  handleOnChangePhonenumber = (Event) => {
    this.setState({
      sdt: Event.target.value,
    });
  };
  handleOnChangeCCCDCMND = (Event) => {
    this.setState({
      cccd: Event.target.value,
    });
  };
  handleOnChangeAddress = (Event) => {
    this.setState({
      diachi: Event.target.value,
    });
  };
  handleGenderChange = (Event) => {
    let selectedGender = Event.target.value;
    this.setState({
      gioitinh: selectedGender,
    });
    console.log("Giới tính được chọn là:", selectedGender);
  };
  handleAccountTypeChange = (Event) => {
    let selectedAccounttype = Event.target.value;
    this.setState({
      mavaitro: selectedAccounttype,
    });
    console.log("Tài khoản được chọn là:", selectedAccounttype);
  };
  resertLogin = () => {
    this.props.navigate("/login");
  };
  handleRegister = async () => {
    try {
      let { password, confirmpassword } = this.state;
      if (password !== confirmpassword) {
        toast.error("Nhập lại mật khẩu");
      } else {
        let reponse = await createNewUserService(this.state);
        if (reponse && reponse.errCode !== 0) {
          toast.error(reponse.message);
        } else {
          toast.success("Tài khoản đã được tạo thành công");
          this.resertLogin();
        }
      }
    } catch (error) {}
  };
  render() {
    return (
      <div className="register-background">
        <div className="register-container">
          <div className="register-content row">
            <div className="col-12 text-center Register">Đăng Kí</div>
            <div className="col-12 form-group Email">
              <label>Email:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nhập email của bạn"
                value={this.state.Email}
                onChange={(Event) => this.handleOnChangeEmail(Event)}
              />
            </div>
            <div className="col-12 form-group Password">
              <label>Mật khẩu:</label>
              <input
                type="password"
                className="form-control"
                placeholder="Nhập mật khẩu của bạn"
                value={this.state.password}
                onChange={(Event) => this.handleOnChangePassword(Event)}
              />
            </div>
            <div className="col-12 form-group confirm-password">
              <label>Nhập lại mật khẩu:</label>
              <input
                type="password"
                className="form-control"
                placeholder="Nhập lại mật khẩu của bạn"
                value={this.state.confirmpassword}
                onChange={(Event) => this.handleOnChangeConfirmPassword(Event)}
              />
            </div>
            <div className="col-12 form-group name">
              <label>Họ và tên:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nhập họ tên của bạn"
                value={this.state.name}
                onChange={(Event) => this.handleOnChangeName(Event)}
              />
            </div>
            <div className="col-12 form-group birthday">
              <label>Ngày sinh:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nhập ngày sinh của bạn"
                value={this.state.birthday}
                onChange={(Event) => this.handleOnChangeBirtday(Event)}
              />
            </div>
            <div className="col-12 form-group sex">
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
            <div className="col-6 form-group Phonenumber">
              <label>SĐT:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nhập số điện thoại của bạn"
                value={this.state.Phonenumber}
                onChange={(Event) => this.handleOnChangePhonenumber(Event)}
              />
            </div>
            <div className="col-6 form-group CCCD/CMND">
              <label>CCCD/CMND:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nhập CCCD/CMND của bạn"
                value={this.state.CCCDCMND}
                onChange={(Event) => this.handleOnChangeCCCDCMND(Event)}
              />
            </div>
            <div className="col-12 form-group address">
              <label>Địa chỉ:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nhập địa chỉ của bạn"
                value={this.state.address}
                onChange={(Event) => this.handleOnChangeAddress(Event)}
              />
            </div>
            <div className="col-12 form-group account-type">
              <FormControl>
                <label>Loại tài khoản:</label>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  onChange={this.handleAccountTypeChange}
                >
                  <FormControlLabel
                    value="1"
                    control={<Radio />}
                    label="Người tiêu dùng"
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio />}
                    label="Hộ kinh doanh"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div className="col-12">
              <button
                className="btn-register"
                onClick={() => {
                  this.handleRegister();
                }}
              >
                Đăng Kí
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
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { navigate: (path) => dispatch(push(path)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
