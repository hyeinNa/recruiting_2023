import React from "react";
import { Link } from "react-router-dom";

function Acivity(props) {
    var activity_name = props.name;
    var activity_date = props.text;
    var img_path = props.img_path;
    var activity_link = props.link;

    return (
        <div className="EachActivity">
            <div className="ActivityText">
                <div className="ActivityName">{activity_name}</div>
                <div className="ActivityDate">{activity_date}</div>
            </div>
            <Link to={activity_link} className="LinkToEventSketch"  >
                이벤트 스케치 바로가기</Link>

            <div className="TurnToImg">
                <img src={img_path}></img>
            </div>


        </div>
    )
}

export default Acivity;