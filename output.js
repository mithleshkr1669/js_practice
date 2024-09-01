"use strict";

let foo = {
  barX: function () {
    console.log(this);
  },
  barY: () => {
    console.log(this);
  },
};

let barX = foo.barX;
console.log("barx",barX)
let barY = foo.barY;

foo.barX(); // Output1?
foo.barY(); // Output2?
foo.barX(); // Output3?
barY(); // Output4?