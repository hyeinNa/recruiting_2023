import React from "react";
import { Link } from "react-router-dom";
import BackBtn from "../../../utilis/BackBtn";
import "./MarketingDetailAcitivity.css";
import "./rotator.css";
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
            <div className="marketing_part2_process_container">
              <div className="sns_process_step12">
                <div className="sns_process_step_wrapper">
                  <div className="sns_process_step_img_wrapper">
                    <img
                      src="/img/teamInfo/detailActivities/marketing/snsMarketingProcess/step1.png"
                      alt="step1"
                    />
                  </div>
                  <div className="sns_process_label">아이디어 회의</div>
                </div>
                <div className="sns_process_arrow">
                  <img
                    src="/img/teamInfo/detailActivities/web/arrow.png"
                    alt="arrow"
                    className="step1_img"
                  />
                </div>
                <div className="sns_process_step_wrapper">
                  <div className="sns_process_step_img_wrapper">
                    <img
                      src="/img/teamInfo/detailActivities/marketing/snsMarketingProcess/step2.png"
                      alt="step2"
                      className="step2_img"
                    />
                  </div>
                  <div className="sns_process_label">
                    운영진 별 개인 게시물 기획
                  </div>
                </div>
              </div>
              <div className="sns_process_arrow" id="arrow2">
                <img
                  src="/img/teamInfo/detailActivities/web/arrow.png"
                  alt="arrow"
                />
              </div>
              <div className="sns_process_step34">
                <div className="sns_process_step_wrapper">
                  <div className="sns_process_step_img_wrapper">
                    <img
                      src="/img/teamInfo/detailActivities/marketing/snsMarketingProcess/step3.png"
                      alt="step3"
                      className="step3_img"
                    />
                  </div>
                  <div className="sns_process_label">상호 피드백</div>
                </div>
                <div className="sns_process_arrow">
                  <img
                    src="/img/teamInfo/detailActivities/web/arrow.png"
                    alt="arrow"
                  />
                </div>
                <div className="sns_process_step_wrapper">
                  <div className="sns_process_step_img_wrapper">
                    <img
                      src="/img/teamInfo/detailActivities/marketing/snsMarketingProcess/step4.png"
                      alt="step4"
                      className="step4_img"
                    />
                  </div>
                  <div className="sns_process_label">
                    제작 및 업로드를 통한
                    <br />
                    개인 포트폴리오 누적
                  </div>
                </div>
              </div>
            </div>

            <div className="marketing_description">
              이화이언 마케팅팀은 팀 회의를 거쳐 각 운영진별 주차에 맞게 개인의
              아이디어와 상상력을 가득 담은 개인 게시물을 기획합니다.
              <br />
              이후 팀원 간의 상호 피드백을 거쳐 본인의 아이디어를 실제 게시물로
              기획 및 구현하여 업로드하는 과정을 거치게 됩니다.
              <br />
              이를 통해 각 운영진 고유의 색이 담긴 SNS 마케팅 포트폴리오가
              완성됩니다.
            </div>
          </div>
          <div className="marketing_part3_contianer">
            <div className="marketing_title">역대 행사 협찬 기업</div>
            <div className="marketing_part3_sponsoredCompany_wrapper">
              <div className="rotator">
                <div className="rotator_items">
                  <img
                    src="/img/teamInfo/detailActivities/marketing/sponsoredCompanyLogos/clinique.png"
                    alt="clinique"
                  />
                </div>
                <div className="rotator_items">
                  <img
                    src="/img/teamInfo/detailActivities/marketing/sponsoredCompanyLogos/daewoong.png"
                    alt="daewoong"
                  />
                </div>
                <div className="rotator_items">
                  <img
                    src="/img/teamInfo/detailActivities/marketing/sponsoredCompanyLogos/isoi.png"
                    alt="isoi"
                  />
                </div>
                <div className="rotator_items">
                  <img
                    src="/img/teamInfo/detailActivities/marketing/sponsoredCompanyLogos/manyo.png"
                    alt="manyo"
                  />
                </div>
                <div className="rotator_items">
                  <img
                    src="/img/teamInfo/detailActivities/marketing/sponsoredCompanyLogos/mineumsa.png"
                    alt="mineumsa"
                  />
                </div>
                <div className="rotator_items">
                  <img
                    src="/img/teamInfo/detailActivities/marketing/sponsoredCompanyLogos/perrier.png"
                    alt="perrier"
                  />
                </div>
                <div className="rotator_items">
                  <img
                    src="/img/teamInfo/detailActivities/marketing/sponsoredCompanyLogos/teazen.png"
                    alt="teazen"
                  />
                </div>
              </div>
            </div>

            <div className="marketing_description marketing_description2">
              이화이언 마케팅팀은 다양한 분야의 기업과 컨택하며 해당 기업과의
              제휴, 컨택 건을 총괄하고 있습니다.
              <br />
              매년 색다른 행사 컨셉과 다양한 시도로 지금까지 라엘, 페리에,
              멜릭서, 콜만, 폰타나, 김영사, 낫아워스, 닥터브로너스, 메이크프렘,
              <br />
              아로마티카, 디어넛츠, 삐아 에딧비, 토리든 등
              <div className="pink"> 총 66개</div>의 유명 기업과 협찬을
              성사시켰습니다.
            </div>
          </div>
          <div className="marketing_part4_container">
            <div className="marketing_title">'마케팅 스터디 프로젝트'</div>
            <div className="marketing_description">
              이화이언 마케팅팀은 모든 팀원들이 보다 넓은 마케팅 커리어와 시야를
              구축할 수 있도록
              <br /> 2023년부터 추가적인 커리큘럼을 도입하여 진행하고 있습니다.
              <br />
              상호 소통과 적절한 협업, 개인 아이데이션을 거쳐 진행되는 체계적인
              커리큘럼을 통해
              <br /> 마케팅에 대한 보다 넓은 인사이트를 확보하고자 합니다.
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
