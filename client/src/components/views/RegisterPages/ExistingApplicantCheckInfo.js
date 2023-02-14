import React from "react";
import "./ExistingApplicantCheckInfo.css";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
function ExistingApplicantCheckInfo() {
  return (
    <div className="register_checkInfo">
      <Header />
      <div className="register_checkInfo_container">
        <div className="register_checkInfo_inner_container">
          <div className="register_checkInfo_title">정보 확인</div>
          <form className="register_checkInfo_form_container">
            <div className="register_checkInfo_nameForm_wrapper">
              <div className="register_checkInfo_nameForm_label register_checkInfo_labels">
                성명
              </div>
              <input
                type="text"
                name="name"
                className="register_checkInfo_forms"
              />
            </div>
            <div className="register_checkInfo_studentIdForm_wrapper">
              <div className="register_checkInfo_studentIdForm_label_wrapper">
                <div className="register_checkInfo_studentIdForm_label register_checkInfo_labels">
                  학번
                </div>
              </div>
              <input
                type="text"
                name="studentId"
                className="register_checkInfo_forms"
                placeholder=" * 7자리를 입력해주세요."
              />
            </div>
            <div className="register_checkInfo_ewhaianIdForm_wrapper">
              <div className="register_checkInfo_ewhaianIdForm_label register_checkInfo_labels">
                이화이언 아이디
              </div>
              <input
                type="text"
                name="ewhaianId"
                className="register_checkInfo_forms"
              />
            </div>
            <div className="register_checkInfo_button_wrapper">
              <button type="submit" className="register_checkInfo_button">
                확인
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ExistingApplicantCheckInfo;
