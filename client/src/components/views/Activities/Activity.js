import React from "react";
// 이벤트 페이지로 스크롤
function GoToEvent() {
    {
        window.innerWidth > 769 ?
            window.scrollTo({
                top: 2400, behavior: "smooth"
            })
            :
            window.innerWidth > 391 ?
                window.scrollTo({
                    top: 2600, behavior: "smooth"
                })
                : window.scrollTo({
                    top: 2200, behavior: "smooth"
                })

    }
}

function Acivity(props) {
    var activity_name = props.name;
    var activity_date = props.text;
    var img_path = props.img_path;

    return (
        <div className="EachActivity">
            <div className="ActivityText">
                <div className="ActivityName">{activity_name}</div>
                <div className="ActivityDate">{activity_date}</div>
            </div>
            <button className="LinkToEventSketch" onClick={GoToEvent} >
                이벤트 스케치 바로가기</button>

            <div className="TurnToImg">
                <img src={img_path}></img>
            </div>


        </div>
    )
}

export default Acivity;