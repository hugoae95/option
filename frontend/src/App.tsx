import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./screens/shared/Layout";
import AppRouter from "./screens/shared/AppRouter";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="*"
          element={
            <Layout>
              <AppRouter />
            </Layout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
