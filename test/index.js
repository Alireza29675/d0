let D0 = require('../lib/index');

let point1 = new D0(3, 4, 5);
let point2 = new D0(3, 4, 2);

console.log(
    point1.divide(point2, 2, 3)
          .multiply(3, 2, point2)
          .add(point2)
          .subtract(point2)
          .toString()
);