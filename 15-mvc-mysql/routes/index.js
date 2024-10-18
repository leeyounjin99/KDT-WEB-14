const express = require("express");
const controller = require("../controller/Cvisitor");
const router = express.Router();

router.get("/", controller.main);

router.get("/visitor", controller.get_visitor);

// POST /visitor
router.post("/visitor", controller.post_visitor);
module.exports = router;
