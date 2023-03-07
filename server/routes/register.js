const express = require("express");
const registerRoute = express.Router();
const { Applicant } = require("../models/Applicant");
const uploadRouter = require("../middleware/upload");
//path 가져오기
/* const path = require('path')
const app = express()
app.use('/', express.static(path.join(__dirname, 'static'))) */

//지원하기(유저 정보 등록)
registerRoute.post(
  "/register",
  uploadRouter.single("applicant"),
  async (req, res) => {
    //validation과정: 잘못된 형식의 정보를 입력하는 경우 에러 메시지를 나타내도록 함.
    if (!team) {
      return res.json({
        status: "error",
        error: "지원하려는 팀을 선택하세요.",
      });
    }
    if (!name || typeof name !== "string") {
      return res.json({ status: "error", error: "성명을 입력하세요." });
    }
    if (name.length > 10) {
      return res.json({ status: "error", error: "성명은 최대 10글자입니다." });
    }
    if (!studentId || typeof studentId !== "string") {
      return res.json({ status: "error", error: "학번을 입력하세요." });
    }
    if (studentId.length !== 7) {
      return res.json({ status: "error", error: "학번은 7자리입니다." });
    }
    if (!ewhaianId || typeof ewhaianId !== "string") {
      return res.json({
        status: "error",
        error: "이화이언 아이디를 입력하세요.",
      });
    }
    if (ewhaianId.length > 20) {
      return res.json({
        status: "error",
        error: "이화이언 아이디는 최대 20글자입니다.",
      });
    }
    if (!req.file) {
      return res.json({
        status: "error",
        error: "지원서를 첨부하세요",
      });
    }
    //입력받은 정보를 바탕으로 새로운 applicant 생성하기
    try {
      const { team, name, studentId, ewhaianId, pass } = req.body;
      let Data = {
        team,
        name,
        studentId,
        ewhaianId,
        pass,
      };
      const response = await Applicant.create({
        Data,
      });

      if (req.file) {
        // 수정할점: 기존지원자여서 catch문으로 가도 파일이 업로드됨/ upload.js 수정필요할듯
        response.applicant = req.file.path;
      }
      console.log("User created successfully", response);
    } catch (error) {
      // console.log(JSON.stringify(error.message))
      if (error.code === 11000) {
        //중복된 key값을 가지는 유저를 등록하려는 경우 에러 메시지를 띄움.
        console.log("중복된 유저");
        return res.json({
          status: "error",
          error:
            '이미 지원하셨습니다. 지원서를 수정하려면 "기존 지원자" 페이지로 가세요.',
        });
      }
      throw error;
      // return res.json({ status: 'error' })
    }

    res.json({ status: "ok" });
  }
);

module.exports = registerRoute;
