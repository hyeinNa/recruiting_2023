import React, { useEffect, useState } from "react";
import "./WebProjectTemplate.css";

function WebProjectTemplate({ name, src, popUpOpen }) {
  const [notHover, setNotHover] = useState(false);

  useEffect(() => {
    if (name === "웹 게임 사이트") {
      setNotHover(true);
    } else {
      setNotHover(false);
    }
  }, [name]);
  return (
    <div className="webProject" onClick={popUpOpen}>
      <img src={src} alt="webProject" />
      <div className={`webProjectHover ${notHover ? "notHover" : ""}`}></div>
    </div>
  );
}
export default WebProjectTemplate;
