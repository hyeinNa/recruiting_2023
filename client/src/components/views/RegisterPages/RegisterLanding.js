import React from "react";
import "./RegisterLanding.css";
function RegisterLanding() {
  return (
    <div className="register_landing_container">
      <div className="register_landing_inner_container">
        <div className="register_landing_content_container">
          <div className="register_landing_title">지원하기</div>
          <div className="register_landing_applicant_type_container">
            <div className="register_landing_applicant_type_existing_container">
              <div className="existing_applicant_img_wrapper"></div>
              <div className="existing_applicant_content_wrapper">
                <div className="existing_applicant_title">기존 지원자</div>
                <div className="existing_applicant_description">
                  지원서를
                  <br />
                  수정할 수 있습니다.
                </div>
              </div>
            </div>
            <div className="register_landing_applicant_type_new_container">
              <div className="new_applicant_img_wrapper"></div>
              <div className="new_applicant_content_wrapper">
                <div className="new_applicant_title">신규 지원자</div>
                <div className="new_applicant_description">
                  처음 지원하시나요?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterLanding;
