import { FC } from "react";
import { useSelector } from "react-redux";
import Loading from "./../Loading";
import { authState } from "../../../types/auth.types";
import { RootState } from "../../../store/store";
import useUser from "../../../hooks/useUser";
import { Navigate } from "react-router-dom";

interface IPrivateRoute {
  children: any;
  isLoggedIn?: any;
}

const PrivateRoute: FC<IPrivateRoute> = ({ children }) => {
  const authState: authState = useSelector((state: RootState) => state.auth);
  const { continueRoute } = useUser();

  return authState.loading ? (
    <Loading />
  ) : continueRoute() ? (
    children
  ) : (
    <Navigate to="/" replace={true} />
  );
};

export default PrivateRoute;
