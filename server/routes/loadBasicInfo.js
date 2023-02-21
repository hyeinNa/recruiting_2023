const express = require("express");
const loadBasicInfoRoute = express.Router();
//BasicInfo.js에서 만든 BasicInfo 모듈을 사용하기 위해 가져옴.
const { BasicInfo } = require("../models/BasicInfo.js");

loadBasicInfoRoute.post("/load", (req, res) => {
  BasicInfo.findOne({ key: req.body.key }, (err, data) => {
    if (err) console.log(err);
    else {
      if (data) {
        res.json(data);
      } else {
        res.json({
          isInDB: "false",
        });
      }
    }
  });
});
module.exports = loadBasicInfoRoute;
