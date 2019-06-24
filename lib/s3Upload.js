require('dotenv').config()
const AWS = require('aws-sdk')

const s3 = new AWS.S3()

console.log(s3.upload)

const params = {
  Bucket: 'sasha-wdi-bucket',
  Key: 'key',
  Body: 'a string'
}

s3.upload(params, (err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data)
  }
})
