import React from "react";
import "./Footer.css";
import { cardinal_number } from "../../Var";
function Footer() {
  return (
    <footer className="footer_container">
      <div className="footer_inner_container">
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
                “이화이언 {cardinal_number}기 수습운영진 모집”
              </div>
            </div>
          </div>

          <ul className="footer_social_list">
            <li>
              <img src="/img/footer/sns_blog.png" alt="blogLink" />
            </li>
            <li>
              <img src="/img/footer/sns_instagram.png" alt="instagramLink" />
            </li>
            <li>
              <img src="/img/footer/sns_gmail.png" alt="gmailLink" />
            </li>
            <li>
              <img src="/img/footer/sns_ewhaian.png" alt="ewhaianLink" />
            </li>
            <li>
              <img src="/img/footer/sns_kakaotalk.png" alt="kakaotalkLink" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
