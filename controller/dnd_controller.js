var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, '../test.html'))
});

module.exports = router;