import { FC } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../../../store/store";
import Loading from "./../Loading";
import { authState } from "../../../types/auth.types";

interface ILoginRoute {
  children: any;
  isLoggedIn?: any;
}

const LoginRoute: FC<ILoginRoute> = ({ children, isLoggedIn = false }) => {
  const authState: authState = useSelector((state: RootState) => state.auth);

  if (authState.loading) {
    return <Loading />;
  } else {
    if (!isLoggedIn) {
      return children;
    } else {
      return <Navigate to="/home" />;
    }
  }
};

export default LoginRoute;
