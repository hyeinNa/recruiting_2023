const express = require("express");
const checkInfoRoute = express.Router();
//post 메소드를 사용할 때 정보를 추출하기 위해 body-parser 사용
//import bodyParser from "body-parser";
//applicant.js에서 만든 applicant(지원자) 모듈을 사용하기 위해 가져옴.
const { Applicant } = require("../models/Applicant");

//요청받은 이름, 학번, 이화이언 아이디가 DB에 있는지 찾는다.
checkInfoRoute.post("/find", (req, res) => {
  Applicant.find(
    {
      name: req.body.name,
      studentId: req.body.studentId,
      ewhaianId: req.body.ewhaianId,
    },
    (err, datas) => {
      if (err) {
        //에러가 발생했다면, 에러 출력하기
        console.log(err);
      } else {
        //에러가 발생하지 않았다면
        console.log(datas);
      }
    }
  );
});
module.exports = checkInfoRoute;
