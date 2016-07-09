var i2c = require('i2c');
var MASTER = 0x0f;
var wire  = new i2c(MASTER, {device: '/dev/i2c-1'}); // point to your i2c address, debug provides REPL interface

var scan = function(target, command, callback) {

  wire.scan(function(err, data) {
    // result contains an array of addresses
    if (!err) {
      console.log('COMPLETE: '+data);
      callback(data, target, command);
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
