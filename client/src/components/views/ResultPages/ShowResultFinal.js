import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import { Link } from "react-router-dom";
import "./ShowResult.css";

function ShowResultFinal(props) {
  //url에서 지원자 고유 id 알아내기
  const [cardinalNumber, setCardinalNumber] = useState("");
  const [masterTrainingWaitingTime, setMasterTrainingWaitingTime] = useState("");
  const [masterTrainingWaitingPlace, setMasterTrainingWaitingPlace] = useState("");
  const [masterTrainingPlace, setMasterTrainingPlace] = useState("");
  const [masterTrainingSchedule, setMasterTrainingSchedule] = useState("");

  useEffect(() => {
    axios
      .post("/api/var/load", {
        key: 1234,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.isInDB === "false") {
          setCardinalNumber("");
          setMasterTrainingWaitingTime("");
          setMasterTrainingWaitingPlace("");
          setMasterTrainingPlace("");
          setMasterTrainingSchedule("");
        } else {
          setCardinalNumber(response.data.cardinalNumber);
          setMasterTrainingWaitingTime(response.data.masterTrainingWaitingTime);
          setMasterTrainingWaitingPlace(response.data.masterTrainingPlace);
          setMasterTrainingPlace(response.data.masterTrainingPlace);
          setMasterTrainingSchedule(response.data.master.masterTrainingSchedule);
        }
      });
  }, []);


  return (
    <div className="register_showResult">
      <Header />
      <div className="register_showResult_container">
        <div className="register_showResult_inner_container">
          <div className="register_showResult_main_content_container">
            <div className="register_showResult_main_content">
              안녕하세요, {props.name}님.
              <br />
              이화이언 {cardinalNumber}기 수습 운영진 모집에 최종 합격하신 것을 진심으로 축하드립니다!
            </div>
            <div className="register_showResult_main_content_description">
              이화이언 수습운영진 활동에 대한 안내를 드리기 위해 정규회의에 앞서 마스터 교육을 진행합니다.
            </div>
          </div>
          <div className="register_showResult_masterTraining_container"></div>
          <div className="register_showResult_masterTraining_info">
            마스터 교육은 {masterTrainingSchedule} 부터 {masterTrainingPlace}에서 진행됩니다.
          </div>
          <ul className="register_showResult_masterTraining_description">
            <li>참석이 어려우면 사유를 공지받은 번호로 알려주시기 바랍니다.</li>
            <li>
              일찍 오신 분들은 {masterTrainingWaitingPlace}({masterTrainingWaitingTime}부터 이용 가능)에서 대기하실 수 있으며,
              <br />
              마스터 교육은 20분 정도 소요됩니다.
            </li>
          </ul>
          <div className="register_showResult_masterTraining_end">
            감사합니다.
          </div>
        </div >
        <div className="register_showResult_button_container">
          <div className="register_showResult_back_to_main_container">
            <Link to="/">메인으로 돌아가기</Link>
          </div>
        </div>
      </div >
      <Footer />
    </div >
  );
}

export default ShowResultFinal;
