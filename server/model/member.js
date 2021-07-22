import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
  names: String,
  title: String,
  businessName: String,
  businessDesc: String,
  profilePicture: String,
  businessPictures: [{ type: String }],

  address: { type: String, default: "Rwanda" },
  web: String,
  facebook: String,
  twitter: String,
  phone: String,

  email: {
    type: String,
  },
  password: {
    type: String,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  role: {
    type: String,
    enum: ["member", "board"],
    required: [true, "role is required"],
    default: "member",
  },
  status:{
      type: String,
      enum: ["active","inactive"]
  },
  registeredOn: {
    type: String,
    default: Date.now(),
  },
});
const memberinfo = mongoose.model("member", memberSchema);

export default memberinfo;
