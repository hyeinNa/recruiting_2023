import React from "react";

function Acivity(props) {
    var activity_name = props.name;
    var activity_date = props.text;
    var img_path = props.img_path;
    var activity_type = props.type;
    // activity_type: 클래스 지정하여 이벤트스케치 연결
    return (
        <div className="EachActivity">
            <div className="ActivityText">
                <div className="ActivityName">{activity_name}</div>
                <div className="ActivityDate">{activity_date}</div>
            </div>
            <p className="LinkToEventSketch">
                이벤트 스케치 바로가기</p>
            {/* 위의 p부분 이벤트 스케치 페이지 만들어진 후 연결 */}
            <div className="TurnToImg">
                <img src={img_path}></img>
            </div>


        </div>
    )
}

export default Acivity;