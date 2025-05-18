import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./AnnualInspection.scss";
import { CommonUtils, createNewAppraisal } from "../../../utils";
import {
  getErrorPunish,
  getFacilityOwner,
  createNewAppraisall,
} from "../../../services/userService";
import { toast } from "react-toastify";
import { isEmpty } from "lodash";
class AnnualInspection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      status: "1",

      errorpunishList: [],
      licenseFileName: "",
      totalFine: 0,
      selectedErrors: [],
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
      let macoso = this.props.codeannual;
      let trangthai = this.state.status;
      let hinhanh = this.state.avatar;
      let noidung = this.state.content;
      let tongtienphat = this.state.totalFine;
      if (isEmpty(noidung) || isEmpty(hinhanh)) {
        toast.error("Vui lòng nhập đầy đủ nội dung");
      } else {
        const data = {
          macoso,
          trangthai,
          hinhanh,
          noidung,
          tongtienphat,
        };
        let reponse = await createNewAppraisall(data);
        if (reponse && reponse.errCode !== 0) {
          toast.error(reponse.message);
        } else {
          toast.success("Lưu thông tin xử phạt thành công");
          this.setState({
            content: "",
            priviewImgURL: "",
            selectedErrors: [],
            totalFine: 0,
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
    if (prevProps.codeannual !== this.props.codeannual) {
      let response1 = await getFacilityOwner(this.props.codeannual);
      if (response1 && response1.errCode === 0 && response1.data) {
        const dataArray1 = response1.data.MANGUOIDUNGKDData.HOTEN;
        this.setState({
          namefacilityowner: dataArray1,
        });
      }
    }
  }
  async componentDidMount() {
    let response = await getErrorPunish();

    if (response && response.errCode === 0 && response.data) {
      const dataArray = Array.isArray(response.data)
        ? response.data
        : [response.data];

      this.setState({
        errorpunishList: dataArray,
      });
    } else {
      this.setState({ errorpunishList: [] });
    }
  }
  handleCheckboxChange = (error, checked) => {
    this.setState((prevState) => {
      let selectedErrors;
      if (checked) {
        selectedErrors = [...prevState.selectedErrors, error];
      } else {
        selectedErrors = prevState.selectedErrors.filter(
          (item) => item.TENLOI !== error.TENLOI
        );
      }

      const totalFine = selectedErrors.reduce(
        (sum, item) => sum + Number(item.TIENPHAT),
        0
      );

      return { selectedErrors, totalFine };
    });
  };
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
    let nameannual = this.props.nameannual;
    let addressannual = this.props.addressannual;
    const { errorpunishList, totalFine, namefacilityowner } = this.state;
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
          <div className="title-header">Thông tin cơ sở</div>
        </ModalHeader>
        <ModalBody>
          <div className="model-anual-body">
            <div className="model-anual-content">
              <div className="body-left">
                <div className="input-container">
                  <label>Tên cơ sở</label>
                  <input type="text" value={nameannual} readOnly></input>
                </div>
                <div className="input-container">
                  <label>Địa chỉ</label>
                  <input type="text" value={addressannual} readOnly></input>
                </div>
                <div className="input-container">
                  <label>Tên chủ cơ sở kinh doanh</label>
                  <input type="text" value={namefacilityowner}></input>
                </div>
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

              <div className="body-right">
                <label className="title-eror">Lỗi vi phạm : </label>
                {errorpunishList.map((item, index) => (
                  <div key={index}>
                    <input
                      type="checkbox"
                      checked={this.state.selectedErrors.some(
                        (selected) => selected.TENLOI === item.TENLOI
                      )}
                      onChange={(e) =>
                        this.handleCheckboxChange(item, e.target.checked)
                      }
                    />
                    <label>{item.TENLOI}</label>
                  </div>
                ))}
                <hr />
                <h5>Tổng tiền phạt: {totalFine.toLocaleString()} VND</h5>
                <div className="content">
                  <label>Nội dung : </label>
                  <textarea
                    value={this.state.content}
                    onChange={this.handleChangContent}
                  ></textarea>
                </div>
              </div>
            </div>
            <button onClick={() => this.handleNewAppraisal()}>Xử phạt</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(AnnualInspection);
