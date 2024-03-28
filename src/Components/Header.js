import React, { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="headerContainer">
      <div className="creativeLogo">
        <Link to="/home" className="link">
          <p className="logoTxt">CreativeLogo</p>
          {/* <img source={require("")} alt="CreativeLogo" className="" /> */}
        </Link>
      </div>

      <div className="menu" onClick={toggleMenu}>
        <span className="menuLine"></span>
        <span className="menuLine"></span>
        <span className="menuLine"></span>
      </div>

      <div className={`routesDiv ${menuOpen ? "showMenu" : ""}`}>
        <div className="linkDiv">
          <Link to="/home" className="link">
            HOME
          </Link>
          <Link to="/services" className="link">
            SERVICES
          </Link>
          <Link to="/pages" className="link">
            PAGES
          </Link>
          <Link to="/caseshop" className="link">
            CASE SHOP
          </Link>
          <Link to="/blog" className="link">
            BLOG
          </Link>
          <Link to="/content" className="link">
            CONTENT
          </Link>
        </div>

        <div className="socialDiv">
          <FontAwesomeIcon icon={faInstagram} className="" />
          <FontAwesomeIcon icon={faLinkedin} className="" />
          <FontAwesomeIcon icon={faTwitter} className="" />
          <FontAwesomeIcon icon={faFacebook} className="" />
        </div>

        <div className="search">
          <FontAwesomeIcon icon={faSearch} className="" />
        </div>

        <div className="help">
          <p>
            Need help? <br /> +92 666 888 0000
          </p>
        </div>
      </div>
    </div>
  );
}
