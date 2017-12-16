console.log('javascript linked')

$("#submit").on('click', function(e) {
  e.preventDefault();
  console.log('i get here')
  // var character = {
  //   Name: $("#name").val().trim(),
  //   Level: $("#level").val().trim(),
  //   Class: $('#class').val().trim(),
  //   Race: $("#charaRace").val().trim(),
  //   Background: $("#background").val().trim(),
  //   Alignment: $("#alignment").val().trim(),
  //   AC: $("#armor").val().trim(),
  //   XP: $("#xp").val().trim(),
  //   Str: $("#str").val().trim(),
  //   Dex: $("#dex").val().trim(),
  //   Con: $("#con").val().trim(),
  //   Int: $("#int").val().trim(),
  //   Wis: $("#wis").val().trim(),
  //   Cha: $("#cha").val().trim(),
  //   Physical: $('#physical').val().trim(),
  //   Personality: $('#personality').val().trim(),
  //   Background: $('#background').val().trim()
  // };

  // console.log(character);

  // $.ajax({
  //   url: "/posts",
  //   method: "POST",
  //   data: "character" ,
  //   dataType: "JSON"
  // }).done(() => {
  //   console.log('sent');
  // })
});