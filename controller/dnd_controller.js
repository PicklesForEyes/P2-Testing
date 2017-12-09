var express = require("express");
var router = express.Router();
var burger = require("../models/dnd.js");

router.get("/", function(req, res) {
	// burger.selectAll(function(data) {
	// 	var hbsObj = {
	// 		dnd: data
	// 	};
	// 	res.render("index", hbsObj);
	// });
	res.sendFile(path.join(__dirname, '../test.html'))
});

module.exports = router;