$(document).ready(function() {
  var thermostat = new Thermostat();
  $("#temperature").text(thermostat.showTemperature());

  $("#temperature-up").click(function(event) {
    if (thermostat.showTemperature() === thermostat.showMaxTemperature()) {
      return;
    } else {
      thermostat.upOne();
    }
    $("#temperature").text(thermostat.showTemperature());
  });

  $("#temperature-down").click(function(event) {
    if (thermostat.showTemperature() === thermostat.showMinTemperature()) {
      return;
    } else {
      thermostat.downOne();
    }
    $("#temperature").text(thermostat.showTemperature());
  });

  $("#temperature-reset").click(function(event) {
    thermostat.resetTemperature();
    $("#temperature").text(thermostat.showTemperature());
  });

  $("#powersaving-on").click(function(event) {
    thermostat.turnPowerSavingModeOn();
    if (thermostat.showTemperature() != thermostat.showMaxTemperature()) {
      thermostat.changeTemp(25);
    }
    $("#power-saving-status").text("on");
    $("#temperature").text(thermostat.showTemperature());
  });

  $("#powersaving-off").click(function(event) {
    thermostat.turnPowerSavingModeOff();
    $("#power-saving-status").text("off");
    $("#temperature").text(thermostat.showTemperature());
  });
});
