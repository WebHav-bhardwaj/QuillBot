import React from "react";
import logo from "../Images/Logo.png";
import NavComp from "./NavComp";

export default function MainNav() {
  return (
    <div className=" absolute w-full flex flex-row justify-center h-12 ">
      <div className="w-1/3 flex items-center">
        <img className=" h-full" src={logo} alt="Logo" />
      </div>
      <div className="w-2/3">
        <NavComp />
      </div>
    </div>
  );
}
