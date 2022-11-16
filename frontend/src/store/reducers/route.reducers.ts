import { routeActionsTypes } from "../constants/auth.actionTypes";
import { Action } from "../types/actions.types";


const initialState = {
    current: {
      path: "",
      Component: undefined,
      name: ""
    }
};

const routeReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case routeActionsTypes.ROUTE_ADD:
      return {
        ...state,
        current: action.payload,
      };
    case routeActionsTypes.ROUTE_CLEAR:
      return initialState;
    default:
      return state;
  }
};

export default routeReducer;
