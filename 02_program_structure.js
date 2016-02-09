PS = {
  loop_triangle: function (len) {
    var s = '';
    for (var i = 0; i < len; i += 1) {
      s += '#';
      console.log(s);
    }
  },
  fizzbuzz: function (max) {
    var i;
    for (var i = 1; i <= max; i += 1) {
      var output = (i%5 === 0 ? "Fizz": "") + (i%3 === 0 ? "Buzz": "");
      output ? console.log(output): console.log(i);
    }
  },
  chessboard: function (size) {
    var s = '';
    for (var i = 0; i < size; i += 1) {
      for (var j = 0; j < size; j += 1) {
        s += ((i + j) % 2) ? '#' : ' ';
      }
      s += '\n';
    }
    return s;
  }
}

console.log("Loop Triangle")
PS.loop_triangle(7);
console.log("Fizzbuzz")
PS.fizzbuzz(100);
console.log("Chessboard 8")
console.log(PS.chessboard(8));
console.log("Chessboard 11")
console.log(PS.chessboard(11));






