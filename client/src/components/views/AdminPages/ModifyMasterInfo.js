import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./ModifyRecruitInfo.css";
import "./ModifyMasterInfo.css";

function ModifyMasterInfo() {
  const navigate = useNavigate();

  //url에서 지원자 고유 id 알아내기
  const pathName = window.location.pathname;
  const objectId = pathName.substring(20, pathName.length);
  console.log(pathName);
  //입력 폼에 대한 변수와 함수
  const [inputs, setInputs] = useState({
    masterName: "",
    masterPhoneNumber: "",
  });
  const { masterName, masterPhoneNumber } = inputs;
  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  useEffect(() => {
    axios
      .get("/api/admin/")
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
          masterName: response.data.masterName,
          masterPhoneNumber: response.data.masterPhoneNumber,
        });
      })
      .catch((error) => {
        console.log("An error occurred: ", error.response);
      });
  }, []);

  const updateInfo = () => {
    axios
      .post("/api/manager/modify/masterInfo", {
        masterName: inputs.masterName,
        masterPhoneNumber: inputs.masterPhoneNumber,
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
    <div className="modify_recruitInfo_container">
      <div className="modify_recruitInfo_inner_container">
        <div className="modify_recruitInfo_content_container">
          <div className=" recruitInfo_forms">
            <div className="masterInfo_label">마스터 이름</div>
            <input
              className="modify_inputs_style"
              type="text"
              name="masterName"
              value={masterName || ""}
              onChange={onChange}
              required
            />
          </div>
          <div className="recruitInfo_isApplyPeriod recruitInfo_forms">
            <div className="masterInfo_label">마스터 전화번호</div>
            <input
              className="modify_inputs_style"
              type="text"
              name="masterPhoneNumber"
              value={masterPhoneNumber || ""}
              onChange={onChange}
              placeholder="010-0000-0000"
              required
            />
          </div>
        </div>
        <div className="recruitInfo_update_button">
          <button onClick={updateInfo}>수정하기</button>
        </div>
      </div>
    </div>
  );
}

export default ModifyMasterInfo;
