import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./ApplicantList.css";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";


function ApplicantList() {
  const navigate = useNavigate();
  const [team, setTeam] = useState("1");
  const [arr, setArr] = useState([]);

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

  useEffect(() => {
    GetList(team);
  }, [team]);


  //합불 선택자 DB에 전송
  const changePass = (target) => {
    axios.post("/api/admin", { pass: target.value })
      .then((response) => {
        console.log(response.message);
      })
      .catch((error) => {
        console.error(error);
      });
  }

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
        console.log(arr);
        setArr(arr);
        return arr;
      })
      .catch((error) => {
        console.error(error);
      });

  }


  return (
    <div className="main">
      <Header />
      <h1>지원자 리스트</h1>
      <div className="applicant_list_container">
        <nav>
          <button type="button" onClick={() => { setTeam(1) }}>마케팅</button>
          <button type="button" onClick={() => { setTeam(2) }}>디자인</button> |
          <button type="button" onClick={() => { setTeam(3) }}>웹개발</button>
        </nav>
        <h2>
          <div className="index">이름</div>
          <div className="index">학번</div>
          <div className="index">이화이언 ID</div>
          <div className="index">합격 여부</div>
          <div className="index">면접 일정</div>
          <div className="index">지원서</div>
        </h2>
        <section className="apply_list">
          {arr && arr.map((appli, idx) => (
            <p key={idx}>
              <div >{appli.name}</div>
              <div >{appli.studentId}</div>
              <div >{appli.ewhaianId}</div>
              <div >면접 일정</div>
              <div >
                <select onChange={changePass}>
                  <option value="pass">합격</option>
                  <option value="nonpass">불합격</option>
                </select>
              </div>
              <div ><button type="button">
                <img src="/img/admin/application.png" alt="download" /></button></div>
            </p>
          ))}
        </section>

      </div>


      <Footer />
    </div>
  );
}


export default ApplicantList;
