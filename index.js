/*!
 * xmasdojo <https://github.com/bigkevmcd/xmasdojo>
 *
 * Copyright (c) 2016 Kevin McDermott.
 * Licensed under the MIT License.
 */
'use strict';

module.exports.gridToCommand = function(array) {
  var merged = [].concat.apply([], array.map(lineToCommand));
  return merged.join();
};

var lineToCommand = function(items, y) {
  return items.reduce(function(acc, item, x) {
    if (item) {
      return acc.concat([y, x, item]);
    };
    return acc;
  }, []);
};
