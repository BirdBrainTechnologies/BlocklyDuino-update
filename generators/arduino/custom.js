/**
 * @fileoverview Helper functions for generating Arduino blocks.
 * @author author@email.com (Name)
 */
'use strict';

//define blocks
if (!Blockly.Language) Blockly.Language = {};

//define read block
Blockly.Language.custom_read = {
  category: 'Custom',
  helpUrl: '',
  init: function() {
    this.setColour(230);
	this.appendDummyInput("")
	    .appendTitle("CustomRead PIN#")
	    .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.setOutput(true, Boolean);
    this.setTooltip('input block');
  }
};

Blockly.Language.custom_read = {
  category: 'Custom',
  helpUrl: '',
  init: function() {
    this.setColour(230);
	this.appendDummyInput("")
	    .appendTitle("CustomRead PIN#")
	    .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.setOutput(true, Boolean);
    this.setTooltip('input block');
  }
};

//define write block
Blockly.Language.initbot = {
  category: 'Custom',
  helpUrl: '',
  init: function() {
    this.setColour(230);
	this.appendDummyInput("")
	    .appendTitle("initBot")
	    .appendTitle(new Blockly.FieldImage("http://image.dfrobot.com/image/cache/data/KIT0051/_DSC0415-900x600.JPG", 64, 64));

	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Output block');
  }
};

Blockly.Language.forwardbot = {
  category: 'InsectBot',
  helpUrl: '',
  init: function() {
    this.setColour(230);
	this.appendDummyInput("")
	    .appendTitle("Avance")
	    .appendTitle(new Blockly.FieldImage("http://www.moumoute.biz/blockly/media/avance.gif", 64, 64));

	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Demande au robot d avancer');
  }
};

Blockly.Language.moveBackRight = {
  category: 'InsectBot',
  helpUrl: '',
  init: function() {
    this.setColour(230);
	this.appendDummyInput("")
	    .appendTitle("Recule vers la droite")
	    .appendTitle(new Blockly.FieldImage("http://www.moumoute.biz/blockly/media/reculdroite.gif", 64, 64));

	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Demande au robot de reculer vers la droite');
  }
};

Blockly.Language.moveTurnLeft = {
  category: 'InsectBot',
  helpUrl: '',
  init: function() {
    this.setColour(230);
	this.appendDummyInput("")
	    .appendTitle("Avance vers la gauche")
	    .appendTitle(new Blockly.FieldImage("http://www.moumoute.biz/blockly/media/avancegauche.gif", 64, 64));

	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Demande au robot d avancer vers la gauche');
  }
};

Blockly.Language.blinkybot = {
  category: 'InsectBot',
  helpUrl: '',
  init: function() {
    this.setColour(230);
	this.appendDummyInput("")
	    .appendTitle("Clignote 5 fois")
	    .appendTitle(new Blockly.FieldImage("http://www.moumoute.biz/blockly/media/blink.gif", 64, 64));

	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Demande au robot de clignoter');
  }
};

Blockly.Language.scanbot = {
  category: 'InsectBot',
  helpUrl: '',
  init: function() {
    this.setColour(230);
	this.appendDummyInput("")
	    .appendTitle("Scanner")
	    .appendTitle(new Blockly.FieldImage("http://www.moumoute.biz/blockly/media/insectbot.JPG", 64, 64));

	
    this.setOutput(true, Number);
    this.setTooltip('Demande au robot de scanner son environnement');
  }
};


Blockly.Language.temperature = {
  category: 'ArduiLab',
  helpUrl: '',
  init: function() {
    this.setColour(230);
	this.appendDummyInput("")
	    .appendTitle("Température")
	    .appendTitle(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/3/36/Temp%26Humi.jpg/300px-Temp%26Humi.jpg", 64, 64))
		.appendTitle("Broche Num# ")
	    .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN");
	
    this.setOutput(true, Number);
    this.setTooltip('Capte la température');
  }
};

Blockly.Language.temperature_sonde = {
  category: 'ArduiLab',
  helpUrl: '',
  init: function() {
    this.setColour(230);
	this.appendDummyInput("")
	    .appendTitle("Sonde Température")
	    .appendTitle(new Blockly.FieldImage("http://www.seeedstudio.com/depot/bmz_cache/d/df18c4aba47e122ebd4addb9d9e78420.image.530x397.jpg", 64, 64))
		.appendTitle("Broche Num# ")
	    .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN");
	
    this.setOutput(true, Number);
    this.setTooltip('Capte la température, basé sur la sonde DS18B20.(-55°C -> 125°C');
  }
};


Blockly.Language.co2 = {
  category: 'ArduiLab',
  helpUrl: '',
  init: function() {
    this.setColour(230);
	this.appendDummyInput("")
	    .appendTitle("Dioxyde de carbone")
	    .appendTitle(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/b/b2/Grove_CO2_Sensor.jpg", 64, 64))
		.appendTitle("Broche Num# ")
	    .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN");
	
    this.setOutput(true, Number);
    this.setTooltip('Capte la concentration de CO2 en ppm (0ppm -> 2000ppm');
  }
};

Blockly.Language.afficheur = {
  category: 'ArduiLab',
  helpUrl: '',
  init: function() {
    this.setColour(230);
    	this.appendValueInput("VAR", String)
        .setCheck(String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("Titre de l'afficheur");
	this.appendValueInput("CONTENT", String)
	    .appendTitle("Afficher");
	    //.appendTitle(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/3/36/Temp%26Humi.jpg/300px-Temp%26Humi.jpg", 64, 64));
	this.appendValueInput("UNITS", String)
	    .appendTitle("Unitée");
	    //.appendTitle(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/3/36/Temp%26Humi.jpg/300px-Temp%26Humi.jpg", 64, 64));

	
        this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.LANG_VARIABLES_SET_TOOLTIP_1);   
 },
  getVars: function() {
    return [this.getTitleValue('VAR')];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getTitleValue('VAR'))) {
      this.setTitleValue(newName, 'VAR');
    }
  }
};


Blockly.Language.humidite = {
  category: 'ArduiLab',
  helpUrl: '',
  init: function() {
    this.setColour(230);
	this.appendDummyInput("")
	    .appendTitle("Humidité")
	    .appendTitle(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/3/36/Temp%26Humi.jpg/300px-Temp%26Humi.jpg", 64, 64))
		.appendTitle("Broche Num# ")
	    .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN");
	
    this.setOutput(true, Number);
    this.setTooltip('Capte lhumidite');
  }
};

Blockly.Language.dust = {
  category: 'ArduiLab',
  helpUrl: '',
  init: function() {
    this.setColour(230);
	this.appendDummyInput("")
	    .appendTitle("Particules")
	    .appendTitle(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/b/b7/Dust_sensor.JPG/400px-Dust_sensor.JPG", 64, 64))
		.appendTitle("Broche Num# ")
	    .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN");
	
    this.setOutput(true, Number);
    this.setTooltip('Capte les particules >1um en parties/litres d air');
  }
};

// define generators
Blockly.Arduino.custom_write = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'analogWrite('+dropdown_pin+','+value_num+');\n';
  return code;
};

Blockly.Arduino.initbot = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  
  Blockly.Arduino.definitions_['define_custom_read'] = '#include <Servo.h>;\n'+
														'Servo frontServo;\n'+
														'Servo rearServo;\n'+
														'\n// time delay between steps\n'+
                                                        '	int walkSpeed = 500;\n'+
                                                        '// center servos\n'+
														'	int centerPos = 90;\n'+
														'// servo angles for walking pattern\n'+
														'	int frontRightUp = 70;\n'+
														'	int frontLeftUp = 110;\n'+
														'	int backRightForward = 70;\n'+
														'	int backLeftForward = 110;\n'+
														'// another center position\n'+
														'	int centerTurnPos = 81;\n'+
														'// servo angles for walking pattern\n'+
														'	int frontTurnRightUp = 70;\n'+
														'	int frontTurnLeftUp = 110;\n'+
														'	int backTurnRightForward = 70;\n'+
														'	int backTurnLeftForward = 110;\n'+
														'// variable for distance value\n'+
														'//	int distance = 0;\n'+
														'// average distance value\n'+
														'	int distanceCheck = 0;\n'+
														'// Array for distance values\n'+
														'	int collectDistance[5];\n'+
														'// Variables for counters\n'+
														'	int i;\n'+
														'	int f;\n'+
														'	int r;\n'+
														'// assign analog pin A1\n'+
														'	int sensorPin = A1;\n'+
														'// distance value for danger close. Bigger values are greater distance and smaller values are lower distance\n'+
														'	int dangerDistance = 350; \n'
														;
  // Blockly.Arduino.definitions_['var_custom_read'+dropdown_pin] = 'Servo servo_'+dropdown_pin+';\n';
   Blockly.Arduino.setups_['setup_custom_read_4'] = 
														'	// attach servos\n'+
														'		frontServo.attach(9);\n'+
														'		rearServo.attach(10);\n'+
														'	// assign sensor\n'+
														'		pinMode(sensorPin, INPUT);\n'+
														'	// center servos\n'+
														'		frontServo.write(centerPos);\n'+
														'		rearServo.write(centerPos);\n'+
														'	// wait 3 seconds for start walking\n'+
														'		delay(3000);\n'+
														'	//Serial.begin(9600); // serial data setup'
   ;
  
  var code = '';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.scanbot = function() {
  var dropdown_pin = this.getTitleValue('PIN');
   Blockly.Arduino.definitions_['define_custom_read'] = '#include <Servo.h>;\n'+
														'Servo frontServo;\n'+
														'Servo rearServo;\n'+
														'\n// time delay between steps\n'+
                                                        '	int walkSpeed = 500;\n'+
                                                        '// center servos\n'+
														'	int centerPos = 90;\n'+
														'// servo angles for walking pattern\n'+
														'	int frontRightUp = 70;\n'+
														'	int frontLeftUp = 110;\n'+
														'	int backRightForward = 70;\n'+
														'	int backLeftForward = 110;\n'+
														'// another center position\n'+
														'	int centerTurnPos = 81;\n'+
														'// servo angles for walking pattern\n'+
														'	int frontTurnRightUp = 70;\n'+
														'	int frontTurnLeftUp = 110;\n'+
														'	int backTurnRightForward = 70;\n'+
														'	int backTurnLeftForward = 110;\n'+
														'// variable for distance value\n'+
														'//	int distance = 0;\n'+
														'// average distance value\n'+
														'	int distanceCheck = 0;\n'+
														'// Array for distance values\n'+
														'	int collectDistance[5];\n'+
														'// Variables for counters\n'+
														'	int i;\n'+
														'	int f;\n'+
														'	int r;\n'+
														'// assign analog pin A1\n'+
														'	int sensorPin = A1;\n'+
														'// distance value for danger close. Bigger values are greater distance and smaller values are lower distance\n'+
														'	int dangerDistance = 350; \n'
														;
  // Blockly.Arduino.definitions_['var_custom_read'+dropdown_pin] = 'Servo servo_'+dropdown_pin+';\n';
   Blockly.Arduino.setups_['setup_custom_read_4'] = 
														'	// attach servos\n'+
														'		frontServo.attach(9);\n'+
														'		rearServo.attach(10);\n'+
														'	// assign sensor\n'+
														'		pinMode(sensorPin, INPUT);\n'+
														'	// center servos\n'+
														'		frontServo.write(centerPos);\n'+
														'		rearServo.write(centerPos);\n'+
														'	// wait 3 seconds for start walking\n'+
														'		delay(3000);\n'+
														'	//Serial.begin(9600); // serial data setup'
   ;
  
  // Blockly.Arduino.definitions_['define_custom_read'] = '#include &lt;Servo.h&gt;\n';
    Blockly.Arduino.definitions_['define_custom_read_3'] = 			'int scan(){\n'+
																	'	// read 5 distance values\n'+
																	'	for (i = 0; i < 5; i = i + 1) {\n'+
																	'		distanceCheck = analogRead(sensorPin);\n'+
																	'		collectDistance[i] = distanceCheck;\n'+
																	'		// serial output for testing\n'+
																	'		//Serial.print (i);\n'+
																	'		//Serial.print(" = ");\n'+
																	'		//Serial.println(collectDistance[i]);\n'+
																	'	}\n'+
																	'	// checksum of the 5 distance values for getting an average value. This will prevent the robot to change behavior by reading one wrong value\n'+
																	'	int distance = (collectDistance[0]+collectDistance[1]+collectDistance[2]+collectDistance[3]+collectDistance[4])/5;\n'+
																	'	delay(20);\n'+  
																	'	return distance;\n'+
																	'}\n'
   ;
   
  // Blockly.Arduino.setups_['setup_custom_read_'+dropdown_pin] = 'servo_'+dropdown_pin+'.attach('+dropdown_pin+');\n';
  
  var code = 'scan()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.temperature = function() {
  var dropdown_pin = this.getTitleValue('PIN');
   Blockly.Arduino.definitions_['define_custom_dht11'] = '#include "DHT.h"\n'+
														 '#define DHTTYPE DHT11\n'
																											
														;
	Blockly.Arduino.definitions_['define_custom_dht11'+dropdown_pin] = 	'#define DHTPIN'+dropdown_pin+' '+dropdown_pin+'\n'+
																		'DHT dht'+dropdown_pin+'(DHTPIN'+dropdown_pin+', DHTTYPE);\n'	
																;
  // Blockly.Arduino.definitions_['var_custom_read'+dropdown_pin] = 'Servo servo_'+dropdown_pin+';\n';
   Blockly.Arduino.setups_['setup_custom_dht11setup'+dropdown_pin] = ' dht'+dropdown_pin+'.begin();'
   ;
  
  // Blockly.Arduino.definitions_['define_custom_read'] = '#include &lt;Servo.h&gt;\n';
    Blockly.Arduino.definitions_['define_custom_read_3'+dropdown_pin] = 'float temp'+dropdown_pin+'(){\n'+
																	 
																	'float t = dht'+dropdown_pin+'.readTemperature();\n'+
																	'return t;\n'+
																	'}\n'
   ;
   
  // Blockly.Arduino.setups_['setup_custom_read_'+dropdown_pin] = 'servo_'+dropdown_pin+'.attach('+dropdown_pin+');\n';
  
  var code = 'temp'+dropdown_pin+'()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.temperature_sonde = function() {
  var dropdown_pin = this.getTitleValue('PIN');
   Blockly.Arduino.definitions_['define_custom_DS18B20'] = '#include <OneWire.h>\n'+
															'#include <DallasTemperature.h>\n'
														 ;
	Blockly.Arduino.definitions_['define_custom_DS18B20'+dropdown_pin] = 'OneWire oneWire_'+dropdown_pin+'('+dropdown_pin+');	// Setup a oneWire instance to communicate with any OneWire on pin '+dropdown_pin+'\n'+
																		 'DallasTemperature sensors_'+dropdown_pin+'(&oneWire_'+dropdown_pin+');\n'	
																		;
 
   Blockly.Arduino.setups_['setup_custom_DS18B20'+dropdown_pin] = ' sensors_'+dropdown_pin+'.begin();\n'
   ;
  Blockly.Arduino.loopconstinit_['request_temp_DS18B20'+dropdown_pin] =  'sensors_'+dropdown_pin+'.requestTemperatures(); // Send the command to get temperatures\n';
  
  var code = 'sensors_'+dropdown_pin+'.getTempCByIndex(0)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.humidite = function() {
  var dropdown_pin = this.getTitleValue('PIN');
   Blockly.Arduino.definitions_['define_custom_dht11'] = '#include "DHT.h"\n'+
														 '#define DHTTYPE DHT11\n'
																											
														;
	Blockly.Arduino.definitions_['define_custom_dht11'+dropdown_pin] = 	'#define DHTPIN'+dropdown_pin+' '+dropdown_pin+'\n'+
																		'DHT dht'+dropdown_pin+'(DHTPIN'+dropdown_pin+', DHTTYPE);\n'	
																;
  // Blockly.Arduino.definitions_['var_custom_read'+dropdown_pin] = 'Servo servo_'+dropdown_pin+';\n';
   Blockly.Arduino.setups_['setup_custom_dht11setup'+dropdown_pin] = ' dht'+dropdown_pin+'.begin();'
   ;
  
  // Blockly.Arduino.definitions_['define_custom_read'] = '#include &lt;Servo.h&gt;\n';
    Blockly.Arduino.definitions_['define_custom_readhum_3'+dropdown_pin] = 'float humidite'+dropdown_pin+'(){\n'+
																	 
																	'float t = dht'+dropdown_pin+'.readHumidity();\n'+
																	'return t;\n'+
																	'}\n'
   ;
   
  // Blockly.Arduino.setups_['setup_custom_read_'+dropdown_pin] = 'servo_'+dropdown_pin+'.attach('+dropdown_pin+');\n';
  
  var code = 'humidite'+dropdown_pin+'()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.dust = function() {
  var dropdown_pin = this.getTitleValue('PIN');
   
	Blockly.Arduino.definitions_['define_custom_dust'+dropdown_pin] = 	'unsigned long starttime_dust_'+dropdown_pin+';\n'+
																		'float ratio_dust_'+dropdown_pin+' = 0;\n'+
																		'unsigned long lowpulseoccupancy_dust_'+dropdown_pin+' = 0;\n'
																		;
  // Blockly.Arduino.definitions_['var_custom_read'+dropdown_pin] = 'Servo servo_'+dropdown_pin+';\n';
   Blockly.Arduino.setups_['setup_custom_dht11setup'+dropdown_pin] = 'pinMode('+dropdown_pin+',INPUT); //Pin of the dust sensor\n'
   ;
  
  // Blockly.Arduino.definitions_['define_custom_read'] = '#include &lt;Servo.h&gt;\n';
    Blockly.Arduino.definitions_['define_custom_dust_fonction'+dropdown_pin] =  'unsigned long get_concentration_dust_'+dropdown_pin+'(int pin){\n'+
																				'unsigned long duration;\n'+
																				'float concentration = 0;\n'+
																				'duration = pulseIn(pin, LOW);\n'+
																				'lowpulseoccupancy_dust_'+dropdown_pin+'= lowpulseoccupancy_dust_'+dropdown_pin+'+duration;\n'+
																				'if ((millis()-starttime_dust_'+dropdown_pin+') > 30000) //if the sampel time == 30s\n'+
																				'	{\n'+
																				'	ratio_dust_'+dropdown_pin+' = lowpulseoccupancy_dust_'+dropdown_pin+'/(30000*10.0); // Integer percentage 0=>100\n'+
																				'	lowpulseoccupancy_dust_'+dropdown_pin+' = 0;\n'+
																				'	starttime_dust_'+dropdown_pin+' = millis();\n'+
																				'	}\n'+
																				'concentration = 1.1*pow(ratio_dust_'+dropdown_pin+',3)-3.8*pow(ratio_dust_'+dropdown_pin+',2)+520*ratio_dust_'+dropdown_pin+'+0.62; // using spec sheet curve\n'+
																				'return concentration;\n'+
																				'}\n';
   
  // Blockly.Arduino.setups_['setup_custom_read_'+dropdown_pin] = 'servo_'+dropdown_pin+'.attach('+dropdown_pin+');\n';
  
  var code = 'get_concentration_dust_'+dropdown_pin+'('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.co2 = function() {
  var dropdown_pin = this.getTitleValue('PIN');
      Blockly.Arduino.definitions_['define_custom_software_serial'] = '#include <SoftwareSerial.h>\n'+
																		'SoftwareSerial sensor_'+dropdown_pin+'('+dropdown_pin+','+(parseInt(dropdown_pin)+parseInt("1"))+');\n'
   ;
   Blockly.Arduino.setups_['define_custom_soft_serial'+profile.default.serial] = 'sensor_'+dropdown_pin+'.begin('+profile.default.serial+');\n';
   Blockly.Arduino.definitions_['define_custom_get_gas'+dropdown_pin] = 'int get_gas_'+dropdown_pin+'(){\n'+
																		'	const unsigned char cmd_get_sensor[] = {0xff, 0x01, 0x86, 0x00, 0x00, 0x00, 0x00, 0x00, 0x79};\n'+
																		'	for(int i=0; i<sizeof(cmd_get_sensor); i++){\n'+
																		'		sensor_'+dropdown_pin+'.write(cmd_get_sensor[i]);\n'+
																		'	}\n'+
																		'	long cnt_timeout = 0;\n'+
																		'	while(!sensor_'+dropdown_pin+'.available()){              // wait for data\n'+
																		'		delay(2);\n'+
																		'		cnt_timeout++;\n'+
																		'		if(cnt_timeout>1000);       // time out\n'+
																		'	}\n'+
																		'	int len = 0;\n'+
																		'	unsigned char dta[20];\n'+   
																		'	while(sensor_'+dropdown_pin+'.available()){\n'+
																		'		dta[len++] = sensor_'+dropdown_pin+'.read();\n'+
																		'	}    \n'+
																		'	if((9 == len) && (0xff == dta[0]) && (0x86 == dta[1])){    // data ok\n'+
																		'		return(256*dta[2]+dta[3]);\n'+
																		'	} \n'+
																		'}\n\n';
   var code = 'get_gas_'+dropdown_pin+'()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.afficheur = function() {
      var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0'
      var txt = Blockly.Arduino.valueToCode(this, 'VAR', Blockly.Arduino.ORDER_ATOMIC) || '0'
      var units = Blockly.Arduino.valueToCode(this, 'UNITS', Blockly.Arduino.ORDER_ATOMIC) || '0'
  //content = content.replace('(','').replace(')','');
   
  Blockly.Arduino.setups_['setup_serial_'+profile.default.serial] = 'Serial.begin('+profile.default.serial+');\n';
  Blockly.Arduino.loopconst_['finenvoi'] =  'Serial.println();\n';
  Blockly.Arduino.loopconstinit_['initenvoi'] =  'Serial.print("H/");\n';
  var code =  
			  'Serial.print('+txt+');\n'+
			  'Serial.print("/");\n'+
			  'Serial.print('+content+');\n'+
			  'Serial.print("/");\n'+
			  'Serial.print('+units+');\n'+
			  'Serial.print("/");\n'		
			  ; // H/temperature/humidité/pression/LF
  return code;
};


Blockly.Arduino.forwardbot = function() {
  var dropdown_pin = this.getTitleValue('PIN');
   Blockly.Arduino.definitions_['define_custom_read'] = '#include <Servo.h>;\n'+
														'Servo frontServo;\n'+
														'Servo rearServo;\n'+
														'\n// time delay between steps\n'+
                                                        '	int walkSpeed = 500;\n'+
                                                        '// center servos\n'+
														'	int centerPos = 90;\n'+
														'// servo angles for walking pattern\n'+
														'	int frontRightUp = 70;\n'+
														'	int frontLeftUp = 110;\n'+
														'	int backRightForward = 70;\n'+
														'	int backLeftForward = 110;\n'+
														'// another center position\n'+
														'	int centerTurnPos = 81;\n'+
														'// servo angles for walking pattern\n'+
														'	int frontTurnRightUp = 70;\n'+
														'	int frontTurnLeftUp = 110;\n'+
														'	int backTurnRightForward = 70;\n'+
														'	int backTurnLeftForward = 110;\n'+
														'// variable for distance value\n'+
														'//	int distance = 0;\n'+
														'// average distance value\n'+
														'	int distanceCheck = 0;\n'+
														'// Array for distance values\n'+
														'	int collectDistance[5];\n'+
														'// Variables for counters\n'+
														'	int i;\n'+
														'	int f;\n'+
														'	int r;\n'+
														'// assign analog pin A1\n'+
														'	int sensorPin = A1;\n'+
														'// distance value for danger close. Bigger values are greater distance and smaller values are lower distance\n'+
														'	int dangerDistance = 350; \n'
														;
  // Blockly.Arduino.definitions_['var_custom_read'+dropdown_pin] = 'Servo servo_'+dropdown_pin+';\n';
   Blockly.Arduino.setups_['setup_custom_read_4'] = 
														'	// attach servos\n'+
														'		frontServo.attach(9);\n'+
														'		rearServo.attach(10);\n'+
														'	// assign sensor\n'+
														'		pinMode(sensorPin, INPUT);\n'+
														'	// center servos\n'+
														'		frontServo.write(centerPos);\n'+
														'		rearServo.write(centerPos);\n'+
														'	// wait 3 seconds for start walking\n'+
														'		delay(3000);\n'+
														'	//Serial.begin(9600); // serial data setup'
   ;
  
  // Blockly.Arduino.definitions_['define_custom_read'] = '#include &lt;Servo.h&gt;\n';
   Blockly.Arduino.definitions_['define_custom_read_2'] = 	
																	'void moveForward()\n'+
																	'{\n'+ 
																	'	// loop for the servo angels to smoothen the steps\n'+
																	'	for (f = 0; f < 39; f++){\n'+
																	'		frontRightUp++;\n'+
																	'		backLeftForward--;\n'+
																	'		frontServo.write(frontRightUp);\n'+
																	'		rearServo.write(backLeftForward);\n'+
																	'		delay(10);\n'+
																	'	}\n'+
																	'	// loop for the servo angels to smoothen the steps\n'+
																	'	for (r = 0; r < 39; r++){\n'+
																	'		frontRightUp--;\n'+
																	'		backLeftForward++;\n'+
																	'		frontServo.write(frontRightUp);\n'+
																	'		rearServo.write(backLeftForward);\n'+
																	'		delay(10);\n'+
																	'	}\n'+
																	'}\n'
   
   
   ;
  // Blockly.Arduino.setups_['setup_custom_read_'+dropdown_pin] = 'servo_'+dropdown_pin+'.attach('+dropdown_pin+');\n';
  
  var code = 'moveForward();\n';
  return code;
};

Blockly.Arduino.moveBackRight = function() {
  var dropdown_pin = this.getTitleValue('PIN');
   Blockly.Arduino.definitions_['define_custom_read'] = '#include <Servo.h>;\n'+
														'Servo frontServo;\n'+
														'Servo rearServo;\n'+
														'\n// time delay between steps\n'+
                                                        '	int walkSpeed = 500;\n'+
                                                        '// center servos\n'+
														'	int centerPos = 90;\n'+
														'// servo angles for walking pattern\n'+
														'	int frontRightUp = 70;\n'+
														'	int frontLeftUp = 110;\n'+
														'	int backRightForward = 70;\n'+
														'	int backLeftForward = 110;\n'+
														'// another center position\n'+
														'	int centerTurnPos = 81;\n'+
														'// servo angles for walking pattern\n'+
														'	int frontTurnRightUp = 70;\n'+
														'	int frontTurnLeftUp = 110;\n'+
														'	int backTurnRightForward = 70;\n'+
														'	int backTurnLeftForward = 110;\n'+
														'// variable for distance value\n'+
														'//	int distance = 0;\n'+
														'// average distance value\n'+
														'	int distanceCheck = 0;\n'+
														'// Array for distance values\n'+
														'	int collectDistance[5];\n'+
														'// Variables for counters\n'+
														'	int i;\n'+
														'	int f;\n'+
														'	int r;\n'+
														'// assign analog pin A1\n'+
														'	int sensorPin = A1;\n'+
														'// distance value for danger close. Bigger values are greater distance and smaller values are lower distance\n'+
														'	int dangerDistance = 350; \n'
														;
  // Blockly.Arduino.definitions_['var_custom_read'+dropdown_pin] = 'Servo servo_'+dropdown_pin+';\n';
   Blockly.Arduino.setups_['setup_custom_read_4'] = 
														'	// attach servos\n'+
														'		frontServo.attach(9);\n'+
														'		rearServo.attach(10);\n'+
														'	// assign sensor\n'+
														'		pinMode(sensorPin, INPUT);\n'+
														'	// center servos\n'+
														'		frontServo.write(centerPos);\n'+
														'		rearServo.write(centerPos);\n'+
														'	// wait 3 seconds for start walking\n'+
														'		delay(3000);\n'+
														'	//Serial.begin(9600); // serial data setup'
   ;
  
  // Blockly.Arduino.definitions_['define_custom_read'] = '#include &lt;Servo.h&gt;\n';
   Blockly.Arduino.definitions_['define_custom_read_6'] = 	
															'void moveBackRight()\n'+
															'{\n'+
															'	frontServo.write(frontRightUp);\n'+
															'	rearServo.write(backRightForward-6);\n'+
															'	delay(110);\n'+
															'	frontServo.write(centerPos);\n'+
															'	rearServo.write(centerPos-6);\n'+
															'	delay(80);\n'+
															'	frontServo.write(frontLeftUp+9);\n'+
															'	rearServo.write(backLeftForward-6);\n'+
															'	delay(110);\n'+
															'	frontServo.write(centerPos);\n'+
															'	rearServo.write(centerPos);\n'+
															'	delay(80);\n'+
															'}\n'
   ;
  // Blockly.Arduino.setups_['setup_custom_read_'+dropdown_pin] = 'servo_'+dropdown_pin+'.attach('+dropdown_pin+');\n';
  
  var code = 'moveBackRight();\n';
  return code;
};

Blockly.Arduino.moveTurnLeft = function() {
  var dropdown_pin = this.getTitleValue('PIN');
   Blockly.Arduino.definitions_['define_custom_read'] = '#include <Servo.h>;\n'+
														'Servo frontServo;\n'+
														'Servo rearServo;\n'+
														'\n// time delay between steps\n'+
                                                        '	int walkSpeed = 500;\n'+
                                                        '// center servos\n'+
														'	int centerPos = 90;\n'+
														'// servo angles for walking pattern\n'+
														'	int frontRightUp = 70;\n'+
														'	int frontLeftUp = 110;\n'+
														'	int backRightForward = 70;\n'+
														'	int backLeftForward = 110;\n'+
														'// another center position\n'+
														'	int centerTurnPos = 81;\n'+
														'// servo angles for walking pattern\n'+
														'	int frontTurnRightUp = 70;\n'+
														'	int frontTurnLeftUp = 110;\n'+
														'	int backTurnRightForward = 70;\n'+
														'	int backTurnLeftForward = 110;\n'+
														'// variable for distance value\n'+
														'//	int distance = 0;\n'+
														'// average distance value\n'+
														'	int distanceCheck = 0;\n'+
														'// Array for distance values\n'+
														'	int collectDistance[5];\n'+
														'// Variables for counters\n'+
														'	int i;\n'+
														'	int f;\n'+
														'	int r;\n'+
														'// assign analog pin A1\n'+
														'	int sensorPin = A1;\n'+
														'// distance value for danger close. Bigger values are greater distance and smaller values are lower distance\n'+
														'	int dangerDistance = 350; \n'
														;
  // Blockly.Arduino.definitions_['var_custom_read'+dropdown_pin] = 'Servo servo_'+dropdown_pin+';\n';
   Blockly.Arduino.setups_['setup_custom_read_4'] = 
														'	// attach servos\n'+
														'		frontServo.attach(9);\n'+
														'		rearServo.attach(10);\n'+
														'	// assign sensor\n'+
														'		pinMode(sensorPin, INPUT);\n'+
														'	// center servos\n'+
														'		frontServo.write(centerPos);\n'+
														'		rearServo.write(centerPos);\n'+
														'	// wait 3 seconds for start walking\n'+
														'		delay(3000);\n'+
														'	//Serial.begin(9600); // serial data setup'
   ;
  
  // Blockly.Arduino.definitions_['define_custom_read'] = '#include &lt;Servo.h&gt;\n';
   Blockly.Arduino.definitions_['define_custom_read_7'] =	'void moveTurnLeft()\n'+
															'{\n'+
															'	frontServo.write(frontTurnRightUp);\n'+
															'	rearServo.write(backTurnLeftForward);\n'+
															'	delay(110);\n'+
															'	frontServo.write(centerTurnPos);\n'+
															'	rearServo.write(centerTurnPos);\n'+
															'	delay(80);\n'+
															'	frontServo.write(frontTurnLeftUp);\n'+
															'	rearServo.write(backTurnRightForward);\n'+
															'	delay(110);\n'+
															'	frontServo.write(centerTurnPos);\n'+
															'	rearServo.write(centerTurnPos);\n'+
															'	delay(80);\n'+
															'}\n'
   ;
  // Blockly.Arduino.setups_['setup_custom_read_'+dropdown_pin] = 'servo_'+dropdown_pin+'.attach('+dropdown_pin+');\n';
  
  var code = 'moveTurnLeft();\n';
  return code;
};

Blockly.Arduino.blinkybot = function() {
  var dropdown_pin = this.getTitleValue('PIN');
   Blockly.Arduino.definitions_['define_custom_read'] = '#include <Servo.h>;\n'+
														'Servo frontServo;\n'+
														'Servo rearServo;\n'+
														'\n// time delay between steps\n'+
                                                        '	int walkSpeed = 500;\n'+
                                                        '// center servos\n'+
														'	int centerPos = 90;\n'+
														'// servo angles for walking pattern\n'+
														'	int frontRightUp = 70;\n'+
														'	int frontLeftUp = 110;\n'+
														'	int backRightForward = 70;\n'+
														'	int backLeftForward = 110;\n'+
														'// another center position\n'+
														'	int centerTurnPos = 81;\n'+
														'// servo angles for walking pattern\n'+
														'	int frontTurnRightUp = 70;\n'+
														'	int frontTurnLeftUp = 110;\n'+
														'	int backTurnRightForward = 70;\n'+
														'	int backTurnLeftForward = 110;\n'+
														'// variable for distance value\n'+
														'//	int distance = 0;\n'+
														'// average distance value\n'+
														'	int distanceCheck = 0;\n'+
														'// Array for distance values\n'+
														'	int collectDistance[5];\n'+
														'// Variables for counters\n'+
														'	int i;\n'+
														'	int f;\n'+
														'	int r;\n'+
														'// assign analog pin A1\n'+
														'	int sensorPin = A1;\n'+
														'// distance value for danger close. Bigger values are greater distance and smaller values are lower distance\n'+
														'	int dangerDistance = 350; \n'
														;
  // Blockly.Arduino.definitions_['var_custom_read'+dropdown_pin] = 'Servo servo_'+dropdown_pin+';\n';
   Blockly.Arduino.setups_['setup_custom_read_4'] = 
														'	// attach servos\n'+
														'		frontServo.attach(9);\n'+
														'		rearServo.attach(10);\n'+
														'	// assign sensor\n'+
														'		pinMode(sensorPin, INPUT);\n'+
														'	// center servos\n'+
														'		frontServo.write(centerPos);\n'+
														'		rearServo.write(centerPos);\n'+
														'	// wait 3 seconds for start walking\n'+
														'		delay(3000);\n'+
														'	//Serial.begin(9600); // serial data setup'
   ;
  
  // Blockly.Arduino.definitions_['define_custom_read'] = '#include &lt;Servo.h&gt;\n';
   Blockly.Arduino.definitions_['define_custom_read_8'] =	
															'void blinkybot(){\n'+
															'// loop for the LED to blink it 5 times for 0.05 sec on and 0.1 sec off\n'+
															'	for(int l=0; l<=5; l++) {\n'+
															'		digitalWrite(13, HIGH);\n'+
															'		delay(50);\n'+
															'		digitalWrite(13, LOW);\n'+
															'		delay(100);\n'+
															'	} \n'+
															'}\n'
   ;
  // Blockly.Arduino.setups_['setup_custom_read_'+dropdown_pin] = 'servo_'+dropdown_pin+'.attach('+dropdown_pin+');\n';
  
  var code = 'blinkybot();\n';
  return code;
};

Blockly.Arduino.custom_read = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  
  // Blockly.Arduino.definitions_['define_custom_read'] = '#include &lt;Servo.h&gt;\n';
  // Blockly.Arduino.definitions_['var_custom_read'+dropdown_pin] = 'Servo servo_'+dropdown_pin+';\n';
  // Blockly.Arduino.setups_['setup_custom_read_'+dropdown_pin] = 'servo_'+dropdown_pin+'.attach('+dropdown_pin+');\n';
  
  var code = 'analogRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
