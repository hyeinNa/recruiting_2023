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
            Applicant.find({ team: "마케팅" }, function (error, data) {
                res.json({ result: data });
            })
        } catch (err) {
            console.error(err);
        }
    }
    //디자인 팀 지원자 정보 전송
    else if (team === "2") {
        try {
            Applicant.find({ team: "디자인" }, function (error, data) {
                res.json({ result: data });
            })
        } catch (err) {
            console.error(err);
        }
    }
    //웹개발 팀 지원자 정보 전송. team===3
    else {
        try {
            Applicant.find({ team: "웹개발" }, function (error, data) {
                res.json({ result: data });
            })
        } catch (err) {
            console.error(err);
        }
    }
}



//지원자의 합불 여부를 결정
const selectPass = (req, res) => {
    const { studentId, pass } = req.body;

    try {
        console.log(studentId, pass);
        Applicant.updateOne(
            {
                studentId: studentId,
            },
            {   //합불여부 update
                pass: pass,
            }
        )
        return res.json({
            message: "수정 완료",
        });
    }
    catch (err) {
        console.error(err);
        return res.status(500).send({ err: err.message });
    }
}

applicantListRouter.route("/").get(applyList).post(selectPass);

module.exports = applicantListRouter;