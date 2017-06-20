class D0 {
    constructor () {
        this.dimensions = []
        for (let i in arguments) this.dimensions.push(arguments[i])
    }

    // Famous dimensions
    d (n, to) {
        if (to === undefined) return this.dimensions[n-1] || 0
        else if (n !== undefined) this.dimensions[n-1] = to
        return this
    }
    get count () {
        return this.dimensions.length
    }
    get x () {
        return this.d(1) || 0 
    }
    set x (to) {
        this.d(1, to) 
    }
    get y () {
        return this.d(2) || 0 
    }
    set y (to) {
        this.d(2, to) 
    }
    get z () {
        return this.d(3) || 0 
    }
    set z (to) {
        this.d(3, to) 
    }
    get w () {
        return this.d(4) || 0 
    }
    set w (to) {
        this.d(4, to) 
    }

    // methods
    mapDimensionsWith (point, func) {
        const maxCount = Math.max(this.count, point.count)
        for (let i = 1; i <= maxCount; i++) this.d(i, func(this.d(i), point.d(i)))
        return this
    }
    add (point) {
        return this.mapDimensionsWith(point, (i, j) => i + j)
    }
    sub (point) {
        return this.mapDimensionsWith(point, (i, j) => i - j)
    }

    // to String Point
    toString () {
        let ret = "("
        for (let d of this.dimensions) ret += (d + ", ")
        return ret.slice(0, -2) + ")"
    }
}

module.exports = D0