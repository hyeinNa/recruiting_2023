import React from "react";
import Activity from "./Activity";
import "./Activities.css";
import activitydata from "./data.json";

function Activities() {

    return (
        <div className="ActivitiesBackGround">
            <p className="ActivitiesHeader">ACTIVITIES</p>
            <div className="ActivitiesAll">
                {activitydata.activity
                    ? activitydata.activity.map((a => {
                        return <Activity name={a.name} text={a.text} img_path={a.img_path}></Activity>
                    }))
                    : <div></div>
                }

            </div>

        </div>
    )

}
export default Activities;