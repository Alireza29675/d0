let D0 = require('../lib/index');

let point1 = new D0(3, 4, 5);
let point2 = new D0(3, 2, 2);
let point3 = point1.clone().d(2, 7).d(3, 2);

console.log('Distance between point1 and point2:');
console.log(
    ' => Euclidean Distance: ' + point1.euclideanDistanceTo(point2),
    '\n => Manhattan Distance: ' + point1.manhattanDistanceTo(point2),
    '\n => Square Distance: ' + point1.squareDistanceTo(point2)
);

console.log('\n\nDistance between point1 and point3:');
console.log(
    ' => Euclidean Distance: ' + point1.euclideanDistanceTo(point3),
    '\n => Manhattan Distance: ' + point1.manhattanDistanceTo(point3),
    '\n => Square Distance: ' + point1.squareDistanceTo(point3)
);