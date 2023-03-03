import React, { useState } from "react";
import "./QnA.css";
import Recruit from "./QnAContent/Recruit";
import Activity from "./QnAContent/Activity";
import Etc from "./QnAContent/Etc";

function QnA() {
  const [QnAContent, setQnAContent] = useState("recruit");
  const [isClicked, setIsClicked] = useState([true, false, false]);
  const selectComponent = {
    recruit: <Recruit />,
    activity: <Activity />,
    etc: <Etc />,
  };
  const handleClickButton = (e) => {
    const { name } = e.target;
    setQnAContent(name);
    console.log(e.target.name);
    if (e.target.name === "recruit") setIsClicked([true, false, false]);
    else if (e.target.name === "activity") setIsClicked([false, true, false]);
    else setIsClicked([false, false, true]);
  };
    return (
      <div className="qna_container">
        <div className="qna_inner_container">
        <div className="qna_inner_inner_container">
            <div className="qna_title">자주 묻는 질문</div>
            <div className="qna_button_container">
            <button
              className={`qna_recruit_btn qna_btn ${
                isClicked[0] ? "clicked" : "unclicked"
              }`}
              onClick={handleClickButton}
              name="recruit"
            >
              운영진 지원 관련 질문
            </button>
            <button
              className={`qna_activity_btn qna_btn ${
                isClicked[1] ? "clicked" : "unclicked"
              }`}
              onClick={handleClickButton}
              name="activity"
            >
              운영진 활동 관련 질문
            </button>
            <button
              className={`qna_etc_btn qna_btn ${
                isClicked[2] ? "clicked" : "unclicked"
              }`}
              onClick={handleClickButton}
              name="etc"
            >
              기타
            </button>
            </div>            
            <div className="qna_question_content_container">  
                {selectComponent[QnAContent]}
            </div>  
          </div>
        </div>
    </div>
        

    );
}

export default QnA;