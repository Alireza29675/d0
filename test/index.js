let D0 = require('../lib/index');

let p1 = new D0(0, 0, 10, 5, 2);
let p2 = new D0(10, 5, 4);
let p3 = new D0(20, 22, 10);

console.log('p1:' + p1.toString());
console.log('p2:' + p2.toString());
console.log('p3:' + p3.toString() + '\n');


let p4 = p2.midPoint(p3);
console.log('midPoint between p2 and p3: ' + p4.toString() + '\n')

console.log('Euclidean:');
console.log('=> p1 to p2' + p1.distanceTo(p2));
console.log('=> p1 to p2' + p1.distanceTo(p3));
console.log('Manhattan:');
console.log('=> p1 to p2' + p1.manhattanDistanceTo(p2));
console.log('=> p1 to p2' + p1.manhattanDistanceTo(p3));
console.log('Square:');
console.log('=> p1 to p2' + p1.squareDistanceTo(p2));
console.log('=> p1 to p2' + p1.squareDistanceTo(p3));
