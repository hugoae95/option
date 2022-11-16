import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { routeAdd } from "../actions/route.actions";
import routes from "../routes";
import { RootState } from "../store/store";
import { routePermissions } from "../types/interfaces/routePermissions";

const useUser = () => {
  const { current } = useSelector((state: RootState) => state.route);
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (routes.length > 0) {
      const currentFilter = routes.filter(
        (route: routePermissions) => route.path === location.pathname
      );
      if (currentFilter.length) {
        const currentFl = currentFilter[0];
        dispatch(routeAdd(currentFl));
      }
    }
  }, [location, dispatch]);

  const continueRoute = () => {
    // isLoggedIn
    if (isLoggedIn) {
      return true;
    }
    return false;
  };

  return {
    isLoggedIn,
    current,
    continueRoute,
  };
};

export default useUser;
