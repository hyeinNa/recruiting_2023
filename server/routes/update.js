const express = require("express");
const updateRoute = express.Router();
const mongoose = require("mongoose");
const { Applicant } = require("../models/Applicant");

//id로 지원자 찾기
updateRoute.post("/get", (req, res) => {
  let id = req.body.id;
  const ObjectId = mongoose.Types.ObjectId(id);
  Applicant.findOne(
    {
      _id: ObjectId,
    },
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.json(data);
      }
    }
  );
});
//수정하기
updateRoute.put("/update", async (req, res) => {
  //async - await
  const { name, studentId, ewhaianId } = req.body;

  let id = req.body.id; //ObjectID

  let updatedData = {
    name,
    studentId,
    ewhaianId,
  };
  try {
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
    await Applicant.findByIdAndUpdate(id, { $set: updatedData }); //findByIDAndUpdate (조건:id, 갱신: updatedData)
    res.json({
      status: "ok",
      message: "지원자 정보가 수정되었습니다",
    });
  } catch (error) {
    res.json({
      message: "error occured",
    });
  }
});
module.exports = updateRoute;