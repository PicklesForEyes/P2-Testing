var express = require("express");
var router = express.Router();
var burger = require("../models/dnd.js");

router.get("/", function(req, res) {
	burger.selectAll(function(data) {
		var hbsObj = {
			dnd: data
		};
		res.render("index", hbsObj);
	});
});

module.exports = router;