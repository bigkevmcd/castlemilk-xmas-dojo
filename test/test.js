/*!
 * xmasdojo <https://github.com/bigkevmcd/castlemilk-xmas-dojo>
 *
 * Copyright (c) 2016 Kevin McDermott.
 * Licensed under the MIT License.
 */
var assert = require('assert');
var xmasdojo = require('xmasdojo');

var fourCorners = [
  ['red', null, null, null, null, null, null, '#00ff00'],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  ['0,0,255', null, null, null, null, null, null, 'yellow'],
];

describe('#gridToCommand()', function() {
  it('should calculate the string to send to draw the provided array', function() {
    assert.equal('0,0,red,0,7,#00ff00,7,0,0,0,255,7,7,yellow', xmasdojo.gridToCommand(fourCorners));
  });

  it('should set the brightness if provided as an option', function() {
    assert.equal('D0\n0,0,red,0,7,#00ff00,7,0,0,0,255,7,7,yellow', xmasdojo.gridToCommand(fourCorners, {brightness: 0}));
  });

  it('should flip the screen if provided as an option', function() {
    assert.equal('RH\n0,0,red,0,7,#00ff00,7,0,0,0,255,7,7,yellow', xmasdojo.gridToCommand(fourCorners, {flip: 'horizontal'}));
    assert.equal('RV\n0,0,red,0,7,#00ff00,7,0,0,0,255,7,7,yellow', xmasdojo.gridToCommand(fourCorners, {flip: 'vertical'}));
  });

  it ('should ignore unrecognised flip axes', function() {
    assert.equal('0,0,red,0,7,#00ff00,7,0,0,0,255,7,7,yellow', xmasdojo.gridToCommand(fourCorners, {flip: 'testing'}));
  });

  it('should both flip and dim the display if provided', function() {
    assert.equal('D0\nRH\n0,0,red,0,7,#00ff00,7,0,0,0,255,7,7,yellow', xmasdojo.gridToCommand(fourCorners, {flip: 'horizontal', brightness: 0}));
  });

  it('should only output the specified row count', function() {
    assert.equal('0,0,red,0,7,#00ff00', xmasdojo.gridToCommand(fourCorners, {rows: 1}));
  });
});
