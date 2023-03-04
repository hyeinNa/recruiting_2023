const express = require("express");
const updateRoute = express.Router();
const mongoose = require("mongoose");
const { Applicant } = require("../models/Applicant");
const uploadRouter = require("../middleware/upload");
var fs = require("fs");

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
updateRoute.put("/update", uploadRouter.single('applicant'), async (req, res) => {
  //async - await
  const { team, name, studentId, ewhaianId } = req.body;
  // const applicant = req.file.path;
  let id = req.body.id; //ObjectID

  let updatedData = {
    team,
    name,
    studentId,
    ewhaianId,
  };
  try {
    if (!name || typeof name !== "string") {
      return res.json({ status: "error", message: "성명을 입력하세요." });
    }
    if (name.length > 10) {
      return res.json({ status: "error", message: "성명은 최대 10글자입니다." });
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
    const updated = await Applicant.findByIdAndUpdate(id, { $set: updatedData }); //findByIDAndUpdate (조건:id, 갱신: updatedData)
    if (req.file) {
      updated.applicant = req.file.path;
      fs.writeFileSync(filename, file, encoding = 'utf-8') //fs.writeFile(filename, data, encoding='utf-8', [콜백함수])
    }
    res.json({
      status: "ok",
      message: "지원자 정보가 수정되었습니다",
    });
    console.log(updated)
  } catch (error) {
    res.json({
      message: "error occured",
    });
  }

});

/* updateRoute.delete("/upload", async (req, res) => {
  //const file_name = req.body.applicant

  if (fs.existsSync("server/uploads/" + file_name)) {
    // 파일이 존재한다면 true 그렇지 않은 경우 false 반환
    try {
      fs.unlinkSync("/uploads" + file_name);
      console.log("file deleted");
    } catch (error) {
      console.log(error);
    }
  }
}); */
module.exports = updateRoute;