import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import { Link } from "react-router-dom";
import "./ShowResult.css";

function ShowResultFail() {

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

  //url에서 지원자 고유 id 알아내기
  const pathName = window.location.pathname;
  const applicantId = pathName.substring(8, pathName.length);

  const [inputs, setInputs] = useState({
    name: "",
    team: "",
    pass: "",
  });
  const { name, team, pass } = inputs;
  //첫 렌더링 때, url에서 알아낸 지원자 id를 통해 지원자의 지원 팀과 통과 여부를 확인하기
  useEffect(() => {
    axios
      .post("/api/update/get", {
        id: applicantId,
      })
      .then((response) => {
        setInputs({
          name: response.data.name,
          team: response.data.team,
          pass: response.data.pass,
        });
      })
      .catch((error) => {
        console.log("An error occurred: ", error.response);
      });
  }, [applicantId]);

  //변수 team과 pass에 저장된 값에 따라 다른 결과 페이지가 보이도록 하기.
  //팀 :  web,design,marketing
  //합격 여부 : 1stPass, finalPass, fail
  //지원기간이 아닌 경우는 다른 페이지에서 다룸

  return (
    <div className="register_showResult">
      <Header />
      <div className="register_showResult_container">
        <div className="register_showResult_inner_container">
          <div className="register_showResult_main_content_container">
            <div className="register_showResult_main_content">
              안녕하세요, {name}님.
              <br />
              이화이언 {cardinalNumber}기 수습 운영진 모집에 지원해주신점 진심으로 감사드립니다.
            </div>
            <div className="register_showResult_main_content_description">
              아쉽게도 이번 {cardinalNumber}기 운영진에서 지원자님과 함께 하지 못하게 된 점 전달드리며,
              <br />
              다음 기회에 보다 좋은 인연으로 만나뵐 수 있기를 기대하겠습니다.
              <br />
              이화이언에 따뜻한 관심을 보내주신 점 다시 한 번 감사드립니다.
            </div>
            <div className="register_showResult_bottomDetail">
              * 추가적인 문의사항이 있으신 경우, 마스터 {masterName}({masterPhoneNumber})에게 연락 부탁드립니다.
            </div>
          </div >
          <div className="register_showResult_back_to_main_container">
            <Link to="/">메인으로 돌아가기</Link>
          </div>
        </div >
      </div >
      <Footer />
    </div >
  );
}

export default ShowResultFail;
