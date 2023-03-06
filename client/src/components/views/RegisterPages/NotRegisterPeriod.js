import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./NotRegisterPeriod.css";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import { Link } from "react-router-dom";


function NotRegisterPeriod() {
    //applicationSubmissionPeriod
    const [applicationSubmissionPeriod, setApplicationSubmissionPeriod] = useState("");
    useEffect(() => {
        axios
            .post("/api/var/load", {
                key: 1234,
            })
            .then((response) => {
                console.log(response.data);
                if (response.data.isInDB === "false") {
                    setApplicationSubmissionPeriod("");
                } else {
                    setApplicationSubmissionPeriod(applicationSubmissionPeriod);
                }
            });
    }, []);
    return (
        <div className="not_register_period">
            <Header />
            <div className="not_register_container">
                <div className="not_register_period_inner_container">
                    <div className="not_period_checkmark_wrapper">
                        <img src="/img/notRegisterPeriod/notPeriodMark.png" className="not_period_checkmark" />
                    </div>
                    <div className="not_period_text">
                        <div className="not_period_large_text">
                            지원 기간이 아닙니다.
                        </div>
                        <div className="not_period_small_text">
                            지원 기간: ~{applicationSubmissionPeriod}
                        </div>
                    </div>
                    <div className="success_back_to_main_btn">
                        <Link to="/">메인으로 돌아가기</Link>
                    </div>
                </div>

            </div>
            <Footer />
        </div>


    )
}

export default NotRegisterPeriod;