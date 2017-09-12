# d0

Dimension 0 in n-Dimensional World


## Motivation

This package has created to use in fields that you need to use physics rules without any real world limitation and AI fields


## Installation

You can install this package by the following ways :

 1. Clone [this repository](https://github.com/Alireza29675/d0) directly from Github then get and use the main js file from `lib/`
 2. Install package using [npm](https://npmjs.org) :
 ```bash
 npm install --save D0
 ```

## Preparation for use 

After importing D0 to your code like this:
```javascript
import D0 from 'd0'
```

You can create a multi-dimensional point with desired dimensions

```javascript
let point = new D0(3, 4, 5, 6, 7); // => x = 3, y = 4, z = 5, w = 6, dimension-5 = 7
```

Also you can access to the origin point in your application using:
```javascript
D0.ZERO // => x = 0, y = 0, z = 0, ... [dimension-n = 0]
```

## Methods and Properties


### D0.prototype.d(n, [setTo])

With this method you can either `get` or `set` the dimension-n value

```javascript
console.log(point.d(1)); // => 3
// returns the value of dimension-1 (x)
point.d(4, 6.5);
// sets the dimension-4's value to 6.5
```

---

### D0.prototype.count

returns count of point's dimensions

```javascript
console.log(point.count); // => 5
```

---

### D0.prototype.x, D0.prototype.y, D0.prototype.z, D0.prototype.w

D0 has `getters` for most useful dimensions:

```javascript
console.log(point.x); // => 3
console.log(point.y); // => 4
console.log(point.z); // => 5
console.log(point.w); // => 6.5
```

Also there are `setters` for them which you can use like:

```javascript
point.z = 8;
console.log(point.z); // => 8
```

---

### D0.prototype.each(callback)

Executes a provided function once for each dimension.

**Syntax:**
```javascript
D0.prototype.each(function callback(dimensionIndex, dimensionValue) {
    // your iterator
});
```

**Example:**
```javascript
point.each(function(index, value){
    console.log(`#${index} ~> ${value}`);
})
// logs
// #1 ~> 3
// #2 ~> 4
// #3 ~> 8
// #4 ~> 6.5
// #5 ~> 7
```

---

### D0.prototype.eachWith(secondPoint, callback)

Executes a provided function one by one for each dimension of two points.

**Syntax:**
```javascript
D0.prototype.eachWith(secondPoint, function callback(dimensionIndex, dimensionValueOfPoint1, dimensionValueOfPoint2) {
    // your iterator
});
```

**Example:**
```javascript
let point2 = new D0(10, 4, 5)
point.eachWith(point2, function(index, valueOfPoint1, valueOfPoint2){
    console.log(`${valueOfPoint1}, ${valueOfPoint2}, ${valueOfPoint1 === valueOfPoint2}`);
})
// logs
// 3, 10, false
// 4, 4, true
// 8, 5, false
// 6.5, 0, false
// 7, 0, false
```

---

### D0.prototype.add(point)

Add two points

**Example:**
```javascript
point.add(point2)
console.log(point.toString()) // => (13, 8, 13, 6.5, 7)
```

---

### D0.prototype.subtract(point)

Subtract two Points

**Example:**
```javascript
point.subtract(point2)
console.log(point.toString()) // => (-3, 0, 3, 6.5, 7)
```

---

### D0.prototype.multiply(toWhat)

Mutiply two Points or a point to a number.

**Syntax:**
```javascript
D0.prototype.mutiply({D0|Number})
```

**Example with {D0}:**
```javascript
console.log(point.toSting()) // => (-3, 0, 3, 6.5, 7)
console.log(point2.toSting()) // => (10, 4, 5, 0, 0)
point.mutiply(point2)
console.log(point.toString()) // => (-30, 0, 15, 0, 0)
```

**Example with {Number}:**
```javascript
console.log(point.toString())
// => (-3, 0, 3, 6.5, 7)
point.mutiply(2)
console.log(point.toString())
// => (-6, 0, 6, 13, 14)
```

---

### D0.prototype.divide(toWhat)

Divide the point by anthor point or a number

**Syntax:**
```javascript
D0.prototype.divide({D0|Number})
```

**Example with {D0}:**
```javascript
console.log(point.toSting()) // => (-30, 0, 15, 0, 0)
console.log(point2.toSting()) // => (10, 4, 5, 0, 0)
point.divide(point2)
console.log(point.toString()) // => (-3, 0, 3, 6.5, 7)
```

**Example with {Number}:**
```javascript
console.log(point.toString())
// => (-6, 0, 6, 13, 14)
point.divide(3)
console.log(point.toString())
// => (-2, 0, 2, 4.3, 4.6)
```

---

### D0.prototype.equals(point)

Compare point to point2 in binary form.

**Example:**
```javascript
console.log(point.equals(point2)) // => false
```

---

### D0.prototype.abs()

This method return absolute value of every dimensions.

**Example:**
```javascript
point.d(1, -60)
console.log(point.abs().toString()) // => (60, 32, 80, 0, 0)
```

---

### D0.prototype.euclideanDistanceTo(point)

Calculate euclidean distance between point and point2.

**Syntax:**
```javascript
D0.prototype.euclideanDistanceTo(point)
```

**Example:**
```javascript
console.log(`#$point.euclideanDistanceTo(point2)`)
// log => 94.38749917229505
```

---

### D0.prototype.manhattanDistanceTo(point)

Calculate manhattan distance between point and point2.

**Syntax:**
```javascript
D0.prototype.manhattanDistanceTo(point)
```

**Example:**
```javascript
console.log(`#$point.manhattanDistanceTo(point)`)
// log => 153
```

---

### D0.prototype.manhattanDistanceTo(point)

Calculate square distance between point and point2.

**Syntax:**
```javascript
D0.prototype.squareDistanceTo(point)
```

**Example:**
```javascript
console.log(`#$point.squareDistanceTo(point)`)
// log => 75
```

---

### D0.prototype.distanceTo(point)

return euclidean distance between point and point2.

**Syntax:**
```javascript
D0.prototype.distanceTo(point)
```

**Example:**
```javascript
console.log(`#$point.distanceTo(point)`)
// log => 94.38749917229505
```

---

### D0.prototype.clone()

Simply create a copy of the point.

**Syntax:**
```javascript
D0.prototype.clone()
```

**Example:**
```javascript
console.log(`#$point.clone()`)
// log => D0 { dimensions: [ 60, 32, 80 ] }
```

---

### D0.prototype.toString()

Return value of dimentions

**Syntax:**
```javascript
D0.prototype.toString()
```

**Example:**
```javascript
console.log(`#$point.toString()`)
// log => (60, 32, 80)
```