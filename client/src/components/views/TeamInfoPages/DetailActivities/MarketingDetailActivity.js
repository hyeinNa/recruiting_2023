import React from "react";
import { Link } from "react-router-dom";
import BackBtn from "../../../utilis/BackBtn";
import "./MarketingDetailAcitivity.css";
function MarketingDetailActivity() {
  return (
    <div className="marketing_detail_activity_container">
      <BackBtn path="/" />
      <div className="marketing_detail_activity_inner_container">
        <div className="marketing_detail_activity_content_container">
          <div className="marketing_part1_container">
            <div className="marketing_title marketing_part1_title">
              마케팅팀 활동 내용
            </div>
            <div className="marketing_description marketing_part1_description">
              이화이언은 재학생들이 직접 운영하고 있는 ‘이화를 사랑하는 사람들을
              위한' 비영리 집단입니다.
              <br />
              이화이언을 이용하는 이화인들을 위한 다양한 프로그램을 운영하기
              위해 활동하는 운영진은
              <br />
              마케팅팀, 디자인팀, 웹개발팀으로 구성되어 있습니다.
            </div>
          </div>
          <div className="marketing_part2_container">
            <div className="marketing_title">SNS 마케팅 프로세스</div>
            <div className="marketing_part2_img_wrapper">
              <img
                src="/img/teamInfo/detailActivities/marketing/snsMarketingProcess.png"
                alt="snsMarketingProcess"
              />
            </div>
            <div className="marketing_description">
              이화이언은 재학생들이 직접 운영하고 있는 ‘이화를 사랑하는 사람들을
              위한' 비영리 집단입니다.
              <br />
              이화이언을 이용하는 이화인들을 위한 다양한 프로그램을 운영하기
              위해 활동하는 운영진은
              <br />
              마케팅팀, 디자인팀, 웹개발팀으로 구성되어 있습니다.
            </div>
          </div>
          <div className="marketing_part3_contianer">
            <div className="marketing_title">역대 행사 협찬 기업</div>
            <div className="marketing_part3_sponsoredCompany_wrapper">
              <img
                src="/img/teamInfo/detailActivities/marketing/sponsoredCompanies.png"
                alt="sponsordCompanies"
              />
            </div>
            <div className="marketing_description">
              이화이언은 재학생들이 직접 운영하고 있는 ‘이화를 사랑하는 사람들을
              위한' 비영리 집단입니다.
              <br />
              이화이언을 이용하는 이화인들을 위한 다양한 프로그램을 운영하기
              위해 활동하는 운영진은
              <br />
              마케팅팀, 디자인팀, 웹개발팀으로 구성되어 있습니다.
            </div>
          </div>
          <div className="marketing_part4_container">
            <div className="marketing_title">'마케팅 스터디 프로젝트'</div>
            <div className="marketing_description">
              이화이언은 재학생들이 직접 운영하고 있는 ‘이화를 사랑하는 사람들을
              위한' 비영리 집단입니다.
              <br />
              이화이언을 이용하는 이화인들을 위한 다양한 프로그램을 운영하기
              위해 활동하는 운영진은
              <br />
              마케팅팀, 디자인팀, 웹개발팀으로 구성되어 있습니다.
            </div>
            <Link to="/teamInfo/detail/marketing/studyproject">
              <div className="marketing_part4_detail_btn">
                <div className="marketing_part4_detail_btn_img_wrapper">
                  <img
                    src="/img/teamInfo/detailActivities/marketing/goMarketingStudyProject.png"
                    alt="marketingStudyProjectBtn"
                  />
                </div>
                <div className="marketing_part4_detail_btn_label">
                  자세히 보기
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketingDetailActivity;
