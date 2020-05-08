import React from "react";

import { FcHome } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { FcFolder } from "react-icons/fc";
import { FcMoneyTransfer } from "react-icons/fc";
import { FcContacts } from "react-icons/fc";
import { FcLink } from "react-icons/fc";

import Home from "./home";
import About from "./about";
import Portfolio from "./portfolio";
import Services from "./services";
import Contact from "./contact";
import Links from "./links";

class SideBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav>
        <ul>
          <li
            onClick={() => {
              this.props.navigate(Home);
            }}
          >
            <FcHome className="nav-icon" />
            Home
            <img src={window.location.origin + "/happy.png"} />
          </li>
          <li
            onClick={() => {
              this.props.navigate(About);
            }}
          >
            <FcAbout className="nav-icon" />
            About
            <img src={window.location.origin + "/happy.png"} />
          </li>
          <li
            onClick={() => {
              this.props.navigate(Portfolio);
            }}
          >
            <FcFolder className="nav-icon" />
            Portfolio
            <img src={window.location.origin + "/happy.png"} />
          </li>
          <li
            onClick={() => {
              this.props.navigate(Services);
            }}
          >
            <FcMoneyTransfer className="nav-icon" />
            Services
            <img src={window.location.origin + "/happy.png"} />
          </li>
          <li
            onClick={() => {
              this.props.navigate(Contact);
            }}
          >
            <FcContacts className="nav-icon" />
            Contact
            <img src={window.location.origin + "/happy.png"} />
          </li>
          <li
            onClick={() => {
              this.props.navigate(Links);
            }}
          >
            <FcLink className="nav-icon" />
            Links
            <img src={window.location.origin + "/happy.png"} />
          </li>
        </ul>
      </nav>
    );
  }
}

export default SideBar;
