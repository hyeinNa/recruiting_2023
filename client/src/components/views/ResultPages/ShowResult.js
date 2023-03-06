import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ShowResult1stPass from "./ShowResult1stPass";
import ShowResultFail from "./ShowResultFail";
import ShowResultFinal from "./ShowResultFinal";

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

  /*
  useEffect(() => {
    axios
      .post("/api/var/load", {
        key: 1234,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.isInDB === "false") {
          setIsMarketingPreAssignment("");
          setIsDesignPreAssignment("");
          setIsWebDevPreAssignment("");
          setMarketingPreAssignment("");
          setDesignPreAssignment("");
          setWebDevPreAssignment("");
        } else {
          setIsMarketingPreAssignment(response.data.isMarketingPreAssignment);
          setIsDesignPreAssignment(response.data.isDesignPreAssignment);
          setIsWebDevPreAssignment(response.data.isWebDevPreAssignment);
          setMarketingPreAssignment(response.data.marketingPreAssignment);
          setDesignPreAssignment(response.data.master.designPreAssignment);
          setWebDevPreAssignment(response.data.master.webDevPreAssignment);
        }
      });
  }, []);

  */

  /*
default : (처음 지원할 때, 기본적으로 이것으로 설정)
1stPass : 서류 합격
finalPass : 최종 합격
fail : 불합격
*/

  if (inputs.pass === "1stPass") {
    console.log(inputs.pass);
    return (
      <div>
        <ShowResult1stPass name={inputs.name} team={inputs.team} />
      </div>
    );
  }
  else if (inputs.pass === "finalPass") {
    console.log(inputs.pass);
    return (
      <div>
        <ShowResultFinal name={inputs.name} team={inputs.team} />
      </div>)
  }
  else if (inputs.pass === "fail") {
    console.log(inputs.pass);
    return (
      <div>
        <ShowResultFail name={inputs.name} team={inputs.team} />
      </div>
    );
  }
}

export default ShowResult;
