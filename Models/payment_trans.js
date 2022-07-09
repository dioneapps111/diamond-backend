const mongoose = require("mongoose");

const payment_transSchema = mongoose.Schema({
    date: { type: Date, default: "" },
    inv_type: { type: String, default: "" },
    voucher: { type: Number, default: "" },
    account: { type: String, default: "" },
    inv_no: { type: String, default: "" },
    bill_no: { type: String, default: "" },
    credit_debit: { type: String, default: "" },
    party: { type: String, default: "" },
    currency: { type: String, default: "" },
    usd: { type: Number, default: "" },
    rate: { type: Number, default: "" },
    amount: { type: Number, default: "" },
    status: { type: Number, default: "" },
    c_date: { type: Date, default: "" },
    c_time: { type: Date, default: "" },
    u_id: { type: Number, default: "" },
    c_id: { type: Number, default: "" },
    m_c_id: { type: Number, default: "" },
});

module.exports = mongoose.model("Payment_trans", payment_transSchema);