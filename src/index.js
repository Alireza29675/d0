class D0 {
    constructor () {
        this.dimensions = [];
        this.ready = false;
        for (let i in arguments) this.d(Number(i)+1, arguments[i])
        this.ready = true;
    }

    /**
     * Zero point in every dimension
     * @type {D0}
     */
    static ZERO = new D0();


    /**
     * sets or gets dimension-n
     * @param {Number} n - number of dimension
     * @param {Number=} setTo - set value for dimension-n
     * @returns {Number|D0}
     */
    d (n, setTo) {
        if (setTo !== 0 && !setTo) return this.dimensions[n-1] || 0;
        this.dimensions[n-1] = setTo;
        // removing latest zero dimensions
        if (this.ready) while (this.dimensions[this.count-1] === 0) this.dimensions.pop();
        return this
    }

    /**
     * returns dimensions count
     * @returns {Number}
     */
    get count () {
        return this.dimensions.length
    }


    /**
     * gets famous dimensions (x, y, z, w)
     * @returns {Number}
     */
    get x () { return this.d(1) || 0  }
    get y () { return this.d(2) || 0  }
    get z () { return this.d(3) || 0  }
    get w () { return this.d(4) || 0  }


    /**
     * sets famous dimensions (x, y, z, w)
     * @param {Number} to - set value for dimension
     */
    set x (to) { this.d(1, to)  }
    set y (to) { this.d(2, to)  }
    set z (to) { this.d(3, to)  }
    set w (to) { this.d(4, to)  }


    /**
     * iterate over every dimension of point
     * @param {Function} func - function calls with this format (index, value)
     * @returns {D0}
     */
    each (func) {
        for (let i = 1; i <= this.count; i++) func(i, this.d(i))
        return this
    }


    /**
     * iterate over every dimension of two points and pass their dimensions side by side
     * @param secondPoint - another point which wants to be compared with
     * @param func - function calls with this format (index, valueOfPoint1, valueOfPoint2)
     * @returns {D0}
     */
    eachWith (secondPoint, func) {
        const maxCount = Math.max(this.count, secondPoint.count)
        for (let i = 1; i <= maxCount; i++) func(i, this.d(i), secondPoint.d(i))
        return this
    }


    /**
     * adds a point to this point
     * @param {D0} point
     * @returns {D0}
     */
    add (point) {
        for (let point of arguments) this.eachWith(point, (index, i, j) => this.d(index, i + j))
        return this
    }


    /**
     * subtract a point from this point
     * @param {D0} point
     * @returns {D0}
     */
    subtract (point) {
        for (let point of arguments) this.eachWith(point, (index, i, j) => this.d(index, i - j))
        return this
    }


    /**
     * multiply a point or a number to this point
     * @param {D0|Number} toWhat
     * @returns {D0}
     */
    multiply (toWhat) {
        for (let toWhat of arguments) {
            if (toWhat instanceof D0) this.eachWith(toWhat, (index, i, j) => this.d(index, i * j));
            else this.each((index, i) => this.d(index, i * toWhat))
        }
        return this
    }


    /**
     * divide a point or a number from this point
     * @param {D0|Number} fromWhat
     * @returns {D0}
     */
    divide (fromWhat) {
        for (let fromWhat of arguments) {
            if (fromWhat instanceof D0) this.eachWith(fromWhat, (index, i, j) => this.d(index, i / j));
            else this.each((index, i) => this.d(index, i / fromWhat))
        }
        return this
    }


    /**
     * checks equality of this point and one another point
     * @param {D0} point
     * @returns {boolean}
     */
    equals (point) {
        let ret = true;
        this.eachWith(point, (index, i, j) => ret &= (i === j));
        return Boolean(ret)
    }


    /**
     * absolutes every dimension of point
     * @returns {D0}
     */
    abs () {
        return this.each((index, value) => this.d(index, Math.abs(value)))
    }


    /**
     * returns euclidean distance between this point and origin point
     * @returns {number}
     */
    distanceToOrigin () {
        let sigmaSquares = 0;
        this.each((index, i) => sigmaSquares += Math.pow(i, 2));
        return Math.sqrt(sigmaSquares)
    }


    /**
     * returns euclidean distance between this point and one another point
     * @param {D0} point
     * @returns {number}
     */
    euclideanDistanceTo (point) {
        let sigmaSquares = 0;
        this.eachWith(point, (index, i, j) => sigmaSquares += Math.pow(i - j, 2));
        return Math.sqrt(sigmaSquares)
    }


    /**
     * returns manhattan distance between this point and one another point
     * @param {D0} point
     * @returns {number}
     */
    manhattanDistanceTo (point) {
        let sigmaDeltas = 0;
        this.eachWith(point, (index, i, j) => sigmaDeltas += Math.abs(i - j));
        return sigmaDeltas
    }


    /**
     * returns square distance between this point and one another point
     * @param {D0} point
     * @returns {number}
     */
    squareDistanceTo (point) {
        let maxDelta = 0;
        this.eachWith(point, (index, i, j) => maxDelta = Math.max(maxDelta, Math.abs(i - j)));
        return maxDelta
    }


    /**
     * returns distance between this point and one another point (!it's euclideanDistanceTo by default)
     * @param {D0} point
     * @returns {number}
     */
    distanceTo (point) {
        return this.euclideanDistanceTo(point)
    }


    /**
     * returns a clone point of this point
     * @returns {D0}
     */
    clone () {
        const newPoint = new D0();
        this.each((index, value) => newPoint.d(index, value));
        return newPoint
    }


    /**
     * returns string view of this point
     * @returns {string}
     */
    toString () {
        let ret = "(";
        for (let d of this.dimensions) ret += (d + ", ")
        return ret.slice(0, -2) + ")"
    }
}


if (typeof module !== 'undefined') module.exports = D0;
if (typeof window !== 'undefined') window.D0 = D0;