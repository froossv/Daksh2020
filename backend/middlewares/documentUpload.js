const multer = require('multer');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');
const path = require('path');


    const s3 = new aws.S3({
    accessKeyId: 'AKIAJJGJ4UMAGZFC7MCQ',
    secretAccessKey : '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',
    Bucket : 'hackdocument'
});

const documentUpload = multer({
    storage : multerS3({
        s3 :s3,
        bucket :'hackdocument',
        acl:'public-read',
        key: function(req, file,cb){
            cb(null,path.basename(file.originalname,path.extname(file.originalname))+'-'+Date.now()+path.extname(file.originalname))
        }
    })
}).single('myFile')

module.exports = documentUpload