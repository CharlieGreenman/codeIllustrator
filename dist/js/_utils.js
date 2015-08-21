"use strict";

var utils = {
  compare: function compare(a, b) {

    if (parseFloat(a[0]) - parseFloat(b[0]) === 0) {
      return parseFloat(a[1]) - parseFloat(b[1]);
    } else {
      return parseFloat(a[0]) - parseFloat(b[0]);
    }
  }
};