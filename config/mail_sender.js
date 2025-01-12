const nodemailer = require("nodemailer");
const { EMAIL_CONFIG } = require("./settings");

const mailer = nodemailer.createTransport({
  host: EMAIL_CONFIG.SMTP_ADDRESS,
  port: EMAIL_CONFIG.SMTP_PORT,
  secure: EMAIL_CONFIG.SMTP_SECURE,
  auth: {
    user: EMAIL_CONFIG.SMTP_USER,
    pass: EMAIL_CONFIG.SMTP_PASSWORD,
  },
});

module.exports = mailer;