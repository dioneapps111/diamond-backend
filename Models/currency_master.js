const mongoose = require("mongoose");

const currencyMasterSchema = mongoose.Schema({
    currency: { type: String, default: "" },
    rate: { type: Number, default: "" },
    c_id: { type: Schema.Types.Decimal, default: "" },
    m_c_id: { type: Number, default: "" },
});

module.exports = mongoose.model("CurrencyMaster", currencyMasterSchema);