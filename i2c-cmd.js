var i2c = require('./i2c-communication');

// --- Init ---

// Get cmd line arguments
// 0 : I2C Receiver
// 1 : I2C Command
var args = process.argv.slice(2);

args.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});

// --- Functions ---

var execute = function(target, command) {
  console.log('>> SCAN');
  scan(target, command, handleArguments);
};

var handleArguments = function(receivers, target, command) {

  if (receivers.length === 0) {

    console.log('NO I2C RECEIVER FOUND');

  } else {

    receivers.forEach(function(val, index, array) {

      if (target === val) {

        if (command === 'STATUS') {

          console.log('>> REQUEST');
          request(target);

        } else {
          
          console.log('>> SEND');
          send(target, command);

        }

      } else {
        console.log('TARGET RECEIVER NOT FOUND');
      }

    });
  }
};



// --- Execute ---

execute(args[0], args[1]);
