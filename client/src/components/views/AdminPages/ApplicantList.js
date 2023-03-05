import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./ApplicantList.css";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";


function ApplicantList() {
  const navigate = useNavigate();
  const [team, setTeam] = useState(1);

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

  }, []);
  // eslint-disable-next-line react-hooks/exhaustive-deps

  //서버에서 지원자 DB 받아오기
  const GetList = (team) => {
    axios.get("/api/applicantlist", { params: { team: team } })
      .then((response) => {

        //객체를 배열로
        const data = Object.entries(response.data);
        const list = data.map((value, idx) => {
          const result = Object.entries(value[1]);
          return result;
        });
        //arr에 지원자 객체만 배열로 저장
        let arr = [];
        for (let i = 0; i < list[0].length; i++) {
          arr[i] = list[0][i][1];
        }
        return (
          <div className="apply_list">
            {arr.map((it) => (
              <p id={it.id}>
                <div >{it.name}</div>
                <div >{it.studentId}</div>
                <div >{it.ewhaianId}</div>
                <div>면접 일정</div>
                <div>지원서</div>
              </p>
            ))}
          </div>
        );
      })
      .catch((error) => {
        console.error(error);
      });

  }

  const data = GetList(team);

  return (
    <div className="main">
      <Header />
      <h1>지원자 리스트</h1>
      <div className="applicant_list_container">
        <nav>
          <button type="button" onClick={() => {
            setTeam(1);
            GetList(team);
          }}>마케팅</button> |
          <button type="button" onClick={() => {
            setTeam(2);
            GetList(team);
          }}>디자인</button> |
          <button type="button" onClick={() => {
            setTeam(3);
            GetList(team);
          }}>웹개발</button>
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
          <h3>
            <GetList team={team} />
          </h3>
        </section>

      </div>


      <Footer />
    </div>
  );
}

export default ApplicantList;
