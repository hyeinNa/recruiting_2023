import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
function NotPeriod() {
  //url에서 지원자 고유 id 알아내기
  const pathName = window.location.pathname;
  const applicantId = pathName.substring(18, pathName.length);
  const [pass, setPass] = useState("");
  const [is1stResultPeriod, setis1stResultPeriod] = useState("");
  const [isFinalResultPeriod, setisFinalResultPeriod] = useState("");
  //첫 렌더링 때, url에서 알아낸 지원자 id를 통해 몇차 결과 확인 기간이 아닌지 확인
  useEffect(() => {
    axios
      .post("/api/update/get", {
        id: applicantId,
      })
      .then((response) => {
        setPass(response.data.pass);
      })
      .catch((error) => {
        console.log("An error occurred: ", error.response);
      });
  }, [applicantId]);

  //결과 확인이 아닌 기간 : not1stPassPeriod, notFinalPassPeriod
  //결과 확인 아닌 기간에 따라 보여지는 화면 다르게
  if (!is1stResultPeriod || !isFinalResultPeriod) {
    return (
      <div>

      </div>
      // <div>
      //   Not1stPassPeriod
      //   <div>지원 기간 여부 : {pass}</div>
      // </div>
    );
  }
  else if (!is1stResultPeriod) {
    return (
      <div>

      </div>
    )
  } else if (!isFinalResultPeriod) {
    return (
      <div>

      </div>
      // <div>
      //   NotFinalPassPeriod
      //   <div>지원 기간 여부 : {pass}</div>
      // </div>
    );
  }
}

export default NotPeriod;
