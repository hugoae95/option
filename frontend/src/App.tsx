import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Login from "./screens/auth/Login";
import Layout from "./screens/shared/Layout";
import ValidMail from "./screens/auth/ValidMail";
import Confirm from "./screens/auth/Confirm";
import AppRouter from "./screens/shared/AppRouter";
import PrivateRoute from "./screens/shared/routes/PrivateRoute";
import LoginRoute from "./screens/shared/routes/LoginRoute";
import { RootState } from "./store/store";
import { useSelector } from "react-redux";
import Register from "./screens/auth/Register";
import Home from "./screens/Home";
import Donate from "./screens/Donate";

function App() {
  const authState = useSelector((state: RootState) => state.auth);
  return (
    <>
      <Routes>
        <Route
          path="*"
          element={
            <PrivateRoute isLoggedIn={authState.isLoggedIn}>
              <Layout>
                <AppRouter />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/donate"
          element={
            <Layout>
              <Donate />
            </Layout>
          }
        />
        <Route path="/valid-mail" element={<ValidMail />} />
        <Route path="/confirm-login" element={<Confirm />} />
        <Route path="/confirm-register" element={<Confirm />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/login"
          element={
            <LoginRoute>
              <Login />
            </LoginRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
