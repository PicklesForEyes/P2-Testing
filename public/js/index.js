$("#characterForm").submit(function(event) {
  event.preventDefault();
  var subChara = {
    Name : $("#charaName").val().trim(),
    LvlClass : $("#lvl").val().trim(),
    Race: $("#charaRace").val().trim(),
    Background: $("#charaBackground").val().trim(),
    Alignment: $("#charaAlign").val().trim(),
    AC: $("#CharaAC").val().trim(),
    XP: $("#CharaXP").val().trim(),
    Str : $("#Str").val().trim(),
    Dex : $("#Dex").val().trim(),
    Con : $("#Con").val().trim(),
    Int : $("#Int").val().trim(),
    Wis : $("#Wis").val().trim(),
    Cha : $("#Cha").val().trim()
  }
  var dataSend = $.ajax({
    url:"/posts",
    method: "POST",
    data: "subChara" ,
    dataType: "JSON"
  })
  dataSend.done(() => {
    console.log(dataSend.data);
  })
});