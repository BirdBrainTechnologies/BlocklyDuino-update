/**
 * @fileoverview Helper functions for generating Hummingbird blocks.
 * @author Justin Lee
 */
'use strict';

//define blocks
if (!Blockly.Language) Blockly.Language = {};

Blockly.Language.hummingbird_led = {
  category: 'Hummingbird',
  helpUrl: 'http://hummingbirdkit.com',
  init: function() {
    this.setColour(50);
	this.appendDummyInput("")
	    .appendTitle("Hummingbird LED")
	    .appendTitle(new Blockly.FieldImage("http://www.hummingbirdkit.com/sites/default/files/kit-contents/full_LEDs.png", 64, 64))
	    .appendTitle("Port#")
	    .appendTitle(new Blockly.FieldDropdown([["1","1"],["2","2"],["3","3"],["4","4"]]), "PIN")
	this.appendValueInput("NUM", Number)
	    .appendTitle("Intensity");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Set Hummingbird LED');
  }
};

Blockly.Language.hummingbird_triled = {
  category: 'Hummingbird',
  helpUrl: 'http://hummingbirdkit.com',
  init: function() {
    this.setColour(65);
	this.appendDummyInput("")
	    .appendTitle("Hummingbird Tri-Color LED")
	    .appendTitle(new Blockly.FieldImage("http://www.hummingbirdkit.com/sites/default/files/kit-contents/full_TriColorLED.png", 64, 64))
	    .appendTitle("Port#")
	    .appendTitle(new Blockly.FieldDropdown([["1","1"],["2","2"]]), "PIN");
	this.appendValueInput("RED", Number)
	  .appendTitle("Red");
	this.appendValueInput("GREEN", Number)
	  .appendTitle("Green");
	this.appendValueInput("BLUE", Number)
	  .appendTitle("Blue");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Set Hummingbird Tri-Color LED');
  }
};

Blockly.Language.hummingbird_statusled = {
  category: 'Hummingbird',
  helpUrl: 'http://hummingbirdkit.com',
  init: function() {
    this.setColour(40);
	this.appendDummyInput("")
	    .appendTitle("Hummingbird Status LED");
	this.appendValueInput("NUM", Number)
	    .appendTitle("Intensity");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Set Hummingbird Status LED');
  }
};

Blockly.Language.hummingbird_ledfade = {
  category: 'Hummingbird',
  helpUrl: 'http://hummingbirdkit.com',
  init: function() {
    this.setColour(80);
	this.appendDummyInput("")
	    .appendTitle("Hummingbird LED Fading")
	    .appendTitle(new Blockly.FieldDropdown([["On","1"],["Off","0"]]), "STATE");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Set LED Fading On or Off');
  }
};

Blockly.Language.hummingbird_motor = {
  category: 'Hummingbird',
  helpUrl: 'http://hummingbirdkit.com',
  init: function() {
    this.setColour(180);
	this.appendDummyInput("")
	    .appendTitle("Hummingbird Motor Port#")
	    .appendTitle(new Blockly.FieldImage("http://www.hummingbirdkit.com/sites/default/files/kit-contents/full_Motor.png", 64, 64))
	    .appendTitle("Port#")
	    .appendTitle(new Blockly.FieldDropdown([["1","1"],["2","2"]]), "PIN");
	this.appendValueInput("NUM", Number)
	    .appendTitle("Velocity");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Set Hummingbird Motor');
  }
};

Blockly.Language.hummingbird_servo = {
  category: 'Hummingbird',
  helpUrl: 'http://hummingbirdkit.com',
  init: function() {
    this.setColour(195);
	this.appendDummyInput("")
	    .appendTitle("Hummingbird Servo")
	    .appendTitle(new Blockly.FieldImage("http://www.hummingbirdkit.com/sites/default/files/kit-contents/full_Servo2.png", 64, 64))
	    .appendTitle("Port#")
	    .appendTitle(new Blockly.FieldDropdown([["1","1"],["2","2"],["3","3"],["4","4"]]), "PIN");
	this.appendValueInput("NUM", Number)
	    .appendTitle("Angle");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Set Hummingbird Servo');
  }
};

Blockly.Language.hummingbird_vibration = {
  category: 'Hummingbird',
  helpUrl: 'http://hummingbirdkit.com',
  init: function() {
    this.setColour(165);
	this.appendDummyInput("")
	    .appendTitle("Hummingbird Vibration")
	    .appendTitle(new Blockly.FieldImage("http://www.hummingbirdkit.com/sites/default/files/kit-contents/full_VibrationMotor.png", 64, 64))
	    .appendTitle("Port#")
	    .appendTitle(new Blockly.FieldDropdown([["1","1"],["2","2"]]), "PIN")
	this.appendValueInput("NUM", Number)
	    .appendTitle("Intensity");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Set Hummingbird Vibration');
  }
};

Blockly.Language.hummingbird_vibrationspeed = {
  category: 'Hummingbird',
  helpUrl: 'http://hummingbirdkit.com',
  init: function() {
    this.setColour(160);
	this.appendDummyInput("")
	    .appendTitle("Hummingbird Vibration Motor Speed")
	    .appendTitle(new Blockly.FieldDropdown([["On","1"],["Off","0"]]), "STATE");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Set Vibration Motor Speed Control On or Off');
  }
};

Blockly.Language.hummingbird_sensor = {
  category: 'Hummingbird',
  helpUrl: 'http://hummingbirdkit.com',
  init: function() {
    this.setColour(340);
	this.appendDummyInput("")
	    .appendTitle("Hummingbird Sensor Port#")
	    .appendTitle(new Blockly.FieldDropdown([["1","1"],["2","2"],["3","3"],["4","4"]]), "PIN")
    this.setOutput(true, Number);
    this.setTooltip('Get Hummingbird Sensor');
  }
};

// define generators
Blockly.Arduino.hummingbird_led = function() {
  Blockly.Arduino.definitions_['define_hummingbird'] = '#include <Hummingbird.h>\n';
  Blockly.Arduino.definitions_['var_hummingbird'] = 'Hummingbird bird;\n';
  Blockly.Arduino.setups_['setup_hummingbird'] = 'bird.init();\n';
  var dropdown_pin = this.getTitleValue('PIN');
  var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_NONE);

  var code = 'bird.setLED('+dropdown_pin+','+value_num+');\n';
  return code;
};

Blockly.Arduino.hummingbird_statusled = function() {
  Blockly.Arduino.definitions_['define_hummingbird'] = '#include <Hummingbird.h>\n';
  Blockly.Arduino.definitions_['var_hummingbird'] = 'Hummingbird bird;\n';
  Blockly.Arduino.setups_['setup_hummingbird'] = 'bird.init();\n';
  var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_NONE);

  var code = 'bird.setStatusLED('+value_num+');\n';
  return code;
};

Blockly.Arduino.hummingbird_ledfade = function() {
  Blockly.Arduino.definitions_['define_hummingbird'] = '#include <Hummingbird.h>\n';
  Blockly.Arduino.definitions_['var_hummingbird'] = 'Hummingbird bird;\n';
  Blockly.Arduino.setups_['setup_hummingbird'] = 'bird.init();\n';
  var state = this.getTitleValue('STATE');
  if(state === "1")
    return 'bird.turnOnLEDFade();\n';
  else
    return 'bird.turnOffLEDFade();\n';
};

Blockly.Arduino.hummingbird_motor = function() {
  Blockly.Arduino.definitions_['define_hummingbird'] = '#include <Hummingbird.h>\n';
  Blockly.Arduino.definitions_['var_hummingbird'] = 'Hummingbird bird;\n';
  Blockly.Arduino.setups_['setup_hummingbird'] = 'bird.init();\n';
  var dropdown_pin = this.getTitleValue('PIN');
  var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_NONE);

  var code = 'bird.setMotor('+dropdown_pin+','+value_num+');\n';
  return code;
};

Blockly.Arduino.hummingbird_servo = function() {
  Blockly.Arduino.definitions_['define_hummingbird'] = '#include <Hummingbird.h>\n';
  Blockly.Arduino.definitions_['var_hummingbird'] = 'Hummingbird bird;\n';
  Blockly.Arduino.setups_['setup_hummingbird'] = 'bird.init();\n';
  var dropdown_pin = this.getTitleValue('PIN');
  var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_NONE);

  var code = 'bird.setServo('+dropdown_pin+','+value_num+');\n';
  return code;
};

Blockly.Arduino.hummingbird_vibration = function() {
  Blockly.Arduino.definitions_['define_hummingbird'] = '#include <Hummingbird.h>\n';
  Blockly.Arduino.definitions_['var_hummingbird'] = 'Hummingbird bird;\n';
  Blockly.Arduino.setups_['setup_hummingbird'] = 'bird.init();\n';
  var dropdown_pin = this.getTitleValue('PIN');
  var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_NONE);

  var code = 'bird.setVibration('+dropdown_pin+','+value_num+');\n';
  return code;
};

Blockly.Arduino.hummingbird_vibrationspeed = function() {
  Blockly.Arduino.definitions_['define_hummingbird'] = '#include <Hummingbird.h>\n';
  Blockly.Arduino.definitions_['var_hummingbird'] = 'Hummingbird bird;\n';
  Blockly.Arduino.setups_['setup_hummingbird'] = 'bird.init();\n';
  var state = this.getTitleValue('STATE');
  if(state === "1")
    return 'bird.turnOnVibrationMotorSpeed();\n';
  else
    return 'bird.turnOffVibrationMotorSpeed();\n';
};

Blockly.Arduino.hummingbird_triled = function() {
  Blockly.Arduino.definitions_['define_hummingbird'] = '#include <Hummingbird.h>\n';
  Blockly.Arduino.definitions_['var_hummingbird'] = 'Hummingbird bird;\n';
  Blockly.Arduino.setups_['setup_hummingbird'] = 'bird.init();\n';
  var dropdown_pin = this.getTitleValue('PIN');
  var value_red = Blockly.Arduino.valueToCode(this, 'RED', Blockly.Arduino.ORDER_NONE);
  var value_green = Blockly.Arduino.valueToCode(this, 'GREEN', Blockly.Arduino.ORDER_NONE);
  var value_blue = Blockly.Arduino.valueToCode(this, 'BLUE', Blockly.Arduino.ORDER_NONE);
  var code = 'bird.setTriColorLED('+dropdown_pin+','+value_red+','+value_green+','+value_blue+');\n';
  return code;
};

Blockly.Arduino.hummingbird_sensor = function() {
  Blockly.Arduino.definitions_['define_hummingbird'] = '#include <Hummingbird.h>\n';
  Blockly.Arduino.definitions_['var_hummingbird'] = 'Hummingbird bird;\n';
  Blockly.Arduino.setups_['setup_hummingbird'] = 'bird.init();\n';
  var dropdown_pin = this.getTitleValue('PIN');
  var code = 'bird.readSensorValue('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
