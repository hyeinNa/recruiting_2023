import React from "react";

function Acivity(props) {
    var name = props.name;
    var text = props.text;
    var img_path = props.img_path;
    return (
        <div className="EachActivity">
            <div className="ActivityName">{name}</div>
            <div className="ActivityText">{text}</div>
            <div className="TurnToImg">
                {/* 여기에 img로 img_path넣을 예정 */}
            </div>
            <p className="LinkToEventSketch">이벤트 스케치
                바로가기</p>
            {/* 위의 p부분 이벤트 스케치 페이지 만들어진 후 연결 */}
        </div>
    )
}

export default Acivity;