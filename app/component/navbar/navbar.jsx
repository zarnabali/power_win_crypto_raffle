"use client"
import React, { useRef, useEffect } from "react";
import "./navbar.css";
import NavPills from "./NavPills";
import CurvedNavbar from "./CurvedNavbar";

export default function Navbar() {
  const navPillsRef = useRef(null);
  const notchRef = useRef(null);

 

  return (
    <>
   < NavPills className="navpills-standalone-wrapper"/>
   <div className="navbar-spacer" style={{height: "40px"}}></div>
   <CurvedNavbar/>
   </>
  );
}