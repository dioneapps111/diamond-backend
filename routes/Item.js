var express = require("express");
const AuthController = require("../Controllers/AuthController");
const TypeController = require("../Controllers/TypeController");
const ItemController = require("../Controllers/ItemController");
var router = express.Router();

router.post("/addtype", AuthController.protectGlobal, TypeController.TypeEntry);
router.get("/gettypes", AuthController.protectGlobal, TypeController.gettypes);
router.post("/lotEntry", AuthController.protectGlobal, ItemController.lotEntry);

module.exports = router;
