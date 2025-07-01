import React from "react";
import {NavLink} from "react-router-dom";

  const Navbar = ({ appTitle }) => {


    return (

      <div className="bg-gray-800 text-white text-lg flex justify-center gap-5 p-4">
          <NavLink to="/" className="">Home</NavLink>
          <NavLink to="/todo" className="">Todo</NavLink>
          <NavLink to="/about" className="">About</NavLink>
      </div>
    );
  };

export default Navbar;


