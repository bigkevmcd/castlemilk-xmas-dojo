/*!
 * xmasdojo <https://github.com/bigkevmcd/castlemilk-xmas-dojo>
 *
 * Copyright (c) 2016 Kevin McDermott.
 * Licensed under the MIT License.
 */
'use strict';

module.exports.gridToSenseLEDs = function(array, opts) {
  var opts = opts || {};
  var grid = [].concat.apply([], array.filter(function(row, index) {
    if (opts.hasOwnProperty('rows')) {
      return index <= opts.rows;
    }
    return true;
  }).map(lineToCommand));
  return (optsToSenseLEDCommands(opts) + grid.join()).trim();
};

module.exports.gridToUnicornLEDs = function(array, opts) {
  var opts = opts || {};
  var grid = [].concat.apply([], array.filter(function(row, index) {
    if (opts.hasOwnProperty('rows')) {
      return index <= opts.rows;
    }
    return true;
  }).map(lineToCommand));
  return (optsToUnicornLEDCommands(opts) + grid.join()).trim();
};

var optsToSenseLEDCommands = function(opts) {
  var commands = [];
  if (opts.hasOwnProperty('brightness')) {
    commands.push('D' + opts.brightness);
  }
  if (opts.hasOwnProperty('flip')) {
    if (opts.flip == 'horizontal') {
      commands.push('RH');
    }
    if (opts.flip == 'vertical') {
      commands.push('RV');
    }
  }
  if (opts.hasOwnProperty('rotate')) {
    commands.push('R'+opts.rotate);
  }
  return commands.join('\n') + '\n';
};

var lineToCommand = function(items, y) {
  return items.reduce(function(acc, item, x) {
    if (item) {
      return acc.concat([y, x, item]);
    };
    return acc;
  }, []);
};
