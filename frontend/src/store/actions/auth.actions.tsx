import { ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import jwt_decode from "jwt-decode";

import { authActionsTypes } from "../constants/index";
import instance from "../utils/axios.instance";
import { AppDispatch, RootState } from "../store/store";
import { IError } from "../types/interfaces/error.interface";
import { IAuth, authAction } from "../types/auth.types";

/*********************************************************************/
const loginRequest = () => {
  return {
    type: authActionsTypes.LOGIN_REQUEST,
  };
};

const loginSuccess = (data: any) => {
  return {
    type: authActionsTypes.LOGIN_SUCCESS,
    payload: data,
  };
};
const loginFailure = (error: any) => {
  return {
    type: authActionsTypes.LOGIN_FAILURE,
    payload: error,
  };
};
/*********************************************************************/
const logoutUser = () => {
  return {
    type: authActionsTypes.LOGOUT,
  };
};
/*********************************************************************/
//authentication
export const login: ActionCreator<
  ThunkAction<void, RootState, null, authAction>
> = (username: string, password: string) => {
  return async (dispatch: AppDispatch) => {
    let auth: IAuth;
    dispatch(loginRequest());
    await instance
      .post(`/api/users/login`, {
        username,
        password,
      })
      .then(async (response: any) => {
        const decoded: any = jwt_decode(response.data.acccesToken);
        const { userId, username, email, role } = decoded;
        localStorage.setItem("token", response.data.acccesToken);
        //const userResponse = await instance.get(`/api/users/${decoded.userId}`);
        auth = {
          id: userId,
          name: "",
          lastname: "",
          username: username,
          email: email,
          role,
        };
        dispatch(loginSuccess(auth));
      })
      .catch((error: any) => {
        const data: IError = {
          status: error.response.status,
          data: {
            timestamp: error.response?.data?.timestamp,
            path: error.response?.data?.path,
            message: error.response?.data?.message,
          },
        };
        dispatch(loginFailure(data));
      });
  };
};

export const logout = () => {
  return (dispatch: AppDispatch) => {
    dispatch(logoutUser());
  };
};
