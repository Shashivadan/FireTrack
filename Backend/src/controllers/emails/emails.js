import { Emails } from "../../models/emails.js"; // Added .js extension

async function getEmails(req, res) {
  const { emails } = await req.body;
  const userid = "66afb2c39891b4db580e53fc";

  console.log(emails);

  try {
    const isExistingEmails = await Emails.findOne({ userId: userid });

    if (isExistingEmails)
      return res
        .status(400)
        .json({ message: "there are already email by this user" });

    await Emails.create({
      userId: userid,
      emails: emails,
    });

    res.json({
      message: "Emails saved successfully",
    });
  } catch (error) {
    console.error("Error saving emails:", error);

    res
      .status(500)
      .json({ message: "Error saving emails", error: error.message });
  }
}

export { getEmails };
