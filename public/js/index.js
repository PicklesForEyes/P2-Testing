var dnd = require("dnd");
var con = require("con");
var orm = require("orm");

// $(".submit").on("click", function(class, res) {
//  if (class.val === "bard") {
//    $('link[href="bard.css"]').attr('href','bard.css');
//  } else if (class.val === "barbarian") {
//    $('link[href="bard.css"]').attr('href','barbarian.css');
//  } else if (class.val === "cleric") {
//    $('link[href="bard.css"]').attr('href','cleric.css');
//  } else if (class.val === "druid") {
//    $('link[href="bard.css"]').attr('href','druid.css');
//  } else if (class.val === "fighter"){
//    $('link[href="bard.css"]').attr('href','fighter.css');
//  } else if (class.val === "paladin"){
//    $('link[href="bard.css"]').attr('href','paladin.css');
//  } else if (class.val === "ranger"){
//    $('link[href="bard.css"]').attr('href','ranger.css');
//  } else if (class.val === "rogue"){
//    $('link[href="bard.css"]').attr('href','rogue.css');
//  } else if (class.val === "sorcerer"){
//    $('link[href="bard.css"]').attr('href','sorcerer.css');
//  } else {
//    $('link[href="bard.css"]').attr('href','wizard.css');
//  }
// });

$("#characterForm").submit(function(event) {
  event.preventDefault();
  var subChara = {
    Name : $("#charaName").val().trim(),
    LvlClass : $("#lvlClass").val().trim(),
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