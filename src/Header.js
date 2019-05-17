import React from "react";
import logo from "./book-logo.png";
import { Link } from "@reach/router";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="header__logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
