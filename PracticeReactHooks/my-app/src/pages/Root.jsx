import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

export default function Root() {
  return (
    <>
      <Nav/>
      <Outlet />
    </>
  );
}
