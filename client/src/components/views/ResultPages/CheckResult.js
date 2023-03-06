import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../RegisterPages/ExistingApplicantCheckInfo.css";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
function CheckResult() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    studentId: "",
    ewhaianId: "",
  });
  const { name, studentId, ewhaianId } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const [showResultToApplicant, setShowResultToApplicant] = useState(false);
  useEffect(() => {
    axios
      .post("/api/var/load", {
        key: 1234,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.isInDB === "false") {
          setShowResultToApplicant(false);
        } else {
          setShowResultToApplicant(response.data.showResultToApplicant);
        }
      });
  }, []);
  //폼에 입력받은 정보를 정보 확인 api로 전달
  const checkInfo = () => {
    axios
      .post("/api/checkInfo/find", {
        name: inputs.name,
        studentId: inputs.studentId,
        ewhaianId: inputs.ewhaianId,
      })
      .then((response) => {
        let isInDb = response.data.checkInfoSuccess;
        let applicantId = response.data.applicantId;
        if (isInDb) {
          //DB안에 일치하는 지원자 정보가 존재한다면
          console.log(response.data.message);
          //지원자에게 결과를 보여주지 않는다면
          if (!showResultToApplicant) {
            //결과 기간 아닌 페이지로 이동
            navigate("/result/notperiod/" + applicantId, { replace: true });
          } else {
            navigate("/result/" + applicantId, { replace: true });
          }
        } else {
          //DB안에 일치하는 지원자 정보가 존재하지 않다면
          console.log(response.data.message);
          alert("존재하지 않는 정보입니다.\n다시 한번 확인 부탁드립니다.");
        }
      })
      .catch((error) => {
        console.log("An error occurred: ", error.response);
      });
  };

  return (
    <div className="register_checkInfo">
      <Header />
      <div className="register_checkInfo_container">
        <div className="register_checkInfo_inner_container">
          <div className="register_checkInfo_title">결과 확인</div>
          <form className="register_checkInfo_form_container">
            <div className="register_checkInfo_nameForm_wrapper">
              <div className="register_checkInfo_nameForm_label register_checkInfo_labels">
                성명
              </div>
              <input
                type="text"
                name="name"
                className="register_checkInfo_forms"
                value={name}
                onChange={onChange}
                required
              />
            </div>
            <div className="register_checkInfo_studentIdForm_wrapper">
              <div className="register_checkInfo_studentIdForm_label_wrapper">
                <div className="register_checkInfo_studentIdForm_label register_checkInfo_labels">
                  학번
                </div>
              </div>
              <input
                type="text"
                name="studentId"
                className="register_checkInfo_forms"
                placeholder=" * 7자리를 입력해주세요."
                maxLength={7}
                value={studentId}
                onChange={onChange}
                required
              />
            </div>
            <div className="register_checkInfo_ewhaianIdForm_wrapper">
              <div className="register_checkInfo_ewhaianIdForm_label register_checkInfo_labels">
                이화이언 아이디
              </div>
              <input
                type="text"
                name="ewhaianId"
                className="register_checkInfo_forms"
                value={ewhaianId}
                onChange={onChange}
                required
              />
            </div>
            <div className="register_checkInfo_button_wrapper">
              <button
                type="button"
                className="register_checkInfo_button"
                onClick={checkInfo}
              >
                확인
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CheckResult;
