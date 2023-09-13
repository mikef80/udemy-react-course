import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to={"/"}
              style={({ isActive }) =>
                isActive ? { fontWeight: 700 } : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/events"}
              style={({ isActive }) =>
                isActive ? { fontWeight: 700 } : undefined
              }
            >
              Events
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
