/*!
 * xmasdojo <https://github.com/bigkevmcd/castlemilk-xmas-dojo>
 *
 * Copyright (c) 2016 Kevin McDermott.
 * Licensed under the MIT License.
 */
'use strict';

module.exports.gridToCommand = function(array, opts) {
  var opts = opts || {};
  var grid = [].concat.apply([], array.filter(function(row, index) {
    if (opts.hasOwnProperty('rows')) {
      return index <= opts.rows;
    }
    return true;
  }).map(lineToCommand));
  return (optsToCommands(opts) + grid.join()).trim();
};

var optsToCommands = function(opts) {
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
