var D0 = require('../lib/index')

const point1 = new D0(4, 6, 0, 22)
const point2 = new D0(4, 6, 0, 22, 1)
const point3 = new D0(0, 0, 0, 0, 1)

console.log(point1.add(point2).sub(point3))