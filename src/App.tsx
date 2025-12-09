import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Dashboard from "./components/shared/dashboard";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={"login"} />
        <Route
          path="/admin"
          element={
            <div className="flex w-full">
              <Dashboard />
              <div>
                header <Outlet />
              </div>
            </div>
          }
        >
          <Route path="" element={"home"} />
          <Route path="aylanma" element={"Kirim & Chiqim"} />
          <Route path="manager" element={"managerlar"} />
          <Route path="deps" element={"qarzlar"} />
        </Route>
        <Route
          path="/manager"
          element={
            <div>
              dashboard
              <div>
                header <Outlet />
              </div>
            </div>
          }
        >
          <Route path="" element={"Sotish"} />
          <Route path="aylanma" element={"Kirim & Chiqim"} />
          <Route path="deps" element={"qarzlar"} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
