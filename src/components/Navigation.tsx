import { NavLink } from "react-router-dom";

import { pages } from "../constants";

interface Props {
  direction?: "row" | "column";
  onClick?: () => void;
}

export function Navigation({ direction = "row", onClick }: Props) {
  return (
    <nav className={`nav ${direction === "column" ? "nav-column" : ""}`}>
      {pages.map((page, index) => (
        <NavLink key={index} to={`/${page.route}`} onClick={onClick}>
          {page.title}
        </NavLink>
      ))}
    </nav>
  );
}
