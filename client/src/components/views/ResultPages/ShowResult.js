import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
function ShowResult() {
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
    <div classname="register_showResult">
      <div classname="register_showResult_container">
        <div classname="register_showResult_content_Wrapper">
          <div>
            안녕하세요. {name}님 이화이언 {/*cardinal_number*/}기 수습 운영진
            모집에 1차 합격하신 것을 진심으로 축하드립니다!
          </div>

          <div>
            2차 면접은 하단에 기재된 일정에 따라 다대일 대면 면접으로 진행될
            예정입니다.
          </div>
          <div>면접 일정 : ㅇㅇ월 ㅇㅇ일 ㅇ요일 ㅇㅇ시 ㅇㅇ분</div>
          <div>
            면접의 경우, 불가피하게 배정된 면접 시간에서 10분 내외로 지연될 수
            있습니다.
          </div>

          <div>
            *추가적인 문의사항이 있는 경우, 마스터 000 (010-0000-0000)에게 연락
            부탁드립니다.
          </div>

          <div>지원자 이름 : {name}</div>
          <div>지원 팀 : {team}</div>
          <div>통과 여부 : {pass}</div>
        </div>
      </div>
    </div>
  );
}

export default ShowResult;
