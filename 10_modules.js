MODS = {
  month: function () {
    var names = ["January", "February", "March", "April", "May", "June", "July",
                 "August", "September", "October", "November", "December"];
    return {
      name: function (num) {
        return names[num - 1];
      },
      number: function(name) {
        for (var i = 0; i < 12; i += 1) {
          if (names[i] === name) {
            return i + 1;
          }
        };
        throw {
          name: "ValueError",
          message: "Name not found"
        };
      }
    }
  }()
}

console.log(MODS.month.name(5));
console.log(MODS.month.number("September"));
