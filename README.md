# i2c-cmd-client
Raspberry Pi + Node.js + I2C + command line client

## Usage

```
$ git clone https://github.com/andre-lehnert/i2c-cmd-client.git
$ cd i2c-cmd-client/
$ npm install
```

### node i2c-cmd.js

```
$ node i2c-cmd.js
>> SCAN
I2C RECEIVERS: 16,18,19
```

### node i2c-cmd.js [RECEIVER] [COMMAND]

- RECEIVER
  Use I2C RECEIVERS number (integer)

- COMMAND
  see COMMANDs

## COMMANDs

### node i2c-cmd.js [RECEIVER] SCAN
- Get all available i2c receiver

### node i2c-cmd.js [RECEIVER] STATUS
- Get Token ID

```
$ node i2c-cmd.js 16 STATUS
>> SCAN
I2C RECEIVERS: 16,18,19
>> REQUEST
REQUEST [16]
RECEIVE [16]: 4
VALUE: 4

$ node i2c-cmd.js 18 STATUS
>> SCAN
I2C RECEIVERS: 16,18,19
>> REQUEST
REQUEST [18]
RECEIVE [18]: 0
VALUE: 0
```

### ANI:[ANIMATION]/[COLOR]/[BRIGHTNESS]/[SPEED]

#### ANIMATION
- on (switch-on)
- off (switch-off)
- bli (blink)
- glo (glow)
- up (shift-up)
- dow (shift-down)
- mov (moving-bars)
- com (comet)
- bou (bouncing)

#### COLOR
- color hex code, e.g. ff0000

#### BRIGHTNESS
- 0 - 100 %
  
#### SPEED
- 0 - 100 %

```
$ node i2c-cmd.js 19 ANI:mow/00ff00/100/100
>> SCAN
I2C RECEIVERS: 16,18,19
>> SEND
SEND COMMAND [19]: ANI:mow/00ff00/100/100
SUCCESS

$ node i2c-cmd.js 19 ANI:up/00fff0/100/70
>> SCAN
I2C RECEIVERS: 16,18,19
>> SEND
SEND COMMAND [19]: ANI:up/00fff0/100/70
SUCCESS
```

### LIGHT:[SIDE]/[OPERATION]/[LED]/[COLOR]/[BRIGHTNESS]
#### SIDE
- Side of bar: A, B, C, D
#### OPERATION
- `* New lighting pattern`
- `+ Add led color`
- `+ Remove led`
#### LED
- Number of LED: 1 - 11
#### COLOR
- HEX code, e.g. ff0000
#### BRIGHTNESS
- 0 - 100 %

```
$ node i2c-cmd.js 19 LIGHT:A/*
>> SCAN
I2C RECEIVERS: 16,18,19
>> SEND
SEND COMMAND [19]: LIGHT:A/*
SUCCESS

$ node i2c-cmd.js 19 LIGHT:A/+/1/ff0000/100
>> SCAN
I2C RECEIVERS: 16,18,19
>> SEND
SEND COMMAND [19]: LIGHT:A/+/1/ff0000/100
SUCCESS

$ node i2c-cmd.js 19 LIGHT:A/+/2/ffff00/80
>> SCAN
I2C RECEIVERS: 16,18,19
>> SEND
SEND COMMAND [19]: LIGHT:A/+/2/ffff00/80
SUCCESS

$ node i2c-cmd.js 19 LIGHT:A/-/1
>> SCAN
I2C RECEIVERS: 16,18,19
>> SEND
SEND COMMAND [19]: LIGHT:A/-/1
SUCCESS
```

### MOVE:[POSITION]/[STEPMODE]
- POSITION
  Bar position 0 - 100 %
- STEPMODE
  - full
  - half
  - quarter
  - eigthth
  - sixteenth

```
$  node i2c-cmd.js 18 MOVE:75/half
>> SCAN
I2C RECEIVERS: 16,18,19
>> SEND
SEND COMMAND [18]: MOVE:75/half
SUCCESS

$ node i2c-cmd.js 18 MOVE:0/quarter
>> SCAN
I2C RECEIVERS: 16,18,19
>> SEND
SEND COMMAND [18]: MOVE:0/quarter
SUCCESS

$ node i2c-cmd.js 18 MOVE:100/full
>> SCAN
I2C RECEIVERS: 16,18,19
>> SEND
SEND COMMAND [18]: MOVE:100/full
SUCCESS
```
