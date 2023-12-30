import React from "react";
import { Outlet } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

export default function HostLayout() {
  const styling = {
    fontWeight: "bold",
    color: "#161616",
    textDecoration: "underline",
    opacity: "1",
  };
  return (
    <>
      <nav className="host-nav">
        <NavLink
          end
          style={({ isActive }) => (isActive ? styling : null)}
          to={"/host"}
        >
          <h3>Dashboard</h3>
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? styling : null)}
          to={"/host/income"}
        >
          <h3>Income</h3>
        </NavLink>
        <NavLink
          to={"/host/vans"}
          style={({ isActive }) => (isActive ? styling : null)}
        >
          <h3>Vans</h3>
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? styling : null)}
          to={"/host/reviews"}
        >
          <h3>Reviews</h3>
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
