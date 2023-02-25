const path = require('path')
const multer = require('multer')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'server/uploads/')//파일이 저장될 위치
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

var upload = multer({
    storage: storage,
    /* fileFilter: function (req, file, cb) {
        if (file.mimetype == 'application/pdf' || 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || 'application/msword') {//msword파일만 허용
            cb(null, true)
        }
        //잘못된 파일타입안내문, 파일명 설정 (ex)41기_00팀_000 변경가능하게 설정)
        return cb(new Error('Wrong file type'));
    }, */
    limits: {
        fileSize: 1024 * 1024 * 5 //파일허용사이즈 5MB
    }
})

module.exports = upload