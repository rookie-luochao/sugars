import { lazy } from "react";
import { domainChildPath } from "../config";

const Login = lazy(() => import("./index"));

export const loginRoutes = {
  path: `${domainChildPath}/login`,
  id: "登录",
  element: <Login />,
};
