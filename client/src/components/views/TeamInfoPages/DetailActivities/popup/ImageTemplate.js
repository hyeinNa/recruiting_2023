import React, { useEffect } from "react";

function ImageTemplate(props) {
  useEffect(() => {
    document.getElementById("imageTemplate_container").style.display = "flex";
    if (props.direction === "row") {
      document.getElementById("imageTemplate_container").style.flexDirection =
        "row";
    } else if (props.direction === "column") {
      document.getElementById("imageTemplate_container").style.flexDirection =
        "column";
    }
  }, [props]);

  if (props.imgNum === 1) {
    return (
      <div id="imageTemplate_container">
        <div className="image1_wrapper">
          <img src={props.imgSrc1} alt="img1" className="popup_img1" />
        </div>
      </div>
    );
  } else if (props.imgNum === 2) {
    return (
      <div id="imageTemplate_container">
        <div className="image1_wrapper">
          <img src={props.imgSrc1} alt="img1" className="popup_img1" />
        </div>
        <div className="image2_wrapper">
          <img src={props.imgSrc2} alt="img2" className="popup_img2" />
        </div>
      </div>
    );
  }
}

export default ImageTemplate;
