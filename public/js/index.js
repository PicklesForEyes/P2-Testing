$(window).on('load', function() {
	if ($("#class").val() === "bard") {
		$('link[href="bard.css"]').attr('href','bard.css');
		$('img[src="assets/images/rogue.jpg"]').attr('src', 'assets/images/bard.jpg');
	} else if ($("#class").val() === "barbarian") {
		$('link[href="bard.css"]').attr('href','barbarian.css');
		$('img[src="assets/images/rogue.jpg"]').attr('src', 'assets/images/barbarian.jpg');
	} else if ($("#class").val() === "cleric") {
		$('link[href="bard.css"]').attr('href','cleric.css');
		$('img[src="assets/images/rogue.jpg"]').attr('src', 'assets/images/cleric.jpg');
	} else if ($("#class").val() === "druid") {
		$('link[href="bard.css"]').attr('href','druid.css');
		$('img[src="assets/images/rogue.jpg"]').attr('src', 'assets/images/druid.jpg');
	} else if ($("#class").val() === "fighter"){
		$('link[href="bard.css"]').attr('href','fighter.css');
		$('img[src="assets/images/rogue.jpg"]').attr('src', 'assets/images/fighter.jpg');
	} else if ($("#class").val() === "paladin"){
		$('link[href="bard.css"]').attr('href','paladin.css');
		$('img[src="assets/images/rogue.jpg"]').attr('src', 'assets/images/paladin.jpg');
	} else if ($("#class").val() === "monk"){
		$('link[href="bard.css"]').attr('href','monk.css');
		$('img[src="assets/images/rogue.jpg"]').attr('src', 'assets/images/monk.jpg');
	} else if ($("#class").val() === "ranger"){
		$('link[href="bard.css"]').attr('href','ranger.css');
		$('img[src="assets/images/rogue.jpg"]').attr('src', 'assets/images/ranger.jpg');
	} else if ($("#class").val() === "rogue"){
		$('link[href="bard.css"]').attr('href','rogue.css');
		$('img[src="assets/images/rogue.jpg"]').attr('src', 'assets/images/rogue.jpg');
	} else if ($("#class").val() === "sorcerer"){
		$('link[href="bard.css"]').attr('href','sorcerer.css');
		$('img[src="assets/images/rogue.jpg"]').attr('src', 'assets/images/sorcerer.jpg');
	} else if ($("#class").val() === "wizard"){
		$('link[href="bard.css"]').attr('href','wizard.css');
		$('img[src="assets/images/rogue.jpg"]').attr('src', 'assets/images/wizard.jpg');
	} else {
		$('link[href="bard.css"]').attr('href','style.css');
		$('img[src="assets/images/rogue.jpg"]').attr('src', 'assets/images/rogue.jpg');
	}
});