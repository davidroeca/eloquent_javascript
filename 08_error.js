"use strict";
var ERR = {
  multiplicatorUnitFailure: function () {
    return {
      name: "randomFail",
      message: "failed randomly",
    };
  },
  primitiveMultiply: function (a, b) {
    if (Math.random() < 0.5) {
      return a * b;
    }
    else {
      throw this.multiplicatorUnitFailure();
    }
  },
  reliableMultiply: function (a, b) {
    for (;;) {
      try {
        return this.primitiveMultiply(a, b);
      }
      catch (e) {
        if (e.name == this.multiplicatorUnitFailure().name) {
          console.log("Bad attempt caught");
          continue;
        }
        else {
          throw (e.name, ': ', e.message);
        }
      }
    };
  }
};
console.log(ERR.reliableMultiply(10, 20));
