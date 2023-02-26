import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./ModifyRecruitInfo.css";
import "./ModifyResultInfo.css";

function ModifyResultInfo() {
  //url에서 지원자 고유 id 알아내기
  const pathName = window.location.pathname;
  const objectId = pathName.substring(18, pathName.length);
  //입력 폼에 대한 변수와 함수
  const [inputs, setInputs] = useState({
    isResultPeriod: false,
    surveyFormLink: "",
    masterTrainingPlace: "",
    isMarketingPreAssignment: false,
    isDesignPreAssignment: false,
    isWebDevPreAssignment: false,
    marketingPreAssignment: "",
    designPreAssignment: "",
    webDevPreAssignment: "",
  });
  const {
    isResultPeriod,
    surveyFormLink,
    masterTrainingPlace,
    isMarketingPreAssignment,
    isDesignPreAssignment,
    isWebDevPreAssignment,
    marketingPreAssignment,
    designPreAssignment,
    webDevPreAssignment,
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
      .post("/api/manager/get", {
        id: objectId,
      })
      .then((response) => {
        setInputs({
          isResultPeriod: response.data.isResultPeriod,
          surveyFormLink: response.data.surveyFormLink,
          masterTrainingPlace: response.data.masterTrainingPlace,
          isMarketingPreAssignment: response.data.isMarketingPreAssignment,
          isDesignPreAssignment: response.data.isDesignPreAssignment,
          isWebDevPreAssignment: response.data.isWebDevPreAssignment,
          marketingPreAssignment: response.data.marketingPreAssignment,
          designPreAssignment: response.data.designPreAssignment,
          webDevPreAssignment: response.data.webDevPreAssignment,
        });
      })
      .catch((error) => {
        console.log("An error occurred: ", error.response);
      });
  }, []);

  const updateInfo = () => {
    axios
      .post("/api/manager/modify/resultInfo", {
        isResultPeriod: inputs.isResultPeriod,
        surveyFormLink: inputs.surveyFormLink,
        masterTrainingPlace: inputs.masterTrainingPlace,
        isMarketingPreAssignment: inputs.isMarketingPreAssignment,
        isDesignPreAssignment: inputs.isDesignPreAssignment,
        isWebDevPreAssignment: inputs.isWebDevPreAssignment,
        marketingPreAssignment: inputs.marketingPreAssignment,
        designPreAssignment: inputs.designPreAssignment,
        webDevPreAssignment: inputs.webDevPreAssignment,
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
            <div className="resultInfo_label">결과 확인 기간</div>
            <div className="switch_wrapper">
              <input
                type="checkbox"
                name="isResultPeriod"
                value={isResultPeriod || false}
                id="switch"
                checked={isResultPeriod}
                onChange={checkingCheckBox}
              />
              <label htmlFor="switch" className="switch_label">
                <span className="onf_btn"></span>
              </label>
            </div>
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
          <div className="resultInfo_preAssignment_container">
            <div className="recruitInfo_recruitTeams recruitInfo_forms resultInfo_last_form">
              <div className="resultInfo_label">면접 접 사전과제</div>
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
                <textarea
                  className="preAssignment_inputs_style"
                  type="text"
                  name="designPreAssignment"
                  value={designPreAssignment || ""}
                  onChange={onChange}
                  required
                  placeholder="디자인팀 사전과제"
                ></textarea>
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
