import React from "react";
import { Link } from "react-router-dom";

import facebook from "./../img/facebook.png";
import instagram from "./../img/instagram.png";
import twitter from "./../img/twitter.png";

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <h2>Let's build together</h2>
        <ul className="footer-icon-links">
          <li>
            <a href="https://www.instagram.com/">
              <img src={instagram} alt="instagram" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/">
              <img src={facebook} alt="facebook" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/">
              <img src={twitter} alt="twitter" />
            </a>
          </li>
        </ul>
      </div>
      <Link to="/">
        <button className="footer-btn">Connect with us</button>
      </Link>
    </div>
  );
}
