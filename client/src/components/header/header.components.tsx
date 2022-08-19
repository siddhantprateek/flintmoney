// modules
import React from "react";
import { Link } from "react-router-dom";

// style
import './header.styles.css'

// asset
import { DownloadLogo } from "../../assets";

interface Nav {
  optionName: string;
  route: string;
}

const Header = () => {
  const NavOptions = [
    {
      optionName: "Home",
      route: "/",
    },
    {
      optionName: "About Us",
      route: "/about",
    },
    {
      optionName: "Roadmap",
      route: "/roadmap",
    },
    {
      optionName: "Careers",
      route: "/careers",
    },
    {
      optionName: "Blog",
      route: "/blog",
    },
  ];

  return (
    <header>
      <div className="nav_left">
        <a href="/">
          <img
            src={`https://www.flint.money/_next/image?url=%2Fnew-logo.png&w=1920&q=75`}
            alt=""
            className="logo"
          />
        </a>
        <ul className="nav_options">
          {NavOptions.map((option: Nav) => (
            <li>
              <Link to={option.route}>{option.optionName}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="nav_right">
        <div className="download-btn">
          <div className="dwn-content">
            Download Now
          </div>
          <img src={DownloadLogo} alt="" />
        </div>

      </div>
    </header>
  );
};

export default Header;
