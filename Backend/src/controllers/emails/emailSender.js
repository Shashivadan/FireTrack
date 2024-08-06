import nodemailer from "nodemailer";
import { emailWarning } from "../../utils/emailWarning.js";
import { Emails } from "../../models/emails.js";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.email",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

async function sendEmails(emails) {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL,
      to: emails,
      subject: "Warning",
      html: emailWarning,
    });
  } catch (error) {
    console.log("error", error);
    return false;
  }
}

export async function sendWarningMails(userid) {
  try {
    // const { emails } = await Emails.findOne({ userId: id });
    // if (!emails) return false;
    const email = ["spearkshashi@gmail.com"];

    await sendEmails(email);
  } catch (error) {
    return false;
  }
}
