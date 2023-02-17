import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";


function UpdatePage() {
  //url에서 지원자 고유 id 알아내기
  const pathName = window.location.pathname;
  const applicantId = pathName.substring(8, pathName.length);
  //입력 폼에 대한 변수와 함수
  const [inputs, setInputs] = useState({
    name: "",
    studentId: "",
    ewhaianId: "",
    applicant: "",
  });
  const { name, studentId, ewhaianId, applicant } = inputs;
  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  //첫 렌더링 때, url에서 알아낸 지원자 id로 지원자 정보 가져와서 입력 폼에 반영하기
  useEffect(() => {
    axios
      .post("/api/update/get", {
        id: applicantId,
      })
      .then((response) => {
        setInputs({
          name: response.data.name,
          studentId: response.data.studentId,
          ewhaianId: response.data.ewhaianId,
        });
      })
      .catch((error) => {
        console.log("An error occurred: ", error.response);
      });
  }, []);

  //async-await방식 사용
  const updateInfo = async () => {
    try { //고유 id 및 폼에 입력받은 정보를 수정하기 api로 전달
      const response = await axios.put("/api/update/update", {
        id: applicantId, name: inputs.name,
        studentId: inputs.studentId,
        ewhaianId: inputs.ewhaianId
      });
      let status = response.data.status;
      let err = response.data.error;
      let message = response.data.message;
      if (status === "ok") {
        console.log(message);
        alert(message)
      }
      else {
        console.log(err);
        alert(err) //수정하기 api에서 각 if문에 맞는 error문 출력
      }
    } catch (error) {
      console.log(error.response);
    }
  }

  return (
    <div>
      UpdatePage 개인 ID : {applicantId}
      <div>
        <form>
          <input
            type="text"
            name="name"
            className="register_checkInfo_forms"
            value={name}
            onChange={onChange}
            required
          />
          <input
            type="text"
            name="studentId"
            className="register_checkInfo_forms"
            value={studentId}
            onChange={onChange}
            required
          />
          <input
            type="text"
            name="ewhaianId"
            className="register_checkInfo_forms"
            value={ewhaianId}
            onChange={onChange}
            required
          />
          <input
            type="file"
            name="applicant"
            className="register_checkInfo_forms"
            value={applicant}
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

export default UpdatePage;
