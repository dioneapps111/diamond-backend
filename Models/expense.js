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
    current_date: { type: Date, default: "" },
    current_time: { type: Date, default: "" },
    user_id: { type: Number, default: "" },
    Branch_id: { type: Number, default: "" },
    master_country_id: { type: Number, default: "" },
});

module.exports = mongoose.model("Expense", expenseSchema);