import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(true);
  const toggleMenu = () => {
    const toggleImg = document.getElementById("nav_bar_toggleBtn_img_id");
    setMenuOpen((isMenuOpen) => !isMenuOpen);
    console.log(isMenuOpen);
    if (isMenuOpen) {
      toggleImg.src = "/img/header/xBtn.png";
      document.documentElement.style.setProperty(
        "--mobile-menu-display",
        "flex"
      );
    } else {
      toggleImg.src = "/img/header/hamburgerBar.png";
      document.documentElement.style.setProperty(
        "--mobile-menu-display",
        "none"
      );
    }
  };

  return (
    <nav className="nav_bar">
      <div className="nav_bar_container">
        <div className="nav_bar_inner_container">
          <div className="nav_bar_logo">
            <Link to="/">
              <img
                className="nav_bar_logoImg"
                src="/img/header/white_logo.png"
                alt="ewhaianLogo"
              />
            </Link>
          </div>
          <ul className="nav_bar_menu" id="nav_bar_menu">
            <li>
              <Link to="/register">이화이언 소개</Link>
            </li>
            <li>
              <Link to="/teamInfo">팀 소개</Link>
            </li>
            <li>
              <Link to="/">지난 이화이언</Link>
            </li>
            <li>
              <Link to="/">자주 묻는 질문</Link>
            </li>
          </ul>
          <div className="nav_bar_toggleBtn">
            <img
              src="/img/header/hamburgerBar.png"
              alt="toggleBtn"
              className="nav_bar_toggleBtn_img"
              id="nav_bar_toggleBtn_img_id"
              onClick={toggleMenu}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
