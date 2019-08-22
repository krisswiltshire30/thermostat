$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $.get(
    "http://api.openweathermap.org/data/2.5/weather?q=london&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric",
    function(data) {
      $("#current-temperature").text(data.main.temp);
    }
  );

  $("#current-city").change(function() {
    var city = $("#current-city").val();
    $.get(
      "http://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric",
      function(data) {
        $("#current-temperature").text(data.main.temp);
      }
    );
  });

  $("#temperature-up").click(function(event) {
    if (thermostat.showTemperature() === thermostat.showMaxTemperature()) {
      return;
    } else {
      thermostat.upOne();
    }
    updateTemperature();
  });

  $("#temperature-down").click(function(event) {
    if (thermostat.showTemperature() === thermostat.showMinTemperature()) {
      return;
    } else {
      thermostat.downOne();
    }
    updateTemperature();
  });

  $("#temperature-reset").click(function(event) {
    thermostat.resetTemperature();
    updateTemperature();
  });

  $("#powersaving-on").click(function(event) {
    thermostat.turnPowerSavingModeOn();
    if (thermostat.showTemperature() != thermostat.showMaxTemperature()) {
      thermostat.changeTemp(25);
    }
    $("#power-saving-status").text("on");
    updateTemperature();
  });

  $("#powersaving-off").click(function(event) {
    thermostat.turnPowerSavingModeOff();
    $("#power-saving-status").text("off");
    updateTemperature();
  });

  function updateTemperature() {
    $("#temperature").text(thermostat.showTemperature());
    $("#temperature").attr("class", thermostat.energyUsage());
  }
});
