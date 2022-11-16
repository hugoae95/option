import { authActionsTypes } from "../constants/index";
import { IError } from "./interfaces/error.interface";
import { Role } from './enum/roles';

export interface IAuth {
  id: string;
  name?: string;
  lastname?: string;
  username: string;
  email: string;
  role: Role;
}

/**********************LOGIN ACTION TYPES*************************/
interface loginRequestAction {
  type: typeof authActionsTypes.LOGIN_REQUEST;
}

interface loginStoreSuccessAction {
  type: typeof authActionsTypes.LOGIN_SUCCESS;
  payload: any;
}

interface loginStoreAction {
  type: typeof authActionsTypes.LOGIN_FAILURE;
  payload: IError;
}
/**********************AUTH USER ACTION TYPES*************************/
interface fetchAuthUserRequestAction {
  type: typeof authActionsTypes.FETCH_AUTH_USER_REQUEST;
}

interface fetchAuthUserSuccessAction {
  type: typeof authActionsTypes.FETCH_AUTH_USER_SUCCESS;
  payload: any;
}

interface fetchAuthUserFailureAction {
  type: typeof authActionsTypes.FETCH_AUTH_USER_FAILURE;
  payload: IError;
}

export type authAction =
  | loginRequestAction
  | loginStoreSuccessAction
  | loginStoreAction
  | fetchAuthUserRequestAction
  | fetchAuthUserSuccessAction
  | fetchAuthUserFailureAction;

export interface authState {
    loading: boolean;
    isLoggedIn: boolean;
    data: IAuth;
    error: IError;
}
