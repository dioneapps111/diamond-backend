const mongoose = require("mongoose");

const pur_saleSchema = mongoose.Schema({
    inv_type: { type: Boolean, required: true },
    date: { type: Date, default: Date.now },
    type: { type: String, default: "" },
    inv_no: { type: String, default: "" },
    bill_no: { type: String, default: "" },
    party: { type: String, default: "" },
    due_days: { type: String, default: "" },
    due_date: { type: Date, default: "" },
    over_due: { type: String, default: "" },
    over_due_date: { type: Date, default: "" },
    name: { type: String, default: "" },
    remark: { type: String, default: "" },
    total_carat: { type: String, default: "" },
    amount: { type: String, default: "" },
    tax_per: { type: String, default: "" },
    tax_amount: { type: String, default: "" },
    curr_amount: { type: String, default: "" },
    final_amount: { type: String, default: "" },
    currency: { type: String, default: "USD" },
    rate: { type: String, default: "" },
    final_amount_local: { type: String, default: "" },
    paid_amount: { type: String, default: "" },
    paid_amount_local: { type: String, default: "" },
    remain_amount: { type: String, default: "" },
    remain_amount_local: { type: String, default: "" },
    cursor_amount: { type: String, default: "" },
    broker: { type: String, default: "" },
    broker_per: { type: String, default: "" },
    brok_amount: { type: String, default: "" },
    p_r_type: { type: String, default: "POLISH" },
    adat: { type: String, default: "" },
    adat_per: { type: String, default: "" },
    adat_amt: { type: String, default: "" },
    c_u_id: { type: String, default: "" },
    current_date: { type: Date, default: "" },
    current_time: { type: Date, default: "" },
    u_u_id: { type: String, default: "" },
    u_date: { type: Date, default: "" },
    u_time: { type: Date, default: "" },
    status: { type: String, default: "" },
    Branch_id: { type: String, default: "" },
    master_country_id: { type: String, default: "" },
});

module.exports = mongoose.model("Pur_sale", pur_saleSchema);