import { NavLink } from "react-router-dom";

import { pages } from "../constants";

import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <Logo />
        <nav className="nav">
          {pages.map((page, index) => (
            <NavLink key={index} to={`/${page.route}`}>
              {page.title}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
