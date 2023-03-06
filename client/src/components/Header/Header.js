import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Header.css";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(true);
  const [isApplicationPeriod, setApplicationPeriod] = useState(true);
  const ApplyStatus = () => {
    if (isApplicationPeriod) {
      window.location.replace("/register");
    }
    else {
      window.location.replace('/register/notperiod');
    }
  }
  useEffect(() => {
    axios
      .post("/api/var/load", {
        key: 1234,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.isInDB === "false") {
          setApplicationPeriod(false);

        } else {
          setApplicationPeriod(response.data.isApplicationPeriod);
        }
      });
    const pathName = window.location.pathname;
    document.documentElement.style.setProperty("--mobile-menu-display", "none");
    if (!(pathName === "/")) {
      document.getElementById("nav_bar_content_btn_container").style.display =
        "none";
    }
  }, []);
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
            <div className="nav_bar_apply_btn_container">
              <buttton
                className="nav_register_btn nav_apply_btns"
                onClick={ApplyStatus}
              >
                <div className="nav_apply_btns_text">지원하기</div>
              </buttton>
              <buttton
                className="nav_result_btn nav_apply_btns"
                onClick={() => {
                  window.location.replace("/result/checkinfo");
                }}
              >
                <div className="nav_apply_btns_text">결과확인</div>
              </buttton>
            </div>
            <div
              className="nav_bar_content_btn_container"
              id="nav_bar_content_btn_container"
            >
              <li
                onClick={() => {
                  const element = document.getElementById("ewhaianInfo");
                  element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                이화이언 소개
              </li>
              <li
                onClick={() => {
                  const element = document.getElementById("teamInfo");
                  element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                팀 소개
              </li>
              <li
                onClick={() => {
                  const element = document.getElementById("activities");
                  element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                지난 이화이언
              </li>
              <li
                onClick={() => {
                  const element = document.getElementById("qna");
                  element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                자주 묻는 질문
              </li>
            </div>
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
