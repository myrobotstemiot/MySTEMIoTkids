
//Block from IKB1 

module.exports = function(Blockly){
  'use strict';
var motor_colour=Blockly.Msg.MUSIC_HUE ;
Blockly.Blocks['MySTEMIoTkids_servo'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Servo")
      .appendField(new Blockly.FieldDropdown([["A0 (D32)","0"],["A1 (D33)","1"], ["A2 (D25)","2"], ["A3 (D26)","3"], ["A4 (D27)","4"], ["A5 (D12)","5"], ["A6 (D13)","6"], ["A7 (D2)","7"]]), "ch");
    this.appendValueInput("angle")
      .setCheck("Number")
      .appendField("degree");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
    this.setTooltip("Select servo to control.");
  }
};

Blockly.Blocks['MySTEMIoTkids_servo2'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Servo360")
      .appendField(new Blockly.FieldDropdown([["A0 (D32)","0"],["A1 (D33)","1"], ["A2 (D25)","2"], ["A3 (D26)","3"], ["A4 (D27)","4"], ["A5 (D12)","5"], ["A6 (D13)","6"], ["A7 (D2)","7"]]), "ch")
      .appendField("direction")
      .appendField(new Blockly.FieldDropdown([["Forward","1"], ["Backward", "2"]]), "dir");
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("speed");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
    this.setTooltip("Select servo to control.");
  }
};

  Blockly.Blocks['LED_MySTEMIoTkids'] = {
    init: function() {
      this.appendDummyInput()
        .appendField("LED")
        .appendField(new Blockly.FieldDropdown([
                                              ["A0 (D32)", "32"],
                                              ["A1 (D33)", "33"],
                                              ["A2 (D25)", "25"],
                                              ["A3 (D26)", "26"],
                                              ["A4 (D27)", "27"],
                                              ["A5 (D12)", "12"],
                                              ["A6 (D13)", "13"],
                                              ["A7 (D2)", "2"]]), "pin");
      this.appendValueInput("status")
        .setCheck("Number")
        .appendField("status");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(270);
      this.setTooltip("");
    }
  };

  Blockly.Blocks['Buzzers_MySTEMIoTkids'] = {
    init: function() {
      this.appendDummyInput()
        .appendField("Buzzer")
        .appendField(new Blockly.FieldDropdown([
                                              ["A0 (D32)", "32"],
                                              ["A1 (D33)", "33"],
                                              ["A2 (D25)", "25"],
                                              ["A3 (D26)", "26"],
                                              ["A4 (D27)", "27"],
                                              ["A5 (D12)", "12"],
                                              ["A6 (D13)", "13"],
                                              ["A7 (D2)", "2"]]), "pin");
      this.appendValueInput("status")
        .setCheck("Number")
        .appendField("status");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(270);
      this.setTooltip("");
    }
  };

 Blockly.Blocks['Laser_MySTEMIoTkids'] = {
    init: function() {
      this.appendDummyInput()
        .appendField("Laser")
        .appendField(new Blockly.FieldDropdown([
                                              ["A0 (D32)", "32"],
                                              ["A1 (D33)", "33"],
                                              ["A2 (D25)", "25"],
                                              ["A3 (D26)", "26"],
                                              ["A4 (D27)", "27"],
                                              ["A5 (D12)", "12"],
                                              ["A6 (D13)", "13"],
                                              ["A7 (D2)", "2"]]), "pin");
      this.appendValueInput("status")
        .setCheck("Number")
        .appendField("status");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(270);
      this.setTooltip("");
    }

  };
   Blockly.Blocks['RGB6_MySTEMIoTkids'] = {
    init: function() {
      this.appendDummyInput()
        .appendField("RGB [A6] status  Red:")
        .appendField(new Blockly.FieldDropdown([["ON","1"], ["OFF","0"]]), "r_status")
        .appendField("Green:")
        .appendField(new Blockly.FieldDropdown([["ON","1"], ["OFF","0"]]), "g_status")
        .appendField("Blue:")
        .appendField(new Blockly.FieldDropdown([["ON","1"], ["OFF","0"]]), "b_status")
	  this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(270);
      this.setTooltip("");
    }
  };

   Blockly.Blocks['RGB7_MySTEMIoTkids'] = {
    init: function() {
      this.appendDummyInput()
        .appendField("RGB [A7] status  Red:")
        .appendField(new Blockly.FieldDropdown([["ON","1"], ["OFF","0"]]), "rr_status")
        .appendField("Green:")
        .appendField(new Blockly.FieldDropdown([["ON","1"], ["OFF","0"]]), "gg_status")
        .appendField("Blue:")
        .appendField(new Blockly.FieldDropdown([["ON","1"], ["OFF","0"]]), "bb_status")
	  this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(270);
      this.setTooltip("");
    }
  };

  Blockly.Blocks['Output_MySTEMIoTkids'] = {
    init: function() {
      this.appendDummyInput()
        .appendField("Output CH")
        .appendField(new Blockly.FieldDropdown([
                                              ["Relay_1", "0"],
                                              ["Relay_2", "1"],
                                              ["RelayDC_3", "2"],
                                              ["RelayDC_4", "3"],
                                              ["USB_1", "4"],
                                              ["USB_2", "5"],
                                              ["USB_3", "6"],
                                              ["USB_4", "7"]]), "pin");
      this.appendValueInput("status")
        .setCheck("Number")
        .appendField("status");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(270);
      this.setTooltip("");
    }
  };

}