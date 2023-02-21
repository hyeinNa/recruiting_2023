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
  recruitingTeams: {
    type: Number,
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
});

//BasicInfo 모델 생성
const BasicInfo = mongoose.model("BasicInfo", basicInfoSchema);
//BasicInfo 모델을 다른 파일에서도 사용할 수 있도록 모듈로 만들기
module.exports = { BasicInfo };
