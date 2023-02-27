import React from "react";
import { useState } from "react";
import "./ModifyInfo.css";
import ModifyRecruitInfo from "./ModifyRecruitInfo";
import ModifyResultInfo from "./ModifyResultInfo";
import ModifyMasterInfo from "./ModifyMasterInfo";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
function Modify() {
  const [modifyContent, setModifyContent] = useState("recruitInfo");
  const [isClicked, setIsClicked] = useState([true, false, false]);
  const selectComponent = {
    recruitInfo: <ModifyRecruitInfo />,
    resultInfo: <ModifyResultInfo />,
    masterInfo: <ModifyMasterInfo />,
  };
  const handleClickButton = (e) => {
    const { name } = e.target;
    setModifyContent(name);
    console.log(e.target.name);
    if (e.target.name === "recruitInfo") setIsClicked([true, false, false]);
    else if (e.target.name === "resultInfo") setIsClicked([false, true, false]);
    else setIsClicked([false, false, true]);
  };
  return (
    <div>
      <Header />
      <div className="modifyInfo_container">
        <div className="modifyInfo_inner_container">
          <div className="modifyInfo_content_container">
            <div className="modifyInfo_title">정보 수정</div>
            <div className="modifyInfo_description">
              이 곳에서 정보를 수정하면, 리쿠르팅 사이트 전체에 반영이 됩니다.
            </div>
            <div className="modifyInfo_buttons">
              <button
                name="recruitInfo"
                onClick={handleClickButton}
                className={`${isClicked[0] ? "clicked" : "unclicked"}`}
              >
                모집 정보
              </button>
              <button
                name="resultInfo"
                onClick={handleClickButton}
                className={`${isClicked[1] ? "clicked" : "unclicked"}`}
              >
                결과 정보
              </button>
              <button
                name="masterInfo"
                onClick={handleClickButton}
                className={`${isClicked[2] ? "clicked" : "unclicked"}`}
              >
                마스터 정보
              </button>
            </div>
            <div className="modifyInfo_info_container">
              {selectComponent[modifyContent]}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Modify;
