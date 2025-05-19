import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter as Router } from "connected-react-router";
import { history } from "../redux";
import { ToastContainer, Bounce } from "react-toastify";
import {
  userIsAuthenticated,
  userIsNotAuthenticated,
} from "../hoc/authentication";
import { path } from "../utils";
import Home from "../routes/Home";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import System from "../routes/System";
import CustomScrollbars from "../components/CustomScrollbars";
import { Redirect } from "react-router-dom";
import PersonalInformation from "./System/PersonalInformation";
import Company from "./Patient/Company";
import UserBusiness from "./System/User/UserBusiness";
import License from "./System/User/License";
import InspectionSchedule from "./System/User/InspectionSchedule";
import AddInspectionSchedle from "./System/User/AddInspectionSchedle";
import CotegoryError from "./System/User/CotegoryError";
import LicenseApproval from "./System/User/LicenseApproval";
import LicenseRecords from "./System/User/LicenseRecords";
import ScheduleBusiness from "./System/User/ScheduleBusiness";
import UserManage from "./System/Admin/UserManage";
class App extends Component {
  handlePersistorState = () => {
    const { persistor } = this.props;
    let { bootstrapped } = persistor.getState();
    if (bootstrapped) {
      if (this.props.onBeforeLift) {
        Promise.resolve(this.props.onBeforeLift())
          .then(() => this.setState({ bootstrapped: true }))
          .catch(() => this.setState({ bootstrapped: true }));
      } else {
        this.setState({ bootstrapped: true });
      }
    }
  };

  componentDidMount() {
    this.handlePersistorState();
  }

  HomePage;
  render() {
    return (
      <Fragment>
        <Router history={history}>
          <div className="main-container">
            <div className="content-container">
              <CustomScrollbars style={{ height: "100vh", width: "100%" }}>
                <Switch>
                  <Route
                    path={path.HOMEPAGE}
                    component={userIsNotAuthenticated(Home)}
                  />
                  <Route
                    path={path.LOGIN}
                    component={userIsNotAuthenticated(Login)}
                  />
                  <Route
                    path={path.USERMANAGE}
                    component={userIsNotAuthenticated(UserManage)}
                  />
                  <Route
                    path={path.SYSTEM}
                    component={userIsAuthenticated(System)}
                  />
                  <Route
                    path={path.USER}
                    component={userIsNotAuthenticated(PersonalInformation)}
                  />
                  <Route
                    path={path.COMPANY}
                    component={userIsNotAuthenticated(Company)}
                  />
                  <Route
                    path={path.SHOP}
                    component={userIsNotAuthenticated(UserBusiness)}
                  />
                  <Route
                    path={path.LICENSE}
                    component={userIsNotAuthenticated(License)}
                  />
                  <Route
                    path={path.INSPECTIONSCHEDULE}
                    component={userIsNotAuthenticated(InspectionSchedule)}
                  />
                  <Route
                    path={path.ADDINSPECTIONSCHEDULE}
                    component={userIsNotAuthenticated(AddInspectionSchedle)}
                  />
                  <Route
                    path={path.LICENSERECORDS}
                    component={userIsNotAuthenticated(LicenseRecords)}
                  />
                  <Route
                    path={path.CATEGORYERROR}
                    component={userIsNotAuthenticated(CotegoryError)}
                  />
                  <Route
                    path={path.LICENSEAPPROVAL}
                    component={userIsNotAuthenticated(LicenseApproval)}
                  />
                  <Route
                    path={path.SCHEDULEBUSINESS}
                    component={userIsNotAuthenticated(ScheduleBusiness)}
                  />
                  <Route
                    path={path.REGISTER}
                    component={userIsNotAuthenticated(Register)}
                  />
                  <Redirect exact from="/" to={path.LOGIN} />
                </Switch>
              </CustomScrollbars>
            </div>

            <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
              transition={Bounce}
            />
          </div>
        </Router>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    started: state.app.started,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
