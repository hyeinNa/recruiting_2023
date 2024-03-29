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
    axios
      .get("/api/admin/")
      .then((response) => {
        //로그인 안 했으면 login 창으로
        if (response.data.loggedIn !== true)
          navigate(`/admin/login`, { replace: true });
      })
      .catch((error) => {
        console.log("An error occurred: ", error.response);
      });
    setButtonColor(1);
  }, []);
  // eslint-disable-next-line react-hooks/exhaustive-deps

  // 버튼 클릭할 때, team이 바뀔 때마다 getList 새로 호출
  useEffect(() => {
    GetList(team);
    setButtonColor(team);
  }, [team]);

  const setButtonColor = (team) => {
    console.log("team:", team);
    if (team === 1) {
      console.log("실행1");
      document.getElementById("1").style.backgroundColor = "#EB1568";
      document.getElementById("2").style.backgroundColor =
        "var(--register-checkInfo-forms-color)";
      document.getElementById("3").style.backgroundColor =
        "var(--register-checkInfo-forms-color)";
    } else if (team === 2) {
      console.log("실행2");
      document.getElementById("2").style.backgroundColor = "#EB1568";
      document.getElementById("1").style.backgroundColor =
        "var(--register-checkInfo-forms-color)";
      document.getElementById("3").style.backgroundColor =
        "var(--register-checkInfo-forms-color)";
    }
    if (team === 3) {
      console.log("실행3");
      document.getElementById("3").style.backgroundColor = "#EB1568";
      document.getElementById("1").style.backgroundColor =
        "var(--register-checkInfo-forms-color)";
      document.getElementById("2").style.backgroundColor =
        "var(--register-checkInfo-forms-color)";
    }
  };

  //서버에서 지원자 DB 받아오기
  const GetList = (team) => {
    axios
      .get("/api/applicantlist/", { params: { team: team } })
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
        setArr(arr);
        return arr;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //서버에서 지원자 파일 다운로드
  const handleFileDownload = async (title, e) => {
    console.log(title);
    try {
      //고유 id 및 폼에 입력받은 정보를 수정하기 api로 전달
      const response = await axios.get("/api/applicantlist/download", {
        fileName: title,
      });
      /* const url = "server/uploads/" + title;
      const response = await fetch(url); */
      /* const file = await response.blob();
      const downloadUrl = window.URL.createObjectURL(file); // 해당 file을 가리키는 url 생성

      const anchorElement = document.createElement('a');
      document.body.appendChild(anchorElement);
      anchorElement.download = title; // a tag에 download 속성을 줘서 클릭할 때 다운로드가 일어날 수 있도록 함. 공백은 기본값
      anchorElement.href = downloadUrl; // href에 url 달아주기

      anchorElement.click(); */
    } catch (error) {
      console.log(error.response);
    }
  };

  const setPass = (e, idx) => {
    const select = e.target.closest("select"); //option
    let value;
    if (select.value === "선택") value = "default";
    else if (select.value === "서류합격") value = "1stPass";
    else if (select.value === "최종합격") value = "finalPass";
    else if (select.value === "불합격") value = "fail";

    const _id = arr[idx]._id; //수정할 지원자의 id

    // 서버의 selectPass 함수로 전달
    axios
      .put("/api/applicantlist/selectPass", {
        _id: _id,
        pass: value,
      })
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="main">
      <Header />
      <h1>지원자 리스트</h1>
      <div className="applicant_list_container">
        <nav>
          <button
            type="button"
            id="1"
            onClick={() => {
              setTeam(1);
              setButtonColor(team);
            }}
          >
            마케팅
          </button>
          <button
            type="button"
            id="2"
            onClick={() => {
              setTeam(2);
              setButtonColor(team);
            }}
          >
            디자인
          </button>
          <button
            type="button"
            id="3"
            onClick={() => {
              setTeam(3);
              setButtonColor(team);
            }}
          >
            웹개발
          </button>
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
          {arr &&
            arr.map(
              (
                appli,
                idx //서버에서 받아와서
              ) => (
                <p key={idx}>
                  <div>{appli.name}</div>
                  <div>{appli.studentId}</div>
                  <div>{appli.ewhaianId}</div>
                  <div>
                    <select id="box_id" onChange={(e) => setPass(e, idx)}>
                      {["선택", "서류합격", "최종합격", "불합격"].map(
                        (option, idx) => (
                          <option key={idx} value={option}>
                            {option}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                  <div>면접 일정</div>
                  <div>
                    <button
                      type="button"
                      onClick={(e) => handleFileDownload(appli.applicant, e)}
                    >
                      <img src="/img/admin/application.png" alt="download" />
                    </button>
                  </div>
                </p>
              )
            )}
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default ApplicantList;
