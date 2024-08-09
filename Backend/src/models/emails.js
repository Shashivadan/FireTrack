// src/models/emails.js
import mongoose from "mongoose";

const emailSchema = new mongoose.Schema({
  userId: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  emails: [String],
});

export const Emails = mongoose.model("Emails", emailSchema);
