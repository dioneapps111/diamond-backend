const mongoose = require("mongoose");

const pur_sale_transSchema = mongoose.Schema({
    p_s_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Pur_sale' },
    inv_type: { type: String, default: "" },
    type: { type: String, default: "" },
    date: { type: Date, default: "" },
    party: { type: String, default: "" },
    refno: { type: String, default: "" },
    lotno: { type: mongoose.Schema.Types.ObjectId, ref: 'Item_master' },
    pcs: { type: Number, default: "" },
    carat: { type: Number, default: "" },
    rate: { type: Number, default: "" },
    amount: { type: Number, default: "" },
    l1: { type: Number, default: "" },
    l2: { type: Number, default: "" },
    net_amount: { type: Number, default: "" },
    kapan: { type: String, default: "" },
    remark: { type: String, default: "" },
    asking_rate: { type: Number, default: "" },
    cost: { type: Number, default: "" },
    stock_value: { type: Number, default: "" },
    status: { type: Number, default: "" },
    c_u_id: { type: Number, default: "" },
    current_date: { type: Date, default: "" },
    current_time: { type: Date, default: "" },
    u_u_id: { type: Number, default: "" },
    u_date: { type: Date, default: "" },
    u_time: { type: Date, default: "" },
    Branch_id: { type: Number, default: "" },
    master_country_id: { type: Number, default: "" },
});

module.exports = mongoose.model("Pur_sale_trans", pur_sale_transSchema);