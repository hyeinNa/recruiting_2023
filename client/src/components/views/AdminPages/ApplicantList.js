import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./ApplicantList.css";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";


function ApplicantList() {
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/api/admin/")
      .then((response) => {
        //로그인 안 했으면 login 창으로
        if (response.data.loggedIn !== true)
          navigate(`/admin/login`, { replace: true });
      })
      .catch((error) => {
        console.log("An error occurred: ", error.response);
      });

    axios.get("/api/applicantlist", { params: { team: 1 } }) //마케팅 팀이 기본값
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log("An error occurred: ", error.response);
      });
  }, []);
  // eslint-disable-next-line react-hooks/exhaustive-deps

  //서버에서 지원자 DB 받아오기
  const showList = (team) => {
    axios.get("/api/applicantlist", { params: { team: team } })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log("An error occurred: ", error.response);
      });
  }


  return (
    <div className="main">
      <Header />
      <h1>지원자 리스트</h1>
      <div className="applicant_list_container">
        <nav>
          <button type="button" onClick={showList(1)}>마케팅</button> |
          <button type="button" onClick={showList(2)}>디자인</button> |
          <button type="button" onClick={showList(3)}>웹개발</button>
        </nav>
        <h2>
          <div className="index">이름</div>
          <div className="index">학번</div>
          <div className="index">이화이언 ID</div>
          <div className="index">합격 여부</div>
          <div className="index">면접 일정</div>
          <div className="index">지원서</div>
        </h2>
        <section>
          <h3></h3>
        </section>

      </div>


      <Footer />
    </div>
  );
}

export default ApplicantList;
