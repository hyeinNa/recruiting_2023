const express = require("express");
const { Applicant } = require("../models/Applicant");
const downloadRouter = express.Router();
const applicantListRouter = express.Router();
var fs = require("fs");

//관리자페이지
applicantListRouter.get("/applyList", async (req, res) => {
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
});
applicantListRouter.get("/download", async (req, res) => {
    // 지원자 목록 프론트로 전송
    const fileName = req.body.applicant;

    let isFileExist;

    try {
        // fs.existsSync()를 사용하여 파일 존재 여부를 검증한다. Boolean 타입의 값을 반환한다.
        isFileExist = fs.existsSync(fileName);
        console.log(fileName)
    } catch (err) {
        console.log(err)

        // next(err);
    }

    // 파일이 존재하지 않는다면 에러 처리
    if (!isFileExist) {
        console.log("there is no file")
    }

    try {
        // download()를 사용해서 파일을 프론트쪽으로 보내준다.
        res.download(fileName);
    } catch (err) {
        console.log("file download failed")
    }
});


//지원자의 합불 여부를 결정
applicantListRouter.put("/selectPass", async (req, res) => {
    const { _id, pass } = req.body;

    try {
        const data = await Applicant.findByIdAndUpdate(
            _id, {
            $set: {
                pass,
            }
        });

        return res.json({
            message: "수정 완료",
        });
    }
    catch (err) {
        console.error(err);
        return res.status(500).send({ err: err.message });
    }
});

//applicantListRouter.route("/").get(applyList).put(selectPass);

module.exports = applicantListRouter;