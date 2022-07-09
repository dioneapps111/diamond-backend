const mongoose = require("mongoose");

const expenseSchema = mongoose.Schema({
    date: { type: Date, default: "" },
    voucher: { type: Number, default: "" },
    category: { type: String, default: "" },
    account: { type: String, default: "" },
    exp_to: { type: String, default: "" },
    currency: { type: String, default: "" },
    amount: { type: Number, default: "" },
    exp_by: { type: String, default: "" },
    remark: { type: String, default: "" },
    c_date: { type: Date, default: "" },
    c_time: { type: Date, default: "" },
    u_id: { type: Number, default: "" },
    c_id: { type: Number, default: "" },
    m_c_id: { type: Number, default: "" },
});

module.exports = mongoose.model("Expense", expenseSchema);