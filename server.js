/ Import required modules
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

// Set up email transporter (using SendGrid or another service)
const transporter = nodemailer.createTransport({
  service: "SendGrid", // or another email service provider
  auth: {
    user: process.env.SENDGRID_USERNAME, // Your SendGrid username
    pass: process.env.SENDGRID_API_KEY,  // Your SendGrid API key
  },
});

// Route to send email verification link
app.post("/send-verification", (req, res) => {
  const { email } = req.body;
  const verificationLink = `https://yourapp.com/verify-email?email=${email}`;

  const mailOptions = {
    from: "no-reply@yourapp.com",
    to: email,
    subject: "Email Verification",
    text: `Please click on the following link to verify your email: ${verificationLink}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send("Error sending email");
    }
    res.status(200).send("Verification email sent successfully");
  });
});

// Simple GET route
app.get("/", (req, res) => {
  res.send("Welcome to Abdool Data Application backend!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
