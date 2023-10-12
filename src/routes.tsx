import { Navigate, RouteObject } from "react-router-dom";
import { loginRoutes } from "./login/routes";
import { mainRoutes } from "./mainLayout/routes";
import { ErrorBoundaryWrapOutlet } from "./core/error-boundary";
import { domainChildPath } from "./config";

function getAppRoutes() {
  return [
    {
      path: "/",
      element: <ErrorBoundaryWrapOutlet />,
      children: [
        {
          index: true,
          element: <Navigate to={`/${domainChildPath}/login`} />,
        },
        loginRoutes,
        mainRoutes,
      ],
    },
  ] as RouteObject[];
}

export const appRoutes = getAppRoutes();
