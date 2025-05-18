import actionTypes from "./actionTypes";
import { createNewUserService } from "../../services/userService";
import { ToastContainer, toast } from "react-toastify";

export const createNewUser = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await createNewUserService(data);
      console.log("Check craete new user ", res);
      if (res && res.errCode === 0) {
        toast.success("CREATE USER SUCCESS");
        dispatch(saveUserSuccess());
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
  type: actionTypes.CREATE_USER_SUCCESS,
});

export const saveUserFailed = () => ({
  type: actionTypes.CREATE_USER_FAILDED,
});
