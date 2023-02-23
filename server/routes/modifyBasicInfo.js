const express = require("express");
const modifyBasicInfoRoute = express.Router();
const mongoose = require("mongoose");
//BasicInfo.js에서 만든 BasicInfo 모듈을 사용하기 위해 가져옴.
const { BasicInfo } = require("../models/BasicInfo.js");

//basicInfo에 대한 DB가 존재하는지 확인
modifyBasicInfoRoute.post("/find", (req, res) => {
  BasicInfo.findOne({ key: req.body.key }, (err, data) => {
    if (err) console.log(err);
    else {
      if (data) {
        res.json({
          isInDB: "true",
          objectId: data._id,
        });
      } else {
        res.json({
          isInDB: "false",
        });
      }
    }
  });
});
//DB에 저장되어 있는 값을 입력 폼에 반영하기
modifyBasicInfoRoute.post("/get", (req, res) => {
  let id = req.body.id;
  const ObjectId = mongoose.Types.ObjectId(id);
  BasicInfo.findOne({ _id: ObjectId }, (err, data) => {
    if (err) console.log(err);
    else {
      if (data) return res.json(data);
    }
  });
});
//요청 받은 내용을 DB에 추가하기
modifyBasicInfoRoute.post("/init", (req, res) => {
  BasicInfo.create(
    {
      key: req.body.key,
      cardinalNumber: req.body.cardinalNumber,
      recruitingTeams: req.body.recruitingTeams,
      applicationSubmissionPeriod: req.body.applicationSubmissionPeriod,
      firstPresentationPeriod: req.body.firstPresentationPeriod,
      interviewPeriod: req.body.interviewPeriod,
      finalPresentationPeriod: req.body.finalPresentationPeriod,
      isApplicationPeriod: req.body.isApplicationPeriod,
      masterName: req.body.masterName,
      masterPhoneNubmer: req.body.masterPhoneNubmer,
      masterTrainingPlace: req.body.masterTrainingPlace,
    },
    (err) => {
      if (err) console.log(err);
      else
        return res.json({
          basicInfoCreate: "success",
        });
    }
  );
});
//요청 받은 내용으로 DB 내용을 수정하기
modifyBasicInfoRoute.post("/modify", (req, res) => {
  BasicInfo.findOneAndUpdate(
    { key: 1234 },
    {
      cardinalNumber: req.body.cardinalNumber,
      recruitingTeams: req.body.recruitingTeams,
      applicationSubmissionPeriod: req.body.applicationSubmissionPeriod,
      firstPresentationPeriod: req.body.firstPresentationPeriod,
      interviewPeriod: req.body.interviewPeriod,
      finalPresentationPeriod: req.body.finalPresentationPeriod,
      isApplicationPeriod: req.body.isApplicationPeriod,
      masterName: req.body.masterName,
      masterPhoneNubmer: req.body.masterPhoneNubmer,
      masterTrainingPlace: req.body.masterTrainingPlace,
    },
    { new: true },
    (err, data) => {
      if (err) console.log(err);
      else {
        if (data) {
          return res.json({
            basicInfoUpdateSuccess: "success",
          });
        } else {
          return res.json({
            basicInfoUpdateSuccess: "fail",
          });
        }
      }
    }
  );
});

module.exports = modifyBasicInfoRoute;
