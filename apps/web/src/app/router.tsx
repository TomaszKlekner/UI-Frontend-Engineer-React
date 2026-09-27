import { createBrowserRouter } from "react-router";
import { dashboardRoutes } from "../modules/dashboard";
import { homeRoutes } from "../modules/home";
import { styleGuideRoutes } from "../modules/style-guide";
import { ErrorLayout } from "./layouts/ErrorLayout";
import { RootLayout } from "./layouts/RootLayout";
import { NotFoundPage } from "./pages/NotFoundPage";
import { RootErrorPage } from "./pages/RootErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <RootErrorPage />,
    children: [
      {
        errorElement: <RootErrorPage />,
        children: [...homeRoutes, ...dashboardRoutes, ...styleGuideRoutes],
      },
    ],
  },
  {
    path: "*",
    element: <ErrorLayout />,
    children: [{ path: "*", element: <NotFoundPage /> }],
  },
]);
