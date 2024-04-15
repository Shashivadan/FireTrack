import mongoose from "mongoose";

const logsSchema = new mongoose.Schema(
  {
    userId: {
      required: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
    temperature: {
      required: true,
      type: Number,
    },
    humidity: {
      required: true,
      type: Number,
    },
    oxygen: {
      required: true,
      type: Number,
    },
    probability: {
      required: true,
      type: Number,
    },
    danger: {
      required: true,
      type: Boolean,
    },
  },
  { timestamps: true }
);

const Records = mongoose.model("Records", logsSchema);

export default Records;
