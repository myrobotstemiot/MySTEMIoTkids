
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
   Blockly.Blocks['RGB3_MySTEMIoTkids'] = {
    init: function() {
      this.appendDummyInput()
        .appendField("RGB [A3] status  Red:")
        .appendField(new Blockly.FieldDropdown([["OFF","0"], ["ON","1"]]), "r_status")
        .appendField("Green:")
        .appendField(new Blockly.FieldDropdown([["OFF","0"], ["ON","1"]]), "g_status")
        .appendField("Blue:")
        .appendField(new Blockly.FieldDropdown([["OFF","0"], ["ON","1"]]), "b_status")
	  this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(270);
      this.setTooltip("");
    }
  };

   Blockly.Blocks['RGB4_MySTEMIoTkids'] = {
    init: function() {
      this.appendDummyInput()
        .appendField("RGB [A4] status  Red:")
        .appendField(new Blockly.FieldDropdown([["OFF","0"], ["ON","1"]]), "rr_status")
        .appendField("Green:")
        .appendField(new Blockly.FieldDropdown([["OFF","0"], ["ON","1"]]), "gg_status")
        .appendField("Blue:")
        .appendField(new Blockly.FieldDropdown([["OFF","0"], ["ON","1"]]), "bb_status")
	  this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(270);
      this.setTooltip("");
    }
  };

   Blockly.Blocks['RGB5_MySTEMIoTkids'] = {
    init: function() {
      this.appendDummyInput()
        .appendField("RGB [A5] status  Red:")
        .appendField(new Blockly.FieldDropdown([["OFF","0"], ["ON","1"]]), "rrr_status")
        .appendField("Green:")
        .appendField(new Blockly.FieldDropdown([["OFF","0"], ["ON","1"]]), "ggg_status")
        .appendField("Blue:")
        .appendField(new Blockly.FieldDropdown([["OFF","0"], ["ON","1"]]), "bbb_status")
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
                                              ["Relay1_12VDC", "0"],
                                              ["Relay2_12VDC", "1"],
                                              ["Relay3_12VDC", "2"],
                                              ["Relay4_12VDC", "3"],
                                              ["USB1_5VDC", "8"],
                                              ["USB2_5VDC", "9"],
                                              ["USB3_5VDC", "10"],
                                              ["USB4_5VDC", "11"]]), "pin");
       this.appendDummyInput()
        .appendField("status")
        .appendField(new Blockly.FieldDropdown([["OFF","0"], ["ON","1"]]), "status");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(270);
      this.setTooltip("");
    }
  };

}
