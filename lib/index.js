"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var D0 = function () {
    function D0() {
        _classCallCheck(this, D0);

        this.dimensions = [];
        console.log(arguments);
        for (var i in arguments) {
            this.d(Number(i) + 1, arguments[i]);
        }
    }

    /**
     * Zero point in every dimension
     * @type {D0}
     */


    _createClass(D0, [{
        key: "d",


        /**
         * sets or gets dimension-n
         * @param {Number} n - number of dimension
         * @param {Number=} setTo - set value for dimension-n
         * @returns {Number|D0}
         */
        value: function d(n, setTo) {
            if (!setTo) return this.dimensions[n - 1] || 0;
            this.dimensions[n - 1] = setTo;
            // removing latest zero dimensions
            while (this.dimensions[this.count - 1] === 0) {
                this.dimensions.pop();
            }return this;
        }

        /**
         * returns dimensions count
         * @returns {Number}
         */

    }, {
        key: "each",


        /**
         * iterate over every dimension of point
         * @param {Function} func - function calls with this format (index, value)
         * @returns {D0}
         */
        value: function each(func) {
            for (var i = 1; i <= this.count; i++) {
                func(i, this.d(i));
            }return this;
        }

        /**
         * iterate over every dimension of two points and pass their dimensions side by side
         * @param secondPoint - another point which wants to be compared with
         * @param func - function calls with this format (index, valueOfPoint1, valueOfPoint2)
         * @returns {D0}
         */

    }, {
        key: "eachWith",
        value: function eachWith(secondPoint, func) {
            var maxCount = Math.max(this.count, secondPoint.count);
            for (var i = 1; i <= maxCount; i++) {
                func(i, this.d(i), secondPoint.d(i));
            }return this;
        }

        /**
         * adds a point to this point
         * @param {D0} point
         * @returns {D0}
         */

    }, {
        key: "add",
        value: function add(point) {
            var _this = this;

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = arguments[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var _point = _step.value;
                    this.eachWith(_point, function (index, i, j) {
                        return _this.d(index, i + j);
                    });
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return this;
        }

        /**
         * subtract a point from this point
         * @param {D0} point
         * @returns {D0}
         */

    }, {
        key: "subtract",
        value: function subtract(point) {
            var _this2 = this;

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = arguments[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var _point2 = _step2.value;
                    this.eachWith(_point2, function (index, i, j) {
                        return _this2.d(index, i - j);
                    });
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            return this;
        }

        /**
         * multiply a point or a number to this point
         * @param {D0|Number} toWhat
         * @returns {D0}
         */

    }, {
        key: "multiply",
        value: function multiply(toWhat) {
            var _this3 = this;

            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                var _loop = function _loop() {
                    var toWhat = _step3.value;

                    if (toWhat instanceof D0) _this3.eachWith(toWhat, function (index, i, j) {
                        return _this3.d(index, i * j);
                    });else _this3.each(function (index, i) {
                        return _this3.d(index, i * toWhat);
                    });
                };

                for (var _iterator3 = arguments[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    _loop();
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            return this;
        }

        /**
         * divide a point or a number from this point
         * @param {D0|Number} fromWhat
         * @returns {D0}
         */

    }, {
        key: "divide",
        value: function divide(fromWhat) {
            var _this4 = this;

            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                var _loop2 = function _loop2() {
                    var fromWhat = _step4.value;

                    if (fromWhat instanceof D0) _this4.eachWith(fromWhat, function (index, i, j) {
                        return _this4.d(index, i / j);
                    });else _this4.each(function (index, i) {
                        return _this4.d(index, i / fromWhat);
                    });
                };

                for (var _iterator4 = arguments[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    _loop2();
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                        _iterator4.return();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }

            return this;
        }

        /**
         * checks equality of this point and one another point
         * @param {D0} point
         * @returns {boolean}
         */

    }, {
        key: "equals",
        value: function equals(point) {
            var ret = true;
            this.eachWith(point, function (index, i, j) {
                return ret &= i === j;
            });
            return Boolean(ret);
        }

        /**
         * absolutes every dimension of point
         * @returns {D0}
         */

    }, {
        key: "abs",
        value: function abs() {
            var _this5 = this;

            return this.each(function (index, i) {
                return _this5.d(index, Math.abs(_this5.d(i)));
            });
        }

        /**
         * returns euclidean distance between this point and one another point
         * @param {D0} point
         * @returns {number}
         */

    }, {
        key: "euclideanDistanceTo",
        value: function euclideanDistanceTo(point) {
            var sigmaSquares = 0;
            this.eachWith(point, function (index, i, j) {
                return sigmaSquares += Math.pow(i - j, 2);
            });
            return Math.sqrt(sigmaSquares);
        }

        /**
         * returns manhattan distance between this point and one another point
         * @param {D0} point
         * @returns {number}
         */

    }, {
        key: "manhattanDistanceTo",
        value: function manhattanDistanceTo(point) {
            var sigmaDeltas = 0;
            this.eachWith(point, function (index, i, j) {
                return sigmaDeltas += Math.abs(i - j);
            });
            return sigmaDeltas;
        }

        /**
         * returns square distance between this point and one another point
         * @param {D0} point
         * @returns {number}
         */

    }, {
        key: "squareDistanceTo",
        value: function squareDistanceTo(point) {
            var maxDelta = 0;
            this.eachWith(point, function (index, i, j) {
                return maxDelta = Math.max(maxDelta, Math.abs(i - j));
            });
            return maxDelta;
        }

        /**
         * returns distance between this point and one another point (!it's euclideanDistanceTo by default)
         * @param {D0} point
         * @returns {number}
         */

    }, {
        key: "distanceTo",
        value: function distanceTo(point) {
            return this.euclideanDistanceTo(point);
        }

        /**
         * returns a clone point of this point
         * @returns {D0}
         */

    }, {
        key: "clone",
        value: function clone() {
            var newPoint = new D0();
            this.each(function (index, value) {
                return newPoint.d(index, value);
            });
            return newPoint;
        }

        /**
         * returns string view of this point
         * @returns {string}
         */

    }, {
        key: "toString",
        value: function toString() {
            var ret = "(";
            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
                for (var _iterator5 = this.dimensions[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                    var d = _step5.value;
                    ret += d + ", ";
                }
            } catch (err) {
                _didIteratorError5 = true;
                _iteratorError5 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion5 && _iterator5.return) {
                        _iterator5.return();
                    }
                } finally {
                    if (_didIteratorError5) {
                        throw _iteratorError5;
                    }
                }
            }

            return ret.slice(0, -2) + ")";
        }
    }, {
        key: "count",
        get: function get() {
            return this.dimensions.length;
        }

        /**
         * gets famous dimensions (x, y, z, w)
         * @returns {Number}
         */

    }, {
        key: "x",
        get: function get() {
            return this.d(1) || 0;
        },


        /**
         * sets famous dimensions (x, y, z, w)
         * @param {Number} to - set value for dimension
         */
        set: function set(to) {
            this.d(1, to);
        }
    }, {
        key: "y",
        get: function get() {
            return this.d(2) || 0;
        },
        set: function set(to) {
            this.d(2, to);
        }
    }, {
        key: "z",
        get: function get() {
            return this.d(3) || 0;
        },
        set: function set(to) {
            this.d(3, to);
        }
    }, {
        key: "w",
        get: function get() {
            return this.d(4) || 0;
        },
        set: function set(to) {
            this.d(4, to);
        }
    }]);

    return D0;
}();

D0.ZERO = new D0();


if (typeof module !== 'undefined') module.exports = D0;
if (typeof window !== 'undefined') window.D0 = D0;