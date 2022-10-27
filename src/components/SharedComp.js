import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function SharedComp() {
  return (
    <div>
      <NavLink to="/">
        <button className="button">
            <h4>Go Back Home </h4> 
          <span className="material-symbols-sharp">home</span> 
        </button>
      </NavLink>
      <Outlet />
    </div>
  );
}

export default SharedComp;
