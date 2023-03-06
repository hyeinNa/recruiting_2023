import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./UpdateSuccess.css";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import { Link } from "react-router-dom";


function UpdateSuccess() {
    return (
        <div className="apply_success">
            <Header />
            <div className="apply_success_container">
                <div className="apply_success_inner_container">
                    <div className="success_checkmark_wrapper">
                        <img src="/img/newApplicantEnroll/applySuccessMark.png" className="success_checkmark" />
                    </div>
                    <div className="success_text">
                        수정에 성공했습니다!
                        <br></br>
                        지원해주셔서 감사합니다.
                    </div>
                    <div className="success_back_to_main_btn">
                        <Link to="/">메인으로 돌아가기</Link>
                    </div>
                </div>
            </div>
            <Footer />

        </div >

    )
}

export default UpdateSuccess;