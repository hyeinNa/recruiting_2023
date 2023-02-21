import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AdminLogin.css";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
function AdminLogin() {
    const navigate = useNavigate();
    const [input, setInput] = useState("");
    const pw = input;

    const onChange = (e) => {
        const { value, pw } = e.target;
        setInput({
            ...input,
            [pw]: value,
        });
    };

    //폼에 입력받은 패스워드를 패스워드 확인 api로 전달
    const checkPW = () => {
        axios
            .post("/api/admin/login", {
                pw: input.pw,
            })
            .then((response) => {
                let isAdmin = response.data.loggedIn;
                if (isAdmin) {
                    //관리자 비밀번호가 맞으면
                    console.log(response.data.message);
                    navigate("/admin/", { replace: true });
                } else {
                    //관리자 비밀번호가 틀리면
                    console.log(response.data.message);
                    alert("잘못된 비밀번호입니다.");
                }
            })
            .catch((error) => {
                console.log("An error occurred: ", error.response);
            });
    };

    return (
        <div className="admin_login">
            <Header />
            <div className="admin_login_container">
                <div className="admin_login_inner_container">
                    <div className="admin_login_title">ADMIN</div>
                    <div className="admin_login_form_wrapper">
                        <input
                            type="text"
                            name="password"
                            className="admin_login_form"
                            placeholder="관리자 키를 입력하세요."
                            onChange={onChange}
                            maxLength="10"
                            required />
                        <button
                            type="button"
                            className="admin_login_button"
                            onClick={checkPW}
                        >
                            확인
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AdminLogin;
