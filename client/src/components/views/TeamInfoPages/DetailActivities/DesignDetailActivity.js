import React, { useEffect, useState } from "react";
import BackBtn from "../../../utilis/BackBtn";
import "./DesignDetailActivity.css";
import PopupBackground from "./popup/PopupBackground";
import PopupData from "./popup/DesignPopUpData.json";
import Header from "../../../Header/Header";
import Footer from "../../../Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
function DesignDetailActivity() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const [popupContent, setPopupContent] = useState("");
  const [isPopOpen, setIsPopOpen] = useState(false);
  const popUpOpen = (contentNum) => {
    setIsPopOpen(true);
    if (contentNum === 1) setPopupContent("siteBanner");
    else if (contentNum === 2) setPopupContent("goodsDesign");
    else if (contentNum === 3) setPopupContent("placeDesign");
    else setPopupContent("logoRenewal");
  };
  const closePopUp = () => {
    setIsPopOpen(false);
  };
  const selectComponent = {
    siteBanner: (
      <PopupBackground
        title={PopupData.designPopUpDatas[0].title}
        label={PopupData.designPopUpDatas[0].label}
        description={PopupData.designPopUpDatas[0].description}
        direction="column"
        imgNum={2}
        imgSrc1={PopupData.designPopUpDatas[0].imgSrc1}
        imgSrc2={PopupData.designPopUpDatas[0].imgSrc2}
        closePopUp={closePopUp}
      />
    ),
    goodsDesign: (
      <PopupBackground
        title={PopupData.designPopUpDatas[1].title}
        label={PopupData.designPopUpDatas[1].label}
        direction="row"
        imgNum={2}
        description={PopupData.designPopUpDatas[1].description}
        imgSrc1={PopupData.designPopUpDatas[1].imgSrc1}
        imgSrc2={PopupData.designPopUpDatas[1].imgSrc2}
        closePopUp={closePopUp}
      />
    ),
    placeDesign: (
      <PopupBackground
        title={PopupData.designPopUpDatas[2].title}
        label={PopupData.designPopUpDatas[2].label}
        description={PopupData.designPopUpDatas[2].description}
        direction="column"
        imgNum={1}
        imgSrc1={PopupData.designPopUpDatas[2].imgSrc1}
        imgSrc2={PopupData.designPopUpDatas[2].imgSrc2}
        closePopUp={closePopUp}
      />
    ),
    logoRenewal: (
      <PopupBackground
        title={PopupData.designPopUpDatas[3].title}
        label={PopupData.designPopUpDatas[3].label}
        direction="column"
        imgNum={1}
        description={PopupData.designPopUpDatas[3].description}
        imgSrc1={PopupData.designPopUpDatas[3].imgSrc1}
        imgSrc2={PopupData.designPopUpDatas[3].imgSrc2}
        closePopUp={closePopUp}
      />
    ),
  };

  return (
    <div>
      <Header />
      <div className="design_detail_activity_container between_wrapper">
        <div className="design_detail_activity_inner_container">
          <div className="design_detail_activity_content_container">
            <div
              className="design_detail_activity_part1_container design_detail_activity_part_container"
              data-aos="fade-up"
              data-aos-once="false"
            >
              <div className=" design_detail_activity_part1_title design_detail_activity_title">
                디자인팀 활동 내용
              </div>
              <div className="design_detail_activity_part1_description design_detail_activity_description">
                이화이언 디자인팀은 마케팅팀, 웹개발팀과의 협력을 통해
                이화이언의 온오프라인 프로그램 운영하고
                <br /> 포스터, 배너, 굿즈 이화이언에 필요한 전반적인 디자인을
                책임지고 있습니다.
              </div>
            </div>
            <div
              className="design_detail_activity_part2_container design_detail_activity_part_container"
              data-aos="fade-up"
              data-aos-once="false"
            >
              <div className="design_detail_activity_part2_subTitle design_detail_activity_subTitle">
                상호 피드백을 통한 퀄리티 있는 작업물
              </div>
              <div className="design_detail_activity_part2_title design_detail_activity_title">
                포트폴리오화 가능한 실무 경험
              </div>
              <div className="design_detail_activity_part2_description design_detail_activity_description">
                회사에 들어가면 특정행사, 아이템에 맞춰 디자인을 하게 되는 데
                이화이언에서는 간접적으로 가이드를 잘 활용하여 원하는 결과물을
                도출해내는
                <br /> 능력을 기르게 되고 다수의 운영진의 피드백을 바탕으로 실무
                업무 프로세스 방식을 배울 수 있습니다.
                <br /> 이는 더욱 매력적인 작업물을 유의미한 포트폴리오로
                이어지기도 한답니다.
              </div>
              <div className="design_detail_activity_part2_subContent_wrapper">
                <div
                  className="design_subContent_btn subContent1"
                  onClick={() => {
                    popUpOpen(1);
                  }}
                >
                  <img
                    src="/img/teamInfo/detailActivities/design_winter_banner.png"
                    alt="desgin_banner"
                  />
                  <div className="design_subContent_label">사이트 배너</div>
                </div>
                <div
                  className="design_subContent_btn subContent2"
                  onClick={() => {
                    popUpOpen(2);
                  }}
                >
                  <img
                    src="/img/teamInfo/detailActivities/design_goods_img.png"
                    alt="desgin_goodsDesign"
                  />
                  <div className="design_subContent_label">굿즈 디자인</div>
                </div>
                <div
                  className="design_subContent_btn subContent3"
                  onClick={() => {
                    popUpOpen(3);
                  }}
                >
                  <img
                    src="/img/teamInfo/detailActivities/design_place_design.png"
                    alt="desgin_placeDesign"
                  />
                  <div className="design_subContent_label">공간 디자인</div>
                </div>
                <div
                  className="design_subContent_btn subContent4"
                  onClick={() => {
                    popUpOpen(4);
                  }}
                >
                  <img
                    src="/img/teamInfo/detailActivities/design_logo_renewal.png"
                    alt="desgin_logo_renewal"
                  />
                  <div className="design_subContent_label">로고 리뉴얼</div>
                </div>
              </div>
              <div className="popup" id="popup">
                {isPopOpen ? selectComponent[popupContent] : null}
              </div>
            </div>
            <div
              className="design_detail_activity_part3_container design_detail_activity_part_container"
              data-aos="fade-up"
              data-aos-once="false"
            >
              <div className="design_detaiil_activity_part3_subTitle design_detail_activity_subTitle">
                디자인 스킬을 배울 수 있는 기회!
              </div>
              <div className="design_detail_activity_part3_title design_detail_activity_title">
                패스트 캠퍼스 스터디, 독서 지원금, 툴 강의 지원
              </div>
              <div className="design_detail_activity_part3_description design_detail_activity_description">
                이화이언은 디자인팀의 복지를 위해 패스트 캠퍼스 강의 지원, 폰트
                이용 혜택 외에도 다양한 교육지원금을 제공함으로써
                <br /> 운영진들이 보다 나은 환경에서 업무를 할 수 있도록
                지원합니다.
              </div>
              <div className="design_detail_activity_part3_subContent_wrapper">
                <div className="design_detail_activity_part3_subContent_inner_wrapper">
                  <div className="design_detail_activity_part3_subContent4_logos">
                    <img
                      src="/img/teamInfo/detailActivities/design_logos.png"
                      alt="design_use_logos"
                    />
                  </div>
                  <div className="design_detail_activity_part3_subContent4_lecture">
                    <img
                      src="/img/teamInfo/detailActivities/design_lecture.png"
                      alt="fastCampus_lecture"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BackBtn path="/" />
      </div>
      <Footer />
    </div>
  );
}

export default DesignDetailActivity;
