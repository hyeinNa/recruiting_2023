const express = require("express");
const { Applicant } = require("../models/Applicant");

//env 파일에 저장되어 있는 관리자 비밀번호
const { AdminPW } = process.env;

const adminRouter = express.Router();

//input admin password
const askAdmin = (req, res) => {
    //loggedin인지 확인
    if (req.session.loggedIn === true)
        return res.json({
            loggedIn: req.session.loggedIn,
            message: "이미 관리자 페이지에 로그인 되었습니다.",
        });
}

//관리자 비밀번호 확인
const checkAdmin = (req, res) => {
    const pw = req.body.pw;
    if (pw !== AdminPW) {
        return res.json(
            {
                loggedIn: req.session.loggedIn,
                message: "비밀번호가 틀렸습니다",
            }
        );
    }
    req.session.loggedIn = true; //session DB에 true로 저장
    res.json({
        loggedIn: req.session.loggedIn,
        message: " 비밀번호가 맞습니다",
    });
}

//관리자페이지
const applyList = (req, res) => {
    //logged out
    if (req.session.loggedIn === undefined)
        return res.redirect("/api/admin/login");
    //logged in
    res.send("지원한 사람들 목록~");
}

//지원자의 합불 여부를 결정
const selectPass = (req, res) => {
    const { name, studentId, ewhaianId, pass, key } = req.body;

    try {
        Applicant.findOneAndUpdate(
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
        res.redirect("/api/admin/");
    }
    catch (err) {
        console.error(err);
        return res.status(500).send({ err: err.message });
    }
}

adminRouter.route("/login").get(askAdmin).post(checkAdmin);
adminRouter.route("/landing").get(applyList).post(selectPass);

module.exports = adminRouter;