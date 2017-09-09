# d0

Dimension 0 in n-Dimensional World


## Motivation

This package has created to use in fields that you need to use physics rules without any real world limitation and AI fields


## Installation

You can install this package by the following  :

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

```Javascript
console.log(point.d(1)); // => 3
// returns the value of dimension-1 (x)
point.d(4, 6.5);
// sets the dimension-4's value to 6.5
```

---

### D0.prototype.count

returns count of point's dimensions

```Javascript
console.log(point.count); // => 5
```

---

### D0.x, D0.y, D0.z, D0.w

`get` the value of famous dimentions

```Javascript
console.log(point1.x); => 3
console.log(point1.y); => 4
console.log(point1.z); => 5
console.log(point1.w); => 0
```

`set` the value of famous dimentions

```Javascript
point1.w = 6
console.log(point1.w); => 6
```

---

### D0.prototype.each()

print each dimention index and value

```Javascript
point1.each(function(index, value){
    console.log(value);
}) => 3, 4, 5.
```