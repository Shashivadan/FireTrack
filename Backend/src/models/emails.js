import mongoose from "mongoose";

const emailsSchema = new mongoose.Schema({
  userId: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  username: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
});

const Emails = mongoose.model("emails", emailsSchema);

export { Emails };
