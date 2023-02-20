import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function GenerateDB() {
  const navigate = useNavigate();
  //DB가 존재하는지에 대한 변수
  const [isInDB, setIsInDB] = useState(0);
  const [objectId, setObjectId] = useState("");
  useEffect(() => {
    axios
      .post("/api/manager/find", {
        key: 1234,
      })
      .then((response) => {
        setIsInDB(response.data.isInDB);
        if (response.data.isInDB === "true") {
          setObjectId(response.data.objectId);
        }
      })
      .catch((error) => {
        console.log("An error occurred: ", error.response);
      });
  }, []);
  const addDB = () => {
    if (isInDB === "true") {
      alert("이미 DB가 존재합니다.");
    } else {
      axios
        .post("/api/manager/init", {
          key: 1234,
          cardinalNumber: "",
          recruitingTeams: 0,
          applicationSubmissionPeriod: "",
          firstPresentationPeriod: "",
          interviewPeriod: "",
          finalPresentationPeriod: "",
          isApplicationPeriod: false,
          masterName: "",
          masterPhoneNumber: "",
          masterTrainingPlace: "",
        })
        .then((response) => {
          console.log(response.data.basicInfoCreate);
        })
        .catch((error) => {
          console.log("An error occurred: ", error.response);
        });
      alert("DB를 추가하였습니다.");
      window.location.reload();
    }
  };
  return (
    <div>
      GenerateDB
      <div>DB가 존재하나요?{isInDB}</div>
      <div>DB Id : {objectId}</div>
      <div>
        <button type="button" onClick={addDB}>
          DB 생성 버튼
        </button>
      </div>
      <div>
        <button
          type="button"
          onClick={() => {
            navigate("/manager/modifyInfo/" + objectId, { replace: false });
          }}
        >
          수정하러가기
        </button>
      </div>
    </div>
  );
}

export default GenerateDB;
