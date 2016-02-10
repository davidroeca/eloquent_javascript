"use strict";
var DS = {
  range: function (start, stop, step) {
    step = step ? step : 1;
    var output = [];
    if (step < 0) {
      for (var i = start; i >= stop; i += step) {
        output.push(i);
      };
    } else {
      for (var i = start; i <= stop; i += step) {
        output.push(i);
      };
    }
    return output;
  },
  sum: function (arr) {
    var s = 0;
    for (var i = 0; i < arr.length; i += 1) {
      s += arr[i];
    };
    return s;
  },
  reverseArray: function (arr) {
    var out = [];
    for (var i = 0; i < arr.length; i += 1) {
      out[i] = arr[arr.length - i - 1];
    };
    return out;
  },
  reverseArrayInPlace: function (arr) {
    for (var i = 0; i < arr.length / 2; i += 1) {
      var tmp = arr[i];
      arr[i] = arr[arr.length - i - 1];
      arr[arr.length - i - 1] = tmp;
    };
  },
  arrayToList: function (arr) {
    var list = {};
    var curr = list;
    for (var i = 0; i < arr.length; i += 1) {
      curr.value = arr[i];
      if (i !== arr.length - 1) {
        curr.rest = {};
        curr = curr.rest;
      }
      else {
        curr.rest = null;
      }
    }
    return list;
  },
  prepend: function (v, l) {
    return {
      value: v,
      rest: l
    };
  },
  nth: function (l, n) {
    var curr = l;
    for (var i = 0; i < n; i += 1) {
      curr = curr.rest
    }
    return curr.value;
  },
  deepEqual: function de(o1, o2) {
    if (typeof o1 !== 'object' || typeof o2 !== 'object'
        || o1 === null || o2 === null) {
      return o1 === o2;
    }
    else {
      for (var key in o1) {
        if (!o1.hasOwnProperty(key)) continue;
        if (!de(o1[key], o2[key])) return false;
      };
      return true;
    }
  }
}

console.log("Testing range 1-30");
console.log(DS.range(1, 30));
console.log("Testing range 0-20, step 5");
console.log(DS.range(0, 20, 5));
console.log("Testing range 20-0, step -5");
console.log(DS.range(20, 0, -5));
console.log("Testing range 30-1, step -1");
console.log(DS.range(30, 1, -1));

console.log("Testing sum range 1-30");
console.log(DS.sum(DS.range(1, 30)));

console.log("Testing reverseArray [1, 2, 3]");
console.log(DS.reverseArray([1, 2, 3]));

console.log("Testing reverseArrayInPlace [3, 5, 7, 9]");
var array1 = [3, 5, 7, 9];
DS.reverseArrayInPlace(array1);
console.log(array1);

console.log("Testing arrayToList [1, 2, 3, 77, 99]");
console.log(DS.arrayToList([1, 2, 3, 77, 99]));

console.log("Testing prepend(9, {value: 1, rest: null})");
console.log(DS.prepend(9, {value: 1, rest: null}));

console.log("Testing nth(arrayToList([1, 2, 33, 47]), 2)");
console.log(DS.nth(DS.arrayToList([1, 2, 33, 47]), 2));

var obj = {here: {is: "an"}, object: 2};
console.log("Testing deepEqual");
console.log("false: ", DS.deepEqual(obj, {here: 1, object: 2}));
console.log("true: ", DS.deepEqual(obj, {here: {is: "an"}, object: 2}));
console.log("true: ", DS.deepEqual({a: null}, {a: null}));
console.log("true: ", DS.deepEqual(null, null));
