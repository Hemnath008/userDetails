 import { Route, Routes } from "react-router-dom";
import Users from "./Users"
import Dashboard from "./Dashboard"
import MainLayout from "./MainLayout"

const Router = () => {
  return (
    <Routes>
        <Route element={<MainLayout />}>
        <Route path="/" element={<Users />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
     </Routes>
  );
};

export default Router;
