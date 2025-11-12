import mongoose from "mongoose";

const communitySchema = new mongoose.Schema({
  title: String,
  category: String,
  location: String,
  content: String,
  images: [String],
}, { timestamps: true });

export default mongoose.model("Community", communitySchema);
