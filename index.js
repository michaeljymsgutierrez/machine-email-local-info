require('dotenv').config()

const nodemailer = require('nodemailer')
const smtpTransport = require('nodemailer-smtp-transport')
const fs = require('fs')

const machineInformation = fs.readFileSync('machine.txt', 'utf-8')

const transporter = nodemailer.createTransport(
  smtpTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.GMAIL_USERNAME,
      pass: process.env.GMAIL_PASSWORD,
    },
  })
)

const mailOptions = {
  from: 'leeez711@gmail.com',
  to: 'leeez711@gmail.com',
  subject: 'Machine Information',
  text: machineInformation,
}

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error)
  } else {
    console.log('Email sent: ' + info.response)
  }
})