import { useEffect, useState } from "react";

import { useMediaQuery } from "react-responsive";

import { useKeyPress, useScrollLock } from "../hooks";

import { Logo, Navigation } from ".";

export function Burger() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const classNameActive = isMenuOpen ? "open" : "";

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleMenuToggle();
    }
  };

  useKeyPress("Escape", handleMenuToggle);

  const { lockScroll, unlockScroll } = useScrollLock();

  useEffect(() => {
    if (isMenuOpen) {
      lockScroll();
    } else {
      unlockScroll();
    }
  }, [isMenuOpen, lockScroll, unlockScroll]);

  const smallMobile = useMediaQuery({ query: "(max-width:400px)" });

  return (
    <>
      <button
        type="button"
        className={`burger-button ${classNameActive}`}
        onClick={handleMenuToggle}
      >
        <div className="icon"></div>
      </button>
      <div
        className={`burger-backdrop ${
          isMenuOpen ? "burger-backdrop__active" : ""
        } `}
        onClick={handleBackdropClick}
      >
        <div
          className={`burger-background ${
            isMenuOpen && "burger-background__active"
          } `}
        >
          <button
            type="button"
            className={`burger-button ${classNameActive}`}
            onClick={handleMenuToggle}
          >
            <div className="icon"></div>
          </button>

          <div className="burger-column">
            {!smallMobile && <Logo />}
            <Navigation onClick={handleMenuToggle} direction="column" />
          </div>
        </div>
      </div>
    </>
  );
}
