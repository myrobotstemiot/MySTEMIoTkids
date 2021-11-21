let display = require("./menu/config.group.display");
let gpio = require("./menu/config.group.gpio");

const dirIcon = Vue.prototype.$global.board.board_info.dir;

module.exports = {
  //language=HTML format=false
  blocks: [
    display,
    {
      override : true,
      name: "MyOutput",
      index: 4,
      color: "260",
      icon: `file:///${dirIcon}/static/icons/robot.png`,
      blocks: [
		{
          xml: `<sep gap="32"></sep><label text="MySTEMIoTkids Output" web-class="headline"></label>`
        },


          {
              xml:
                  `<block type="MySTEMIoTkids_servo">
                        <value name="ch">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                        <value name="angle">
                            <shadow type="math_number">
                                <field name="NUM">90</field>
                            </shadow>
                        </value>
                    </block>`
          },

          {
              xml:
                  `<block type="MySTEMIoTkids_servo2">
                        <value name="ch">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                        <value name="dir">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
          },
       
		    {
			 xml:
				  `<block type="LED_MySTEMIoTkids">
                        <value name="status">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                    </block>`
		 },

		 {
			 xml:
				  `<block type="Buzzers_MySTEMIoTkids">
                        <value name="status">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                    </block>`
		 },

		 {
			 xml:
				  `<block type="Laser_MySTEMIoTkids">
                        <value name="status">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                    </block>`
		 },

		 {
			 xml:
				  `<block type="RGB3_MySTEMIoTkids">
                        <value name="status">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                    </block>`
		 },

		 {
			 xml:
				  `<block type="RGB4_MySTEMIoTkids">
                        <value name="status">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                    </block>`
		 },

		 {
			 xml:
				  `<block type="RGB5_MySTEMIoTkids">
                        <value name="status">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                    </block>`
		 },


		 {
			 xml:
				  `<block type="Output_MySTEMIoTkids">
                        <value name="status">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                    </block>`
		 },

      ]
  },
	{
      override : true,
      name: "MyTime",
      index: 5,
      color: "230",
      icon: "/static/icons/icons8_Story_Time_96px.png",
      blocks: [

		{
          xml: `<sep gap="32"></sep><label text="Platform Blocks" web-class="headline"></label>`
        },
 
		{
              xml:
                  `<block type="time_delay">
                        <value name="delay">
                            <shadow type="math_number">
                                <field name="NUM">1000</field>
                            </shadow>
                        </value>
                    </block>`
          },
          {
              xml:
                  `<block type="time_delay_microsec">
                        <value name="delay">
                            <shadow type="math_number">
                                <field name="NUM">1000</field>
                            </shadow>
                        </value>
                    </block>`
          },
      ]
  },

    {
      override : true,
      name: " MySensor",
      index: 3,
      color: "230",
      icon: "/static/icons/icons8_thermometer_96px.png",
      blocks: [
		{
          xml: `<sep gap="32"></sep><label text="MySTEMIoTkids Sensor" web-class="headline"></label>`
        },

          'Light sensor',
          'TCS_read_rgb',
          'Switch sensor',
          'LDR sensor',
          'Distance sensor',
          'Soil moisture sensor',
          'dhtesp_setup_MySTEMIoTkids',
          'dhtesp_read_temp_MySTEMIoTkids',
          'dhtesp_read_humid_MySTEMIoTkids',
          'Ultrasonic sensor',
          'ds18b20_init_MySTEMIoTkids',
          {
                xml:
                   `<block type="ds18b20_get_temperature_MySTEMIoTkids">
                        <value name="device">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                    </block>`
          },
          'IRremote_sensor',
	      {
                xml:
                   `<block type="ds3231_rtc_get_temp">
                        <value name="device">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                    </block>`
          },
	
      ]
  },
  gpio,
  ],
};
