"use server";

import * as nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

const sendEmail = async (name: string, email: string, message: string) => {
  console.log(name, email, message);

  const mailOptions = {
    from: "your_email@gmail.com",
    to: "recipient@example.com",
    subject: "Hello from Nodemailer",
    text: "This is a test email sent using Nodemailer.",
  };

  await transporter.sendMail(mailOptions, (error, info) => {
    return {
      error: error,
      info: info,
    };
  });
};

export default sendEmail;
