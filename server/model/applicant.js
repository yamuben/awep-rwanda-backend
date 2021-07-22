import mongoose from "mongoose";

const applicantSchema = new mongoose.Schema({
  names: String,
  businessName: String,
  businessDesc: String,

  address: { type: String, default: "Rwanda" },
  phone: String,
  category: String,

  email: {
    type: String,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  status: {
    type: String,
    enum: ["pending", "declined","accepted"],
    required: [true, "status is required"],
    default: "pending",
  },
  appliedOn: {
    type: String,
    default: Date.now(),
  },
});
const applicantinfo = mongoose.model("applicant", applicantSchema);

export default applicantinfo;
