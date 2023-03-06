const express = require("express");
const { Applicant } = require("../models/Applicant");

const applicantListRouter = express.Router();

//관리자페이지
const applyList = (req, res) => {
    // 지원자 목록 프론트로 전송
    const { team } = req.query;
    // 마케팅 팀 지원자 정보 전송
    if (team === "1") {
        try {
            Applicant.find({ team: "1" }, function (error, data) {
                res.json({ result: data });
            })
        } catch (err) {
            console.error(err);
        }
    }
    //디자인 팀 지원자 정보 전송
    else if (team === "2") {
        try {
            Applicant.find({ team: "2" }, function (error, data) {
                res.json({ result: data });
            })
        } catch (err) {
            console.error(err);
        }
    }
    //웹개발 팀 지원자 정보 전송. team===3
    else {
        try {
            Applicant.find({ team: "3" }, function (error, data) {
                res.json({ result: data });
            })
        } catch (err) {
            console.error(err);
        }
    }
}



//지원자의 합불 여부를 결정
const selectPass = async (req, res) => {
    const { _id, pass } = req.body;
    console.log(_id, pass);

    try {
        const result = await Applicant.findByIdAndUpdate(
            _id,
            {
                $set: {
                    pass,
                }
            });

        return res.json({
            result,
            message: "수정 완료",
        });
    }
    catch (err) {
        console.error(err);
        return res.status(500).send({ err: err.message });
    }
}

applicantListRouter.route("/").get(applyList).put(selectPass);

module.exports = applicantListRouter;