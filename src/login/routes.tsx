import { lazy } from "react";
import { domainChildPath } from "../config";

const Login = lazy(() => import("./index"));

export const loginFullPath = `/${domainChildPath}/login`;

export const loginRoutes = {
  path: "login",
  id: "登录",
  element: <Login />,
};
