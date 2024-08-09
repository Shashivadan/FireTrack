import { json } from "express";
import { Emails } from "../../models/emails.js";

async function createEmails(req, res) {
  const { emails } = await req.body;
  const userId = req.userId;

  try {
    const isExistingEmails = await Emails.findOne({ userId: userId });

    if (isExistingEmails) {
      await isExistingEmails.updateOne({
        emails: Array.from(new Set([...isExistingEmails.emails, ...emails])),
      });
      return res.json({ message: "Emails updata successfully" });
    }

    await Emails.create({
      userId: userId,
      emails: emails,
    });

    res.json({
      message: "Emails saved successfully",
    });
  } catch (error) {
    // console.error("Error saving emails:", error);

    res
      .status(500)
      .json({ message: "Error saving emails", error: error.message });
  }
}

async function getAllMails(req, res) {
  const userId = req.userId;

  try {
    const UserEmails = await Emails.findOne({ userId: userId });
    if (!UserEmails) {
      return res.json({
        message: "No Emails are found on this user",
        susses: false,
      });
    }
    console.log(UserEmails);

    return res.json({
      data: { userId: UserEmails.userId, emails: UserEmails.emails },
    });
  } catch (error) {
    return res.status(500).json({
      message: "Intrenal Server Error",
      susses: false,
    });
  }
}

export { createEmails, getAllMails };
