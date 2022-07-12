var express = require("express");
const pur_saleController = require("../Controllers/pur_saleController");
const AuthController = require("../Controllers/AuthController");
var router = express.Router();

router.post("/pur_saleEntry", AuthController.protectGlobal, pur_saleController.pur_saleEntry);

module.exports = router;
