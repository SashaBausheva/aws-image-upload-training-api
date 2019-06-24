require('dotenv').config()
const fs = require('fs')
const AWS = require('aws-sdk')
const mime = require('mime')

const s3 = new AWS.S3()

const filePath = './cat-gif.gif'

const mimeType = mime.getType(filePath)

fs.readFile(filePath, (err, data) => {
  if (err) {
    console.log(err)
    return
  }
  const params = {
    ACL: 'public-read',
    Bucket: 'sasha-wdi-bucket',
    ContentType: mimeType,
    Key: Math.random().toString().split('.')[1],
    Body: data
  }

  s3.upload(params, (err, data) => {
    if (err) {
      console.log(err)
    } else {
      console.log(data)
    }
  })
})
