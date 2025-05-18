import axios from "../axios";

const createNewUserService = (data) => {
  return axios.post("/api/create-new-user", data);
};
const getInspectionSchedule = (mucdich) => {
  return axios({
    method: "get",
    url: `/api/get-inspection-schedule?mucdich=${mucdich}`,
  });
};
const getBusinessSchedule = (malich) => {
  return axios({
    method: "get",
    url: `/api/get-business-schedule?malich=${malich}`,
  });
};
const getFacilityOwner = (macoso) => {
  return axios({
    method: "get",
    url: `/api/get-facility-owner?macoso=${macoso}`,
  });
};
const getErrorPunish = () => {
  return axios({
    method: "get",
    url: `/api/get-error-punish`,
  });
};

const createNewAppraisall = (data) => {
  return axios.post("/api/create-new-appraisal", data);
};
export {
  createNewUserService,
  getInspectionSchedule,
  getBusinessSchedule,
  getErrorPunish,
  getFacilityOwner,
  createNewAppraisall,
};
