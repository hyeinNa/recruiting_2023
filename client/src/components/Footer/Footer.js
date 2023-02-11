import React from "react";
import "./Footer.css";
import { cardinal_number } from "../../Var";
function Footer() {
  return (
    <div className="footer_container">
      <footer>
        <div className="footer_inner_container">
          <div className="footer_name color_white">CONTACT</div>
          <div className="footer_email_container color_white">
            <div className="footer_email_name color_white">전체 메일</div>
            <div className="footer_email color_white">
              ewhaianrecruit@daum.net
            </div>
          </div>
          <div className="footer_channel_container">
            <div className="footer_channel_name color_white">카카오톡</div>
            <div className="footer_channel color_white">
              채널 “이화이언 {cardinal_number}기 수습운영진 모집”
            </div>
          </div>
          <div className="footer_sns_container">
            <img
              className="footer_sns_blog footer_sns_logo"
              src="/img/footer/sns_blog.png"
              alt="blogLink"
            />
            <img
              className="footer_sns_instagram footer_sns_logo"
              src="/img/footer/sns_instaGram.png"
              alt="instaGramLink"
            />
            <img
              className="footer_sns_gmail footer_sns_logo"
              src="/img/footer/sns_gmail.png"
              alt="gmailLink"
            />
            <img
              className="footer_sns_ewhaian footer_sns_logo"
              src="/img/footer/sns_ewhaian.png"
              alt="ewhaianLink"
            />
            <img
              className="footer_sns_kakaotalk footer_sns_logo"
              src="/img/footer/sns_kakaotalk.png"
              alt="kakaotalkLink"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
