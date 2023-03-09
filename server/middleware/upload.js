const path = require("path");
const multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log("현재 위치: ", process.cwd());
    cb(null, "uploads"); //파일이 저장될 위치
  },
  filename: function (req, file, cb) {
    file.originalname = Buffer.from(file.originalname, "latin1").toString(
      "utf8"
    ); // 서버에서 기본 charset latin1로 된 문자열을 utf8으로 변환
    cb(null, file.originalname); // 저장되는 파일명
  },
});

var upload = multer({
  storage: storage,
  /* fileFilter: function (req, file, cb) {
        if (file.mimetype == 'application/pdf' || 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || 'application/msword') {//msword파일만 허용
            cb(null, true)
        }
        else{
        req.fileValidationError = "~파일만 업로드 가능"
        return cb(null,false); //return cb(new Error("Wrong filetype"))
        //잘못된 파일타입안내문, 파일명 설정 (ex)41기_00팀_000 변경가능하게 설정)
    }, */
  limits: {
    fileSize: 1024 * 1024 * 5, //파일허용사이즈 5MB
  },
});

module.exports = upload;
