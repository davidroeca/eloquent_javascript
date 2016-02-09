FUNCTIONS = {
    min: function (a, b) {
        return a > b ? b : a;
    },
    isEven: function f(num) {
        var n = num < 0 ? -Math.ceil(num) : Math.floor(num);// float & negative
        return n > 1 ? f(n - 2) : n === 0;
    },
    countChar: function(s, c) {
        if (typeof c !== 'string' || c.length !== 1) {
            throw {
                name: "ValueError",
                message: "Second input must be a single-character string."
            };
        }
        if (typeof s !== 'string') {
            throw {
                name: "ValueError",
                message: "First input must be a string."
            };
        }
        var i;
        var cnt = 0;
        for (i = 0; i < s.length; i += 1) {
            cnt += s[i] === c ? 1: 0;
        }
        return cnt;
    }
}

console.log(FUNCTIONS.min(1, 2));
console.log(FUNCTIONS.min(3, 2));
console.log(FUNCTIONS.min(15, 22));

console.log(FUNCTIONS.isEven(10));
console.log(FUNCTIONS.isEven(11));
console.log(FUNCTIONS.isEven(-11));
console.log(FUNCTIONS.isEven(-11));
console.log(FUNCTIONS.isEven(-12.3));
console.log(FUNCTIONS.isEven(12.3));

console.log(FUNCTIONS.countChar("abcdeccc", "c"));
