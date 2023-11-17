import { useMediaQuery } from "react-responsive";

import { useChangeHeaderOnScroll } from "../hooks";

import { Burger, Navigation } from ".";
import { Logo } from "./Logo";

export function Header() {
  const changeHeader = useChangeHeaderOnScroll();

  const desktop = useMediaQuery({ query: "(min-width:1200px)" });

  const additionalClass = changeHeader ? "black-gradient" : "";

  return (
    <header className={`header header__${additionalClass}`}>
      <div className="container header-container">
        <Logo />

        {desktop ? <Navigation /> : <Burger />}
      </div>
    </header>
  );
}
