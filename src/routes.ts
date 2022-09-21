import { lazy } from "react";
import paths from "./configs/paths";

const routes = [
  {
    path: paths.home,
    Page: lazy(() => import("./pages/DummyPage1")),
  },
  {
    path: paths.contact,
    Page: lazy(() => import("./pages/DummyPage2")),
  },
];

export default routes;
