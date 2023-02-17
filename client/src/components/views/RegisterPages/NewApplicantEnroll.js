import React from "react";
import { useState } from "react";
import axios from "axios";
import "./NewApplicantEnroll.css";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
function NewApplicantEnroll() {
    const [inputs, setInputs] = useState({
        //team: "",
        name: "",
        studentId: "",
        ewhaianId: "",
    });
    const { /*team,*/ name, studentId, ewhaianId } = inputs;

    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const [selectedFile, setSelectedFile] = useState();
    const onFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
        var fileInput = document.getElementsByClassName("newEnroll_file");
        var fileText = document.getElementById("upload_file_text");
        for (var i = 0; i < fileInput.length; i++) {
            if (fileInput[i].files.length > 0) {
                for (var j = 0; j < fileInput[i].files.length; j++) {
                    fileText.textContent = fileInput[i].files[j].name;
                }
            }
        }
    }

    //폼에 입력받은 정보를 정보 확인 api로 전달
    const register = (e) => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append("file")

        axios
            .post("/api/register/register", {
                team: inputs.team,
                name: inputs.name,
                studentId: inputs.studentId,
                ewhaianId: inputs.ewhaianId,
            })
            .then((res) => {
                console.log("information adding Success")
            })
            .catch((error) => {
                console.log("An error occurred: ", error.res);
            });
        // axios
        //     .post("/api/", formdata)

        //     .catch((err) => {
        //         alert("파일 업로드에 실패했습니다. 다시 시도하세요.")
        //     })
    };

    return (
        <div className="register_newEnroll">
            <Header />
            <div className="register_newEnroll_container">
                <div className="register_newEnroll_inner_container">
                    <div className="register_newEnroll_title">지원하기</div>

                    <form className="register_newEnroll_form_container" onSubmit={register}>
                        <div className="register_newEnroll_fileDownload_wrapper">
                            <div className="register_newEnroll_fileDownload">
                                <a href="/fileUpload/지원서양식.docx" download>
                                    지원서 다운 링크
                                </a>
                            </div>

                        </div>
                        <div className="register_newEnroll_teamForm_wrapper">
                            <div className="register_newEnroll_teamForm_label register_newEnroll_labels">
                                지원하는 팀
                            </div>
                            <input type="radio" name="team" value="1" onChange={onChange} required />마케팅팀
                            <input type="radio" name="team" value="2" onChange={onChange} required />디자인팀
                            <input type="radio" name="team" value="3" onChange={onChange} required />웹개발팀
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
                            </div>
                            <input
                                type="text"
                                name="studentId"
                                className="register_newEnroll_forms"
                                placeholder=" * 7자리를 입력해주세요."
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
                            <div className="register_newEnroll_fileUpload_label register_newEnroll_labels">
                                지원서 제출
                            </div>
                            <input
                                type="file"
                                name="ewhaianId"
                                className="newEnroll_file"
                                // value={ewhaianId}
                                onChange={onFileChange}
                                required
                            />
                            <div className="upload_file">
                                <div>
                                    <p
                                        id="upload_file_text"
                                        style={{ float: "left", color: "#767676" }}
                                    >
                                        파일을 선택해 주세요
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="register_newEnroll_button_wrapper">
                            <button
                                type="button"
                                className="register_newEnroll_button"
                                onClick={register}
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

export default NewApplicantEnroll;
