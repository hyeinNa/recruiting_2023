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
  (req, res) => {
    //async - await
    const { team, name, studentId, ewhaianId, pass } = req.body;
    // const applicant = req.file.path;

    let addData = {
      team,
      name,
      studentId,
      ewhaianId,
      pass,
    };
    try {
      if (!team) {
        return res.json({
          status: "error",
          message: "지원하려는 팀을 선택하세요.",
        });
      }
      if (!name || typeof name !== "string") {
        return res.json({ status: "error", message: "성명을 입력하세요." });
      }
      if (name.length > 10) {
        return res.json({
          status: "error",
          message: "성명은 최대 10글자입니다.",
        });
      }
      if (!studentId || typeof studentId !== "string") {
        return res.json({ status: "error", message: "학번을 입력하세요." });
      }
      if (studentId.length !== 7) {
        return res.json({ status: "error", message: "학번은 7자리입니다." });
      }
      if (!ewhaianId || typeof ewhaianId !== "string") {
        return res.json({
          status: "error",
          message: "이화이언 아이디를 입력하세요.",
        });
      }
      if (ewhaianId.length > 20) {
        return res.json({
          status: "error",
          message: "이화이언 아이디는 최대 20글자입니다.",
        });
      }
      if (!req.file) {
        return res.json({
          status: "error",
          message: "지원서를 첨부하세요",
        });
      }
      const created = Applicant.create({
        addData,
      }); //findByIDAndUpdate (조건:id, 갱신: updatedData)
      if (req.file) {
        created.applicant = req.file.filename;
      }
      res.json({
        status: "ok",
        message: "지원자 정보가 추가되었습니다",
      });
      console.log(created);
    } catch (error) {
      res.json({
        message: "error occured",
      });
    }
  }
);

module.exports = registerRoute;
