import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "../components/Layout/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Auth/Login/Login";
import ForgetPassword from "../pages/Auth/ForgetPassword/ForgetPassword";
import ResetPassword from "../pages/Auth/ResetPassword/ResetPassword";
import Users from "../pages/Dashboard/Users/Users";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Dashboard Layout + Nested Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;