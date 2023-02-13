const express = require("express");
const updateRoute = express.Router();

const { Applicant } = require("../models/Applicant");

//수정하기
updateRoute.patch("/update", (req, res) => {

    let info = {
        name: req.body.name,
        studentId: req.body.studentId,

    }
    let updatedData = {
        ewhaianId: req.body.ewhaianId
    }
    try {
        Applicant.findByIdAndUpdate(info, { $set: updatedData }) //findByIDAndUpdate (조건:info, 갱신: updatedData)
        res.json({
            messsage: "지원서가 수정되었습니다"
        })
    } catch (error) {
        res.json({
            message: "이름/학번/이화이언ID를 다시 확인해주십시오"
        })
    }
});
module.exports = updateRoute;
