import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import _ from "lodash";
class ModalEditUserBusiness extends Component {
  constructor(props) {
    super(props);
    this.state = {
      licenseFileName: "",
    };
    this.fileInputRef = React.createRef();
  }
  toggle = () => {
    this.props.toggleFromParent();
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
          <div className="title-header">Cập nhập cơ sở kinh doanh</div>
        </ModalHeader>
        <ModalBody>
          <div className="model-user-body">
            <div className="input-container max-width">
              <div className="title">
                <b>Chủ cơ sở :</b> <h className="name">Nguyễn Văn Công</h>
              </div>
            </div>
            <div className="input-container">
              <label>Tên cơ sở</label>
              <input
                type="text"
                readOnly
                placeholder="CÔNG TY CỔ PHẦN DƯỢC PHẨM THIÊN NGUYÊN"
              ></input>
            </div>
            <div className="input-container">
              <label>Địa chỉ</label>
              <input type="text"></input>
            </div>
            <div className="input-container">
              <label>Số điện thoại</label>
              <input type="text"></input>
            </div>
            <div className="input-container">
              <label>Email</label>
              <input type="text"></input>
            </div>
            <div className="input-container">
              <label>Giấy phép kinh doanh</label>
              <div className="upload">
                <input
                  type="text"
                  readOnly
                  value={this.state.licenseFileName} // tên file sẽ hiện ở đây
                />
                <i
                  className="fa-solid fa-upload"
                  onClick={() => this.fileInputRef.current.click()}
                ></i>
                <input
                  type="file"
                  ref={this.fileInputRef}
                  style={{ display: "none" }}
                  onChange={this.handleFileUpload}
                />
              </div>
            </div>
            <div className="input-container max-width">
              <div className="status">
                <label>Tình trạng giấy phép kinh doanh : </label>
                <span> Đạt</span>
              </div>
            </div>
            <div className="input-container max-width">
              <div className="status">
                <label>Số lần vi phạm : </label>
                <span> 0</span>
              </div>
            </div>
            <div className="input-container max-width">
              <div className="status">
                <label>Loại hình kinh doanh : </label>
                <span> Kinh doanh nhà hàng ăn uống</span>
              </div>
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
)(ModalEditUserBusiness);
