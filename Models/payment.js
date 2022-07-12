const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema({
    date: { type: Date, default: "" },
    account: { type: String, default: "" },
    voucher: { type: Number, default: "" },
    party: { type: String, default: "" },
    payment_type: { type: String, default: "" },
    credit_debit: { type: String, default: "" },
    currency: { type: String, default: "" },
    usd: { type: Number, default: "" },
    rate: { type: Number, default: "" },
    amount: { type: Number, default: "" },
    description: { type: String, default: "" },
    status: { type: Number, default: "" },
    current_date: { type: Date, default: "" },
    current_time: { type: Date, default: "" },
    user_id: { type: Number, default: "" },
    Branch_id: { type: Number, default: "" },
    master_country_id: { type: Number, default: "" },
});

module.exports = mongoose.model("Payment", paymentSchema);