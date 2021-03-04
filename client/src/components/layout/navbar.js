import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/dhplogo.png";
class Navbar extends Component {
  render() {
    return (
      <>
        <div className="navbar-fixed">
          <nav className="z-depth-0">
            <div className="nav-wrapper white">
              <Link
                to="/"
                style={{
                  fontFamily: "MONTSERRAT",
                }}
                className="col s5 brand-logo center black-text"
              >
                Digital Health Passport
                <img
                  class="brand-logo"
                  src={logo}
                  alt="Logo"
                  width="50px"
                  height="50px"
                  style={{ paddingTop: "10px", paddingLeft: "10px" }}
                />
              </Link>
              <ul class="right hide-on-med-and-down">
                <li>
                  <a class="waves-effect waves-light btn" id="butt">
                    DOWNLOAD REPORT
                  </a>
                </li>
                <li>
                  <a class="waves-effect waves-light btn" id="butt">
                    QRCode
                  </a>
                </li>
                <li>
                  <a class="waves-effect waves-light btn" id="butt">
                    Details
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </>
    );
  }
}
export default Navbar;
