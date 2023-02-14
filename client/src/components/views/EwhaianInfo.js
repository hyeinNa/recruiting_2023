import React from "react";
import { Link } from "react-router-dom";
import "./EwhaianInfo.css";

function EwhaianInfo() {
  return (
    <div className="info_container">
        <div className="info_inner_container">
            <div className="info_inner_inner_container">
                <div className="info_content_title">이화이언이 뭔가요?</div>
                <div className="info_content_text">
                    <div>이화이언은</div>
                    <div>이화여대 최대의 온라인 커뮤니티이자</div>
                    <div>이화의 재학생 및 졸업생들이</div>
                    <div>교류하고 소통할 수 있는 공간입니다.</div>
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
            <div className="info_recruitment_schedule">
                  <div className="info_recruitment_title">모집일정</div>
                  <div className="info_recruitment_content">
                    <ul className="info_recruitment_schedule_list">
                        <li>
                              <div className="info_recruitment_schedule_stage">지원서 제출</div>
                              <div className="info_recruitment_schedule_date">09.22(목)</div>
                          </li>
                          <div className="arrow">&#8594;</div>
                          <li>
                              <div className="info_recruitment_schedule_stage">1차 발표</div>
                              <div className="info_recruitment_schedule_date">09.23(금)</div>
                          </li>
                          <div className="arrow">&#8594;</div>
                          <li>
                              <div className="info_recruitment_schedule_stage">심층면접</div>
                              <div className="info_recruitment_schedule_date">09.24(토)</div>
                          </li>
                          <div className="arrow">&#8594;</div>
                          <li>
                              <div className="info_recruitment_schedule_stage">합격발표</div>
                              <div className="info_recruitment_schedule_date">09.25(일)</div>
                        </li>
                    </ul>
                  </div>
            </div>
            <div className="info_recruitment_section">
                  <div className="info_recruitment_title">모집부문</div>
                  <div className="info_recruitment_content">
                      <ul className="info_recruitment_section_list">
                      <div className="info_recruitment_section_list_list">
                              <span>마케팅팀</span>
                      </div>
                      
                      <div className="info_recruitment_section_list_list">
                              <span>디자인팀</span>
                      </div>
                      <div className="info_recruitment_section_list_list">
                              <span>웹개발팀</span>
                      </div>
                    </ul>
                  </div>
            </div>
            <div className="info_recruitment_requirements">
                  <div className="info_recruitment_title">모집요건</div>
                  <div className="info_recruitment_content">
                      <ul className="info_recruitment_requirements_list">
                      <li>
                              <div>-이화이언을 사랑하는 벗</div>
                      </li>
                      <li>
                              <div>-학번 제한은 없으나, 2년이상 활동 가능한 벗</div>
                      </li>
                    </ul>

                  </div>
            </div>

              <ul className="info_recruitment_menu">
                <div className="info_recruitment_menu_list">
                      <Link to="/register">지원하기</Link>
                  </div>
                  <div className="info_recruitment_menu_list">
                      <Link to="/register/checkinfo">결과확인</Link>
                </div>
              
              
              </ul>      


              
        </div>
  

    </div>
  );
}

export default EwhaianInfo;