import { NavLink } from "react-router-dom";

import { pages } from "../constants";
import { useChangeHeaderOnScroll } from "../hooks";

import { Logo } from "./Logo";

export function Header() {
  const changeHeader = useChangeHeaderOnScroll();
  console.log(changeHeader);
  const additionalClass = changeHeader ? "black-gradient" : "";

  return (
    <header className={`header header__${additionalClass}`}>
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
