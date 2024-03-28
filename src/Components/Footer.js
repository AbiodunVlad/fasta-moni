import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { Button } from "react-bootstrap";

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="upperFooter">
        <div className="leftCol">
          <div className="topSection">
            <Link to="/home" className="link">
              <p className="logoTxt">CreativeLogo</p>
              {/* <img src={require("")} alt="CreativeLogo" className="" /> */}
            </Link>
          </div>

          <div>
            <div className="welcomeTxt">
              <p className="txt">
                Welcome to our consultancy agency. Lore ipsum simply text amet
                cing elit simply text amet cing elit.
              </p>
            </div>

            <p className="txt">☎️+92 666 888 0000</p>
            <p className="txt">✉️needhelp@company.com</p>
            <p className="txt">📍66 Broklyn Street New York, USA</p>
          </div>
        </div>

        <div className="middleCol">
          <div className="topSection">
            <p className="topTxt">EXPLORE</p>
          </div>
          <div className="middleCol2">
            <div>
              <p className="txt">About</p>
              <p className="txt">Meet our Team</p>
              <p className="txt">Case studies</p>
              <p className="txt">Latest News</p>
              <p className="txt">Contact</p>
            </div>
            <div>
              <p className="txt">Support</p>
              <p className="txt">Terms of Use</p>
              <p className="txt">Privacy & Policy</p>
              <p className="txt">Help</p>
            </div>
          </div>
        </div>

        <div className="rightCol">
          <div className="topSection">
            <p className="topTxt">NEWSLETTER</p>
          </div>

          <div className="formDiv">
            <form>
              <label>Subscribe for latest articles and resources</label>

              <div className="formField">
                <input className="formInput" placeholder="Email Address" />
                <Button className="formBtn" type="submit">
                  Register
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="lowerFooter">
        <div>
          <p>©️Copyright 2021 by Company</p>
        </div>
        <div className="socialDiv">
          <FontAwesomeIcon icon={faInstagram} className="" />
          <FontAwesomeIcon icon={faLinkedin} className="" />
          <FontAwesomeIcon icon={faTwitter} className="" />
          <FontAwesomeIcon icon={faFacebook} className="" />
        </div>
      </div>
    </div>
  );
}
