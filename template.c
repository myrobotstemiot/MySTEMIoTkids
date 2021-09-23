#include <Wire.h>
#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>
#include "MySTEMIoTkids.h"
#include "Adafruit_MCP23X17.h"
${EXTINC}

${VARIABLE}

${FUNCTION}

void setup()
{
	MySTEMIoTkids();

	/* setup code */
${SETUP_CODE}
    /* block setup */
${BLOCKSETUP}
}

void loop()
{
  ${LOOP_CODE}
  ${LOOP_EXT_CODE}
}
