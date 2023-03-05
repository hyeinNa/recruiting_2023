import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./EwhaianInfo.css";

function EwhaianInfo() {
  const [visibleMarketing, doesRecruitMarketing] = useState(true);
  const [visibleDesign, doesRecruitDesign] = useState(true);
  const [visibleWebDev, doesRecruitWebDev] = useState(true);
  const [applicationSubmission, applicationSubmissionPeriod] = useState("");
  const [firstPresentation, firstPresentationPeriod] = useState("");
  const [interview, interviewPeriod] = useState("");
  const [finalPresentation, finalPresentationPeriod] = useState("");
  const [isApplicationPeriod, setIsApplicationPeriod] = useState("true");
  useEffect(() => {
    axios
      .post("/api/var/load", {
        key: 1234,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.isInDB === "false") {
          doesRecruitMarketing(false);
        } else {
          doesRecruitMarketing(response.data.doesRecruitMarketing);
        }
      });
  }, []);
  useEffect(() => {
    axios
      .post("/api/var/load", {
        key: 1234,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.isInDB === "false") {
          doesRecruitDesign(false);
        } else {
          doesRecruitDesign(response.data.doesRecruitDesign);
        }
      });
  }, []);
  useEffect(() => {
    axios
      .post("/api/var/load", {
        key: 1234,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.isInDB === "false") {
          doesRecruitWebDev(false);
        } else {
          doesRecruitWebDev(response.data.doesRecruitWebDev);
        }
      });
  }, []);
  useEffect(() => {
    axios
      .post("/api/var/load", {
        key: 1234,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.isInDB === "false") {
          applicationSubmissionPeriod("");
        } else {
          applicationSubmissionPeriod(response.data.applicationSubmissionPeriod);
        }
      });
  }, []);
  useEffect(() => {
    axios
      .post("/api/var/load", {
        key: 1234,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.isInDB === "false") {
          firstPresentationPeriod("");
        } else {
          firstPresentationPeriod(response.data.firstPresentationPeriod);
        }
      });
  }, []);
  useEffect(() => {
    axios
      .post("/api/var/load", {
        key: 1234,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.isInDB === "false") {
          interviewPeriod("");
        } else {
          interviewPeriod(response.data.interviewPeriod);
        }
      });
  }, []);
  useEffect(() => {
    axios
      .post("/api/var/load", {
        key: 1234,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.isInDB === "false") {
          finalPresentationPeriod("");
        } else {
          finalPresentationPeriod(response.data.finalPresentationPeriod);
        }
      });
  }, []);
  useEffect(() => {
    axios
      .post("/api/var/load", {
        key: 1234,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.isInDB === "false") {
          isApplicationPeriod("");
        } else {
          isApplicationPeriod(response.data.setIsApplicationPeriod);
        }
      });
  }, []);

  const onApplyBtnClick = (e) => {
    if (isApplicationPeriod) {
      window.location.replace("/register");
    }
    else {
      window.location.replace("/register/notregisterperiod");
    }
  }
  return (
    <div className="info_body_container">
      <div className="info_container">
        <div className="info_inner_container">
          <div className="info_inner_inner_container">
            <div className="info_inner_inner_inner_container">
              <div className="info_content_title">이화이언이 뭔가요?</div>
              <div className="info_content_text">
                <div>이화이언은 이화여대 최대의 온라인 커뮤니티이자</div>
                <div>이화의 재학생 및 졸업생들이 교류하고 소통할 수 있는 공간입니다.</div>
              </div>
            </div>
            <div className="info_frame">
              <img
                className="info_frameImg"
                src="/img/ewhaianInfo/Frame.png"
                alt="infoFrame"
              />
            </div>
          </div>

          <div className="info_recruitment">
            <div className="info_recruitment_detail">
              <div className="info_recruitment_schedule">
                <div className="info_recruitment_title">모집일정</div>
                <div className="info_recruitment_content">
                  <div className="info_recruitment_schedule_list">
                    <li>
                      <div className="info_recruitment_schedule_num">01</div>
                      <div className="info_recruitment_schedule_stage">지원서 제출</div>
                      <div className="info_recruitment_schedule_date">{applicationSubmission}</div>
                    </li>
                    <div className="arrow">
                      <img
                        className="arrowImg"
                        src="/img/ewhaianInfo/Vector.png"
                        alt="Vector"
                      />
                    </div>
                    <li>
                      <div className="info_recruitment_schedule_num">02</div>
                      <div className="info_recruitment_schedule_stage">1차 발표</div>
                      <div className="info_recruitment_schedule_date">{firstPresentation}</div>
                    </li>
                    <div className="arrow">
                      <img
                        className="arrowImg"
                        src="/img/ewhaianInfo/Vector.png"
                        alt="Vector"
                      />
                    </div>
                    <li>
                      <div className="info_recruitment_schedule_num">03</div>
                      <div className="info_recruitment_schedule_stage">심층면접</div>
                      <div className="info_recruitment_schedule_date">{interview}</div>
                    </li>
                    <div className="arrow">
                      <img
                        className="arrowImg"
                        src="/img/ewhaianInfo/Vector.png"
                        alt="Vector"
                      />
                    </div>
                    <li>
                      <div className="info_recruitment_schedule_num">04</div>
                      <div className="info_recruitment_schedule_stage">합격발표</div>
                      <div className="info_recruitment_schedule_date">{finalPresentation}</div>
                    </li>
                  </div>
                </div>
              </div>
              <div className="info_recruitment_section">
                <div className="info_recruitment_title">모집부문</div>
                <div className="info_recruitment_content">
                  <ul className="info_recruitment_section_list">
                    {
                      visibleMarketing && <div className="info_recruitment_section_list_list">
                        <span>마케팅팀</span>
                      </div>
                    }
                    {
                      visibleDesign && <div className="info_recruitment_section_list_list">
                        <span>디자인팀</span>
                      </div>
                    }
                    {
                      visibleWebDev && <div className="info_recruitment_section_list_list">
                        <span>웹개발팀</span>
                      </div>
                    }
                  </ul>
                </div>
              </div>
              <div className="info_recruitment_requirements">
                <div className="info_recruitment_title">모집요건</div>
                <div className="info_recruitment_content">
                  <ul className="info_recruitment_requirements_list">
                    <li>
                      <div>이화이언을 사랑하는 벗</div>
                    </li>
                    <li>
                      <div>학번 제한은 없으나, 2년이상 활동 가능한 벗</div>
                    </li>
                  </ul>

                </div>
              </div>
            </div>
            <div className="info_recruitment_register">
              <ul className="info_recruitment_menu">
                <div className="info_recruitment_menu_list_1">
                  {/* <button onClick={onApplyBtnClick} ></button> */}
                  <Link to="/register">지원하기</Link>
                </div>
                <div className="info_recruitment_menu_list_2">
                  <Link to="/register/checkinfo">결과확인</Link>
                </div>


              </ul>
            </div>



          </div>
        </div>
      </div>
    </div>
  );
}

export default EwhaianInfo;