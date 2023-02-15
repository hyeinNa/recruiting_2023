const express = require("express");
const { Applicant } = require("../models/Applicant");

//env 파일에 저장되어 있는 관리자 비밀번호
const { AdminPW } = process.env;

const adminRouter = express.Router();

//관리자 비밀번호 입력받기
const askAdmin = (req, res) => {
    console.log("hi");
    res.send("pw is " + `${AdminPW}`);
}

//admin이 맞는지 확인한다
const checkAdmin = (req, res) => {
    pw = req.body.pw;
    console.log(pw);
    if (pw !== AdminPW) {
        return res.status(400).json(
            {
                message: "비밀번호가 틀렸습니다",
            }
        );
    }
    req.session.loggedIn = true; //session DB에 true로 저장
    return res.redirect("/admin");
}

//비밀번호 입력후 관리자페이지
const applyList = (req, res) => {
    res.send("지원한 사람들 목록~");
}

//지원자의 합불 여부를 결정한다
const selectPass = (req, res) => {
    const pass = req.body;
    try {
        Applicant.findOneAndUpdate(
            {   //지원자 선택
                name: req.body.name,
                studentId: req.body.studentId,
                ewhaianId: req.body.ewhaianId,
            },
            {   //합불여부 update
                pass: pass,
            }
        );
        res.redirect(`/api/admin/${AdminPW}`);
    }
    catch (e) {
        console.error(e);
    }

}

adminRouter.route("/").get(askAdmin).post(checkAdmin);
adminRouter.route(`/${AdminPW}`).get(applyList).post(selectPass);

module.exports = adminRouter;