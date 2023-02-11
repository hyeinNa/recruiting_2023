import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <div className="header_container">
      <header>
        <div className="header_inner_container">
          <img
            className="header_logo"
            src="/img/header/white_logo.png"
            alt="headerLogo"
          />
          <div className="header_between"></div>
          <nav className="header_nav">
            <ul className="header_menu">
              <li className="header_item">
                <Link to="">이화이언 소개</Link>
              </li>
              <li className="header_item">
                <Link to="">팀 소개</Link>
              </li>
              <li className="header_item">
                <Link to="">지난 이화이언</Link>
              </li>
              <li className="header_item">
                <Link to="">자주 묻는 질문</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
