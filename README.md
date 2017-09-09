# d0
Dimension 0 in n-Dimensional World

## Motivation

---

This package has created to use in fields that you need to use physics rules without any real world limitation and AI fields

## Installation

---

You can install this package by the following syntax :

 1. download the package directly from github : https://github.com/Alireza29675/d0
 2. install package using npm syntax :
 ```Javascript
 npm install D0
 ```

## Preparation for use 

---

you creat a multidimentional point with desired dimentions

```Javascript
let point1 = new D0(3, 4, 5); //which x = 3, y = 4, z = 5.
```

you can declare the origin with the following syntax :
```Javascript
let zero = D0.ZERO;
```

## Methods

---

### D0.prototype.d()

With this method you can either `get the nth dimention` or `set the nth dimention value to the object`

```Javascript
// return the value of first dimention
console.log(point1.d(1)); => 3
// set the value of fourth dimention to 6
point1.d(4, 6);
```

---

### D0.count

return number of dimentions

```Javascript
console.log(point1.count); => 4
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

### D0.prototype.d()

print each dimention index and value

```Javascript
point1.each(function(index, value){
    console.log(value);
}) => 3, 4, 5.
```