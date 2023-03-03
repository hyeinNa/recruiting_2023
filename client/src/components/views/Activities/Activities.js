import React from "react";
import Activity from "./Activity";
import "./Activities.css";
import activitydata from "./data.json";

function Activities() {

    return (
        <div className="ActivitiesBackGround">
            <p className="ActivitiesHeader">Activities</p>
            <div className="ActivitiesAll">
                {/* activitydata로 data.json 파일을 받아와서 Activity에 넘겨줌 */}
                {/*data.json 파일의 경우 최근 것을 위에 추가해주면 됨 */}
                {activitydata.activity
                    ? activitydata.activity.map((a => {
                        return <Activity name={a.name} text={a.text} img_path={a.img_path} type={a.type}></Activity>
                    }))
                    : <div></div>
                }

            </div>

        </div>
    )

}
export default Activities;