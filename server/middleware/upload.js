const path = require('path')
const multer = require('multer')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')//파일이 저장될 위치
    },
    filename: function (req, file, cb) {
        let ext = path.extname(file.originalname)
        cb(null, Date.now() + ext)
    }
})

var upload = multer({
    storage: storage,
    fileFilter: function (req, file, callback) {
        if (
            //filetype 제한
            file.mimetype == "application/msword"
            //file.mimtype == "application/pdf"
        ) {
            callback(null, true)
        } else {//파일거부
            console.log('only doc file supported')
            callback(null, false)
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 2 //파일허용사이즈 2MB
    }
})

module.exports = upload