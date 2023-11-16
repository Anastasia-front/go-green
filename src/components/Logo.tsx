import { Link } from "react-router-dom";

import svg from "../assets/svg/logo.svg";

import { logo } from "../constants";

import { CompanyName } from "./CompanyName";

export function Logo() {
  return (
    <Link to="/" className="logo">
      <img src={svg} alt={logo} className="logo-svg" />
      <CompanyName />
    </Link>
  );
}
