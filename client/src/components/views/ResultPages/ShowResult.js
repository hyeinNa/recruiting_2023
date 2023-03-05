import React from 'react'
import ShowResult1stPass from './ShowResult1stPass'
import ShowResultFail from './ShowResultFail'
import ShowResultFinal from './ShowResultFinal'

//1pass면 ShowResult1stPass.js 불러오기
//fail이면 ShowResultFail.js 불러오기
//final이면 ShowResultFianl.js 불러오기

function ShowResult() {

    pathName = window.location.pathname;
    applicantId = pathName.substring(8, pathName.length);

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

    return (
        <div>
        </div>
    )



}

export default ShowResult
