import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { authState } from "../../types/auth.types";
import routes from "../../routes";
import { RootState } from "../../store/store";
import { Role } from "../../types/enum/roles";
import Forbidden from "./Forbidden";

const AppRouter = () => {
  const authState: authState = useSelector((state: RootState) => state.auth);
  const rol: Role = authState.data.role;

  return (
    <Routes>
      {routes.map(({ path, Component, permissions }, key: number) =>
        !permissions || permissions.includes(rol) ? (
          <Route key={key} path={path} element={<Component />} />
        ) : (
          <Route key={key} path={path} element={<Forbidden />} />
        )
      )}
    </Routes>
  );
};

export default AppRouter;
