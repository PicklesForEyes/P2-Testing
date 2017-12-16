$(document).ready(() => {
  $("#submit").on('click', event => {
    event.preventDefault();
    var character = {
      Name : $("#name").val().trim(),
      Level : $("#level").val().trim(),
      Class: $('#class').val().trim(),
      Race: $("#race").val().trim(),
      Background: $("#background").val().trim(),
      Alignment: $("#alignment").val().trim(),
      ArmorClass: $("#armor").val().trim(),
      ExperiencePoints: $("#xp").val().trim(),
      Strength: $("#str").val().trim(),
      Dexterity: $("#dex").val().trim(),
      Constitution: $("#con").val().trim(),
      Intelligence: $("#int").val().trim(),
      Wisdom: $("#wis").val().trim(),
      Charisma: $("#cha").val().trim()
    }

    $.ajax({
      url:"/api/character",
      method: "POST",
      data: character,
      dataType: "JSON",
      success: result => {
        console.log(result)
      }
    })

    $('#name').val('')
    $('#level').val('')
    $('#class').val('')
    $('#race').val('')
    $('#background').val('')
    $('#alignment').val('')
    $('#armor').val('')
    $('#xp').val('')
    $('#str').val('')
    $('#dex').val('')
    $('#con').val('')
    $('#int').val('')
    $('#wis').val('')
    $('#cha').val('')
    $('#personality').val('')
    $('#physical').val('')
  });
})