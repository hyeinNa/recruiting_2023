import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import { Link } from "react-router-dom";
import "./ShowResult.css";

function ShowResultFail(props) {

  const [cardinalNumber, setCardinalNumber] = useState("");
  const [masterName, setMasterName] = useState("");
  const [masterPhoneNumber, setmasterPhoneNumber] = useState("");

  function ShowResultFail(props) {
    const [cardinalNumber, setCardinalNumber] = useState("");
    const [masterName, setMasterName] = useState("");
    const [masterPhoneNumber, setmasterPhoneNumber] = useState("");

    useEffect(() => {
      axios
        .post("/api/var/load", {
          key: 1234,
        })
        .then((response) => {
          console.log(response.data);
          if (response.data.isInDB === "false") {
            setCardinalNumber("");
            setMasterName("");
            setmasterPhoneNumber("");
          } else {
            setCardinalNumber(response.data.cardinalNumber);
            setMasterName(response.data.masterName);
            setmasterPhoneNumber(response.data.masterPhoneNumber);
          }
        });
    }, []);

    return (
      <div className="register_showResult">
        <div className="register_showResult_container">
          <div className="register_showResult_inner_container">
            <div className="register_showResult_main_content_container">
              <div className="register_showResult_main_content">
                안녕하세요, {props.name}님.
                <br />
                이화이언 {cardinalNumber}기 수습 운영진 모집에 지원해주신점
                진심으로 감사드립니다.
              </div>
              <div className="register_showResult_main_content_description">
                아쉽게도 이번 44기 운영진에서 지원자님과 함께 하지 못하게 된 점
                전달드리며,
                <br />
                다음 기회에 보다 좋은 인연으로 만나뵐 수 있기를 기대하겠습니다.
                <br />
                이화이언에 따뜻한 관심을 보내주신 점 다시 한 번 감사드립니다.
              </div>
              <div className="register_showResult_bottomDetail">
                * 추가적인 문의사항이 있으신 경우, 마스터 {masterName}(
                {masterPhoneNumber})에게 연락 부탁드립니다.
              </div>
            </div>
            <div className="register_showResult_button_container">
              <button className="register_showResult_mainPage_button">
                메인으로 돌아가기
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default ShowResultFail;
