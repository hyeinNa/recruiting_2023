import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./ModifyRecruitInfo.css";
import "./ModifyResultInfo.css";

function ModifyResultInfo() {
  const navigate = useNavigate();
  //url에서 지원자 고유 id 알아내기
  const pathName = window.location.pathname;
  const objectId = pathName.substring(18, pathName.length);
  //입력 폼에 대한 변수와 함수
  const [inputs, setInputs] = useState({
    showResultToApplicant: false,
    is1stResultPeriod: false,
    isFinalResultPeriod: false,
    surveyFormLink: "",
    masterTrainingPlace: "",
    isMarketingPreAssignment: false,
    isDesignPreAssignment: false,
    isWebDevPreAssignment: false,
    marketingPreAssignment: "",
    designPreAssignment: "",
    webDevPreAssignment: "",
    designPreAssignmentBannerName: "",
    designPreAssignmentPixelSize: "",
    designPreAssignmentSubmitPeriod: "",
    masterTrainingSchedule: "",
    isOnlineInterview: "",
    faceTofaceInterviewPlace: "",
    interviewWaitingPlace: "",
    masterTrainingWaitingPlace: "",
    masterTrainingWaitingTime: "",
  });
  const {
    showResultToApplicant,
    is1stResultPeriod,
    isFinalResultPeriod,
    surveyFormLink,
    masterTrainingPlace,
    isMarketingPreAssignment,
    isDesignPreAssignment,
    isWebDevPreAssignment,
    marketingPreAssignment,
    designPreAssignment,
    webDevPreAssignment,
    designPreAssignmentBannerName,
    designPreAssignmentPixelSize,
    designPreAssignmentSubmitPeriod,
    masterTrainingSchedule,
    isOnlineInterview,
    faceTofaceInterviewPlace,
    interviewWaitingPlace,
    masterTrainingWaitingPlace,
    masterTrainingWaitingTime,
  } = inputs;
  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const checkingCheckBox = (e) => {
    console.log(e.target.checked);

    const { name } = e.target;
    console.log(name);
    setInputs({
      ...inputs,
      [name]: e.target.checked,
    });
  };

  useEffect(() => {
    axios
      .get("/api/admin/applicantlist")
      .then((response) => {
        //로그인 안 했으면 login 창으로
        if (response.data.loggedIn !== true)
          navigate(`/admin/login`, { replace: true });
      })
      .catch((error) => {
        console.log("An error occurred: ", error.response);
      });

    axios
      .post("/api/manager/get", {
        key: 1234,
      })
      .then((response) => {
        setInputs({
          showResultToApplicant: response.data.showResultToApplicant,
          is1stResultPeriod: response.data.is1stResultPeriod,
          isFinalResultPeriod: response.data.isFinalResultPeriod,
          surveyFormLink: response.data.surveyFormLink,
          masterTrainingPlace: response.data.masterTrainingPlace,
          isMarketingPreAssignment: response.data.isMarketingPreAssignment,
          isDesignPreAssignment: response.data.isDesignPreAssignment,
          isWebDevPreAssignment: response.data.isWebDevPreAssignment,
          marketingPreAssignment: response.data.marketingPreAssignment,
          designPreAssignment: response.data.designPreAssignment,
          webDevPreAssignment: response.data.webDevPreAssignment,
          designPreAssignmentBannerName:
            response.data.designPreAssignmentBannerName,
          designPreAssignmentPixelSize:
            response.data.designPreAssignmentPixelSize,
          designPreAssignmentSubmitPeriod:
            response.data.designPreAssignmentSubmitPeriod,
          masterTrainingSchedule: response.data.masterTrainingSchedule,
          isOnlineInterview: response.data.isOnlineInterview,
          faceTofaceInterviewPlace: response.data.faceTofaceInterviewPlace,
          interviewWaitingPlace: response.data.interviewWaitingPlace,
          masterTrainingWaitingPlace: response.data.masterTrainingWaitingPlace,
          masterTrainingWaitingTime: response.data.masterTrainingWaitingTime,
        });
      })
      .catch((error) => {
        console.log("An error occurred: ", error.response);
      });
  }, []);

  const updateInfo = () => {
    axios
      .post("/api/manager/modify/resultInfo", {
        showResultToApplicant: inputs.showResultToApplicant,
        is1stResultPeriod: inputs.is1stResultPeriod,
        isFinalResultPeriod: inputs.isFinalResultPeriod,
        surveyFormLink: inputs.surveyFormLink,
        masterTrainingPlace: inputs.masterTrainingPlace,
        isMarketingPreAssignment: inputs.isMarketingPreAssignment,
        isDesignPreAssignment: inputs.isDesignPreAssignment,
        isWebDevPreAssignment: inputs.isWebDevPreAssignment,
        marketingPreAssignment: inputs.marketingPreAssignment,
        designPreAssignment: inputs.designPreAssignment,
        webDevPreAssignment: inputs.webDevPreAssignment,
        designPreAssignmentBannerName: inputs.designPreAssignmentBannerName,
        designPreAssignmentPixelSize: inputs.designPreAssignmentPixelSize,
        designPreAssignmentSubmitPeriod: inputs.designPreAssignmentSubmitPeriod,
        masterTrainingSchedule: inputs.masterTrainingSchedule,
        isOnlineInterview: inputs.isOnlineInterview,
        faceTofaceInterviewPlace: inputs.faceTofaceInterviewPlace,
        interviewWaitingPlace: inputs.interviewWaitingPlace,
        masterTrainingWaitingPlace: inputs.masterTrainingWaitingPlace,
        masterTrainingWaitingTime: inputs.masterTrainingWaitingTime,
      })
      .then((response) => {
        console.log(response.data.basicInfoUpdateSuccess);
      })
      .catch((error) => {
        console.log("An error occurred: ", error.response);
      });
    window.location.reload();
    alert("수정이 완료되었습니다.");
  };
  return (
    <div className="modify_recruitInfo_container resultInfo_container">
      <div className="modify_recruitInfo_inner_container">
        <div className="modify_recruitInfo_content_container">
          <div className="recruitInfo_isApplyPeriod recruitInfo_forms">
            <div className="resultInfo_label">지원자에게 결과 공개</div>
            <div className="switch_wrapper">
              <input
                type="checkbox"
                name="showResultToApplicant"
                value={showResultToApplicant || false}
                id="switch4"
                checked={showResultToApplicant}
                onChange={checkingCheckBox}
              />
              <label htmlFor="switch4" className="switch_label">
                <span className="onf_btn"></span>
              </label>
            </div>
          </div>
          <div className="recruitInfo_isApplyPeriod recruitInfo_forms">
            <div className="resultInfo_label">1차 결과 확인 기간</div>
            <div className="switch_wrapper">
              <input
                type="checkbox"
                name="is1stResultPeriod"
                value={is1stResultPeriod || false}
                id="switch"
                checked={is1stResultPeriod}
                onChange={checkingCheckBox}
              />
              <label htmlFor="switch" className="switch_label">
                <span className="onf_btn"></span>
              </label>
            </div>
          </div>
          <div className="recruitInfo_isApplyPeriod recruitInfo_forms">
            <div className="resultInfo_label">최종 결과 확인 기간</div>
            <div className="switch_wrapper">
              <input
                type="checkbox"
                name="isFinalResultPeriod"
                value={isFinalResultPeriod || false}
                id="switch2"
                checked={isFinalResultPeriod}
                onChange={checkingCheckBox}
              />
              <label htmlFor="switch2" className="switch_label">
                <span className="onf_btn"></span>
              </label>
            </div>
          </div>
          <div className="recruitInfo_isApplyPeriod recruitInfo_forms">
            <div className="resultInfo_label">온라인 면접</div>
            <div className="switch_wrapper">
              <input
                type="checkbox"
                name="isOnlineInterview"
                value={isOnlineInterview || false}
                id="switch3"
                checked={isOnlineInterview}
                onChange={checkingCheckBox}
              />
              <label htmlFor="switch3" className="switch_label">
                <span className="onf_btn"></span>
              </label>
            </div>
          </div>
          <div
            className={`recruitInfo_forms ${
              inputs.isOnlineInterview ? "hidden" : "true"
            } `}
          >
            <div className="resultInfo_label">대면 면접 장소</div>
            <input
              className="resultInfo_inputs_style"
              type="text"
              name="faceTofaceInterviewPlace"
              value={faceTofaceInterviewPlace || ""}
              onChange={onChange}
              required
            />
            <div className="resultInfo_label">면접 대기실 장소</div>
            <input
              className="resultInfo_inputs_style"
              type="text"
              name="interviewWaitingPlace"
              value={interviewWaitingPlace || ""}
              onChange={onChange}
              required
              placeholder="면접 대기 장소(대기 가능 시간)"
            />
          </div>
          <div className=" recruitInfo_forms">
            <div className="resultInfo_label">면접 전 설문조사 폼 링크</div>
            <input
              className="resultInfo_inputs_style"
              type="text"
              name="surveyFormLink"
              value={surveyFormLink || ""}
              onChange={onChange}
              required
            />
          </div>
          <div className="recruitInfo_isApplyPeriod recruitInfo_forms">
            <div className="resultInfo_label">마스터 교육 일정</div>
            <input
              className="resultInfo_inputs_style"
              type="text"
              name="masterTrainingSchedule"
              value={masterTrainingSchedule || ""}
              onChange={onChange}
              placeholder="0월 00일(요일) 오전/오후 00시 00분"
              required
            />{" "}
            <div className="resultInfo_label">마스터 교육 장소</div>
            <input
              className="resultInfo_inputs_style"
              type="text"
              name="masterTrainingPlace"
              value={masterTrainingPlace || ""}
              onChange={onChange}
              required
            />
          </div>
          <div className="recruitInfo_isApplyPeriod recruitInfo_forms">
            <div className="resultInfo_label">마스터 교육 대기 장소</div>
            <input
              className="resultInfo_inputs_style"
              type="text"
              name="masterTrainingWaitingPlace"
              value={masterTrainingWaitingPlace || ""}
              onChange={onChange}
              required
            />
            <div className="resultInfo_label">대기 가능 시간</div>
            <input
              className="resultInfo_inputs_style"
              type="text"
              name="masterTrainingWaitingTime"
              value={masterTrainingWaitingTime || ""}
              onChange={onChange}
              required
            />
          </div>
          <div className="resultInfo_preAssignment_container">
            <div className="recruitInfo_recruitTeams recruitInfo_forms resultInfo_last_form">
              <div className="resultInfo_label">면접 전 사전과제</div>
              <div className="recruitInfo_radioBtns">
                <div className="recruitInfo_radio_wrap">
                  <input
                    type="checkbox"
                    className="recruitInfo_radio"
                    name="isMarketingPreAssignment"
                    value={isMarketingPreAssignment || false}
                    checked={isMarketingPreAssignment}
                    onChange={checkingCheckBox}
                  />
                  <div className="recruitInfo_radio_label">마케팅팀</div>
                </div>
                <div className="recruitInfo_radio_wrap">
                  <input
                    type="checkbox"
                    className="recruitInfo_radio"
                    name="isDesignPreAssignment"
                    value={isDesignPreAssignment || false}
                    checked={isDesignPreAssignment}
                    onChange={checkingCheckBox}
                  />
                  <div className="recruitInfo_radio_label">디자인팀</div>
                </div>
                <div className="recruitInfo_radio_wrap">
                  <input
                    type="checkbox"
                    className="recruitInfo_radio"
                    name="isWebDevPreAssignment"
                    value={isWebDevPreAssignment || false}
                    checked={isWebDevPreAssignment}
                    onChange={checkingCheckBox}
                  />
                  <div className="recruitInfo_radio_label">웹개발팀</div>
                </div>
              </div>
            </div>
            <div className="resultInfo_preAssignment">
              <div
                className={`preAssignment_marketing presAssignment_form ${
                  inputs.isMarketingPreAssignment ? "visible" : "hidden"
                } `}
              >
                <textarea
                  className="preAssignment_inputs_style"
                  type="text"
                  name="marketingPreAssignment"
                  value={marketingPreAssignment || ""}
                  onChange={onChange}
                  required
                  placeholder="마케팅팀 사전과제"
                ></textarea>
              </div>
              <div
                className={`preAssignment_design presAssignment_form ${
                  inputs.isDesignPreAssignment ? "visible" : "hidden"
                } `}
              >
                <input
                  className="preAssignment_design_inputs_style design_input1"
                  type="text"
                  name="designPreAssignmentBannerName"
                  value={designPreAssignmentBannerName || ""}
                  onChange={onChange}
                  required
                  placeholder="배너 계절 이름"
                />
                <input
                  className="preAssignment_design_inputs_style design_input2"
                  type="text"
                  name="designPreAssignmentPixelSize"
                  value={designPreAssignmentPixelSize || ""}
                  onChange={onChange}
                  required
                  placeholder="배너 픽셀 사이즈(000x000)"
                />
                <input
                  className="preAssignment_design_inputs_style design_input3"
                  type="text"
                  name="designPreAssignmentSubmitPeriod"
                  value={designPreAssignmentSubmitPeriod || ""}
                  onChange={onChange}
                  required
                  placeholder="사전과제 제출 일정(0월 00일(요일) 시간)"
                />
              </div>
              <div
                className={`preAssignment_webdev presAssignment_form ${
                  inputs.isWebDevPreAssignment ? "visible" : "hidden"
                } `}
              >
                <textarea
                  className="preAssignment_inputs_style"
                  type="text"
                  name="webDevPreAssignment"
                  value={webDevPreAssignment || ""}
                  onChange={onChange}
                  required
                  placeholder="웹개발팀 사전과제"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="recruitInfo_update_button">
          <button onClick={updateInfo}>수정하기</button>
        </div>
      </div>
    </div>
  );
}

export default ModifyResultInfo;
