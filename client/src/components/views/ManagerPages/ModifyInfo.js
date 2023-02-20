/*
모집 기수
모집 팀
모집 일정
현재 지원기간인지 아닌지(여기서 변경 함으로써 직접 코드 링크를 변경할 필요가 없음)
마스터 이름
마스터 전화번호
마스터 교육 장소
면접 전 사전 과제 내용
이벤트에 들어가는 행사 이미지
*/
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function ModifyInfo() {
  //url에서 지원자 고유 id 알아내기
  const pathName = window.location.pathname;
  const objectId = pathName.substring(20, pathName.length);
  //입력 폼에 대한 변수와 함수
  const [inputs, setInputs] = useState({
    cardinalNumber: "",
    recruitingTeams: 0,
    applicationSubmissionPeriod: "",
    firstPresentationPeriod: "",
    interviewPeriod: "",
    finalPresentationPeriod: "",
    isApplicationPeriod: false,
    masterName: "",
    masterPhoneNumber: "",
    masterTrainingPlace: "",
  });
  const {
    cardinalNumber,
    recruitingTeams,
    applicationSubmissionPeriod,
    firstPresentationPeriod,
    interviewPeriod,
    finalPresentationPeriod,
    isApplicationPeriod,
    masterName,
    masterPhoneNumber,
    masterTrainingPlace,
  } = inputs;
  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
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
          recruitingTeams: response.data.recruitingTeams,
          applicationSubmissionPeriod:
            response.data.applicationSubmissionPeriod,
          firstPresentationPeriod: response.data.firstPresentationPeriod,
          interviewPeriod: response.data.interviewPeriod,
          finalPresentationPeriod: response.data.finalPresentationPeriod,
          isApplicationPeriod: response.data.isApplicationPeriod,
          masterName: response.data.masterName,
          masterPhoneNumber: response.data.masterPhoneNumber,
          masterTrainingPlace: response.data.masterTrainingPlace,
        });
      })
      .catch((error) => {
        console.log("An error occurred: ", error.response);
      });
  }, []);

  const updateInfo = () => {
    axios
      .post("/api/manager/modify", {
        cardinalNumber: inputs.cardinalNumber,
        recruitingTeams: inputs.recruitingTeams,
        applicationSubmissionPeriod: inputs.applicationSubmissionPeriod,
        firstPresentationPeriod: inputs.firstPresentationPeriod,
        interviewPeriod: inputs.interviewPeriod,
        finalPresentationPeriod: inputs.finalPresentationPeriod,
        isApplicationPeriod: inputs.isApplicationPeriod,
        masterName: inputs.masterName,
        masterPhoneNumber: inputs.masterPhoneNumber,
        masterTrainingPlace: inputs.masterTrainingPlace,
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
    <div>
      ModifyInfo
      <div>
        <div>ObjectId : {objectId}</div>
        <form>
          <input
            type="text"
            name="cardinalNumber"
            className="register_checkInfo_forms"
            value={cardinalNumber}
            onChange={onChange}
            required
          />
          <input
            type="number"
            name="recruitingTeams"
            className="register_checkInfo_forms"
            value={recruitingTeams}
            onChange={onChange}
            required
          />
          <input
            type="text"
            name="applicationSubmissionPeriod"
            className="register_checkInfo_forms"
            value={applicationSubmissionPeriod}
            onChange={onChange}
            required
          />
          <input
            type="text"
            name="firstPresentationPeriod"
            className="register_checkInfo_forms"
            value={firstPresentationPeriod}
            onChange={onChange}
            required
          />
          <input
            type="text"
            name="interviewPeriod"
            className="register_checkInfo_forms"
            value={interviewPeriod}
            onChange={onChange}
            required
          />
          <input
            type="text"
            name="finalPresentationPeriod"
            className="register_checkInfo_forms"
            value={finalPresentationPeriod}
            onChange={onChange}
            required
          />
          <input
            type="checkbox"
            name="isApplicationPeriod"
            className="register_checkInfo_forms"
            value={isApplicationPeriod}
            onChange={onChange}
            required
          />
          <input
            type="text"
            name="masterName"
            className="register_checkInfo_forms"
            value={masterName}
            onChange={onChange}
            required
          />
          <input
            type="text"
            name="masterPhoneNumber"
            className="register_checkInfo_forms"
            value={masterPhoneNumber}
            onChange={onChange}
            required
          />
          <input
            type="text"
            name="masterTrainingPlace"
            className="register_checkInfo_forms"
            value={masterTrainingPlace}
            onChange={onChange}
            required
          />
          <button
            type="button"
            className="register_checkInfo_button"
            onClick={updateInfo}
          >
            확인
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModifyInfo;
