const mongoose = require("mongoose");

const pur_saleSchema = mongoose.Schema({
    inv_type: { type: Boolean, required: true },
    date: { type: Date, default: Date.now },
    type: { type: String, default: "" },
    inv_no: { type: Number, default: "" },
    bill_no: { type: String, default: "" },
    party: { type: String, default: "" },
    due_days: { type: Number, default: "" },
    due_date: { type: Date, default: "" },
    over_due: { type: Number, default: "" },
    over_due_date: { type: Date, default: "" },
    name: { type: String, default: "" },
    remark: { type: String, default: "" },
    total_carat: { type: Number, default: "" },
    amount: { type: Number, default: "" },
    tax_per: { type: Number, default: "" },
    tax_amount: { type: Number, default: "" },
    curr_amount: { type: Number, default: "" },
    final_amount: { type: Number, default: "" },
    currency: { type: String, default: "USD" },
    rate: { type: Number, default: "" },
    final_amount_local: { type: Number, default: "" },
    paid_amount: { type: Number, default: "" },
    paid_amount_local: { type: Number, default: "" },
    remain_amount: { type: Number, default: "" },
    remain_amount_local: { type: Number, default: "" },
    cursor_amount: { type: Number, default: "" },
    broker: { type: String, default: "" },
    broker_per: { type: Number, default: "" },
    brok_amount: { type: Number, default: "" },
    p_r_type: { type: String, default: "POLISH" },
    adat: { type: String, default: "" },
    adat_per: { type: Number, default: "" },
    adat_amt: { type: Number, default: "" },
    c_u_id: { type: Number, default: "" },
    current_date: { type: Date, default: "" },
    current_time: { type: Date, default: "" },
    u_u_id: { type: Number, default: "" },
    u_date: { type: Date, default: "" },
    u_time: { type: Date, default: "" },
    status: { type: Number, default: "" },
    Branch_id: { type: Number, default: "" },
    master_country_id: { type: Number, default: "" },
});

module.exports = mongoose.model("Pur_sale", pur_saleSchema);