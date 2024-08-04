// src/models/emails.js
import mongoose from "mongoose";

const emailSchema = new mongoose.Schema({
  userId: String,
  emails: [String],
});

export const Emails = mongoose.model("Emails", emailSchema);
