$(".submit").on("click", function(class, res) {
	if ($("#class").val === "bard") {
		$('link[href="bard.css"]').attr('href','bard.css');
	} else if ($("#class").val === "barbarian") {
		$('link[href="bard.css"]').attr('href','barbarian.css');
	} else if ($("#class").val === "cleric") {
		$('link[href="bard.css"]').attr('href','cleric.css');
	} else if ($("#class").val === "druid") {
		$('link[href="bard.css"]').attr('href','druid.css');
	} else if ($("#class").val === "fighter"){
		$('link[href="bard.css"]').attr('href','fighter.css');
	} else if ($("#class").val === "paladin"){
		$('link[href="bard.css"]').attr('href','paladin.css');
	} else if ($("#class").val === "monk"){
		$('link[href="bard.css"]').attr('href','monk.css');
	} else if ($("#class").val === "ranger"){
		$('link[href="bard.css"]').attr('href','ranger.css');
	} else if ($("#class").val === "rogue"){
		$('link[href="bard.css"]').attr('href','rogue.css');
	} else if ($("#class").val === "sorcerer"){
		$('link[href="bard.css"]').attr('href','sorcerer.css');
	} else {
		$('link[href="bard.css"]').attr('href','wizard.css');
	}
});

module.exports = "index";