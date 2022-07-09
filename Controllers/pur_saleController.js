var User = require("../Models/pur_sale");
const mongoose = require("mongoose");

exports.purchaseEntry = async function (req, res, next) {
    try {
        let data = {
            date: req.body.date,
            purchase: req.body.purchase,
            currency: req.body.currency,
            curr_date: req.body.curr_date,
            bill_no: req.body.bill_no,
            party: req.body.party,
            broker: req.body.broker,
            due_days: req.body.due_days,
            due_date: req.body.due_date,
            over_due: req.body.over_due,
            over_due_date: req.body.over_due_date,
            type: req.body.type,
            p_r_type: req.body.p_r_type,
            adat: req.body.adat,
            adat_amt: req.body.adat_amt,
        };
        let addData = await User.create(data);
        res.status(200).json({
            status: "200",
            addData: data,
        });
    } catch (err) {
        res.status(200).json({
            status: "500",
            message: err.message,
        });
    }
};

exports.getpurchaseTBL = async function (req, res, next) {
    try {
        let data = await User.findById(req.body.userId);
        // let addData = await User.create(data);
        res.status(200).json({
            status: "200",
            data,
        });
    } catch (err) {
        res.status(200).json({
            status: "500",
            message: err.message,
        });
    }
};

exports.updatepurchase = async function (req, res, next) {
    try {
        let newdata = await User.findByIdAndUpdate(req.body.userId,
            {
                purchase: req.body.purchase,
                bill_no: req.body.bill_no,
                party: req.body.party,
                broker: req.body.broker,
                over_due: req.body.over_due,
                type: req.body.type,
                p_r_type: req.body.p_r_type,
                adat: req.body.adat,
                adat_amt: req.body.adat_amt,
                over_due_date: req.body.over_due_date
            })
        res.status(200).json({
            status: "200",
            data: newdata,
        });
    } catch (err) {
        res.status(200).json({
            status: "500",
            message: err.message,
        });
    }
};

exports.updatedocument = async function (req, res, next) {
    try {
        // console.log(req.body.userId);
        let newdata = await User.findByIdAndUpdate(req.body.userId,
            {
                adharcard: req.files.adharcard[0].filename,
                pancard: req.files.pancard[0].filename,
            })
        res.status(200).json({
            status: "200",
            data: newdata,
        });
    } catch (err) {
        res.status(200).json({
            status: "500",
            message: err.message,
        });
    }
};

exports.updatebank = async function (req, res, next) {
    try {
        let newdata = await User.findByIdAndUpdate(req.body.userId,
            {
                acnumber: req.body.acnumber,
                ifsccode: req.body.ifsccode,
                nameinbank: req.body.nameinbank,
            })
        res.status(200).json({
            status: "200",
            data: newdata,
        });
    } catch (err) {
        res.status(200).json({
            status: "500",
            message: err.message,
        });
    }
};