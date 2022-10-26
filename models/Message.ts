import mongoose, { Schema } from "mongoose";

const MessageSchema: Schema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: [true, "message cannot be empty"],
    },
    // sentBy: {
    //   type: mongoose.Types.ObjectId,
    //   ref: "User",
    //   required: [true, "user cannot be empty"],
    // },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Message", MessageSchema);
