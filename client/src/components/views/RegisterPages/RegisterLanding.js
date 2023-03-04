import React from "react";
import { Link } from "react-router-dom";
import "./RegisterLanding.css";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import BackBtn from "../../utilis/BackBtn";
function RegisterLanding() {
  return (
    <div className="register_landing">
      <Header />
      <div className="register_landing_container">
        <BackBtn path="/" />
        <div className="register_landing_inner_container">
          <div className="register_landing_content_container">
            <div className="register_landing_title">지원 확인</div>
            <div className="register_landing_applicant_type_container">
              <div className="register_landing_applicant_type_existing_container register_landing_border_style">
                <Link to="/register/checkInfo">
                  <div className="register_landing_applicant_type_inner_container">
                    <div className="applicant_img_wrapper">
                      <img
                        src="/img/registerLanding/existing_applicant_img.png"
                        alt="existingApplicantImg"
                        className="existing_applicant_img"
                      />
                    </div>
                    <div className="applicant_content_wrapper">
                      <div className="applicant_title">기존 지원자</div>
                      <div className="existing_applicant_description">
                        지원서를
                        <br />
                        수정할 수 있습니다.
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="register_landing_applicant_type_new_container register_landing_border_style">
                <Link to="/register/newEnroll">
                  <div className="register_landing_applicant_type_inner_container">
                    <div className="applicant_img_wrapper">
                      <img
                        src="/img/registerLanding/new_applicant_img.png"
                        alt="newApplicantImg"
                        className="new_applicant_img"
                      />
                    </div>
                    <div className="applicant_content_wrapper">
                      <div className="applicant_title">신규 지원자</div>
                      <div className="new_applicant_description">
                        처음 지원하시나요?
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default RegisterLanding;
