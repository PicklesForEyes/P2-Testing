$(document).ready(() => {
  $("#submit").on('click', function(event) {
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
      Character: $("#cha").val().trim()
    }

    console.log(character)

    // var dataSend = $.ajax({
    //   url:"/posts",
    //   method: "POST",
    //   data: "subChara" ,
    //   dataType: "JSON"
    // })

    // dataSend.done(() => {
    //   console.log(dataSend.data);
    // })
  });
})