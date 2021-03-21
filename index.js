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
  from: process.env.GMAIL_USERNAME,
  to: process.env.GMAIL_USERNAME,
  subject: 'Machine Information',
  text: machineInformation,
}

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error)
  } else {
    console.log(`Email sent: ${info.response}`)
  }
})
