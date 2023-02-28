//mongoose 가져오기
const mongoose = require("mongoose");
//Schema 생성하기
const basicInfoSchema = mongoose.Schema({
  key: {
    type: Number,
  },
  cardinalNumber: {
    type: String,
  },
  doesRecruitMarketing: {
    type: Boolean,
  },
  doesRecruitDesign: {
    type: Boolean,
  },
  doesRecruitWebDev: {
    type: Boolean,
  },
  applicationSubmissionPeriod: {
    type: String,
  },
  firstPresentationPeriod: {
    type: String,
  },
  interviewPeriod: {
    type: String,
  },
  finalPresentationPeriod: {
    type: String,
  },
  isApplicationPeriod: {
    type: Boolean,
  },
  masterName: {
    type: String,
  },
  masterPhoneNumber: {
    type: String,
  },
  masterTrainingPlace: {
    type: String,
  },
  is1stResultPeriod: {
    type: Boolean,
  },
  isFinalResultPeriod: {
    type: Boolean,
  },
  surveyFormLink: {
    type: String,
  },
  isMarketingPreAssignment: {
    type: Boolean,
  },
  isDesignPreAssignment: {
    type: Boolean,
  },
  isWebDevPreAssignment: {
    type: Boolean,
  },
  marketingPreAssignment: {
    type: String,
  },
  designPreAssignment: {
    type: String,
  },
  designPreAssignmentBannerName: {
    type: String,
  },
  designPreAssignmentPixelSize: {
    type: String,
  },
  designPreAssignmentSubmitPeriod: {
    type: String,
  },
  webDevPreAssignment: {
    type: String,
  },
  masterTrainingSchedule: {
    type: String,
  },
  isOnlineInterview: {
    type: Boolean,
  },
  faceTofaceInterviewPlace: {
    type: String,
  },
  interviewWaitingPlace: {
    type: String,
  },
});

//BasicInfo 모델 생성
const BasicInfo = mongoose.model("BasicInfo", basicInfoSchema);
//BasicInfo 모델을 다른 파일에서도 사용할 수 있도록 모듈로 만들기
module.exports = { BasicInfo };
