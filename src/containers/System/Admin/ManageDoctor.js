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
      contentMarkdown: "",
      contentHTML: "",
      selectedDoctor: null,
      description: "",
      listDoctors: [],
      hasOldData: false,
    };
  }
  componentDidMount() {
    this.props.fetchAllDoctor();
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
      action: hasOldData === true ? CRUD_ACTIONS.EDIT : CRUD_ACTIONS.CREATE,
    });
  };

  handleChangeSelect = async (selectedDoctor) => {
    this.setState({ selectedDoctor });

    let res = await getDetailInforDoctor(selectedDoctor.value);

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

  handleOnchangeDesc = (event) => {
    this.setState({
      description: event.target.value,
    });
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
  render() {
    console.log("Check doctors : ", this.state);

    const { selectedDoctor } = this.state.listDoctors;
    let arrUsers = this.state.userRedux;
    let hasOldData = this.state.hasOldData;

    return (
      <div className="manage-doctor-container">
        <div className="manage-docter-title">Tạo thêm thông tin Doctor</div>
        <div className="more-infor">
          <div className="content-left form-group">
            <label>Chọn bác sĩ</label>
            <Select
              value={this.state.selectedDoctor}
              onChange={this.handleChangeSelect}
              options={this.state.listDoctors}
            />
          </div>
          <div className="content-right">
            <label>Thông tin giới thiệu:</label>
            <textarea
              className="form-control"
              rows={4}
              onChange={(event) => this.handleOnchangeDesc(event)}
              value={this.state.description}
            >
              {" "}
              aaaaaaaaaaaaaaaaa
            </textarea>
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
            <span>Sửa thông tin</span>
          ) : (
            <span>Lưu thông tin</span>
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
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllDoctor: () => dispatch(actions.fetchAllDoctor()),
    SaveDetailDoctorr: (data) => dispatch(actions.SaveDetailDoctorr(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);
