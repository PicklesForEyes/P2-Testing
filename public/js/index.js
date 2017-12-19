
// custom css

$(window).on("load", function() {
	if ($("#class").val() === "Bard") {
		// Bard
		$('#bard').attr('disabled', 'false');
		$('img[src="assets/images/rogue.jpg"]').attr('src', '../assets/images/bard.jpg');
	} else if ($("#class").val() === "Barbarian") {
		// Barbarian
		$('#barbarian').attr('disabled', 'false');
		$('img[src="assets/images/rogue.jpg"]').attr('src', '../assets/images/barbarian.jpg');
	} else if ($("#class").val() === "Cleric") {
		// Cleric
		$('#cleric').attr('disabled', 'false');
		$('img[src="assets/images/rogue.jpg"]').attr('src', '../assets/images/cleric.jpg');
	} else if ($("#class").val() === "Druid") {
		// Druid
		$('#druid').attr('disabled', 'false');
		$('img[src="assets/images/rogue.jpg"]').attr('src', '../assets/images/druid.jpg');
	} else if ($("#class").val() === "Fighter"){
		// Fighter
		$('#fighter').attr('disabled', 'false');
		$('img[src="assets/images/rogue.jpg"]').attr('src', '../assets/images/fighter.jpg');
	} else if ($("#class").val() === "Paladin"){
		// Paladin
		$('#paladin').attr('disabled', 'false');
		$('img[src="assets/images/rogue.jpg"]').attr('src', '../assets/images/paladin.jpg');
	} else if ($("#class").val() === "Monk"){
		// Monk
		$('#monk').attr('disabled', 'false');
		$('img[src="assets/images/rogue.jpg"]').attr('src', '../assets/images/monk.jpg');
	} else if ($("#class").val() === "Ranger"){
		// Ranger
		$('#ranger').attr('disabled', 'false');
		$('img[src="assets/images/rogue.jpg"]').attr('src', '../assets/images/ranger.jpg');
	} else if ($("#class").val() === "Rogue"){
		// Rogue
		$('#rogue').attr('disabled', 'false');
		$('img[src="assets/images/rogue.jpg"]').attr('src', '../assets/images/rogue.jpg');
	} else if ($("#class").val() === "Sorcerer"){
		// Sorcerer
		$('#sorcerer').attr('disabled', 'false');
		$('img[src="assets/images/rogue.jpg"]').attr('src', '../assets/images/sorcerer.jpg');
	} else if ($("#class").val() === "Wizard"){
		// Wizard
		$('#wizard').attr('disabled', 'false');
		$('img[src="assets/images/rogue.jpg"]').attr('src', '../assets/images/wizard.jpg');
	} else {
		// Default
		$('img[src="assets/images/rogue.jpg"]').attr('src', '../assets/images/rogue.jpg');
	}
});
