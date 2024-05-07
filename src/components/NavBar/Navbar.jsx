// import React from 'react'

import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Link from "../Link/Link";

function Navbar() {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Servics", path: "/services" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "Not Found", path: "*" },
  ];

  return (
    <nav className="text-black p-6 bg-yellow-200">
      <div className="text-2xl md:hidden" onClick={() => setOpen(!open)}>
        {open === true ? (
          <AiOutlineClose></AiOutlineClose>
        ) : (
          <AiOutlineMenu className=""></AiOutlineMenu>
        )}
      </div>
      <ul
        className={`md:flex absolute md:static ${
          open ? "top-16" : "-top-60"
        } bg-yellow-200 px-6`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
