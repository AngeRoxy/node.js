//  5 - Email Sender with Nodemailer
//  IMPORTANT: Replace placeholders with your own credentials before running.
//  NEVER commit real credentials to GitHub!

const nodemailer = require("nodemailer");

// Configure the transporter (example using Gmail)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "YOUR_EMAIL@gmail.com",       //  Replace with your Gmail address
    pass: "YOUR_APP_PASSWORD",           //  Replace with your Gmail App Password
  },
});

// Email options
const mailOptions = {
  from: "kouadioroxanne70@gmail.com",          // Replace with your Gmail address
  to: "RECIPIENT_EMAIL@example.com",     // Replace with recipient's address
  subject: "Hello from Node.js!",
  text: "This email was sent using Nodemailer and Node.js 🚀",
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("Error sending email:", error);
  } else {
    console.log("Email sent successfully! Response:", info.response);
  }
});

