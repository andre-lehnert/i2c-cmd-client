var i2c = require('i2c');
var MASTER = 0x0f;
var wire  = new i2c(MASTER, {device: '/dev/i2c-1'}); // point to your i2c address, debug provides REPL interface 







// --- Functions ---

var log = function(data) {
  console.log(data);
};

var scan = function(callback) {

wire.scan(function(err, data) {
  // result contains an array of addresses
  if (!err) {
    console.log('SUCCESS: '+data);
    callback(data);
  } else {
    console.log('ERROR: '+err);
  } 
});

};

var send = function(address, message) {

    console.log("Send to "+address+": "+message);

    wire.setAddress(address);
    var bytes = [];

    for (var i = 0; i < message.length; ++i) {
      bytes.push(message.charCodeAt(i));
    }

    wire.writeBytes(0, bytes, function(err) {

      if (err != null) {
        console.log(err)
      } else {
        console.log("Send to "+address+": "+message);
      }
    });
};

var request = function(address) {

    console.log("Request "+address);

    wire.setAddress(address);

    wire.readByte(function(err, res) {
      if (err != null) {
        console.log(err)
      } else {
        console.log("Receive "+address+": "+res);
      }
    });
};


// --- Execute ---

var args = process.argv.slice(2);

// print process.argv
args.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});

console.log('>> SCAN');
scan(log);

//console.log('>> SEND');
//send(19, 'ANI:glo/ff0000/100/50');

console.log('>> REQUEST');
request(16);

