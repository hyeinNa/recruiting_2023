import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import "./AdminLogin.css";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";

function AdminLogin() {
    const navigate = useNavigate();
    //입력값에 대한 변수와 함수
    const [input, setInput] = useState("");

    useEffect(() => {
        axios.get("/api/admin/login")
            .then((response) => {
                //이미 로그인 했으면 login 창으로 갈 수 없음
                if (response.data.loggedIn === true)
                    navigate(`/admin/landing`, { replace: true });
            })
            .catch((error) => {
                console.log("An error occurred: ", error.response);
            });
    }, []);


    const handleInputPw = (e) => {
        setInput(e.target.value);
    };


    const onClick = () => {
        axios.post("/api/admin/login", { pw: input })
            .then((response) => {
                let isAdmin = response.data.loggedIn;
                if (isAdmin) {
                    //관리자 비밀번호가 맞으면
                    navigate(`/admin/landing`, { replace: true });
                    console.log(response.data.message);
                } else {
                    //관리자 비밀번호가 틀리면
                    console.log(response.data.message);
                    alert("잘못된 비밀번호입니다.");
                }
            })
            .catch((error) => {
                console.log("An error occurred: ", error.response);
            });
    }


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
                            onChange={handleInputPw}
                            maxLength="10"
                            required />
                        <button
                            type="button"
                            className="admin_login_button"
                            onClick={onClick}
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
