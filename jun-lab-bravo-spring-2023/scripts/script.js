$(function () {
  console.log("bring the wow");
});

$(document).ready(function () {
  $("#outputDiv").hide();

  // Initialize jRumble on Selector
  $("#doge").jrumble({
    x: 30,
    y: 30,
    rotation: 4,
  });

  $("#outputMsg").jrumble({
    x: 30,
    y: 30,
    rotation: 4,
  });

  $(function () {
    $("#doge").draggable();
  });

  $("#shiba").click(function () {
    $("#outputDiv").hide();
    $("#outputMsg").text("It's just Shiba!!!");
    $("#outputDiv").toggle();
    // Stop rumble on element
    $("#doge").trigger("stopRumble");
    $("#outputMsg").trigger("stopRumble");
  });

  $("#doge").click(function () {
    $("#outputDiv").hide();
    $("#outputMsg").text("MANY WOW!!!!!!!!!");
    $("#outputDiv").toggle();
    // Start rumble on element
    $("#doge").trigger("startRumble");
    $("#outputMsg").trigger("startRumble");
  });
});
