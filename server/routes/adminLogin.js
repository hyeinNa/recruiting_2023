const express = require("express");
//env 파일에 저장되어 있는 관리자 비밀번호
const { AdminPW } = process.env;

const adminRouter = express.Router();

//input admin password
const askAdmin = (req, res) => {
    //loggedin인지 확인
    if (req.session.loggedIn !== true) {
        return res.json({
            loggedIn: req.session.loggedIn,
            message: "관리자 권한이 필요합니다.",
        });
    }
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


adminRouter.route("/*").get(askAdmin);
adminRouter.route("/login").post(checkAdmin);


module.exports = adminRouter;