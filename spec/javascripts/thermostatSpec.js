"use strict";

describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should have a starting temperature of 20", function() {
    expect(thermostat._temperature).toEqual(20);
  });

  it("should increase the temperature", function() {
    thermostat.up(1);
    expect(thermostat.showTemperature()).toEqual(21);
  });

  it("should decrease the temperature", function() {
    thermostat.down(1);
    expect(thermostat.showTemperature()).toEqual(19);
  });

  it("Should not be able to go below minimum temperate", function() {
    thermostat.down(11);
    expect(thermostat.showTemperature()).toEqual(10);
  });
});
