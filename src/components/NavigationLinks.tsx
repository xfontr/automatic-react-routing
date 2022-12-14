import { Link } from "react-router-dom";
import IRoutes from "../types/IRoutes";
import "./css/NavigationLinks.css";

type NavigationLinksProps = {
  routes: IRoutes;
  isLogged: boolean;
};

const NavigationLinks = ({
  routes,
  isLogged,
}: NavigationLinksProps): JSX.Element => (
  <>
    {routes.map(
      (route) =>
        route.name && (
          <>
            {route.renders === "always" && (
              <li key={route.name}>
                <Link to={route.path}>{route.name}</Link>
              </li>
            )}

            {isLogged && route.renders === "logged" && (
              <li key={route.name}>
                <Link to={route.path}>{route.name}</Link>
              </li>
            )}

            {!isLogged && route.renders === "loggedOut" && (
              <li key={route.name}>
                <Link to={route.path}>{route.name}</Link>
              </li>
            )}
          </>
        )
    )}
  </>
);

export default NavigationLinks;
