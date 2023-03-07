import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Footer.css";

function Footer() {
  const [cardinalNum, setCardinalNum] = useState("");
  useEffect(() => {
    axios
      .post("/api/var/load", {
        key: 1234,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.isInDB === "false") {
          setCardinalNum("");
        } else {
          setCardinalNum(response.data.cardinalNumber);
        }
      });
  }, []);
  return (
    <footer className="footer_container">
      <div className="footer_inner_container">
        <Link to="/admin/login" className="adminKey">
          <img src="/img/admin/key.png" alt="key" />
        </Link>
        <div className="footer_inner_inner_container">
          <div className="footer_contact">CONTACT</div>
          <div className="footer_content_container">
            <div className="footer_email_container">
              <div className="footer_email_label">전체 메일</div>
              <div className="footer_email_content">
                ewhaianrecruit@daum.net
              </div>
            </div>
            <div className="footer_kakaotalk_container">
              <div className="footer_kakaotalk_label">카카오톡 채널</div>
              <div className="footer_kakaotalk_content">
                “이화이언 {cardinalNum}기 수습운영진 모집”
              </div>
            </div>
            <ul className="footer_social_list">
              <li>
                <img
                  src="/img/footer/sns_blog.png"
                  alt="blogLink"
                  onClick={() => {
                    window.open("https://m.blog.naver.com/ewhaianblog");
                  }}
                />
              </li>
              <li>
                <img
                  src="/img/footer/sns_instagram.png"
                  alt="instagramLink"
                  onClick={() => {
                    window.open("http://instagram.com/ewhaian_2001");
                  }}
                />
              </li>
              <li>
                <img
                  src="/img/footer/sns_gmail.png"
                  alt="gmailLink"
                  onClick={() => {
                    window.open("mailto:ewhaianrecruit@daum.net");
                  }}
                />
              </li>
              <li>
                <img
                  src="/img/footer/sns_ewhaian.png"
                  alt="ewhaianLink"
                  onClick={() => {
                    window.open("http://www.ewhaian.com");
                  }}
                />
              </li>
              <li>
                <img
                  src="/img/footer/sns_kakaotalk.png"
                  alt="kakaotalkLink"
                  onClick={() => {
                    window.open("http://pf.kakao.com/_xecNWxj");
                  }}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
