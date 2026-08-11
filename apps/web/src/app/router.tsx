import { createBrowserRouter } from "react-router";
import { dashboardRoutes } from "../modules/dashboard";
import { homeRoutes } from "../modules/home";
import { styleGuideRoutes } from "../modules/style-guide";
import { RootLayout } from "./layouts/RootLayout";
import { RootErrorPage } from "./pages/RootErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        errorElement: <RootErrorPage />,
        children: [...homeRoutes, ...dashboardRoutes, ...styleGuideRoutes],
      },
    ],
  },
]);
