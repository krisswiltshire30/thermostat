"use strict";

function Thermostat() {
  this._temperature = 20;
  this._MINIMUM_TEMPERATURE = 10;
  this._maximum_temperature = 25;
  this._powerSavingMode = true;
  this._energyUsage = "medium-usage";

  Thermostat.prototype.showTemperature = function() {
    return this._temperature;
  };

  Thermostat.prototype.showMaxTemperature = function() {
    return this._maximum_temperature;
  };

  Thermostat.prototype.changeTemp = function(num) {
    return (this._temperature = num);
  };

  Thermostat.prototype.showMinTemperature = function() {
    return this._MINIMUM_TEMPERATURE;
  };

  Thermostat.prototype.isPowerSavingModeOn = function() {
    return this._powerSavingMode;
  };

  Thermostat.prototype.energyUsage = function() {
    if (this._temperature <= 18) {
      return (this._energyUsage = "low-usage");
    } else if (this._temperature > 18 && this._temperature <= 25) {
      return (this._energyUsage = "medium-usage");
    } else {
      return (this._energyUsage = "high-usage");
    }
  };

  Thermostat.prototype.turnPowerSavingModeOff = function() {
    this._maximum_temperature = 32;
    return (this._powerSavingMode = false);
  };

  Thermostat.prototype.resetTemperature = function() {
    return (this._temperature = 20);
  };

  Thermostat.prototype.turnPowerSavingModeOn = function() {
    this._maximum_temperature = 25;
    return (this._powerSavingMode = true);
  };

  Thermostat.prototype.upOne = function() {
    this._temperature++;
  };

  Thermostat.prototype.downOne = function() {
    this._temperature--;
  };

  Thermostat.prototype.up = function(temp) {
    this._temperature += temp;
  };

  Thermostat.prototype.down = function(temp) {
    if (this._temperature - temp <= this._MINIMUM_TEMPERATURE) {
      this._temperature = this._MINIMUM_TEMPERATURE;
    } else {
      this._temperature -= temp;
    }
  };
}
