import { DragTableDemo } from "./table/demo";

export const uiListModuleName = "ui-list";
export const uiListModuleNameDefaultPath = "table";

export const uiListRoutes = {
  path: uiListModuleName,
  id: "UI组件",
  children: [
    {
      path: uiListModuleNameDefaultPath,
      id: "拖拽列排序表格",
      element: <DragTableDemo />,
    },
  ],
};
