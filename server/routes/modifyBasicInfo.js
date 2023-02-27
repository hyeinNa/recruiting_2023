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
      isApplicationPeriod: req.body.isApplicationPeriod,
      doesRecruitMarketing: req.body.doesRecruitMarketing,
      doesRecruitDesign: req.body.doesRecruitDesign,
      doesRecruitWebDev: req.body.doesRecruitWebDev,
      applicationSubmissionPeriod: req.body.applicationSubmissionPeriod,
      firstPresentationPeriod: req.body.firstPresentationPeriod,
      interviewPeriod: req.body.interviewPeriod,
      finalPresentationPeriod: req.body.finalPresentationPeriod,
      masterName: req.body.masterName,
      masterPhoneNumber: req.body.masterPhoneNumber,
      masterTrainingPlace: req.body.masterTrainingPlace,
      is1stResultPeriod: req.body.is1stResultPeriod,
      isFinalResultPeriod: req.body.isFinalResultPeriod,
      surveyFormLink: req.body.surveyFormLink,
      isMarketingPreAssignment: req.body.isMarketingPreAssignment,
      isDesignPreAssignment: req.body.isDesignPreAssignment,
      isWebDevPreAssignment: req.body.isWebDevPreAssignment,
      marketingPreAssignment: req.body.marketingPreAssignment,
      designPreAssignment: req.body.designPreAssignment,
      webDevPreAssignment: req.body.webDevPreAssignment,
      designPreAssignmentBannerName: req.body.designPreAssignmentBannerName,
      designPreAssignmentPixelSize: req.body.designPreAssignmentPixelSize,
      designPreAssignmentSubmitPeriod: req.body.designPreAssignmentSubmitPeriod,
      masterTrainingSchedule: req.body.masterTrainingSchedule,
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
//요청 받은 내용으로 DB 내 모집 정보와 관련된 내용을 수정하기
modifyBasicInfoRoute.post("/modify/recruitInfo", (req, res) => {
  BasicInfo.findOneAndUpdate(
    { key: 1234 },
    {
      cardinalNumber: req.body.cardinalNumber,
      applicationSubmissionPeriod: req.body.applicationSubmissionPeriod,
      firstPresentationPeriod: req.body.firstPresentationPeriod,
      interviewPeriod: req.body.interviewPeriod,
      finalPresentationPeriod: req.body.finalPresentationPeriod,
      isApplicationPeriod: req.body.isApplicationPeriod,
      masterTrainingPlace: req.body.masterTrainingPlace,
      doesRecruitMarketing: req.body.doesRecruitMarketing,
      doesRecruitDesign: req.body.doesRecruitDesign,
      doesRecruitWebDev: req.body.doesRecruitWebDev,
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
//요청 받은 내용으로 DB 내 결과 정보와 관련된 내용을 수정하기
modifyBasicInfoRoute.post("/modify/resultInfo", (req, res) => {
  BasicInfo.findOneAndUpdate(
    { key: 1234 },
    {
      is1stResultPeriod: req.body.is1stResultPeriod,
      isFinalResultPeriod: req.body.isFinalResultPeriod,
      surveyFormLink: req.body.surveyFormLink,
      masterTrainingPlace: req.body.masterTrainingPlace,
      isMarketingPreAssignment: req.body.isMarketingPreAssignment,
      isDesignPreAssignment: req.body.isDesignPreAssignment,
      isWebDevPreAssignment: req.body.isWebDevPreAssignment,
      marketingPreAssignment: req.body.marketingPreAssignment,
      designPreAssignment: req.body.designPreAssignment,
      webDevPreAssignment: req.body.webDevPreAssignment,
      designPreAssignmentBannerName: req.body.designPreAssignmentBannerName,
      designPreAssignmentPixelSize: req.body.designPreAssignmentPixelSize,
      designPreAssignmentSubmitPeriod: req.body.designPreAssignmentSubmitPeriod,
      masterTrainingSchedule: req.body.masterTrainingSchedule,
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
//요청 받은 내용으로 DB 내 마스터 정보와 관련된 내용을 수정하기
modifyBasicInfoRoute.post("/modify/masterInfo", (req, res) => {
  BasicInfo.findOneAndUpdate(
    { key: 1234 },
    {
      masterName: req.body.masterName,
      masterPhoneNumber: req.body.masterPhoneNumber,
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
