import mongoose from "mongoose";

const partenerSchema = new mongoose.Schema({
  name: String,
  web: String,
  logo: String,
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active"
  },
  registeredOn: {
    type: String,
    default: Date.now(),
  },
});
const partenerInfo = mongoose.model("parteners", partenerSchema);

export default partenerInfo;
