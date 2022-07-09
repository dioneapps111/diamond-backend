const mongoose = require("mongoose");

const stock_transSchema = mongoose.Schema({
    date: { type: Date, default: "" },
    f_refno: { type: String, default: "" },
    f_lotno: { type: String, default: "" },
    total_carat: { type: Number, default: "" },
    rate: { type: Number, default: "" },
    pcs: { type: Number, default: "" },
    carat: { type: Number, default: "" },
    t_refno: { type: String, default: "" },
    t_lotno: { type: String, default: "" },
    remark: { type: String, default: "" },
    c_date: { type: Date, default: "" },
    c_time: { type: Date, default: "" },
    u_id: { type: Number, default: "" },
    c_id: { type: Number, default: "" },
    m_c_id: { type: Number, default: "" },
});

module.exports = mongoose.model("Stock_trans", stock_transSchema);