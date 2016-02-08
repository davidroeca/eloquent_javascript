PS = {
    loop_triangle: function (len) {
        var s = '';
        var i;
        for (i = 0; i < len; i += 1) {
            s += '#';
            document.writeln(s);
        };
    },
    fizzbuzz: function (max) {
        var i;
        for (i = 1; i <= max; i += 1) {
            var output = (i%5 === 0 ? "Fizz": "") + (i%3 === 0 ? "Buzz": "");
            output ? document.writeln(output): document.writeln(i);
        };
    },
    chessboard: function (size) {
        var s = '';
        var i, j;
        for (i = 0; i < size; i += 1) {
            for (j = 0; j < size; j += 1) {
                s += ((i + j) % 2) ? '#' : ' ';
            };
            s += '\n';
        };
        return s;
    }
}

document.writeln("Loop Triangle")
PS.loop_triangle(7);
document.writeln("Fizzbuzz")
PS.fizzbuzz(100);
document.writeln("Chessboard 8")
document.writeln(PS.chessboard(8));
document.writeln("Chessboard 11")
document.writeln(PS.chessboard(11));






