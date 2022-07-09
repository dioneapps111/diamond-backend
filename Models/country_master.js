const mongoose = require("mongoose");

const countryMasterSchema = mongoose.Schema({
    party_name: { type: String, default: "" },
    no_of_branch: { type: Number, default: "" },
    from_date: { type: Date, default: "" },
    to_date: { type: Date, default: "" },
    status: { type: Number, default: "" },
});

module.exports = mongoose.model("CountryMaster", countryMasterSchema);