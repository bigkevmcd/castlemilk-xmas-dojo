var assert = require('assert');
var XmasDojo = require('xmasdojo');

var fourCorners = [
  ["red", null, null, null, null, null, null, "#00ff00"],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  ["0,0,255", null, null, null, null, null, null, "yellow"],
];

describe('XmasDojo', function() {
  var dojo = new XmasDojo();
  describe('#arrayToCommand()', function() {
    it('should calculate the string to send to draw the provided array', function() {
      assert.equal("0,0,red,0,7,#00ff00,7,0,0,0,255,7,7,yellow", dojo.arrayToCommand(fourCorners));
    });
  });
});
