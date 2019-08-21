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

  it("Power saving mode should me on by default", function() {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it("Should be able to turn power saving mode off", function() {
    thermostat.turnPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  it("Should be able to turn power saving mode on", function() {
    thermostat.turnPowerSavingModeOff();
    thermostat.turnPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it("If power saving mode is on, max temp is 25", function() {
    expect(thermostat.showMaxTemperature()).toEqual(25);
  });

  it("If power saving mode is off, max temp is 32", function() {
    thermostat.turnPowerSavingModeOff();
    expect(thermostat.showMaxTemperature()).toEqual(32);
  });
});
