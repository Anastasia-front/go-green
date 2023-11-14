import { NavLink } from "react-router-dom";

import { pages } from "../constants";

export function Header() {
  return (
    <header className="container header">
      <nav className="nav">
        {pages.map((page) => (
          <NavLink to={`/${page.route}`}>{page.title}</NavLink>
        ))}
      </nav>
    </header>
  );
}
