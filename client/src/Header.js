import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header_container">
      <header>
        <img className="header_logo" src="" alt="headerLogo" />
        <nav>
          <li>
            <Link to="">이화이언 소개</Link>
          </li>
          <li>
            <Link to="">팀 소개</Link>
          </li>
          <li>
            <Link to="">지난 이화이언</Link>
          </li>
          <li>
            <Link to="">자주 묻는 질문</Link>
          </li>
        </nav>
      </header>
    </div>
  );
}

export default Header;
