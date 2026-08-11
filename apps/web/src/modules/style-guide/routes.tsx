import type { RouteObject } from "react-router";
import { StyleGuide } from "./pages/StyleGuidePage";

export const styleGuideRoutes: RouteObject[] = [
  { path: "style-guide", element: <StyleGuide /> },
];
