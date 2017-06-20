"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var D0 = function () {
    function D0() {
        _classCallCheck(this, D0);

        this.dimensions = [];
        for (var i in arguments) {
            this.dimensions.push(arguments[i]);
        }
    }

    _createClass(D0, [{
        key: "d",


        // Famous dimensions
        value: function d(n, to) {
            if (to === undefined) return this.dimensions[n - 1] || 0;else if (n !== undefined) {
                this.dimensions[n - 1] = to;
                while (this.dimensions[this.dimensions.length - 1] === 0) {
                    this.dimensions.splice(this.dimensions.length - 1, 1);
                }
            }
            return this;
        }
    }, {
        key: "each",


        // methods
        value: function each(func) {
            for (var i = 1; i <= this.count; i++) {
                func(i, this.d(i));
            }return this;
        }
    }, {
        key: "eachWith",
        value: function eachWith(point, func) {
            var maxCount = Math.max(this.count, point.count);
            for (var i = 1; i <= maxCount; i++) {
                func(i, this.d(i), point.d(i));
            }return this;
        }
    }, {
        key: "add",
        value: function add(point) {
            var _this = this;

            return this.eachWith(point, function (index, i, j) {
                return _this.d(index, i + j);
            });
        }
    }, {
        key: "sub",
        value: function sub(point) {
            var _this2 = this;

            return this.eachWith(point, function (index, i, j) {
                return _this2.d(index, i - j);
            });
        }
    }, {
        key: "equals",
        value: function equals(point) {
            var ret = true;
            this.eachWith(point, function (index, i, j) {
                if (i !== j) ret = false;
            });
            return ret;
        }
    }, {
        key: "abs",
        value: function abs() {
            var _this3 = this;

            return this.each(function (index, i) {
                return _this3.d(index, Math.abs(_this3.d(i)));
            });
        }
    }, {
        key: "distance",
        value: function distance(point) {
            var count = 0,
                sumSqr = 0;
            this.eachWith(point, function (index, i, j) {
                count++;
                sumSqr += Math.pow(i - j, 2);
            });
            return Math.sqrt(sumSqr);
        }
    }, {
        key: "multiplay",
        value: function multiplay(toWhat) {
            var _this4 = this;

            if (toWhat instanceof D0) return this.eachWith(toWhat, function (index, i, j) {
                return _this4.d(index, i * j);
            });
            return this.each(function (index, i) {
                return _this4.d(index, i * toWhat);
            });
        }
    }, {
        key: "divide",
        value: function divide(fromWhat) {
            var _this5 = this;

            if (fromWhat instanceof D0) return this.eachWith(fromWhat, function (index, i, j) {
                return _this5.d(index, i / j);
            });
            return this.each(function (index, i) {
                return _this5.d(index, i / fromWhat);
            });
        }

        // to String Point

    }, {
        key: "toString",
        value: function toString() {
            var ret = "(";
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.dimensions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var d = _step.value;
                    ret += d + ", ";
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

            return ret.slice(0, -2) + ")";
        }
    }, {
        key: "count",
        get: function get() {
            return this.dimensions.length;
        }
    }, {
        key: "x",
        get: function get() {
            return this.d(1) || 0;
        },
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


module.exports = D0;