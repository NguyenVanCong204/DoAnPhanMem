import actionTypes from "./actionTypes";
import {
  getAllCodeService,
  createNewUserService,
  getAllUsers,
  deleteUserService,
  updateUserService,
  getTopDoctorHomeService,
  getAllDoctors,
  saveDetailDoctor,
} from "../../services/userService";
import { ToastContainer, toast } from "react-toastify";

// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START
// })

export const fetchGenderStart = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: actionTypes.FETCH_GENDER_START });

      let res = await getAllCodeService("GENDER");
      if (res && res.errCode === 0) {
        dispatch(fetchGenderSuccess(res.data));
      } else {
        dispatch(fetchGenderFailed());
      }
    } catch (error) {
      dispatch(fetchGenderFailed());
      console.log("FetchGenderStart Error", error);
    }
  };
};

export const fetchGenderSuccess = (genderData) => ({
  type: actionTypes.FETCH_GENDER_SUCCESS,
  data: genderData,
});

export const fetchGenderFailed = () => ({
  type: actionTypes.FETCH_GENDER_FAILED,
});

export const fetchPositionStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllCodeService("POSITION");
      if (res && res.errCode === 0) {
        dispatch(fetchPositionSuccess(res.data));
      } else {
        dispatch(fetchPositionFailed());
      }
    } catch (error) {
      dispatch(fetchPositionFailed());
      console.log("fetchPositionStart Error", error);
    }
  };
};
export const fetchPositionSuccess = (positionData) => ({
  type: actionTypes.FETCH_POSITION_SUCCESS,
  data: positionData,
});

export const fetchPositionFailed = () => ({
  type: actionTypes.FETCH_POSITION_FAILED,
});

export const fetchRoleStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllCodeService("ROLE");
      if (res && res.errCode === 0) {
        dispatch(fetchRoleSuccess(res.data));
      } else {
        dispatch(fetchRoleFailed());
      }
    } catch (error) {
      dispatch(fetchRoleFailed());
      console.log("fetchRoleStart Error", error);
    }
  };
};

export const createNewUser = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await createNewUserService(data);
      console.log("Check craete new user ", res);
      if (res && res.errCode === 0) {
        toast.success("CREATE USER SUCCESS");
        dispatch(saveUserSuccess());
        dispatch(fetchAllUserStart());
      } else {
        dispatch(saveUserFailed());
      }
    } catch (error) {
      toast.error("CREATE USER UNSUCCESSFUL");
      dispatch(saveUserFailed());
      console.log("saveUserFailed Error", error);
    }
  };
};

export const saveUserSuccess = () => ({
  type: "CREATE_USER_SUCCESS",
});

export const saveUserFailed = () => ({
  type: "CREATE_USER_FAILDED",
});

export const fetchRoleSuccess = (roleData) => ({
  type: actionTypes.FETCH_ROLE_SUCCESS,
  data: roleData,
});

export const fetchRoleFailed = () => ({
  type: actionTypes.FETCH_ROLE_FAILED,
});

export const fetchAllUserStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllUsers("ALL");
      if (res && res.errCode === 0) {
        dispatch(fetchAllUserSuccess(res.userData.reverse()));
      } else {
        dispatch(fetchAllUserFailed());
      }
    } catch (error) {
      dispatch(fetchAllUserFailed());
      console.log("fetchAllUserStart Error", error);
    }
  };
};
export const fetchAllUserSuccess = (roleData) => ({
  type: actionTypes.FETCH_ALL_USERS_SUCCESS,
  users: roleData,
});

export const fetchAllUserFailed = () => ({
  type: actionTypes.FETCH_ALL_USERS_FAILED,
});

export const deleteUser = (userId) => {
  return async (dispatch, getState) => {
    try {
      let res = await deleteUserService(userId);
      console.log("Check craete new user ", res);
      if (res && res.errCode === 0) {
        toast.success("DELETE USER SUCCESS");
        dispatch(fetchDeleteUserSuccess());
        dispatch(fetchAllUserStart());
      } else {
        dispatch(fetchDeleteUserFailed());
      }
    } catch (error) {
      toast.error("DELETE USER UNSUCCESSFUL");
      dispatch(fetchDeleteUserFailed());
      console.log("deleteUser Error", error);
    }
  };
};
export const fetchDeleteUserSuccess = () => ({
  type: actionTypes.DELETE_USER_SUCCESS,
});

export const fetchDeleteUserFailed = () => ({
  type: actionTypes.DELETE_USER_FAILDED,
});

export const updateUser = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await updateUserService(data);
      if (res && res.errCode === 0) {
        toast.success("UPDATE USER SUCCESS");
        dispatch(fetchUpdateUserSuccess());
        dispatch(fetchAllUserStart());
      } else {
        toast.error("UPDATE USER UNSUCCESSFUL");
        dispatch(fetchUpdateUserFailed());
      }
    } catch (error) {
      toast.error("UPDATE USER UNSUCCESSFUL");
      dispatch(fetchUpdateUserFailed());
      console.log("updateUser Error", error);
    }
  };
};

export const fetchUpdateUserSuccess = () => ({
  type: actionTypes.EDIT_USER_SUCCESS,
});

export const fetchUpdateUserFailed = () => ({
  type: actionTypes.EDIT_USER_FAILDED,
});

export const fetchTopDoctor = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getTopDoctorHomeService(7);
      if (res && res.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_TOP_DOCTOR_SUCCESS,
          dataDoctor: res.data,
        });
      } else {
        dispatch({
          type: actionTypes.FETCH_TOP_DOCTOR_SUCCESS,
        });
      }
    } catch (error) {
      console.log("fetchTopDoctor Error", error);
      dispatch({
        type: actionTypes.FETCH_TOP_DOCTOR_SUCCESS,
      });
    }
  };
};

export const fetchAllDoctor = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllDoctors();

      if (res && res.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_All_DOCTOR_SUCCESS,
          dataDr: res.data,
        });
      } else {
        dispatch({
          type: actionTypes.FETCH_All_DOCTOR_SUCCESS,
        });
      }
    } catch (error) {
      console.log("fetchAllDoctor Error", error);
      dispatch({
        type: actionTypes.FETCH_All_DOCTOR_SUCCESS,
      });
    }
  };
};

export const SaveDetailDoctorr = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await saveDetailDoctor(data);
      console.log("Check craete new doctor ", res);
      if (res && res.errCode === 0) {
        if (data.action === "EDIT") {
          toast.success("EDIT DOCTOR SUCCESS");
        } else if (data.action === "CREATE") {
          toast.success("CREATE DOCTOR SUCCESS");
        }
        dispatch({
          type: actionTypes.SAVE_DETAIL_DOCTOR_SUCCESS,
        });
      } else {
        dispatch({
          type: actionTypes.SAVE_DETAIL_DOCTOR_FAILED,
        });
      }
    } catch (error) {
      toast.error("CREATE DOCTOR UNSUCCESSFUL");
      dispatch({
        type: actionTypes.SAVE_DETAIL_DOCTOR_FAILED,
      });
      console.log("saveDoctorFailed Error", error);
    }
  };
};
