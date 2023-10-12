import { MainLayout } from "./index";
import { pagesRoutes } from "../pages/routes";
import { domainChildPath } from "../config";

export const mainLayoutPath = "main";
export const mainLayoutFullPath = `/${domainChildPath}/${mainLayoutPath}`;

export const mainRoutes = {
  path: mainLayoutPath,
  element: <MainLayout />,
  children: pagesRoutes,
};
