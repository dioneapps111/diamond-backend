const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  user_name: { type: String, default: "" },
  email: { type: String, required: true, unique: true },
  user_password: { type: String, required: true },
  user_type: { type: String, default: "" },
  user_sec_question: { type: String, default: "" },
  user_sec_answer: { type: String, default: "" },
  user_status: { type: String, default: "" },
  add: { type: Number, default: "" },
  delete: { type: Number, default: "" },
  edit: { type: Number, default: "" },
  a_Status: { type: Number, default: "" },
  Branch_id: { type: Number, default: "" },
  master_country_id: { type: Number, default: "" },
});

module.exports = mongoose.model("User", userSchema);