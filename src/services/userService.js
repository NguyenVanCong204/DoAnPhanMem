import axios from "../axios";

const handleLoginApi = (userEmail, userPassword) => {
  return axios.post("/api/login", { email: userEmail, password: userPassword });
};
const getAllUsers = (userId) => {
  return axios({
    method: "get",
    url: "/api/get-all-users",
    params: { id: userId },
  });
};

const createNewUserService = (data) => {
  return axios.post("/api/create-new-user", data);
};
const deleteUserService = (userId) => {
  return axios({
    method: "delete",
    url: "/api/delete-user",
    params: { id: userId },
  });
};
const updateUserService = (data) => {
  return axios({
    method: "post",
    url: "/api/edit-user",
    data: data,
  });
};
const getAllCodeService = (inputType) => {
  return axios({
    method: "get",
    url: "/api/AllCode",
    params: { type: inputType },
  });
};

const getTopDoctorHomeService = (limitInput) => {
  return axios({
    method: "get",
    url: "/api/top-doctor-home",
    params: { limit: limitInput },
  });
};
const getAllDoctors = () => {
  return axios({
    method: "get",
    url: "/api/get-all-doctors",
  });
};

const saveDetailDoctor = (data) => {
  return axios({
    method: "post",
    url: "/api/save-infor-doctors",
    data: data,
  });
};
const getDetailInforDoctor = (inputId) => {
  return axios({
    method: "get",
    url: `/api/get-detail-doctors-by-id?id=${inputId}`,
  });
};
const saveBulkScheduleDoctor = (data) => {
  return axios({
    method: "post",
    url: "/api/bulk-create-schedule",
    data: data,
  });
};
const getScheduleDoctorByDate = (inputId, dateInput) => {
  return axios({
    method: "get",
    url: `/api/get-schedule-doctor-by-date?doctorId=${inputId}&dateInput=${dateInput}`,
  });
};
export {
  handleLoginApi,
  getAllUsers,
  createNewUserService,
  deleteUserService,
  updateUserService,
  getAllCodeService,
  getTopDoctorHomeService,
  getAllDoctors,
  saveDetailDoctor,
  getDetailInforDoctor,
  saveBulkScheduleDoctor,
  getScheduleDoctorByDate,
};
