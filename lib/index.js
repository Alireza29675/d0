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

    // Famous dimensions


    _createClass(D0, [{
        key: "d",
        value: function d(n, to) {
            if (to === undefined) return this.dimensions[n - 1] || 0;else if (n !== undefined) this.dimensions[n - 1] = to;
            return this;
        }
    }, {
        key: "mapDimensionsWith",


        // methods
        value: function mapDimensionsWith(point, func) {
            var maxCount = Math.max(this.count, point.count);
            for (var i = 1; i <= maxCount; i++) {
                this.d(i, func(this.d(i), point.d(i)));
            }return this;
        }
    }, {
        key: "add",
        value: function add(point) {
            return this.mapDimensionsWith(point, function (i, j) {
                return i + j;
            });
        }
    }, {
        key: "sub",
        value: function sub(point) {
            return this.mapDimensionsWith(point, function (i, j) {
                return i - j;
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

module.exports = D0;