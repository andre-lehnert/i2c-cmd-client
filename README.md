# i2c-cmd-client
Raspberry Pi + Node.js + I2C + command line client

## Usage

npm install

### node i2c-cmd.js

>> SCAN
I2C RECEIVERS: 16,18,19

### node i2c-cmd.js [RECEIVER] [COMMAND]

- RECEIVER
  Use I2C RECEIVERS number (integer)

- COMMAND
  see COMMANDs

## COMMANDs

SCAN
- Get all available i2c receiver

STATUS
- Get Token ID

ANI:[ANIMATION]/[COLOR]/[BRIGHTNESS]/[SPEED]
- ANIMATION
  on (switch-on)
  off (switch-off)
  bli (blink)
  glo (glow)
  up (shift-up)
  dow (shift-down)
  mov (moving-bars)
  com (comet)
  bou (bouncing)
- COLOR
  HEX code, e.g. ff0000
- BRIGHTNESS
  0 - 100 %
- SPEED
  0 - 100 %

LIGHT:[SIDE]/[OPERATION]/[LED]/[COLOR]/[BRIGHTNESS]
- SIDE
  Side of bar: A, B, C, D
- OPERATION
  * New lighting pattern
  + Add led color
  + Remove led
- LED
  Number of LED: 1 - 11
- COLOR
  HEX code, e.g. ff0000
- BRIGHTNESS
  0 - 100 %

MOVE:[POSITION]/[STEPMODE]
- POSITION
  Bar position 0 - 100 %
- STEPMODE
  FULL
  HALF
  QUARTER
  EIGTHTH
  SIXTEENTH
