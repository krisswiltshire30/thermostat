$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

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
