class D0 {
    constructor () {
        this.dimensions = []
        for (let i in arguments) this.dimensions.push(arguments[i])
    }

    static ZERO = new D0()

    // Famous dimensions
    d (n, to) {
        if (to === undefined) return this.dimensions[n-1] || 0
        else if (n !== undefined) {
            this.dimensions[n-1] = to
            while (this.dimensions[this.dimensions.length-1] === 0) this.dimensions.splice(this.dimensions.length-1, 1)
        }
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
    each (func) {
        for (let i = 1; i <= this.count; i++) func(i, this.d(i))
        return this
    }
    eachWith (point, func) {
        const maxCount = Math.max(this.count, point.count)
        for (let i = 1; i <= maxCount; i++) func(i, this.d(i), point.d(i))
        return this
    }
    add (point) {
        return this.eachWith(point, (index, i, j) => this.d(index, i + j))
    }
    sub (point) {
        return this.eachWith(point, (index, i, j) => this.d(index, i - j))
    }
    equals (point) {
        let ret = true
        this.eachWith(point, (index, i, j) => {
            if (i !== j) ret = false
        })
        return ret
    }
    abs () {
        return this.each((index, i) => this.d(index, Math.abs(this.d(i))))
    }
    distance (point) {
        let count = 0, sumSqr = 0
        this.eachWith(point, (index, i, j) => {
            count++
            sumSqr += Math.pow(i - j, 2)
        })
        return Math.sqrt(sumSqr)
    }
    multiplay (toWhat) {
        if (toWhat instanceof D0) return this.eachWith(toWhat, (index, i, j) => this.d(index, i * j))
        return this.each((index, i) => this.d(index, i * toWhat))
    }
    divide (fromWhat) {
        if (fromWhat instanceof D0) return this.eachWith(fromWhat, (index, i, j) => this.d(index, i / j))
        return this.each((index, i) => this.d(index, i / fromWhat))
    }

    // to String Point
    toString () {
        let ret = "("
        for (let d of this.dimensions) ret += (d + ", ")
        return ret.slice(0, -2) + ")"
    }
}

module.exports = D0