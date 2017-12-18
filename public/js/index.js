
// custom css
$(window).load(function() {
	if ($("#class").val().trim() === "bard") {
		$('link[href="bard.css"]').attr('href','bard.css');
		$('img[src="../public/assets/images/rogue.jpg"]').attr('src', '../public/assets/images/bard.jpg');
	} else if ($("#class").val().trim() === "barbarian") {
		$('link[href="bard.css"]').attr('href','barbarian.css');
		$('img[src="../public/assets/images/rogue.jpg"]').attr('src', '../public/assets/images/barbarian.jpg');
	} else if ($("#class").val().trim() === "cleric") {
		$('link[href="bard.css"]').attr('href','cleric.css');
		$('img[src="../public/assets/images/rogue.jpg"]').attr('src', '../public/assets/images/cleric.jpg');
	} else if ($("#class").val().trim() === "druid") {
		$('link[href="bard.css"]').attr('href','druid.css');
		$('img[src="../public/assets/images/rogue.jpg"]').attr('src', '../public/assets/images/druid.jpg');
	} else if ($("#class").val().trim() === "fighter"){
		$('link[href="bard.css"]').attr('href','fighter.css');
		$('img[src="../public/assets/images/rogue.jpg"]').attr('src', '../public/assets/images/fighter.jpg');
	} else if ($("#class").val().trim() === "paladin"){
		$('link[href="bard.css"]').attr('href','paladin.css');
		$('img[src="../public/assets/images/rogue.jpg"]').attr('src', '../public/assets/images/paladin.jpg');
	} else if ($("#class").val().trim() === "monk"){
		$('link[href="bard.css"]').attr('href','monk.css');
		$('img[src="../public/assets/images/rogue.jpg"]').attr('src', '../public/assets/images/monk.jpg');
	} else if ($("#class").val().trim() === "ranger"){
		$('link[href="bard.css"]').attr('href','ranger.css');
		$('img[src="../public/assets/images/rogue.jpg"]').attr('src', '../public/assets/images/ranger.jpg');
	} else if ($("#class").val().trim() === "rogue"){
		$('link[href="bard.css"]').attr('href','rogue.css');
		$('img[src="../public/assets/images/rogue.jpg"]').attr('src', '../public/assets/images/rogue.jpg');
	} else if ($("#class").val().trim() === "sorcerer"){
		$('link[href="bard.css"]').attr('href','sorcerer.css');
		$('img[src="../public/assets/images/rogue.jpg"]').attr('src', '../public/assets/images/sorcerer.jpg');
	} else if ($("#class").val().trim() === "wizard"){
		$('link[href="bard.css"]').attr('href','wizard.css');
		$('img[src="../public/assets/images/rogue.jpg"]').attr('src', '../public/assets/images/wizard.jpg');
	} else {
		$('link[href="bard.css"]').attr('href','style.css');
		$('img[src="../public/assets/images/rogue.jpg"]').attr('src', '../public/assets/images/rogue.jpg');
	}
});

//progress bars



module.exports = "index";