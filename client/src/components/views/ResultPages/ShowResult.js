import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import ShowResultFail from "./ShowResultFail";
import ShowResult1stPass from "./ShowResult1stPass";
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
    //변수 team과 pass에 저장된 값에 따라 다른 결과 페이지가 보이도록 하기.
    //팀 :  web,design,marketing
    //합격 여부 : 1stPass, finalPass, fail
    //지원기간이 아닌 경우는 다른 페이지에서 다룸

    if (pass === "1stPass") {
        return <ShowResult1stPass name={name} team={team} pass={pass} />;
    }
    else if (pass == "finalPass") {
        return <ShowResultFinal name={name} team={team} pass={pass} />;
    }
    else if (pass == "fail") {
        return <ShowResultFail name={name} team={team} pass={pass} />;
    }
}

export default ShowResult;
