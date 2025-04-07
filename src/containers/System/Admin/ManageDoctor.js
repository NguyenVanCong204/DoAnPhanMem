import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import "./ManageDoctor.scss";
import Select from "react-select";

import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
// import style manually
import "react-markdown-editor-lite/lib/index.css";
import lib from "react-custom-scrollbars";
import { CRUD_ACTIONS, languages } from "../../../utils";
import { resolve } from "url";
import { getDetailInforDoctor } from "../../../services/userService";

const mdParser = new MarkdownIt(/* Markdown-it options */);

class ManageDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //save to Markdown table
      contentMarkdown: "",
      contentHTML: "",
      selectedDoctor: null,
      description: "",
      listDoctors: [],
      hasOldData: false,

      //save to doctor_infor table
      listPrice: [],
      listPayment: [],
      listProvince: [],
      selectedPrice: "",
      selectedPayment: "",
      selectedProvince: "",
      nameClinic: "",
      addressClinic: "",
      note: "",
    };
  }
  componentDidMount() {
    this.props.fetchAllDoctor();
    this.props.getDoctorInfor();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    let { resPrice, resPayment, resProvince } = this.props.doctorInforarr;
    let dataSelectPrice = this.builtDataInputSelect(resPrice, "PRICE");
    let dataSelectPayment = this.builtDataInputSelect(resPayment, "PAYMENT");
    let dataSelectProvince = this.builtDataInputSelect(resProvince, "PROVINCE");
    let dataSelect = this.builtDataInputSelect(this.props.AllDoctors, "USERS");

    if (prevProps.AllDoctors !== this.props.AllDoctors) {
      this.setState({
        listDoctors: dataSelect,
      });
    }
    if (prevProps.language !== this.props.language) {
      this.setState({
        listDoctors: dataSelect,
        listProvince: dataSelectProvince,
        listPayment: dataSelectPayment,
        listPrice: dataSelectPrice,
      });
    }
    if (prevProps.doctorInforarr !== this.props.doctorInforarr) {
      this.setState({
        listPayment: dataSelectPayment,
        listProvince: dataSelectProvince,
        listPrice: dataSelectPrice,
      });
    }
  }

  handleEditorChange = ({ html, text }) => {
    this.setState({
      contentMarkdown: text,
      contentHTML: html,
    });
  };
  handleSaveContentMarkdown = () => {
    let { hasOldData } = this.state;
    this.props.SaveDetailDoctorr({
      contentHTML: this.state.contentHTML,
      contentMarkdown: this.state.contentMarkdown,
      description: this.state.description,
      doctorId: this.state.selectedDoctor.value,
      priceId: this.state.selectedPrice.value,
      provinceId: this.state.selectedProvince.value,
      paymentId: this.state.selectedPayment.value,
      addressClinic: this.state.addressClinic,
      nameClinic: this.state.nameClinic,
      note: this.state.note,
      action: hasOldData === true ? CRUD_ACTIONS.EDIT : CRUD_ACTIONS.CREATE,
    });
  };
  handleChangeSelectDoctorInfor = (selectOption, name) => {
    let selectName = name.name;
    let stateCopy = { ...this.state };
    stateCopy[selectName] = selectOption;
    this.setState({
      ...stateCopy,
    });
  };
  handleChangeSelect = async (selectedDoctor) => {
    this.setState({ selectedDoctor });

    let res = await getDetailInforDoctor(selectedDoctor.value);
    console.log(selectedDoctor.value);
    if (res && res.errCode == 0 && res.data && res.data.Markdown) {
      let markdowwn = res.data.Markdown;
      this.setState({
        contentMarkdown: markdowwn.contentMarkdown,
        contentHTML: markdowwn.contentHTML,
        description: markdowwn.description,
        hasOldData: true,
      });
    } else {
      this.setState({
        contentMarkdown: "",
        contentHTML: "",
        description: "",
        hasOldData: false,
      });
    }
  };

  handleOnchangeText = (event, id) => {
    let stateCopy = { ...this.state };
    stateCopy[id] = event.target.value;
    this.setState({
      ...stateCopy,
    });
  };

  builtDataInputSelect = (inputData, type) => {
    let result = [];
    let { language } = this.props;

    if (inputData && inputData.length > 0) {
      if (type === "USERS") {
        inputData.map((item, index) => {
          let object = {};
          let labelVi = `${item.lastName} ${item.firstName}`;
          let labelEn = `${item.firstName} ${item.lastName}`;
          object.label = language === languages.EN ? labelEn : labelVi;
          object.value = item.id;

          result.push(object);
        });
      } else if (type === "PRICE") {
        inputData.map((item, index) => {
          let object = {};
          let labelVi = `${item.valueVi}`;
          let labelEn = `${item.valueEn}`;
          object.label = language === languages.EN ? labelEn : labelVi;
          object.value = item.keyMap;

          result.push(object);
        });
      } else if (type === "PAYMENT" || type === "PROVINCE") {
        inputData.map((item, index) => {
          let object = {};
          let labelVi = `${item.valueVi}`;
          let labelEn = `${item.valueEn}`;
          object.label = language === languages.EN ? labelEn : labelVi;
          object.value = item.keyMap;

          result.push(object);
        });
      }
    }
    return result;
  };
  render() {
    console.log(this.state);
    const { selectedDoctor } = this.state.listDoctors;
    let {
      listProvince,
      selectedProvince,
      selectedPayment,
      listPayment,
      selectedPrice,
      listPrice,
    } = this.state;
    let arrUsers = this.state.userRedux;
    let hasOldData = this.state.hasOldData;

    return (
      <div className="manage-doctor-container">
        <div className="manage-docter-title">
          <FormattedMessage id="admin.manage-doctor.create-more-doctor-information" />
        </div>
        <div className="more-infor">
          <div className="content-left form-group">
            <label>
              <FormattedMessage id="admin.manage-doctor.choose-a-doctor" />
            </label>
            <Select
              value={this.state.selectedDoctor}
              onChange={this.handleChangeSelect}
              options={this.state.listDoctors}
              placeholder={"Chọn bác sĩ..."}
            />
          </div>
          <div className="content-right">
            <label>
              <FormattedMessage id="admin.manage-doctor.introduction" />
            </label>
            <textarea
              className="form-control"
              rows={4}
              onChange={(event) =>
                this.handleOnchangeText(event, "description")
              }
              value={this.state.description}
            ></textarea>
          </div>
        </div>
        <div className="more-infor-extra row">
          <div className="form-group col-4">
            <label for="inputState">Chọn giá</label>
            <Select
              value={selectedPrice}
              onChange={this.handleChangeSelectDoctorInfor}
              options={listPrice}
              placeholder={
                <FormattedMessage id="admin.manage-doctor.choose-price" />
              }
              name="selectedPrice"
            />
          </div>
          <div className="form-group col-4">
            <label for="inputState">Chọn phương thức thanh toán</label>
            <Select
              value={selectedPayment}
              onChange={this.handleChangeSelectDoctorInfor}
              options={listPayment}
              placeholder={
                <FormattedMessage id="admin.manage-doctor.select-payment-method" />
              }
              name="selectedPayment"
            />
          </div>
          <div className="form-group col-4">
            <label for="inputState">Chọn tỉnh thành</label>
            <Select
              value={selectedProvince}
              onChange={this.handleChangeSelectDoctorInfor}
              options={listProvince}
              placeholder={
                <FormattedMessage id="admin.manage-doctor.select-province" />
              }
              name="selectedProvince"
            />
          </div>

          <div className="form-group col-4">
            <label for="inputState">Tên phòng khám</label>
            <input
              className="form-control"
              type="text"
              onChange={(event) => this.handleOnchangeText(event, "nameClinic")}
              value={this.state.nameClinic}
            ></input>
          </div>
          <div className="form-group col-4">
            <label for="inputState">Địa chỉ phòng khám</label>
            <input
              className="form-control"
              type="text"
              onChange={(event) =>
                this.handleOnchangeText(event, "addressClinic")
              }
              value={this.state.addressClinic}
            ></input>
          </div>
          <div className="form-group col-4">
            <label for="inputState">Note</label>
            <input
              className="form-control"
              type="text"
              onChange={(event) => this.handleOnchangeText(event, "note")}
              value={this.state.note}
            ></input>
          </div>
        </div>
        <div className="manage-doctor-edittor">
          <MdEditor
            style={{ height: "500px" }}
            renderHTML={(text) => mdParser.render(text)}
            onChange={this.handleEditorChange}
            value={this.state.contentMarkdown}
          />
        </div>
        <button
          onClick={() => this.handleSaveContentMarkdown()}
          className={
            hasOldData === true ? "btn-save-doctor" : "btn-edit-doctor"
          }
        >
          {hasOldData === true ? (
            <span>
              <FormattedMessage id="admin.manage-doctor.edit-information" />
            </span>
          ) : (
            <span>
              <FormattedMessage id="admin.manage-doctor.save-information" />
            </span>
          )}
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    AllDoctors: state.admin.AllDoctors,
    doctorInforarr: state.admin.doctorInforarr,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllDoctor: () => dispatch(actions.fetchAllDoctor()),
    getDoctorInfor: () => dispatch(actions.getDoctorInfor()),
    SaveDetailDoctorr: (data) => dispatch(actions.SaveDetailDoctorr(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);
