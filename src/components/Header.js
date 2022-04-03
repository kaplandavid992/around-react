import aroundUsLogo from "../images/logoAroundUS.svg";
import React from "react";

function Header() {
  return (
    <div className="header">
      <img
        src={aroundUsLogo}
        alt="around the us logo"
        className="header__title-logo"
      />
    </div>
  );
}

export default Header;
