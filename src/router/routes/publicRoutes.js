import { lazy } from "react";

const Login = lazy(() => import("../../views/auth/Login"));
const Register = lazy(() => import("../../views/auth/Register"));
const AdminLogin = lazy(() => import("../../views/auth/AdminLogin"));

const publicRoutes = [
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register ,
  },
  {
    path: "/admin/login",
    Component: AdminLogin ,
  },
];
export default publicRoutes;
