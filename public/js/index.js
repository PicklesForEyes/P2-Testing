
// custom css
console.log('HERE');

$(document).ready(function() {
	console.log('THERE');

	var charName = $("#class").html();

	console.log($("#class").html());

	if (charName === "Bard") {
		// Bard
		$("#bard").removeAttr('disabled');
		$('#profileImg').attr('src', '../public/assets/images/bard.jpg');
	} else if (charName === "Barbarian") {
		// Barbarian
		$('#barbarian').removeAttr('disabled');
		$('#profileImg').attr('src', '../public/assets/images/barbarian.jpg');
	} else if (charName === "Cleric") {
		// Cleric
		$('#cleric').removeAttr('disabled');
		$('#profileImg').attr('src', '../public/assets/images/cleric.jpg');
	} else if (charName === "Druid") {
		// Druid
		$('#druid').removeAttr('disabled');
		$('#profileImg').attr('src', '../public/assets/images/druid.jpg');
	} else if (charName === "Fighter"){
		// Fighter
		$('#fighter').removeAttr('disabled');
		$('#profileImg').attr('src', '../public/assets/images/fighter.jpg');
	} else if (charName === "Paladin"){
		// Paladin
		$('#paladin').removeAttr('disabled');
		$('#profileImg').attr('src', '../public/assets/images/paladin.jpg');
	} else if (charName === "Monk"){
		// Monk
		$('#monk').removeAttr('disabled');
		$('#profileImg').attr('src', '../public/assets/images/monk.jpg');
	} else if (charName === "Ranger"){
		// Ranger
		$("#ranger").removeAttr('disabled');
		// $('#ranger').removeAttr('disabled');
		$('#profileImg').attr('src', '../public/assets/images/ranger.jpg');
	} else if (charName === "Rogue"){
		// Rogue
		$('#rogue').removeAttr('disabled');
		$('#profileImg').attr('src', '../public/assets/images/rogue.jpg');
	} else if (charName === "Sorcerer"){
		// Sorcerer
		$('#sorcerer').removeAttr('disabled');
		$('#profileImg').attr('src', '../public/assets/images/sorcerer.jpg');
	} else if (charName === "Wizard"){
		// Wizard
		$('#wizard').removeAttr('disabled');
		$('#profileImg').attr('src', '../public/assets/images/wizard.jpg');
	} else {
		// Default
		$('#profileImg').attr('src', '../public/assets/images/rogue.jpg');
	}
});
