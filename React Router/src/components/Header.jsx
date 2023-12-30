import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  const styling = {
    fontWeight: "bold",
    opacity: "1",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <header>
      <Link to={"/"}>
        <h1>#VANLIFE</h1>
      </Link>
      <nav>
        <NavLink
          to={"/host"}
          style={({ isActive }) => (isActive ? styling : null)}
        >
          Host
        </NavLink>
        <NavLink
          to={"/about"}
          style={({ isActive }) => (isActive ? styling : null)}
        >
          About
        </NavLink>
        <NavLink
          to={"/vans"}
          style={({ isActive }) => (isActive ? styling : null)}
        >
          Vans
        </NavLink>
      </nav>
    </header>
  );
}
