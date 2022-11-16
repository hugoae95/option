import { routeActionsTypes } from "../constants/auth.actionTypes";

/*********************************************************************/
export const routeAdd = (data: any) => {
    return {
      type: routeActionsTypes.ROUTE_ADD,
      payload: data
    };
  };

/*********************************************************************/
export const routeClear = () => {
    return {
        type: routeActionsTypes.ROUTE_CLEAR,
    };
  };