const express = require('express')
const passport = require('passport')
const Upload = require('../models/upload')
const customErrors = require('../../lib/custom_errors')
const multer = require('multer')
const multerUpload = multer({ dest: 'tempFiles/' })
const handle404 = customErrors.handle404
// const requireOwnership = customErrors.requireOwnership
const removeBlanks = require('../../lib/remove_blank_fields')
// const requireToken = passport.authenticate('bearer', { session: false })
// instantiate a router (mini app that only handles routes)
const router = express.Router()
const { s3Upload, createParams, promiseReadFile } = require('../../lib/promiseS3Upload.js')

// CREATE
// POST /uploads
router.post('/uploads', multerUpload.single('file'), (req, res, next) => {
  console.log(req.file)
  Upload.create(req.body.upload)
    .then(upload => {
      res.status(201).json({ upload: upload.toObject() })
    })
    .catch(next)
})

module.exports = router
