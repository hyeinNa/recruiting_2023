const express = require("express");
const { Applicant } = require("../models/Applicant");

const applicantListRouter = express.Router();

//관리자페이지
const applyList = async (req, res) => {

    console.log("실행 확인 1");
    try {
        const data = await Applicant.findOne({
            team: "마케팅",
        });
        return res.json(data);
    } catch (err) {
        console.log(err);
    }
    console.log("실행 확인2");

    //지원자 목록 프론트로 전송
    //마케팅 팀 지원자 정보 전송
    // const { team } = req.query;
    // if (team === 1) {
    //     Applicant.findOne(
    //         {
    //             team: "마케팅",
    //         },
    //         (err, data) => {
    //             if (err) {
    //                 console.log(err);
    //             } else {
    //                 console.log(data);
    //                 res.json(data);
    //             }
    //         }
    //     );
    // }
    // //디자인 팀 지원자 정보 전송
    // else if (team === 2) {
    //Applicant.findOne(
    //         {
    //             team: "디자인",
    //         },
    //         (err, data) => {
    //             if (err) {
    //                 console.log(err);
    //             } else {
    //                 console.log(data);
    //                 res.json(data);
    //             }
    //         }
    //     );
    // }
    // //웹개발 팀 지원자 정보 전송. team===3
    // else {
    //Applicant.findOne(
    //         {
    //             team: "웹개발",
    //         },
    //         (err, data) => {
    //             if (err) {
    //                 console.log(err);
    //             } else {
    //                 console.log(data);
    //                 res.json(data);
    //             }
    //         }
    //     );
    // }

}


//지원자의 합불 여부를 결정
const selectPass = (req, res) => {
    const { name, studentId, ewhaianId, pass, key } = req.body;

    try {
        Applicant.find(
            {
                name: name,
                studentId: studentId,
                ewhaianId: ewhaianId,
            },
            {   //합불여부, key update
                pass: pass,
                key: key,
            }
        )
        res.json({
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