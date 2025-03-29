import React, { Component } from "react";
import { connect } from "react-redux";

class ManageSchedule extends Component {
  render() {
    return (
      // Vì trong return chỉ đưa ra một khối ma fmk có 2 khối nên phải gộp thành một (Khối trong suốt)
      <React.Fragment>
        <div>Nguyễn Văn Công</div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    systemMenuPath: state.app.systemMenuPath,
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageSchedule);
