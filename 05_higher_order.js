HOF = {
  flatten: function (arr) {
   return arr.reduce(function(a, b) {
     return a.concat(b);
   },
   []);
  },
  every: function(arr, condition) {
    if (!arr.length){
      return false;
    }
    else {
      return arr.reduce(function (a, b) {
        return (condition(a) && condition(b));
      },
      true);
    }
  },
  some: function(arr, condition) {
    return arr.reduce(function (a, b) {
      return (condition(a) || condition(b));
    },
    false);
  }
}

console.log("Testing flatten");
console.log("Expecting [] followed by [1, 2, 3, 4, 5, 6]");
console.log(HOF.flatten([]));
console.log(HOF.flatten([[1, 2, 3], [4, 5], [6], []]));

console.log("t: ", HOF.every([1, 3, 5, 7], function (i) { return i % 2 === 1; }));
console.log("f: ", HOF.every([1, 3, 5, 8], function (i) { return i % 2 === 1; }));
console.log("f: ", HOF.every([], function (i) { return i % 2 === 1; }));
console.log("f: ", HOF.some([1, 3, 5, 7], function (i) { return i % 2 === 0; }));
console.log("t: ", HOF.some([1, 3, 5, 8], function (i) { return i % 2 === 0; }));
console.log("f: ", HOF.some([], function (i) { return i % 2 === 0; }));
