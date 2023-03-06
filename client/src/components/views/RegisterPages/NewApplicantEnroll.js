import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./NewApplicantEnroll.css";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import { Link } from "react-router-dom";
import BackBtn from "../../utilis/BackBtn";

function NewApplicantEnroll() {
  const [inputs, setInputs] = useState({
    team: "",
    name: "",
    studentId: "",
    ewhaianId: "",
    applicant: "",
    pass: ""
  });
  const [file, setFile] = useState(false);
  const [filename, setFilename] = useState("파일을 선택하세요.");
  const { team, name, studentId, ewhaianId, applicant, pass } = inputs;
  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name); //주석 설명
  };
  const [cardinalNum, setCardinalNum] = useState("");
  useEffect(() => {
    axios
      .post("/api/var/load", {
        key: 1234,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.isInDB === "false") {
          setCardinalNum("");
        } else {
          setCardinalNum(response.data.cardinalNumber);
        }
      });
  }, []);

  //폼에 입력받은 정보를 정보 확인 api로 전달
  const register = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("applicant", file); //formdata(name,value) formdata의 name은 backend부분과 일치해야함
    formData.append("name", name);
    formData.append("studentId", studentId);
    formData.append("ewhaianId", ewhaianId);
    formData.append("team", team);
    formData.append("pass", pass);

    const config = { headers: { "Content-Type": "multipart/form-data" } };
    try {
      //고유 id 및 폼에 입력받은 정보를 수정하기 api로 전달
      const response = await axios.post(
        "/api/register/register",
        formData,
        config,
        {
          team: inputs.team,
          name: inputs.name,
          studentId: inputs.studentId,
          ewhaianId: inputs.ewhaianId,
          pass: inputs.pass
        }
      );
      let status = response.data.status;
      let err = response.data.error;
      let message = response.data.message;
      if (status === "ok") {
        //register api의 message출력
        console.log(message);
        // alert("지원해주셔서 감사합니다.");
        window.location.replace("/register/success");
      } else {
        console.log(err);
        alert(err); //register api에서 각 if문에 맞는 error문 출력
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="register_newEnroll">
      <Header />
      <div className="register_newEnroll_container">
        <BackBtn path="/register" />
        <div className="register_newEnroll_inner_container">
          <div className="register_newEnroll_title">지원하기</div>

          <form
            className="register_newEnroll_form_container"
            onSubmit={register}
          >
            <div className="register_newEnroll_teamForm_wrapper">
              <div className="register_newEnroll_teamForm_radioBtn">
                <input
                  type="radio"
                  name="team"
                  value="1"
                  onChange={onChange}
                  required
                />
                마케팅팀
                <input
                  type="radio"
                  name="team"
                  value="2"
                  onChange={onChange}
                  required
                />
                디자인팀
                <input
                  type="radio"
                  name="team"
                  value="3"
                  onChange={onChange}
                  required
                />
                웹개발팀
              </div>
            </div>
            <div className="register_newEnroll_fileDownload_wrapper">
              <div className="register_newEnroll_fileDownload">
                <a
                  href="/fileUpload/43기_지원서 양식.docx"
                  download="이화이언 수습운영진 지원서 양식"
                >
                  <div className="fileDownload_text">
                    <b>지원서 다운로드</b>
                  </div>
                </a>
              </div>
            </div>

            <div className="register_newEnroll_nameForm_wrapper">
              <div className="register_newEnroll_nameForm_label register_newEnroll_labels">
                성명
              </div>
              <input
                type="text"
                name="name"
                className="register_newEnroll_forms"
                value={name}
                onChange={onChange}
                required
              />
            </div>
            <div className="register_newEnroll_studentIdForm_wrapper">
              <div className="register_newEnroll_studentIdForm_label_wrapper">
                <div className="register_newEnroll_studentIdForm_label register_newEnroll_labels">
                  학번
                </div>
                <div className="label_text">
                  <br></br>
                  *7자리를 입력해주세요.
                </div>
              </div>
              <input
                type="text"
                name="studentId"
                className="register_newEnroll_forms"
                maxLength={7}
                value={studentId}
                onChange={onChange}
                required
              />
            </div>
            <div className="register_newEnroll_ewhaianIdForm_wrapper">
              <div className="register_newEnroll_ewhaianIdForm_label register_newEnroll_labels">
                이화이언 아이디
              </div>
              <input
                type="text"
                name="ewhaianId"
                className="register_newEnroll_forms"
                value={ewhaianId}
                onChange={onChange}
                required
              />
            </div>
            <div className="register_newEnroll_fileUpload_wrapper">
              <div className="resigter_newEnroll_fileUpload_container">
                <div className="register_newEnroll_fileUpload_label register_newEnroll_labels">
                  지원서 제출
                </div>
                <div className="label_text">
                  <br></br>
                  *파일 이름: {cardinalNum}기 지원서_디자인(팀명)_이화연(성명)
                </div>
              </div>
              <input
                type="file"
                name="applicant"
                className="newEnroll_file"
                id="input_file"
                value={applicant}
                onChange={onChange}
                required
                style={{ display: "none" }}
              />
              <div className="upload_file register_newEnroll_forms">
                <div>
                  <label
                    for="input_file"
                    className="upload_file_text_container"
                  >
                    <div className="upload_file_text">{filename}</div>
                    <div className="upload_file_img_container">
                      <img
                        src="/img/newApplicantEnroll/fileUpload.png"
                        className="upload_file_img"
                      />
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className="register_newEnroll_button_wrapper">
              <button type="submit" className="register_newEnroll_button">
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

export default NewApplicantEnroll;
