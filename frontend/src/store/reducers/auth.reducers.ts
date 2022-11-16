import { authActionsTypes } from "../constants/index";
import { Action } from "../types/actions.types";
import { IError } from "../types/interfaces/error.interface";
import { IAuth, authState } from "../types/auth.types";
import { Role } from "../types/enum/roles";

let error: IError = {
  status: "",
  data: { timestamp: "", path: "", message: "" },
};
let auth: IAuth = {
  id: "",
  role: Role.ADMINISTRADOR_GENERAL,
  username: "",
  email: "",
};

const initialState = {
  loading: false,
  isLoggedIn: false,
  data: auth,
  error: error,
};

const loginReducer = (state = initialState, action: Action): authState => {
  switch (action.type) {
    case authActionsTypes.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case authActionsTypes.LOGIN_SUCCESS:
      return {
        loading: false,
        isLoggedIn: true,
        data: action.payload,
        error: error,
      };
    case authActionsTypes.LOGIN_FAILURE:
      return {
        loading: false,
        isLoggedIn: false,
        data: initialState.data,
        error: action.payload,
      };
    case authActionsTypes.LOGOUT:
      localStorage.clear();
      return initialState;
    default:
      return state;
  }
};

export default loginReducer;
