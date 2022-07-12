const mongoose = require("mongoose");

const TypeSchema = mongoose.Schema({
    priority: { type: Number, default: "" },
    type: { type: String, default: "" },
    name: { type: String, default: "" },
    color: { type: String, default: "" },
    intensity: { type: String, default: "" },
    overtone: { type: String, default: "" },
    p_from: { type: Number, default: "" },
    p_to: { type: Number, default: "" },
    st_name: { type: String, default: "" },
    date: { type: Date, default: "" },
    time: { type: Date, default: "" },
    Branch_id: { type: Number, default: "" },
    master_country_id: { type: Number, default: "" },
});

module.exports = mongoose.model("Type", TypeSchema);