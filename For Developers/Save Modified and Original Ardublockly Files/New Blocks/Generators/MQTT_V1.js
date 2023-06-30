/**
 * MQTT GENERATOR!
 *
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino code generator for the Stepper library blocks.
 *     The Arduino Stepper library docs: http://arduino.cc/en/Reference/Stepper
 */
'use strict';

goog.provide('Blockly.Arduino.wifi');

goog.require('Blockly.Arduino');


/**
 * Code generator for the stepper generator configuration. Nothing is added
 * to the 'loop()' function. Sets the pins (X and Y), steps per revolution (Z),
 * speed(A) and instance name (B).
 * Arduino code: #include <Stepper.h>
 *               Stepper B(Z, X, Y);
 *               setup() { B.setSpeed(A); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Empty string as no code goes into 'loop()'.
 */

/*Blockly.JavaScript['connect_to_wlan'] = function(block) {
	var ssid = block.getFieldValue('SSID');
	var key = block.getFieldValue('Key');
	// TODO: Assemble JavaScript into code variable.
	
	// Communication to Serial Monitor that WiFi will be connected to specified SSID
	var setupCode_Comm_Prep = "Serial.print('\n\nConnecting to "+ ssid + "\n');";
	// Connect WiFi now
	var setupCode_Connect = "WiFi.begin("+ssid+", "+key+");";
	// Wait till WiFi is connected
	var setupCode_WaitForConnection = "while (WiFi.status() != WL_CONNECTED) {" + "\n"
	setupCode_WaitForConnection += "delay(500);" + "\n"
	setupCode_WaitForConnection += "Serial.print('.');" + " \n }";
	// Communication to Serial Monitor that WiFi connection is established
	var setupCode_Comm_Est = "Serial.print('\nWiFi connected\nIP address: " + WiFi.localIP() + "');";
    }
	  
	//Place the Code into the correct blocks
	Blockly.Arduino.addInclude('wifi', '#include <WiFi.h>');
	Blockly.Arduino.addSetup("wifi_Comm_Prep", setupCode_Comm_Prep, true);
	Blockly.Arduino.addSetup("wifi_Connect", setupCode_Connect, true);
	Blockly.Arduino.addSetup("wifi_WaitForConnection", setupCode_WaitForConnection, true);
	Blockly.Arduino.addSetup("wifi_Comm_Est", setupCode_Comm_Est, true);
	return '';
};*/

Blockly.JavaScript['mqtt_subscribe'] = function(block) {
  var value_mqtt_server = Blockly.JavaScript.valueToCode(block, 'MQTT_server', Blockly.JavaScript.ORDER_ATOMIC);
  var value_mqtt_port = Blockly.JavaScript.valueToCode(block, 'MQTT_port', Blockly.JavaScript.ORDER_ATOMIC);
  var variable_mqtt_topic = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('MQTT_topic'), Blockly.Variables.NAME_TYPE);
  var value_mqtt_topic = Blockly.JavaScript.valueToCode(block, 'MQTT_topic', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['mqtt_publish'] = function(block) {
  var variable_mqtt_topic = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('MQTT_topic'), Blockly.Variables.NAME_TYPE);
  var value_mqtt_topic = Blockly.JavaScript.valueToCode(block, 'MQTT_topic', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_messages_to_publish = Blockly.JavaScript.statementToCode(block, 'Messages_to_Publish');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};