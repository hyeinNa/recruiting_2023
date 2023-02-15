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
    fileFilter: function (req, file, cb) {
        if (file.mimetype != 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {//msword파일만 허용
            return cb(new Error('Wrong file type'));
        }
        cb(null, true)
    },
    limits: {
        fileSize: 1024 * 1024 * 2 //파일허용사이즈 2MB
    }
})

module.exports = upload