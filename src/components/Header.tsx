import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <header className="container header">
      <nav className="">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}
