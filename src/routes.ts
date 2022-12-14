import { lazy } from "react";
import paths from "./configs/paths";
import IRoutes from "./types/IRoutes";

const routes: IRoutes = [
  {
    path: paths.root,
    renders: "always",
    navigate: paths.home,
  },
  {
    path: paths.home,
    name: "Home",
    renders: "always",
    Page: lazy(() => import("./pages/DummyPage1")),
  },
  {
    path: paths.dashboard,
    name: "Dashboard",
    renders: "logged",
    Page: lazy(() => import("./pages/DummyPage2")),
  },
  {
    path: paths.signUp,
    name: "Sign up",
    renders: "loggedOut",
    Page: lazy(() => import("./pages/DummyPage3")),
  },
  {
    path: paths.notFound,
    renders: "always",
    Page: lazy(() => import("./pages/NotFoundPage")),
  },
];

export default routes;
