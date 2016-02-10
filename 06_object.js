SLO = {
  // Taking advantage of functional constructors Crockford p. 52
  vector: function constructor(spec, my) {
    var that = {};
    my = my || {};
    that.plus = function (v) {
      return constructor({
        x: spec.x + v.x,
        y: spec.y + v.y
      });
    };
    that.minus = function (v) {
      return constructor({
        x: spec.x - v.x,
        y: spec.y - v.y
      });
    };
    that.length = function () {
      return Math.sqrt(spec.x * spec.x + spec.y * spec.y);
    };
    return that;
  },
  iterFace: function constructor(spec) {
    // Interface for iteration through a collection of values
    var that;
    var my = {};
    my.at = 0; // mutable private variable
    that = {
      collection: spec.collection
    };
    that.stopIteration = function() {
      return my.at >= spec.collection.length;
    };
    that.next = function() {
      var val = null;
      if (!that.stopIteration()) {
        val = spec.collection[my.at];
        my.at += 1;
      }
      return val;
    };
    return that;
  },
  arraySeq: function constructor(arr) {
    return this.iterFace({collection: arr});
  },
  rangeSeq: function constructor(min, max) {
    var arr = [];
    for (var i = 0; i <= max - min; i += 1) {
      arr[i] = min + i;
    };
    return this.iterFace({collection: arr});
  },
  logFive: function(iter) {
    for (var i = 0; i < 5 ; i += 1) {
      if (iter.stopIteration()) break;
      console.log(iter.next());
    };
  }
}

var v1 = SLO.vector({x: 17, y: 0});
var v2 = SLO.vector({x: 17, y: -17});
console.log(v1.minus(v2));
console.log(v2.plus(v1));
console.log(v1.length());
console.log(v2.length());
console.log(SLO.rangeSeq(1, 10));
SLO.logFive(SLO.arraySeq([1, 2]));
SLO.logFive(SLO.rangeSeq(100, 1000));
