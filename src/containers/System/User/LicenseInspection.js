import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./LicenseInspection.scss";
import {
  getFacilityOwner,
  createNewAppraisall,
} from "../../../services/userService";
import { CommonUtils } from "../../../utils";
import { isEmpty } from "lodash";
import { toast } from "react-toastify";

class LicenseInspection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      status: "1",

      licenseFileName: "",
      namefacilityowner: "",

      priviewImgURL: "",
      avatar: "",
    };
  }
  toggle = () => {
    this.props.toggleFromParent();
  };
  handleNewAppraisal = async () => {
    try {
      let macoso = this.props.codelicense;
      let trangthai = this.state.status;
      let hinhanh = this.state.avatar;
      let noidung = this.state.content;
      if (isEmpty(noidung) || isEmpty(hinhanh)) {
        toast.error("Vui lòng nhập đầy đủ nội dung");
      } else {
        const data = {
          macoso,
          trangthai,
          hinhanh,
          noidung,
        };
        let reponse = await createNewAppraisall(data);
        if (reponse && reponse.errCode !== 0) {
          toast.error(reponse.message);
        } else {
          toast.success("Lưu thông tin thành công");
          this.setState({
            content: "",
            priviewImgURL: "",
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  handleChangeStatus = (e) => {
    this.setState({ status: e.target.value });
  };
  handleChangContent = (e) => {
    this.setState({
      content: e.target.value,
    });
  };
  handleFileUpload = (event) => {
    let file = event.target.files[0];
    if (file) {
      this.setState({ licenseFileName: file.name });
    }
  };
  async componentDidUpdate(prevProps) {
    if (prevProps.codelicense !== this.props.codelicense) {
      let response1 = await getFacilityOwner(this.props.codelicense);
      if (response1 && response1.errCode === 0 && response1.data) {
        const dataArray1 = response1.data.MANGUOIDUNGKDData.HOTEN;
        this.setState({
          namefacilityowner: dataArray1,
        });
      }
    }
  }
  handleOnchangeImage = async (event) => {
    let data = event.target.files;
    let file = data[0];

    if (file) {
      let base64 = await CommonUtils.getBase64(file);
      let objectUrl = URL.createObjectURL(file);
      this.setState({
        priviewImgURL: objectUrl,
        avatar: base64,
      });
    }
  };
  render() {
    let namelicense = this.props.namelicense;
    let addresslicense = this.props.addresslicense;
    const { namefacilityowner } = this.state;
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={() => {
          this.toggle();
        }}
        className="model-user-container"
        size="lg" //Set độ rộng cho Modal sm md lg
        centered //Cho Modal vào giữa màn hình
        // form-group Lable sẽ đứng trên input
      >
        <ModalHeader
          className="model-user-header"
          toggle={() => {
            this.toggle();
          }}
        >
          <div className="title-header">Thông tin cơ sở</div>
        </ModalHeader>
        <ModalBody>
          <div className="model-license-body">
            <div className="model-license-content">
              <div className="body-left">
                <div className="input-container">
                  <label>Tên cơ sở</label>
                  <input type="text" value={namelicense} readOnly></input>
                </div>
                <div className="input-container">
                  <label>Địa chỉ</label>
                  <input type="text" value={addresslicense} readOnly></input>
                </div>
                <div className="input-container">
                  <label>Tên chủ cơ sở kinh doanh</label>
                  <input type="text" value={namefacilityowner} readOnly></input>
                </div>
                <div className="content">
                  <label>Nội dung</label>
                  <br />
                  <textarea
                    value={this.state.content}
                    onChange={this.handleChangContent}
                  ></textarea>
                </div>
              </div>

              <div className="body-right">
                <div className="input-container">
                  <label>Trạng thái thẩm định</label>
                  <select
                    value={this.state.status}
                    onChange={this.handleChangeStatus}
                  >
                    <option value="1">Đạt</option>
                    <option value="0">Chưa đạt</option>
                  </select>
                </div>

                <div className="input-container">
                  <label>Hình ảnh kiểm tra</label>
                  <div className="preview-img-container">
                    <input
                      id="previewImg"
                      type="file"
                      hidden
                      onChange={(event) => this.handleOnchangeImage(event)}
                    />
                    <label className="lable-upload" htmlFor="previewImg">
                      Tải ảnh <i className="fa-solid fa-upload"></i>
                    </label>
                    <div
                      className="preview-iamge"
                      style={{
                        backgroundImage: `url(${this.state.priviewImgURL})`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <button onClick={() => this.handleNewAppraisal()}>
              Lưu thông tin
            </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(LicenseInspection);
