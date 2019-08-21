"use strict";

function Thermostat() {
  this._temperature = 20;
  this._MINIMUM_TEMPERATURE = 10;

  Thermostat.prototype.showTemperature = function() {
    return this._temperature;
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
