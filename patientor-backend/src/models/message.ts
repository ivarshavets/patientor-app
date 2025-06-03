import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  recipientEmail: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  timestamp: { // to check
    type: Date,
    default: Date.now,
  },
}, { timestamps: true }); // to check

const Message = mongoose.model("Message", messageSchema);
export default Message;
