var D0 = require('../lib/index')

const point1 = new D0(4, 6, 0, 22)
const point2 = new D0(2, 3, 4, 5, 6)

console.log(point1.add(point2).toString())