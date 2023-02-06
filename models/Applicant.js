//mongoose 가져오기
const mongoose = require("mongoose");
//Schema 생성하기
const applicantSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 20,
  },
  studentId: {
    type: Number,
    maxlength: 7,
  },
  ewhaianId: {
    type: String,
    maxlength: 50,
  },
});

//Applicant 모델 생성
const Applicant = mongoose.model("Applicant", applicantSchema);
//Applicant 모델을 다른 파일에서도 사용할 수 있도록 모듈로 만들기
module.exports = { Applicant };
