import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalAddUserBusiness extends Component {
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
          <div className="title-header">Thêm cở sở kinh doanh</div>
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
              <input type="text"></input>
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
                  value={this.state.licenseFileName}
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
              <label>Loại hình kinh doanh</label>
              <select style={{ height: "30px" }}>
                <option value="1">Kinh doanh thực phẩm đồ uống</option>
                <option value="2">Kinh doanh nhà hàng ăn uống</option>
                <option value="3">Kinh doanh Sản xuất thủ công nghiệp</option>
                <option value="4">Kinh doanh nông nghiệp</option>
              </select>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            className="px-3"
            onClick={() => {
              this.handAddNewUser();
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
)(ModalAddUserBusiness);
