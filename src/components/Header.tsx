import { NavLink } from "react-router-dom";

import { pages } from "../constants";

import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="container header">
      <Logo />
      <nav className="nav">
        {pages.map((page, index) => (
          <NavLink key={index} to={`/${page.route}`}>
            {page.title}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
