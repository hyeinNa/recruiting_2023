import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./ModifyRecruitInfo.css";
function ModifyRecruitInfo() {
  //url에서 지원자 고유 id 알아내기
  const pathName = window.location.pathname;
  const objectId = pathName.substring(18, pathName.length);
  //입력 폼에 대한 변수와 함수
  const [inputs, setInputs] = useState({
    cardinalNumber: "",
    applicationSubmissionPeriod: "",
    firstPresentationPeriod: "",
    interviewPeriod: "",
    finalPresentationPeriod: "",
    isApplicationPeriod: false,
    doesRecruitMarketing: false,
    doesRecruitDesign: false,
    doesRecruitWebDev: false,
  });
  const {
    cardinalNumber,
    applicationSubmissionPeriod,
    firstPresentationPeriod,
    interviewPeriod,
    finalPresentationPeriod,
    isApplicationPeriod,
    doesRecruitMarketing,
    doesRecruitDesign,
    doesRecruitWebDev,
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
    setInputs({
      ...inputs,
      [name]: e.target.checked,
    });
  };

  useEffect(() => {
    axios
      .post("/api/manager/get", {
        id: objectId,
      })
      .then((response) => {
        setInputs({
          cardinalNumber: response.data.cardinalNumber,
          applicationSubmissionPeriod:
            response.data.applicationSubmissionPeriod,
          firstPresentationPeriod: response.data.firstPresentationPeriod,
          interviewPeriod: response.data.interviewPeriod,
          finalPresentationPeriod: response.data.finalPresentationPeriod,
          isApplicationPeriod: response.data.isApplicationPeriod,
          doesRecruitMarketing: response.data.doesRecruitMarketing,
          doesRecruitDesign: response.data.doesRecruitDesign,
          doesRecruitWebDev: response.data.doesRecruitWebDev,
        });
      })
      .catch((error) => {
        console.log("An error occurred: ", error.response);
      });
  }, []);

  const updateInfo = () => {
    axios
      .post("/api/manager/modify/recruitInfo", {
        cardinalNumber: inputs.cardinalNumber,
        applicationSubmissionPeriod: inputs.applicationSubmissionPeriod,
        firstPresentationPeriod: inputs.firstPresentationPeriod,
        interviewPeriod: inputs.interviewPeriod,
        finalPresentationPeriod: inputs.finalPresentationPeriod,
        isApplicationPeriod: inputs.isApplicationPeriod,
        doesRecruitMarketing: inputs.doesRecruitMarketing,
        doesRecruitDesign: inputs.doesRecruitDesign,
        doesRecruitWebDev: inputs.doesRecruitWebDev,
      })
      .then((response) => {
        console.log(response.data.basicInfoUpdateSuccess);
      })
      .catch((error) => {
        console.log("An error occurred: ", error.response);
      });
    window.location.reload();
  };
  return (
    <div className="modify_recruitInfo_container">
      <div className="modify_recruitInfo_content_container">
        <div className="recruitInfo_cardinalNum recruitInfo_forms">
          <div className="recruitInfo_label">기수</div>
          <input
            className="modify_inputs_style"
            type="text"
            name="cardinalNumber"
            value={cardinalNumber || ""}
            onChange={onChange}
            required
          />
        </div>
        <div className="recruitInfo_isApplyPeriod recruitInfo_forms">
          <div className="recruitInfo_label">지원 기간</div>
          <div className="switch_wrapper">
            <input
              type="checkbox"
              name="isApplicationPeriod"
              value={isApplicationPeriod || false}
              id="switch"
              checked={isApplicationPeriod}
              onChange={checkingCheckBox}
            />
            <label htmlFor="switch" className="switch_label">
              <span className="onf_btn"></span>
            </label>
          </div>
        </div>
        <div className="recruitInfo_recruitTeams recruitInfo_forms">
          <div className="recruitInfo_label">모집 팀</div>
          <div className="recruitInfo_radioBtns">
            <div className="recruitInfo_radio_wrap">
              <input
                type="checkbox"
                className="recruitInfo_radio"
                name="marketing"
                value={doesRecruitMarketing || false}
                checked={doesRecruitMarketing}
                onChange={checkingCheckBox}
              />
              <div className="recruitInfo_radio_label">마케팅팀</div>
            </div>
            <div className="recruitInfo_radio_wrap">
              <input
                type="checkbox"
                className="recruitInfo_radio"
                name="design"
                value={doesRecruitDesign || false}
                checked={doesRecruitDesign}
                onChange={checkingCheckBox}
              />
              <div className="recruitInfo_radio_label">디자인팀</div>
            </div>
            <div className="recruitInfo_radio_wrap">
              <input
                type="checkbox"
                className="recruitInfo_radio"
                name="webDev"
                value={doesRecruitWebDev || false}
                checked={doesRecruitWebDev}
                onChange={checkingCheckBox}
              />
              <div className="recruitInfo_radio_label">웹개발팀</div>
            </div>
          </div>
        </div>
        <div className="recruitInfo_recruit_schedule recruitInfo_forms">
          <div className="recruitInfo_label">모집 일정</div>
          <ul>
            <div className="recruitInfo_subForm">
              <li>지원서 제출</li>
              <input
                className="modify_inputs_style"
                type="text"
                name="applicationSubmissionPeriod"
                value={applicationSubmissionPeriod || ""}
                onChange={onChange}
                required
              />
            </div>
            <div className="recruitInfo_subForm">
              <li>1차 발표</li>
              <input
                className="modify_inputs_style"
                type="text"
                name="firstPresentationPeriod"
                value={firstPresentationPeriod || ""}
                onChange={onChange}
                required
              />
            </div>
            <div className="recruitInfo_subForm">
              <li>심층면접</li>
              <input
                className="modify_inputs_style"
                type="text"
                name="interviewPeriod"
                value={interviewPeriod || ""}
                onChange={onChange}
                required
              />
            </div>
            <div className="recruitInfo_subForm">
              <li>최종합격</li>
              <input
                className="modify_inputs_style"
                type="text"
                name="finalPresentationPeriod"
                value={finalPresentationPeriod || ""}
                onChange={onChange}
                required
              />
            </div>
          </ul>
        </div>
      </div>
      <div className="recruitInfo_update_button">
        <button onClick={updateInfo}>수정하기</button>
      </div>
    </div>
  );
}

export default ModifyRecruitInfo;
