/*1673344539,,JIT Construction: v1006801365,en_US*/

/**
 * Copyright (c) 2017-present, Facebook, Inc. All rights reserved.
 *
 * You are hereby granted a non-exclusive, worldwide, royalty-free license to use,
 * copy, modify, and distribute this software in source code or binary form for use
 * in connection with the web services and APIs provided by Facebook.
 *
 * As with any software that integrates with the Facebook platform, your use of
 * this software is subject to the Facebook Platform Policy
 * [http://developers.facebook.com/policy/]. This copyright notice shall be
 * included in all copies or substantial portions of the software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
try {
  (window.FB && !window.FB.__buffer) ||
    (function () {
      var apply = Function.prototype.apply;
      function bindContext(fn, thisArg) {
        return function _sdkBound() {
          return apply.call(fn, thisArg, arguments);
        };
      }
      var global = {
        __type: "JS_SDK_SANDBOX",
        window: window,
        document: window.document,
      };
      var sandboxSafelist = [
        "setTimeout",
        "setInterval",
        "clearTimeout",
        "clearInterval",
      ];
      for (var i = 0; i < sandboxSafelist.length; i++) {
        global[sandboxSafelist[i]] = bindContext(
          window[sandboxSafelist[i]],
          window
        );
      }
      (function () {
        var self = window;
        var __DEV__ = 0;
        function emptyFunction() {}
        var __transform_includes = {};
        var __annotator, __bodyWrapper;
        var __w, __t;
        var undefined;
        with (this) {
          (function () {
            var a = {},
              b = function (a, b) {
                if (!a && !b) return null;
                var c = {};
                typeof a !== "undefined" && (c.type = a);
                typeof b !== "undefined" && (c.signature = b);
                return c;
              },
              c = function (a, c) {
                return b(
                  a && /^[A-Z]/.test(a) ? a : void 0,
                  c && ((c.params && c.params.length) || c.returns)
                    ? "function(" +
                        (c.params
                          ? c.params
                              .map(function (a) {
                                return /\?/.test(a)
                                  ? "?" + a.replace("?", "")
                                  : a;
                              })
                              .join(",")
                          : "") +
                        ")" +
                        (c.returns ? ":" + c.returns : "")
                    : void 0
                );
              },
              d = function (a, b, c) {
                return a;
              },
              e = function (a, b, d) {
                "sourcemeta" in __transform_includes && (a.__SMmeta = b);
                if ("typechecks" in __transform_includes) {
                  b = c(b ? b.name : void 0, d);
                  b && __w(a, b);
                }
                return a;
              },
              f = function (a, b, c) {
                return c.apply(a, b);
              },
              g = function (a, b, c, d) {
                d && d.params && __t.apply(a, d.params);
                c = c.apply(a, b);
                d && d.returns && __t([c, d.returns]);
                return c;
              };
            g = function (b, c, d, e, f) {
              if (f) {
                f.callId ||
                  (f.callId =
                    f.module + ":" + (f.line || 0) + ":" + (f.column || 0));
                e = f.callId;
                a[e] = (a[e] || 0) + 1;
              }
              return d.apply(b, c);
            };
            typeof __transform_includes === "undefined"
              ? ((__annotator = d), (__bodyWrapper = f))
              : ((__annotator = e),
                "codeusage" in __transform_includes
                  ? ((__annotator = d),
                    (__bodyWrapper = g),
                    (__bodyWrapper.getCodeUsage = function () {
                      return a;
                    }),
                    (__bodyWrapper.clearCodeUsage = function () {
                      a = {};
                    }))
                  : "typechecks" in __transform_includes
                  ? (__bodyWrapper = f)
                  : (__bodyWrapper = f));
          })();
          (__t = function (a) {
            return a[0];
          }),
            (__w = function (a) {
              return a;
            });
          (function (a) {
            var b = {},
              c = [
                "global",
                "require",
                "requireDynamic",
                "requireLazy",
                "module",
                "exports",
              ],
              d = [
                "global",
                "require",
                "importDefault",
                "importNamespace",
                "requireLazy",
                "module",
                "exports",
              ],
              e = 1,
              f = 32,
              g = 64,
              h = {},
              i = Object.prototype.hasOwnProperty;
            function j(e, h) {
              if (!i.call(b, e)) {
                if (h) return null;
                throw new Error("Module " + e + " has not been defined");
              }
              h = b[e];
              if (h.resolved) return h;
              e = h.special;
              var j = h.factory.length,
                n = e & f ? d.concat(h.deps) : c.concat(h.deps),
                o = [],
                p;
              for (var q = 0; q < j; q++) {
                switch (n[q]) {
                  case "module":
                    p = h;
                    break;
                  case "exports":
                    p = h.exports;
                    break;
                  case "global":
                    p = a;
                    break;
                  case "require":
                    p = k;
                    break;
                  case "requireDynamic":
                    p = null;
                    break;
                  case "requireLazy":
                    p = null;
                    break;
                  case "importDefault":
                    p = l;
                    break;
                  case "importNamespace":
                    p = m;
                    break;
                  default:
                    typeof n[q] === "string" && (p = k.call(null, n[q]));
                }
                o.push(p);
              }
              n = h.factory.apply(a, o);
              n && (h.exports = n);
              e & g
                ? h.exports != null &&
                  i.call(h.exports, "default") &&
                  (h.defaultExport = h.exports["default"])
                : (h.defaultExport = h.exports);
              h.resolved = !0;
              return h;
            }
            function k(a, b) {
              a = j(a, b);
              if (a) return a.defaultExport !== h ? a.defaultExport : a.exports;
            }
            function l(a) {
              a = j(a);
              if (a) return a.defaultExport !== h ? a.defaultExport : null;
            }
            function m(a) {
              a = j(a);
              if (a) return a.exports;
            }
            function n(a, c, d, f) {
              typeof d === "function"
                ? ((b[a] = {
                    factory: d,
                    deps: c,
                    defaultExport: h,
                    exports: {},
                    special: f || 0,
                    resolved: !1,
                  }),
                  f != null && f & e && k.call(null, a))
                : (b[a] = { defaultExport: d, exports: d, resolved: !0 });
            }
            a.__d = n;
            a.require = k;
            a.importDefault = l;
            a.importNamespace = m;
            a.$RefreshReg$ = function () {};
            a.$RefreshSig$ = function () {
              return function (a) {
                return a;
              };
            };
          })(this);
          __d(
            "ES5FunctionPrototype",
            [],
            function (a, b, c, d, e, f) {
              a = {
                bind: function (a) {
                  if (typeof this !== "function")
                    throw new TypeError("Bind must be called on a function");
                  var b = this,
                    c = Array.prototype.slice.call(arguments, 1);
                  function d() {
                    return b.apply(
                      a,
                      c.concat(Array.prototype.slice.call(arguments))
                    );
                  }
                  d.displayName = "bound:" + (b.displayName || b.name || "(?)");
                  d.toString = function () {
                    return "bound: " + b;
                  };
                  return d;
                },
              };
              b = a;
              f["default"] = b;
            },
            66
          );
          __d(
            "ES5StringPrototype",
            [],
            function (a, b, c, d, e, f) {
              a = {
                startsWith: function (a) {
                  var b = String(this);
                  if (this == null)
                    throw new TypeError(
                      "String.prototype.startsWith called on null or undefined"
                    );
                  var c = arguments.length > 1 ? Number(arguments[1]) : 0;
                  isNaN(c) && (c = 0);
                  var d = Math.min(Math.max(c, 0), b.length);
                  return b.indexOf(String(a), c) == d;
                },
                endsWith: function (a) {
                  var b = String(this);
                  if (this == null)
                    throw new TypeError(
                      "String.prototype.endsWith called on null or undefined"
                    );
                  var c = b.length,
                    d = String(a),
                    e = arguments.length > 1 ? Number(arguments[1]) : c;
                  isNaN(e) && (e = 0);
                  var f = Math.min(Math.max(e, 0), c),
                    g = f - d.length;
                  return g < 0 ? !1 : b.lastIndexOf(d, g) == g;
                },
                includes: function (a) {
                  if (this == null)
                    throw new TypeError(
                      "String.prototype.contains called on null or undefined"
                    );
                  var b = String(this),
                    c = arguments.length > 1 ? Number(arguments[1]) : 0;
                  isNaN(c) && (c = 0);
                  return b.indexOf(String(a), c) != -1;
                },
                repeat: function (a) {
                  if (this == null)
                    throw new TypeError(
                      "String.prototype.repeat called on null or undefined"
                    );
                  var b = String(this);
                  a = a ? Number(a) : 0;
                  isNaN(a) && (a = 0);
                  if (a < 0 || a === Infinity) throw RangeError();
                  if (a === 1) return b;
                  if (a === 0) return "";
                  var c = "";
                  while (a) a & 1 && (c += b), (a >>= 1) && (b += b);
                  return c;
                },
              };
              b = a;
              f["default"] = b;
            },
            66
          );
          __d(
            "ES6Array",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              a = {
                from: function (a) {
                  if (a == null)
                    throw new TypeError("Object is null or undefined");
                  var b = arguments[1],
                    c = arguments[2],
                    d = this,
                    e = Object(a),
                    f =
                      typeof Symbol === "function" &&
                      navigator.userAgent.indexOf("Trident/7.0") === -1
                        ? typeof Symbol === "function"
                          ? Symbol.iterator
                          : "@@iterator"
                        : "@@iterator",
                    g = typeof b === "function",
                    h = typeof e[f] === "function",
                    i = 0,
                    j,
                    k;
                  if (h) {
                    j = typeof d === "function" ? new d() : [];
                    var l = e[f](),
                      m;
                    while (!(m = l.next()).done)
                      (k = m.value),
                        g && (k = b.call(c, k, i)),
                        (j[i] = k),
                        (i += 1);
                    j.length = i;
                    return j;
                  }
                  var n = e.length;
                  (isNaN(n) || n < 0) && (n = 0);
                  j = typeof d === "function" ? new d(n) : new Array(n);
                  while (i < n)
                    (k = e[i]),
                      g && (k = b.call(c, k, i)),
                      (j[i] = k),
                      (i += 1);
                  j.length = i;
                  return j;
                },
              };
              b = a;
              f["default"] = b;
            },
            66
          );
          __d(
            "ES6ArrayPrototype",
            [],
            function (a, b, c, d, e, f) {
              var g = {
                find: function (a, b) {
                  if (this == null)
                    throw new TypeError(
                      "Array.prototype.find called on null or undefined"
                    );
                  if (typeof a !== "function")
                    throw new TypeError("predicate must be a function");
                  a = g.findIndex.call(this, a, b);
                  return a === -1 ? void 0 : this[a];
                },
                findIndex: function (a, b) {
                  if (this == null)
                    throw new TypeError(
                      "Array.prototype.findIndex called on null or undefined"
                    );
                  if (typeof a !== "function")
                    throw new TypeError("predicate must be a function");
                  var c = Object(this),
                    d = c.length >>> 0;
                  for (var e = 0; e < d; e++)
                    if (a.call(b, c[e], e, c)) return e;
                  return -1;
                },
                fill: function (a, b, c) {
                  if (this == null)
                    throw new TypeError(
                      "Array.prototype.fill called on null or undefined"
                    );
                  var d = Object(this),
                    e = d.length >>> 0,
                    f = arguments[1],
                    g = f >> 0,
                    h = g < 0 ? Math.max(e + g, 0) : Math.min(g, e),
                    i = arguments[2],
                    j = i === void 0 ? e : i >> 0,
                    k = j < 0 ? Math.max(e + j, 0) : Math.min(j, e);
                  while (h < k) (d[h] = a), h++;
                  return d;
                },
              };
              a = g;
              f["default"] = a;
            },
            66
          );
          __d(
            "ES6Number",
            [],
            function (a, b, c, d, e, f) {
              a = Math.pow(2, -52);
              b = Math.pow(2, 53) - 1;
              c = -1 * b;
              d = {
                isFinite: (function (a) {
                  function b(b) {
                    return a.apply(this, arguments);
                  }
                  b.toString = function () {
                    return a.toString();
                  };
                  return b;
                })(function (a) {
                  return typeof a === "number" && isFinite(a);
                }),
                isNaN: (function (a) {
                  function b(b) {
                    return a.apply(this, arguments);
                  }
                  b.toString = function () {
                    return a.toString();
                  };
                  return b;
                })(function (a) {
                  return typeof a === "number" && isNaN(a);
                }),
                isInteger: function (a) {
                  return this.isFinite(a) && Math.floor(a) === a;
                },
                isSafeInteger: function (a) {
                  return (
                    this.isFinite(a) &&
                    a >= this.MIN_SAFE_INTEGER &&
                    a <= this.MAX_SAFE_INTEGER &&
                    Math.floor(a) === a
                  );
                },
                EPSILON: a,
                MAX_SAFE_INTEGER: b,
                MIN_SAFE_INTEGER: c,
              };
              e = d;
              f["default"] = e;
            },
            66
          );
          __d(
            "ES6Object",
            [],
            function (a, b, c, d, e, f) {
              var g = {}.hasOwnProperty;
              a = {
                assign: function (a) {
                  if (a == null)
                    throw new TypeError(
                      "Object.assign target cannot be null or undefined"
                    );
                  a = Object(a);
                  for (
                    var b = 0;
                    b < (arguments.length <= 1 ? 0 : arguments.length - 1);
                    b++
                  ) {
                    var c =
                      b + 1 < 1 || arguments.length <= b + 1
                        ? void 0
                        : arguments[b + 1];
                    if (c == null) continue;
                    c = Object(c);
                    for (var d in c) g.call(c, d) && (a[d] = c[d]);
                  }
                  return a;
                },
                is: function (a, b) {
                  if (a === b) return a !== 0 || 1 / a === 1 / b;
                  else return a !== a && b !== b;
                },
              };
              b = a;
              f["default"] = b;
            },
            66
          );
          __d(
            "ES5Array",
            [],
            function (a, b, c, d, e, f) {
              a = {
                isArray: function (a) {
                  return Object.prototype.toString.call(a) == "[object Array]";
                },
              };
              b = a;
              f["default"] = b;
            },
            66
          );
          __d(
            "ES5ArrayPrototype",
            [],
            function (a, b, c, d, e, f) {
              a = {
                indexOf: function (a, b) {
                  b = b;
                  var c = this.length;
                  b |= 0;
                  b < 0 && (b += c);
                  for (; b < c; b++) if (b in this && this[b] === a) return b;
                  return -1;
                },
              };
              b = a;
              f["default"] = b;
            },
            66
          );
          __d(
            "ES7ArrayPrototype",
            ["ES5Array", "ES5ArrayPrototype"],
            function (a, b, c, d, e, f) {
              var g = b("ES5Array").isArray,
                h = b("ES5ArrayPrototype").indexOf;
              function i(a) {
                return Math.min(Math.max(j(a), 0), Number.MAX_SAFE_INTEGER);
              }
              function j(a) {
                a = Number(a);
                return isFinite(a) && a !== 0
                  ? k(a) * Math.floor(Math.abs(a))
                  : a;
              }
              function k(a) {
                return a >= 0 ? 1 : -1;
              }
              a = {
                includes: function (a) {
                  "use strict";
                  if (
                    a !== void 0 &&
                    g(this) &&
                    !(typeof a === "number" && isNaN(a))
                  )
                    return h.apply(this, arguments) !== -1;
                  var b = Object(this),
                    c = b.length ? i(b.length) : 0;
                  if (c === 0) return !1;
                  var d = arguments.length > 1 ? j(arguments[1]) : 0,
                    e = d < 0 ? Math.max(c + d, 0) : d,
                    f = isNaN(a) && typeof a === "number";
                  while (e < c) {
                    var k = b[e];
                    if (k === a || (typeof k === "number" && f && isNaN(k)))
                      return !0;
                    e++;
                  }
                  return !1;
                },
              };
              e.exports = a;
            },
            null
          );
          __d(
            "ES7Object",
            [],
            function (a, b, c, d, e, f) {
              var g = {}.hasOwnProperty;
              a = {
                entries: function (a) {
                  if (a == null)
                    throw new TypeError("Object.entries called on non-object");
                  var b = [];
                  for (var c in a) g.call(a, c) && b.push([c, a[c]]);
                  return b;
                },
                values: function (a) {
                  if (a == null)
                    throw new TypeError("Object.values called on non-object");
                  var b = [];
                  for (var c in a) g.call(a, c) && b.push(a[c]);
                  return b;
                },
              };
              b = a;
              f["default"] = b;
            },
            66
          );
          __d(
            "ES7StringPrototype",
            [],
            function (a, b, c, d, e, f) {
              a = {
                trimLeft: function () {
                  return this.replace(/^\s+/, "");
                },
                trimRight: function () {
                  return this.replace(/\s+$/, "");
                },
              };
              b = a;
              f["default"] = b;
            },
            66
          );
          /**
           * License: https://www.facebook.com/legal/license/t3hOLs8wlXy/
           */
          __d(
            "json3-3.3.2",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              var g = {},
                h = { exports: g },
                i;
              function j() {
                (function () {
                  var b = typeof i === "function" && i.amd,
                    c = { function: !0, object: !0 },
                    d = c[typeof g] && g && !g.nodeType && g,
                    e = (c[typeof window] && window) || this,
                    j =
                      d &&
                      c[typeof h] &&
                      h &&
                      !h.nodeType &&
                      typeof a == "object" &&
                      a;
                  j &&
                    (j.global === j || j.window === j || j.self === j) &&
                    (e = j);
                  function k(b, a) {
                    b || (b = e.Object());
                    a || (a = e.Object());
                    var d = b.Number || e.Number,
                      g = b.String || e.String,
                      h = b.Object || e.Object,
                      i = b.Date || e.Date,
                      j = b.SyntaxError || e.SyntaxError,
                      l = b.TypeError || e.TypeError,
                      m = b.Math || e.Math;
                    b = b.JSON || e.JSON;
                    typeof b == "object" &&
                      b &&
                      ((a.stringify = b.stringify), (a.parse = b.parse));
                    b = h.prototype;
                    var n = b.toString,
                      o,
                      p,
                      q,
                      r = new i(-3509827334573292);
                    try {
                      r =
                        r.getUTCFullYear() == -109252 &&
                        r.getUTCMonth() === 0 &&
                        r.getUTCDate() === 1 &&
                        r.getUTCHours() == 10 &&
                        r.getUTCMinutes() == 37 &&
                        r.getUTCSeconds() == 6 &&
                        r.getUTCMilliseconds() == 708;
                    } catch (a) {}
                    function s(b) {
                      if (s[b] !== q) return s[b];
                      var c;
                      if (b == "bug-string-char-index") c = "a"[0] != "a";
                      else if (b == "json")
                        c = s("json-stringify") && s("json-parse");
                      else {
                        var e,
                          f =
                            '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                        if (b == "json-stringify") {
                          var h = a.stringify,
                            j = typeof h == "function" && r;
                          if (j) {
                            (e = function () {
                              return 1;
                            }).toJSON = e;
                            try {
                              j =
                                h(0) === "0" &&
                                h(new d()) === "0" &&
                                h(new g()) == '""' &&
                                h(n) === q &&
                                h(q) === q &&
                                h() === q &&
                                h(e) === "1" &&
                                h([e]) == "[1]" &&
                                h([q]) == "[null]" &&
                                h(null) == "null" &&
                                h([q, n, null]) == "[null,null,null]" &&
                                h({ a: [e, !0, !1, null, "\0\b\n\f\r\t"] }) ==
                                  f &&
                                h(null, e) === "1" &&
                                h([1, 2], null, 1) == "[\n 1,\n 2\n]" &&
                                h(new i(-864e13)) ==
                                  '"-271821-04-20T00:00:00.000Z"' &&
                                h(new i(864e13)) ==
                                  '"+275760-09-13T00:00:00.000Z"' &&
                                h(new i(-621987552e5)) ==
                                  '"-000001-01-01T00:00:00.000Z"' &&
                                h(new i(-1)) == '"1969-12-31T23:59:59.999Z"';
                            } catch (a) {
                              j = !1;
                            }
                          }
                          c = j;
                        }
                        if (b == "json-parse") {
                          h = a.parse;
                          if (typeof h == "function")
                            try {
                              if (h("0") === 0 && !h(!1)) {
                                e = h(f);
                                var k = e.a.length == 5 && e.a[0] === 1;
                                if (k) {
                                  try {
                                    k = !h('"\t"');
                                  } catch (a) {}
                                  if (k)
                                    try {
                                      k = h("01") !== 1;
                                    } catch (a) {}
                                  if (k)
                                    try {
                                      k = h("1.") !== 1;
                                    } catch (a) {}
                                }
                              }
                            } catch (a) {
                              k = !1;
                            }
                          c = k;
                        }
                      }
                      return (s[b] = !!c);
                    }
                    if (!s("json")) {
                      var t = "[object Function]",
                        u = "[object Date]",
                        v = "[object Number]",
                        w = "[object String]",
                        x = "[object Array]",
                        y = "[object Boolean]",
                        z = s("bug-string-char-index");
                      if (!r)
                        var A = m.floor,
                          B = [
                            0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304,
                            334,
                          ],
                          C = function (a, b) {
                            return (
                              B[b] +
                              365 * (a - 1970) +
                              A((a - 1969 + (b = +(b > 1))) / 4) -
                              A((a - 1901 + b) / 100) +
                              A((a - 1601 + b) / 400)
                            );
                          };
                      (o = b.hasOwnProperty) ||
                        (o = function (a) {
                          var b = {},
                            c;
                          ((b.__proto__ = null),
                          (b.__proto__ = { toString: 1 }),
                          b).toString != n
                            ? (o = function (a) {
                                var b = this.__proto__;
                                a = a in ((this.__proto__ = null), this);
                                this.__proto__ = b;
                                return a;
                              })
                            : ((c = b.constructor),
                              (o = function (a) {
                                var b = (this.constructor || c).prototype;
                                return (
                                  a in this && !(a in b && this[a] === b[a])
                                );
                              }));
                          return o.call(this, a);
                        });
                      p = function (a, b) {
                        var d = 0,
                          e,
                          f;
                        (e = function () {
                          this.valueOf = 0;
                        }).prototype.valueOf = 0;
                        f = new e();
                        for (e in f) o.call(f, e) && d++;
                        f = null;
                        !d
                          ? ((f = [
                              "valueOf",
                              "toString",
                              "toLocaleString",
                              "propertyIsEnumerable",
                              "isPrototypeOf",
                              "hasOwnProperty",
                              "constructor",
                            ]),
                            (p = function (a, b) {
                              var d = n.call(a) == t,
                                e,
                                g =
                                  (!d &&
                                    typeof a.constructor != "function" &&
                                    c[typeof a.hasOwnProperty] &&
                                    a.hasOwnProperty) ||
                                  o;
                              for (e in a)
                                !(d && e == "prototype") &&
                                  g.call(a, e) &&
                                  b(e);
                              for (
                                d = f.length;
                                (e = f[--d]);
                                g.call(a, e) && b(e)
                              );
                            }))
                          : d == 2
                          ? (p = function (a, b) {
                              var c = {},
                                d = n.call(a) == t,
                                e;
                              for (e in a)
                                !(d && e == "prototype") &&
                                  !o.call(c, e) &&
                                  (c[e] = 1) &&
                                  o.call(a, e) &&
                                  b(e);
                            })
                          : (p = function (a, b) {
                              var c = n.call(a) == t,
                                d,
                                e;
                              for (d in a)
                                !(c && d == "prototype") &&
                                  o.call(a, d) &&
                                  !(e = d === "constructor") &&
                                  b(d);
                              (e || o.call(a, (d = "constructor"))) && b(d);
                            });
                        return p(a, b);
                      };
                      if (!s("json-stringify")) {
                        var D = {
                            92: "\\\\",
                            34: '\\"',
                            8: "\\b",
                            12: "\\f",
                            10: "\\n",
                            13: "\\r",
                            9: "\\t",
                          },
                          E = "000000",
                          F = function (a, b) {
                            return (E + (b || 0)).slice(-a);
                          },
                          G = "\\u00",
                          H = function (a) {
                            var b = '"',
                              c = 0,
                              d = a.length,
                              e = !z || d > 10,
                              f = e && (z ? a.split("") : a);
                            for (; c < d; c++) {
                              var g = a.charCodeAt(c);
                              switch (g) {
                                case 8:
                                case 9:
                                case 10:
                                case 12:
                                case 13:
                                case 34:
                                case 92:
                                  b += D[g];
                                  break;
                                default:
                                  if (g < 32) {
                                    b += G + F(2, g.toString(16));
                                    break;
                                  }
                                  b += e ? f[c] : a.charAt(c);
                              }
                            }
                            return b + '"';
                          },
                          I = function (a, b, c, d, e, f, g) {
                            var h, i, j, k, m, r, s, t, z, B;
                            try {
                              h = b[a];
                            } catch (a) {}
                            if (typeof h == "object" && h) {
                              i = n.call(h);
                              if (i == u && !o.call(h, "toJSON"))
                                if (h > -1 / 0 && h < 1 / 0) {
                                  if (C) {
                                    m = A(h / 864e5);
                                    for (
                                      j = A(m / 365.2425) + 1970 - 1;
                                      C(j + 1, 0) <= m;
                                      j++
                                    );
                                    for (
                                      k = A((m - C(j, 0)) / 30.42);
                                      C(j, k + 1) <= m;
                                      k++
                                    );
                                    m = 1 + m - C(j, k);
                                    r = ((h % 864e5) + 864e5) % 864e5;
                                    s = A(r / 36e5) % 24;
                                    t = A(r / 6e4) % 60;
                                    z = A(r / 1e3) % 60;
                                    r = r % 1e3;
                                  } else
                                    (j = h.getUTCFullYear()),
                                      (k = h.getUTCMonth()),
                                      (m = h.getUTCDate()),
                                      (s = h.getUTCHours()),
                                      (t = h.getUTCMinutes()),
                                      (z = h.getUTCSeconds()),
                                      (r = h.getUTCMilliseconds());
                                  h =
                                    (j <= 0 || j >= 1e4
                                      ? (j < 0 ? "-" : "+") +
                                        F(6, j < 0 ? -j : j)
                                      : F(4, j)) +
                                    "-" +
                                    F(2, k + 1) +
                                    "-" +
                                    F(2, m) +
                                    "T" +
                                    F(2, s) +
                                    ":" +
                                    F(2, t) +
                                    ":" +
                                    F(2, z) +
                                    "." +
                                    F(3, r) +
                                    "Z";
                                } else h = null;
                              else
                                typeof h.toJSON == "function" &&
                                  ((i != v && i != w && i != x) ||
                                    o.call(h, "toJSON")) &&
                                  (h = h.toJSON(a));
                            }
                            c && (h = c.call(b, a, h));
                            if (h === null) return "null";
                            i = n.call(h);
                            if (i == y) return "" + h;
                            else if (i == v)
                              return h > -1 / 0 && h < 1 / 0 ? "" + h : "null";
                            else if (i == w) return H("" + h);
                            if (typeof h == "object") {
                              for (j = g.length; j--; )
                                if (g[j] === h) throw l();
                              g.push(h);
                              B = [];
                              k = f;
                              f += e;
                              if (i == x) {
                                for (m = 0, j = h.length; m < j; m++)
                                  (s = I(m, h, c, d, e, f, g)),
                                    B.push(s === q ? "null" : s);
                                t = B.length
                                  ? e
                                    ? "[\n" +
                                      f +
                                      B.join(",\n" + f) +
                                      "\n" +
                                      k +
                                      "]"
                                    : "[" + B.join(",") + "]"
                                  : "[]";
                              } else
                                p(d || h, function (a) {
                                  var b = I(a, h, c, d, e, f, g);
                                  b !== q &&
                                    B.push(H(a) + ":" + (e ? " " : "") + b);
                                }),
                                  (t = B.length
                                    ? e
                                      ? "{\n" +
                                        f +
                                        B.join(",\n" + f) +
                                        "\n" +
                                        k +
                                        "}"
                                      : "{" + B.join(",") + "}"
                                    : "{}");
                              g.pop();
                              return t;
                            }
                          };
                        a.stringify = function (a, b, d) {
                          var e, f, g, h;
                          if (c[typeof b] && b)
                            if ((h = n.call(b)) == t) f = b;
                            else if (h == x) {
                              g = {};
                              for (
                                var i = 0, j = b.length, k;
                                i < j;
                                k = b[i++],
                                  ((h = n.call(k)), h == w || h == v) &&
                                    (g[k] = 1)
                              );
                            }
                          if (d)
                            if ((h = n.call(d)) == v) {
                              if ((d -= d % 1) > 0)
                                for (
                                  e = "", d > 10 && (d = 10);
                                  e.length < d;
                                  e += " "
                                );
                            } else
                              h == w &&
                                (e = d.length <= 10 ? d : d.slice(0, 10));
                          return I(
                            "",
                            ((k = {}), (k[""] = a), k),
                            f,
                            g,
                            e,
                            "",
                            []
                          );
                        };
                      }
                      if (!s("json-parse")) {
                        var J = g.fromCharCode,
                          K = {
                            92: "\\",
                            34: '"',
                            47: "/",
                            98: "\b",
                            116: "\t",
                            110: "\n",
                            102: "\f",
                            114: "\r",
                          },
                          L,
                          M,
                          N = function () {
                            L = M = null;
                            throw j();
                          },
                          O = function () {
                            var a = M,
                              b = a.length,
                              c,
                              d,
                              e,
                              f,
                              g;
                            while (L < b) {
                              g = a.charCodeAt(L);
                              switch (g) {
                                case 9:
                                case 10:
                                case 13:
                                case 32:
                                  L++;
                                  break;
                                case 123:
                                case 125:
                                case 91:
                                case 93:
                                case 58:
                                case 44:
                                  c = z ? a.charAt(L) : a[L];
                                  L++;
                                  return c;
                                case 34:
                                  for (c = "@", L++; L < b; ) {
                                    g = a.charCodeAt(L);
                                    if (g < 32) N();
                                    else if (g == 92) {
                                      g = a.charCodeAt(++L);
                                      switch (g) {
                                        case 92:
                                        case 34:
                                        case 47:
                                        case 98:
                                        case 116:
                                        case 110:
                                        case 102:
                                        case 114:
                                          c += K[g];
                                          L++;
                                          break;
                                        case 117:
                                          d = ++L;
                                          for (e = L + 4; L < e; L++)
                                            (g = a.charCodeAt(L)),
                                              (g >= 48 && g <= 57) ||
                                                (g >= 97 && g <= 102) ||
                                                (g >= 65 && g <= 70) ||
                                                N();
                                          c += J("0x" + a.slice(d, L));
                                          break;
                                        default:
                                          N();
                                      }
                                    } else {
                                      if (g == 34) break;
                                      g = a.charCodeAt(L);
                                      d = L;
                                      while (g >= 32 && g != 92 && g != 34)
                                        g = a.charCodeAt(++L);
                                      c += a.slice(d, L);
                                    }
                                  }
                                  if (a.charCodeAt(L) == 34) {
                                    L++;
                                    return c;
                                  }
                                  N();
                                default:
                                  d = L;
                                  g == 45 &&
                                    ((f = !0), (g = a.charCodeAt(++L)));
                                  if (g >= 48 && g <= 57) {
                                    g == 48 &&
                                      ((g = a.charCodeAt(L + 1)),
                                      g >= 48 && g <= 57) &&
                                      N();
                                    f = !1;
                                    for (
                                      ;
                                      L < b &&
                                      ((g = a.charCodeAt(L)),
                                      g >= 48 && g <= 57);
                                      L++
                                    );
                                    if (a.charCodeAt(L) == 46) {
                                      e = ++L;
                                      for (
                                        ;
                                        e < b &&
                                        ((g = a.charCodeAt(e)),
                                        g >= 48 && g <= 57);
                                        e++
                                      );
                                      e == L && N();
                                      L = e;
                                    }
                                    g = a.charCodeAt(L);
                                    if (g == 101 || g == 69) {
                                      g = a.charCodeAt(++L);
                                      (g == 43 || g == 45) && L++;
                                      for (
                                        e = L;
                                        e < b &&
                                        ((g = a.charCodeAt(e)),
                                        g >= 48 && g <= 57);
                                        e++
                                      );
                                      e == L && N();
                                      L = e;
                                    }
                                    return +a.slice(d, L);
                                  }
                                  f && N();
                                  if (a.slice(L, L + 4) == "true") {
                                    L += 4;
                                    return !0;
                                  } else if (a.slice(L, L + 5) == "false") {
                                    L += 5;
                                    return !1;
                                  } else if (a.slice(L, L + 4) == "null") {
                                    L += 4;
                                    return null;
                                  }
                                  N();
                              }
                            }
                            return "$";
                          },
                          P = function (a) {
                            var b, c;
                            a == "$" && N();
                            if (typeof a == "string") {
                              if ((z ? a.charAt(0) : a[0]) == "@")
                                return a.slice(1);
                              if (a == "[") {
                                b = [];
                                for (; ; c || (c = !0)) {
                                  a = O();
                                  if (a == "]") break;
                                  c &&
                                    (a == ","
                                      ? ((a = O()), a == "]" && N())
                                      : N());
                                  a == "," && N();
                                  b.push(P(a));
                                }
                                return b;
                              } else if (a == "{") {
                                b = {};
                                for (; ; c || (c = !0)) {
                                  a = O();
                                  if (a == "}") break;
                                  c &&
                                    (a == ","
                                      ? ((a = O()), a == "}" && N())
                                      : N());
                                  (a == "," ||
                                    typeof a != "string" ||
                                    (z ? a.charAt(0) : a[0]) != "@" ||
                                    O() != ":") &&
                                    N();
                                  b[a.slice(1)] = P(O());
                                }
                                return b;
                              }
                              N();
                            }
                            return a;
                          },
                          Q = function (a, b, c) {
                            c = R(a, b, c);
                            c === q ? delete a[b] : (a[b] = c);
                          },
                          R = function (a, b, c) {
                            var d = a[b],
                              e;
                            if (typeof d == "object" && d)
                              if (n.call(d) == x)
                                for (e = d.length; e--; ) Q(d, e, c);
                              else
                                p(d, function (a) {
                                  Q(d, a, c);
                                });
                            return c.call(a, b, d);
                          };
                        a.parse = function (a, b) {
                          var c;
                          L = 0;
                          M = "" + a;
                          a = P(O());
                          O() != "$" && N();
                          L = M = null;
                          return b && n.call(b) == t
                            ? R(((c = {}), (c[""] = a), c), "", b)
                            : a;
                        };
                      }
                    }
                    a.runInContext = k;
                    return a;
                  }
                  if (d && !b) k(e, d);
                  else {
                    var l = e.JSON,
                      m = e.JSON3,
                      n = !1,
                      o = k(
                        e,
                        (e.JSON3 = {
                          noConflict: function () {
                            n ||
                              ((n = !0),
                              (e.JSON = l),
                              (e.JSON3 = m),
                              (l = m = null));
                            return o;
                          },
                        })
                      );
                    e.JSON = { parse: o.parse, stringify: o.stringify };
                  }
                  b &&
                    i(function () {
                      return o;
                    });
                }.call(this));
              }
              var k = !1;
              function l() {
                k || ((k = !0), j());
                return h.exports;
              }
              function b(a) {
                switch (a) {
                  case void 0:
                    return l();
                }
              }
              e.exports = b;
            },
            null
          );
          __d(
            "json3",
            ["json3-3.3.2"],
            function (a, b, c, d, e, f) {
              e.exports = b("json3-3.3.2")();
            },
            null
          );
          __d(
            "ES",
            [
              "ES5FunctionPrototype",
              "ES5StringPrototype",
              "ES6Array",
              "ES6ArrayPrototype",
              "ES6Number",
              "ES6Object",
              "ES7ArrayPrototype",
              "ES7Object",
              "ES7StringPrototype",
              "json3",
            ],
            function (a, b, c, d, e, f, g) {
              var h = {}.toString,
                i = {
                  "JSON.stringify": c("json3").stringify,
                  "JSON.parse": c("json3").parse,
                };
              d = {
                "Function.prototype": c("ES5FunctionPrototype"),
                "String.prototype": c("ES5StringPrototype"),
              };
              e = {
                Object: c("ES6Object"),
                "Array.prototype": c("ES6ArrayPrototype"),
                Number: c("ES6Number"),
                Array: c("ES6Array"),
              };
              f = {
                Object: c("ES7Object"),
                "String.prototype": c("ES7StringPrototype"),
                "Array.prototype": c("ES7ArrayPrototype"),
              };
              function a(a) {
                for (var b in a) {
                  if (!Object.prototype.hasOwnProperty.call(a, b)) continue;
                  var c = a[b],
                    d = b.split(".");
                  if (d.length === 2) {
                    var e = d[0],
                      f = d[1];
                    if (!e || !f || !window[e] || !window[e][f]) {
                      var g = e ? window[e] : "-",
                        h = e && window[e] && f ? window[e][f] : "-";
                      throw new Error(
                        "Unexpected state (t11975770): " +
                          (e + ", " + f + ", " + g + ", " + h + ", " + b)
                      );
                    }
                  }
                  e = d.length === 2 ? window[d[0]][d[1]] : window[b];
                  for (f in c) {
                    if (!Object.prototype.hasOwnProperty.call(c, f)) continue;
                    if (typeof c[f] !== "function") {
                      i[b + "." + f] = c[f];
                      continue;
                    }
                    g = e[f];
                    i[b + "." + f] =
                      g && /\{\s+\[native code\]\s\}/.test(g) ? g : c[f];
                  }
                }
              }
              a(d);
              a(e);
              a(f);
              function b(a, b, c) {
                var d = c ? h.call(a).slice(8, -1) + ".prototype" : a,
                  e;
                if (Array.isArray(a))
                  if (typeof d === "string") e = i[d + "." + b];
                  else
                    throw new Error(
                      "Can't polyfill " + b + " directly on an Array."
                    );
                else if (typeof d === "string") e = i[d + "." + b];
                else if (typeof a === "string")
                  throw new Error(
                    "Can't polyfill " + b + " directly on a string."
                  );
                else e = a[b];
                if (typeof e === "function") {
                  for (
                    var f = arguments.length,
                      g = new Array(f > 3 ? f - 3 : 0),
                      j = 3;
                    j < f;
                    j++
                  )
                    g[j - 3] = arguments[j];
                  return e.apply(a, g);
                } else if (e) return e;
                throw new Error(
                  "Polyfill " + d + " does not have implementation of " + b
                );
              }
              g["default"] = b;
            },
            98
          );
          __d(
            "ES5Object",
            [],
            function (a, b, c, d, e, f) {
              var g = {}.hasOwnProperty;
              a = {
                create: function (a) {
                  var b = typeof a;
                  if (b != "object" && b != "function")
                    throw new TypeError(
                      "Object prototype may only be a Object or null"
                    );
                  h.prototype = a;
                  return new h();
                },
                keys: function (a) {
                  var b = typeof a;
                  if ((b != "object" && b != "function") || a === null)
                    throw new TypeError("Object.keys called on non-object");
                  b = [];
                  for (var c in a) g.call(a, c) && b.push(c);
                  return b;
                },
                freeze: function (a) {
                  return a;
                },
                isFrozen: function () {
                  return !1;
                },
                seal: function (a) {
                  return a;
                },
              };
              function h() {}
              b = a;
              f["default"] = b;
            },
            66
          );
          __d(
            "sdk.babelHelpers",
            ["ES5FunctionPrototype", "ES5Object", "ES6Object"],
            function (a, b, c, d, e, f) {
              var g = {},
                h = Object.prototype.hasOwnProperty;
              g.inheritsLoose = function (a, c) {
                b("ES6Object").assign(a, c);
                a.prototype = b("ES5Object").create(c && c.prototype);
                a.prototype.constructor = a;
                a.__superConstructor__ = c;
                return c;
              };
              g.inherits = g.inheritsLoose;
              g.wrapNativeSuper = function (a) {
                var b = typeof Map === "function" ? new Map() : void 0;
                g.wrapNativeSuper = function (a) {
                  if (a === null) return null;
                  if (typeof a !== "function")
                    throw new TypeError(
                      "Super expression must either be null or a function"
                    );
                  if (b !== void 0) {
                    if (b.has(a)) return b.get(a);
                    b.set(a, c);
                  }
                  g.inheritsLoose(c, a);
                  function c() {
                    a.apply(this, arguments);
                  }
                  return c;
                };
                return g.wrapNativeSuper(a);
              };
              g.assertThisInitialized = function (a) {
                if (a === void 0)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return a;
              };
              g._extends = b("ES6Object").assign;
              g["extends"] = g._extends;
              g.construct = function (a, b) {
                var c = [null];
                c.push.apply(c, b);
                return new (Function.prototype.bind.apply(a, c))();
              };
              g.objectWithoutPropertiesLoose = function (a, b) {
                var c = {};
                for (var d in a) {
                  if (!h.call(a, d) || b.indexOf(d) >= 0) continue;
                  c[d] = a[d];
                }
                return c;
              };
              g.objectWithoutProperties = g.objectWithoutPropertiesLoose;
              g.taggedTemplateLiteralLoose = function (a, b) {
                b || (b = a.slice(0));
                a.raw = b;
                return a;
              };
              g.bind = b("ES5FunctionPrototype").bind;
              e.exports = g;
            },
            null
          );
          var ES = require("ES");
          var babelHelpers = require("sdk.babelHelpers");
          (function (a, b) {
            var c = "keys",
              d = "values",
              e = "entries",
              f = (function () {
                var a = h(Array),
                  b;
                a ||
                  (b = (function () {
                    "use strict";
                    function a(a, b) {
                      (this.$1 = a), (this.$2 = b), (this.$3 = 0);
                    }
                    var b = a.prototype;
                    b.next = function () {
                      if (this.$1 == null) return { value: void 0, done: !0 };
                      var a = this.$1,
                        b = this.$1.length,
                        f = this.$3,
                        g = this.$2;
                      if (f >= b) {
                        this.$1 = void 0;
                        return { value: void 0, done: !0 };
                      }
                      this.$3 = f + 1;
                      if (g === c) return { value: f, done: !1 };
                      else if (g === d) return { value: a[f], done: !1 };
                      else if (g === e) return { value: [f, a[f]], done: !1 };
                    };
                    b[
                      typeof Symbol === "function"
                        ? Symbol.iterator
                        : "@@iterator"
                    ] = function () {
                      return this;
                    };
                    return a;
                  })());
                return {
                  keys: a
                    ? function (a) {
                        return a.keys();
                      }
                    : function (a) {
                        return new b(a, c);
                      },
                  values: a
                    ? function (a) {
                        return a.values();
                      }
                    : function (a) {
                        return new b(a, d);
                      },
                  entries: a
                    ? function (a) {
                        return a.entries();
                      }
                    : function (a) {
                        return new b(a, e);
                      },
                };
              })(),
              g = (function () {
                var a = h(String),
                  b;
                a ||
                  (b = (function () {
                    "use strict";
                    function a(a) {
                      (this.$1 = a), (this.$2 = 0);
                    }
                    var b = a.prototype;
                    b.next = function () {
                      if (this.$1 == null) return { value: void 0, done: !0 };
                      var a = this.$2,
                        b = this.$1,
                        c = b.length;
                      if (a >= c) {
                        this.$1 = void 0;
                        return { value: void 0, done: !0 };
                      }
                      var d = b.charCodeAt(a);
                      if (d < 55296 || d > 56319 || a + 1 === c) d = b[a];
                      else {
                        c = b.charCodeAt(a + 1);
                        c < 56320 || c > 57343
                          ? (d = b[a])
                          : (d = b[a] + b[a + 1]);
                      }
                      this.$2 = a + d.length;
                      return { value: d, done: !1 };
                    };
                    b[
                      typeof Symbol === "function"
                        ? Symbol.iterator
                        : "@@iterator"
                    ] = function () {
                      return this;
                    };
                    return a;
                  })());
                return {
                  keys: function () {
                    throw TypeError(
                      "Strings default iterator doesn't implement keys."
                    );
                  },
                  values: a
                    ? function (a) {
                        return a[
                          typeof Symbol === "function"
                            ? Symbol.iterator
                            : "@@iterator"
                        ]();
                      }
                    : function (a) {
                        return new b(a);
                      },
                  entries: function () {
                    throw TypeError(
                      "Strings default iterator doesn't implement entries."
                    );
                  },
                };
              })();
            function h(a) {
              return (
                typeof a.prototype[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ] === "function" &&
                typeof a.prototype.values === "function" &&
                typeof a.prototype.keys === "function" &&
                typeof a.prototype.entries === "function"
              );
            }
            var i = (function () {
                "use strict";
                function a(a, b) {
                  (this.$1 = a),
                    (this.$2 = b),
                    (this.$3 = Object.keys(a)),
                    (this.$4 = 0);
                }
                var b = a.prototype;
                b.next = function () {
                  var a = this.$3.length,
                    b = this.$4,
                    f = this.$2,
                    g = this.$3[b];
                  if (b >= a) {
                    this.$1 = void 0;
                    return { value: void 0, done: !0 };
                  }
                  this.$4 = b + 1;
                  if (f === c) return { value: g, done: !1 };
                  else if (f === d) return { value: this.$1[g], done: !1 };
                  else if (f === e) return { value: [g, this.$1[g]], done: !1 };
                };
                b[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ] = function () {
                  return this;
                };
                return a;
              })(),
              j = {
                keys: function (a) {
                  return new i(a, c);
                },
                values: function (a) {
                  return new i(a, d);
                },
                entries: function (a) {
                  return new i(a, e);
                },
              };
            function k(a, b) {
              if (typeof a === "string") return g[b || d](a);
              else if (Array.isArray(a)) return f[b || d](a);
              else if (
                a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]
              )
                return a[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
              else return j[b || e](a);
            }
            ES("Object", "assign", !1, k, {
              KIND_KEYS: c,
              KIND_VALUES: d,
              KIND_ENTRIES: e,
              keys: function (a) {
                return k(a, c);
              },
              values: function (a) {
                return k(a, d);
              },
              entries: function (a) {
                return k(a, e);
              },
              generic: j.entries,
            });
            a.FB_enumerate = k;
          })(typeof global === "undefined" ? this : global);
          __d("JSSDKCanvasPrefetcherConfig", [], {
            enabled: true,
            excludedAppIds: [144959615576466, 768691303149786, 320528941393723],
            sampleRate: 500,
          });
          __d("JSSDKConfig", [], {
            features: {
              allow_non_canvas_app_events: false,
              error_handling: { rate: 4 },
              e2e_ping_tracking: { rate: 0.1 },
              xd_timeout: { rate: 1, value: 60000 },
              use_bundle: false,
              should_log_response_error: true,
              popup_blocker_scribe_logging: { rate: 100 },
              https_only_enforce_starting: 2538809200000,
              https_only_learn_more:
                "https://developers.facebook.com/blog/post/2018/06/08/enforce-https-facebook-login/",
              https_only_scribe_logging: { rate: 1 },
              log_perf: { rate: 0.001 },
              use_x_xd: { rate: 100 },
              cache_auth_response: { rate: 100 },
              oauth_funnel_logger_version: 1,
              force_popup_to_canvas_apps_with_id: [],
              force_popup_to_all_canvas_app: false,
              max_oauth_dialog_retries: { rate: 100, value: 10 },
              plugin_tags_blacklist: [],
              idle_callback_wait_time_ms: 3000,
              chat_plugin_facade_timeout_ms: 8000,
              chat_plugin_facade_enabled_pageids: [
                "102493178867330",
                "107331571710078",
                "1032787970130843",
                "107771111665395",
                "261907812360345",
                "101305975654752",
                "275483104252055",
                "101664622285042",
                "112682113428700",
                "271628573687012",
                "385757598521443",
                "100545935690488",
              ],
              should_enable_ig_login_status_fetch: true,
              log_cookies_usage: { rate: 0.1 },
              allow_shadow_dom_for_apps_with_id: [
                520916077950649, 152351391599356, 132081130190180,
                468663283258845, 409976882430412, 189845245141894, 360467581347,
                274266067164,
              ],
              allow_shadow_dom: true,
              xfoa_login_enabled: false,
            },
          });
          __d("JSSDKCssConfig", [], {
            rules:
              ".fb_hidden{position:absolute;top:-10000px;z-index:10001}.fb_reposition{overflow:hidden;position:relative}.fb_invisible{display:none}.fb_reset{background:none;border:0;border-spacing:0;color:#000;cursor:auto;direction:ltr;font-family:'lucida grande', tahoma, verdana, arial, sans-serif;font-size:11px;font-style:normal;font-variant:normal;font-weight:normal;letter-spacing:normal;line-height:1;margin:0;overflow:visible;padding:0;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;visibility:visible;white-space:normal;word-spacing:normal}.fb_reset>div{overflow:hidden}\u0040keyframes fb_transform{from{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}.fb_animate{animation:fb_transform .3s forwards}\n.fb_hidden{position:absolute;top:-10000px;z-index:10001}.fb_reposition{overflow:hidden;position:relative}.fb_invisible{display:none}.fb_reset{background:none;border:0;border-spacing:0;color:#000;cursor:auto;direction:ltr;font-family:'lucida grande', tahoma, verdana, arial, sans-serif;font-size:11px;font-style:normal;font-variant:normal;font-weight:normal;letter-spacing:normal;line-height:1;margin:0;overflow:visible;padding:0;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;visibility:visible;white-space:normal;word-spacing:normal}.fb_reset>div{overflow:hidden}\u0040keyframes fb_transform{from{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}.fb_animate{animation:fb_transform .3s forwards}\n.fb_dialog{background:rgba(82, 82, 82, .7);position:absolute;top:-10000px;z-index:10001}.fb_dialog_advanced{border-radius:8px;padding:10px}.fb_dialog_content{background:#fff;color:#373737}.fb_dialog_close_icon{background:url(https://connect.facebook.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 0 transparent;cursor:pointer;display:block;height:15px;position:absolute;right:18px;top:17px;width:15px}.fb_dialog_mobile .fb_dialog_close_icon{left:5px;right:auto;top:5px}.fb_dialog_padding{background-color:transparent;position:absolute;width:1px;z-index:-1}.fb_dialog_close_icon:hover{background:url(https://connect.facebook.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 -15px transparent}.fb_dialog_close_icon:active{background:url(https://connect.facebook.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 -30px transparent}.fb_dialog_iframe{line-height:0}.fb_dialog_content .dialog_title{background:#6d84b4;border:1px solid #365899;color:#fff;font-size:14px;font-weight:bold;margin:0}.fb_dialog_content .dialog_title>span{background:url(https://connect.facebook.net/rsrc.php/v3/yd/r/Cou7n-nqK52.gif) no-repeat 5px 50\u0025;float:left;padding:5px 0 7px 26px}body.fb_hidden{height:100\u0025;left:0;margin:0;overflow:visible;position:absolute;top:-10000px;transform:none;width:100\u0025}.fb_dialog.fb_dialog_mobile.loading{background:url(https://connect.facebook.net/rsrc.php/v3/ya/r/3rhSv5V8j3o.gif) white no-repeat 50\u0025 50\u0025;min-height:100\u0025;min-width:100\u0025;overflow:hidden;position:absolute;top:0;z-index:10001}.fb_dialog.fb_dialog_mobile.loading.centered{background:none;height:auto;min-height:initial;min-width:initial;width:auto}.fb_dialog.fb_dialog_mobile.loading.centered #fb_dialog_loader_spinner{width:100\u0025}.fb_dialog.fb_dialog_mobile.loading.centered .fb_dialog_content{background:none}.loading.centered #fb_dialog_loader_close{clear:both;color:#fff;display:block;font-size:18px;padding-top:20px}#fb-root #fb_dialog_ipad_overlay{background:rgba(0, 0, 0, .4);bottom:0;left:0;min-height:100\u0025;position:absolute;right:0;top:0;width:100\u0025;z-index:10000}#fb-root #fb_dialog_ipad_overlay.hidden{display:none}.fb_dialog.fb_dialog_mobile.loading iframe{visibility:hidden}.fb_dialog_mobile .fb_dialog_iframe{position:sticky;top:0}.fb_dialog_content .dialog_header{background:linear-gradient(from(#738aba), to(#2c4987));border-bottom:1px solid;border-color:#043b87;box-shadow:white 0 1px 1px -1px inset;color:#fff;font:bold 14px Helvetica, sans-serif;text-overflow:ellipsis;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0;vertical-align:middle;white-space:nowrap}.fb_dialog_content .dialog_header table{height:43px;width:100\u0025}.fb_dialog_content .dialog_header td.header_left{font-size:12px;padding-left:5px;vertical-align:middle;width:60px}.fb_dialog_content .dialog_header td.header_right{font-size:12px;padding-right:5px;vertical-align:middle;width:60px}.fb_dialog_content .touchable_button{background:linear-gradient(from(#4267B2), to(#2a4887));background-clip:padding-box;border:1px solid #29487d;border-radius:3px;display:inline-block;line-height:18px;margin-top:3px;max-width:85px;padding:4px 12px;position:relative}.fb_dialog_content .dialog_header .touchable_button input{background:none;border:none;color:#fff;font:bold 12px Helvetica, sans-serif;margin:2px -12px;padding:2px 6px 3px 6px;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0}.fb_dialog_content .dialog_header .header_center{color:#fff;font-size:16px;font-weight:bold;line-height:18px;text-align:center;vertical-align:middle}.fb_dialog_content .dialog_content{background:url(https://connect.facebook.net/rsrc.php/v3/y9/r/jKEcVPZFk-2.gif) no-repeat 50\u0025 50\u0025;border:1px solid #4a4a4a;border-bottom:0;border-top:0;height:150px}.fb_dialog_content .dialog_footer{background:#f5f6f7;border:1px solid #4a4a4a;border-top-color:#ccc;height:40px}#fb_dialog_loader_close{float:left}.fb_dialog.fb_dialog_mobile .fb_dialog_close_icon{visibility:hidden}#fb_dialog_loader_spinner{animation:rotateSpinner 1.2s linear infinite;background-color:transparent;background-image:url(https://connect.facebook.net/rsrc.php/v3/yD/r/t-wz8gw1xG1.png);background-position:50\u0025 50\u0025;background-repeat:no-repeat;height:24px;width:24px}\u0040keyframes rotateSpinner{0\u0025{transform:rotate(0deg)}100\u0025{transform:rotate(360deg)}}\n.fb_iframe_widget{display:inline-block;position:relative}.fb_iframe_widget span{display:inline-block;position:relative;text-align:justify}.fb_iframe_widget iframe{position:absolute}.fb_iframe_widget_fluid_desktop,.fb_iframe_widget_fluid_desktop span,.fb_iframe_widget_fluid_desktop iframe{max-width:100\u0025}.fb_iframe_widget_fluid_desktop iframe{min-width:220px;position:relative}.fb_iframe_widget_lift{z-index:1}.fb_iframe_widget_fluid{display:inline}.fb_iframe_widget_fluid span{width:100\u0025}\n.fb_mpn_mobile_landing_page_slide_out{animation-duration:200ms;animation-name:fb_mpn_landing_page_slide_out;transition-timing-function:ease-in}.fb_mpn_mobile_landing_page_slide_out_from_left{animation-duration:200ms;animation-name:fb_mpn_landing_page_slide_out_from_left;transition-timing-function:ease-in}.fb_mpn_mobile_landing_page_slide_up{animation-duration:500ms;animation-name:fb_mpn_landing_page_slide_up;transition-timing-function:ease-in}.fb_mpn_mobile_bounce_in{animation-duration:300ms;animation-name:fb_mpn_bounce_in;transition-timing-function:ease-in}.fb_mpn_mobile_bounce_out{animation-duration:300ms;animation-name:fb_mpn_bounce_out;transition-timing-function:ease-in}.fb_mpn_mobile_bounce_out_v2{animation-duration:300ms;animation-name:fb_mpn_fade_out;transition-timing-function:ease-in}.fb_customer_chat_bounce_in_v2{animation-duration:300ms;animation-name:fb_bounce_in_v2;transition-timing-function:ease-in}.fb_customer_chat_bounce_in_from_left{animation-duration:300ms;animation-name:fb_bounce_in_from_left;transition-timing-function:ease-in}.fb_customer_chat_bounce_out_v2{animation-duration:300ms;animation-name:fb_bounce_out_v2;transition-timing-function:ease-in}.fb_customer_chat_bounce_out_from_left{animation-duration:300ms;animation-name:fb_bounce_out_from_left;transition-timing-function:ease-in}.fb_invisible_flow{display:inherit;height:0;overflow-x:hidden;width:0}\u0040keyframes fb_mpn_landing_page_slide_out{0\u0025{margin:0 12px;width:100\u0025 - 24px}60\u0025{border-radius:18px}100\u0025{border-radius:50\u0025;margin:0 24px;width:60px}}\u0040keyframes fb_mpn_landing_page_slide_out_from_left{0\u0025{left:12px;width:100\u0025 - 24px}60\u0025{border-radius:18px}100\u0025{border-radius:50\u0025;left:12px;width:60px}}\u0040keyframes fb_mpn_landing_page_slide_up{0\u0025{bottom:0;opacity:0}100\u0025{bottom:24px;opacity:1}}\u0040keyframes fb_mpn_bounce_in{0\u0025{opacity:.5;top:100\u0025}100\u0025{opacity:1;top:0}}\u0040keyframes fb_mpn_fade_out{0\u0025{bottom:30px;opacity:1}100\u0025{bottom:0;opacity:0}}\u0040keyframes fb_mpn_bounce_out{0\u0025{opacity:1;top:0}100\u0025{opacity:.5;top:100\u0025}}\u0040keyframes fb_bounce_in_v2{0\u0025{opacity:0;transform:scale(0, 0);transform-origin:bottom right}50\u0025{transform:scale(1.03, 1.03);transform-origin:bottom right}100\u0025{opacity:1;transform:scale(1, 1);transform-origin:bottom right}}\u0040keyframes fb_bounce_in_from_left{0\u0025{opacity:0;transform:scale(0, 0);transform-origin:bottom left}50\u0025{transform:scale(1.03, 1.03);transform-origin:bottom left}100\u0025{opacity:1;transform:scale(1, 1);transform-origin:bottom left}}\u0040keyframes fb_bounce_out_v2{0\u0025{opacity:1;transform:scale(1, 1);transform-origin:bottom right}100\u0025{opacity:0;transform:scale(0, 0);transform-origin:bottom right}}\u0040keyframes fb_bounce_out_from_left{0\u0025{opacity:1;transform:scale(1, 1);transform-origin:bottom left}100\u0025{opacity:0;transform:scale(0, 0);transform-origin:bottom left}}\u0040keyframes slideInFromBottom{0\u0025{opacity:.1;transform:translateY(100\u0025)}100\u0025{opacity:1;transform:translateY(0)}}\u0040keyframes slideInFromBottomDelay{0\u0025{opacity:0;transform:translateY(100\u0025)}97\u0025{opacity:0;transform:translateY(100\u0025)}100\u0025{opacity:1;transform:translateY(0)}}",
            components: [
              "css:fb.css.base",
              "css:fb.css.dialog",
              "css:fb.css.iframewidget",
              "css:fb.css.customer_chat_plugin_iframe",
            ],
          });
          __d("JSSDKRuntimeConfig", [], {
            locale: "en_US",
            revision: "1006801365",
            rtl: false,
            sdkab: null,
            sdkns: "",
            sdkurl: "https://connect.facebook.net/en_US/sdk.js",
            scribeurl: "https://www.facebook.com/platform/scribe_endpoint.php/",
          });
          __d("JSSDKXDConfig", [], {
            XXdUrl: "/x/connect/xd_arbiter/?version=46",
            useCdn: true,
          });
          __d("UrlMapConfig", [], {
            www: "www.facebook.com",
            m: "m.facebook.com",
            business: "business.facebook.com",
            api: "api.facebook.com",
            api_read: "api-read.facebook.com",
            graph: "graph.facebook.com",
            an: "an.facebook.com",
            fbcdn: "static.xx.fbcdn.net",
            cdn: "staticxx.facebook.com",
            graph_facebook: "graph.facebook.com",
            graph_gaming: "graph.fb.gg",
            graph_instagram: "graph.instagram.com",
            www_instagram: "www.instagram.com",
            social_plugin: "socialplugin.facebook.net",
          });
          __d("JSSDKShadowCssConfig", [], {
            "css:fb.shadow.css.fb_login_button":
              ".fb_login_button_container{align-content:center;align-items:center;border:0;color:#fff;display:flex;font-family:'Roboto', 'Freight Sans LF Pro', Helvetica, Arial, 'Lucida Grande', sans-serif;font-weight:bold;margin:auto}.fb-button-main-element{display:flex;flex-wrap:nowrap;overflow:hidden}.fb-iframe-overlay{display:flex}.fb-button-main-element:hover{cursor:pointer}.fb-button-main-element:focus{filter:brightness(80\u0025)}.fb_button_label_element{align-items:center;display:flex;font-weight:bold;justify-content:center}.fb_button_label{margin:auto;pointer-events:none}.fb_button_svg_logo{height:1.33em;margin-left:.4em;margin-right:.4em;padding:.065em}.login_fb_logo .f_logo_f{fill:transparent}.single_button_svg_logo{margin-bottom:.08em}",
          });
          __d(
            "DOMWrapper",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              var g, h;
              function a(a) {
                g = a;
              }
              function b() {
                return g || document.body;
              }
              function c(a) {
                h = a;
              }
              function d() {
                return h || self;
              }
              f.setRoot = a;
              f.getRoot = b;
              f.setWindow = c;
              f.getWindow = d;
            },
            66
          );
          __d(
            "dotAccess",
            [],
            function (a, b, c, d, e, f) {
              function a(a, b, c) {
                b = b.split(".");
                do {
                  var d = b.shift();
                  a = a[d] || (c && (a[d] = {}));
                } while (b.length && a);
                return a;
              }
              f["default"] = a;
            },
            66
          );
          __d(
            "guid",
            [],
            function (a, b, c, d, e, f) {
              function a() {
                return (
                  "f" +
                  (Math.random() * (1 << 30)).toString(16).replace(".", "")
                );
              }
              f["default"] = a;
            },
            66
          );
          __d(
            "wrapFunction",
            [],
            function (a, b, c, d, e, f) {
              var g = {};
              function a(a, b, c) {
                var d = b in g ? g[b](a, c) : a;
                return function () {
                  for (
                    var a = arguments.length, b = new Array(a), c = 0;
                    c < a;
                    c++
                  )
                    b[c] = arguments[c];
                  return d.apply(this, b);
                };
              }
              a.setWrapper = function (a, b) {
                g[b] = a;
              };
              f["default"] = a;
            },
            66
          );
          __d(
            "GlobalCallback",
            ["DOMWrapper", "dotAccess", "guid", "wrapFunction"],
            function (a, b, c, d, e, f, g) {
              var h, i;
              function j(a) {
                (h = c("dotAccess")(d("DOMWrapper").getWindow(), a, !0)),
                  (i = a);
              }
              function a(a, b) {
                h || j("__globalCallbacks");
                var d = c("guid")();
                h[d] = c("wrapFunction")(
                  a,
                  "entry",
                  (a = b) != null ? a : "GlobalCallback"
                );
                return i + "." + d;
              }
              function b(a) {
                a = a.substring(i.length + 1);
                delete h[a];
              }
              g.setPrefix = j;
              g.create = a;
              g.remove = b;
            },
            98
          );
          __d(
            "Log",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              var g = -1;
              b = { DEBUG: 3, INFO: 2, WARNING: 1, ERROR: 0 };
              c = function (a, b, c) {
                for (
                  var d = arguments.length,
                    e = new Array(d > 3 ? d - 3 : 0),
                    f = 3;
                  f < d;
                  f++
                )
                  e[f - 3] = arguments[f];
                var h = 0,
                  i = c.replace(/%s/g, function () {
                    return String(e[h++]);
                  }),
                  j = window.console;
                j && g >= b && j[a in j ? a : "log"](i);
              };
              function a(a) {
                g = a;
              }
              d = ES(c, "bind", !0, null, "debug", b.DEBUG);
              e = ES(c, "bind", !0, null, "info", b.INFO);
              var h = ES(c, "bind", !0, null, "warn", b.WARNING),
                i = ES(c, "bind", !0, null, "error", b.ERROR);
              f.Level = b;
              f.log = c;
              f.setLevel = a;
              f.debug = d;
              f.info = e;
              f.warn = h;
              f.error = i;
            },
            66
          );
          __d(
            "sdk.UA",
            [],
            function (a, b, c, d, e, f) {
              a = navigator.userAgent;
              var g = {
                  iphone: /\b(iPhone|iP[ao]d)/.test(a),
                  ipad: /\b(iP[ao]d)/.test(a),
                  android: /Android/i.test(a),
                  nativeApp: /FBAN\/\w+;/i.test(a) && !/FBAN\/mLite;/.test(a),
                  nativeAndroidApp: /FB_IAB\/\w+;/i.test(a),
                  nativeInstagramApp: /Instagram/i.test(a),
                  nativeMessengeriOSApp: /MessengerForiOS/i.test(a),
                  nativeMessengerAndroidApp: /Orca\-Android/i.test(a),
                  ucBrowser: /UCBrowser/i.test(a),
                },
                h = /Mobile/i.test(a),
                i = {
                  ie: NaN,
                  firefox: NaN,
                  chrome: NaN,
                  webkit: NaN,
                  osx: NaN,
                  edge: NaN,
                  operaMini: NaN,
                  ucWeb: NaN,
                };
              b =
                /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(
                  a
                );
              if (b) {
                i.ie = b[1] ? parseFloat(b[1]) : b[4] ? parseFloat(b[4]) : NaN;
                i.firefox = b[2] || "";
                i.webkit = b[3] || "";
                if (b[3]) {
                  c = /(?:Chrome\/(\d+\.\d+))/.exec(a);
                  i.chrome = c ? c[1] : "";
                  d = /(?:Edge\/(\d+\.\d+))/.exec(a);
                  i.edge = d ? d[1] : "";
                }
              }
              e = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(a);
              e && (i.osx = e[1]);
              b = /(?:Opera Mini\/(\d+(?:\.\d+)?))/.exec(a);
              b && (i.operaMini = b[1]);
              c = /(?:UCWEB\/(\d+(?:\.\d+))?)/.exec(a);
              c && (i.ucWeb = c[1] || "2.0");
              function j(a) {
                return String(a)
                  .split(".")
                  .map(function (a) {
                    return parseFloat(a);
                  });
              }
              var k = {};
              Object.keys(i).map(function (a) {
                var b = function () {
                  return parseFloat(i[a]);
                };
                b.getVersionParts = function () {
                  return j(i[a]);
                };
                k[a] = b;
              });
              Object.keys(g).map(function (a) {
                k[a] = function () {
                  return g[a];
                };
              });
              k.mobile = function () {
                return g.iphone || g.ipad || g.android || h;
              };
              k.mTouch = function () {
                return g.android || g.iphone || g.ipad;
              };
              k.facebookInAppBrowser = function () {
                return g.nativeApp || g.nativeAndroidApp;
              };
              k.inAppBrowser = function () {
                return (
                  g.nativeApp || g.nativeAndroidApp || g.nativeInstagramApp
                );
              };
              k.mBasic = function () {
                return !!(i.ucWeb || i.operaMini);
              };
              k.instagram = function () {
                return g.nativeInstagramApp;
              };
              k.messenger = function () {
                return g.nativeMessengeriOSApp || g.nativeMessengerAndroidApp;
              };
              k.isSupportedIABVersion = function (a) {
                if (!k.facebookInAppBrowser()) return !1;
                var b = /(?:FBAV\/(\d+(\.\d+)+))/.exec(navigator.userAgent);
                if (b) {
                  b = parseFloat(b[1]);
                  if (b >= a) return !0;
                }
                return !1;
              };
              d = k;
              f["default"] = d;
            },
            66
          );
          __d(
            "sdk.domReady",
            [],
            function (a, b, c, d, e, f) {
              var g;
              c =
                "readyState" in document
                  ? /loaded|complete/.test(document.readyState)
                  : !!document.body;
              function a() {
                if (!g) return;
                var a;
                while ((a = g.shift())) a();
                g = null;
              }
              function b(a) {
                if (g) {
                  g.push(a);
                  return;
                } else a();
              }
              c ||
                ((g = []),
                document.addEventListener
                  ? (document.addEventListener("DOMContentLoaded", a, !1),
                    window.addEventListener("load", a, !1))
                  : document.attachEvent &&
                    (document.attachEvent("onreadystatechange", a),
                    window.attachEvent("onload", a)));
              f["default"] = b;
            },
            67
          );
          __d(
            "sdk.Content",
            ["Log", "sdk.UA", "sdk.domReady"],
            function (a, b, c, d, e, f, g) {
              "use strict";
              var h, i;
              function j(a, b) {
                b ||
                  (!h
                    ? ((h = b = document.getElementById("fb-root")),
                      b ||
                        (d("Log").warn(
                          'The "fb-root" div has not been created, auto-creating'
                        ),
                        (h = b = document.createElement("div")),
                        (b.id = "fb-root"),
                        c("sdk.UA").ie() || !document.body
                          ? c("sdk.domReady")(function () {
                              b &&
                                document.body &&
                                document.body.appendChild(b);
                            })
                          : document.body.appendChild(b)),
                      (b.className += " fb_reset"))
                    : (b = h));
                b.appendChild(a);
                return a;
              }
              function k(a) {
                if (!i) {
                  i = document.createElement("div");
                  var b = i.style;
                  b.position = "absolute";
                  b.top = "-10000px";
                  b.width = "0";
                  b.height = "0";
                  i = j(i);
                }
                return j(a, i);
              }
              function a(a, b) {
                var c = document.createElement("form");
                c.action = a.url;
                c.target = a.target;
                c.method = b ? "GET" : "POST";
                k(c);
                for (b in a.params)
                  if (Object.prototype.hasOwnProperty.call(a.params, b)) {
                    var d = a.params[b];
                    if (d != null) {
                      var e = document.createElement("input");
                      e.name = b;
                      e.value = d;
                      c.appendChild(e);
                    }
                  }
                c.submit();
                c.parentNode && c.parentNode.removeChild(c);
              }
              g.append = j;
              g.appendHidden = k;
              g.submitToTarget = a;
            },
            98
          );
          __d(
            "sdk.DOM",
            ["guid", "sdk.domReady"],
            function (a, b, c, d, e, f, g) {
              var h = {},
                i = {};
              function j(a, b) {
                a =
                  a.getAttribute(b) ||
                  a.getAttribute(b.replace(/_/g, "-")) ||
                  a.getAttribute(b.replace(/-/g, "_")) ||
                  a.getAttribute(b.replace(/-/g, "")) ||
                  a.getAttribute(b.replace(/_/g, "")) ||
                  a.getAttribute("data-" + b) ||
                  a.getAttribute("data-" + b.replace(/_/g, "-")) ||
                  a.getAttribute("data-" + b.replace(/-/g, "_")) ||
                  a.getAttribute("data-" + b.replace(/-/g, "")) ||
                  a.getAttribute("data-" + b.replace(/_/g, ""));
                return a != null ? String(a) : null;
              }
              function a(a, b) {
                a = j(a, b);
                return a != null ? /^(true|1|yes|on)$/.test(a) : null;
              }
              function b(a, b) {
                try {
                  a.innerHTML = b;
                } catch (a) {
                  throw new Error("Could not set innerHTML : " + a.message);
                }
              }
              function k(a, b) {
                a = " " + a.className + " ";
                return a.indexOf(" " + b + " ") >= 0;
              }
              function d(a, b) {
                if (a == null) return;
                k(a, b) || (a.className = a.className + " " + b);
              }
              function e(a, b) {
                if (a == null) return;
                b = new RegExp("\\s*" + b, "g");
                a.className = a.className.replace(b, "").trim();
              }
              function f(a, b, c) {
                c === void 0 && (c = "*");
                b = b || document.body;
                if (b == null) return [];
                c = c || "*";
                return ES("Array", "from", !1, b.querySelectorAll(c + "." + a));
              }
              function l(a, b) {
                b = u(b);
                var c = document.defaultView
                  .getComputedStyle(a)
                  .getPropertyValue(b);
                c = a.style.getPropertyValue(b);
                /background-position?/.test(b) &&
                  /top|left/.test(c) &&
                  (c = "0%");
                return c;
              }
              function m(a, b, c) {
                a.style.setProperty(u(b), c);
              }
              function n(a, b, c, d, e) {
                a = a.styleSheets;
                for (var f = 0; f < a.length; f++) {
                  var g;
                  if (
                    a[f].ownerNode instanceof HTMLElement &&
                    a[f].ownerNode.dataset != null &&
                    ((g = a[f].ownerNode.dataset.fbcssmodules) == null
                      ? void 0
                      : g.indexOf(b)) !== -1
                  ) {
                    g = a[f];
                    if (g instanceof CSSStyleSheet) {
                      for (var h = 0; h < g.cssRules.length; h++) {
                        var i = g.cssRules[h];
                        if (i instanceof CSSStyleRule && i.selectorText === c) {
                          i.style.setProperty(u(d), e);
                          return;
                        }
                      }
                      g.insertRule(
                        c + "{" + u(d) + ":" + ((i = e) != null ? i : "") + "}",
                        0
                      );
                    }
                  }
                }
              }
              function o(a, b, d) {
                var e;
                if (d != null && d.nodeType === 11) {
                  var f = d;
                  f.host.id != null && i[f.host.id] != null
                    ? (e = i[f.host.id])
                    : (f.host.id || (f.host.id = c("guid")()),
                      (e = {}),
                      (i[f.host.id] = e));
                } else e = h;
                f = !0;
                for (var g = 0, j; (j = b[g++]); )
                  j in e || ((f = !1), (e[j] = !0));
                if (f) return;
                j = document.createElement("style");
                j.type = "text/css";
                j.textContent = a;
                var k = "";
                b.forEach(function (a) {
                  return (k += a + " ");
                });
                j.setAttribute("data-fbcssmodules", k.trim());
                d == null || d === document
                  ? document.getElementsByTagName("head")[0].appendChild(j)
                  : d.appendChild(j);
              }
              function p(a) {
                if (!a || !a.parentNode) return null;
                else return a.parentNode.removeChild(a);
              }
              function q() {
                var a,
                  b =
                    document.documentElement &&
                    document.compatMode == "CSS1Compat"
                      ? document.documentElement
                      : document.body;
                return {
                  scrollTop:
                    (b == null ? void 0 : b.scrollTop) ||
                    ((a = document.body) == null ? void 0 : a.scrollTop),
                  scrollLeft:
                    (b == null ? void 0 : b.scrollLeft) ||
                    ((a = document.body) == null ? void 0 : a.scrollLeft),
                  width: window.innerWidth
                    ? window.innerWidth
                    : b == null
                    ? void 0
                    : b.clientWidth,
                  height: window.innerHeight
                    ? window.innerHeight
                    : b == null
                    ? void 0
                    : b.clientHeight,
                };
              }
              var r = /[A-Z]/g,
                s = /^\([^-]\)-/,
                t = ["o", "moz", "ms", "webkit"];
              function u(a) {
                a = a.replace(r, "-$&").toLowerCase();
                var b = a.match(s);
                b && t.indexOf(b[1]) !== -1 && (a = "-" + a);
                return a;
              }
              g.getAttr = j;
              g.getBoolAttr = a;
              g.html = b;
              g.containsCss = k;
              g.addCss = d;
              g.removeCss = e;
              g.getByClass = f;
              g.getStyle = l;
              g.setStyle = m;
              g.updateOrAddCssRule = n;
              g.addCssRules = o;
              g.remove = p;
              g.getViewportInfo = q;
              g.ready = c("sdk.domReady");
            },
            98
          );
          __d(
            "ManagedError",
            [],
            function (a, b, c, d, e, f) {
              a = (function (a) {
                babelHelpers.inheritsLoose(b, a);
                function b(b, c) {
                  var d;
                  d = a.call(this, b !== null && b !== void 0 ? b : "") || this;
                  b !== null && b !== void 0
                    ? (d.message = b)
                    : (d.message = "");
                  d.innerError = c;
                  return d;
                }
                return b;
              })(babelHelpers.wrapNativeSuper(Error));
              f["default"] = a;
            },
            66
          );
          __d(
            "normalizeError",
            ["sdk.UA"],
            function (a, b, c, d, e, f, g) {
              "use strict";
              function a(a) {
                var b = {
                  line: a.lineNumber || a.line,
                  message: a.message,
                  name: a.name,
                  script: a.fileName || a.sourceURL || a.script,
                  stack: a.stackTrace || a.stack,
                };
                b._originalError = a;
                a = /([\w:\.\/]+\.js):(\d+)/.exec(a.stack);
                c("sdk.UA").chrome() &&
                  a &&
                  ((b.script = a[1]), (b.line = parseInt(a[2], 10)));
                for (a in b) b[a] == null && delete b[a];
                return b;
              }
              g["default"] = a;
            },
            98
          );
          __d(
            "ObservableMixin",
            [],
            function (a, b, c, d, e, f) {
              function a() {
                this.__observableEvents = {};
              }
              a.prototype = {
                inform: function (a) {
                  var b = Array.prototype.slice.call(arguments, 1),
                    c = Array.prototype.slice.call(this.getSubscribers(a));
                  for (var d = 0; d < c.length; d++) {
                    if (c[d] === null) continue;
                    try {
                      c[d].apply(this, b);
                    } catch (a) {
                      window.setTimeout(function () {
                        throw a;
                      }, 0);
                    }
                  }
                  return this;
                },
                getSubscribers: function (a) {
                  return (
                    this.__observableEvents[a] ||
                    (this.__observableEvents[a] = [])
                  );
                },
                clearSubscribers: function (a) {
                  a && (this.__observableEvents[a] = []);
                  return this;
                },
                subscribe: function (a, b) {
                  a = this.getSubscribers(a);
                  a.push(b);
                  return this;
                },
                unsubscribe: function (a, b) {
                  a = this.getSubscribers(a);
                  for (var c = 0; c < a.length; c++)
                    if (a[c] === b) {
                      a.splice(c, 1);
                      break;
                    }
                  return this;
                },
              };
              e.exports = a;
            },
            null
          );
          __d(
            "AssertionError",
            ["ManagedError"],
            function (a, b, c, d, e, f, g) {
              a = (function (a) {
                babelHelpers.inheritsLoose(b, a);
                function b(b) {
                  return a.call(this, b) || this;
                }
                return b;
              })(c("ManagedError"));
              g["default"] = a;
            },
            98
          );
          __d(
            "sprintf",
            [],
            function (a, b, c, d, e, f) {
              function a(a) {
                for (
                  var b = arguments.length,
                    c = new Array(b > 1 ? b - 1 : 0),
                    d = 1;
                  d < b;
                  d++
                )
                  c[d - 1] = arguments[d];
                var e = 0;
                return a.replace(/%s/g, function () {
                  return String(c[e++]);
                });
              }
              f["default"] = a;
            },
            66
          );
          __d(
            "Assert",
            ["AssertionError", "sprintf"],
            function (a, b, c, d, e, f, g) {
              function h(a, b) {
                if (typeof a !== "boolean" || a === !1)
                  throw new (c("AssertionError"))(b);
                return a;
              }
              function i(a, b, d) {
                var e;
                if (b === void 0) e = "undefined";
                else if (b === null) e = "null";
                else {
                  var f = Object.prototype.toString.call(b);
                  f = /\s(\w*)/.exec(f);
                  e = f == null ? typeof f : f[1].toLowerCase();
                }
                h(
                  a.indexOf(e) !== -1,
                  (f = d) != null
                    ? f
                    : c("sprintf")("Expression is of type %s, not %s", e, a)
                );
                return b;
              }
              function a(a, b, c) {
                h(
                  b instanceof a,
                  (a = c) != null ? a : "Expression not instance of type"
                );
                return b;
              }
              function j(a, b) {
                (k["is" + a] = b),
                  (k["maybe" + a] = function (a, c) {
                    return a == null ? a : b(a, c);
                  });
              }
              b = function (a, b) {
                return a;
              };
              var k = {
                isInstanceOf: a,
                isTrue: h,
                isTruthy: function (a, b) {
                  return h(!!a, b);
                },
                isBoolean: b,
                isFunction: b,
                isNumber: b,
                isObject: b,
                isString: b,
                isUndefined: b,
                maybeObject: b,
                maybeNumber: b,
                maybeFunction: b,
              };
              [
                "Boolean",
                "Function",
                "Number",
                "Object",
                "String",
                "Undefined",
              ].forEach(function (a) {
                j(a, ES(i, "bind", !0, null, a.toLowerCase()));
              });
              d = k;
              g["default"] = d;
            },
            98
          );
          __d(
            "Type",
            ["Assert"],
            function (a, b, c, d, e, f) {
              function g() {
                var a = this.__mixins;
                if (a)
                  for (var b = 0; b < a.length; b++)
                    a[b].apply(this, arguments);
              }
              function h(a, b) {
                if (b instanceof a) return !0;
                if (b instanceof g)
                  for (var c = 0; c < b.__mixins.length; c++)
                    if (b.__mixins[c] == a) return !0;
                return !1;
              }
              function i(a, b) {
                var c = a.prototype;
                Array.isArray(b) || (b = [b]);
                for (a = 0; a < b.length; a++) {
                  var d = b[a];
                  typeof d === "function" &&
                    (c.__mixins.push(d), (d = d.prototype));
                  Object.keys(d).forEach(function (a) {
                    c[a] = d[a];
                  });
                }
              }
              function j(a, c, d) {
                var e =
                  c && Object.prototype.hasOwnProperty.call(c, "constructor")
                    ? c.constructor
                    : function () {
                        this.parent.apply(this, arguments);
                      };
                b("Assert").isFunction(e);
                if (a && a.prototype instanceof g === !1)
                  throw new Error("parent type does not inherit from Type");
                a = a || g;
                function f() {}
                f.prototype = a.prototype;
                e.prototype = new f();
                c && ES("Object", "assign", !1, e.prototype, c);
                e.prototype.constructor = e;
                e.parent = a;
                e.prototype.__mixins = a.prototype.__mixins
                  ? Array.prototype.slice.call(a.prototype.__mixins)
                  : [];
                d && i(e, d);
                e.prototype.parent = function () {
                  (this.parent = a.prototype.parent), a.apply(this, arguments);
                };
                e.prototype.parentCall = function (b) {
                  return a.prototype[b].apply(
                    this,
                    Array.prototype.slice.call(arguments, 1)
                  );
                };
                e.extend = function (a, b) {
                  return j(this, a, b);
                };
                return e;
              }
              ES("Object", "assign", !1, g.prototype, {
                instanceOf: function (a) {
                  return h(a, this);
                },
              });
              ES("Object", "assign", !1, g, {
                extend: function (a, b) {
                  return typeof a === "function"
                    ? j.apply(null, arguments)
                    : j(null, a, b);
                },
                instanceOf: h,
              });
              e.exports = g;
            },
            null
          );
          __d(
            "sdk.Model",
            ["ObservableMixin", "Type"],
            function (a, b, c, d, e, f, g) {
              "use strict";
              a = c("Type").extend(
                {
                  constructor: function (a) {
                    this.parent();
                    var b = {},
                      c = this;
                    Object.keys(a).forEach(function (d) {
                      (b[d] = a[d]),
                        (c["set" + d] = function (a) {
                          if (a === b[d]) return c;
                          b[d] = a;
                          c.inform(d + ".change", a);
                          return c;
                        }),
                        (c["get" + d] = function () {
                          return b[d];
                        });
                    });
                  },
                },
                c("ObservableMixin")
              );
              b = a;
              g["default"] = b;
            },
            98
          );
          __d(
            "sdk.Runtime",
            ["JSSDKRuntimeConfig", "sdk.Model"],
            function (a, b, c, d, e, f, g) {
              var h = { UNKNOWN: 0, PAGETAB: 1, CANVAS: 2, PLATFORM: 4 },
                i = new (c("sdk.Model"))({
                  AccessToken: "",
                  AutoLogAppEvents: !1,
                  ClientID: "",
                  CookieUserID: "",
                  EnforceHttps: !1,
                  Environment: h.UNKNOWN,
                  FamilyLoginLoaded: !1,
                  GraphDomain: "",
                  Initialized: !1,
                  IsSPIN: Boolean(d("JSSDKRuntimeConfig").isSPIN),
                  IsVersioned: !1,
                  KidDirectedSite: void 0,
                  Locale: d("JSSDKRuntimeConfig").locale,
                  LoggedIntoFacebook: void 0,
                  LoginStatus: void 0,
                  Revision: d("JSSDKRuntimeConfig").revision,
                  Rtl: d("JSSDKRuntimeConfig").rtl,
                  Scope: void 0,
                  SDKAB: d("JSSDKRuntimeConfig").sdkab,
                  SDKUrl: d("JSSDKRuntimeConfig").sdkurl,
                  SDKNS: d("JSSDKRuntimeConfig").sdkns,
                  ShouldLoadFamilyLogin: !1,
                  UseCookie: !1,
                  UseLocalStorage: !0,
                  UserID: "",
                  Version: void 0,
                });
              ES("Object", "assign", !1, i, {
                ENVIRONMENTS: h,
                isEnvironment: function (a) {
                  var b = this.getEnvironment();
                  return (a | b) === b;
                },
                isCanvasEnvironment: function () {
                  return (
                    this.isEnvironment(h.CANVAS) ||
                    this.isEnvironment(h.PAGETAB)
                  );
                },
              });
              (function () {
                var a = /app_runner/.test(window.name)
                  ? h.PAGETAB
                  : /iframe_canvas/.test(window.name)
                  ? h.CANVAS
                  : h.UNKNOWN;
                (a | h.PAGETAB) === a && (a |= h.CANVAS);
                i.setEnvironment(a);
              })();
              a = i;
              g["default"] = a;
            },
            98
          );
          __d(
            "sdk.ErrorHandler",
            ["ManagedError", "normalizeError", "sdk.Runtime", "wrapFunction"],
            function (a, b, c, d, e, f, g) {
              function a(a, b) {
                var d = "";
                function e(a) {
                  var c = a._originalError;
                  delete a._originalError;
                  b(a);
                  throw c;
                }
                function f(b, f) {
                  return function () {
                    if (!a) return b.apply(this, arguments);
                    try {
                      d = f;
                      return b.apply(this, arguments);
                    } catch (a) {
                      if (a instanceof c("ManagedError")) throw a;
                      var g = c("normalizeError")(a);
                      if (!g.script) {
                        var h = /.*\/([^?#]+)/.exec(
                          c("sdk.Runtime").getSDKUrl()
                        );
                        g.script = h !== null ? h[1] : "";
                      }
                      g.entry = f;
                      var i = Array.prototype.slice
                        .call(arguments)
                        .map(function (a) {
                          var b = Object.prototype.toString.call(a);
                          return /^\[object (String|Number|Boolean|Object|Date)\]$/.test(
                            b
                          )
                            ? a
                            : a.toString();
                        });
                      g.args = ES("JSON", "stringify", !1, i).substring(0, 200);
                      e(g);
                    } finally {
                      d = "";
                    }
                  };
                }
                function g(a) {
                  a.__wrapper ||
                    (a.__wrapper = function () {
                      try {
                        return a.apply(this, arguments);
                      } catch (a) {
                        window.setTimeout(function () {
                          throw a;
                        }, 0);
                        return !1;
                      }
                    });
                  return a.__wrapper;
                }
                function h(a) {
                  try {
                    return a && a.callee && a.callee.caller
                      ? a.callee.caller.name
                      : "";
                  } catch (a) {
                    return "";
                  }
                }
                function i(a, b) {
                  return function (e, f) {
                    var g =
                      b +
                      ":" +
                      (d || "[global]") +
                      ":" +
                      (e.name || "[anonymous]" + h(arguments));
                    return a(c("wrapFunction")(e, "entry", g), f);
                  };
                }
                a &&
                  ((setTimeout = i(setTimeout, "setTimeout")),
                  (setInterval = i(setInterval, "setInterval")),
                  c("wrapFunction").setWrapper(f, "entry"));
                return { guard: f, unguard: g };
              }
              g.create = a;
            },
            98
          );
          __d(
            "QueryString",
            [],
            function (a, b, c, d, e, f) {
              function g(a) {
                var b = [];
                Object.keys(a)
                  .sort()
                  .forEach(function (c) {
                    var d = a[c];
                    if (d === void 0) return;
                    if (d === null) {
                      b.push(c);
                      return;
                    }
                    b.push(
                      encodeURIComponent(c) +
                        "=" +
                        encodeURIComponent(String(d))
                    );
                  });
                return b.join("&");
              }
              function a(a, b) {
                b === void 0 && (b = !1);
                var c = {};
                if (a === "") return c;
                a = a.split("&");
                for (var d = 0; d < a.length; d++) {
                  var e = a[d].split("=", 2),
                    f = decodeURIComponent(e[0]);
                  if (b && Object.prototype.hasOwnProperty.call(c, f))
                    throw new URIError("Duplicate key: " + f);
                  c[f] = e.length === 2 ? decodeURIComponent(e[1]) : null;
                }
                return c;
              }
              function b(a, b) {
                return (
                  a +
                  (a.indexOf("?") !== -1 ? "&" : "?") +
                  (typeof b === "string" ? b : g(b))
                );
              }
              c = { encode: g, decode: a, appendToUrl: b };
              f["default"] = c;
            },
            66
          );
          __d(
            "Env",
            [],
            function (a, b, c, d, e, f) {
              b = {
                ajaxpipe_token: null,
                compat_iframe_token: null,
                iframeKey: "",
                iframeTarget: "",
                iframeToken: "",
                isCQuick: !1,
                start: Date.now(),
                nocatch: !1,
                useTrustedTypes: !1,
                isTrustedTypesReportOnly: !1,
                enableDefaultTrustedTypesPolicy: !1,
                ig_server_override: "",
                ig_mqtt_wss_endpoint: "",
                ig_mqtt_polling_endpoint: "",
              };
              a.Env && ES("Object", "assign", !1, b, a.Env);
              a.Env = b;
              c = b;
              f["default"] = c;
            },
            66
          );
          __d(
            "fb-error-lite",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              var g = {
                PREVIOUS_FILE: 1,
                PREVIOUS_FRAME: 2,
                PREVIOUS_DIR: 3,
                FORCED_KEY: 4,
              };
              function a(a) {
                var b = new Error(a);
                if (b.stack === void 0)
                  try {
                    throw b;
                  } catch (a) {}
                b.messageFormat = a;
                for (
                  var c = arguments.length,
                    d = new Array(c > 1 ? c - 1 : 0),
                    e = 1;
                  e < c;
                  e++
                )
                  d[e - 1] = arguments[e];
                b.messageParams = d.map(function (a) {
                  return String(a);
                });
                b.taalOpcodes = [g.PREVIOUS_FRAME];
                return b;
              }
              b = { err: a, TAALOpcode: g };
              f["default"] = b;
            },
            66
          );
          __d(
            "invariant",
            ["Env", "fb-error-lite", "sprintf"],
            function (a, b, c, d, e, f, g) {
              "use strict";
              function a(a, b) {
                if (!a) {
                  var d = b;
                  for (
                    var e = arguments.length,
                      f = new Array(e > 2 ? e - 2 : 0),
                      g = 2;
                    g < e;
                    g++
                  )
                    f[g - 2] = arguments[g];
                  if (typeof d === "number") {
                    var i = h(d, f),
                      j = i.message,
                      k = i.decoderLink;
                    d = j;
                    f.unshift(k);
                  } else if (d === void 0) {
                    d = "Invariant: ";
                    for (var l = 0; l < f.length; l++) d += "%s,";
                  }
                  var m = d,
                    n = new Error(m);
                  n.name = "Invariant Violation";
                  n.messageFormat = d;
                  n.messageParams = f.map(function (a) {
                    return String(a);
                  });
                  n.taalOpcodes = [
                    c("fb-error-lite").TAALOpcode.PREVIOUS_FRAME,
                  ];
                  n.stack;
                  throw n;
                }
              }
              function h(a, b) {
                var d = "Minified invariant #" + a + "; %s";
                b.length > 0 &&
                  (d +=
                    " Params: " +
                    b
                      .map(function (a) {
                        return "%s";
                      })
                      .join(", "));
                a =
                  c("Env").show_invariant_decoder === !0
                    ? "visit " + i(a, b) + " to see the full message."
                    : "";
                return { message: d, decoderLink: a };
              }
              function i(a, b) {
                a = "https://www.internalfb.com/intern/invariant/" + a + "/";
                b.length > 0 &&
                  (a +=
                    "?" +
                    b
                      .map(function (a, b) {
                        return (
                          "args[" + b + "]=" + encodeURIComponent(String(a))
                        );
                      })
                      .join("&"));
                return a;
              }
              g["default"] = a;
            },
            98
          );
          __d(
            "UrlMap",
            ["invariant", "UrlMapConfig", "sdk.Runtime"],
            function (a, b, c, d, e, f, g, h) {
              function a(a) {
                var b = "https";
                if (a === "graph_domain") {
                  var e = c("sdk.Runtime").getGraphDomain();
                  e ? (a = "graph_".concat(e)) : (a = "graph");
                }
                if (a in d("UrlMapConfig"))
                  return b + "://" + d("UrlMapConfig")[a];
                a in d("UrlMapConfig") || h(0, 2511, a);
                return "";
              }
              g.resolve = a;
            },
            98
          );
          __d(
            "sdk.Scribe",
            ["QueryString", "UrlMap", "sdk.Runtime"],
            function (a, b, c, d, e, f, g) {
              var h = {};
              function a(a, b, e) {
                e === void 0 && (e = !1);
                if (a === "jssdk_error") {
                  var f = ES("JSON", "stringify", !1, b);
                  if (Object.prototype.hasOwnProperty.call(h, f)) return;
                  else h[f] = !0;
                }
                if (b.extra != null && typeof b.extra === "object") {
                  f = b.extra;
                  f.revision = c("sdk.Runtime").getRevision();
                }
                f = new Image();
                var g =
                  d("UrlMap").resolve("www") + "/platform/scribe_endpoint.php/";
                e || (f.crossOrigin = "anonymous");
                f.src = c("QueryString").appendToUrl(g, {
                  c: a,
                  m: ES(
                    "JSON",
                    "stringify",
                    !1,
                    babelHelpers["extends"]({}, b, {
                      isSPIN: c("sdk.Runtime").getIsSPIN(),
                    })
                  ),
                });
              }
              g.log = a;
            },
            98
          );
          __d(
            "sdk.FeatureFunctor",
            [],
            function (a, b, c, d, e, f) {
              function g(a, b, c) {
                if (a.features && b in a.features) {
                  a = a.features[b];
                  if (typeof a === "object" && typeof a.rate === "number")
                    if (a.rate && Math.random() * 100 <= a.rate)
                      return a.value || !0;
                    else return a.value ? null : !1;
                  else return a;
                }
                return c;
              }
              function a(a) {
                return function () {
                  for (
                    var b = arguments.length, c = new Array(b), d = 0;
                    d < b;
                    d++
                  )
                    c[d] = arguments[d];
                  if (c.length < 2)
                    throw new Error("Default value is required");
                  var e = c[0],
                    f = c[1];
                  return g(a, e, f);
                };
              }
              f.create = a;
            },
            66
          );
          __d(
            "sdk.feature",
            ["JSSDKConfig", "sdk.FeatureFunctor"],
            function (a, b, c, d, e, f, g) {
              a = d("sdk.FeatureFunctor").create(d("JSSDKConfig"));
              g["default"] = a;
            },
            98
          );
          __d(
            "sdk.ErrorHandling",
            ["sdk.ErrorHandler", "sdk.Runtime", "sdk.Scribe", "sdk.feature"],
            function (a, b, c, d, e, f, g) {
              a = c("sdk.feature")("error_handling", !1);
              b = d("sdk.ErrorHandler").create(a, function (a) {
                d("sdk.Scribe").log("jssdk_error", {
                  appId: c("sdk.Runtime").getClientID(),
                  error: a.name || a.message,
                  extra: a,
                });
              });
              g["default"] = b;
            },
            98
          );
          __d(
            "FB",
            [
              "DOMWrapper",
              "GlobalCallback",
              "JSSDKCssConfig",
              "Log",
              "dotAccess",
              "sdk.Content",
              "sdk.DOM",
              "sdk.ErrorHandling",
              "sdk.domReady",
            ],
            function (a, b, c, d, e, f, g) {
              window.FB &&
                window.FB.__buffer &&
                (window.__buffer = babelHelpers["extends"](
                  {},
                  window.FB.__buffer
                ));
              var h = (window.FB = {});
              b = {};
              d("Log").setLevel(0);
              d("GlobalCallback").setPrefix("FB.__globalCallbacks");
              var i = document.createElement("div");
              d("DOMWrapper").setRoot(i);
              c("sdk.domReady")(function () {
                d("Log").info("domReady"),
                  d("sdk.Content").appendHidden(i),
                  c("JSSDKCssConfig").rules &&
                    d("sdk.DOM").addCssRules(
                      c("JSSDKCssConfig").rules,
                      c("JSSDKCssConfig").components
                    );
              });
              function j(a, b, d, e) {
                return c("sdk.ErrorHandling").guard(function () {
                  function d(a) {
                    if (Array.isArray(a)) return a.map(d);
                    return a && typeof a === "object" && a.__wrapped
                      ? a.__wrapped
                      : typeof a === "function" &&
                        /^function/.test(a.toString())
                      ? c("sdk.ErrorHandling").unguard(a)
                      : a;
                  }
                  var f = Array.prototype.slice.call(arguments).map(d),
                    g = a.apply(e, f),
                    h,
                    i = !0;
                  if (g && typeof g === "object") {
                    h = Object.create(g);
                    h.__wrapped = g;
                    for (var k in g) {
                      var l = g[k];
                      if (typeof l !== "function" || k === "constructor")
                        continue;
                      i = !1;
                      h[k] = j(l, b + ":" + k, k, g);
                    }
                  }
                  return !i ? h : i ? g : h;
                }, b);
              }
              function a(a, b) {
                var d = a ? c("dotAccess")(h, a, !0) : h;
                Object.keys(b).forEach(function (c) {
                  var e = b[c];
                  if (typeof e === "function") {
                    var f = (a ? a + "." : "") + c;
                    f = j(e, f, c, b);
                    f && (d[c] = f);
                  } else (typeof e === "object" || typeof e === "number") && (d[c] = e);
                });
              }
              ES("Object", "assign", !1, b, { provide: a });
              e = b;
              g["default"] = e;
            },
            98
          );
          __d(
            "AppUserPropertyAPIBuiltinField",
            [],
            function (a, b, c, d, e, f) {
              e.exports = {
                GENDER: "$gender",
                CITY: "$city",
                STATE: "$state",
                ZIPCODE: "$zipcode",
                COUNTRY: "$country",
                LANGUAGE: "$language",
                CURRENCY: "$currency",
                INSTALL_SOURCE: "$install_source",
                USER_TYPE: "$user_type",
                ACCOUNT_CREATED_TIME: "$account_created_time",
                APP_ID: "$app_id",
              };
            },
            null
          );
          __d(
            "ArgumentError",
            ["ManagedError"],
            function (a, b, c, d, e, f, g) {
              a = (function (a) {
                babelHelpers.inheritsLoose(b, a);
                function b(b, c) {
                  return a.call(this, b, c) || this;
                }
                return b;
              })(c("ManagedError"));
              g["default"] = a;
            },
            98
          );
          __d(
            "flattenObject",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              function a(a) {
                var b = {};
                for (var c in a)
                  if (Object.prototype.hasOwnProperty.call(a, c)) {
                    var d = a[c];
                    if (d == null) continue;
                    else
                      typeof d === "string"
                        ? (b[c] = d)
                        : (b[c] = ES("JSON", "stringify", !1, d));
                  }
                return b;
              }
              f["default"] = a;
            },
            66
          );
          __d(
            "performance",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              b = a.performance || a.msPerformance || a.webkitPerformance || {};
              c = b;
              f["default"] = c;
            },
            66
          );
          __d(
            "performanceNow",
            ["performance"],
            function (a, b, c, d, e, f, g) {
              if (c("performance").now)
                b = function () {
                  return c("performance").now();
                };
              else {
                d = a._cstart;
                e = Date.now();
                var h = typeof d === "number" && d < e ? d : e,
                  i = 0;
                b = function () {
                  var a = Date.now(),
                    b = a - h;
                  b < i && ((h -= i - b), (b = a - h));
                  i = b;
                  return b;
                };
              }
              f = b;
              g["default"] = f;
            },
            98
          );
          __d(
            "performanceNowSinceAppStart",
            ["performanceNow"],
            function (a, b, c, d, e, f, g) {
              g["default"] = c("performanceNow");
            },
            98
          );
          __d(
            "removeFromArray",
            [],
            function (a, b, c, d, e, f) {
              function a(a, b) {
                b = a.indexOf(b);
                b !== -1 && a.splice(b, 1);
              }
              f["default"] = a;
            },
            66
          );
          __d(
            "fb-error",
            ["performanceNowSinceAppStart", "removeFromArray"],
            function (a, b, c, d, e, f) {
              "use strict";
              var g = {
                PREVIOUS_FILE: 1,
                PREVIOUS_FRAME: 2,
                PREVIOUS_DIR: 3,
                FORCED_KEY: 4,
              };
              function h(b) {
                var a = new Error(b);
                if (a.stack === void 0)
                  try {
                    throw a;
                  } catch (a) {}
                a.messageFormat = b;
                for (
                  var c = arguments.length,
                    d = new Array(c > 1 ? c - 1 : 0),
                    e = 1;
                  e < c;
                  e++
                )
                  d[e - 1] = arguments[e];
                a.messageParams = d.map(function (a) {
                  return String(a);
                });
                a.taalOpcodes = [g.PREVIOUS_FRAME];
                return a;
              }
              var i = !1,
                j = {
                  errorListener: function (b) {
                    var c = a.console,
                      d = c[b.type] ? b.type : "error";
                    if (b.type === "fatal" || (d === "error" && !i)) {
                      d = b.message;
                      c.error(
                        "ErrorUtils caught an error:\n\n" +
                          d +
                          "\n\nSubsequent non-fatal errors won't be logged; see https://fburl.com/debugjs."
                      );
                      i = !0;
                    }
                  },
                },
                k = { access_token: null },
                l = 6,
                m = 6e4,
                n = 10 * m,
                o = new Map(),
                p = 0;
              function q() {
                var a = b("performanceNowSinceAppStart")();
                if (a > p + m) {
                  var c = a - n;
                  for (
                    var d = o,
                      e = Array.isArray(d),
                      f = 0,
                      d = e
                        ? d
                        : d[
                            typeof Symbol === "function"
                              ? Symbol.iterator
                              : "@@iterator"
                          ]();
                    ;

                  ) {
                    var g;
                    if (e) {
                      if (f >= d.length) break;
                      g = d[f++];
                    } else {
                      f = d.next();
                      if (f.done) break;
                      g = f.value;
                    }
                    g = g;
                    var h = g[0];
                    g = g[1];
                    g.lastAccessed < c && o["delete"](h);
                  }
                  p = a;
                }
              }
              function r(a) {
                q();
                var c = b("performanceNowSinceAppStart")(),
                  d = o.get(a);
                if (d == null) {
                  o.set(a, { dropped: 0, logged: [c], lastAccessed: c });
                  return 1;
                }
                a = d.dropped;
                var e = d.logged;
                d.lastAccessed = c;
                while (e[0] < c - m) e.shift();
                if (e.length < l) {
                  d.dropped = 0;
                  e.push(c);
                  return a + 1;
                } else {
                  d.dropped++;
                  return null;
                }
              }
              var s = {
                  shouldLog: function (a) {
                    return r(a.hash);
                  },
                },
                t = "RE_EXN_ID";
              function u(a) {
                var b = null;
                a == null || typeof a !== "object"
                  ? (b = h("Non-object thrown: %s", String(a)))
                  : Object.prototype.hasOwnProperty.call(a, t)
                  ? (b = h(
                      "Rescript exception thrown: %s",
                      ES("JSON", "stringify", !1, a)
                    ))
                  : typeof a.message !== "string"
                  ? (b = h(
                      "Non-error thrown: %s, keys: %s",
                      String(a),
                      ES("JSON", "stringify", !1, Object.keys(a).sort())
                    ))
                  : Object.isExtensible &&
                    !Object.isExtensible(a) &&
                    (b = h("Non-extensible thrown: %s", String(a.message)));
                if (b != null) {
                  b.taalOpcodes = b.taalOpcodes || [];
                  b.taalOpcodes.push(g.PREVIOUS_FRAME);
                  return b;
                }
                return a;
              }
              var aa =
                  typeof window === "undefined"
                    ? "<self.onerror>"
                    : "<window.onerror>",
                v;
              function ba(a) {
                var b = a.error != null ? u(a.error) : h(a.message || "");
                b.fileName == null &&
                  a.filename != null &&
                  (b.fileName = a.filename);
                b.line == null && a.lineno != null && (b.line = a.lineno);
                b.column == null && a.colno != null && (b.column = a.colno);
                b.guardList = [aa];
                b.loggingSource = "ONERROR";
                (a = v) === null || a === void 0 ? void 0 : a.reportError(b);
              }
              var w = {
                  setup: function (b) {
                    if (typeof a.addEventListener !== "function") return;
                    if (v != null) return;
                    v = b;
                    a.addEventListener("error", ba);
                  },
                },
                x = [],
                y = {
                  pushGuard: function (a) {
                    x.unshift(a);
                  },
                  popGuard: function () {
                    x.shift();
                  },
                  inGuard: function () {
                    return x.length !== 0;
                  },
                  cloneGuardList: function () {
                    return x.map(function (a) {
                      return a.name;
                    });
                  },
                  findDeferredSource: function () {
                    for (var a = 0; a < x.length; a++) {
                      var b = x[a];
                      if (b.deferredSource != null) return b.deferredSource;
                    }
                  },
                };
              function ca(a) {
                if (a.type != null) return a.type;
                if (
                  a.loggingSource == "GUARDED" ||
                  a.loggingSource == "ERROR_BOUNDARY"
                )
                  return "fatal";
                if (a.name == "SyntaxError") return "fatal";
                if (
                  a.loggingSource == "ONERROR" &&
                  a.message.indexOf("ResizeObserver loop") >= 0
                )
                  return "warn";
                return a.stack != null &&
                  a.stack.indexOf("chrome-extension://") >= 0
                  ? "warn"
                  : "error";
              }
              var z = [],
                A = (function () {
                  function a() {
                    this.metadata = [].concat(z);
                  }
                  var b = a.prototype;
                  b.addEntries = function () {
                    var a;
                    (a = this.metadata).push.apply(a, arguments);
                    return this;
                  };
                  b.addEntry = function (a, b, c) {
                    this.metadata.push([a, b, c]);
                    return this;
                  };
                  b.isEmpty = function () {
                    return this.metadata.length === 0;
                  };
                  b.clearEntries = function () {
                    this.metadata = [];
                  };
                  b.format = function () {
                    var a = [];
                    this.metadata.forEach(function (b) {
                      if (b && b.length) {
                        b = b
                          .map(function (a) {
                            return a != null
                              ? String(a).replace(/:/g, "_")
                              : "";
                          })
                          .join(":");
                        a.push(b);
                      }
                    });
                    return a;
                  };
                  b.getAll = function () {
                    return this.metadata;
                  };
                  a.addGlobalMetadata = function (a, b, c) {
                    z.push([a, b, c]);
                  };
                  a.getGlobalMetadata = function () {
                    return z;
                  };
                  a.unsetGlobalMetadata = function (a, b) {
                    z = z.filter(function (c) {
                      return !(Array.isArray(c) && c[0] === a && c[1] === b);
                    });
                  };
                  return a;
                })(),
                B = { debug: 1, info: 2, warn: 3, error: 4, fatal: 5 };
              function c(a, b) {
                if (Object.isFrozen(a)) return;
                b.type &&
                  (!a.type || B[a.type] > B[b.type]) &&
                  (a.type = b.type);
                var c = b.metadata;
                if (c != null) {
                  var d;
                  d = (d = a.metadata) !== null && d !== void 0 ? d : new A();
                  c != null && d.addEntries.apply(d, c.getAll());
                  a.metadata = d;
                }
                b.project != null && (a.project = b.project);
                b.errorName != null && (a.errorName = b.errorName);
                b.componentStack != null &&
                  (a.componentStack = b.componentStack);
                b.deferredSource != null &&
                  (a.deferredSource = b.deferredSource);
                b.blameModule != null && (a.blameModule = b.blameModule);
                b.loggingSource != null && (a.loggingSource = b.loggingSource);
                d =
                  (c = a.messageFormat) !== null && c !== void 0
                    ? c
                    : a.message;
                c = (c = a.messageParams) !== null && c !== void 0 ? c : [];
                if (d !== b.messageFormat && b.messageFormat != null) {
                  var e;
                  d += " [Caught in: " + b.messageFormat + "]";
                  c.push.apply(
                    c,
                    (e = b.messageParams) !== null && e !== void 0 ? e : []
                  );
                }
                a.messageFormat = d;
                a.messageParams = c;
                e = b.forcedKey;
                d = a.forcedKey;
                c =
                  e != null && d != null
                    ? e + "_" + d
                    : e !== null && e !== void 0
                    ? e
                    : d;
                a.forcedKey = c;
              }
              function d(a) {
                var b;
                return da(
                  (b = a.messageFormat) !== null && b !== void 0
                    ? b
                    : a.message,
                  a.messageParams || []
                );
              }
              function da(a, b) {
                var c = 0;
                a = a.replace(/%s/g, function () {
                  return c < b.length ? b[c++] : "NOPARAM";
                });
                c < b.length &&
                  (a += " PARAMS" + ES("JSON", "stringify", !1, b.slice(c)));
                return a;
              }
              function f(a) {
                return (a !== null && a !== void 0 ? a : []).map(function (a) {
                  return String(a);
                });
              }
              var C = {
                  aggregateError: c,
                  toReadableMessage: d,
                  toStringParams: f,
                },
                ea = 5,
                D = [];
              function E(a) {
                D.push(a), D.length > ea && D.shift();
              }
              function F(a) {
                var b = a.getAllResponseHeaders();
                if (b != null && b.indexOf("X-FB-Debug") >= 0) {
                  b = a.getResponseHeader("X-FB-Debug");
                  b && E(b);
                }
              }
              function fa() {
                return D;
              }
              var G = { add: E, addFromXHR: F, getAll: fa },
                ga = "abcdefghijklmnopqrstuvwxyz012345";
              function H() {
                var a = 0;
                for (
                  var b = arguments.length, c = new Array(b), d = 0;
                  d < b;
                  d++
                )
                  c[d] = arguments[d];
                for (var e = 0; e < c.length; e++) {
                  var f = c[e];
                  if (f != null) {
                    var g = f.length;
                    for (var h = 0; h < g; h++)
                      a = (a << 5) - a + f.charCodeAt(h);
                  }
                }
                var i = "";
                for (var j = 0; j < 6; j++)
                  (i = ga.charAt(a & 31) + i), (a >>= 5);
                return i;
              }
              var I = [
                  /\(([^\s\)\()]+):(\d+):(\d+)\)$/,
                  /@([^\s\)\()]+):(\d+):(\d+)$/,
                  /^([^\s\)\()]+):(\d+):(\d+)$/,
                  /^at ([^\s\)\()]+):(\d+):(\d+)$/,
                ],
                ha = /^\w+:\s.*?\n/g;
              Error.stackTraceLimit != null &&
                Error.stackTraceLimit < 80 &&
                (Error.stackTraceLimit = 80);
              function ia(a) {
                var b = a.name,
                  c = a.message;
                a = a.stack;
                if (a == null) return null;
                if (b != null && c != null && c !== "") {
                  var d = b + ": " + c + "\n";
                  if (ES(a, "startsWith", !0, d)) return a.substr(d.length);
                  if (a === b + ": " + c) return null;
                }
                if (b != null) {
                  d = b + "\n";
                  if (ES(a, "startsWith", !0, d)) return a.substr(d.length);
                }
                if (c != null && c !== "") {
                  b = ": " + c + "\n";
                  d = a.indexOf(b);
                  c = a.substring(0, d);
                  if (/^\w+$/.test(c)) return a.substring(d + b.length);
                }
                return a.replace(ha, "");
              }
              function J(a) {
                a = a.trim();
                var b;
                a;
                var c, d, e;
                if (ES(a, "includes", !0, "charset=utf-8;base64,"))
                  b = "<inlined-file>";
                else {
                  var f;
                  for (var g = 0; g < I.length; g++) {
                    var h = I[g];
                    f = a.match(h);
                    if (f != null) break;
                  }
                  f != null && f.length === 4
                    ? ((c = f[1]),
                      (d = parseInt(f[2], 10)),
                      (e = parseInt(f[3], 10)),
                      (b = a.substring(0, a.length - f[0].length)))
                    : (b = a);
                  b = b.replace(/^at /, "").trim();
                }
                h = { identifier: b, script: c, line: d, column: e };
                h.text = K(h);
                return h;
              }
              function ja(a) {
                return a == null || a === ""
                  ? []
                  : a.split(/\n\n/)[0].split("\n").map(J);
              }
              function ka(a) {
                a = ia(a);
                return ja(a);
              }
              function la(a) {
                if (a == null || a === "") return null;
                a = a.split("\n");
                a.splice(0, 1);
                return a.map(function (a) {
                  return a.trim();
                });
              }
              function K(a) {
                var b = a.identifier,
                  c = a.script,
                  d = a.line;
                a = a.column;
                b = "    at " + (b !== null && b !== void 0 ? b : "<unknown>");
                c != null &&
                  d != null &&
                  a != null &&
                  (b += " (" + c + ":" + d + ":" + a + ")");
                return b;
              }
              function L(c) {
                var d,
                  e,
                  f,
                  h,
                  i,
                  j,
                  k = ka(c);
                d = (d = c.taalOpcodes) !== null && d !== void 0 ? d : [];
                var l = c.framesToPop;
                if (l != null) {
                  l = Math.min(l, k.length);
                  while (l-- > 0) d.unshift(g.PREVIOUS_FRAME);
                }
                l =
                  (l = c.messageFormat) !== null && l !== void 0
                    ? l
                    : c.message;
                e = (
                  (e = c.messageParams) !== null && e !== void 0 ? e : []
                ).map(function (a) {
                  return String(a);
                });
                var m = la(c.componentStack),
                  n = m == null ? null : m.map(J),
                  o = c.metadata ? c.metadata.format() : new A().format();
                o.length === 0 && (o = void 0);
                var p = k
                  .map(function (a) {
                    return a.text;
                  })
                  .join("\n");
                f = (f = c.errorName) !== null && f !== void 0 ? f : c.name;
                var q = ca(c),
                  r = c.loggingSource,
                  s = c.project;
                h = (h = c.lineNumber) !== null && h !== void 0 ? h : c.line;
                i =
                  (i = c.columnNumber) !== null && i !== void 0 ? i : c.column;
                j = (j = c.fileName) !== null && j !== void 0 ? j : c.sourceURL;
                var t = k.length > 0;
                t && h == null && (h = k[0].line);
                t && i == null && (i = k[0].column);
                t && j == null && (j = k[0].script);
                n = {
                  blameModule: c.blameModule,
                  column: i == null ? null : String(i),
                  clientTime: Math.floor(Date.now() / 1e3),
                  componentStackFrames: n,
                  deferredSource:
                    c.deferredSource != null ? L(c.deferredSource) : null,
                  extra: (t = c.extra) !== null && t !== void 0 ? t : {},
                  fbtrace_id: c.fbtrace_id,
                  guardList:
                    (i = c.guardList) !== null && i !== void 0 ? i : [],
                  hash: H(f, p, q, s, r),
                  isNormalizedError: !0,
                  line: h == null ? null : String(h),
                  loggingSource: r,
                  message: C.toReadableMessage(c),
                  messageFormat: l,
                  messageParams: e,
                  metadata: o,
                  name: f,
                  page_time: Math.floor(b("performanceNowSinceAppStart")()),
                  project: s,
                  reactComponentStack: m,
                  script: j,
                  serverHash: c.serverHash,
                  stack: p,
                  stackFrames: k,
                  type: q,
                  xFBDebug: G.getAll(),
                };
                c.forcedKey != null && (n.forcedKey = c.forcedKey);
                d.length > 0 && (n.taalOpcodes = d);
                t = a.location;
                t && (n.windowLocationURL = t.href);
                for (i in n) n[i] == null && delete n[i];
                return n;
              }
              function ma(a) {
                return a != null &&
                  typeof a === "object" &&
                  a.isNormalizedError === !0
                  ? a
                  : null;
              }
              var M = {
                  formatStackFrame: K,
                  normalizeError: L,
                  ifNormalizedError: ma,
                },
                na = "<global.react>",
                N = [],
                O = [],
                P = 50,
                Q = !1,
                R = {
                  history: O,
                  addListener: function (a, b) {
                    b === void 0 && (b = !1),
                      N.push(a),
                      b ||
                        O.forEach(function (b) {
                          return a(
                            b,
                            (b = b.loggingSource) !== null && b !== void 0
                              ? b
                              : "DEPRECATED"
                          );
                        });
                  },
                  unshiftListener: function (a) {
                    N.unshift(a);
                  },
                  removeListener: function (a) {
                    b("removeFromArray")(N, a);
                  },
                  reportError: function (a) {
                    a = M.normalizeError(a);
                    R.reportNormalizedError(a);
                  },
                  reportNormalizedError: function (b) {
                    if (Q) return !1;
                    var a = y.cloneGuardList();
                    b.componentStackFrames && a.unshift(na);
                    a.length > 0 && (b.guardList = a);
                    if (b.deferredSource == null) {
                      a = y.findDeferredSource();
                      a != null && (b.deferredSource = M.normalizeError(a));
                    }
                    O.length > P && O.splice(P / 2, 1);
                    O.push(b);
                    Q = !0;
                    for (a = 0; a < N.length; a++)
                      try {
                        var c;
                        N[a](
                          b,
                          (c = b.loggingSource) !== null && c !== void 0
                            ? c
                            : "DEPRECATED"
                        );
                      } catch (a) {}
                    Q = !1;
                    return !0;
                  },
                };
              R.addListener(j.errorListener);
              var oa = "<anonymous guard>",
                S = !1,
                T = {
                  applyWithGuard: function (a, b, c, d) {
                    y.pushGuard({
                      name:
                        ((d === null || d === void 0 ? void 0 : d.name) != null
                          ? d.name
                          : null) ||
                        (a.name ? "func_name:" + a.name : null) ||
                        oa,
                      deferredSource:
                        d === null || d === void 0 ? void 0 : d.deferredSource,
                    });
                    if (S)
                      try {
                        return a.apply(b, c);
                      } finally {
                        y.popGuard();
                      }
                    try {
                      return Function.prototype.apply.call(a, b, c);
                    } catch (h) {
                      try {
                        b =
                          d !== null && d !== void 0
                            ? d
                            : babelHelpers["extends"]({}, null);
                        var e = b.deferredSource,
                          f = b.onError;
                        b = b.onNormalizedError;
                        var g = u(h);
                        e = {
                          deferredSource: e,
                          loggingSource: "GUARDED",
                          project:
                            (e =
                              d === null || d === void 0
                                ? void 0
                                : d.project) !== null && e !== void 0
                              ? e
                              : "ErrorGuard",
                          type:
                            d === null || d === void 0 ? void 0 : d.errorType,
                        };
                        C.aggregateError(g, e);
                        d = M.normalizeError(g);
                        g == null &&
                          a &&
                          ((d.extra[a.toString().substring(0, 100)] =
                            "function"),
                          c != null &&
                            c.length &&
                            (d.extra[
                              ES("Array", "from", !1, c)
                                .toString()
                                .substring(0, 100)
                            ] = "args"));
                        d.guardList = y.cloneGuardList();
                        f && f(g);
                        b && b(d);
                        R.reportNormalizedError(d);
                      } catch (a) {}
                    } finally {
                      y.popGuard();
                    }
                  },
                  guard: function (a, b) {
                    function c() {
                      for (
                        var c = arguments.length, d = new Array(c), e = 0;
                        e < c;
                        e++
                      )
                        d[e] = arguments[e];
                      return T.applyWithGuard(a, this, d, b);
                    }
                    a.__SMmeta && (c.__SMmeta = a.__SMmeta);
                    return c;
                  },
                  inGuard: function () {
                    return y.inGuard();
                  },
                  skipGuardGlobal: function (a) {
                    S = a;
                  },
                },
                U = 1024,
                V = [],
                W = 0;
              function X(a) {
                return String(a);
              }
              function Y(a) {
                return a == null ? null : String(a);
              }
              function pa(a, b) {
                var c = {};
                b &&
                  b.forEach(function (a) {
                    c[a] = !0;
                  });
                Object.keys(a).forEach(function (b) {
                  a[b] ? (c[b] = !0) : c[b] && delete c[b];
                });
                return Object.keys(c);
              }
              function Z(a) {
                return (a !== null && a !== void 0 ? a : []).map(function (a) {
                  return {
                    column: Y(a.column),
                    identifier: a.identifier,
                    line: Y(a.line),
                    script: a.script,
                  };
                });
              }
              function qa(a) {
                a = String(a);
                return a.length > U ? a.substring(0, U - 3) + "..." : a;
              }
              function ra(a, b) {
                var c;
                c = {
                  appId: Y(b.appId),
                  cavalry_lid: b.cavalry_lid,
                  access_token: k.access_token,
                  ancestor_hash: a.hash,
                  bundle_variant:
                    (c = b.bundle_variant) !== null && c !== void 0 ? c : null,
                  clientTime: X(a.clientTime),
                  column: a.column,
                  componentStackFrames: Z(a.componentStackFrames),
                  events: a.events,
                  extra: pa(a.extra, b.extra),
                  forcedKey: a.forcedKey,
                  frontend_env:
                    (c = b.frontend_env) !== null && c !== void 0 ? c : null,
                  guardList: a.guardList,
                  line: a.line,
                  loggingFramework: b.loggingFramework,
                  messageFormat: qa(a.messageFormat),
                  messageParams: a.messageParams.map(qa),
                  name: a.name,
                  sample_weight: Y(b.sample_weight),
                  script: a.script,
                  site_category: b.site_category,
                  stackFrames: Z(a.stackFrames),
                  type: a.type,
                  page_time: Y(a.page_time),
                  project: a.project,
                  push_phase: b.push_phase,
                  report_source: b.report_source,
                  report_source_ref: b.report_source_ref,
                  rollout_hash:
                    (c = b.rollout_hash) !== null && c !== void 0 ? c : null,
                  script_path: b.script_path,
                  server_revision: Y(b.server_revision),
                  spin: Y(b.spin),
                  svn_rev: String(b.client_revision),
                  additional_client_revisions: ES(
                    "Array",
                    "from",
                    !1,
                    (c = b.additional_client_revisions) !== null && c !== void 0
                      ? c
                      : []
                  ).map(X),
                  taalOpcodes:
                    a.taalOpcodes == null
                      ? null
                      : a.taalOpcodes.map(function (a) {
                          return a;
                        }),
                  web_session_id: b.web_session_id,
                  version: "3",
                  xFBDebug: a.xFBDebug,
                };
                b = a.blameModule;
                var d = a.deferredSource;
                b != null && (c.blameModule = String(b));
                d &&
                  d.stackFrames &&
                  (c.deferredSource = { stackFrames: Z(d.stackFrames) });
                a.metadata && (c.metadata = a.metadata);
                a.loadingUrls && (c.loadingUrls = a.loadingUrls);
                a.serverHash != null && (c.serverHash = a.serverHash);
                a.windowLocationURL != null &&
                  (c.windowLocationURL = a.windowLocationURL);
                a.loggingSource != null && (c.loggingSource = a.loggingSource);
                return c;
              }
              function sa(a, b, c) {
                var d;
                W++;
                if (b.sample_weight === 0) return !1;
                var e = s.shouldLog(a);
                if (e == null) return !1;
                if (
                  (d = b.projectBlocklist) !== null &&
                  d !== void 0 &&
                  ES(d, "includes", !0, a.project)
                )
                  return !1;
                d = ra(a, b);
                ES("Object", "assign", !1, d, {
                  ancestors: V.slice(),
                  clientWeight: X(e),
                  page_position: X(W),
                });
                V.length < 15 && V.push(a.hash);
                c(d);
                return !0;
              }
              var ta = { createErrorPayload: ra, postError: sa },
                $ = null,
                ua = !1;
              function va(a) {
                if (!$) return;
                var b = a.reason,
                  c;
                if (
                  b != null &&
                  typeof b === "object" &&
                  (b.name == null ||
                    b.name === "" ||
                    b.message == null ||
                    b.message === "")
                )
                  try {
                    (c = h(
                      "UnhandledRejection: %s",
                      ES("JSON", "stringify", !1, b)
                    )),
                      (c.loggingSource = "ONUNHANDLEDREJECTION");
                  } catch (a) {
                    (c = h(
                      "UnhandledRejection: (circular) %s",
                      Object.keys(b).join(",")
                    )),
                      (c.loggingSource = "ONUNHANDLEDREJECTION");
                  }
                else
                  (c = u(b)),
                    c.loggingSource ||
                      (c.loggingSource = "ONUNHANDLEDREJECTION");
                try {
                  b = a.promise;
                  c.stack =
                    String(c.stack || "") +
                    (b != null && typeof b.settledStack === "string"
                      ? "\n(<promise_settled_stack_below>)\n" + b.settledStack
                      : "") +
                    (b != null && typeof b.createdStack === "string"
                      ? "\n(<promise_created_stack_below>)\n" + b.createdStack
                      : "");
                } catch (a) {}
                $.reportError(c);
                a.preventDefault();
              }
              function wa(b) {
                ($ = b),
                  typeof a.addEventListener === "function" &&
                    !ua &&
                    ((ua = !0), a.addEventListener("unhandledrejection", va));
              }
              var xa = { onunhandledrejection: va, setup: wa };
              c = {
                preSetup: function (a) {
                  (a == null || a.ignoreOnError !== !0) && w.setup(R),
                    (a == null || a.ignoreOnUnahndledRejection !== !0) &&
                      xa.setup(R);
                },
                setup: function (a, b) {
                  R.addListener(function (c) {
                    ta.postError(c, a, b);
                  });
                },
              };
              var ya = (function () {
                function a(a) {
                  (this.project = a),
                    (this.events = []),
                    (this.metadata = new A()),
                    (this.taalOpcodes = []);
                }
                var b = a.prototype;
                b.$1 = function (b, c) {
                  var d = String(c),
                    e = this.events,
                    f = this.project,
                    h = this.metadata,
                    i = this.blameModule,
                    j = this.forcedKey,
                    k = this.error,
                    l;
                  for (
                    var m = arguments.length,
                      n = new Array(m > 2 ? m - 2 : 0),
                      o = 2;
                    o < m;
                    o++
                  )
                    n[o - 2] = arguments[o];
                  if (this.normalizedError) {
                    var p = {
                      message:
                        this.normalizedError.messageFormat +
                        " [Caught in: " +
                        d +
                        "]",
                      params: [].concat(this.normalizedError.messageParams, n),
                      forcedKey: j,
                    };
                    l = babelHelpers["extends"]({}, this.normalizedError, {
                      message: p.message,
                      messageFormat: p.message,
                      messageParams: C.toStringParams(p.params),
                      project: f,
                      type: b,
                      loggingSource: "FBLOGGER",
                    });
                  } else if (k)
                    this.taalOpcodes.length > 0 &&
                      new a("fblogger")
                        .blameToPreviousFrame()
                        .blameToPreviousFrame()
                        .warn("Blame helpers do not work with catching"),
                      C.aggregateError(k, {
                        messageFormat: d,
                        messageParams: C.toStringParams(n),
                        errorName: k.name,
                        forcedKey: j,
                        project: f,
                        type: b,
                        loggingSource: "FBLOGGER",
                      }),
                      (l = M.normalizeError(k));
                  else {
                    k = new Error(d);
                    if (k.stack === void 0)
                      try {
                        throw k;
                      } catch (a) {}
                    k.messageFormat = d;
                    k.messageParams = C.toStringParams(n);
                    k.blameModule = i;
                    k.forcedKey = j;
                    k.project = f;
                    k.type = b;
                    k.loggingSource = "FBLOGGER";
                    k.taalOpcodes = [g.PREVIOUS_FRAME, g.PREVIOUS_FRAME].concat(
                      this.taalOpcodes
                    );
                    l = M.normalizeError(k);
                    l.name = "FBLogger";
                  }
                  if (!h.isEmpty())
                    if (l.metadata == null) l.metadata = h.format();
                    else {
                      var q = l.metadata.concat(h.format()),
                        r = new Set(q);
                      l.metadata = ES("Array", "from", !1, r.values());
                    }
                  if (e.length > 0)
                    if (l.events != null) {
                      var s;
                      (s = l.events).push.apply(s, e);
                    } else l.events = e;
                  R.reportNormalizedError(l);
                  return k;
                };
                b.fatal = function (a) {
                  for (
                    var b = arguments.length,
                      c = new Array(b > 1 ? b - 1 : 0),
                      d = 1;
                    d < b;
                    d++
                  )
                    c[d - 1] = arguments[d];
                  this.$1.apply(this, ["fatal", a].concat(c));
                };
                b.mustfix = function (a) {
                  for (
                    var b = arguments.length,
                      c = new Array(b > 1 ? b - 1 : 0),
                      d = 1;
                    d < b;
                    d++
                  )
                    c[d - 1] = arguments[d];
                  this.$1.apply(this, ["error", a].concat(c));
                };
                b.warn = function (a) {
                  for (
                    var b = arguments.length,
                      c = new Array(b > 1 ? b - 1 : 0),
                      d = 1;
                    d < b;
                    d++
                  )
                    c[d - 1] = arguments[d];
                  this.$1.apply(this, ["warn", a].concat(c));
                };
                b.info = function (a) {
                  for (
                    var b = arguments.length,
                      c = new Array(b > 1 ? b - 1 : 0),
                      d = 1;
                    d < b;
                    d++
                  )
                    c[d - 1] = arguments[d];
                  this.$1.apply(this, ["info", a].concat(c));
                };
                b.debug = function (a) {};
                b.mustfixThrow = function (a) {
                  for (
                    var b = arguments.length,
                      c = new Array(b > 1 ? b - 1 : 0),
                      d = 1;
                    d < b;
                    d++
                  )
                    c[d - 1] = arguments[d];
                  var e = this.$1.apply(this, ["error", a].concat(c));
                  e ||
                    ((e = h(
                      "mustfixThrow does not support catchingNormalizedError"
                    )),
                    (e.taalOpcodes = e.taalOpcodes || []),
                    e.taalOpcodes.push(g.PREVIOUS_FRAME));
                  throw e;
                };
                b.catching = function (b) {
                  !(b instanceof Error)
                    ? new a("fblogger")
                        .blameToPreviousFrame()
                        .warn("Catching non-Error object is not supported")
                    : (this.error = b);
                  return this;
                };
                b.catchingNormalizedError = function (a) {
                  this.normalizedError = a;
                  return this;
                };
                b.event = function (a) {
                  this.events.push(a);
                  return this;
                };
                b.blameToModule = function (a) {
                  this.blameModule = a;
                  return this;
                };
                b.blameToPreviousFile = function () {
                  this.taalOpcodes.push(g.PREVIOUS_FILE);
                  return this;
                };
                b.blameToPreviousFrame = function () {
                  this.taalOpcodes.push(g.PREVIOUS_FRAME);
                  return this;
                };
                b.blameToPreviousDirectory = function () {
                  this.taalOpcodes.push(g.PREVIOUS_DIR);
                  return this;
                };
                b.addToCategoryKey = function (a) {
                  this.forcedKey = a;
                  return this;
                };
                b.addMetadata = function (a, b, c) {
                  this.metadata.addEntry(a, b, c);
                  return this;
                };
                return a;
              })();
              d = function (a, b) {
                var c = new ya(a);
                return b != null ? c.event(a + "." + b) : c;
              };
              d.addGlobalMetadata = function (a, b, c) {
                A.addGlobalMetadata(a, b, c);
              };
              f = {
                blameToPreviousFile: function (a) {
                  var b;
                  a.taalOpcodes =
                    (b = a.taalOpcodes) !== null && b !== void 0 ? b : [];
                  a.taalOpcodes.push(g.PREVIOUS_FILE);
                  return a;
                },
                blameToPreviousFrame: function (a) {
                  var b;
                  a.taalOpcodes =
                    (b = a.taalOpcodes) !== null && b !== void 0 ? b : [];
                  a.taalOpcodes.push(g.PREVIOUS_FRAME);
                  return a;
                },
                blameToPreviousDirectory: function (a) {
                  var b;
                  a.taalOpcodes =
                    (b = a.taalOpcodes) !== null && b !== void 0 ? b : [];
                  a.taalOpcodes.push(g.PREVIOUS_DIR);
                  return a;
                },
              };
              F = {
                err: h,
                ErrorBrowserConsole: j,
                ErrorDynamicData: k,
                ErrorFilter: s,
                ErrorGlobalEventHandler: w,
                ErrorGuard: T,
                ErrorGuardState: y,
                ErrorMetadata: A,
                ErrorNormalizeUtils: M,
                ErrorPoster: ta,
                ErrorPubSub: R,
                ErrorSerializer: C,
                ErrorSetup: c,
                ErrorXFBDebug: G,
                FBLogger: d,
                getErrorSafe: u,
                getSimpleHash: H,
                TAAL: f,
                TAALOpcode: g,
              };
              e.exports = F;
            },
            null
          );
          __d(
            "FBLogger",
            ["fb-error"],
            function (a, b, c, d, e, f, g) {
              "use strict";
              g["default"] = c("fb-error").FBLogger;
            },
            98
          );
          __d(
            "BaseDeserializePHPQueryData",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              var g = /^([-_\w]+)((?:\[[-_\w]*\])+)=?(.*)/;
              function h(a) {
                return a === "hasOwnProperty" || a === "__proto__"
                  ? "\ud83d\udf56"
                  : a;
              }
              function a(a, b) {
                if (a == null || a === "") return {};
                var c = {};
                a = a.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
                a = a.split("&");
                var d = Object.prototype.hasOwnProperty;
                for (var e = 0, f = a.length; e < f; e++) {
                  var i = a[e].match(g);
                  if (!i) {
                    var j = a[e].indexOf("=");
                    if (j === -1) c[b(a[e])] = null;
                    else {
                      var k = a[e].substring(0, j);
                      j = a[e].substring(j + 1);
                      c[b(k)] = b(j);
                    }
                  } else {
                    k = i[2].split(/\]\[|\[|\]/).slice(0, -1);
                    j = i[1];
                    i = b(i[3] || "");
                    k[0] = j;
                    j = c;
                    for (var l = 0; l < k.length - 1; l++) {
                      var m = h(k[l]);
                      if (m) {
                        if (!d.call(j, m)) {
                          var n =
                            k[l + 1] && !k[l + 1].match(/^\d{1,3}$/) ? {} : [];
                          j[m] = n;
                          if (j[m] !== n) return c;
                        }
                        j = j[m];
                      } else
                        k[l + 1] && !k[l + 1].match(/^\d{1,3}$/)
                          ? j.push({})
                          : j.push([]),
                          (j = j[j.length - 1]);
                    }
                    j instanceof Array && k[k.length - 1] === ""
                      ? j.push(i)
                      : (j[h(k[k.length - 1])] = i);
                  }
                }
                return c;
              }
              f.deserialize = a;
            },
            66
          );
          __d(
            "flattenPHPQueryData",
            ["invariant"],
            function (a, b, c, d, e, f, g, h) {
              function a(a) {
                return i(a, "", {});
              }
              function i(a, b, c) {
                if (a == null) c[b] = void 0;
                else if (typeof a === "object") {
                  typeof a.appendChild !== "function" || h(0, 2616);
                  for (var d in a)
                    d !== "$$typeof" &&
                      Object.prototype.hasOwnProperty.call(a, d) &&
                      a[d] !== void 0 &&
                      i(a[d], b ? b + "[" + d + "]" : d, c);
                } else c[b] = a;
                return c;
              }
              g["default"] = a;
            },
            98
          );
          __d(
            "PHPQuerySerializer",
            ["BaseDeserializePHPQueryData", "flattenPHPQueryData"],
            function (a, b, c, d, e, f, g) {
              function a(a) {
                var b = [];
                a = c("flattenPHPQueryData")(a);
                for (var d in a)
                  if (Object.prototype.hasOwnProperty.call(a, d)) {
                    var e = h(d);
                    a[d] === void 0
                      ? b.push(e)
                      : b.push(e + "=" + h(String(a[d])));
                  }
                return b.join("&");
              }
              function h(a) {
                return encodeURIComponent(a)
                  .replace(/%5D/g, "]")
                  .replace(/%5B/g, "[");
              }
              function b(a) {
                return d("BaseDeserializePHPQueryData").deserialize(a, i);
              }
              function i(a) {
                try {
                  return decodeURIComponent(a.replace(/\+/g, " "));
                } catch (b) {
                  return a;
                }
              }
              e = {
                decodeComponent: i,
                deserialize: b,
                encodeComponent: h,
                serialize: a,
              };
              f.exports = e;
            },
            34
          );
          __d(
            "PHPStrictQuerySerializer",
            ["PHPQuerySerializer", "flattenPHPQueryData"],
            function (a, b, c, d, e, f, g) {
              function a(a) {
                var b = [];
                a = c("flattenPHPQueryData")(a);
                for (var d in a)
                  if (Object.prototype.hasOwnProperty.call(a, d)) {
                    var e = h(d);
                    a[d] === void 0
                      ? b.push(e)
                      : b.push(e + "=" + h(String(a[d])));
                  }
                return b.join("&");
              }
              function h(a) {
                return encodeURIComponent(a);
              }
              g.serialize = a;
              g.encodeComponent = h;
              g.deserialize = d("PHPQuerySerializer").deserialize;
              g.decodeComponent = d("PHPQuerySerializer").decodeComponent;
            },
            98
          );
          __d(
            "URIRFC3986",
            [],
            function (a, b, c, d, e, f) {
              var g = new RegExp(
                "^([^:/?#]+:)?(//([^\\\\/?#@]*@)?(\\[[A-Fa-f0-9:.]+\\]|[^\\/?#:]*)(:[0-9]*)?)?([^?#]*)(\\?[^#]*)?(#.*)?"
              );
              function a(a) {
                if (a.trim() === "") return null;
                a = a.match(g);
                if (a == null) return null;
                var b = a[2] ? a[2].substr(2) : null,
                  c = a[1] ? a[1].substr(0, a[1].length - 1) : null;
                a = {
                  uri: a[0] ? a[0] : null,
                  scheme: c,
                  authority: b,
                  userinfo: a[3] ? a[3].substr(0, a[3].length - 1) : null,
                  host: a[2] ? a[4] : null,
                  port: a[5]
                    ? a[5].substr(1)
                      ? parseInt(a[5].substr(1), 10)
                      : null
                    : null,
                  path: a[6] ? a[6] : null,
                  query: a[7] ? a[7].substr(1) : null,
                  fragment: a[8] ? a[8].substr(1) : null,
                  isGenericURI: b === null && !!c,
                };
                return a;
              }
              f.parse = a;
            },
            66
          );
          __d(
            "createObjectFrom",
            [],
            function (a, b, c, d, e, f) {
              function g(a, b) {
                if (b === void 0) return g(a, !0);
                var c = {};
                if (Array.isArray(b))
                  for (var d = a.length - 1; d >= 0; d--) c[a[d]] = b[d];
                else for (d = a.length - 1; d >= 0; d--) c[a[d]] = b;
                return c;
              }
              f["default"] = g;
            },
            66
          );
          __d(
            "URISchemes",
            ["createObjectFrom"],
            function (a, b, c, d, e, f, g) {
              var h = c("createObjectFrom")([
                "accountscenter",
                "aidemos",
                "aistudio",
                "blob",
                "cmms",
                "fb",
                "fba",
                "fbatwork",
                "fb-ama",
                "fb-internal",
                "fb-workchat",
                "fb-workchat-secure",
                "fb-messenger",
                "fb-messenger-public",
                "fb-messenger-group-thread",
                "fb-page-messages",
                "fb-pma",
                "fbcf",
                "fbconnect",
                "fbinternal",
                "fbmobilehome",
                "fbrpc",
                "file",
                "flipper",
                "ftp",
                "gtalk",
                "http",
                "https",
                "mailto",
                "wss",
                "ms-app",
                "intent",
                "itms",
                "itms-apps",
                "itms-services",
                "lasso",
                "market",
                "svn+ssh",
                "fbstaging",
                "tel",
                "sms",
                "pebblejs",
                "sftp",
                "whatsapp",
                "moments",
                "flash",
                "fblite",
                "chrome-extension",
                "webcal",
                "instagram",
                "iglite",
                "fb124024574287414",
                "fb124024574287414rc",
                "fb124024574287414master",
                "fb1576585912599779",
                "fb929757330408142",
                "designpack",
                "fbpixelcloud",
                "fbapi20130214",
                "fb1196383223757595",
                "oculus",
                "oculus.store",
                "oculus.feed",
                "oculusstore",
                "odh",
                "com.oculus.rd",
                "aria",
                "skype",
                "ms-windows-store",
                "callto",
                "messenger",
                "workchat",
                "fb236786383180508",
                "fb1775440806014337",
                "data",
                "fb-mk",
                "munki",
                "origami-file",
                "fb-nimble-vrsrecorder",
                "fb-nimble-monohandtrackingvis",
                "together",
                "togetherbl",
                "horizonlauncher",
                "venues",
                "whatsapp-consumer",
                "whatsapp-smb",
                "fb-ide-opener",
                "fb-vscode",
                "fb-vscode-insiders",
                "editor",
                "spark-studio",
                "manifold",
                "origami-internal",
                "origami-public",
                "stella",
                "mwa",
                "mattermost",
                "logaggregator",
                "workrooms",
              ]);
              function a(a) {
                return a == null || a === ""
                  ? !0
                  : Object.prototype.hasOwnProperty.call(h, a.toLowerCase());
              }
              g.isAllowed = a;
            },
            98
          );
          __d(
            "isSameOrigin",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              function a(a, b) {
                return !a.getProtocol() ||
                  !a.getDomain() ||
                  !b.getProtocol() ||
                  !b.getDomain()
                  ? !1
                  : a.getOrigin() === b.getOrigin();
              }
              f["default"] = a;
            },
            66
          );
          __d(
            "setHostSubdomain",
            [],
            function (a, b, c, d, e, f) {
              function a(a, b) {
                a = a.split(".");
                a.length < 3 ? a.unshift(b) : (a[0] = b);
                return a.join(".");
              }
              f["default"] = a;
            },
            66
          );
          __d(
            "URIAbstractBase",
            [
              "invariant",
              "FBLogger",
              "PHPStrictQuerySerializer",
              "URIRFC3986",
              "URISchemes",
              "isSameOrigin",
              "setHostSubdomain",
            ],
            function (a, b, c, d, e, f, g) {
              var h,
                i,
                j = new RegExp(
                  "[\\x00-\\x2c\\x2f\\x3b-\\x40\\x5c\\x5e\\x60\\x7b-\\x7f\\uFDD0-\\uFDEF\\uFFF0-\\uFFFF\\u2047\\u2048\\uFE56\\uFE5F\\uFF03\\uFF0F\\uFF1F]"
                ),
                k = new RegExp("^(?:[^/]*:|[\\x00-\\x1f]*/[\\x00-\\x1f]*/)"),
                l = [];
              a = (function () {
                "use strict";
                a.parse = function (c, d, e, f) {
                  if (!d) return !0;
                  if (d instanceof a) {
                    c.setProtocol(d.getProtocol());
                    c.setDomain(d.getDomain());
                    c.setPort(d.getPort());
                    c.setPath(d.getPath());
                    c.setQueryData(
                      f.deserialize(f.serialize(d.getQueryData()))
                    );
                    c.setFragment(d.getFragment());
                    c.setIsGeneric(d.getIsGeneric());
                    c.setForceFragmentSeparator(d.getForceFragmentSeparator());
                    c.setOriginalRawQuery(d.getOriginalRawQuery());
                    c.setQueryParamModified(!1);
                    return !0;
                  }
                  d = d.toString().trim();
                  var g = (h || (h = b("URIRFC3986"))).parse(d) || {
                    fragment: null,
                    scheme: null,
                    query: null,
                  };
                  if (!e && !(i || (i = b("URISchemes"))).isAllowed(g.scheme))
                    return !1;
                  c.setProtocol(g.scheme || "");
                  if (!e && j.test(g.host || "")) return !1;
                  c.setDomain(g.host || "");
                  c.setPort(g.port || "");
                  c.setPath(g.path || "");
                  if (e) c.setQueryData(f.deserialize(g.query || "") || {});
                  else
                    try {
                      c.setQueryData(f.deserialize(g.query || "") || {});
                    } catch (a) {
                      return !1;
                    }
                  c.setFragment(g.fragment || "");
                  g.fragment === "" && c.setForceFragmentSeparator(!0);
                  c.setIsGeneric(g.isGenericURI || !1);
                  c.setOriginalRawQuery(g.query);
                  c.setQueryParamModified(!1);
                  if (g.userinfo !== null) {
                    if (e)
                      throw new Error(
                        "URI.parse: invalid URI (userinfo is not allowed in a URI): " +
                          d
                      );
                    return !1;
                  }
                  if (!c.getDomain() && c.getPath().indexOf("\\") !== -1) {
                    if (e)
                      throw new Error(
                        "URI.parse: invalid URI (no domain but multiple back-slashes): " +
                          d
                      );
                    return !1;
                  }
                  if (!c.getProtocol() && k.test(d)) {
                    if (e)
                      throw new Error(
                        "URI.parse: invalid URI (unsafe protocol-relative URLs): " +
                          d +
                          "'"
                      );
                    return !1;
                  }
                  if (
                    c.getDomain() &&
                    c.getPath() &&
                    !ES(c.getPath(), "startsWith", !0, "/")
                  ) {
                    if (e)
                      throw new Error(
                        "URI.parse: invalid URI (domain and path where path lacks leading slash): " +
                          d
                      );
                    return !1;
                  }
                  c.getProtocol() &&
                    !c.getIsGeneric() &&
                    !c.getDomain() &&
                    c.getPath() !== "" &&
                    b("FBLogger")("uri").warn(
                      'URI.parse: invalid URI (protocol "' +
                        c.getProtocol() +
                        '" with no domain)'
                    );
                  return !0;
                };
                a.tryParse = function (b, c) {
                  var d = new a(null, c);
                  return a.parse(d, b, !1, c) ? d : null;
                };
                a.isValid = function (b, c) {
                  return !!a.tryParse(b, c);
                };
                function a(b, c) {
                  c || g(0, 2966),
                    (this.$9 = c),
                    (this.$7 = ""),
                    (this.$1 = ""),
                    (this.$6 = ""),
                    (this.$5 = ""),
                    (this.$3 = ""),
                    (this.$4 = !1),
                    (this.$8 = {}),
                    (this.$2 = !1),
                    a.parse(this, b, !0, c),
                    (this.$11 = !1);
                }
                var c = a.prototype;
                c.setProtocol = function (a) {
                  (i || (i = b("URISchemes"))).isAllowed(a) || g(0, 11793, a);
                  this.$7 = a;
                  return this;
                };
                c.getProtocol = function () {
                  return (this.$7 || "").toLowerCase();
                };
                c.setSecure = function (a) {
                  return this.setProtocol(a ? "https" : "http");
                };
                c.isSecure = function () {
                  return this.getProtocol() === "https";
                };
                c.setDomain = function (a) {
                  if (j.test(a))
                    throw new Error(
                      "URI.setDomain: unsafe domain specified: " +
                        a +
                        " for url " +
                        this.toString()
                    );
                  this.$1 = a;
                  return this;
                };
                c.getDomain = function () {
                  return this.$1;
                };
                c.setPort = function (a) {
                  this.$6 = a;
                  return this;
                };
                c.getPort = function () {
                  return this.$6;
                };
                c.setPath = function (a) {
                  this.$5 = a;
                  return this;
                };
                c.getPath = function () {
                  return this.$5;
                };
                c.addQueryData = function (a, b) {
                  Object.prototype.toString.call(a) === "[object Object]"
                    ? ES("Object", "assign", !1, this.$8, a)
                    : (this.$8[a] = b);
                  this.$11 = !0;
                  return this;
                };
                c.setQueryData = function (a) {
                  this.$8 = a;
                  this.$11 = !0;
                  return this;
                };
                c.getQueryData = function () {
                  return this.$8;
                };
                c.setQueryString = function (a) {
                  return this.setQueryData(this.$9.deserialize(a));
                };
                c.getQueryString = function (a, b, c) {
                  a === void 0 && (a = !1);
                  b === void 0 &&
                    (b = function () {
                      return !1;
                    });
                  c === void 0 && (c = null);
                  return this.$12(!1, a, b, c);
                };
                c.$12 = function (a, b, c, d) {
                  a === void 0 && (a = !1);
                  b === void 0 && (b = !1);
                  c === void 0 &&
                    (c = function () {
                      return !1;
                    });
                  d === void 0 && (d = null);
                  if (!this.$11 && (b || c(this.getDomain()))) {
                    return (b = this.$10) != null ? b : "";
                  }
                  return (a && d ? d : this.$9).serialize(this.getQueryData());
                };
                c.removeQueryData = function (a) {
                  Array.isArray(a) || (a = [a]);
                  for (var b = 0, c = a.length; b < c; ++b)
                    delete this.$8[a[b]];
                  this.$11 = !0;
                  return this;
                };
                c.setFragment = function (a) {
                  this.$3 = a;
                  this.setForceFragmentSeparator(!1);
                  return this;
                };
                c.getFragment = function () {
                  return this.$3;
                };
                c.setForceFragmentSeparator = function (a) {
                  this.$2 = a;
                  return this;
                };
                c.getForceFragmentSeparator = function () {
                  return this.$2;
                };
                c.setIsGeneric = function (a) {
                  this.$4 = a;
                  return this;
                };
                c.getIsGeneric = function () {
                  return this.$4;
                };
                c.getOriginalRawQuery = function () {
                  return this.$10;
                };
                c.setOriginalRawQuery = function (a) {
                  this.$10 = a;
                  return this;
                };
                c.setQueryParamModified = function (a) {
                  this.$11 = a;
                  return this;
                };
                c.isEmpty = function () {
                  return !(
                    this.getPath() ||
                    this.getProtocol() ||
                    this.getDomain() ||
                    this.getPort() ||
                    Object.keys(this.getQueryData()).length > 0 ||
                    this.getFragment()
                  );
                };
                c.toString = function (a, b) {
                  a === void 0 &&
                    (a = function () {
                      return !1;
                    });
                  b === void 0 && (b = null);
                  return this.$13(!1, !1, a, b);
                };
                c.toStringRawQuery = function (a, b) {
                  a === void 0 &&
                    (a = function () {
                      return !1;
                    });
                  b === void 0 && (b = null);
                  return this.$13(!0, !1, a, b);
                };
                c.toStringPreserveQuery = function (a, b) {
                  a === void 0 &&
                    (a = function () {
                      return !1;
                    });
                  b === void 0 && (b = null);
                  return this.$13(!1, !0, a, b);
                };
                c.toStringStrictQueryEncoding = function (a) {
                  a === void 0 &&
                    (a = function () {
                      return !1;
                    });
                  return this.$13(!0, !1, a, b("PHPStrictQuerySerializer"));
                };
                c.$13 = function (a, b, c, d) {
                  a === void 0 && (a = !1);
                  b === void 0 && (b = !1);
                  c === void 0 &&
                    (c = function () {
                      return !1;
                    });
                  d === void 0 && (d = null);
                  var e = this;
                  for (var f = 0; f < l.length; f++) e = l[f](e);
                  return e.$14(a, b, c, d);
                };
                c.$14 = function (a, b, c, d) {
                  a === void 0 && (a = !1);
                  b === void 0 && (b = !1);
                  c === void 0 &&
                    (c = function () {
                      return !1;
                    });
                  d === void 0 && (d = null);
                  var e = "",
                    f = this.getProtocol();
                  f && (e += f + ":" + (this.getIsGeneric() ? "" : "//"));
                  f = this.getDomain();
                  f && (e += f);
                  f = this.getPort();
                  f && (e += ":" + f);
                  f = this.getPath();
                  f ? (e += f) : e && (e += "/");
                  f = this.$12(a, b, c, d);
                  f && (e += "?" + f);
                  a = this.getFragment();
                  a
                    ? (e += "#" + a)
                    : this.getForceFragmentSeparator() && (e += "#");
                  return e;
                };
                a.registerFilter = function (a) {
                  l.push(a);
                };
                c.getOrigin = function () {
                  var a = this.getPort();
                  return (
                    this.getProtocol() +
                    "://" +
                    this.getDomain() +
                    (a ? ":" + a : "")
                  );
                };
                c.isSameOrigin = function (a) {
                  return b("isSameOrigin")(this, a);
                };
                c.getQualifiedURIBase = function () {
                  return new a(this, this.$9).qualify();
                };
                c.qualify = function () {
                  if (!this.getDomain()) {
                    var b = new a(window.location.href, this.$9);
                    this.setProtocol(b.getProtocol())
                      .setDomain(b.getDomain())
                      .setPort(b.getPort());
                  }
                  return this;
                };
                c.setSubdomain = function (a) {
                  var c = this.qualify();
                  c = c.getDomain();
                  return this.setDomain(b("setHostSubdomain")(c, a));
                };
                c.getSubdomain = function () {
                  if (!this.getDomain()) return "";
                  var a = this.getDomain().split(".");
                  if (a.length <= 2) return "";
                  else return a[0];
                };
                c.isSubdomainOfDomain = function (b) {
                  var c = this.getDomain();
                  return a.isDomainSubdomainOfDomain(c, b, this.$9);
                };
                a.isDomainSubdomainOfDomain = function (b, c, d) {
                  if (c === "" || b === "") return !1;
                  if (ES(b, "endsWith", !0, c)) {
                    var e = b.length,
                      f = c.length,
                      g = e - f - 1;
                    if (e === f || b[g] === ".") {
                      e = new a(null, d);
                      e.setDomain(c);
                      return a.isValid(e, d);
                    }
                  }
                  return !1;
                };
                return a;
              })();
              e.exports = a;
            },
            null
          );
          __d(
            "sdk.URI",
            ["QueryString", "URIAbstractBase"],
            function (a, b, c, d, e, f, g) {
              var h = /\.facebook\.com$/,
                i = {
                  serialize: function (a) {
                    return a ? c("QueryString").encode(a) : "";
                  },
                  deserialize: function (a) {
                    return a ? c("QueryString").decode(a) : {};
                  },
                };
              a = (function (a) {
                babelHelpers.inheritsLoose(b, a);
                function b(b) {
                  return a.call(this, b, i) || this;
                }
                var d = b.prototype;
                d.isFacebookURI = function () {
                  return h.test(this.getDomain());
                };
                d.valueOf = function () {
                  return this.toString();
                };
                b.isValidURI = function (a) {
                  return c("URIAbstractBase").isValid(a, i);
                };
                return b;
              })(c("URIAbstractBase"));
              g["default"] = a;
            },
            98
          );
          __d(
            "ApiClientUtils",
            [
              "ArgumentError",
              "Assert",
              "Log",
              "flattenObject",
              "sdk.URI",
              "sprintf",
            ],
            function (a, b, c, d, e, f, g) {
              var h = { get: !0, post: !0, delete: !0, put: !0 };
              function a(a) {
                var b = a.shift();
                c("Assert").isString(b, "Invalid path");
                !/^https?/.test(b) && b.charAt(0) !== "/" && (b = "/" + b);
                var e,
                  f = {};
                try {
                  e = new (c("sdk.URI"))(b);
                } catch (a) {
                  throw new (c("ArgumentError"))(a.message, a);
                }
                a.forEach(function (a) {
                  return (f[typeof a] = a);
                });
                b = (f.string || "get").toLowerCase();
                c("Assert").isTrue(
                  Object.prototype.hasOwnProperty.call(h, b),
                  c("sprintf")("Invalid method passed to ApiClient: %s", b)
                );
                a = f["function"];
                a || d("Log").warn("No callback passed to the ApiClient");
                f.object && e.addQueryData(c("flattenObject")(f.object));
                var g = e.getQueryData();
                g.method = b;
                return { uri: e, callback: a, params: g };
              }
              g.parseCallDataFromArgs = a;
            },
            98
          );
          __d(
            "errorCode",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              function a(a) {
                throw new Error(
                  'errorCode("' + a + '"): This should not happen. Oh noes!'
                );
              }
              f["default"] = a;
            },
            66
          );
          __d(
            "nullthrows",
            [],
            function (a, b, c, d, e, f) {
              function a(a, b) {
                b === void 0 && (b = "Got unexpected null or undefined");
                if (a != null) return a;
                a = new Error(b);
                a.framesToPop = 1;
                throw a;
              }
              f["default"] = a;
            },
            66
          );
          __d(
            "sdk.safelyParseResponse",
            ["errorCode", "nullthrows"],
            function (a, b, c, d, e, f, g, h) {
              "use strict";
              var i = function (a, b, c, d) {
                return j;
              };
              function a(a, b, d) {
                b === void 0 && (b = null);
                d === void 0 && (d = null);
                try {
                  return a === null
                    ? j
                    : ES("JSON", "parse", !1, c("nullthrows")(a));
                } catch (c) {
                  return i(c, a, b, d);
                }
              }
              var j = {
                error: {
                  code: 1,
                  error_subcode: 1357046,
                  message: "Received Invalid JSON reply.",
                  type: "http",
                },
              };
              a.ERROR = j;
              a.setErrorHandler = function (a) {
                i = a;
              };
              b = a;
              g["default"] = b;
            },
            98
          );
          __d(
            "whitelistObjectKeys",
            [],
            function (a, b, c, d, e, f) {
              function a(a, b) {
                var c = {};
                b = Array.isArray(b) ? b : Object.keys(b);
                for (var d = 0; d < b.length; d++)
                  typeof a[b[d]] !== "undefined" && (c[b[d]] = a[b[d]]);
                return c;
              }
              f["default"] = a;
            },
            66
          );
          __d(
            "ApiBatcher",
            [
              "invariant",
              "ApiClientUtils",
              "QueryString",
              "sdk.safelyParseResponse",
              "whitelistObjectKeys",
            ],
            function (a, b, c, d, e, f, g, h) {
              "use strict";
              var i = 50,
                j = 105440539523;
              a = (function () {
                function a(a, b) {
                  (this.$1 = []),
                    (this.$2 = []),
                    (this.$4 = null),
                    (this.executeRequest = a),
                    (this.$3 = b);
                }
                var b = a.prototype;
                b.scheduleBatchCall = function () {
                  var b = this;
                  for (
                    var c = arguments.length, d = new Array(c), e = 0;
                    e < c;
                    e++
                  )
                    d[e] = arguments[e];
                  var f = a.prepareBatchParams(d),
                    g = f.body,
                    h = f.callback,
                    j = f.method,
                    k = f.relative_url,
                    l = { method: j, relative_url: k };
                  g && (l.body = g);
                  this.$1.push(l);
                  this.$2.push(h);
                  this.$1.length == i
                    ? (this.$4 && window.clearTimeout(this.$4), this.$5())
                    : this.$4 ||
                      (this.$4 = window.setTimeout(function () {
                        b.$5();
                      }, 0));
                };
                a.prepareBatchParams = function (a, b) {
                  b === void 0 && (b = []);
                  a = d("ApiClientUtils").parseCallDataFromArgs(a);
                  var e = a.uri,
                    f = a.callback;
                  a = a.params.method;
                  var g,
                    h = e.removeQueryData("method").toString();
                  if (a.toLowerCase() == "post") {
                    var i = e.getQueryData();
                    g = c("QueryString").encode(i);
                    i = c("whitelistObjectKeys")(i, b);
                    h = e.setQueryData(i).toString();
                  }
                  return { body: g, callback: f, method: a, relative_url: h };
                };
                b.$5 = function () {
                  this.$1.length > 0 || h(0, 4698);
                  this.$1.length === this.$2.length || h(0, 4699);
                  var a = this.$1,
                    b = this.$2;
                  this.$1 = [];
                  this.$2 = [];
                  this.$4 = null;
                  if (a.length === 1) {
                    var d = a[0],
                      e = b[0],
                      f = d.body ? c("QueryString").decode(d.body) : null;
                    this.executeRequest(d.relative_url, d.method, f, e);
                    return;
                  }
                  this.executeRequest(
                    "/",
                    "POST",
                    {
                      batch: a,
                      include_headers: !1,
                      batch_app_id: this.$3 || j,
                    },
                    function (a) {
                      Array.isArray(a)
                        ? a.forEach(function (a, d) {
                            b[d](c("sdk.safelyParseResponse")(a && a.body));
                          })
                        : b.forEach(function (a) {
                            return a({
                              error: { message: "Fatal: batch call failed." },
                            });
                          });
                    }
                  );
                };
                return a;
              })();
              g["default"] = a;
            },
            98
          );
          __d(
            "RequestConstants",
            ["errorCode"],
            function (a, b, c, d, e, f, g, h) {
              a = {
                code: 1,
                error_subcode: 1357045,
                message: "unknown error (empty response)",
                type: "http",
                status: 0,
              };
              g.PARSE_ERROR_TEMPLATE = a;
            },
            98
          );
          __d(
            "sdk.Cookie",
            ["QueryString", "sdk.Runtime", "sdk.Scribe", "sdk.feature"],
            function (a, b, c, d, e, f, g) {
              var h = null,
                i = ["fblo_", "fbsr_", "fbm_"];
              function j(a, b, e, f) {
                if (!ES(i, "includes", !0, a)) {
                  d("sdk.Scribe").log("jssdk_error", {
                    appId: c("sdk.Runtime").getClientID(),
                    error: "unknown_cookie_prefix." + a,
                  });
                  if (c("sdk.feature")("limit_unknown_cookie_setting", !1))
                    return;
                }
                a = a + c("sdk.Runtime").getClientID();
                f = f ? "; SameSite=None;Secure" : "";
                var g = h !== null && h !== ".";
                g &&
                  ((document.cookie =
                    a + "=; expires=Wed, 04 Feb 2004 08:00:00 GMT" + f),
                  (document.cookie =
                    a +
                    "=; expires=Wed, 04 Feb 2004 08:00:00 GMT;domain=" +
                    location.hostname +
                    f));
                var j = new Date(e).toUTCString();
                document.cookie =
                  a +
                  "=" +
                  b +
                  (b && e === 0 ? "" : "; expires=" + j) +
                  "; path=/" +
                  (g ? "; domain=" + ((a = h) != null ? a : "") : "") +
                  f;
              }
              function k(a) {
                a = a + c("sdk.Runtime").getClientID();
                a = new RegExp("\\b" + a + "=([^;]*)\\b");
                a = document.cookie.match(a);
                if (a == null) return null;
                else return a[1];
              }
              function a(a) {
                h = a;
                a = c("QueryString").encode({
                  base_domain: h !== null && h !== "." ? h : "",
                });
                var b = new Date();
                b.setFullYear(b.getFullYear() + 1);
                j("fbm_", a, b.getTime(), !0);
              }
              function b() {
                return h;
              }
              function l() {
                var a = k("fbm_");
                if (a != null && h === null) {
                  a = c("QueryString").decode(a);
                  h = a.base_domain;
                  return { base_domain: h };
                }
                return null;
              }
              function e() {
                return k("fbsr_");
              }
              function f(a, b) {
                if (a === "")
                  throw new Error(
                    "Value passed to Cookie.setSignedRequestCookie was empty."
                  );
                j("fbsr_", a, b, !0);
              }
              function m() {
                l(), j("fbsr_", "", 0, !0);
              }
              g.setRaw = j;
              g.getRaw = k;
              g.setDomain = a;
              g.getDomain = b;
              g.loadMeta = l;
              g.loadSignedRequest = e;
              g.setSignedRequestCookie = f;
              g.clearSignedRequestCookie = m;
            },
            98
          );
          __d(
            "CORSRequest",
            [
              "Log",
              "QueryString",
              "RequestConstants",
              "sdk.Cookie",
              "sdk.safelyParseResponse",
              "wrapFunction",
            ],
            function (a, b, c, d, e, f, g) {
              function h(a, b, d) {
                d === void 0 && (d = { withCredentials: !1 });
                if (!self.XMLHttpRequest) return null;
                var e = new XMLHttpRequest(),
                  f = function () {};
                ((d = d) == null ? void 0 : d.withCredentials) &&
                  (e.withCredentials = !0);
                if ("withCredentials" in e)
                  e.open(a, b, !0),
                    e.setRequestHeader(
                      "Content-type",
                      "application/x-www-form-urlencoded"
                    );
                else if (self.XDomainRequest) {
                  e = new XDomainRequest();
                  try {
                    e.open(a, b), (e.onprogress = e.ontimeout = f);
                  } catch (a) {
                    return null;
                  }
                } else return null;
                var g = {
                    send: function (a) {
                      e.send(a);
                    },
                  },
                  h = c("wrapFunction")(
                    function () {
                      (h = f), "onload" in g && g.onload(e);
                    },
                    "entry",
                    "XMLHttpRequest:load"
                  ),
                  i = c("wrapFunction")(
                    function () {
                      (i = f), "onerror" in g && g.onerror(e);
                    },
                    "entry",
                    "XMLHttpRequest:error"
                  );
                e.onload = function () {
                  h();
                };
                e.onerror = function () {
                  i();
                };
                e.onreadystatechange = function () {
                  e.readyState == 4 && (e.status == 200 ? h() : i());
                };
                return g;
              }
              var i = "for (;;);",
                j = i.length;
              function k(a) {
                a.substring(0, j) == i && (a = a.substring(j));
                return a;
              }
              function a(a, b, e, f, g) {
                g === void 0 && (g = { withCredentials: !1 });
                if (
                  ES(a, "includes", !0, "/../") ||
                  ES(a, "includes", !0, "/..\\") ||
                  ES(a, "includes", !0, "\\../") ||
                  ES(a, "includes", !0, "\\..\\")
                ) {
                  d("Log").error(
                    "CORSRequest.execute(): path traversal is not allowed."
                  );
                  return !1;
                }
                try {
                  if (self.document) {
                    var i = d("sdk.Cookie").getRaw("cppo");
                    i &&
                      (a = c("QueryString").appendToUrl(
                        a,
                        c("QueryString").encode({ __cppo: i })
                      ));
                  }
                } catch (a) {}
                e.suppress_http_code = 1;
                i = c("QueryString").encode(e);
                b != "post" &&
                  ((a = c("QueryString").appendToUrl(a, i)), (i = ""));
                e = h(b, a, g);
                if (!e) return !1;
                e.onload = function (b) {
                  f(
                    c("sdk.safelyParseResponse")(k(b.responseText), a, b.status)
                  );
                };
                e.onerror = function (b) {
                  b.responseText
                    ? f(
                        c("sdk.safelyParseResponse")(
                          k(b.responseText),
                          a,
                          b.status
                        )
                      )
                    : f({
                        error: babelHelpers["extends"](
                          {},
                          d("RequestConstants").PARSE_ERROR_TEMPLATE,
                          { status: b.status }
                        ),
                      });
                };
                e.send(i);
                return !0;
              }
              b = { execute: a };
              e = b;
              g["default"] = e;
            },
            98
          );
          __d(
            "ApiClient",
            [
              "ApiBatcher",
              "ApiClientUtils",
              "Assert",
              "CORSRequest",
              "Log",
              "ObservableMixin",
              "QueryString",
              "UrlMap",
              "flattenObject",
            ],
            function (a, b, c, d, e, f, g) {
              var h,
                i,
                j,
                k = [],
                l = !1,
                m = 2e3,
                n = {
                  fql_query: !0,
                  fql_multiquery: !0,
                  friends_get: !0,
                  notifications_get: !0,
                  stream_get: !0,
                  users_getinfo: !0,
                },
                o = ["cors"],
                p = 0,
                q = [],
                r = 0,
                s = 0,
                t,
                u = d("Log");
              function v(a, b, d, e) {
                var f = r !== 0 && p >= r;
                if (f) {
                  q.push(function () {
                    return v(a, b, d, e);
                  });
                  y.inform("request.queued", a, b, d);
                  return;
                }
                p++;
                var g = babelHelpers["extends"]({}, j, d);
                g.pretty = g.pretty || 0;
                g = c("flattenObject")(g);
                f = { cors: c("CORSRequest") };
                var i = {},
                  m = g.access_token || h;
                m && (i.access_token = m);
                b !== "get" &&
                  k.forEach(function (a) {
                    i[a] = g[a];
                  });
                m = Object.keys(i);
                m.length > 0 &&
                  ((a = c("QueryString").appendToUrl(a, i)),
                  delete g.access_token);
                m = o;
                for (var n = 0; n < m.length; n++) {
                  var s = f[m[n]],
                    t = babelHelpers["extends"]({}, g);
                  if (s.execute(a, b, t, e, { withCredentials: l })) return;
                }
                e({
                  error: {
                    type: "no-transport",
                    message: "Could not find a usable transport for request",
                  },
                });
              }
              function w(a, b, c, d, e, f, g, h) {
                if (d.transport && d.transport === "chunked" && h === !1) {
                  a(g, !1);
                  return;
                }
                g &&
                  g.error &&
                  y.inform("request.error", b, c, d, g, Date.now() - e, f);
                y.inform("request.complete", b, c, d, g, Date.now() - e, f);
                p--;
                a && a(g);
                h = q.length > 0 && p < r;
                if (h) {
                  b = q.shift();
                  b();
                }
              }
              function x() {
                for (
                  var a = arguments.length, b = new Array(a), c = 0;
                  c < a;
                  c++
                )
                  b[c] = arguments[c];
                var e = d("ApiClientUtils").parseCallDataFromArgs(b),
                  f = e.uri,
                  g = e.callback,
                  h = e.params,
                  i = h.method;
                z(f, i) && (i = "post");
                var j =
                    f.getProtocol() && f.getDomain()
                      ? f.setQueryData({}).toString()
                      : d("UrlMap").resolve("graph_domain") + f.getPath(),
                  k = s++;
                "_fb_domain" in h && y.setKeptQueryParams(["_fb_domain"]);
                y.inform("request.prepare", j, h, k);
                v(
                  j,
                  i == "get" ? "get" : "post",
                  h,
                  ES(w, "bind", !0, null, g, f.getPath(), i, h, Date.now(), k)
                );
              }
              function a() {
                var a;
                t || (t = new (c("ApiBatcher"))(x, i));
                (a = t).scheduleBatchCall.apply(a, arguments);
              }
              function b(a, b) {
                c("Assert").isObject(a);
                c("Assert").isString(a.method, "method missing");
                b || u.warn("No callback passed to the ApiClient");
                var e = a.method.toLowerCase().replace(".", "_");
                a.format = "json-strings";
                a.api_key = i;
                e = e in n ? "api_read" : "api";
                e = d("UrlMap").resolve(e) + "/restserver.php";
                var f = s++;
                b = ES(
                  w,
                  "bind",
                  !0,
                  null,
                  b,
                  "/restserver.php",
                  "get",
                  a,
                  Date.now(),
                  f
                );
                v(e, "get", a, b);
              }
              function e(a) {
                return c("ApiBatcher").prepareBatchParams(a, k);
              }
              var y = ES("Object", "assign", !1, new (c("ObservableMixin"))(), {
                setAccessToken: function (a) {
                  h &&
                    a &&
                    h !== a &&
                    u.error(
                      "You are overriding current access token, that means some other app is expecting different access token and you will probably break things. Please consider passing access_token directly to API parameters instead of overriding the global settings."
                    ),
                    (h = a);
                },
                setAccessTokenForClientID: function (a, b) {
                  h && i && i !== b
                    ? u.error(
                        "Not overriding access token since it was not initialized by your application."
                      )
                    : (h = a);
                },
                setWithCredentials: function (a) {
                  l = a;
                },
                getWithCredentials: function () {
                  return l;
                },
                getClientID: function () {
                  return i;
                },
                getAccessToken: function () {
                  return h;
                },
                setClientID: function (a) {
                  i &&
                    i !== a &&
                    u.warn(
                      "Warning: Two different applications have attempted to set the client ID. Overriding the previously set client ID."
                    ),
                    (i = a);
                },
                setDefaultParams: function (a) {
                  j = a;
                },
                getDefaultParams: function () {
                  return j;
                },
                setDefaultTransports: function (a) {
                  o = a;
                },
                setLogger: function (a) {
                  u = a;
                },
                setMaxConcurrentRequests: function (a) {
                  r = a;
                },
                setKeptQueryParams: function (a) {
                  k = a;
                },
                getCurrentlyExecutingRequestCount: function () {
                  return p;
                },
                getQueuedRequestCount: function () {
                  return q.length;
                },
                rest: b,
                graph: x,
                scheduleBatchCall: a,
                prepareBatchParams: e,
              });
              function z(a, b) {
                return a.toString().length > m && b === "get";
              }
              f = y;
              g["default"] = f;
            },
            98
          );
          __d(
            "FBEventsParamList",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              var g = "deep",
                h = "shallow";
              a = (function () {
                function a() {
                  this.list = [];
                }
                var b = a.prototype;
                b.append = function (a, b) {
                  this.$1(encodeURIComponent(a), b, g);
                };
                b.each = function (a) {
                  var b = this.list;
                  for (var c = 0, d = b.length; c < d; c++) a(b[c][0], b[c][1]);
                };
                b.toQueryString = function () {
                  var a = [];
                  this.each(function (b, c) {
                    a.push(b + "=" + encodeURIComponent(c));
                  });
                  return a.join("&");
                };
                b.$1 = function (a, b, c) {
                  Object(b) !== b
                    ? this.$2(a, b)
                    : c === g
                    ? this.$3(a, b)
                    : this.$2(a, i(b));
                };
                b.$2 = function (a, b) {
                  b != null && this.list.push([a, b]);
                };
                b.$3 = function (a, b) {
                  for (var c in b)
                    if (Object.prototype.hasOwnProperty.call(b, c)) {
                      var d = a + "[" + encodeURIComponent(c) + "]";
                      this.$1(d, b[c], h);
                    }
                };
                return a;
              })();
              function i(a) {
                if (
                  typeof JSON === "undefined" ||
                  JSON === null ||
                  !ES("JSON", "stringify", !1)
                )
                  return Object.prototype.toString.call(a);
                else return ES("JSON", "stringify", !1, a);
              }
              f["default"] = a;
            },
            66
          );
          __d(
            "FBEventsUtils",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              var g = !("addEventListener" in document);
              function a(a, b, c) {
                var d = g ? "on" + b : b;
                b = function b() {
                  g
                    ? a.detachEvent && a.detachEvent(d, b)
                    : a.removeEventListener(d, b, !1),
                    c();
                };
                g
                  ? a.attachEvent && a.attachEvent(d, b)
                  : a.addEventListener(d, b, !1);
              }
              f.listenOnce = a;
            },
            66
          );
          __d(
            "FBPixelEndpoint",
            ["invariant", "FBEventsParamList", "FBEventsUtils"],
            function (a, b, c, d, e, f, g, h) {
              "use strict";
              var i = "https://www.facebook.com/tr/",
                j = location.href,
                k = window.top !== window,
                l = document.referrer;
              function m(a, b, d, e) {
                e === void 0 && (e = {});
                var f = new (c("FBEventsParamList"))();
                f.append("id", a);
                f.append("ev", b);
                f.append("dl", j);
                f.append("rl", l);
                f.append("if", k);
                f.append("ts", new Date().valueOf());
                f.append("cd", d);
                f.append("sw", window.screen.width);
                f.append("sh", window.screen.height);
                for (a in e) f.append(a, e[a]);
                return f;
              }
              function a(a, b, c, d) {
                a = m(a, b, c, d);
                b = a.toQueryString();
                2048 > (i + "?" + b).length ? n(i, b) : o(i, a);
              }
              function n(a, b) {
                var c = new Image();
                c.src = a + "?" + b;
              }
              function o(a, b) {
                var c = "fb" + Math.random().toString().replace(".", ""),
                  e = document.createElement("form");
                e.method = "post";
                e.action = a;
                e.target = c;
                e.acceptCharset = "utf-8";
                e.style.display = "none";
                a = !!(window.attachEvent && !window.addEventListener);
                a = a ? '<iframe name="' + c + '">' : "iframe";
                var f = document.createElement(a);
                f instanceof HTMLIFrameElement || h(0, 20659);
                f.src = "javascript:false";
                f.id = c;
                f.name = c;
                e.appendChild(f);
                d("FBEventsUtils").listenOnce(f, "load", function () {
                  b.each(function (a, b) {
                    var c = document.createElement("input");
                    c.name = a;
                    c.value = b;
                    e.appendChild(c);
                  }),
                    d("FBEventsUtils").listenOnce(f, "load", function () {
                      var a;
                      (a = e.parentNode) == null ? void 0 : a.removeChild(e);
                    }),
                    e.submit();
                });
                (a = document.body) == null ? void 0 : a.appendChild(e);
              }
              g.sendEvent = a;
            },
            98
          );
          __d(
            "FBAppEvents",
            ["ApiClient", "FBPixelEndpoint"],
            function (a, b, c, d, e, f, g) {
              "use strict";
              function a(a, b, c, e, f) {
                var g = {};
                e != null && (g.vts = e.toString());
                f != null && (g.at = f);
                d("FBPixelEndpoint").sendEvent(a.toString(), b, c, g);
              }
              function b(a, b, d, e) {
                b = "/" + b + "/user_properties";
                a = { data: [{ user_unique_id: a, custom_data: d }] };
                c("ApiClient").graph(b, "post", a, e);
              }
              g.logEvent = a;
              g.updateUserProperties = b;
            },
            98
          );
          __d(
            "Miny",
            [],
            function (a, b, c, d, e, f) {
              var g = "Miny1",
                h = "wxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_".split("");
              a = {
                encode: function (a) {
                  if (/^$|[~\\]|__proto__/.test(a)) return a;
                  a = (a = a.match(/\w+|\W+/g)) != null ? a : [];
                  var b,
                    c = Object.create(null);
                  for (b = 0; b < a.length; b++) c[a[b]] = (c[a[b]] || 0) + 1;
                  var d = Object.keys(c);
                  d.sort(function (a, b) {
                    return parseInt(c[b], 10) - parseInt(c[a], 10);
                  });
                  for (b = 0; b < d.length; b++) {
                    var e = (b - (b % 32)) / 32;
                    c[d[b]] = e ? e.toString(32) + h[b % 32] : h[b % 32];
                  }
                  e = "";
                  for (b = 0; b < a.length; b++) e += c[a[b]];
                  d.unshift(g, d.length);
                  d.push(e);
                  return d.join("~");
                },
              };
              b = a;
              f["default"] = b;
            },
            66
          );
          __d(
            "getBlankIframeSrc",
            ["sdk.UA"],
            function (a, b, c, d, e, f, g) {
              function a() {
                return c("sdk.UA").ie() < 10
                  ? "javascript:false"
                  : "about:blank";
              }
              g["default"] = a;
            },
            98
          );
          __d(
            "insertIframe",
            ["GlobalCallback", "getBlankIframeSrc", "guid"],
            function (a, b, c, d, e, f, g) {
              function a(a) {
                var b = a.id != null ? a.id : c("guid")(),
                  e = a.name != null ? a.name : c("guid")(),
                  f = !1,
                  g = !1,
                  h = function () {
                    f &&
                      !g &&
                      ((g = !0),
                      typeof a.onload === "function" &&
                        a.onload(a.root.firstChild));
                  },
                  i = d("GlobalCallback").create(h);
                if (document.attachEvent) {
                  var j =
                    '<iframe id="' +
                    b +
                    '" name="' +
                    e +
                    '"' +
                    (a.title != null ? ' title="' + a.title + '"' : "") +
                    (a.className != null
                      ? ' class="' + a.className + '"'
                      : "") +
                    ' style="border:none;' +
                    (a.width != null ? "width:" + a.width + "px;" : "") +
                    (a.height != null ? "height:" + a.height + "px;" : "") +
                    '" src="' +
                    c("getBlankIframeSrc")() +
                    '" frameborder="0" scrolling="no" allowtransparency="true" onload="' +
                    i +
                    '()"></iframe>';
                  a.root.innerHTML =
                    '<iframe src="' +
                    c("getBlankIframeSrc")() +
                    '" frameborder="0" scrolling="no" style="height:1px"></iframe>';
                  f = !0;
                  window.setTimeout(function () {
                    (a.root.innerHTML = j),
                      (a.root.firstChild.src = a.url),
                      typeof a.onInsert === "function" &&
                        a.onInsert(a.root.firstChild);
                  }, 0);
                } else {
                  i = document.createElement("iframe");
                  i.id = b;
                  i.name = e;
                  i.onload = h;
                  i.scrolling = "no";
                  i.style.border = "none";
                  i.style.overflow = "hidden";
                  a.title != null && (i.title = a.title);
                  a.className != null && (i.className = a.className);
                  a.height !== void 0 && (i.style.height = a.height + "px");
                  a.width !== void 0 &&
                    (a.width === "100%"
                      ? (i.style.width = a.width)
                      : (i.style.width = a.width + "px"));
                  a.root.appendChild(i);
                  f = !0;
                  i.src = a.url;
                  a.onInsert && a.onInsert(i);
                }
              }
              g["default"] = a;
            },
            98
          );
          __d(
            "sdk.Impressions",
            [
              "Miny",
              "QueryString",
              "UrlMap",
              "getBlankIframeSrc",
              "guid",
              "insertIframe",
              "sdk.Content",
              "sdk.Runtime",
            ],
            function (a, b, c, d, e, f, g) {
              function h(a, b) {
                b === void 0 && (b = !1);
                var e = c("sdk.Runtime").getClientID(),
                  f = c("sdk.Runtime").isEnvironment(
                    c("sdk.Runtime").ENVIRONMENTS.CANVAS
                  );
                e &&
                  (typeof a.api_key !== "string" || a.api_key === "") &&
                  (a.api_key = e);
                a.kid_directed_site = c("sdk.Runtime").getKidDirectedSite();
                e =
                  d("UrlMap").resolve("www") +
                  "/platform/impression.php/" +
                  c("guid")() +
                  "/";
                f &&
                  (e =
                    d("UrlMap").resolve("www") +
                    "/platform/canvas_impression.php/" +
                    c("guid")() +
                    "/");
                var g = c("QueryString").appendToUrl(e, a);
                if (
                  g.length > 2e3 &&
                  a.payload &&
                  typeof a.payload === "string"
                ) {
                  var h = a.payload,
                    k = c("Miny").encode(h);
                  k &&
                    k.length < h.length &&
                    ((a.payload = k), (g = c("QueryString").appendToUrl(e, a)));
                }
                window.fetch ? i(e, g, a, b || f) : j(e, g, a, b || f);
              }
              function i(a, b, c, d) {
                d === void 0 && (d = !1);
                var e = { mode: "no-cors", credentials: "include" };
                d || (e.credentials = "omit");
                if (b.length <= 2e3) window.fetch(b, e);
                else {
                  d = new URLSearchParams();
                  for (b in c)
                    if (Object.prototype.hasOwnProperty.call(c, b)) {
                      var f = c[b];
                      f != null && d.set(b, f);
                    }
                  f = babelHelpers["extends"]({ method: "POST", body: d }, e);
                  window.fetch(a, f);
                }
              }
              function j(a, b, e, f) {
                f === void 0 && (f = !1);
                if (b.length <= 2e3) {
                  var g = new Image();
                  f || (g.crossOrigin = "anonymous");
                  g.src = b;
                } else {
                  if (!f) return;
                  g = c("guid")();
                  var h = d("sdk.Content").appendHidden(
                    document.createElement("div")
                  );
                  c("insertIframe")({
                    url: c("getBlankIframeSrc")(),
                    root: h,
                    name: g,
                    className: "fb_hidden fb_invisible",
                    onload: function () {
                      h.parentNode != null && h.parentNode.removeChild(h);
                    },
                  });
                  d("sdk.Content").submitToTarget({
                    url: a,
                    target: g,
                    params: e,
                  });
                }
              }
              function a(a, b) {
                (typeof b.source !== "string" || b.source === "") &&
                  (b.source = "jssdk"),
                  h({ lid: a, payload: ES("JSON", "stringify", !1, b) });
              }
              g.impression = h;
              g.log = a;
            },
            98
          );
          __d(
            "sdk.AppEvents",
            [
              "AppUserPropertyAPIBuiltinField",
              "Assert",
              "FBAppEvents",
              "sdk.Impressions",
              "sdk.Model",
              "sdk.Runtime",
            ],
            function (a, b, c, d, e, f, g) {
              var h = Object.freeze({
                  COMPLETED_REGISTRATION: "fb_mobile_complete_registration",
                  VIEWED_CONTENT: "fb_mobile_content_view",
                  SEARCHED: "fb_mobile_search",
                  RATED: "fb_mobile_rate",
                  COMPLETED_TUTORIAL: "fb_mobile_tutorial_completion",
                  ADDED_TO_CART: "fb_mobile_add_to_cart",
                  ADDED_TO_WISHLIST: "fb_mobile_add_to_wishlist",
                  INITIATED_CHECKOUT: "fb_mobile_initiated_checkout",
                  ADDED_PAYMENT_INFO: "fb_mobile_add_payment_info",
                  ACHIEVED_LEVEL: "fb_mobile_level_achieved",
                  UNLOCKED_ACHIEVEMENT: "fb_mobile_achievement_unlocked",
                  PAGE_VIEW: "fb_page_view",
                  SPENT_CREDITS: "fb_mobile_spent_credits",
                }),
                i = Object.freeze({
                  ACTIVATED_APP: "fb_mobile_activate_app",
                  PURCHASED: "fb_mobile_purchase",
                }),
                j = Object.freeze({
                  APP_USER_ID: "_app_user_id",
                  APP_VERSION: "_appVersion",
                  CURRENCY: "fb_currency",
                  REGISTRATION_METHOD: "fb_registration_method",
                  CONTENT_TYPE: "fb_content_type",
                  CONTENT_ID: "fb_content_id",
                  SEARCH_STRING: "fb_search_string",
                  SUCCESS: "fb_success",
                  MAX_RATING_VALUE: "fb_max_rating_value",
                  PAYMENT_INFO_AVAILABLE: "fb_payment_info_available",
                  NUM_ITEMS: "fb_num_items",
                  LEVEL: "fb_level",
                  DESCRIPTION: "fb_description",
                }),
                k = /^[0-9a-zA-Z_][0-9a-zA-Z _-]{0,39}$/,
                l = 40,
                m = k,
                n = l,
                o = 100,
                p = 100,
                q = 100,
                r = 100,
                s = ES(
                  "Object",
                  "values",
                  !1,
                  c("AppUserPropertyAPIBuiltinField")
                ),
                t = new (c("sdk.Model"))({ UserID: "", Version: "" });
              function u(a, b, d) {
                var e = D();
                F(a);
                var f = t.getUserID();
                f !== "" && ((d = d || {}), (d[j.APP_USER_ID] = f));
                f = t.getVersion();
                f !== "" && ((d = d || {}), (d[j.APP_VERSION] = f));
                c("sdk.Runtime").isCanvasEnvironment()
                  ? B(e, a, b, d)
                  : C(e, a, b, d);
              }
              function a(a, b, c) {
                var d = {};
                d[j.CURRENCY] = b;
                u(i.PURCHASED, a, babelHelpers["extends"]({}, c, d));
              }
              function b() {
                u(i.ACTIVATED_APP);
              }
              function e() {
                u(h.PAGE_VIEW);
              }
              function f(a) {
                H(a), t.setUserID(a);
              }
              function v() {
                return t.getUserID();
              }
              function w() {
                t.setUserID("");
              }
              function x(a) {
                G(a), t.setVersion(a);
              }
              function y() {
                return t.getVersion();
              }
              function z() {
                t.setVersion("");
              }
              function A(a, b) {
                var c = D(),
                  e = v();
                H(e);
                Object.keys(a).forEach(function (b) {
                  return a[b] == null && delete a[b];
                });
                E(a);
                d("FBAppEvents").updateUserProperties(e, c, a, b);
              }
              function B(a, b, c, e) {
                b = { ae: 1, ev: b, vts: c, canvas: 1 };
                e && (b.cd = e);
                d("sdk.Impressions").impression({
                  api_key: a,
                  payload: ES("JSON", "stringify", !1, b),
                });
              }
              function C(a, b, e, f) {
                var g = c("sdk.Runtime").getAccessToken();
                d("FBAppEvents").logEvent(a, b, f || {}, e, g);
              }
              function D() {
                var a = c("sdk.Runtime").getClientID();
                c("Assert").isTrue(
                  a !== null && a.length > 0,
                  "You need to call FB.init() with App ID first."
                );
                return a;
              }
              function E(a) {
                c("Assert").isTrue(
                  Object.keys(a).length <= q,
                  "The total number of user properties cannot exceed " + q + "."
                );
                for (var b in a)
                  c("Assert").isTrue(
                    m.test(b) || ES(s, "includes", !0, b),
                    "Invalid user properties key name: " +
                      b +
                      ". It must be between 1 and " +
                      n +
                      " characters, and must contain only alphanumerics, _, - or spaces, starting with alphanumeric or _. Or, it must be a pre-defined user property"
                  ),
                    c("Assert").isTrue(
                      a[b].toString().length <= r,
                      "Invalid user properties value: " +
                        a[b] +
                        ". It must be no longer than " +
                        r +
                        " characters."
                    );
              }
              function F(a) {
                c("Assert").isTrue(
                  k.test(a),
                  "Invalid event name: " +
                    a +
                    ". It must be between 1 and " +
                    l +
                    " characters, and must be contain only alphanumerics, _, - or spaces, starting with alphanumeric or _."
                );
              }
              function G(a) {
                c("Assert").isTrue(
                  a.length <= p,
                  "Invalid app version: " +
                    a +
                    ". It must be no longer than " +
                    p +
                    " characters."
                );
              }
              function H(a) {
                c("Assert").isTrue(
                  a.length !== 0,
                  "User ID must be set before updateUserProperties can be called."
                ),
                  c("Assert").isTrue(
                    a.length <= o,
                    "Invalid user ID: " +
                      a +
                      ". It must be no longer than " +
                      o +
                      " characters."
                  );
              }
              a = Object.freeze({
                logEvent: u,
                logPurchase: a,
                activateApp: b,
                logPageView: e,
                setUserID: f,
                getUserID: v,
                clearUserID: w,
                updateUserProperties: A,
                setAppVersion: x,
                getAppVersion: y,
                clearAppVersion: z,
                EventNames: h,
                ParameterNames: j,
              });
              g.assertGetValidAppID = D;
              g.assertValidUserProperties = E;
              g.assertValidEventName = F;
              g.assertValidAppVersion = G;
              g.assertValidUserID = H;
              g.AppEvents = a;
            },
            98
          );
          __d(
            "sdk.Event",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              var g = "event.subscribe",
                h = "event.unsubscribe",
                i;
              function j() {
                i || (i = {});
                return i;
              }
              function k(a, b) {
                var c = j();
                !c[a] ? (c[a] = [b]) : c[a].indexOf(b) == -1 && c[a].push(b);
                a != g && a != h && m(g, a, c[a]);
              }
              function l(a, b) {
                var c = j()[a];
                c &&
                  c.forEach(function (a, d) {
                    a === b && c.splice(d, 1);
                  });
                a != g && a != h && m(h, a, c);
              }
              function a(a, b) {
                var c = arguments;
                if (!b()) {
                  var d = function d() {
                    b.apply(b, c) && l(a, d);
                  };
                  k(a, d);
                }
              }
              function b(a) {
                delete j()[a];
              }
              function m(a) {
                for (
                  var b = arguments.length,
                    c = new Array(b > 1 ? b - 1 : 0),
                    d = 1;
                  d < b;
                  d++
                )
                  c[d - 1] = arguments[d];
                var e = j()[a];
                e &&
                  e.forEach(function (a) {
                    a && a.apply(this, c);
                  });
              }
              f.SUBSCRIBE = g;
              f.UNSUBSCRIBE = h;
              f.subscribers = j;
              f.subscribe = k;
              f.unsubscribe = l;
              f.monitor = a;
              f.clear = b;
              f.fire = m;
            },
            66
          );
          __d(
            "sdk.AppEvents-public",
            ["Assert", "FB", "sdk.AppEvents", "sdk.Event", "sdk.Runtime"],
            function (a, b, c, d, e, f, g) {
              function a() {
                d("sdk.Event").subscribe("init:post", function (a) {
                  c("sdk.Runtime").getClientID() &&
                    (a.autoLogAppEvents !== void 0 &&
                      (c("Assert").isBoolean(
                        a.autoLogAppEvents,
                        "Type of property autoLogAppEvents must be boolean"
                      ),
                      c("sdk.Runtime").setAutoLogAppEvents(a.autoLogAppEvents)),
                    c("sdk.Runtime").getAutoLogAppEvents() &&
                      d("sdk.AppEvents").AppEvents.logPageView());
                }),
                  c("FB").provide("AppEvents", d("sdk.AppEvents").AppEvents);
              }
              b = { init: a };
              e = b;
              g["default"] = e;
            },
            98
          );
          __d(
            "sdk.AuthState",
            ["sdk.AuthUtils"],
            function (a, b, c, d, e, f, g) {
              "use strict";
              var h = i();
              function i() {
                var a = {
                  igAuthResponse: null,
                  fbAuthResponse: null,
                  fbLoginStatus: null,
                  igLoginStatus: null,
                };
                return {
                  currentAuthResponse: null,
                  shouldSecondLoginRequestTimeOut: !1,
                  mixedAuthState: a,
                  loadState: null,
                  timer: null,
                  currentTimeOut:
                    d("sdk.AuthUtils").AuthConstants
                      .CONNECTED_REVALIDATE_PERIOD,
                };
              }
              function a() {
                return ES("Object", "assign", !1, i(), h);
              }
              function b(a) {
                h = ES("Object", "assign", !1, i(), h, a);
              }
              c = { getState: a, setState: b };
              e = c;
              g["default"] = e;
            },
            98
          );
          __d(
            "sdk.Observable",
            [],
            function (a, b, c, d, e, f) {
              a = function () {
                var a = this;
                this.getSubscribers = function (b) {
                  return a.$1[b] || (a.$1[b] = []);
                };
                this.clearSubscribers = function (b) {
                  b && (a.$1[b] = []);
                };
                this.subscribe = function (b, c) {
                  b = a.getSubscribers(b);
                  b.push(c);
                };
                this.unsubscribe = function (b, c) {
                  b = a.getSubscribers(b);
                  for (var d = 0; d < b.length; d++)
                    if (b[d] === c) {
                      b.splice(d, 1);
                      break;
                    }
                };
                this.inform = function (b, c) {
                  b = a.getSubscribers(b);
                  for (var d = 0; d < b.length; d++) {
                    if (b[d] === null) continue;
                    try {
                      b[d].call(a, c);
                    } catch (a) {
                      window.setTimeout(function () {
                        throw a;
                      }, 0);
                    }
                  }
                };
                this.$1 = {};
              };
              f.Observable = a;
            },
            66
          );
          __d(
            "sdk.AuthUtils",
            ["sdk.AuthState", "sdk.Cookie", "sdk.Observable", "sdk.Runtime"],
            function (a, b, c, d, e, f, g) {
              "use strict";
              var h = 365 * 24 * 60 * 60 * 1e3;
              function a(a) {
                return a != null && a.graphDomain != null
                  ? a.graphDomain === "instagram"
                  : !1;
              }
              function b(a) {
                c("sdk.Runtime").getUseCookie() &&
                  d("sdk.Cookie").getDomain() == null &&
                  d("sdk.Cookie").setDomain("." + a);
              }
              function e() {
                var a = {
                    fbAuthResponse: null,
                    fbLoginStatus: null,
                    igAuthResponse: null,
                    igLoginStatus: null,
                  },
                  b = !1;
                c("sdk.AuthState").setState({
                  mixedAuthState: a,
                  shouldSecondLoginRequestTimeOut: b,
                });
              }
              function f(a) {
                a != null
                  ? (c("sdk.Runtime").setGraphDomain(a),
                    a == "instagram" && c("sdk.Runtime").setIsVersioned(!1))
                  : c("sdk.Runtime").setGraphDomain("");
              }
              function i() {
                d("sdk.Cookie").setRaw(
                  s.LOGOUT_COOKIE_PREFIX,
                  "y",
                  Date.now() + h,
                  !1
                );
              }
              function j(a) {
                a === void 0 && (a = s.CONNECTED_REVALIDATE_PERIOD);
                var b = c("sdk.AuthState").getState().timer;
                b && window.clearTimeout(b);
                b = window.setTimeout(function () {
                  r.inform(s.REVALIDATE_TIMER_TIMEOUT);
                }, a);
                c("sdk.AuthState").setState({ timer: b });
                c("sdk.AuthState").setState({ currentTimeOut: a });
              }
              function k() {
                d("sdk.Cookie").setRaw(s.LOGOUT_COOKIE_PREFIX, "", 0, !1),
                  d("sdk.Cookie").setRaw(s.LOGOUT_COOKIE_PREFIX, "", 0, !0);
              }
              var l = new (d("sdk.Observable").Observable)();
              function m(a, b) {
                l.inform(a, b);
              }
              function n(a, b) {
                l.subscribe(a, b);
              }
              function o(a) {
                l.clearSubscribers(a);
              }
              function p(a, b) {
                l.unsubscribe(a, b);
              }
              function q(a) {
                return l.getSubscribers(a);
              }
              var r = {
                  inform: m,
                  subscribe: n,
                  clearSubscribers: o,
                  unsubscribe: p,
                  getSubscribers: q,
                },
                s = {
                  LOCAL_STORAGE_TOKEN_PREFIX: "fblst_",
                  IG_LOCAL_STORAGE_TOKEN_PREFIX: "iglst_",
                  SESSION_STORAGE_LOGIN_STATUS_PREFIX: "fbssls_",
                  CONNECTED_REVALIDATE_PERIOD: 60 * 90 * 1e3,
                  DEFAULT_REVALIDATE_PERIOD: 60 * 60 * 24 * 1e3,
                  LOGOUT_COOKIE_PREFIX: "fblo_",
                  CORS_FETCH_COMPLETED_EVENT: "cors_fetch_completed",
                  XFOA_FINAL_RESPONSE_EVENT: "xfoa_final_response",
                  LOAD_XFOA_SUBSCRIBERS: "load_xfoa_subscribers",
                  REVALIDATE_TIMER_TIMEOUT: "revalidate_timer_timeout",
                };
              g.isInstagramLogin = a;
              g.setBaseDomain = b;
              g.resetFBAndIGLoginStatus = e;
              g.setGraphDomain = f;
              g.setLogoutState = i;
              g.setRevalidateTimer = j;
              g.removeLogoutState = k;
              g.AuthInternalEvent = r;
              g.AuthConstants = s;
            },
            98
          );
          __d(
            "sdk.WebStorage",
            ["Log"],
            function (a, b, c, d, e, f, g) {
              "use strict";
              function a() {
                try {
                  return window.localStorage;
                } catch (a) {
                  d("Log").warn("Failed to get local storage");
                }
                return null;
              }
              function b() {
                try {
                  var a = window.localStorage;
                  if (a) {
                    var b = "__test__" + Date.now();
                    a.setItem(b, "");
                    a.removeItem(b);
                  }
                  return a;
                } catch (a) {
                  d("Log").warn("Failed to get local storage");
                }
                return null;
              }
              function c() {
                try {
                  return window.sessionStorage;
                } catch (a) {
                  d("Log").warn("Failed to get session storage");
                }
                return null;
              }
              function e() {
                try {
                  var a = window.sessionStorage;
                  if (a) {
                    var b = "__test__" + Date.now();
                    a.setItem(b, "");
                    a.removeItem(b);
                  }
                  return a;
                } catch (a) {
                  d("Log").warn("Failed to get session storage");
                }
                return null;
              }
              g.getLocalStorage = a;
              g.getLocalStorageForRead = b;
              g.getSessionStorage = c;
              g.getSessionStorageForRead = e;
            },
            98
          );
          __d(
            "sdk.AuthStorageUtils",
            ["sdk.AuthUtils", "sdk.Runtime", "sdk.WebStorage", "sdk.feature"],
            function (a, b, c, d, e, f, g) {
              "use strict";
              function a(a, b) {
                if (h() && b != null && b !== "") {
                  var e = d("sdk.WebStorage").getLocalStorage();
                  if (e) {
                    a = d("sdk.AuthUtils").isInstagramLogin(a)
                      ? d("sdk.AuthUtils").AuthConstants
                          .IG_LOCAL_STORAGE_TOKEN_PREFIX
                      : d("sdk.AuthUtils").AuthConstants
                          .LOCAL_STORAGE_TOKEN_PREFIX;
                    e.setItem(a + c("sdk.Runtime").getClientID(), b);
                  }
                }
              }
              function b(a) {
                var b = d("sdk.WebStorage").getLocalStorage();
                b &&
                  (a === "instagram"
                    ? b.removeItem(
                        d("sdk.AuthUtils").AuthConstants
                          .IG_LOCAL_STORAGE_TOKEN_PREFIX +
                          c("sdk.Runtime").getClientID()
                      )
                    : b.removeItem(
                        d("sdk.AuthUtils").AuthConstants
                          .LOCAL_STORAGE_TOKEN_PREFIX +
                          c("sdk.Runtime").getClientID()
                      ));
              }
              function e(a, b) {
                if (!h()) return;
                var e = d("sdk.WebStorage").getSessionStorage();
                e &&
                  e.setItem(
                    d("sdk.AuthUtils").AuthConstants
                      .SESSION_STORAGE_LOGIN_STATUS_PREFIX +
                      c("sdk.Runtime").getClientID(),
                    ES("JSON", "stringify", !1, {
                      authResponse: a,
                      status: b,
                      expiresAt:
                        a != null && a.expiresIn && a.expiresIn !== 0
                          ? Date.now() +
                            Math.min(
                              a.expiresIn * 0.75 * 1e3,
                              d("sdk.AuthUtils").AuthConstants
                                .CONNECTED_REVALIDATE_PERIOD
                            )
                          : Date.now() +
                            d("sdk.AuthUtils").AuthConstants
                              .DEFAULT_REVALIDATE_PERIOD,
                    })
                  );
              }
              function h() {
                return (
                  c("sdk.feature")("cache_auth_response", !1) &&
                  c("sdk.Runtime").getUseLocalStorage() &&
                  location.protocol === "https:"
                );
              }
              function f() {
                var a = null,
                  b = null;
                if (c("sdk.Runtime").getUseLocalStorage()) {
                  var e = d("sdk.WebStorage").getLocalStorageForRead();
                  e &&
                    ((a = e.getItem(
                      d("sdk.AuthUtils").AuthConstants
                        .LOCAL_STORAGE_TOKEN_PREFIX +
                        c("sdk.Runtime").getClientID()
                    )),
                    (b = e.getItem(
                      d("sdk.AuthUtils").AuthConstants
                        .IG_LOCAL_STORAGE_TOKEN_PREFIX +
                        c("sdk.Runtime").getClientID()
                    )));
                }
                return { fbToken: a, igToken: b };
              }
              function i() {
                if (!h()) return null;
                var a = d("sdk.WebStorage").getSessionStorageForRead();
                if (a) {
                  a = a.getItem(
                    d("sdk.AuthUtils").AuthConstants
                      .SESSION_STORAGE_LOGIN_STATUS_PREFIX +
                      c("sdk.Runtime").getClientID()
                  );
                  if (a != null)
                    try {
                      a = ES("JSON", "parse", !1, a);
                      if (
                        a != null &&
                        a.expiresAt != null &&
                        a.expiresAt > Date.now()
                      )
                        return a;
                    } catch (a) {
                      return null;
                    }
                }
                return null;
              }
              g.setLocalStorageToken = a;
              g.removeLocalStorageToken = b;
              g.setSessionStorage = e;
              g.getLocalStorageTokens = f;
              g.getCachedResponse = i;
            },
            98
          );
          __d(
            "Base64",
            [],
            function (a, b, c, d, e, f) {
              var g =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
              function h(a) {
                a =
                  (a.charCodeAt(0) << 16) |
                  (a.charCodeAt(1) << 8) |
                  a.charCodeAt(2);
                return String.fromCharCode(
                  g.charCodeAt(a >>> 18),
                  g.charCodeAt((a >>> 12) & 63),
                  g.charCodeAt((a >>> 6) & 63),
                  g.charCodeAt(a & 63)
                );
              }
              var i =
                ">___?456789:;<=_______\0\x01\x02\x03\x04\x05\x06\x07\b\t\n\v\f\r\x0e\x0f\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19______\x1a\x1b\x1c\x1d\x1e\x1f !\"#$%&'()*+,-./0123";
              function j(a) {
                a =
                  (i.charCodeAt(a.charCodeAt(0) - 43) << 18) |
                  (i.charCodeAt(a.charCodeAt(1) - 43) << 12) |
                  (i.charCodeAt(a.charCodeAt(2) - 43) << 6) |
                  i.charCodeAt(a.charCodeAt(3) - 43);
                return String.fromCharCode(a >>> 16, (a >>> 8) & 255, a & 255);
              }
              var k = {
                encode: function (a) {
                  a = unescape(encodeURI(a));
                  var b = (a.length + 2) % 3;
                  a = (a + "\0\0".slice(b)).replace(/[\s\S]{3}/g, h);
                  return a.slice(0, a.length + b - 2) + "==".slice(b);
                },
                decode: function (a) {
                  a = a.replace(/[^A-Za-z0-9+\/]/g, "");
                  var b = (a.length + 3) & 3;
                  a = (a + "AAA".slice(b)).replace(/..../g, j);
                  a = a.slice(0, a.length + b - 3);
                  try {
                    return decodeURIComponent(escape(a));
                  } catch (a) {
                    throw new Error("Not valid UTF-8");
                  }
                },
                encodeObject: function (a) {
                  return k.encode(ES("JSON", "stringify", !1, a));
                },
                decodeObject: function (a) {
                  return ES("JSON", "parse", !1, k.decode(a));
                },
                encodeNums: function (a) {
                  return String.fromCharCode.apply(
                    String,
                    a.map(function (a) {
                      return g.charCodeAt(
                        (a | -(a > 63 ? 1 : 0)) & -(a > 0 ? 1 : 0) & 63
                      );
                    })
                  );
                },
              };
              a = k;
              f["default"] = a;
            },
            66
          );
          __d(
            "sdk.SignedRequest",
            ["Base64"],
            function (a, b, c, d, e, f, g) {
              function a(a) {
                if (a == null || a === "") return null;
                a = a.split(".", 2)[1].replace(/\-/g, "+").replace(/\_/g, "/");
                return c("Base64").decodeObject(a);
              }
              g.parse = a;
            },
            98
          );
          __d(
            "sdk.getContextType",
            ["sdk.Runtime", "sdk.UA"],
            function (a, b, c, d, e, f, g) {
              function a() {
                if (c("sdk.UA").nativeApp()) return 3;
                if (c("sdk.UA").mobile()) return 2;
                return c("sdk.Runtime").isEnvironment(
                  c("sdk.Runtime").ENVIRONMENTS.CANVAS
                )
                  ? 5
                  : 1;
              }
              g["default"] = a;
            },
            98
          );
          __d(
            "sdk.statusCORS",
            [
              "Log",
              "UrlMap",
              "sdk.AuthState",
              "sdk.AuthStorageUtils",
              "sdk.AuthUtils",
              "sdk.Impressions",
              "sdk.Runtime",
              "sdk.Scribe",
              "sdk.URI",
              "sdk.feature",
              "sdk.getContextType",
            ],
            function (a, b, c, d, e, f, g) {
              "use strict";
              var h = 6e4,
                i = 114;
              function a(a, b, e, f) {
                f === void 0 && (f = "facebook");
                var g = m(b),
                  l = Date.now();
                function p() {
                  var b = new XMLHttpRequest();
                  b &&
                    (b.open("GET", g.toString(), !0),
                    (b.withCredentials = !0),
                    (b.onreadystatechange = function () {
                      if (b.readyState === 4) {
                        if (c("sdk.feature")("e2e_ping_tracking", !0)) {
                          var g = {
                            init: l,
                            close: Date.now(),
                            method: "cors",
                          };
                          d("Log").debug(
                            "e2e: %s",
                            ES("JSON", "stringify", !1, g)
                          );
                          d("sdk.Impressions").log(i, { payload: g });
                        }
                        if (b.status === 200) {
                          j(
                            a,
                            (g = b.getResponseHeader("fb-s")) != null
                              ? g
                              : "unknown",
                            (g = b.getResponseHeader("fb-ar")) != null
                              ? g
                              : "{}",
                            f
                          );
                        } else k(a, b.status, e, f);
                      }
                    }),
                    b.send());
                }
                function q() {
                  n(f) ||
                    window.setTimeout(function () {
                      o(f === "facebook" ? "instagram" : "facebook"),
                        c("sdk.AuthState").setState({
                          shouldSecondLoginRequestTimeOut: !0,
                        });
                    }, h);
                }
                function r() {
                  window
                    .fetch(g.toString(), {
                      referrer: "/",
                      mode: "cors",
                      credentials: "include",
                    })
                    .then(function (b) {
                      if (
                        c("sdk.AuthState").getState()
                          .shouldSecondLoginRequestTimeOut
                      ) {
                        c("sdk.AuthState").setState({
                          shouldSecondLoginRequestTimeOut: !1,
                        });
                        return;
                      }
                      q();
                      if (b.status === 200) {
                        var d;
                        j(
                          a,
                          (d = b.headers.get("fb-s")) != null ? d : "unknown",
                          (d = b.headers.get("fb-ar")) != null ? d : "{}",
                          f
                        );
                      } else k(a, b.status, e, f);
                    })
                    ["catch"](function (b) {
                      if (
                        c("sdk.AuthState").getState()
                          .shouldSecondLoginRequestTimeOut
                      ) {
                        c("sdk.AuthState").setState({
                          shouldSecondLoginRequestTimeOut: !1,
                        });
                        return;
                      }
                      q();
                      k(a, 0, e, f);
                    });
                }
                typeof window.fetch === "function" ? r() : p();
              }
              function j(a, b, e, f) {
                f === void 0 && (f = "facebook");
                switch (b) {
                  case "connected":
                    e = ES("JSON", "parse", !1, e);
                    var g = {
                      accessToken: e.access_token,
                      userID: e.user_id,
                      expiresIn: Number(e.expires_in),
                      signedRequest: e.signed_request,
                      graphDomain: e.graph_domain,
                    };
                    e.enforce_https != null &&
                      c("sdk.Runtime").setEnforceHttps(!0);
                    e.data_access_expiration_time != null &&
                      (g.data_access_expiration_time = Number(
                        e.data_access_expiration_time
                      ));
                    e.base_domain != null &&
                      d("sdk.AuthUtils").setBaseDomain(e.base_domain);
                    d("sdk.AuthUtils").setGraphDomain(e.graph_domain);
                    d("sdk.AuthStorageUtils").setLocalStorageToken(
                      g,
                      e.long_lived_token
                    );
                    d("sdk.AuthUtils").removeLogoutState();
                    e = { authResponse: g, status: b, loginSource: f, cb: a };
                    d("sdk.AuthUtils").AuthInternalEvent.inform(
                      d("sdk.AuthUtils").AuthConstants
                        .CORS_FETCH_COMPLETED_EVENT,
                      e
                    );
                    break;
                  case "not_authorized":
                  case "unknown":
                  default:
                    g = {
                      authResponse: null,
                      status: b,
                      loginSource: f,
                      cb: a,
                    };
                    d("sdk.AuthUtils").AuthInternalEvent.inform(
                      d("sdk.AuthUtils").AuthConstants
                        .CORS_FETCH_COMPLETED_EVENT,
                      g
                    );
                }
              }
              function k(a, b, e, f) {
                f === void 0 && (f = "facebook");
                b === 0
                  ? (c("sdk.feature")(
                      "cors_status_fetch_cancel_tracking",
                      !1
                    ) &&
                      d("sdk.Scribe").log("jssdk_error", {
                        appId: c("sdk.Runtime").getClientID(),
                        error: "CORS_STATUS_FETCH_CANCELLED",
                        extra: { message: "Status 0 returned." },
                      }),
                    d("Log").error(
                      "Error retrieving login status, fetch cancelled."
                    ))
                  : (d("sdk.Scribe").log("jssdk_error", {
                      appId: c("sdk.Runtime").getClientID(),
                      error: "CORS_STATUS_FETCH",
                      extra: { message: "HTTP Status Code " + b },
                    }),
                    d("Log").error(
                      "Error retrieving login status, HTTP status code: " + b
                    ));
                b = l();
                if (b && b === f) {
                  b = {
                    authResponse: e,
                    status: c("sdk.Runtime").getLoginStatus(),
                    loginSource: f,
                    cb: a,
                    shouldSetAuthResponse: !1,
                  };
                  d("sdk.AuthUtils").AuthInternalEvent.inform(
                    d("sdk.AuthUtils").AuthConstants.CORS_FETCH_COMPLETED_EVENT,
                    b
                  );
                } else {
                  e = {
                    authResponse: null,
                    status: "unknown",
                    loginSource: f,
                    cb: a,
                    shouldSetAuthResponse: !1,
                  };
                  d("sdk.AuthUtils").AuthInternalEvent.inform(
                    d("sdk.AuthUtils").AuthConstants.CORS_FETCH_COMPLETED_EVENT,
                    e
                  );
                }
              }
              function l() {
                var a = c("sdk.AuthState").getState().currentAuthResponse;
                return a
                  ? d("sdk.AuthUtils").isInstagramLogin(a)
                    ? "instagram"
                    : "facebook"
                  : null;
              }
              function m(a) {
                a = new (c("sdk.URI"))(
                  d("UrlMap").resolve("www").replace("web.", "www.") +
                    "/x/oauth/status"
                )
                  .addQueryData("client_id", c("sdk.Runtime").getClientID())
                  .addQueryData("input_token", a)
                  .addQueryData("redirect_uri", window.location.href)
                  .addQueryData("origin", c("sdk.getContextType")())
                  .addQueryData("sdk", "joey")
                  .addQueryData(
                    "wants_cookie_data",
                    c("sdk.Runtime").getUseCookie()
                  );
                if (window.location.ancestorOrigins) {
                  var b = window.location.ancestorOrigins;
                  if (b.length > 0) {
                    var e = "";
                    for (var f = 0; f < b.length; f++) (e += b[f]), (e += ",");
                    a.addQueryData("ancestor_origins", e.slice(0, -1));
                  }
                }
                return a;
              }
              function n(a) {
                var b = c("sdk.AuthState").getState().mixedAuthState;
                switch (a) {
                  case "facebook":
                    return (
                      (b == null ? void 0 : b.fbLoginStatus) === null &&
                      (b == null ? void 0 : b.igLoginStatus) !== null
                    );
                  case "instagram":
                    return (
                      (b == null ? void 0 : b.igLoginStatus) === null &&
                      (b == null ? void 0 : b.fbLoginStatus) !== null
                    );
                  default:
                    return !1;
                }
              }
              function o(a) {
                var b = c("sdk.AuthState").getState().mixedAuthState;
                if (
                  (b == null ? void 0 : b.fbLoginStatus) != null &&
                  (b == null ? void 0 : b.igLoginStatus) != null
                )
                  return;
                b = { authResponse: null, status: "unknown", loginSource: a };
                d("sdk.AuthUtils").AuthInternalEvent.inform(
                  "xFoAFetchCompleted",
                  b
                );
              }
              b = { getLoginStatusCORS: a };
              e = b;
              g["default"] = e;
            },
            98
          );
          __d(
            "sdk.Auth.LoginStatus",
            [
              "Log",
              "QueryString",
              "sdk.Auth",
              "sdk.AuthState",
              "sdk.AuthStorageUtils",
              "sdk.AuthUtils",
              "sdk.Cookie",
              "sdk.Runtime",
              "sdk.Scribe",
              "sdk.SignedRequest",
              "sdk.feature",
              "sdk.statusCORS",
            ],
            function (a, b, c, d, e, f, g) {
              "use strict";
              var h = /^https?:\/\/([\w\.]+)?\.facebook\.com\/?/;
              c("sdk.Runtime").subscribe("AccessToken.change", function (a) {
                !a &&
                  c("sdk.Runtime").getLoginStatus() === "connected" &&
                  l(null, !0);
              });
              function a(a) {
                a.legacyStatusInit
                  ? n.getLoginStatus(function (a) {
                      a != null &&
                        a.status === "connected" &&
                        d("sdk.Scribe").log("jssdk_error", {
                          appId: c("sdk.Runtime").getClientID(),
                          error: "legacy_status_init_success",
                        });
                    })
                  : a.status && n.getLoginStatus();
                if (
                  c("sdk.Runtime").getClientID() &&
                  c("sdk.Runtime").getUseCookie()
                ) {
                  c("sdk.feature")("log_cookies_usage", !1) &&
                    d("sdk.Scribe").log("jssdk_error", {
                      appId: c("sdk.Runtime").getClientID(),
                      error: "jssdk_cookie_toggled_on",
                    });
                  a = d("sdk.Cookie").loadSignedRequest();
                  var b;
                  if (a) {
                    try {
                      b = d("sdk.SignedRequest").parse(a);
                    } catch (a) {
                      d("sdk.Cookie").clearSignedRequestCookie();
                    }
                    b != null &&
                      b.user_id != null &&
                      c("sdk.Runtime").setCookieUserID(b.user_id);
                  }
                }
              }
              function i(a) {
                window.location.protocol !== "https:" && m(a);
                var b = c("sdk.AuthState").getState().timer;
                b &&
                  (window.clearTimeout(b),
                  c("sdk.AuthState").setState({ timer: null }));
                d("sdk.AuthUtils").resetFBAndIGLoginStatus();
                b =
                  d("sdk.Cookie").getRaw(
                    d("sdk.AuthUtils").AuthConstants.LOGOUT_COOKIE_PREFIX
                  ) === "y";
                var e = k(a),
                  f = e.access_token;
                e = e.redirect_cancelled;
                if (b || e) {
                  m(a);
                  return;
                }
                b = d("sdk.AuthStorageUtils").getLocalStorageTokens();
                e = b.fbToken;
                b = b.igToken;
                f != null &&
                  (ES(f, "startsWith", !0, "IG") ? (b = f) : (e = f));
                c("sdk.Runtime").getShouldLoadFamilyLogin() &&
                c("sdk.feature")("should_enable_ig_login_status_fetch", !1)
                  ? c("sdk.Runtime").getFamilyLoginLoaded()
                    ? d("sdk.AuthUtils").AuthInternalEvent.inform(
                        d("sdk.AuthUtils").AuthConstants.LOAD_XFOA_SUBSCRIBERS
                      )
                    : c("sdk.Runtime").subscribe(
                        "FamilyLoginLoaded.change",
                        function (a) {
                          a &&
                            d("sdk.AuthUtils").AuthInternalEvent.inform(
                              d("sdk.AuthUtils").AuthConstants
                                .LOAD_XFOA_SUBSCRIBERS
                            );
                        }
                      )
                  : d("sdk.AuthUtils").AuthInternalEvent.subscribe(
                      d("sdk.AuthUtils").AuthConstants
                        .CORS_FETCH_COMPLETED_EVENT,
                      c("sdk.Auth").setFinalAuthResponse
                    );
                j(e, b, a);
              }
              function j(a, b, e) {
                c("sdk.statusCORS").getLoginStatusCORS(
                  e,
                  a,
                  c("sdk.AuthState").getState().currentAuthResponse,
                  "facebook"
                );
                if (
                  c("sdk.Runtime").getShouldLoadFamilyLogin() &&
                  c("sdk.feature")("should_enable_ig_login_status_fetch", !1)
                )
                  if (b != null)
                    c("sdk.statusCORS").getLoginStatusCORS(
                      e,
                      b,
                      c("sdk.AuthState").getState().currentAuthResponse,
                      "instagram"
                    );
                  else {
                    a = {
                      authResponse: null,
                      status: "unknown",
                      loginSource: "instagram",
                      cb: e,
                    };
                    d("sdk.AuthUtils").AuthInternalEvent.inform(
                      d("sdk.AuthUtils").AuthConstants
                        .CORS_FETCH_COMPLETED_EVENT,
                      a
                    );
                  }
              }
              function k(a) {
                var b = null,
                  e = !1;
                if (
                  c("sdk.Runtime").getLoginStatus() !== "connected" &&
                  (document.referrer === "" || h.test(document.referrer))
                ) {
                  var f = location.hash.substr(1);
                  if (f !== "") {
                    var g = c("QueryString").decode(f, !0);
                    b = g.access_token;
                    var i = g.signed_request;
                    b != null && d("sdk.AuthUtils").removeLogoutState();
                    if (window == top && b != null) {
                      var j = a;
                      a = function (a) {
                        var d;
                        a != null &&
                          a.status === "connected" &&
                          ((d = a.authResponse) == null
                            ? void 0
                            : d.accessToken) === b &&
                          (delete g.access_token,
                          delete g.code,
                          delete g.signed_request,
                          (location.hash = c("QueryString").encode(g)),
                          i != null &&
                            a.authResponse != null &&
                            (a.authResponse.signedRequest = i));
                        j != null && j(a);
                      };
                    }
                  }
                  f = c("QueryString").decode(location.search);
                  f.error === "access_denied" && (e = !0);
                }
                return { access_token: b, redirect_cancelled: e };
              }
              function l(a, b) {
                b === void 0 && (b = !1);
                var e = c("sdk.Runtime").getClientID();
                if (e == null || e === "") {
                  d("Log").warn(
                    "FB.getLoginStatus() called before calling FB.init()."
                  );
                  m(a);
                  return;
                }
                if (
                  !(typeof e === "number" || typeof e === "string") ||
                  e === 0 ||
                  (typeof e === "string" && (e === "0" || !/^\d+$/.test(e)))
                ) {
                  d("Log").warn(
                    "FB.getLoginStatus() not checked for an invalid client ID " +
                      e
                  );
                  m(a);
                  return;
                }
                e =
                  c("sdk.Runtime").getLoginStatus() !== "connected" &&
                  h.test(document.referrer) &&
                  location.hash.indexOf("cb=") > -1;
                if (!e && !b) {
                  e = d("sdk.AuthStorageUtils").getCachedResponse();
                  if (e != null) {
                    var f;
                    c("sdk.AuthState").setState({ loadState: "loaded" });
                    c("sdk.Auth").setAuthResponse(
                      e.authResponse,
                      (f = e.status) != null ? f : "unknown",
                      "facebook",
                      !0
                    );
                    d("sdk.AuthUtils").setRevalidateTimer(
                      e.status === "connected"
                        ? d("sdk.AuthUtils").AuthConstants
                            .CONNECTED_REVALIDATE_PERIOD
                        : d("sdk.AuthUtils").AuthConstants
                            .DEFAULT_REVALIDATE_PERIOD
                    );
                  }
                }
                if (!b)
                  if (c("sdk.AuthState").getState().loadState === "loaded") {
                    if (a) {
                      f = {
                        authResponse: c("sdk.Auth").getAuthResponse(),
                        status: c("sdk.Runtime").getLoginStatus(),
                      };
                      a(f);
                    }
                    return;
                  } else if (
                    c("sdk.AuthState").getState().loadState === "loading"
                  ) {
                    a &&
                      d("sdk.AuthUtils").AuthInternalEvent.subscribe(
                        "FB.loginStatus",
                        a
                      );
                    return;
                  }
                a &&
                  d("sdk.AuthUtils").AuthInternalEvent.subscribe(
                    "FB.loginStatus",
                    a
                  );
                c("sdk.AuthState").setState({ loadState: "loading" });
                e = function (a) {
                  c("sdk.AuthState").setState({ loadState: "loaded" }),
                    d("sdk.AuthUtils").AuthInternalEvent.inform(
                      "FB.loginStatus",
                      a
                    ),
                    d("sdk.AuthUtils").AuthInternalEvent.clearSubscribers(
                      "FB.loginStatus"
                    );
                };
                i(e);
              }
              function m(a) {
                var b = "unknown";
                c("sdk.Auth").setAuthResponse(null, b, null);
                b = { authResponse: null, status: b, loginSource: null };
                a && a(b);
              }
              var n = { getLoginStatus: l, fetchLoginStatus: i, onSDKInit: a };
              b = n;
              g["default"] = b;
            },
            98
          );
          __d(
            "sdk.LoggingUtils",
            ["sdk.Impressions", "sdk.feature"],
            function (a, b, c, d, e, f, g) {
              "use strict";
              var h = {
                buttonLoad: "client_login_button_load",
                buttonClick: "client_login_click",
                loginSuccess: "client_login_success",
                loginCancel: "client_login_cancel",
                popupHide: "client_login_popup_hide_xfoa",
                popupShow: "client_login_popup_show_xfoa",
                loginEnd: "client_login_end",
                loginStart: "client_login_start",
                loginCompleteHeartbeat: "client_login_complete_heartbeat",
                loginStatusPopupShowXfoa: "client_login_status_popup_show_xfoa",
                loginStatusPopupHideXfoa: "client_login_status_popup_hide_xfoa",
                loginStatusPopupClickXfoa:
                  "client_login_status_popup_click_xfoa",
                loginStatusPopupErrorXfoa:
                  "client_login_status_popup_error_xfoa",
              };
              function i(a, b, e) {
                d("sdk.Impressions").log(117, {
                  payload: babelHelpers["extends"]({}, e || {}, {
                    logger_id: a,
                    action: b,
                    client_funnel_version: c("sdk.feature")(
                      "oauth_funnel_logger_version",
                      1
                    ),
                  }),
                });
              }
              function a(a, b) {
                var c = a && a.cbt !== void 0 ? Number(a.cbt) : 0;
                i(a == null ? void 0 : a.logger_id, b, {
                  cbt_delta: Date.now() - c,
                });
              }
              function b(a, b) {
                b !== void 0 && i(a, b);
              }
              function e(a, b) {
                a !== void 0 &&
                  i(b, h.loginStatusPopupErrorXfoa, { message: a });
              }
              g.logEventName = h;
              g.logEvent = i;
              g.logLoginEvent = a;
              g.logPopupEvent = b;
              g.logDisambiguationTrayEvent = e;
            },
            98
          );
          __d(
            "sdk.Auth",
            [
              "Log",
              "UrlMap",
              "sdk.AuthState",
              "sdk.AuthStorageUtils",
              "sdk.AuthUtils",
              "sdk.Cookie",
              "sdk.Frictionless",
              "sdk.LoggingUtils",
              "sdk.Runtime",
              "sdk.Scribe",
              "sdk.SignedRequest",
              "sdk.URI",
              "sdk.ui",
            ],
            function (a, b, c, d, e, f, g) {
              b("sdk.Frictionless");
              var h = 5 * 1e3;
              function a(a, b) {
                b &&
                  b.perms &&
                  !b.scope &&
                  ((b.scope = b.perms),
                  delete b.perms,
                  d("Log").warn(
                    "OAuth2 specification states that 'perms' should now be called 'scope'.  Please update."
                  ));
                var e =
                  c("sdk.Runtime").isEnvironment(
                    c("sdk.Runtime").ENVIRONMENTS.CANVAS
                  ) ||
                  c("sdk.Runtime").isEnvironment(
                    c("sdk.Runtime").ENVIRONMENTS.PAGETAB
                  );
                c("sdk.ui")(
                  babelHelpers["extends"](
                    {
                      method: "permissions.oauth",
                      display: e ? "async" : "popup",
                      domain: location.hostname,
                    },
                    b || {}
                  ),
                  a
                );
              }
              function i(a) {
                switch (a) {
                  case "connected":
                    return "connected";
                  case "not_authorized":
                    return "not_authorized";
                  default:
                    return "unknown";
                }
              }
              function e(a) {
                (a == null ? void 0 : a.shouldSetAuthResponse) !== !1 &&
                  ((a == null ? void 0 : a.status) === "connected" &&
                    d("sdk.AuthUtils").setRevalidateTimer(),
                  j(
                    a == null ? void 0 : a.authResponse,
                    i(a == null ? void 0 : a.status),
                    a == null ? void 0 : a.loginSource
                  ));
                var b = a == null ? void 0 : a.cb;
                if (b != null) {
                  a = {
                    authResponse: a == null ? void 0 : a.authResponse,
                    status: i(a == null ? void 0 : a.status),
                    loginSource: a == null ? void 0 : a.loginSource,
                  };
                  b(a);
                }
                d("sdk.AuthUtils").AuthInternalEvent.clearSubscribers(
                  d("sdk.AuthUtils").AuthConstants.CORS_FETCH_COMPLETED_EVENT
                );
                d("sdk.AuthUtils").AuthInternalEvent.clearSubscribers(
                  d("sdk.AuthUtils").AuthConstants.XFOA_FINAL_RESPONSE_EVENT
                );
              }
              function j(a, b, e, f) {
                e === void 0 && (e = "facebook");
                f === void 0 && (f = !1);
                var g = c("sdk.Runtime").getUserID(),
                  h = c("sdk.Runtime").getLoginStatus(),
                  i = "";
                if (a != null) {
                  c("sdk.AuthState").setState({ loadState: "loaded" });
                  if (a.userID != null && a.userID !== "") i = a.userID;
                  else if (a.signedRequest != null && a.signedRequest !== "") {
                    var j = d("sdk.SignedRequest").parse(a.signedRequest);
                    j != null &&
                      j !== "" &&
                      j.user_id != null &&
                      j.user_id !== "" &&
                      (i = j.user_id);
                  }
                  if (c("sdk.Runtime").getUseCookie()) {
                    j = a.expiresIn === 0 ? 0 : Date.now() + a.expiresIn * 1e3;
                    d("sdk.Cookie").setSignedRequestCookie(a.signedRequest, j);
                  }
                } else {
                  c("sdk.Runtime").getUseCookie() &&
                    d("sdk.Cookie").clearSignedRequestCookie();
                  if (c("sdk.Runtime").getUseLocalStorage()) {
                    d("sdk.AuthStorageUtils").removeLocalStorageToken(
                      (j = e) != null ? j : "facebook"
                    );
                  }
                }
                j =
                  (h === "unknown" && a != null) ||
                  (c("sdk.Runtime").getUseCookie() &&
                    c("sdk.Runtime").getCookieUserID() !== i);
                var k = g != null && g !== "" && a == null;
                g = a != null && g != null && g !== "" && g != i;
                var l = a != c("sdk.AuthState").getState().currentAuthResponse;
                h = b != h;
                c("sdk.Runtime").setLoginStatus(b);
                c("sdk.Runtime").setAccessToken((a && a.accessToken) || null);
                c("sdk.Runtime").setUserID(i);
                c("sdk.Runtime").setGraphDomain((a && a.graphDomain) || "");
                c("sdk.AuthState").setState({ currentAuthResponse: a });
                i = { authResponse: a, status: b, loginSource: e };
                (k || g) &&
                  d("sdk.AuthUtils").AuthInternalEvent.inform("logout", i);
                (j || g) &&
                  d("sdk.AuthUtils").AuthInternalEvent.inform("login", i);
                l &&
                  d("sdk.AuthUtils").AuthInternalEvent.inform(
                    "authresponse.change",
                    i
                  );
                h &&
                  d("sdk.AuthUtils").AuthInternalEvent.inform(
                    "status.change",
                    i
                  );
                f || d("sdk.AuthStorageUtils").setSessionStorage(a, b);
                return i;
              }
              function k() {
                return c("sdk.AuthState").getState().currentAuthResponse;
              }
              function f(a) {
                var b = k(),
                  e = d("sdk.AuthUtils").isInstagramLogin(b)
                    ? "instagram"
                    : "facebook";
                j(null, "unknown", e);
                d("sdk.AuthUtils").setLogoutState();
                if (b != null && b.accessToken != null) {
                  e = new (c("sdk.URI"))(
                    d("UrlMap").resolve("www").replace("web.", "www.") +
                      "/x/oauth/logout"
                  ).addQueryData("access_token", b.accessToken);
                  var f = new XMLHttpRequest(),
                    g = !1;
                  f &&
                    (f.open("GET", e.toString(), !0),
                    (f.withCredentials = !0),
                    a &&
                      (f.onreadystatechange = function () {
                        if (f.readyState >= 2) {
                          if (g) return;
                          a({
                            authResponse: k(),
                            status: c("sdk.Runtime").getLoginStatus(),
                          });
                          g = !0;
                        }
                      }),
                    f.send());
                }
                d("sdk.Scribe").log("jssdk_error", {
                  appId: c("sdk.Runtime").getClientID(),
                  error: "PLATFORM_AUTH_LOGOUT",
                  extra: { args: { fblo: !0 } },
                });
              }
              function l(a, b, e, f) {
                return function (e) {
                  if (e && e.access_token) {
                    var g = d("sdk.SignedRequest").parse(e.signed_request);
                    g =
                      g != null ? (g.user_id != null ? g.user_id : null) : null;
                    b = {
                      accessToken: e.access_token,
                      userID: g,
                      expiresIn: Number(e.expires_in),
                      signedRequest: e.signed_request,
                      graphDomain: e.graph_domain,
                    };
                    e.asset_scopes &&
                      (b = babelHelpers["extends"]({}, b, {
                        asset_scopes: ES("JSON", "parse", !1, e.asset_scopes),
                      }));
                    b = n(b, e);
                    d("sdk.AuthUtils").removeLogoutState();
                    g = "connected";
                    j(b, g);
                    m(f);
                  } else if (e && e.asset_scopes)
                    (b = {
                      asset_scopes: ES("JSON", "parse", !1, e.asset_scopes),
                    }),
                      (b = n(b, e)),
                      d("sdk.AuthUtils").removeLogoutState(),
                      (g = "connected"),
                      j(b, g),
                      m(f);
                  else if (
                    e &&
                    (e.error ||
                      e.error_message ||
                      e.error_description ||
                      e.error_code ||
                      e.error_reason ||
                      (e.result && e.result.closeWindow))
                  ) {
                    d("sdk.AuthUtils").setLogoutState();
                    g = "unknown";
                    j(null, g);
                    var h = e.error_message || e.error_description;
                    g = { authResponse: k(), status: g, message: h };
                    e.error === "access_denied" ||
                    (e.result && e.result.closeWindow)
                      ? d("sdk.AuthUtils").AuthInternalEvent.inform(
                          "loginDenied",
                          g
                        )
                      : d("sdk.AuthUtils").AuthInternalEvent.inform(
                          "loginError",
                          g
                        );
                  } else
                    e &&
                      e.result &&
                      (d("sdk.AuthUtils").removeLogoutState(),
                      (b = e.result.authResponse));
                  if (a) {
                    h = {
                      authResponse: b,
                      status: c("sdk.Runtime").getLoginStatus(),
                    };
                    a(h);
                  }
                  return b;
                };
              }
              function m(a) {
                if (a && a.tp && a.tp !== "unspecified") return;
                d("sdk.LoggingUtils").logLoginEvent(
                  a,
                  d("sdk.LoggingUtils").logEventName.loginEnd
                );
                window.setTimeout(function () {
                  d("sdk.LoggingUtils").logLoginEvent(
                    a,
                    d("sdk.LoggingUtils").logEventName.loginCompleteHeartbeat
                  );
                }, h);
              }
              function n(a, b) {
                b.granted_scopes &&
                  (a = babelHelpers["extends"]({}, a, {
                    grantedScopes: b.granted_scopes,
                  }));
                b.data_access_expiration_time &&
                  (a = babelHelpers["extends"]({}, a, {
                    data_access_expiration_time: Number(
                      b.data_access_expiration_time
                    ),
                  }));
                b.base_domain != null &&
                  d("sdk.AuthUtils").setBaseDomain(b.base_domain);
                d("sdk.AuthUtils").setGraphDomain(b.graph_domain);
                b.enforce_https && c("sdk.Runtime").setEnforceHttps(!0);
                b.referred &&
                  (a = babelHelpers["extends"]({}, a, {
                    referred: b.referred,
                  }));
                d("sdk.AuthStorageUtils").setLocalStorageToken(
                  a,
                  b.long_lived_token
                );
                return a;
              }
              b = {
                setFinalAuthResponse: e,
                login: a,
                logout: f,
                setAuthResponse: j,
                getAuthResponse: k,
                parseSignedRequest: d("sdk.SignedRequest").parse,
                xdResponseWrapper: l,
                subscribe: d("sdk.AuthUtils").AuthInternalEvent.subscribe,
                unsubscribe: d("sdk.AuthUtils").AuthInternalEvent.unsubscribe,
              };
              e = b;
              g["default"] = e;
            },
            98
          );
          __d(
            "dedupString",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              function a(a) {
                var b;
                return Object.keys(((b = {}), (b[a] = 0), b))[0];
              }
              f["default"] = a;
            },
            66
          );
          __d(
            "emptyFunction",
            [],
            function (a, b, c, d, e, f) {
              function a(a) {
                return function () {
                  return a;
                };
              }
              b = function () {};
              b.thatReturns = a;
              b.thatReturnsFalse = a(!1);
              b.thatReturnsTrue = a(!0);
              b.thatReturnsNull = a(null);
              b.thatReturnsThis = function () {
                return this;
              };
              b.thatReturnsArgument = function (a) {
                return a;
              };
              c = b;
              f["default"] = c;
            },
            66
          );
          __d(
            "passiveEventListenerUtil",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              b = !1;
              try {
                c = Object.defineProperty({}, "passive", {
                  get: function () {
                    b = !0;
                  },
                });
                window.addEventListener("test", null, c);
              } catch (a) {}
              var g = b;
              function a(a) {
                return g ? a : typeof a === "boolean" ? a : a.capture || !1;
              }
              f.isPassiveEventListenerSupported = g;
              f.makeEventOptions = a;
            },
            66
          );
          __d(
            "DOMEventListener",
            [
              "invariant",
              "dedupString",
              "emptyFunction",
              "passiveEventListenerUtil",
              "wrapFunction",
            ],
            function (a, b, c, d, e, f, g) {
              var h = b(
                  "passiveEventListenerUtil"
                ).isPassiveEventListenerSupported,
                i,
                j;
              window.addEventListener
                ? ((i = function (a, c, d, e) {
                    e === void 0 && (e = !1),
                      (d.wrapper = b("wrapFunction")(
                        d,
                        "entry",
                        b("dedupString")("DOMEventListener.add " + c)
                      )),
                      a.addEventListener(c, d.wrapper, h ? e : !1);
                  }),
                  (j = function (a, b, c, d) {
                    d === void 0 && (d = !1),
                      a.removeEventListener(b, c.wrapper, h ? d : !1);
                  }))
                : window.attachEvent
                ? ((i = function (a, c, d, e) {
                    e === void 0,
                      (d.wrapper = b("wrapFunction")(
                        d,
                        "entry",
                        "DOMEventListener.add " + c
                      )),
                      a.attachEvent || g(0, 2798),
                      a.attachEvent("on" + c, d.wrapper);
                  }),
                  (j = function (a, b, c, d) {
                    d === void 0,
                      a.detachEvent || g(0, 2799),
                      a.detachEvent("on" + b, c.wrapper);
                  }))
                : (j = i = b("emptyFunction"));
              a = {
                add: function (a, b, c, d) {
                  d === void 0 && (d = !1);
                  i(a, b, c, d);
                  return {
                    remove: function () {
                      j(a, b, c, d);
                    },
                  };
                },
                remove: j,
              };
              e.exports = a;
            },
            null
          );
          __d(
            "JSONRPC",
            ["Log"],
            function (a, b, c, d, e, f) {
              a = (function () {
                "use strict";
                function a(a) {
                  var b = this;
                  this.$1 = 0;
                  this.$2 = {};
                  this.remote = function (a) {
                    b.$3 = a;
                    return b.remote;
                  };
                  this.local = {};
                  this.$4 = a;
                }
                var c = a.prototype;
                c.stub = function (a) {
                  var b = this;
                  this.remote[a] = function () {
                    var c = { jsonrpc: "2.0", method: a };
                    for (
                      var d = arguments.length, e = new Array(d), f = 0;
                      f < d;
                      f++
                    )
                      e[f] = arguments[f];
                    typeof e[e.length - 1] === "function" &&
                      ((c.id = ++b.$1), (b.$2[c.id] = e.pop()));
                    c.params = e;
                    b.$4(ES("JSON", "stringify", !1, c), b.$3 || { method: a });
                  };
                };
                c.read = function (a, c) {
                  a = ES("JSON", "parse", !1, a);
                  var d = a.id;
                  if (!a.method) {
                    if (!this.$2[d]) {
                      b("Log").warn("Could not find callback %s", d);
                      return;
                    }
                    var e = this.$2[d];
                    delete this.$2[d];
                    delete a.id;
                    delete a.jsonrpc;
                    e(a);
                    return;
                  }
                  var f = this;
                  e = this.local[a.method];
                  var g;
                  d
                    ? (g = function (a, b) {
                        var e = { jsonrpc: "2.0", id: d };
                        e[a] = b;
                        window.setTimeout(function () {
                          f.$4(ES("JSON", "stringify", !1, e), c);
                        }, 0);
                      })
                    : (g = function () {});
                  if (!e) {
                    b("Log").error(
                      'Method "%s" has not been defined',
                      a.method
                    );
                    g("error", {
                      code: -32601,
                      message: "Method not found",
                      data: a.method,
                    });
                    return;
                  }
                  a.params.push(ES(g, "bind", !0, null, "result"));
                  a.params.push(ES(g, "bind", !0, null, "error"));
                  try {
                    e = e.apply(c || null, a.params);
                    typeof e !== "undefined" && g("result", e);
                  } catch (c) {
                    b("Log").error(
                      "Invokation of RPC method %s resulted in the error: %s",
                      a.method,
                      c.message
                    ),
                      g("error", {
                        code: -32603,
                        message: "Internal error",
                        data: c.message,
                      });
                  }
                };
                return a;
              })();
              e.exports = a;
            },
            null
          );
          __d(
            "Queue",
            [],
            function (a, b, c, d, e, f) {
              var g = {};
              a = (function () {
                function a(a) {
                  (this._timeout = null),
                    (this._interval = (a == null ? void 0 : a.interval) || 0),
                    (this._processor = a == null ? void 0 : a.processor),
                    (this._queue = []),
                    (this._stopped = !0);
                }
                var b = a.prototype;
                b._dispatch = function (a) {
                  var b = this;
                  a === void 0;
                  if (this._stopped || this._queue.length === 0) return;
                  a = this._processor;
                  if (a == null) {
                    this._stopped = !0;
                    throw new Error("No processor available");
                  }
                  var c = this._interval;
                  if (c != null)
                    a.call(this, this._queue.shift()),
                      (this._timeout = setTimeout(function () {
                        return b._dispatch();
                      }, c));
                  else
                    while (this._queue.length)
                      a.call(this, this._queue.shift());
                };
                b.enqueue = function (a) {
                  this._processor && !this._stopped
                    ? this._processor(a)
                    : this._queue.push(a);
                  return this;
                };
                b.start = function (a) {
                  a && (this._processor = a);
                  this._stopped = !1;
                  this._dispatch();
                  return this;
                };
                b.isStarted = function () {
                  return !this._stopped;
                };
                b.dispatch = function () {
                  this._dispatch(!0);
                };
                b.stop = function (a) {
                  this._stopped = !0;
                  a && this._timeout != null && clearTimeout(this._timeout);
                  return this;
                };
                b.merge = function (a, b) {
                  if (b) {
                    (b = this._queue).unshift.apply(b, a._queue);
                  } else {
                    (b = this._queue).push.apply(b, a._queue);
                  }
                  a._queue = [];
                  this._dispatch();
                  return this;
                };
                b.getLength = function () {
                  return this._queue.length;
                };
                a.get = function (b, c) {
                  var d;
                  b in g ? (d = g[b]) : (d = g[b] = new a(c));
                  return d;
                };
                a.exists = function (a) {
                  return a in g;
                };
                a.remove = function (a) {
                  return delete g[a];
                };
                return a;
              })();
              f["default"] = a;
            },
            66
          );
          __d(
            "sdk.RPC",
            ["Assert", "JSONRPC", "Queue"],
            function (a, b, c, d, e, f, g) {
              var h = new (c("Queue"))(),
                i = new (c("JSONRPC"))(function (a) {
                  h.enqueue(a);
                });
              a = {
                local: i.local,
                remote: i.remote,
                stub: ES(i.stub, "bind", !0, i),
                setInQueue: function (a) {
                  c("Assert").isInstanceOf(c("Queue"), a),
                    a.start(function (a) {
                      i.read(a);
                    });
                },
                getOutQueue: function () {
                  return h;
                },
              };
              b = a;
              g["default"] = b;
            },
            98
          );
          __d(
            "sdk.Canvas.Environment",
            ["sdk.RPC"],
            function (a, b, c, d, e, f, g) {
              function a(a) {
                c("sdk.RPC").remote.getPageInfo(function (b) {
                  a(b.result);
                });
              }
              function b(a, b) {
                c("sdk.RPC").remote.scrollTo({ x: a || 0, y: b || 0 });
              }
              c("sdk.RPC").stub("getPageInfo");
              c("sdk.RPC").stub("scrollTo");
              d = { getPageInfo: a, scrollTo: b };
              e = d;
              g["default"] = e;
            },
            98
          );
          __d(
            "sdk.DialogUtils",
            ["DOMEventListener", "sdk.Content", "sdk.DOM", "sdk.UA"],
            function (a, b, c, d, e, f, g) {
              "use strict";
              var h = 590,
                i = 240,
                j = 575;
              function a() {
                return window.innerWidth < window.innerHeight;
              }
              function b(a, b, c) {
                var e = null;
                return d("DOMEventListener").add(a, "click", function () {
                  e !== null && (window.clearTimeout(e), (e = null), b()),
                    (e = window.setTimeout(function () {
                      e = null;
                    }, c));
                });
              }
              function e(a, b, c) {
                var e,
                  f,
                  g = function () {
                    e = window.setTimeout(b, c);
                  };
                g();
                return d("DOMEventListener").add(a, "mouseenter", function () {
                  window.clearTimeout(e),
                    f ||
                      (f = d("DOMEventListener").add(
                        a,
                        "mouseleave",
                        function () {
                          g();
                        }
                      ));
                });
              }
              function f(a) {
                if (!c("sdk.UA").mobile()) return null;
                var b =
                    "onorientationchange" in window
                      ? "orientationchange"
                      : "resize",
                  e = function (b) {
                    return window.setTimeout(function (b) {
                      return a(b);
                    }, 50);
                  };
                return d("DOMEventListener").add(window, b, e);
              }
              function k(a) {
                if (a == null) return;
                var b = d("sdk.DOM").getViewportInfo();
                a.style.minHeight = b.height ? b.height + "px" : "";
                a.style.top = b.scrollTop ? b.scrollTop + "px" : "";
              }
              function l(a, b, e) {
                var f,
                  g,
                  k,
                  l = function (a) {
                    return typeof a === "number" ? a : parseInt(a, 10);
                  },
                  m = d("sdk.DOM").getViewportInfo(),
                  n = l(a.offsetWidth);
                l = l(a.offsetHeight);
                f =
                  (f = m.scrollLeft) != null
                    ? f
                    : 0 + ((f = m.width) != null ? f : j - n) / 2;
                n = ((n = m.height) != null ? n : i - l) / 2.5;
                f < n && (n = f);
                g = (g = m.height) != null ? g : i - l - n;
                k = ((k = m.height) != null ? k : i - l) / 2;
                e && (k = e.scrollTop - e.offsetTop + (e.clientHeight - l) / 2);
                k < n ? (k = n) : k > g && (k = g);
                k += (e = m.scrollTop) != null ? e : 0;
                if (c("sdk.UA").mobile()) {
                  n = 100;
                  if (b) {
                    n += ((g = m.height) != null ? g : h - l) / 2;
                    d("sdk.DOM").addCss(document.body, "fb_reposition");
                  } else
                    d("sdk.DOM").addCss(document.body, "fb_hidden"),
                      (document.body.style.width = "auto"),
                      (k = 1e4);
                  e = d("sdk.DOM").getByClass("fb_dialog_padding", a);
                  e.length && (e[0].style.height = n + "px");
                }
                a.style.left = (f > 0 ? f : 0) + "px";
                a.style.top = (k > 0 ? k : 0) + "px";
              }
              function m(a, b, c) {
                l(a, b, c);
                b = d("sdk.DOM").getViewportInfo();
                b =
                  (c = b.scrollTop) != null
                    ? c
                    : 0 +
                      ((c = b.height) != null ? c : h - a.offsetHeight) * 0.05;
                d("sdk.DOM").setStyle(a, "top", b + "px");
              }
              function n() {
                var a = document.createElement("div");
                a.setAttribute("id", "fb_dialog_ipad_overlay");
                k(a);
                return a;
              }
              function o(a) {
                a = a || {};
                var b = document.createElement("div"),
                  e = a;
                e = e.onClose;
                if (a.closeIcon && e) {
                  var f = document.createElement("a");
                  f.className = "fb_dialog_close_icon";
                  d("DOMEventListener").add(f, "click", e);
                  b.appendChild(f);
                }
                e = "fb_dialog";
                e += " " + (a.classes || "");
                e += c("sdk.UA").mobile()
                  ? " fb_dialog_mobile"
                  : " fb_dialog_advanced";
                b.className = e;
                if (a.width) {
                  f = parseInt(a.width, 10);
                  isNaN(f) || (b.style.width = f + "px");
                }
                e = document.createElement("div");
                a.content && d("sdk.Content").append(a.content, e);
                e.className = "fb_dialog_content";
                b.appendChild(e);
                if (c("sdk.UA").mobile()) {
                  f = document.createElement("div");
                  f.className = "fb_dialog_padding";
                  b.appendChild(f);
                }
                return { dialogElement: b, contentRoot: e };
              }
              function p(a) {
                var b = document.body;
                a
                  ? d("sdk.DOM").removeCss(b, "fb_reposition")
                  : d("sdk.DOM").removeCss(b, "fb_hidden");
              }
              g.isOrientationPotrait = a;
              g.addDoubleClickAction = b;
              g.addIdleDesktopAction = e;
              g.addMobileOrientationChangeAction = f;
              g.applyScreenDimensions = k;
              g.setDialogPositionToCenter = l;
              g.setDialogPositionToTop = m;
              g.setupNewDarkOverlay = n;
              g.setupNewDialog = o;
              g.onDialogHideCleanup = p;
            },
            98
          );
          __d(
            "sdk.fbt",
            [],
            function (a, b, c, d, e, f) {
              a = function () {};
              a._ = function (a) {
                var b = typeof a === "string" ? a : a[0];
                b == null &&
                  typeof a === "object" &&
                  a !== null &&
                  !Array.isArray(a) &&
                  "*" in a &&
                  (b = a["*"]);
                return b;
              };
              b = a;
              f["default"] = b;
            },
            66
          );
          __d(
            "sdk.Dialog",
            [
              "DOMEventListener",
              "ObservableMixin",
              "Type",
              "sdk.Canvas.Environment",
              "sdk.Content",
              "sdk.DOM",
              "sdk.DialogUtils",
              "sdk.Runtime",
              "sdk.UA",
              "sdk.fbt",
            ],
            function (a, b, c, d, e, f, g) {
              var h = 30,
                i = 590,
                j = 500,
                k = 240,
                l = 575;
              function m() {
                var a = d("sdk.DOM").getViewportInfo(),
                  b = a.height;
                a = a.width;
                return b != null && a != null
                  ? { width: Math.min(a, j), height: Math.min(b, i) }
                  : null;
              }
              var n = c("Type").extend(
                  {
                    constructor: function (a, b) {
                      this.parent(),
                        (this.id = a),
                        (this.display = b),
                        (this._e2e = {}),
                        o._dialogs ||
                          ((o._dialogs = {}), o._addOrientationHandler()),
                        (o._dialogs[a] = this),
                        this.trackEvent("init");
                    },
                    trackEvent: function (a, b) {
                      if (this._e2e[a]) return this;
                      this._e2e[a] = b || Date.now();
                      a == "close" && this.inform("e2e:end", this._e2e);
                      return this;
                    },
                    trackEvents: function (a) {
                      typeof a === "string" && (a = ES("JSON", "parse", !1, a));
                      for (var b in a)
                        Object.prototype.hasOwnProperty.call(a, b) &&
                          this.trackEvent(b, a[b]);
                      return this;
                    },
                  },
                  c("ObservableMixin")
                ),
                o = {
                  newInstance: function (a, b) {
                    return new n(a, b);
                  },
                  _dialogs: null,
                  _lastYOffset: 0,
                  _availScreenWidth: null,
                  _overlayListeners: [],
                  _loaderEl: null,
                  _overlayEl: null,
                  _stack: [],
                  _active: null,
                  get: function (a) {
                    return o._dialogs[a];
                  },
                  _findRoot: function (a) {
                    a = a;
                    while (a) {
                      if (d("sdk.DOM").containsCss(a, "fb_dialog")) return a;
                      a.parentElement instanceof HTMLElement &&
                        (a = a.parentElement);
                    }
                  },
                  _createWWWLoader: function (a) {
                    a = a ? a : "460";
                    var b = document.createElement("div");
                    b.innerHTML =
                      '<div class="dialog_title">  <a id="fb_dialog_loader_close">    <div class="fb_dialog_close_icon"></div>  </a>  <span>Facebook</span>  <div style="clear:both;"></div></div><div class="dialog_content"></div><div class="dialog_footer"></div>';
                    return o.create({ content: b, width: a });
                  },
                  _createMobileLoader: function () {
                    var a = document.createElement("div");
                    c("sdk.UA").nativeApp()
                      ? (a.innerHTML = '<div class="dialog_header"></div>')
                      : o.isTabletStyle()
                      ? (a.innerHTML =
                          '<div class="overlayLoader"><div id="fb_dialog_loader_spinner"></div><a id="fb_dialog_loader_close" href="#">' +
                          c("sdk.fbt")._("Cancel") +
                          "</a></div>")
                      : (a.innerHTML =
                          '<div class="dialog_header"><table>  <tbody>    <tr>      <td class="header_left">        <label class="touchable_button">          <input type="submit" value="' +
                          c("sdk.fbt")._("Cancel") +
                          '"            id="fb_dialog_loader_close"/>        </label>      </td>      <td class="header_center">        <div>         ' +
                          c("sdk.fbt")._("Loading...") +
                          '        </div>      </td>      <td class="header_right">      </td>    </tr>  </tbody></table></div>');
                    return o.create({
                      classes:
                        "loading" + (o.isTabletStyle() ? " centered" : ""),
                      content: a,
                    });
                  },
                  _setDialogOverlayStyle: function () {
                    o._overlayEl != null &&
                      d("sdk.DialogUtils").applyScreenDimensions(o._overlayEl);
                  },
                  _showTabletOverlay: function (a) {
                    if (!o.isTabletStyle()) return;
                    if (o._overlayEl == null) {
                      a = d("sdk.DialogUtils").setupNewDarkOverlay();
                      a.className = "";
                      o._overlayEl = a;
                      d("sdk.Content").append(o._overlayEl, null);
                    } else o._overlayEl.className = "";
                  },
                  _hideTabletOverlay: function () {
                    o.isTabletStyle() &&
                      (o._overlayEl != null &&
                        (o._overlayEl.className = "hidden"),
                      o._overlayListeners.forEach(function (a) {
                        return a.remove();
                      }),
                      (o._overlayListeners = []));
                  },
                  showLoader: function (a, b) {
                    a || (a = function () {});
                    var e = function () {
                      o._hideLoader(),
                        d("sdk.DialogUtils").onDialogHideCleanup(
                          o.isTabletStyle()
                        ),
                        o._hideTabletOverlay(),
                        a != null && a();
                    };
                    o._showTabletOverlay(e);
                    o._loaderEl ||
                      (o._loaderEl = o._findRoot(
                        c("sdk.UA").mobile()
                          ? o._createMobileLoader()
                          : o._createWWWLoader(b)
                      ));
                    b = document.getElementById("fb_dialog_loader_close");
                    if (b) {
                      d("sdk.DOM").removeCss(b, "fb_hidden");
                      b = d("DOMEventListener").add(b, "click", e);
                      o._overlayListeners.push(b);
                    }
                    o._loaderEl != null && o._makeActive(o._loaderEl);
                  },
                  _hideLoader: function () {
                    o._loaderEl &&
                      o._loaderEl == o._active &&
                      (o._loaderEl.style.top = "-10000px");
                  },
                  _makeActive: function (a) {
                    o._setDialogSizes(),
                      o._lowerActive(),
                      (o._active = a),
                      c("sdk.Runtime").isEnvironment(
                        c("sdk.Runtime").ENVIRONMENTS.CANVAS
                      ) &&
                        c("sdk.Canvas.Environment").getPageInfo(function (a) {
                          o._centerActive(a);
                        }),
                      o._centerActive();
                  },
                  _lowerActive: function () {
                    if (!o._active) return;
                    o._active.style.top = "-10000px";
                    o._active = null;
                  },
                  _removeStacked: function (a) {
                    o._stack = o._stack.filter(function (b) {
                      return b != a;
                    });
                  },
                  _centerActive: function (a) {
                    var b = o._active;
                    if (!b) return;
                    d("sdk.DialogUtils").setDialogPositionToCenter(
                      b,
                      o.isTabletStyle(),
                      a
                    );
                  },
                  _setDialogSizes: function (a) {
                    a === void 0 && (a = !1);
                    if (!c("sdk.UA").mobile()) return;
                    for (var b in o._dialogs)
                      if (Object.prototype.hasOwnProperty.call(o._dialogs, b)) {
                        var d = document.getElementById(b);
                        d &&
                          ((d.style.width = o.getDefaultSize().width + "px"),
                          a ||
                            (d.style.height =
                              o.getDefaultSize().height + "px"));
                      }
                  },
                  getDefaultSize: function () {
                    if (c("sdk.UA").mobile()) {
                      var a = m();
                      if (a) {
                        var b;
                        if (
                          (b =
                            (b = d("sdk.DOM").getViewportInfo()) == null
                              ? void 0
                              : b.width) != null
                            ? b
                            : j <= a.width
                        ) {
                          a.width =
                            (b =
                              (b = d("sdk.DOM").getViewportInfo()) == null
                                ? void 0
                                : b.width) != null
                              ? b
                              : j - h;
                        }
                        if (
                          (b =
                            (b = d("sdk.DOM").getViewportInfo()) == null
                              ? void 0
                              : b.height) != null
                            ? b
                            : i <= a.height
                        ) {
                          a.height =
                            (b =
                              (b = d("sdk.DOM").getViewportInfo()) == null
                                ? void 0
                                : b.height) != null
                              ? b
                              : i - h;
                        }
                        return a;
                      }
                      if (c("sdk.UA").ipad()) return { width: j, height: i };
                      if (c("sdk.UA").android())
                        return {
                          width: screen.availWidth,
                          height: screen.availHeight,
                        };
                      else {
                        b = window.innerWidth;
                        a = window.innerHeight;
                        var e = b / a > 1.2;
                        return {
                          width: b,
                          height: Math.max(a, e ? screen.width : screen.height),
                        };
                      }
                    }
                    return { width: l, height: k };
                  },
                  _handleOrientationChange: function () {
                    var a;
                    o._availScreenWidth =
                      (a =
                        (a = d("sdk.DOM").getViewportInfo()) == null
                          ? void 0
                          : a.width) != null
                        ? a
                        : j;
                    if (o.isTabletStyle())
                      o._setDialogSizes(!0),
                        o._centerActive(),
                        o._setDialogOverlayStyle();
                    else {
                      a = o.getDefaultSize().width;
                      for (var b in o._dialogs)
                        if (
                          Object.prototype.hasOwnProperty.call(o._dialogs, b)
                        ) {
                          var c = document.getElementById(b);
                          c && (c.style.width = a + "px");
                        }
                    }
                  },
                  _addOrientationHandler: function () {
                    var a;
                    if (!c("sdk.UA").mobile()) return;
                    o._availScreenWidth =
                      (a =
                        (a = d("sdk.DOM").getViewportInfo()) == null
                          ? void 0
                          : a.width) != null
                        ? a
                        : j;
                    d("sdk.DialogUtils").addMobileOrientationChangeAction(
                      o._handleOrientationChange
                    );
                  },
                  create: function (a) {
                    var b = d("sdk.DialogUtils").setupNewDialog(a);
                    d("sdk.Content").append(b.dialogElement);
                    a.visible && o.show(b.dialogElement);
                    typeof a.styles === "object" &&
                      ES(
                        "Object",
                        "assign",
                        !1,
                        b.dialogElement.style,
                        a.styles
                      );
                    return b.contentRoot;
                  },
                  show: function (a) {
                    var b = o._findRoot(a);
                    b != null &&
                      (o._removeStacked(b),
                      o._hideLoader(),
                      o._makeActive(b),
                      o._stack.push(b),
                      "fbCallID" in a &&
                        o
                          .get(a.fbCallID)
                          .inform("iframe_show")
                          .trackEvent("show"));
                  },
                  hide: function (a) {
                    var b = o._findRoot(a);
                    o._hideLoader();
                    b == o._active &&
                      (o._lowerActive(),
                      d("sdk.DialogUtils").onDialogHideCleanup(
                        o.isTabletStyle()
                      ),
                      o._hideTabletOverlay(),
                      "fbCallID" in a &&
                        o
                          .get(a.fbCallID)
                          .inform("iframe_hide")
                          .trackEvent("hide"));
                  },
                  remove: function (a) {
                    var b = o._findRoot(a);
                    if (b) {
                      a = o._active == b;
                      o._removeStacked(b);
                      a
                        ? (o._hideLoader(),
                          o._stack.length > 0
                            ? o.show(o._stack.pop())
                            : (o._lowerActive(),
                              d("sdk.DialogUtils").onDialogHideCleanup(
                                o.isTabletStyle()
                              ),
                              o._hideTabletOverlay()))
                        : o._active === null &&
                          o._stack.length > 0 &&
                          o.show(o._stack.pop());
                      window.setTimeout(function () {
                        var a;
                        (a = b.parentNode) == null ? void 0 : a.removeChild(b);
                      }, 3e3);
                    }
                  },
                  isActive: function (a) {
                    a = o._findRoot(a);
                    return a != null && a === o._active;
                  },
                  isTabletStyle: function () {
                    if (!c("sdk.UA").mobile()) return !1;
                    var a = m();
                    return a != null && (a.height >= i || a.width >= j);
                  },
                };
              a = o;
              g["default"] = a;
            },
            98
          );
          __d(
            "sdk.PlatformVersioning",
            ["ManagedError", "sdk.Runtime"],
            function (a, b, c, d, e, f, g) {
              var h = /^v\d+\.\d\d?$/;
              function a() {
                if (!c("sdk.Runtime").getVersion())
                  throw new (c("ManagedError"))(
                    "init not called with valid version"
                  );
              }
              function b(a) {
                if (!h.test(a))
                  throw new (c("ManagedError"))("invalid version specified");
              }
              g.REGEX = h;
              g.assertVersionIsSet = a;
              g.assertValidVersion = b;
            },
            98
          );
          __d(
            "sdk.warnInsecure",
            ["Log", "sdk.Runtime", "sdk.Scribe", "sdk.feature"],
            function (a, b, c, d, e, f, g) {
              "use strict";
              var h = c("sdk.feature")("https_only_learn_more", ""),
                i = {};
              function a(a) {
                window.location.protocol !== "https:" &&
                  (d("Log").log(
                    "error",
                    -1,
                    "The method FB.%s can no longer be called from http pages. %s",
                    a,
                    h
                  ),
                  c("sdk.feature")("https_only_scribe_logging", !0) &&
                    !Object.prototype.hasOwnProperty.call(i, a) &&
                    (d("sdk.Scribe").log("jssdk_error", {
                      appId: c("sdk.Runtime").getClientID(),
                      error: "HttpsOnly",
                      extra: { message: a },
                    }),
                    (i[a] = !0)));
                return !0;
              }
              g["default"] = a;
            },
            98
          );
          __d(
            "sdk.api",
            [
              "ApiClient",
              "sdk.PlatformVersioning",
              "sdk.Runtime",
              "sdk.URI",
              "sdk.warnInsecure",
            ],
            function (a, b, c, d, e, f, g) {
              function a(a) {
                for (
                  var b = arguments.length,
                    e = new Array(b > 1 ? b - 1 : 0),
                    f = 1;
                  f < b;
                  f++
                )
                  e[f - 1] = arguments[f];
                c("sdk.warnInsecure")("api");
                if (typeof a === "string")
                  if (c("sdk.Runtime").getIsVersioned()) {
                    d("sdk.PlatformVersioning").assertVersionIsSet();
                    var g = a;
                    !/https?/.test(g) && g.charAt(0) !== "/" && (g = "/" + g);
                    g = new (c("sdk.URI"))(g)
                      .setDomain("")
                      .setProtocol("")
                      .toString();
                    d("sdk.PlatformVersioning").REGEX.test(
                      g.substring(1, g.indexOf("/", 1))
                    ) || (g = "/" + c("sdk.Runtime").getVersion() + g);
                    var h = [g].concat(
                      Array.prototype.slice.call(arguments, 1)
                    );
                    c("ApiClient").graph.apply(c("ApiClient"), h);
                  } else c("ApiClient").graph.apply(c("ApiClient"), arguments);
                else c("ApiClient").rest.apply(c("ApiClient"), arguments);
              }
              g["default"] = a;
            },
            98
          );
          __d(
            "sdk.Frictionless",
            ["sdk.Auth.LoginStatus", "sdk.Dialog", "sdk.Event", "sdk.api"],
            function (a, b, c, d, e, f, g) {
              var h = {
                _allowedRecipients: {},
                _useFrictionless: !1,
                _updateRecipients: function () {
                  (h._allowedRecipients = {}),
                    c("sdk.api")(
                      "/me/apprequestformerrecipients",
                      function (a) {
                        if (!a || (a == null ? void 0 : a.error)) return;
                        a.data.forEach(function (a) {
                          h._allowedRecipients[a.recipient_id] = !0;
                        });
                      }
                    );
                },
                init: function () {
                  (h._useFrictionless = !0),
                    c("sdk.Auth.LoginStatus").getLoginStatus(function (a) {
                      (a == null ? void 0 : a.status) == "connected" &&
                        h._updateRecipients();
                    }),
                    d("sdk.Event").subscribe("auth.login", function (a) {
                      a.authResponse && h._updateRecipients();
                    });
                },
                _processRequestResponse: function (a, b) {
                  return function (d) {
                    var e = d && d.updated_frictionless;
                    h._useFrictionless && e !== null && h._updateRecipients();
                    d &&
                      (!b &&
                        d.frictionless !== null &&
                        c("sdk.Dialog")._hideLoader(),
                      delete d.frictionless,
                      delete d.updated_frictionless);
                    a && a(d);
                  };
                },
                isAllowed: function (a) {
                  a = a;
                  if (!a) return !1;
                  if (typeof a === "number") return a in h._allowedRecipients;
                  typeof a === "string" && (a = a.split(","));
                  a = a.map(function (a) {
                    return String(a).trim();
                  });
                  var b = !0,
                    c = !1;
                  a.forEach(function (a) {
                    (b = b && a in h._allowedRecipients), (c = !0);
                  });
                  return b && c;
                },
              };
              a = h;
              g["default"] = a;
            },
            98
          );
          __d(
            "resolveURI",
            [],
            function (a, b, c, d, e, f) {
              function a(a) {
                if (a == null || a === "") return window.location.href;
                var b = document.createElement("a");
                b.href = a;
                return b.href;
              }
              f["default"] = a;
            },
            66
          );
          __d(
            "sdk.NativeExtensions",
            ["DOMEventListener", "Log", "sdk.UA"],
            function (a, b, c, d, e, f, g) {
              var h = "fbNativeExtensionsReady";
              function i() {
                return window._FBSdkExtensions &&
                  window._FBSdkExtensions.jsonRPC &&
                  window._FBSdkExtensions.initializeCallbackHandler &&
                  window._FBSdkExtensions.supportsDialog
                  ? window._FBSdkExtensions
                  : null;
              }
              function a(a) {
                if (!c("sdk.UA").facebookInAppBrowser()) {
                  d("Log").error(
                    "FB.NativeExtensions.onReady only works when the page is rendered in a WebView of the native Facebook app."
                  );
                  return;
                }
                var b = i();
                if (b) {
                  a(b);
                  return;
                }
                var e = !1;
                b = function b() {
                  var c = i();
                  if (e || !c) return;
                  e = !0;
                  a(c);
                  d("DOMEventListener").remove(window, h, b);
                };
                d("DOMEventListener").add(window, h, b);
              }
              g.onReady = a;
            },
            98
          );
          __d(
            "sdk.Extensions",
            ["JSONRPC", "Queue", "sdk.NativeExtensions", "sdk.UA"],
            function (a, b, c, d, e, f, g) {
              "use strict";
              var h = new (c("Queue"))(),
                i = new (c("JSONRPC"))(function (a) {
                  h.enqueue(a);
                }),
                j = new (c("Queue"))();
              j.start(function (a) {
                i.read(a);
              });
              var k = null;
              c("sdk.UA").facebookInAppBrowser() &&
                d("sdk.NativeExtensions").onReady(function (a) {
                  (k = a),
                    (window._FBBrowserCallbackHandler = function (a) {
                      j.enqueue(ES("JSON", "stringify", !1, a));
                    }),
                    a.initializeCallbackHandler(
                      ES("JSON", "stringify", !1, {
                        name: "_FBBrowserCallbackHandler",
                      })
                    ),
                    h.start(function (b) {
                      a.jsonRPC(b);
                    });
                });
              b = i.local;
              e = i.remote;
              f = ES(i.stub, "bind", !0, i);
              function a(a) {
                return !!k && k.supportsDialog(a);
              }
              g.local = b;
              g.remote = e;
              g.stub = f;
              g.supportsDialog = a;
            },
            98
          );
          __d(
            "sdk.Native",
            ["Log", "sdk.UA"],
            function (a, b, c, d, e, f, g) {
              var h = "fbNativeReady";
              a = {
                onready: function (a) {
                  if (!c("sdk.UA").nativeApp()) {
                    d("Log").error(
                      "FB.Native.onready only works when the page is rendered in a WebView of the native Facebook app. Test if this is the case calling FB.UA.nativeApp()"
                    );
                    return;
                  }
                  window.__fbNative &&
                    !this.nativeReady &&
                    ES("Object", "assign", !1, this, window.__fbNative);
                  if (this.nativeReady) a();
                  else {
                    var b = function b() {
                      window.removeEventListener(h, b), this.onready(a);
                    };
                    window.addEventListener(h, b, !1);
                  }
                },
              };
              b = a;
              g["default"] = b;
            },
            98
          );
          __d(
            "sdk.Popup",
            [
              "sdk.Content",
              "sdk.Runtime",
              "sdk.Scribe",
              "sdk.UA",
              "sdk.feature",
            ],
            function (a, b, c, d, e, f, g) {
              "use strict";
              function a(a, b) {
                var e = h({
                    name: a.name,
                    height: a.size.height,
                    width: a.size.width,
                    isOAuth: b,
                  }),
                  f;
                a.post
                  ? ((f = window.open("about:blank", a.id, e)),
                    f &&
                      d("sdk.Content").submitToTarget({
                        url: a.url,
                        target: a.id,
                        params: a.params,
                      }))
                  : (f = window.open(a.url, a.id, e));
                if (
                  !f &&
                  c("sdk.feature")("popup_blocker_scribe_logging", !0)
                ) {
                  e = b ? "POPUP_MAYBE_BLOCKED_OAUTH" : "POPUP_MAYBE_BLOCKED";
                  d("sdk.Scribe").log("jssdk_error", {
                    appId: c("sdk.Runtime").getClientID(),
                    error: e,
                    extra: { call: a.name },
                  });
                }
                return f;
              }
              function h(a) {
                var b = window.screenX,
                  d = window.screenY,
                  e = window.outerWidth,
                  f = window.outerHeight,
                  g = c("sdk.UA").mobile() ? 0 : a.width,
                  h = c("sdk.UA").mobile() ? 0 : a.height;
                b = b < 0 ? window.screen.width + b : b;
                b = b + (e - g) / 2;
                e = d + (f - h) / 2.5;
                d = [];
                g !== null && d.push("width=" + g);
                h !== null && d.push("height=" + h);
                d.push("left=" + b);
                d.push("top=" + e);
                d.push("scrollbars=1");
                a.isOAuth &&
                  (d.push("toolbar=0"),
                  (!c("sdk.UA").chrome() || c("sdk.UA").chrome() < 59) &&
                    d.push("location=1"));
                return d.join(",");
              }
              g.popup = a;
            },
            98
          );
          __d(
            "isFacebookDotNetURI",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              function a(a) {
                if (a.getProtocol() !== "http" && a.getProtocol() !== "https")
                  return !1;
                var b = Number(a.getPort());
                if (!!b && b !== 80 && b !== 443) return !1;
                return a.isSubdomainOfDomain("facebook.net") ? !0 : !1;
              }
              f["default"] = a;
            },
            66
          );
          __d(
            "isFacebookURI",
            [],
            function (a, b, c, d, e, f) {
              var g = null,
                h = ["http", "https"];
              function a(a) {
                g || (g = new RegExp("(^|\\.)facebook\\.com$", "i"));
                if (a.isEmpty() && a.toString() !== "#") return !1;
                return !a.getDomain() && !a.getProtocol()
                  ? !0
                  : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain());
              }
              a.setRegex = function (a) {
                g = a;
              };
              f["default"] = a;
            },
            66
          );
          __d(
            "isInstagramURI",
            [],
            function (a, b, c, d, e, f) {
              var g = null;
              function a(a) {
                if (a.isEmpty() && a.toString() !== "#") return !1;
                if (!a.getDomain() && !a.getProtocol()) return !1;
                if (a.getProtocol() !== "https") return !1;
                g || (g = new RegExp("(^|\\.)instagram\\.com$", "i"));
                return g.test(a.getDomain());
              }
              f["default"] = a;
            },
            66
          );
          __d(
            "resolveWindow",
            [],
            function (a, b, c, d, e, f) {
              function a(a) {
                if (a == null) return null;
                var b = window;
                a = a.split(".");
                try {
                  for (var c = 0; c < a.length; c++) {
                    var d = a[c],
                      e = /^frames\[[\'\"]?([a-zA-Z0-9\-_]+)[\'\"]?\]$/.exec(d);
                    if (e) b = b.frames[e[1]];
                    else if (d === "opener" || d === "parent" || d === "top")
                      b = b[d];
                    else return null;
                  }
                } catch (a) {
                  return null;
                }
                return b;
              }
              f["default"] = a;
            },
            66
          );
          __d(
            "sdk.XD",
            [
              "JSSDKXDConfig",
              "Log",
              "QueryString",
              "Queue",
              "UrlMap",
              "guid",
              "isFacebookDotNetURI",
              "isFacebookURI",
              "isInstagramURI",
              "resolveWindow",
              "sdk.Event",
              "sdk.RPC",
              "sdk.Runtime",
              "sdk.Scribe",
              "sdk.URI",
              "sdk.feature",
            ],
            function (a, b, c, d, e, f, g) {
              var h = new (c("Queue"))(),
                i = "parent",
                j = null,
                k = /^https:\/\/.*\.(facebook|instagram)\.(com|net)$/;
              a = d("JSSDKXDConfig").useCdn ? "cdn" : "www";
              var l = d("UrlMap").resolve(a) + d("JSSDKXDConfig").XXdUrl;
              b = function () {
                if ("origin" in location)
                  if (location.origin && location.origin != "null")
                    return location.origin;
                  else if (window !== window.parent)
                    try {
                      var a = parent.location.origin;
                      if (a && a != "null") return a;
                    } catch (a) {}
                return location.protocol + "//" + location.host;
              };
              var m = c("guid")(),
                n = b(),
                o = !1,
                p = new (c("Queue"))();
              c("sdk.RPC").setInQueue(p);
              function q(a) {
                d("Log").info("Remote XD can talk to facebook.com (%s)", a),
                  c("sdk.Runtime").setEnvironment(
                    a === "canvas"
                      ? c("sdk.Runtime").ENVIRONMENTS.CANVAS
                      : c("sdk.Runtime").ENVIRONMENTS.PAGETAB
                  );
              }
              function r(a, b) {
                if (!b) {
                  d("Log").error("No senderOrigin");
                  throw new Error();
                }
                switch (a.xd_action) {
                  case "plugin_ready":
                    if (typeof a.name === "string") {
                      var e = a.name;
                      d("Log").info("Plugin %s ready from %s", e, b);
                      if (k.test(b)) {
                        var f = c("Queue").get(e, {});
                        f.start(function (a) {
                          if (a == null) {
                            d("Log").warn(
                              "Discarding null message from %s to %s on %s",
                              b,
                              e,
                              n
                            );
                            return;
                          }
                          window.frames[e] != null
                            ? window.frames[e].postMessage(
                                {
                                  xdArbiterHandleMessage: !0,
                                  message: a,
                                  origin: n,
                                },
                                b
                              )
                            : d("Log").info(
                                "Message discarded for plugin at window.frames[%s] which may have been removed by a new XFBML.parse() call.",
                                e
                              );
                        });
                      } else {
                        d("Log").error(
                          "Plugin attempted to register from non-Facebook domain %s",
                          b
                        );
                        return;
                      }
                    } else
                      d("Log").error(
                        "plugin_ready message received without a name"
                      );
                    break;
                }
                a.data != null &&
                  (typeof a.data === "object" || typeof a.data === "string") &&
                  s(a.data, b);
              }
              function s(a, b) {
                var e = new (c("sdk.URI"))(b);
                if (
                  b != null &&
                  b !== "native" &&
                  !c("isFacebookURI")(e) &&
                  !c("isFacebookDotNetURI")(e) &&
                  !c("isInstagramURI")(e)
                )
                  return;
                if (typeof a === "string") {
                  if (/^FB_RPC:/.test(a)) {
                    p.enqueue(a.substring(7));
                    return;
                  }
                  if (a.substring(0, 1) == "{")
                    try {
                      a = ES("JSON", "parse", !1, a);
                    } catch (b) {
                      d("Log").warn("Failed to decode %s as JSON", a);
                      return;
                    }
                  else a = c("QueryString").decode(a);
                }
                e = a;
                if (e.xd_action) {
                  r(e, b);
                  return;
                }
                if (typeof e.cb === "string") {
                  a = w._callbacks[e.cb];
                  w._forever[e.cb] || delete w._callbacks[e.cb];
                  a && a(e);
                }
              }
              function t(a, b) {
                a == "facebook"
                  ? ((b.relation = i),
                    h.enqueue(b),
                    !c("sdk.Runtime").isCanvasEnvironment() &&
                      !h.isStarted() &&
                      v(j))
                  : c("Queue").get(a, {}).enqueue(b);
              }
              c("sdk.RPC")
                .getOutQueue()
                .start(function (a) {
                  h.enqueue("FB_RPC:" + a);
                });
              function u(a) {
                if (o) return;
                o = !0;
                window.addEventListener("message", function (a) {
                  var b = a.data,
                    e = a.origin || "native";
                  if (!/^(https?:\/\/|native$)/.test(e)) {
                    d("Log").debug(
                      "Received message from invalid origin type: %s",
                      e
                    );
                    return;
                  }
                  if (!k.test(e)) return;
                  if (typeof b === "string") s(b, e);
                  else {
                    if (
                      a.source == parent &&
                      a.data.xdArbiterRegisterAck &&
                      k.test(e)
                    ) {
                      typeof a.data.xdArbiterRegisterAck === "string" &&
                        a.data.xdArbiterRegisterAck !== "" &&
                        q(a.data.xdArbiterRegisterAck);
                      h.isStarted() ||
                        h.start(function (a) {
                          if (a == null) {
                            d("Log").warn(
                              "Discarding null message from %s to %s",
                              n,
                              e
                            );
                            return;
                          }
                          var b = parent;
                          typeof a === "object" &&
                            typeof a.relation === "string" &&
                            (b = c("resolveWindow")(a.relation));
                          ((b = b) != null ? b : parent).postMessage(
                            {
                              xdArbiterHandleMessage: !0,
                              message: a,
                              origin: n,
                            },
                            e
                          );
                        });
                      return;
                    }
                    return;
                  }
                });
                c("sdk.Runtime").isCanvasEnvironment() && v(a);
              }
              function v(a) {
                var b;
                o || u();
                if (window.parent != top) {
                  d("Log").warn(
                    "cannot deliver messages to facebook unless window.parent is top and facebook.com."
                  );
                  return;
                }
                var e =
                  (b = c("sdk.feature")("xd_timeout", 6e4)) != null ? b : 6e4;
                b = 200;
                var f = 0,
                  g = e / b,
                  i = function () {
                    return parent.postMessage(
                      { xdArbiterRegister: !0, xdProxyName: a, origin: n },
                      "*"
                    );
                  };
                f = window.setInterval(function () {
                  if (!h.isStarted() && g > 0)
                    g--, d("Log").debug("resending xdArbiterRegister"), i();
                  else {
                    window.clearInterval(f);
                    if (g === 0) {
                      d("sdk.Scribe").log("jssdk_error", {
                        appId: c("sdk.Runtime").getClientID(),
                        error: "XD_FB_QUEUE_INITIALIZATION",
                        extra: {
                          message: "Failed to initialize in " + e + "ms",
                        },
                      });
                      d("Log").error("xdAbiterRegisterAck not received");
                      return;
                    }
                  }
                }, b);
              }
              var w = {
                rpc: c("sdk.RPC"),
                _callbacks: {},
                _forever: {},
                _channel: m,
                _origin: n,
                onMessage: s,
                init: u,
                sendToFacebook: t,
                inform: function (a, b, c, d) {
                  t("facebook", {
                    method: a,
                    params: ES("JSON", "stringify", !1, b || {}),
                    behavior: d || "p",
                    relation: c,
                  });
                },
                handler: function (a, b, d, e) {
                  a =
                    "#" +
                    c("QueryString").encode({
                      cb: w.registerCallback(a, d, e),
                      origin: n + "/" + m,
                      domain: location.hostname,
                      relation: b || "opener",
                      is_canvas: c("sdk.Runtime").isCanvasEnvironment(),
                    });
                  return l + a;
                },
                registerCallback: function (a, b, d) {
                  d = d || c("guid")();
                  b && (w._forever[d] = !0);
                  w._callbacks[d] = a;
                  return d;
                },
              };
              d("sdk.Event").subscribe("init:post", function (a) {
                (j = a.xdProxyName), u(a.xdProxyName);
              });
              f.exports = w;
            },
            34
          );
          __d(
            "sdk.modFeatureCheck",
            ["JSSDKConfig"],
            function (a, b, c, d, e, f, g) {
              function a(a, b, c) {
                c === void 0 && (c = !1);
                if (
                  d("JSSDKConfig").features &&
                  a in d("JSSDKConfig").features
                ) {
                  var e = d("JSSDKConfig").features[a];
                  if (typeof e === "object" && Array.isArray(e))
                    return b.some(function (a) {
                      return e.some(function (b) {
                        return a % b === 0;
                      });
                    });
                }
                return c;
              }
              g.forIDs = a;
            },
            98
          );
          __d(
            "sdk.openMessenger",
            ["sdk.UA"],
            function (a, b, c, d, e, f, g) {
              "use strict";
              var h = "https://itunes.apple.com/us/app/messenger/id454638411",
                i =
                  "https://play.google.com/store/apps/details?id=com.facebook.orca",
                j = 3e3;
              function a(a) {
                var b,
                  d,
                  e = a.link;
                a = a.app_id;
                c("sdk.UA").android()
                  ? ((b =
                      "intent://share/#Intent;package=com.facebook.orca;scheme=fb-messenger;S.android.intent.extra.TEXT=" +
                      encodeURIComponent(e) +
                      ";S.trigger=send_plugin;"),
                    a &&
                      (b += "S.platform_app_id=" + encodeURIComponent(a) + ";"),
                    (b += "end"),
                    (d = i))
                  : ((b = "fb-messenger://share?link=" + encodeURIComponent(e)),
                    a && (b += "&app_id=" + encodeURIComponent(a)),
                    (d = h));
                setTimeout(function () {
                  window.location.href = d;
                }, j);
                window.location.href = b;
              }
              g["default"] = a;
            },
            98
          );
          __d(
            "sdk.UIServer",
            [
              "Log",
              "QueryString",
              "UrlMap",
              "createObjectFrom",
              "flattenObject",
              "guid",
              "insertIframe",
              "resolveURI",
              "sdk.Auth",
              "sdk.Auth.LoginStatus",
              "sdk.Content",
              "sdk.DOM",
              "sdk.Dialog",
              "sdk.Event",
              "sdk.Extensions",
              "sdk.Frictionless",
              "sdk.LoggingUtils",
              "sdk.Native",
              "sdk.Popup",
              "sdk.RPC",
              "sdk.Runtime",
              "sdk.UA",
              "sdk.XD",
              "sdk.api",
              "sdk.fbt",
              "sdk.feature",
              "sdk.getContextType",
              "sdk.modFeatureCheck",
              "sdk.openMessenger",
            ],
            function (a, b, c, d, e, f, g) {
              var h = {
                transform: function (a) {
                  if (
                    a.params.display === "touch" &&
                    p.canIframe(a.params) &&
                    window.postMessage
                  ) {
                    a.params.channel = p._xdChannelHandler(a.id, "parent");
                    c("sdk.UA").nativeApp() || (a.params.in_iframe = 1);
                    return a;
                  } else return p.genericTransform(a);
                },
                getXdRelation: function (a) {
                  var b = a.display;
                  return b === "touch" && window.postMessage && a.in_iframe
                    ? "parent"
                    : p.getXdRelation(a);
                },
              };
              function i(a) {
                return (
                  p.isOAuth(a) && d("sdk.Extensions").supportsDialog("oauth")
                );
              }
              function j(a) {
                return (
                  p.isOAuth(a) &&
                  (a.is_account_link === !0 || a.is_account_link === "true") &&
                  d("sdk.Extensions").supportsDialog("accountLink")
                );
              }
              function k(a) {
                if (!c("sdk.Runtime").getClientID()) {
                  d("Log").error("FB.login() called before FB.init().");
                  return;
                }
                if (
                  c("sdk.Auth").getAuthResponse() &&
                  !a.params.scope &&
                  !a.params.asset_scope &&
                  !a.params.auth_type
                ) {
                  a.params.plugin_prepare ||
                    (d("Log").error(
                      "FB.login() called when user is already connected."
                    ),
                    a.cb &&
                      (a == null
                        ? void 0
                        : a.cb({
                            status: c("sdk.Runtime").getLoginStatus(),
                            authResponse: c("sdk.Auth").getAuthResponse(),
                          })));
                  return;
                }
                var b = a.cb,
                  e = a.id;
                delete a.cb;
                a &&
                  a.params &&
                  !a.params.logger_id &&
                  (a.params.logger_id = c("guid")());
                a && a.params && !a.params.cbt && (a.params.cbt = Date.now());
                (a.params.fx_app === "instagram" ||
                  a.params.fx_app === "ig_single") &&
                  !a.params.scope &&
                  (a.params.scope = "public_profile");
                var f = a.params.auth_type;
                f = f && ES(f, "includes", !0, "reauthenticate");
                var g = { token: !0, signed_request: !0, graph_domain: !0 };
                g = Object.keys(
                  ES(
                    "Object",
                    "assign",
                    !1,
                    a.params.response_type
                      ? c("createObjectFrom")(a.params.response_type.split(","))
                      : {},
                    g
                  )
                ).join(",");
                a.params.display === "async"
                  ? (ES("Object", "assign", !1, a.params, {
                      client_id: c("sdk.Runtime").getClientID(),
                      origin: c("sdk.getContextType")(),
                      response_type: g,
                      domain: location.hostname,
                    }),
                    (a.cb = c("sdk.Auth").xdResponseWrapper(
                      b,
                      c("sdk.Auth").getAuthResponse(),
                      "permissions.oauth",
                      a.params
                    )))
                  : (f &&
                      p._xdNextHandler(
                        function (a) {
                          b({ authResponse: null, status: "not_authorized" });
                        },
                        e,
                        a.params.plugin_prepare ? "opener.parent" : "opener",
                        !0
                      ),
                    ES("Object", "assign", !1, a.params, {
                      client_id: c("sdk.Runtime").getClientID(),
                      redirect_uri: c("resolveURI")(
                        p.xdHandler(
                          b,
                          e,
                          a.params.plugin_prepare ? "opener.parent" : "opener",
                          c("sdk.Auth").getAuthResponse(),
                          "permissions.oauth",
                          !f,
                          a.params
                        )
                      ),
                      origin: c("sdk.getContextType")(),
                      response_type: g,
                      domain: location.hostname,
                    }));
                e = a.params && a.params.tp && a.params.tp !== "unspecified";
                !a.params.plugin_prepare &&
                  !e &&
                  d("sdk.LoggingUtils").logEvent(
                    a.params.logger_id,
                    d("sdk.LoggingUtils").logEventName.loginStart,
                    { cbt_delta: 0 }
                  );
                return a;
              }
              a = {
                "stream.share": {
                  size: { width: 670, height: 340 },
                  url: "sharer.php",
                  transform: function (a) {
                    a.params.u || (a.params.u = window.location.toString());
                    a.params.display = "popup";
                    return a;
                  },
                },
                gaming_friendfinder: {
                  url: "gaming/me/friendfinder/",
                  transform: function (a) {
                    if (!c("sdk.Runtime").getClientID()) {
                      d("Log").error("FriendFinder called before FB.init().");
                      return;
                    }
                    a.url += c("sdk.Runtime").getClientID();
                    a.size = { width: 400, height: 800 };
                    return a;
                  },
                },
                gaming_media_library: {
                  url: "gaming/me/media_asset/",
                  transform: function (a) {
                    a.url += a.params.media_id;
                    a.size = { width: 400, height: 800 };
                    return a;
                  },
                },
                apprequests: {
                  transform: function (a) {
                    a = h.transform(a);
                    a.size = { width: 445, height: 635 };
                    a.params.display = "popup";
                    a.params.in_iframe = !1;
                    a.params.frictionless =
                      c("sdk.Frictionless") &&
                      c("sdk.Frictionless")._useFrictionless;
                    a.params.frictionless &&
                      (c("sdk.Frictionless").isAllowed(a.params.to) &&
                        (a.hideLoader = !0),
                      (a.cb = c("sdk.Frictionless")._processRequestResponse(
                        a.cb,
                        a.hideLoader
                      )));
                    a.closeIcon = !1;
                    return a;
                  },
                  getXdRelation: h.getXdRelation,
                },
                "permissions.oauth": {
                  url: "dialog/oauth",
                  size: {
                    width: c("sdk.UA").mobile() ? null : 600,
                    height: c("sdk.UA").mobile() ? null : 679,
                  },
                  transform: function (a) {
                    return k(a);
                  },
                },
                "permissions.ig_oauth": {
                  url: "oauth/authorize",
                  size: {
                    width: c("sdk.UA").mobile() ? null : 600,
                    height: c("sdk.UA").mobile() ? null : 679,
                  },
                  transform: function (a) {
                    return k(a);
                  },
                },
                photo_picker: {
                  url: "dialog/photo_picker",
                  size: {
                    width: c("sdk.UA").mobile() ? null : 600,
                    height: c("sdk.UA").mobile() ? null : 679,
                  },
                  transform: function (a) {
                    if (!c("sdk.Runtime").getClientID()) {
                      d("Log").error(
                        "Photo Picker was called before FB.init()."
                      );
                      return;
                    }
                    var b = a.cb,
                      e = a.id;
                    delete a.cb;
                    ES("Object", "assign", !1, a.params, {
                      client_id: c("sdk.Runtime").getClientID(),
                      redirect_uri: c("resolveURI")(
                        p.xdHandlerPhotoPicker(
                          b,
                          e,
                          a.params.plugin_prepare ? "opener.parent" : "opener",
                          "photo_picker",
                          a.params
                        )
                      ),
                      origin: c("sdk.getContextType")(),
                      domain: location.hostname,
                    });
                    return a;
                  },
                },
                "auth.logout": {
                  transform: function (a) {
                    !c("sdk.Runtime").getClientID()
                      ? d("Log").error(
                          "FB.logout() called before calling FB.init()."
                        )
                      : !c("sdk.Auth").getAuthResponse()
                      ? d("Log").error(
                          "FB.logout() called without an access token."
                        )
                      : c("sdk.Auth").logout(a.cb);
                  },
                },
                "login.status": {
                  transform: function (a) {
                    c("sdk.Auth.LoginStatus").getLoginStatus(a.cb);
                  },
                },
                pay: {
                  size: { width: 555, height: 120 },
                  connectDisplay: "popup",
                },
                live_broadcast: {
                  transform: function (a) {
                    a.params.phase === "create" &&
                      (a.size = { width: 480, height: 280 });
                    a.params.phase === "publish" &&
                      (a.size = { width: 772, height: 540 });
                    return a;
                  },
                  require_access_token: !0,
                },
                boost: {
                  transform: function (a) {
                    a.size = { width: 960, height: 760 };
                    a.params.display = "popup";
                    return a;
                  },
                },
                share_referral: { size: { width: 482, height: 725 } },
              };
              var l = {},
                m = 0;
              function n(a, b) {
                l[b] = !0;
                return function (c) {
                  delete l[b], a(c);
                };
              }
              function o(a) {
                var b = a.method.toLowerCase();
                return b === "pay" && a.display === "async" ? !0 : !1;
              }
              var p = {
                Methods: a,
                _oauthMethodNameSet: new Set([
                  "permissions.oauth",
                  "permissions.request",
                  "permissions.ig_oauth",
                ]),
                _loadedNodes: {},
                _defaultCb: {},
                _resultToken: '"xxRESULTTOKENxx"',
                _popupInterval: null,
                genericTransform: function (a) {
                  (a.params.display == "dialog" ||
                    a.params.display == "iframe") &&
                    ES(
                      "Object",
                      "assign",
                      !1,
                      a.params,
                      {
                        display: "iframe",
                        channel: p._xdChannelHandler(a.id, "parent.parent"),
                      },
                      !0
                    );
                  return a;
                },
                isOAuth: function (a) {
                  return (
                    p._oauthMethodNameSet.has(a.method) || a.method == "oauth"
                  );
                },
                checkOauthDisplay: function (a) {
                  var b = a.scope || a.perms || c("sdk.Runtime").getScope();
                  return !b ? a.display : "popup";
                },
                prepareCall: function (a, b) {
                  var e = a.method.toLowerCase(),
                    f = Object.prototype.hasOwnProperty.call(p.Methods, e)
                      ? babelHelpers["extends"]({}, p.Methods[e])
                      : {},
                    g = a.id || c("guid")(),
                    h = !0;
                  ES("Object", "assign", !1, a, {
                    app_id: c("sdk.Runtime").getClientID(),
                    locale: c("sdk.Runtime").getLocale(),
                    sdk: "joey",
                    access_token:
                      (h && c("sdk.Runtime").getAccessToken()) || void 0,
                  });
                  a.display = p.getDisplayMode(f, a);
                  f.url || (f.url = "dialog/" + e);
                  (f.url == "dialog/oauth" ||
                    f.url == "dialog/permissions.request") &&
                    (a.display == "iframe" ||
                      (a.display == "touch" && a.in_iframe)) &&
                    (a.display = p.checkOauthDisplay(a));
                  if (f.url == "dialog/oauth") {
                    if (
                      m >=
                      ((h = c("sdk.feature")(
                        "max_oauth_dialog_retries",
                        100
                      )) != null
                        ? h
                        : 100)
                    ) {
                      d("Log").error(
                        "Your request to oauth has exceeded the rate limit, please try again later"
                      );
                      return;
                    }
                    m++;
                  }
                  a.display == "popup" &&
                    !f.require_access_token &&
                    delete a.access_token;
                  if (
                    c("sdk.Runtime").getIsVersioned() &&
                    f.url.substring(0, 7) === "dialog/"
                  ) {
                    h = a.version || c("sdk.Runtime").getVersion();
                    h != null &&
                      h !== "" &&
                      h !== "null" &&
                      (f.url = h + "/" + f.url);
                  }
                  if (o(a)) {
                    if (l[e]) {
                      h = 'Dialog "' + e + '" is trying to run more than once.';
                      d("Log").warn(h);
                      b({ error_code: -100, error_message: h });
                      return;
                    }
                    b = n(b, e);
                  }
                  h = {
                    cb: b,
                    id: g,
                    size: f.size || p.getDefaultSize(),
                    url:
                      d("UrlMap").resolve(
                        a.fx_app === "instagram" || a.fx_app === "ig_single"
                          ? "www_instagram"
                          : a.display == "touch"
                          ? "m"
                          : "www"
                      ) +
                      "/" +
                      f.url,
                    params: a,
                    name: e,
                    dialog: c("sdk.Dialog").newInstance(g, a.display),
                  };
                  b = f.transform ? f.transform : p.genericTransform;
                  if (b) {
                    h = b(h);
                    if (!h) return;
                  }
                  a.display === "touch" &&
                    a.in_iframe &&
                    (h.params.parent_height = window.innerHeight);
                  e = f.getXdRelation || p.getXdRelation;
                  b = e(h.params);
                  !(h.id in p._defaultCb) &&
                    !("next" in h.params) &&
                    !("redirect_uri" in h.params) &&
                    (h.params.next = p._xdResult(h.cb, h.id, b, !0));
                  (b === "parent" || b === "opener") &&
                    ES(
                      "Object",
                      "assign",
                      !1,
                      h.params,
                      {
                        channel_url: p._xdChannelHandler(
                          g,
                          b === "parent" ? "parent.parent" : "opener"
                        ),
                      },
                      !0
                    );
                  h = p.prepareParams(h);
                  return h;
                },
                prepareParams: function (a) {
                  a.params.display !== "async" && delete a.params.method;
                  a.params.kid_directed_site =
                    c("sdk.Runtime").getKidDirectedSite() ||
                    a.params.kid_directed_site;
                  a.params = c("flattenObject")(a.params);
                  var b = c("QueryString").encode(a.params);
                  !c("sdk.UA").nativeApp() && p.urlTooLongForIE(a.url + "?" + b)
                    ? (a.post = !0)
                    : b && (a.url += "?" + b);
                  return a;
                },
                urlTooLongForIE: function (a) {
                  return (
                    c("sdk.UA").ie() != null &&
                    c("sdk.UA").ie() <= 8 &&
                    a.length > 2048
                  );
                },
                getDisplayMode: function (a, b) {
                  if (
                    b.display === "hidden" ||
                    b.display === "none" ||
                    b.display === "native"
                  )
                    return b.display;
                  var e =
                    c("sdk.Runtime").isEnvironment(
                      c("sdk.Runtime").ENVIRONMENTS.CANVAS
                    ) ||
                    c("sdk.Runtime").isEnvironment(
                      c("sdk.Runtime").ENVIRONMENTS.PAGETAB
                    );
                  if (
                    e &&
                    (d("sdk.modFeatureCheck").forIDs(
                      "force_popup_to_canvas_apps_with_id",
                      [c("sdk.Runtime").getClientID()]
                    ) ||
                      c("sdk.feature")("force_popup_to_all_canvas_app", !1))
                  )
                    return "popup";
                  if (e && !b.display) return "async";
                  if (i(b) || j(b)) return "async";
                  if (c("sdk.UA").mobile() || b.display === "touch")
                    return "touch";
                  if (
                    (b.display == "iframe" || b.display == "dialog") &&
                    !p.canIframe(b)
                  ) {
                    d("Log").error(
                      '"dialog" mode can only be used when the user is connected.'
                    );
                    return "popup";
                  }
                  return a.connectDisplay && !e
                    ? a.connectDisplay
                    : b.display || (p.canIframe(b) ? "dialog" : "popup");
                },
                canIframe: function (a) {
                  return c("sdk.Runtime").getAccessToken();
                },
                getXdRelation: function (a) {
                  a = a.display;
                  if (a === "popup" || a === "touch") return "opener";
                  if (
                    a === "dialog" ||
                    a === "iframe" ||
                    a === "hidden" ||
                    a === "none"
                  )
                    return "parent";
                  return a === "async"
                    ? "parent.frames[" + window.name + "]"
                    : "";
                },
                popup: function (a) {
                  var b = d("sdk.Popup").popup(
                    a,
                    p.isOAuth({ method: a.name })
                  );
                  b &&
                    (p.setLoadedNode(a, b, "popup"),
                    a.id in p._defaultCb && p._popupMonitor());
                },
                setLoadedNode: function (a, b, c) {
                  c === "iframe" && (b.fbCallID = a.id),
                    (b = {
                      node: b,
                      type: c,
                      fbCallID: a.id,
                      method: a.name,
                      params: a.params,
                    }),
                    (p._loadedNodes[a.id] = b);
                },
                getLoadedNode: function (a) {
                  a = typeof a === "object" ? a.id : a;
                  a = p._loadedNodes[a];
                  return a ? a.node : null;
                },
                hidden: function (a) {
                  (a.className = "FB_UI_Hidden"),
                    (a.root = d("sdk.Content").appendHidden(
                      document.createElement("div")
                    )),
                    p._insertIframe(a);
                },
                iframe: function (a) {
                  a.className = "FB_UI_Dialog";
                  var b = function () {
                      var b = ES("JSON", "stringify", !1, {
                        error_code: 4201,
                        error_message: c("sdk.fbt")._(
                          "User canceled the Dialog flow"
                        ),
                      });
                      p._triggerDefault(a.id, b);
                    },
                    e = {
                      onClose: b,
                      closeIcon: a.closeIcon === void 0 ? !0 : a.closeIcon,
                      classes: c("sdk.Dialog").isTabletStyle()
                        ? "centered"
                        : "",
                    };
                  a.root = c("sdk.Dialog").create(e);
                  a.hideLoader || c("sdk.Dialog").showLoader(b, a.size.width);
                  d("sdk.DOM").addCss(a.root, "fb_dialog_iframe");
                  p._insertIframe(a);
                },
                touch: function (a) {
                  a.params && a.params.in_iframe
                    ? a.ui_created
                      ? c("sdk.Dialog").showLoader(function () {
                          p._triggerDefault(a.id, null);
                        }, 0)
                      : p.iframe(a)
                    : c("sdk.UA").nativeApp() && !a.ui_created
                    ? ((a.frame = a.id),
                      c("sdk.Native").onready(function () {
                        p.setLoadedNode(
                          a,
                          c("sdk.Native").open(a.url + "#cb=" + a.frameName),
                          "native"
                        );
                      }),
                      p._popupMonitor())
                    : a.ui_created || p.popup(a);
                },
                async: function (a) {
                  a.params.redirect_uri =
                    location.protocol +
                    "//" +
                    location.host +
                    location.pathname;
                  delete a.params.access_token;
                  a.params.is_canvas = c("sdk.Runtime").isCanvasEnvironment();
                  var b = function (b) {
                    b = b.result;
                    if (b && b.e2e) {
                      var d = c("sdk.Dialog").get(a.id);
                      d.trackEvents(b.e2e);
                      d.trackEvent("close");
                      delete b.e2e;
                    }
                    a.cb(b);
                  };
                  i(a.params) || j(a.params)
                    ? ((a.params.method = "oauth"),
                      (a.params.redirect_uri = a.params.next),
                      d("sdk.Extensions").remote.showDialog(a.params, b))
                    : c("sdk.RPC").remote.showDialog(a.params, b);
                },
                native: function (a) {
                  c("sdk.openMessenger")(a.params);
                },
                getDefaultSize: function () {
                  return c("sdk.Dialog").getDefaultSize();
                },
                _insertIframe: function (a) {
                  p._loadedNodes[a.id] = !1;
                  var b = function (b) {
                    a.id in p._loadedNodes && p.setLoadedNode(a, b, "iframe");
                  };
                  a.post
                    ? c("insertIframe")({
                        url: "about:blank",
                        root: a.root,
                        className: a.className,
                        width: a.size.width,
                        height: a.size.height,
                        id: a.id,
                        onInsert: b,
                        onload: function (b) {
                          d("sdk.Content").submitToTarget({
                            url: a.url,
                            target: b.name,
                            params: a.params,
                          });
                        },
                      })
                    : c("insertIframe")({
                        url: a.url,
                        root: a.root,
                        className: a.className,
                        width: a.size.width,
                        height: a.size.height,
                        id: a.id,
                        name: a.frameName,
                        onInsert: b,
                      });
                },
                _handleResizeMessage: function (a, b) {
                  a = p.getLoadedNode(a);
                  if (!a) return;
                  b.height && (a.style.height = b.height + "px");
                  b.width && b.width != 0 && (a.style.width = b.width + "px");
                  c("sdk.XD").inform(
                    "resize.ack",
                    b || {},
                    "parent.frames[" + a.name + "]"
                  );
                  !c("sdk.Dialog").isActive(a)
                    ? c("sdk.Dialog").show(a)
                    : c("sdk.Dialog")._centerActive();
                },
                _triggerDefault: function (a, b) {
                  var c = { frame: a, result: "" };
                  b && (c.result = b);
                  p._xdRecv(c, p._defaultCb[a] || function () {});
                },
                _popupMonitor: function () {
                  var a;
                  for (var b in p._loadedNodes)
                    if (
                      Object.prototype.hasOwnProperty.call(p._loadedNodes, b) &&
                      b in p._defaultCb
                    ) {
                      var d = (function () {
                        var d = p._loadedNodes[b];
                        if (d.type != "popup" && d.type != "native")
                          return "continue";
                        var e = d.node;
                        try {
                          e.closed
                            ? p.isOAuth(d)
                              ? c("sdk.Auth.LoginStatus").getLoginStatus(
                                  function (a) {
                                    (a == null ? void 0 : a.status) ===
                                      "connected" &&
                                    d.params != null &&
                                    d.params.return_scopes
                                      ? c("sdk.api")(
                                          "/me/permissions",
                                          function (c) {
                                            (!c || c.error) &&
                                              p._triggerDefault(b, a);
                                            var d = "";
                                            c = c && c.data ? c.data : [];
                                            for (var e = 0; e < c.length; e++)
                                              c[e].status === "granted" &&
                                                (d !== "" && (d += ","),
                                                (d += c[e].permission));
                                            a.authResponse &&
                                              a.authResponse.grantedScopes &&
                                              (a.authResponse.grantedScopes =
                                                d);
                                            p._triggerDefault(b, a);
                                          }
                                        )
                                      : ((a == null ? void 0 : a.status) !==
                                          "connected" && (a.closeWindow = !0),
                                        p._triggerDefault(b, a));
                                  },
                                  !0
                                )
                              : p._triggerDefault(b, null)
                            : (a = !0);
                        } catch (a) {}
                      })();
                      if (d === "continue") continue;
                    }
                  a && !p._popupInterval
                    ? (p._popupInterval = window.setInterval(
                        p._popupMonitor,
                        100
                      ))
                    : !a &&
                      p._popupInterval &&
                      (window.clearInterval(p._popupInterval),
                      (p._popupInterval = null));
                },
                _xdChannelHandler: function (a, b) {
                  return c("sdk.XD").handler(
                    function (b) {
                      var e = p.getLoadedNode(a);
                      if (!e) return;
                      if (b.type == "resize") p._handleResizeMessage(a, b);
                      else if (b.type == "hide") c("sdk.Dialog").hide(e);
                      else if (b.type == "rendered") {
                        e = c("sdk.Dialog")._findRoot(e);
                        c("sdk.Dialog").show(e);
                      } else
                        b.type == "fireevent" &&
                          d("sdk.Event").fire(b.event, b);
                    },
                    b,
                    !0,
                    null
                  );
                },
                _xdNextHandler: function (a, b, d, e) {
                  e && (p._defaultCb[b] = a);
                  return (
                    c("sdk.XD").handler(function (b) {
                      p._xdRecv(b, a);
                    }, d) +
                    "&frame=" +
                    b
                  );
                },
                _xdRecv: function (a, b) {
                  var e = p.getLoadedNode(a.frame);
                  if (e)
                    if (e.close)
                      try {
                        e.close(),
                          /iPhone.*Version\/(5|6)/.test(navigator.userAgent) &&
                            RegExp.$1 !== "5" &&
                            window.focus(),
                          p._popupCount--;
                      } catch (a) {}
                    else
                      d("sdk.DOM").containsCss(e, "FB_UI_Hidden")
                        ? window.setTimeout(function () {
                            e.parentNode.parentNode.removeChild(e.parentNode);
                          }, 3e3)
                        : d("sdk.DOM").containsCss(e, "FB_UI_Dialog") &&
                          c("sdk.Dialog").remove(e);
                  delete p._loadedNodes[a.frame];
                  delete p._defaultCb[a.frame];
                  if (a.e2e) {
                    var f = c("sdk.Dialog").get(a.frame);
                    f.trackEvents(a.e2e);
                    f.trackEvent("close");
                    delete a.e2e;
                  }
                  b(a);
                },
                _xdResult: function (a, b, c, d) {
                  return (
                    p._xdNextHandler(
                      function (b) {
                        a &&
                          a(
                            b.result &&
                              b.result != p._resultToken &&
                              ES("JSON", "parse", !1, b.result)
                          );
                      },
                      b,
                      c,
                      d
                    ) +
                    "&result=" +
                    encodeURIComponent(p._resultToken)
                  );
                },
                xdHandler: function (a, b, d, e, f, g, h) {
                  return p._xdNextHandler(
                    c("sdk.Auth").xdResponseWrapper(a, e, f, h),
                    b,
                    d,
                    g
                  );
                },
                xdHandlerPhotoPicker: function (a, b, c, d, e) {
                  return p._xdNextHandler(
                    p.xdResponseWrapperPhotoPicker(a),
                    b,
                    c,
                    !1
                  );
                },
                xdResponseWrapperPhotoPicker: function (a) {
                  return function (b) {
                    var c;
                    b && b.result && b.result.closeWindow
                      ? (c = "Photo picker call was cancelled by the user")
                      : (c = b.photos);
                    a && a(c);
                    return null;
                  };
                },
              };
              d("sdk.Extensions").stub("showDialog");
              c("sdk.RPC").stub("showDialog");
              b = p;
              g["default"] = b;
            },
            98
          );
          __d(
            "sdk.ui",
            [
              "Assert",
              "Log",
              "sdk.Impressions",
              "sdk.PlatformVersioning",
              "sdk.Runtime",
              "sdk.UIServer",
              "sdk.feature",
            ],
            function (a, b, c, d, e, f, g) {
              function a(a, b) {
                c("Assert").isObject(a);
                c("Assert").maybeFunction(b);
                c("sdk.Runtime").getIsVersioned() &&
                  (d("sdk.PlatformVersioning").assertVersionIsSet(),
                  a.version
                    ? d("sdk.PlatformVersioning").assertValidVersion(a.version)
                    : (a.version = c("sdk.Runtime").getVersion()));
                a = babelHelpers["extends"]({}, a);
                if (!a.method) {
                  d("Log").error(
                    '"method" is a required parameter for FB.ui().'
                  );
                  return null;
                }
                a.method == "pay.prompt" && (a.method = "pay");
                var e = a.method;
                a.redirect_uri &&
                  (d("Log").warn(
                    "When using FB.ui, you should not specify a redirect_uri."
                  ),
                  delete a.redirect_uri);
                a.fallback_redirect_uri ||
                  (a.fallback_redirect_uri = document.location.href);
                c("sdk.UIServer").isOAuth(e) &&
                  (a.display == "iframe" || a.display == "dialog") &&
                  (a.display = c("sdk.UIServer").checkOauthDisplay(a));
                if (a.display === "native" && e !== "send") {
                  d("Log").error('display type "native" not supported');
                  return null;
                }
                var f = c("sdk.feature")("e2e_tracking", !0);
                f && (a.e2e = {});
                a = c("sdk.UIServer").prepareCall(a, b || function () {});
                if (!a) return null;
                var g = a.params.display;
                g === "dialog"
                  ? (g = "iframe")
                  : g === "none" && (g = "hidden");
                b = c("sdk.UIServer")[g];
                if (!b) {
                  d("Log").error(
                    '"display" must be one of "popup", "dialog", "iframe", "touch", "async", "hidden", or "none"'
                  );
                  return null;
                }
                f &&
                  a.dialog.subscribe("e2e:end", function (a) {
                    (a.method = e),
                      (a.display = g),
                      d("Log").debug("e2e: %s", ES("JSON", "stringify", !1, a)),
                      d("sdk.Impressions").log(114, { payload: a });
                  });
                b(a);
                return a.dialog;
              }
              g["default"] = a;
            },
            98
          );
          __d(
            "sdk.Auth-public",
            [
              "FB",
              "sdk.Auth",
              "sdk.Auth.LoginStatus",
              "sdk.AuthUtils",
              "sdk.Event",
              "sdk.Runtime",
              "sdk.ui",
              "sdk.warnInsecure",
            ],
            function (a, b, c, d, e, f, g) {
              "use strict";
              function a() {
                c("FB").provide("", {
                  getLoginStatus: function () {
                    c("sdk.warnInsecure")("getLoginStatus");
                    return c("sdk.Auth.LoginStatus").getLoginStatus.apply(
                      c("sdk.Auth"),
                      arguments
                    );
                  },
                  getAuthResponse: function () {
                    c("sdk.warnInsecure")("getAuthResponse");
                    return c("sdk.Auth").getAuthResponse();
                  },
                  getAccessToken: function () {
                    c("sdk.warnInsecure")("getAccessToken");
                    return c("sdk.Runtime").getAccessToken() || null;
                  },
                  getUserID: function () {
                    c("sdk.warnInsecure")("getUserID");
                    return (
                      c("sdk.Runtime").getUserID() ||
                      c("sdk.Runtime").getCookieUserID()
                    );
                  },
                  login: function (a, b) {
                    c("sdk.warnInsecure")("login"), c("sdk.Auth").login(a, b);
                  },
                  logout: function (a) {
                    c("sdk.ui")(
                      { method: "auth.logout", display: "hidden" },
                      a
                    );
                  },
                }),
                  c("sdk.Auth").subscribe(
                    "logout",
                    ES(
                      d("sdk.Event").fire,
                      "bind",
                      !0,
                      d("sdk.Event"),
                      "auth.logout"
                    )
                  ),
                  c("sdk.Auth").subscribe(
                    "login",
                    ES(
                      d("sdk.Event").fire,
                      "bind",
                      !0,
                      d("sdk.Event"),
                      "auth.login"
                    )
                  ),
                  c("sdk.Auth").subscribe(
                    "authresponse.change",
                    ES(
                      d("sdk.Event").fire,
                      "bind",
                      !0,
                      d("sdk.Event"),
                      "auth.authResponseChange"
                    )
                  ),
                  c("sdk.Auth").subscribe(
                    "status.change",
                    ES(
                      d("sdk.Event").fire,
                      "bind",
                      !0,
                      d("sdk.Event"),
                      "auth.statusChange"
                    )
                  ),
                  c("sdk.Auth").subscribe(
                    "loginDenied",
                    ES(
                      d("sdk.Event").fire,
                      "bind",
                      !0,
                      d("sdk.Event"),
                      "auth.denied"
                    )
                  ),
                  c("sdk.Auth").subscribe(
                    "loginError",
                    ES(
                      d("sdk.Event").fire,
                      "bind",
                      !0,
                      d("sdk.Event"),
                      "auth.error"
                    )
                  ),
                  c("sdk.Runtime").subscribe(
                    "AccessToken.change",
                    function (a) {
                      !a &&
                        c("sdk.Runtime").getLoginStatus() === "connected" &&
                        c("sdk.Auth.LoginStatus").getLoginStatus(null, !0);
                    }
                  ),
                  d("sdk.AuthUtils").AuthInternalEvent.subscribe(
                    d("sdk.AuthUtils").AuthConstants.REVALIDATE_TIMER_TIMEOUT,
                    function (a) {
                      c("sdk.Auth.LoginStatus").fetchLoginStatus(
                        function () {}
                      );
                    }
                  ),
                  d("sdk.Event").subscribe("init:post", function (a) {
                    c("sdk.Auth.LoginStatus").onSDKInit(a);
                  });
              }
              b = { init: a };
              e = b;
              g["default"] = e;
            },
            98
          );
          __d(
            "sdk.Canvas.IframeHandling",
            ["DOMWrapper", "sdk.RPC"],
            function (a, b, c, d, e, f, g) {
              var h = null,
                i;
              function j() {
                var a = d("DOMWrapper").getWindow().document,
                  b = a.body;
                a = a.documentElement;
                var c = Math.max(b.offsetTop, 0),
                  e = Math.max(a.offsetTop, 0),
                  f = b.scrollHeight + c;
                b = b.offsetHeight + c;
                c = a.scrollHeight + e;
                a = a.offsetHeight + e;
                return Math.max(f, b, c, a);
              }
              function k(a) {
                typeof a !== "object" && (a = {});
                var b = 0,
                  d = 0;
                a.height || ((a.height = j()), (b = 16), (d = 4));
                a.frame || (a.frame = window.name || "iframe_canvas");
                if (i) {
                  var e = i.height;
                  e = a.height - e;
                  if (e <= d && e >= -b) return !1;
                }
                i = a;
                c("sdk.RPC").remote.setSize(a);
                return !0;
              }
              function a(a, b) {
                b === void 0 && typeof a === "number" && ((b = a), (a = !0)),
                  a || a === void 0
                    ? (h === null &&
                        (h = window.setInterval(function () {
                          k();
                        }, b || 100)),
                      k())
                    : h !== null && (window.clearInterval(h), (h = null));
              }
              c("sdk.RPC").stub("setSize");
              b = { setSize: k, setAutoGrow: a };
              e = b;
              g["default"] = e;
            },
            98
          );
          __d(
            "sdk.Canvas.Navigation",
            ["sdk.RPC"],
            function (a, b, c, d, e, f) {
              function a(a) {
                (b("sdk.RPC").local.navigate = function (b) {
                  a({ path: b });
                }),
                  b("sdk.RPC").remote.setNavigationEnabled(!0);
              }
              b("sdk.RPC").stub("setNavigationEnabled");
              c = { setUrlHandler: a };
              d = c;
              f["default"] = d;
            },
            66
          );
          __d(
            "sdk.Canvas.Plugin",
            ["Log", "sdk.Runtime", "sdk.UA", "sdk.api"],
            function (a, b, c, d, e, f, g) {
              var h = "CLSID:D27CDB6E-AE6D-11CF-96B8-444553540000",
                i = "CLSID:444785F1-DE89-4295-863A-D46C3A781394",
                j = null;
              f = c("sdk.UA").osx() && c("sdk.UA").osx.getVersionParts();
              var k = !(
                f &&
                f[0] > 10 &&
                f[1] > 10 &&
                (c("sdk.UA").chrome() >= 31 ||
                  c("sdk.UA").webkit() >= 537.71 ||
                  c("sdk.UA").firefox() >= 25)
              );
              function l(a) {
                (a._hideunity_savedstyle = {}),
                  (a._hideunity_savedstyle.left = a.style.left),
                  (a._hideunity_savedstyle.position = a.style.position),
                  (a._hideunity_savedstyle.width = a.style.width),
                  (a._hideunity_savedstyle.height = a.style.height),
                  (a.style.left = "-10000px"),
                  (a.style.position = "absolute"),
                  (a.style.width = "1px"),
                  (a.style.height = "1px");
              }
              function m(a) {
                a._hideunity_savedstyle &&
                  ((a.style.left = a._hideunity_savedstyle.left),
                  (a.style.position = a._hideunity_savedstyle.position),
                  (a.style.width = a._hideunity_savedstyle.width),
                  (a.style.height = a._hideunity_savedstyle.height));
              }
              function n(a) {
                (a._old_visibility = a.style.visibility),
                  (a.style.visibility = "hidden");
              }
              function o(a) {
                (a.style.visibility = a._old_visibility || ""),
                  delete a._old_visibility;
              }
              function p(a) {
                var b = a.type ? a.type.toLowerCase() : null;
                b =
                  b === "application/x-shockwave-flash" ||
                  (a.classid && a.classid.toUpperCase() == h);
                if (!b) return !1;
                b = /opaque|transparent/i;
                if (b.test(a.getAttribute("wmode"))) return !1;
                for (var c = 0; c < a.childNodes.length; c++) {
                  var d = a.childNodes[c];
                  if (
                    /param/i.test(d.nodeName) &&
                    /wmode/i.test(d.name) &&
                    b.test(d.value)
                  )
                    return !1;
                }
                return !0;
              }
              function q(a) {
                var b = a.type ? a.type.toLowerCase() : null;
                return (
                  b === "application/vnd.unity" ||
                  (a.classid && a.classid.toUpperCase() == i)
                );
              }
              function a(a) {
                var b = ES(
                  "Array",
                  "from",
                  !1,
                  window.document.getElementsByTagName("object")
                );
                b = b.concat(
                  ES(
                    "Array",
                    "from",
                    !1,
                    window.document.getElementsByTagName("embed")
                  )
                );
                var e = !1,
                  f = !1;
                b.forEach(function (b) {
                  var c = p(b),
                    g = k && q(b);
                  if (!c && !g) return;
                  e = e || c;
                  f = f || g;
                  g = function () {
                    a.state === "opened" ? (c ? n(b) : l(b)) : c ? o(b) : m(b);
                  };
                  if (j) {
                    d("Log").info("Calling developer specified callback");
                    var h = { state: a.state, elem: b };
                    j(h);
                    window.setTimeout(g, 200);
                  } else g();
                });
                if (Math.random() <= 1 / 1e3) {
                  b = { unity: f, flash: e };
                  c("sdk.api")(
                    c("sdk.Runtime").getClientID() + "/occludespopups",
                    "post",
                    b
                  );
                }
              }
              function b() {
                n(), l();
              }
              function e() {
                o(), m();
              }
              f = {
                _setHidePluginCallback: function (a) {
                  j = a;
                },
                hidePluginCallback: a,
                hidePluginElement: b,
                showPluginElement: e,
              };
              a = f;
              g["default"] = a;
            },
            98
          );
          __d(
            "sdk.Canvas.Prefetcher",
            ["JSSDKCanvasPrefetcherConfig", "sdk.Runtime", "sdk.api"],
            function (a, b, c, d, e, f, g) {
              var h = { AUTOMATIC: 0, MANUAL: 1 },
                i =
                  (f = d("JSSDKCanvasPrefetcherConfig").excludedAppIds) != null
                    ? f
                    : [],
                j = h.AUTOMATIC,
                k = [];
              function l() {
                var a = { object: "data", link: "href", script: "src" };
                j == h.AUTOMATIC &&
                  Object.keys(a).forEach(function (b) {
                    var c = a[b];
                    ES(
                      "Array",
                      "from",
                      !1,
                      document.getElementsByTagName(b)
                    ).forEach(function (a) {
                      a[c] && k.push(a[c]);
                    });
                  });
                if (k.length === 0) return;
                c("sdk.api")(
                  c("sdk.Runtime").getClientID() + "/staticresources",
                  "post",
                  {
                    urls: ES("JSON", "stringify", !1, k),
                    is_https: location.protocol === "https:",
                  }
                );
                k = [];
              }
              function a() {
                if (
                  !c("sdk.Runtime").isEnvironment(
                    c("sdk.Runtime").ENVIRONMENTS.CANVAS
                  ) ||
                  !c("sdk.Runtime").getClientID() ||
                  !d("JSSDKCanvasPrefetcherConfig").sampleRate
                )
                  return;
                if (
                  Math.random() >=
                    1 / d("JSSDKCanvasPrefetcherConfig").sampleRate ||
                  !d("JSSDKCanvasPrefetcherConfig").enabled ||
                  ES(i, "includes", !0, c("sdk.Runtime").getClientID())
                )
                  return;
                setTimeout(l, 3e4);
              }
              function b(a) {
                j = a;
              }
              function e(a) {
                k.push(a);
              }
              f = {
                COLLECT_AUTOMATIC: h.AUTOMATIC,
                COLLECT_MANUAL: h.MANUAL,
                addStaticResource: e,
                setCollectionMode: b,
                _maybeSample: a,
              };
              e = f;
              g["default"] = e;
            },
            98
          );
          __d(
            "sdk.Canvas.Tti",
            ["sdk.RPC", "sdk.Runtime"],
            function (a, b, c, d, e, f, g) {
              function h(a, b) {
                b = {
                  appId: c("sdk.Runtime").getClientID(),
                  time: Date.now(),
                  name: b,
                };
                b = [b];
                a &&
                  b.push(function (b) {
                    a(b.result);
                  });
                c("sdk.RPC").remote.logTtiMessage.apply(null, b);
              }
              function a() {
                h(null, "StartIframeAppTtiTimer");
              }
              function b(a) {
                h(a, "StopIframeAppTtiTimer");
              }
              function d(a) {
                h(a, "RecordIframeAppTti");
              }
              c("sdk.RPC").stub("logTtiMessage");
              e = { setDoneLoading: d, startTimer: a, stopTimer: b };
              f = e;
              g["default"] = f;
            },
            98
          );
          __d(
            "sdk.Canvas-public",
            [
              "Assert",
              "FB",
              "Log",
              "sdk.Canvas.Environment",
              "sdk.Canvas.IframeHandling",
              "sdk.Canvas.Navigation",
              "sdk.Canvas.Plugin",
              "sdk.Canvas.Prefetcher",
              "sdk.Canvas.Tti",
              "sdk.Event",
              "sdk.RPC",
              "sdk.Runtime",
            ],
            function (a, b, c, d, e, f, g) {
              function a() {
                c("FB").provide("Canvas", {
                  setSize: function (a) {
                    c("Assert").maybeObject(a, "Invalid argument");
                    return c("sdk.Canvas.IframeHandling").setSize.apply(
                      null,
                      arguments
                    );
                  },
                  setAutoGrow: function () {
                    return c("sdk.Canvas.IframeHandling").setAutoGrow.apply(
                      null,
                      arguments
                    );
                  },
                  getPageInfo: function (a) {
                    c("Assert").isFunction(a, "Invalid argument");
                    return c("sdk.Canvas.Environment").getPageInfo.apply(
                      null,
                      arguments
                    );
                  },
                  scrollTo: function (a, b) {
                    c("Assert").maybeNumber(a, "Invalid argument");
                    c("Assert").maybeNumber(b, "Invalid argument");
                    return c("sdk.Canvas.Environment").scrollTo.apply(
                      null,
                      arguments
                    );
                  },
                  setDoneLoading: function (a) {
                    c("Assert").maybeFunction(a, "Invalid argument");
                    return c("sdk.Canvas.Tti").setDoneLoading.apply(
                      null,
                      arguments
                    );
                  },
                  startTimer: function () {
                    return c("sdk.Canvas.Tti").startTimer.apply(
                      null,
                      arguments
                    );
                  },
                  stopTimer: function (a) {
                    c("Assert").maybeFunction(a, "Invalid argument");
                    return c("sdk.Canvas.Tti").stopTimer.apply(null, arguments);
                  },
                  setUrlHandler: function (a) {
                    c("Assert").isFunction(a, "Invalid argument");
                    return c("sdk.Canvas.Navigation").setUrlHandler.apply(
                      null,
                      arguments
                    );
                  },
                }),
                  (c("sdk.RPC").local.fireEvent = ES(
                    d("sdk.Event").fire,
                    "bind",
                    !0,
                    d("sdk.Event")
                  )),
                  d("sdk.Event").subscribe("init:post", function (a) {
                    c("sdk.Runtime").isEnvironment(
                      c("sdk.Runtime").ENVIRONMENTS.CANVAS
                    ) &&
                      (c("Assert").isTrue(
                        !a.hideFlashCallback || !a.hidePluginCallback,
                        "cannot specify deprecated hideFlashCallback and new hidePluginCallback"
                      ),
                      c("sdk.Canvas.Plugin")._setHidePluginCallback(
                        a.hidePluginCallback || a.hideFlashCallback
                      ));
                  });
              }
              function h() {
                (c("sdk.RPC").local.hidePluginObjects = function () {
                  d("Log").info("hidePluginObjects called"),
                    c("sdk.Canvas.Plugin").hidePluginCallback({
                      state: "opened",
                    });
                }),
                  (c("sdk.RPC").local.showPluginObjects = function () {
                    d("Log").info("showPluginObjects called"),
                      c("sdk.Canvas.Plugin").hidePluginCallback({
                        state: "closed",
                      });
                  }),
                  (c("sdk.RPC").local.showFlashObjects =
                    c("sdk.RPC").local.showPluginObjects),
                  (c("sdk.RPC").local.hideFlashObjects =
                    c("sdk.RPC").local.hidePluginObjects);
              }
              function b() {
                h(), c("FB").provide("Canvas.Plugin", c("sdk.Canvas.Plugin"));
              }
              function e() {
                c("FB").provide(
                  "Canvas.Prefetcher",
                  c("sdk.Canvas.Prefetcher")
                ),
                  d("sdk.Event").subscribe("init:post", function (a) {
                    c("sdk.Runtime").isEnvironment(
                      c("sdk.Runtime").ENVIRONMENTS.CANVAS
                    ) && c("sdk.Canvas.Prefetcher")._maybeSample();
                  });
              }
              function f() {
                d("sdk.Event").subscribe(d("sdk.Event").SUBSCRIBE, a);
                d("sdk.Event").subscribe(d("sdk.Event").UNSUBSCRIBE, b);
                c("sdk.RPC").stub("useFriendsOnline");
                function a(a, b) {
                  if (a != "canvas.friendsOnlineUpdated") return;
                  b.length === 1 && c("sdk.RPC").remote.useFriendsOnline(!0);
                }
                function b(a, b) {
                  if (a != "canvas.friendsOnlineUpdated") return;
                  b.length === 0 && c("sdk.RPC").remote.useFriendsOnline(!1);
                }
              }
              a = {
                init: a,
                initCanvasPlugin: b,
                initCanvasPrefetcher: e,
                initCanvasPresence: f,
                initRPC: h,
              };
              b = a;
              g["default"] = b;
            },
            98
          );
          __d(
            "sdk.Event-public",
            ["FB", "Log", "sdk.Event"],
            function (a, b, c, d, e, f, g) {
              function a() {
                var a = function (a) {
                  return d("Log").error(
                    "FB.Event." + a + "() has been deprecated"
                  );
                };
                c("FB").provide("Event", {
                  subscribe: function (a, b) {
                    return d("sdk.Event").subscribe(a, b);
                  },
                  unsubscribe: ES(
                    d("sdk.Event").unsubscribe,
                    "bind",
                    !0,
                    d("sdk.Event")
                  ),
                  clear: ES(a, "bind", !0, null, "clear"),
                  fire: ES(a, "bind", !0, null, "fire"),
                });
              }
              b = { init: a };
              e = b;
              g["default"] = e;
            },
            98
          );
          __d(
            "sdk.Frictionless-public",
            ["FB", "sdk.Event", "sdk.Frictionless"],
            function (a, b, c, d, e, f, g) {
              "use strict";
              function a() {
                d("sdk.Event").subscribe("init:post", function (a) {
                  a.frictionlessRequests && c("sdk.Frictionless").init();
                }),
                  c("FB").provide("Frictionless", c("sdk.Frictionless"));
              }
              b = { init: a };
              e = b;
              g["default"] = e;
            },
            98
          );
          __d(
            "sdk.GamingServices",
            ["sdk.api", "sdk.ui"],
            function (a, b, c, d, e, f, g) {
              function a(a) {
                c("sdk.ui")(
                  { display: "touch", method: "gaming_friendfinder" },
                  a
                );
              }
              function b(a, b, d, e) {
                c("sdk.api")(
                  "me/photos",
                  "POST",
                  { caption: b, url: a },
                  function (a) {
                    if (d === !1 || !a || a.error) e !== null && e(a);
                    else {
                      var b = a.id;
                      c("sdk.ui")(
                        {
                          display: "touch",
                          method: "gaming_media_library",
                          media_id: b,
                        },
                        function (b) {
                          e !== null && e(a);
                        }
                      );
                    }
                  }
                );
              }
              d = { friendFinder: a, uploadImageToMediaLibrary: b };
              e = d;
              g["default"] = e;
            },
            98
          );
          __d(
            "sdk.GamingServices-public",
            ["FB", "sdk.GamingServices"],
            function (a, b, c, d, e, f, g) {
              "use strict";
              function a() {
                c("FB").provide("", {
                  gamingservices: c("sdk.GamingServices"),
                });
              }
              b = { init: a };
              d = b;
              g["default"] = d;
            },
            98
          );
          __d(
            "sdk.PluginUtils",
            ["resolveURI", "sdk.Event"],
            function (a, b, c, d, e, f, g) {
              var h = {
                string: function (a) {
                  return a;
                },
                bool: function (a) {
                  return a != null ? /^(?:true|1|yes|on)$/i.test(a) : void 0;
                },
                url: function (a) {
                  return c("resolveURI")(a);
                },
                url_maybe: function (a) {
                  return a != null && a !== "" ? c("resolveURI")(a) : void 0;
                },
                hostname: function (a) {
                  return a != null && a !== "" ? a : "window.location.hostname";
                },
                px: function (a) {
                  if (typeof a === "string") {
                    var b = a.match(/^(\d+)(?:px)?$/);
                    return b != null ? parseInt(b[0], 10) : void 0;
                  } else if (typeof a === "number") return a;
                  else return void 0;
                },
                text: function (a) {
                  return a;
                },
              };
              function i(a, b) {
                var c;
                return (c =
                  (c =
                    (c =
                      (c =
                        (c =
                          (c = a[b]) != null ? c : a[b.replace(/_/g, "-")]) !=
                        null
                          ? c
                          : a[b.replace(/_/g, "")]) != null
                        ? c
                        : a["data-" + b]) != null
                      ? c
                      : a["data-" + b.replace(/_/g, "-")]) != null
                    ? c
                    : a["data-" + b.replace(/_/g, "")]) != null
                  ? c
                  : void 0;
              }
              function a(a, b, c, d) {
                Object.keys(a).forEach(function (e) {
                  if (a[e] === "text" && !c[e]) {
                    var f;
                    c[e] =
                      (f = (f = b.textContent) != null ? f : b.innerText) !=
                      null
                        ? f
                        : void 0;
                    b.setAttribute(e, c[e]);
                  }
                  d[e] = h[a[e]](i(c, e));
                });
              }
              function j(a, b, c) {
                b === "100%"
                  ? (a.style.width = "100%")
                  : b != null && b !== "" && (a.style.width = b + "px"),
                  ((c != null && c !== "") || c === 0) &&
                    (a.style.height = c + "px");
              }
              function b(a) {
                return function (b) {
                  b = { width: b.width, height: b.height, pluginID: a };
                  d("sdk.Event").fire("xfbml.resize", b);
                };
              }
              function e(a) {
                return a === "100%"
                  ? "100%"
                  : a != null
                  ? parseInt(a, 10)
                  : void 0;
              }
              function f(a) {
                a != null && j(a, 0, 0);
              }
              var k = {
                skin: "string",
                font: "string",
                width: "string",
                height: "px",
                ref: "string",
                lazy: "bool",
                color_scheme: "string",
              };
              g.getVal = i;
              g.validate = a;
              g.resize = j;
              g.resizeBubbler = b;
              g.parse = e;
              g.collapseIframe = f;
              g.baseParams = k;
            },
            98
          );
          __d(
            "isNumberLike",
            [],
            function (a, b, c, d, e, f) {
              function a(a) {
                return !isNaN(parseFloat(a)) && isFinite(a);
              }
              f["default"] = a;
            },
            66
          );
          __d(
            "sdk.createIframe",
            ["DOMEventListener", "getBlankIframeSrc", "guid", "isNumberLike"],
            function (a, b, c, d, e, f, g) {
              function a(a) {
                var b = ES("Object", "assign", !1, {}, a),
                  e,
                  f = b.name || c("guid")(),
                  g = b.root,
                  h = b.style || { border: "none" },
                  i = b.url,
                  j = b.onload,
                  k = b.onerror;
                e = document.createElement("iframe");
                e.name = f;
                delete b.style;
                delete b.name;
                delete b.url;
                delete b.root;
                delete b.onload;
                delete b.onerror;
                delete b.height;
                delete b.width;
                b.frameBorder === void 0 && (b.frameBorder = 0);
                b.allowTransparency === void 0 && (b.allowTransparency = !0);
                b.allowFullscreen === void 0 && (b.allowFullscreen = !0);
                b.scrolling === void 0 && (b.scrolling = "no");
                b.allow === void 0 && (b.allow = "encrypted-media");
                b.lazy &&
                  ((b.loading = "lazy"), h.visibility && delete h.visibility);
                delete b.lazy;
                a.width != null &&
                  c("isNumberLike")(a.width) &&
                  (e.width = a.width + "px");
                a.height != null &&
                  c("isNumberLike")(a.height) &&
                  (e.height = a.height + "px");
                b.testid &&
                  e.dataset != null &&
                  ((e.dataset.testid = b.testid), delete b.testid);
                for (f in b)
                  Object.prototype.hasOwnProperty.call(b, f) &&
                    e.setAttribute(f, b[f]);
                ES("Object", "assign", !1, e.style, h);
                e.src = c("getBlankIframeSrc")();
                g != null && g.appendChild(e);
                if (j)
                  var l = d("DOMEventListener").add(e, "load", function () {
                    l.remove(), j();
                  });
                if (k)
                  var m = d("DOMEventListener").add(e, "error", function () {
                    m.remove(), k();
                  });
                e.src = i;
                return e;
              }
              g["default"] = a;
            },
            98
          );
          __d(
            "IframePlugin",
            [
              "Log",
              "ObservableMixin",
              "QueryString",
              "Type",
              "UrlMap",
              "guid",
              "sdk.Auth.LoginStatus",
              "sdk.AuthUtils",
              "sdk.DOM",
              "sdk.Event",
              "sdk.PlatformVersioning",
              "sdk.PluginUtils",
              "sdk.Runtime",
              "sdk.UA",
              "sdk.URI",
              "sdk.XD",
              "sdk.createIframe",
            ],
            function (a, b, c, d, e, f, g) {
              var h = c("Type").extend(
                {
                  constructor: function (a, b, e, f) {
                    var g = this;
                    this.parent();
                    e = e.replace(/-/g, "_");
                    var h = d("sdk.PluginUtils").getVal(f, "plugin_id");
                    this.subscribe(
                      "xd.resize",
                      d("sdk.PluginUtils").resizeBubbler(h)
                    );
                    this.subscribe(
                      "xd.resize.flow",
                      d("sdk.PluginUtils").resizeBubbler(h)
                    );
                    this.subscribe("xd.resize.flow", function (a) {
                      ES("Object", "assign", !1, g._iframeOptions.root.style, {
                        verticalAlign: "bottom",
                        overflow: "",
                      }),
                        d("sdk.PluginUtils").resize(
                          g._iframeOptions.root,
                          d("sdk.PluginUtils").parse(a.width),
                          d("sdk.PluginUtils").parse(a.height)
                        ),
                        g.updateLift(),
                        window.clearTimeout(g._timeoutID);
                    });
                    this.subscribe("xd.resize", function (a) {
                      ES("Object", "assign", !1, g._iframeOptions.root.style, {
                        verticalAlign: "bottom",
                        overflow: "",
                      }),
                        d("sdk.PluginUtils").resize(
                          g._iframeOptions.root,
                          d("sdk.PluginUtils").parse(a.width),
                          d("sdk.PluginUtils").parse(a.height)
                        ),
                        d("sdk.PluginUtils").resize(
                          g._iframe,
                          d("sdk.PluginUtils").parse(a.width),
                          d("sdk.PluginUtils").parse(a.height)
                        ),
                        (g._isIframeResized = !0),
                        g.updateLift(),
                        window.clearTimeout(g._timeoutID);
                    });
                    this.subscribe("xd.resize.iframe", function (a) {
                      d("sdk.PluginUtils").resize(
                        g._iframe,
                        d("sdk.PluginUtils").parse(a.width),
                        d("sdk.PluginUtils").parse(a.height)
                      ),
                        (g._isIframeResized = !0),
                        g.updateLift(),
                        window.clearTimeout(g._timeoutID);
                    });
                    this.subscribe("xd.sdk_event", function (b) {
                      var c = ES("JSON", "parse", !1, b.data);
                      c.pluginID = h;
                      d("sdk.Event").fire(b.event, c, a);
                    });
                    var i =
                        d("UrlMap").resolve("www") + "/plugins/" + e + ".php?",
                      j = {};
                    d("sdk.PluginUtils").validate(this.getParams(), a, f, j);
                    d("sdk.PluginUtils").validate(
                      d("sdk.PluginUtils").baseParams,
                      a,
                      f,
                      j
                    );
                    ES("Object", "assign", !1, j, {
                      app_id: c("sdk.Runtime").getClientID(),
                      locale: c("sdk.Runtime").getLocale(),
                      sdk: "joey",
                      kid_directed_site: c("sdk.Runtime").getKidDirectedSite(),
                      channel: d("sdk.XD").handler(
                        function (a) {
                          a != null && g.inform("xd." + a.type, a);
                        },
                        "parent.parent",
                        !0
                      ),
                    });
                    this.shouldIgnoreWidth() && (j.width = void 0);
                    j.container_width = a.offsetWidth;
                    d("sdk.DOM").addCss(a, "fb_iframe_widget");
                    var k = c("guid")();
                    this.subscribe("xd.verify", function (a) {
                      d("sdk.XD").sendToFacebook(k, {
                        method: "xd/verify",
                        params: ES("JSON", "stringify", !1, a.token),
                      });
                    });
                    this.subscribe("xd.refreshLoginStatus", function () {
                      d("sdk.AuthUtils").removeLogoutState(),
                        c("sdk.Auth.LoginStatus").getLoginStatus(
                          ES(g.inform, "bind", !0, g, "login.status"),
                          !0
                        );
                    });
                    f = document.createElement("span");
                    ES("Object", "assign", !1, f.style, {
                      verticalAlign: "top",
                      width: j.lazy ? "1px" : "0px",
                      height: j.lazy ? "1px" : "0px",
                      overflow: "hidden",
                    });
                    this._element = a;
                    this._ns = b;
                    this._tag = e;
                    this._params = j;
                    this._config = this.getConfig();
                    this._iframeOptions = {
                      root: f,
                      url: i + c("QueryString").encode(j),
                      name: k,
                      width:
                        this._config.mobile_fullsize && c("sdk.UA").mobile()
                          ? void 0
                          : j.width || 1e3,
                      height: j.height || 1e3,
                      style: { border: "none", visibility: "hidden" },
                      title:
                        this._ns + ":" + this._tag + " Facebook Social Plugin",
                      testid:
                        this._ns + ":" + this._tag + " Facebook Social Plugin",
                      onload: function () {
                        return g.inform("render");
                      },
                      onerror: function () {
                        return d("sdk.PluginUtils").collapseIframe(g._iframe);
                      },
                      lazy: j.lazy,
                    };
                    this.isFluid() &&
                      j.width !== "auto" &&
                      (d("sdk.DOM").addCss(
                        this._element,
                        "fb_iframe_widget_fluid_desktop"
                      ),
                      !j.width &&
                        this._config.full_width &&
                        ((this._element.style.width = "100%"),
                        (this._iframeOptions.root.style.width = "100%"),
                        (this._iframeOptions.style.width = "100%"),
                        (this._params.container_width =
                          this._element.offsetWidth),
                        (this._iframeOptions.url =
                          i + c("QueryString").encode(this._params))));
                  },
                  shouldIgnoreWidth: function () {
                    return (
                      c("sdk.UA").mobile() && this.getConfig().mobile_fullsize
                    );
                  },
                  useInlineHeightForMobile: function () {
                    return !0;
                  },
                  process: function () {
                    var a = this;
                    if (c("sdk.Runtime").getIsVersioned()) {
                      d("sdk.PlatformVersioning").assertVersionIsSet();
                      var b = new (c("sdk.URI"))(this._iframeOptions.url);
                      this._iframeOptions.url = b
                        .setPath(
                          "/" + c("sdk.Runtime").getVersion() + b.getPath()
                        )
                        .toString();
                    }
                    b = babelHelpers["extends"]({}, this._params);
                    delete b.channel;
                    var e = c("QueryString").encode(b);
                    if (
                      this._element.getAttribute("fb-iframe-plugin-query") == e
                    ) {
                      d("Log").info(
                        "Skipping render: %s:%s %s",
                        this._ns,
                        this._tag,
                        e
                      );
                      this.inform("render");
                      return;
                    }
                    this._element.setAttribute("fb-iframe-plugin-query", e);
                    this.subscribe("render", function () {
                      d("sdk.Event").fire("iframeplugin:onload"),
                        (a._iframe.style.visibility = "visible"),
                        a._isIframeResized ||
                          d("sdk.PluginUtils").collapseIframe(a._iframe);
                    });
                    while (this._element.firstChild)
                      this._element.removeChild(this._element.firstChild);
                    this._element.appendChild(this._iframeOptions.root);
                    var f = c("sdk.UA").mobile() ? 120 : 45;
                    this._timeoutID = window.setTimeout(function () {
                      d("sdk.PluginUtils").collapseIframe(a._iframe),
                        d("Log").warn(
                          "%s:%s failed to resize in %ss",
                          a._ns,
                          a._tag,
                          f
                        );
                    }, f * 1e3);
                    this._iframe = c("sdk.createIframe")(this._iframeOptions);
                    d("sdk.Event").fire("iframeplugin:create");
                    if (c("sdk.UA").mobile() || b.width === "auto") {
                      this.useInlineHeightForMobile() &&
                        d("sdk.DOM").addCss(
                          this._element,
                          "fb_iframe_widget_fluid"
                        );
                      if (!this._iframeOptions.width) {
                        ES("Object", "assign", !1, this._element.style, {
                          display: "block",
                          width: "100%",
                          height: "auto",
                        });
                        ES(
                          "Object",
                          "assign",
                          !1,
                          this._iframeOptions.root.style,
                          { width: "100%", height: "auto" }
                        );
                        e = {
                          height: "auto",
                          position: "static",
                          width: "100%",
                        };
                        (c("sdk.UA").iphone() || c("sdk.UA").ipad()) &&
                          ES("Object", "assign", !1, e, {
                            width: "220px",
                            "min-width": "100%",
                          });
                        ES("Object", "assign", !1, this._iframe.style, e);
                      }
                    }
                  },
                  getConfig: function () {
                    return {};
                  },
                  isFluid: function () {
                    var a = this.getConfig();
                    return a.fluid;
                  },
                  updateLift: function () {
                    var a =
                      this._iframe.style.width ===
                        this._iframeOptions.root.style.width &&
                      this._iframe.style.height ===
                        this._iframeOptions.root.style.height;
                    d("sdk.DOM")[a ? "removeCss" : "addCss"](
                      this._iframe,
                      "fb_iframe_widget_lift"
                    );
                  },
                },
                c("ObservableMixin")
              );
              h.withParams = function (a, b) {
                return h.extend({
                  getParams: function () {
                    return a;
                  },
                  getConfig: function () {
                    return b ? b : {};
                  },
                });
              };
              a = h;
              g["default"] = a;
            },
            98
          );
          __d(
            "PluginConfig",
            ["sdk.feature"],
            function (a, b, c, d, e, f, g) {
              a = { mobile_fullsize: !0 };
              b = { mobile_fullsize: !0 };
              d = { mobile_fullsize: !0 };
              e = { mobile_fullsize: !0 };
              f = { mobile_fullsize: !0 };
              c = {
                fluid: c("sdk.feature")("fluid_embed", !1),
                mobile_fullsize: !0,
              };
              a = {
                comment_embed: a,
                messengerpreconfirmation: b,
                messengeraccountconfirmation: d,
                messengerbusinesslink: e,
                messengertoggle: f,
                post: c,
              };
              b = a;
              g["default"] = b;
            },
            98
          );
          __d(
            "PluginAttrTypes",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              a = "string";
              b = "bool";
              c = "url";
              f.string = a;
              f.bool = b;
              f.url = c;
            },
            66
          );
          __d(
            "PluginTags",
            ["PluginAttrTypes"],
            function (a, b, c, d, e, f, g) {
              var h = {
                  ad_library_spend_tracker: {
                    country: d("PluginAttrTypes").string,
                    time_preset: d("PluginAttrTypes").string,
                    custom_start_date: d("PluginAttrTypes").string,
                    custom_end_date: d("PluginAttrTypes").string,
                    race_type: d("PluginAttrTypes").string,
                    state: d("PluginAttrTypes").string,
                    district: d("PluginAttrTypes").string,
                    page_ids: d("PluginAttrTypes").string,
                    include_vps: d("PluginAttrTypes").bool,
                  },
                  comment_embed: {
                    href: d("PluginAttrTypes").url,
                    include_parent: d("PluginAttrTypes").bool,
                  },
                  composer: {
                    action_type: d("PluginAttrTypes").string,
                    action_properties: d("PluginAttrTypes").string,
                  },
                  create_event_button: {},
                  group: {
                    href: d("PluginAttrTypes").url,
                    show_social_context: d("PluginAttrTypes").bool,
                    show_group_info: d("PluginAttrTypes").bool,
                    show_metadata: d("PluginAttrTypes").bool,
                  },
                  like: {
                    href: d("PluginAttrTypes").url,
                    layout: d("PluginAttrTypes").string,
                    show_faces: d("PluginAttrTypes").bool,
                    share: d("PluginAttrTypes").bool,
                    action: d("PluginAttrTypes").string,
                    send: d("PluginAttrTypes").bool,
                    size: d("PluginAttrTypes").string,
                  },
                  like_box: {
                    href: d("PluginAttrTypes").string,
                    show_faces: d("PluginAttrTypes").bool,
                    header: d("PluginAttrTypes").bool,
                    stream: d("PluginAttrTypes").bool,
                    force_wall: d("PluginAttrTypes").bool,
                    show_border: d("PluginAttrTypes").bool,
                    id: d("PluginAttrTypes").string,
                    connections: d("PluginAttrTypes").string,
                    profile_id: d("PluginAttrTypes").string,
                    name: d("PluginAttrTypes").string,
                  },
                  page: {
                    href: d("PluginAttrTypes").string,
                    hide_cta: d("PluginAttrTypes").bool,
                    hide_cover: d("PluginAttrTypes").bool,
                    small_header: d("PluginAttrTypes").bool,
                    adapt_container_width: d("PluginAttrTypes").bool,
                    show_facepile: d("PluginAttrTypes").bool,
                    show_posts: d("PluginAttrTypes").bool,
                    tabs: d("PluginAttrTypes").string,
                  },
                  page_events: { href: d("PluginAttrTypes").url },
                  post: {
                    href: d("PluginAttrTypes").url,
                    show_text: d("PluginAttrTypes").bool,
                  },
                  profile_pic: {
                    uid: d("PluginAttrTypes").string,
                    linked: d("PluginAttrTypes").bool,
                    href: d("PluginAttrTypes").string,
                    size: d("PluginAttrTypes").string,
                    facebook_logo: d("PluginAttrTypes").bool,
                  },
                  send_to_mobile: {
                    max_rows: d("PluginAttrTypes").string,
                    show_faces: d("PluginAttrTypes").bool,
                    size: d("PluginAttrTypes").string,
                  },
                },
                i = { fan: "like_box", likebox: "like_box" };
              Object.keys(i).forEach(function (a) {
                h[a] = h[i[a]];
              });
              a = h;
              g["default"] = a;
            },
            98
          );
          __d(
            "runOnce",
            [],
            function (a, b, c, d, e, f) {
              function a(a) {
                var b = !1,
                  c;
                return function () {
                  b || ((b = !0), (c = a()));
                  return c;
                };
              }
              f["default"] = a;
            },
            66
          );
          __d(
            "XFBML",
            ["Assert", "Log", "runOnce", "sdk.Observable"],
            function (a, b, c, d, e, f, g) {
              var h = {},
                i = {},
                j = 0,
                k = new (d("sdk.Observable").Observable)();
              function l(a, b) {
                return (a[b] + "").trim();
              }
              function m(a) {
                return h[l(a, "nodeName").toLowerCase()];
              }
              function n(a) {
                var b = l(a, "className")
                  .split(/\s+/)
                  .filter(function (a) {
                    return Object.prototype.hasOwnProperty.call(i, a);
                  });
                if (b.length === 0) return void 0;
                if (
                  a.getAttribute("fb-xfbml-state") ||
                  !a.childNodes ||
                  a.childNodes.length === 0 ||
                  (a.childNodes.length === 1 &&
                    a.childNodes[0].nodeType === 3) ||
                  (a.children.length === 1 &&
                    l(a.children[0], "className") === "fb-xfbml-parse-ignore")
                )
                  return i[b[0]];
              }
              function o(a) {
                var b = {};
                ES("Array", "from", !1, a.attributes).forEach(function (a) {
                  b[l(a, "name")] = l(a, "value");
                });
                return b;
              }
              function p(a, b, e) {
                c("Assert").isTrue(
                  a &&
                    a.nodeType &&
                    a.nodeType === 1 &&
                    !!a.getElementsByTagName,
                  "Invalid DOM node passed to FB.XFBML.parse()"
                );
                c("Assert").isFunction(
                  b,
                  "Invalid callback passed to FB.XFBML.parse()"
                );
                if (a == null) return;
                var f = ++j;
                d("Log").info("XFBML Parsing Start %s", f);
                var g = 1,
                  h = 0,
                  i = function () {
                    g--,
                      g === 0 &&
                        (d("Log").info(
                          "XFBML Parsing Finish %s, %s tags found",
                          f,
                          h
                        ),
                        b != null && b(),
                        k.inform("render", [f, h])),
                      c("Assert").isTrue(
                        g >= 0,
                        "onrender() has been called too many times"
                      );
                  };
                ES("Array", "from", !1, a.getElementsByTagName("*")).forEach(
                  function (a) {
                    if (e !== !0 && a.getAttribute("fb-xfbml-state")) return;
                    if (a.nodeType !== 1) return;
                    var b = m(a) || n(a);
                    if (b == null) return;
                    g++;
                    h++;
                    var d = new b.ctor(a, b.xmlns, b.localName, o(a));
                    d.subscribe(
                      "render",
                      c("runOnce")(function () {
                        a.setAttribute("fb-xfbml-state", "rendered"), i();
                      })
                    );
                    b = function b() {
                      a.getAttribute("fb-xfbml-state") == "parsed"
                        ? k.subscribe("render.queue", b)
                        : (a.setAttribute("fb-xfbml-state", "parsed"),
                          d.process());
                    };
                    b();
                  }
                );
                k.inform("parse", [f, h]);
                var l = 3e4;
                window.setTimeout(function () {
                  g > 0 &&
                    d("Log").warn("%s tags failed to render in %s ms", g, l);
                }, l);
                i();
              }
              k.subscribe("render", function () {
                var a = k.getSubscribers("render.queue");
                k.clearSubscribers("render.queue");
                a.forEach(function (a) {
                  a([]);
                });
              });
              a = {
                registerTag: function (a) {
                  var b = a.xmlns + ":" + a.localName;
                  if (b === "fb:customerchat" && h[b] != null) return;
                  c("Assert").isUndefined(h[b], b + " already registered");
                  h[b] = a;
                  i[a.xmlns + "-" + a.localName] = a;
                },
                parse: function (a, b) {
                  p(
                    (a = a) != null ? a : document.body,
                    (a = b) != null ? a : function () {},
                    !0
                  );
                },
                parseNew: function () {
                  p(document.body, function () {}, !1);
                },
                subscribe: k.subscribe,
                unsubscribe: k.unsubscribe,
              };
              b = a;
              g["default"] = b;
            },
            98
          );
          __d(
            "sdk.XFBML.Comments",
            [
              "IframePlugin",
              "QueryString",
              "UrlMap",
              "sdk.DOM",
              "sdk.Event",
              "sdk.PluginUtils",
              "sdk.Runtime",
              "sdk.UA",
              "sdk.URI",
            ],
            function (a, b, c, d, e, f, g) {
              var h = 320,
                i = babelHelpers["extends"](
                  {
                    numposts: "string",
                    href: "url",
                    permalink: "bool",
                    order_by: "string",
                    mobile: "bool",
                    version: "string",
                    hide_post_profile: "bool",
                    limit: "string",
                    offset: "string",
                    view: "string",
                    fb_comment_id: "string",
                    from_mod_tool: "bool",
                    migrated: "string",
                    xid: "string",
                    title: "string",
                    url: "string",
                    quiet: "string",
                    reverse: "string",
                    simple: "string",
                    css: "string",
                    notify: "string",
                    count: "bool",
                    skin: "string",
                    font: "string",
                    width: "string",
                    height: "px",
                    ref: "string",
                    lazy: "bool",
                    color_scheme: "string",
                  },
                  d("sdk.PluginUtils").baseParams
                );
              function j(a, b) {
                Object.keys(i).forEach(function (c) {
                  var e = d("sdk.DOM").getAttr(a, c);
                  e !== null && (b[c] = e);
                });
                Object.keys(b).forEach(function (a) {
                  ES(a, "startsWith", !0, "data-") && delete b[a];
                });
                c("sdk.UA").mobile() && b.mobile !== !1 && (b.mobile = !0);
                b.skin || (b.skin = b.colorscheme);
                if (!b.href) {
                  b.title = b.title || document.title;
                  b.url = b.url || document.URL;
                  if (!b.xid) {
                    var e = document.URL.indexOf("#");
                    e > 0
                      ? (b.xid = encodeURIComponent(
                          document.URL.substring(0, e)
                        ))
                      : (b.xid = encodeURIComponent(document.URL));
                  }
                  b.migrated &&
                    (b.href =
                      d("UrlMap").resolve("www") +
                      "/plugins/comments_v1.php?app_id=" +
                      c("sdk.Runtime").getClientID() +
                      "&xid=" +
                      encodeURIComponent(b.xid) +
                      "&url=" +
                      encodeURIComponent(b.url));
                } else {
                  e = b.fb_comment_id;
                  e ||
                    ((e = c("QueryString").decode(
                      document.URL.substring(document.URL.indexOf("?") + 1)
                    ).fb_comment_id),
                    e &&
                      e.indexOf("#") > 0 &&
                      (e = e.substring(0, e.indexOf("#"))));
                  e && (b.fb_comment_id = e);
                }
                b.version || (b.version = c("sdk.Runtime").getVersion());
                b.permalink ||
                  ((b.width =
                    b.mobile || b.width === "auto" || b.width === "100%"
                      ? ""
                      : b.width
                      ? Math.max(b.width, h)
                      : 550),
                  (b.height = 100));
                if (b.href != null) {
                  e = new (c("sdk.URI"))(b.href);
                  e.getProtocol() ||
                    (b.href = e.setProtocol("http").toString());
                }
                return b;
              }
              a = c("IframePlugin").extend({
                constructor: function (a, b, c, e) {
                  (e = j(a, e)),
                    this.parent(a, b, c, e),
                    this.subscribe("xd.sdk_event", function (a) {
                      d("sdk.Event").fire(
                        a.event,
                        ES("JSON", "parse", !1, a.data)
                      );
                    });
                },
                getConfig: function () {
                  return { fluid: !0, full_width: !0 };
                },
                getParams: function () {
                  return i;
                },
              });
              b = a;
              g["default"] = b;
            },
            98
          );
          __d(
            "sdk.XFBML.CommentsCount",
            ["sdk.DOM", "sdk.XFBML.Comments", "sprintf"],
            function (a, b, c, d, e, f, g) {
              a = c("sdk.XFBML.Comments").extend({
                constructor: function (a, b, e, f) {
                  d("sdk.DOM").addCss(a, "fb_comments_count_zero"),
                    (f.count = 1),
                    this.parent(a, b, "comments", f),
                    this.subscribe("xd.comment_count", function (b) {
                      b = ES("JSON", "parse", !1, b.data);
                      d("sdk.DOM").html(
                        a,
                        c("sprintf")(
                          '<span class="fb_comments_count">%s</span>',
                          b.count
                        )
                      );
                      b.count > 0 &&
                        d("sdk.DOM").removeCss(a, "fb_comments_count_zero");
                      d("sdk.DOM").removeCss(a, "fb_iframe_widget");
                    });
                },
              });
              b = a;
              g["default"] = b;
            },
            98
          );
          __d(
            "$InternalEnum",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              var g = Object.prototype.hasOwnProperty,
                h = typeof WeakMap === "function" ? new WeakMap() : new Map();
              function i(a) {
                var b = h.get(a);
                if (b !== void 0) return b;
                var c = new Map();
                Object.getOwnPropertyNames(a).forEach(function (b) {
                  c.set(a[b], b);
                });
                try {
                  h.set(a, c);
                } catch (a) {}
                return c;
              }
              var j = Object.freeze(
                Object.defineProperties(Object.create(null), {
                  isValid: {
                    value: function (a) {
                      return i(this).has(a);
                    },
                  },
                  cast: {
                    value: function (a) {
                      return this.isValid(a) ? a : void 0;
                    },
                  },
                  members: {
                    value: function () {
                      return i(this).keys();
                    },
                  },
                  getName: {
                    value: function (a) {
                      return i(this).get(a);
                    },
                  },
                })
              );
              function a(a) {
                var b = Object.create(j);
                for (var c in a)
                  g.call(a, c) && Object.defineProperty(b, c, { value: a[c] });
                return Object.freeze(b);
              }
              var k = Object.freeze(
                Object.defineProperties(Object.create(null), {
                  isValid: {
                    value: function (a) {
                      return typeof a === "string" ? g.call(this, a) : !1;
                    },
                  },
                  cast: { value: j.cast },
                  members: {
                    value: function () {
                      return Object.getOwnPropertyNames(this).values();
                    },
                  },
                  getName: {
                    value: function (a) {
                      return a;
                    },
                  },
                })
              );
              a.Mirrored = function (a) {
                var b = Object.create(k);
                for (var c = 0, d = a.length; c < d; ++c)
                  Object.defineProperty(b, a[c], { value: a[c] });
                return Object.freeze(b);
              };
              Object.freeze(a.Mirrored);
              e.exports = Object.freeze(a);
            },
            null
          );
          __d(
            "ChatPluginEntryPointIconEnum",
            ["$InternalEnum"],
            function (a, b, c, d, e, f) {
              a = b("$InternalEnum")({
                MESSENGER_ICON: "messenger_icon",
                CHAT_ROUND_ICON: "chat_round_icon",
                CHAT_ANGULAR_ICON: "chat_angular_icon",
                NONE: "none",
              });
              c = a;
              f["default"] = c;
            },
            66
          );
          __d(
            "ChatPluginEntryPointLabelEnum",
            ["$InternalEnum"],
            function (a, b, c, d, e, f) {
              a = b("$InternalEnum")({
                NONE: "none",
                CHAT: "chat",
                HELP: "help",
                ASK_US: "ask_us",
              });
              c = a;
              f["default"] = c;
            },
            66
          );
          __d(
            "ChatPluginEntryPointSizeEnum",
            [],
            function (a, b, c, d, e, f) {
              a = Object.freeze({ STANDARD: "standard", COMPACT: "compact" });
              f["default"] = a;
            },
            66
          );
          __d(
            "performanceAbsoluteNow",
            ["performance"],
            function (a, b, c, d, e, f, g) {
              var h = function () {
                return Date.now();
              };
              function a(a) {
                h = a;
              }
              if (
                c("performance").now &&
                c("performance").timing &&
                c("performance").timing.navigationStart
              ) {
                var i = c("performance").timing.navigationStart;
                b = function () {
                  return c("performance").now() + i;
                };
              } else
                b = function () {
                  return h();
                };
              b.setFallback = a;
              d = b;
              g["default"] = d;
            },
            98
          );
          __d(
            "ChatPluginSDKPreLoggingUtils",
            ["CORSRequest", "UrlMap", "performanceAbsoluteNow"],
            function (a, b, c, d, e, f, g) {
              "use strict";
              function a(a, b, e, f) {
                var g;
                f === void 0 && (f = !0);
                var h = c("performanceAbsoluteNow")();
                a = a
                  ? d("UrlMap").resolve("social_plugin") + "/customer_chat/SDK/"
                  : d("UrlMap").resolve("www") + "/plugins/customer_chat/SDK/";
                g = (g = e.request_time) != null ? g : void 0;
                var i = 0;
                typeof g === "number" && f && (i = h - g);
                e.request_time = h;
                c("CORSRequest").execute(
                  a,
                  "get",
                  babelHelpers["extends"]({}, e, {
                    event_name: b,
                    loading_time: i,
                  }),
                  function () {
                    return null;
                  }
                );
              }
              g.preLogging = a;
            },
            98
          );
          __d(
            "LiveChatPluginConstants",
            ["$InternalEnum"],
            function (a, b, c, d, e, f) {
              "use strict";
              a = "LiveChatEvent/";
              c = "mqtt";
              d = b("$InternalEnum")({
                CONNECTED: "Connected",
                CONNECTING: "Connecting",
                DISCONNECTED: "Disconnected",
              });
              e = 250;
              b = a + "close_timestamps";
              var g = a + "reset_badging",
                h = a + "state",
                i = a + "switch_account",
                j = a + "typing",
                k = a + "unread_count",
                l = a + "update_message_list",
                m = "platform/plugins/connect/guest",
                n = a + "guest_upgrade_success",
                o = a + "guest_upgrade_success_incognito",
                p = a + "navigate_to_welcome_page",
                q = "platform/plugins/connect/access_token";
              a = a + "start_re_engagement";
              var r = 124,
                s = 187,
                t = 24,
                u = 424,
                v = 288,
                w = 313,
                x = 219,
                y = 40,
                z = 36,
                A = 24,
                B = 18,
                C = 708,
                D = 540,
                E = 244,
                F = 202,
                G = 509,
                H = 430,
                I = 6,
                J = 0,
                K = 1,
                L = -1,
                M = "messaging_plugin",
                N = 8634e4,
                O = "#8A8D91",
                P = "entrypoint:customer_chat_plugin",
                Q = 0,
                R = 1,
                S = 2,
                T = 3,
                U = "new_message_update",
                V = "initial_fetch",
                W = 5e3,
                X = "https://www.facebook.com/business/help/1661027437357021";
              f.MQTT = c;
              f.MQTTGatewayConnectionState = d;
              f.LOGIN_CHECK_INTERVAL = e;
              f.CLOSE_TIMESTAMPS = b;
              f.RESET_BADGING = g;
              f.STATE_UPDATE = h;
              f.SWITCH_ACCOUNT = i;
              f.TYPING_UPDATE = j;
              f.UNREAD_COUNT_UPDATE = k;
              f.UPDATE_MESSAGE_LIST = l;
              f.GUEST_MODE_CONNECT = m;
              f.GUEST_UPGRADE_SUCCESS = n;
              f.GUEST_UPGRADE_SUCCESS_INCOGNITO = o;
              f.NAVIGATE_TO_WELCOME_PAGE = p;
              f.ACCESS_TOKEN_LOGIN = q;
              f.START_RE_ENGAGEMENT = a;
              f.PROMPT_FALLBACK_HEIGHT = r;
              f.PROMPT_REDESIGN_FALLBACK_HEIGHT = s;
              f.PROMPT_CONTAINER_PADDING_HEIGHT = t;
              f.WELCOME_PAGE_GUEST_FALLBACK_HEIGHT = u;
              f.WELCOME_PAGE_NO_GUEST_FALLBACK_HEIGHT = v;
              f.WELCOME_PAGE_GUEST_FALLBACK_HEIGHT_WITH_COMPACT = w;
              f.WELCOME_PAGE_NO_GUEST_FALLBACK_HEIGHT_WITH_COMPACT = x;
              f.WELCOME_PAGE_ATTRIBUTION_OFFEST_HEIGHT = y;
              f.WELCOME_PAGE_ATTRIBUTION_OFFSET_HEIGHT_WITH_COMPACT = z;
              f.MAIN_IFRAME_PADDING_HEIGHT = A;
              f.MAIN_IFRAME_PADDING_HEIGHT_WITH_COMPACT = B;
              f.THREAD_PAGE_HEIGHT = C;
              f.THREAD_PAGE_HEIGHT_COMPACT = D;
              f.RE_ENGAGEMENT_COLLAPSED_DIALOG_HEIGHT = E;
              f.RE_ENGAGEMENT_COLLAPSED_DIALOG_HEIGHT_COMPACT = F;
              f.RE_ENGAGEMENT_EXPANDED_DIALOG_HEIGHT = G;
              f.RE_ENGAGEMENT_EXPANDED_DIALOG_HEIGHT_COMPACT = H;
              f.GREETING_TEXT_BOTTOM_SPACING_OFFEST = I;
              f.LOGGED_IN_CHAT_MODE = J;
              f.GUEST_CHAT_MODE = K;
              f.INVALID_CHAT_MODE = L;
              f.MESSENGING_PLUGIN = M;
              f.GUEST_SESSION_STORAGE_VALIDITY_MS = N;
              f.GUEST_SEND_BUTTON_COLOR_EMPTY_INPUT = O;
              f.LIVE_CHAT_ENTRYPOINT_ATTRIBUTION_TAG = P;
              f.ITP_CONSISTENCY_UNKNOWN_LOGGED_OUT = Q;
              f.ITP_CONSISTENCY_CONSISTENT_LOGGED_IN = R;
              f.ITP_CONSISTENCY_INCONSISTENT = S;
              f.ITP_CONSISTENCY_CONSISTENT_NO_ITP = T;
              f.NEW_MESSAGE_UPDATE = U;
              f.INITIAL_FETCH = V;
              f.PLUGIN_FADE_DELAY = W;
              f.HELP_DEX_LINK = X;
            },
            66
          );
          __d(
            "ChatPluginStyleUtils",
            ["LiveChatPluginConstants"],
            function (a, b, c, d, e, f, g) {
              var h = 44,
                i = 36,
                j = 17,
                k = 15,
                l = 22,
                m = 20,
                n = 6,
                o = 4,
                p = 16,
                q = 14,
                r = 60,
                s = 44,
                t = 70,
                u = 86,
                v = 63,
                w = 76,
                x = 99,
                y = 114,
                z = 85,
                A = 98,
                B = 12;
              function a() {
                var a = screen.width;
                a = "width: " + a + "px;";
                return (
                  "padding: 0; position: fixed; z-index: 2147483646;box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.15);border-radius: 16px;bottom: 24px; top: auto; right:0;" +
                  a
                );
              }
              function b(a) {
                a instanceof HTMLElement &&
                  (a.style.marginTop =
                    window.innerHeight - a.clientHeight + "px");
              }
              function C(a, b, c, d, e, f, g) {
                b = R(b, d, e);
                d = S(f, g);
                e = T(a, c);
                f = babelHelpers["extends"]({}, b, d, e);
                return Object.fromEntries(
                  ES("Object", "entries", !1, f).sort()
                );
              }
              function c(a, b, c, d, e, f, g) {
                a = C(a, b, c, d, e, f, g);
                return ES("JSON", "stringify", !1, a);
              }
              function e(a, b, c, d, e) {
                c = c + (a == "right" ? -2 : 43);
                b + r - 16;
                b = b - 16;
                d === "none"
                  ? e === "compact"
                    ? (b += s)
                    : (b += r)
                  : e === "compact"
                  ? (b += i)
                  : (b += h);
                d = {
                  bottom: b.toString() + "px",
                  position: "fixed",
                  width: "20px",
                  height: "24px",
                  zIndex: 2147483645,
                  borderRadius: "4pt",
                  background: "none",
                };
                e = {};
                switch (a) {
                  case "right":
                    e = babelHelpers["extends"]({}, d, { right: c + "px" });
                    break;
                  case "left":
                    e = babelHelpers["extends"]({}, d, { left: c + "px" });
                    break;
                }
                b = Object.fromEntries(ES("Object", "entries", !1, e).sort());
                return ES("JSON", "stringify", !1, b);
              }
              function f(a, b, c, d, e, f, g, h) {
                var i = c;
                b = b - 2.5;
                a === "left" &&
                  ((i = c - 15),
                  d === "none"
                    ? f === "compact"
                      ? (i += s)
                      : (i += r)
                    : e === "none"
                    ? d === "ask_us"
                      ? f === "compact"
                        ? (i += w)
                        : (i += u)
                      : f === "compact"
                      ? (i += v)
                      : (i += t)
                    : d === "ask_us"
                    ? f === "compact"
                      ? (i += A)
                      : (i += y)
                    : f === "compact"
                    ? (i += z)
                    : (i += x));
                c = {
                  bottom: b.toString() + "px",
                  position: "fixed",
                  zIndex: 2147483646,
                  height: "15px",
                  width: "15px",
                  borderRadius: "50%",
                };
                e = {};
                switch (a) {
                  case "right":
                    e = babelHelpers["extends"]({}, c, { right: i + "px" });
                    break;
                  case "left":
                    e = babelHelpers["extends"]({}, c, { left: i + "px" });
                    break;
                }
                g === !1 &&
                  (e = babelHelpers["extends"]({}, e, {
                    animation:
                      h === !0 ? "slideInFromBottomDelay 3.5s ease-out" : null,
                    backgroundColor: "#31CC46",
                    border: "2.5px solid white",
                    height: "10px",
                    width: "10px",
                  }));
                return Object.fromEntries(
                  ES("Object", "entries", !1, e).sort()
                );
              }
              function D(a) {
                var b =
                  "padding: 0; position: fixed; z-index: 2147483646;box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.15);border-radius: 16px;bottom: 24px; top: auto; right:0; margin: 0 12px; width: calc(100% - 24px);";
                a = a === !0 ? " height: 60px;" : " height: 0px;";
                b += a;
                return b;
              }
              function E(a, b, c, d, e, f, g) {
                c = c - B;
                r;
                e === "none"
                  ? f === "compact"
                    ? (e = s)
                    : (e = r)
                  : f === "compact"
                  ? (e = i)
                  : (e = h);
                f = e + b;
                e = " bottom: " + f.toString() + "px;";
                b =
                  "padding: 0; position: fixed; z-index: 2147483646; border-radius: 16px; top: auto; background: none; minHeight: 300px;";
                var j = " width: 399px;",
                  k = " width: 324px;";
                b = b + (g === "compact" ? k : j) + e;
                d
                  ? (b += " max-height: calc(100% - " + f.toString() + "px);")
                  : (b += " max-height: 0;");
                switch (a) {
                  case "right":
                    b += " right: " + (c + 4) + "px;";
                    break;
                  case "left":
                    b += " left: " + (c - 4) + "px;";
                    break;
                }
                return b;
              }
              function F(a) {
                var b =
                  "position: fixed; z-index: 2147483646; box-shadow: none; border-radius: 0; top: 0px; right: 0px; width: 100%;";
                a =
                  a === !0
                    ? " height: 100%; max-height: 100%;"
                    : " max-height: 0px;";
                b += a;
                return b;
              }
              function G(a, b, c, e, f) {
                b = H(b, c, e);
                if (!a) {
                  c = f
                    ? d("LiveChatPluginConstants")
                        .RE_ENGAGEMENT_COLLAPSED_DIALOG_HEIGHT_COMPACT
                    : d("LiveChatPluginConstants")
                        .RE_ENGAGEMENT_COLLAPSED_DIALOG_HEIGHT;
                  e = f
                    ? d("LiveChatPluginConstants")
                        .MAIN_IFRAME_PADDING_HEIGHT_WITH_COMPACT
                    : d("LiveChatPluginConstants").MAIN_IFRAME_PADDING_HEIGHT;
                  a = c + e;
                  b +=
                    a -
                    d("LiveChatPluginConstants")
                      .GREETING_TEXT_BOTTOM_SPACING_OFFEST;
                }
                return b;
              }
              function H(a, b, c) {
                var d = B;
                b === "none"
                  ? c === "compact"
                    ? (d += s)
                    : (d += r)
                  : c === "compact"
                  ? (d += i)
                  : (d += h);
                return d + a;
              }
              function I(a, b, c, d, e) {
                c = c - B;
                b = H(b, d, e);
                d = {
                  padding: 0,
                  position: "fixed",
                  zIndex: 2147483646,
                  borderRadius: "16px",
                  top: "auto",
                  width: "247px",
                  maxHeight: "calc(100% - 80px)",
                  background: "none",
                  height: "72px",
                };
                ({});
                e = babelHelpers["extends"]({}, d, { bottom: b + "px" });
                switch (a) {
                  case "right":
                    e = babelHelpers["extends"]({}, e, {
                      right: "6px",
                      marginRight: c + "px",
                    });
                    break;
                  case "left":
                    e = babelHelpers["extends"]({}, e, {
                      left: "2px",
                      marginLeft: c + "px",
                    });
                    break;
                }
                e = babelHelpers["extends"]({}, e, {
                  animation: "slideInFromBottomDelay 3s ease-out",
                });
                d = Object.fromEntries(ES("Object", "entries", !1, e).sort());
                return ES("JSON", "stringify", !1, d);
              }
              function J(a, b, c, d, e, f) {
                c = c - B;
                b = H(b, e, f);
                e = " bottom: " + b.toString() + "px;";
                f =
                  "padding: 0; position: fixed; z-index: 2147483646;border-radius: 16px; top: auto; width: 247px; max-height: calc(100% - 80px); background: none;" +
                  e;
                b = f;
                switch (a) {
                  case "right":
                    b += " right: 6px; margin-right: " + c + "px;";
                    break;
                  case "left":
                    b += " left: 2px; margin-left: " + c + "px;";
                    break;
                }
                b += Boolean(d)
                  ? " animation: slideInFromBottomDelay 6s ease-out;"
                  : " animation: slideInFromBottomDelay 3s ease-out;";
                return b;
              }
              function K(a, b, c, d, e, f) {
                d = f === "compact" ? s : r;
                var g =
                  "position: fixed; z-index: 2147483646; box-shadow: none; border-radius: 18px 0px 18px 18px; right: 0px; width: calc(80% - 40px); bottom: 24px;";
                if (a != null && typeof c == "number") {
                  g += " height: " + a + "px;";
                  var j = c;
                  a < d && (j = c + 12);
                  g += " bottom: " + j + "px;";
                } else g += " height: 60px;";
                g += b === "left" ? " left: calc(84px + 5%);" : " left: 5%;";
                if (e !== "none" && typeof c === "number") {
                  a = f === "compact" ? i : h;
                  d = c + a + 12;
                  g += " bottom: " + d + "px;";
                  switch (b) {
                    case "right":
                      g += " right: 20px; left: auto;";
                      break;
                    case "left":
                      g += " left: 20px; right: auto;";
                      break;
                  }
                }
                return g;
              }
              function L(a, b, c, d, e) {
                c =
                  "position: fixed; z-index: 2147483646; box-shadow: none; border-radius: 18px 0px 18px 18px;width: 306px;bottom: 24px; right: 20px;";
                if (typeof b === "number") {
                  e = e === "compact" ? i : h;
                  b = b + e + 12;
                  c += " bottom: " + b + "px;";
                }
                if (typeof d === "number") {
                  e = d - B;
                  switch (a) {
                    case "right":
                      c += " right: " + (e + 4) + "px; left:auto";
                      break;
                    case "left":
                      c += " left: " + (e - 4) + "px; right:auto";
                      break;
                  }
                }
                return c;
              }
              function M(a, b) {
                var c = {
                    alignItems: "flex-start",
                    background: "#FFFFFF",
                    borderRadius: "18px",
                    bottom: 0,
                    boxShadow: "0 4px 12px 0 rgba(0, 0, 0, 0.15)",
                    display: "flex",
                    flexDirection: "row",
                    position: "absolute",
                  },
                  d = babelHelpers["extends"]({}, c, {
                    marginLeft: "12px",
                    padding: "8px 0px 8px 8px",
                    width: "90%",
                  });
                c = babelHelpers["extends"]({}, c, {
                  padding: "8px 0px 8px 12px",
                  width: "93%",
                });
                a = a ? d : c;
                b === "desktop" &&
                  (a = babelHelpers["extends"]({}, a, { cursor: "pointer" }));
                return Object.fromEntries(
                  ES("Object", "entries", !1, a).sort()
                );
              }
              function N(a, b) {
                var c = {
                    display: "inline-block",
                    fontSize: "17px",
                    lineHeight: "22px",
                    textAlign: "left",
                    width: "90%",
                    wordWrap: "break-word",
                  },
                  d = babelHelpers["extends"]({}, c, { paddingRight: "18px" });
                b === "mobile" &&
                  (d = babelHelpers["extends"]({}, d, { paddingLeft: "12px" }));
                b = babelHelpers["extends"]({}, c, {
                  paddingRight: "12px",
                  paddingLeft: "12px",
                });
                c = a ? b : d;
                return Object.fromEntries(
                  ES("Object", "entries", !1, c).sort()
                );
              }
              function O(a, b) {
                var c = { position: "absolute", top: "-2px", width: "38px" };
                b === "desktop" &&
                  (c = babelHelpers["extends"]({}, c, { cursor: "pointer" }));
                b = babelHelpers["extends"]({}, c, { left: "-4px" });
                c = babelHelpers["extends"]({}, c, { right: "-4px" });
                a = a ? b : c;
                return Object.fromEntries(
                  ES("Object", "entries", !1, a).sort()
                );
              }
              function P(a) {
                a = { visibility: a ? "hidden" : "visible" };
                return Object.fromEntries(
                  ES("Object", "entries", !1, a).sort()
                );
              }
              function Q() {
                var a = { outline: "none" };
                return Object.fromEntries(
                  ES("Object", "entries", !1, a).sort()
                );
              }
              function R(a, b, c) {
                return {
                  animation: U(b, c),
                  background: "none",
                  bottom: a.toString() + "px",
                  display: "block",
                  margin: "0 12px 0 12px",
                  overflow: "visible",
                  padding: "0",
                  position: "fixed",
                  top: "auto",
                  zIndex: 2147483644,
                };
              }
              function S(a, b) {
                if (a !== "none") {
                  a = b === "compact" ? i : h;
                  return {
                    borderRadius: "60px",
                    boxShadow: null,
                    height: a + "px",
                    width: "auto",
                  };
                } else {
                  a = b === "compact" ? s : r;
                  return {
                    borderRadius: "60px",
                    boxShadow: "0 4px 12px 0 rgba(0, 0, 0, 0.15)",
                    height: a + "px",
                    width: a + "px",
                  };
                }
              }
              function T(a, b) {
                b = b - B;
                switch (a) {
                  case "right":
                    return { right: b + "px" };
                  case "left":
                    return { left: b + "px" };
                }
              }
              function U(a, b) {
                if (Boolean(a)) return null;
                if (Boolean(b)) return "slideInFromBottomDelay 3s ease-out";
                else return "slideInFromBottom 0.3s ease-out";
              }
              g.LABELED_ENTRY_POINT_STANDARD_HEIGHT = h;
              g.LABELED_ENTRY_POINT_COMPACT_HEIGHT = i;
              g.LABELED_ENTRY_POINT_STANDARD_FONT_SIZE = j;
              g.LABELED_ENTRY_POINT_COMPACT_FONT_SIZE = k;
              g.LABELED_ENTRY_POINT_STANDARD_LINE_HEIGHT = l;
              g.LABELED_ENTRY_POINT_COMPACT_LINE_HEIGHT = m;
              g.LABELED_ENTRY_POINT_STANDARD_ICON_MARGIN_RIGHT = n;
              g.LABELED_ENTRY_POINT_COMPACT_ICON_MARGIN_RIGHT = o;
              g.LABELED_ENTRY_POINT_STANDARD_PADDING_HORIZONTAL = p;
              g.LABELED_ENTRY_POINT_COMPACT_PADDING_HORIZONTAL = q;
              g.ICON_ENTRY_POINT_STANDARD_HEIGHT = r;
              g.ICON_ENTRY_POINT_COMPACT_HEIGHT = s;
              g.LABELED_ONLY_ENTRY_POINT_STANDARD_WIDTH_SHORT = t;
              g.LABELED_ONLY_ENTRY_POINT_STANDARD_WIDTH_LONG = u;
              g.LABELED_ONLY_ENTRY_POINT_COMPACT_WIDTH_SHORT = v;
              g.LABELED_ONLY_ENTRY_POINT_COMPACT_WIDTH_LONG = w;
              g.LABELED_WITH_ICON_ENTRY_POINT_STANDARD_WIDTH_SHORT = x;
              g.LABELED_WITH_ICON_ENTRY_POINT_STANDARD_WIDTH_LONG = y;
              g.LABELED_WITH_ICON_ENTRY_POINT_COMPACT_WIDTH_SHORT = z;
              g.LABELED_WITH_ICON_ENTRY_POINT_COMPACT_WIDTH_LONG = A;
              g.getMobileStyleText = a;
              g.positionElementAtWindowFooter = b;
              g.getEntryPointStyle = C;
              g.getIconStyleText = c;
              g.getUnreadCountStyleText = e;
              g.getAvailabilityStatusStyleText = f;
              g.getMobileLandingStyleText = D;
              g.getDesktopStyleText = E;
              g.getMobileFullScreenStyleText = F;
              g.getDesktopGreetingBottomSpacingWithReEngagementDialog = G;
              g.getDesktopGreetingBottomSpacing = H;
              g.getDesktopGreetingStyleText = I;
              g.getDesktopWelcomeMessageStyleText = J;
              g.getMobileWelcomeMessageStyleText = K;
              g.getMobileReengagementCollapsedDialogStyleText = L;
              g.getWelcomeMessageBubbleStyle = M;
              g.getWelcomeMessageTextStyle = N;
              g.getMinusButtonStyle = O;
              g.getMinusButtonVisibility = P;
              g.getNoOutlineFocus = Q;
            },
            98
          );
          __d(
            "DOMPlugin",
            [
              "JSSDKShadowCssConfig",
              "Log",
              "QueryString",
              "sdk.DOM",
              "sdk.Observable",
              "sdk.PluginUtils",
              "sdk.Runtime",
              "sdk.XD",
              "sdk.feature",
            ],
            function (a, b, c, d, e, f, g) {
              a = (function (a) {
                babelHelpers.inheritsLoose(e, a);
                var b = e.prototype;
                b.render = function (a) {};
                function e(b, e, f, g, h, i) {
                  var j;
                  j = a.call(this) || this;
                  j.shadowCss = [];
                  j.element = b;
                  j.tag = f.replace(/-/g, "_");
                  j.ns = e;
                  j.config = (f = i) != null ? f : {};
                  j.params = {};
                  d("sdk.PluginUtils").validate(h, b, g, j.params);
                  d("sdk.PluginUtils").validate(
                    d("sdk.PluginUtils").baseParams,
                    b,
                    g,
                    j.params
                  );
                  ES("Object", "assign", !1, j.params, {
                    app_id: c("sdk.Runtime").getClientID(),
                    locale: c("sdk.Runtime").getLocale(),
                    sdk: "joey",
                    kid_directed_site: c("sdk.Runtime").getKidDirectedSite(),
                    channel: d("sdk.XD").handler(
                      function (a) {
                        a != null && j.inform("xd." + a.type, a);
                      },
                      "parent.parent",
                      !0
                    ),
                  });
                  return j;
                }
                b.process = function () {
                  var a = babelHelpers["extends"]({}, this.params);
                  delete a.channel;
                  a = c("QueryString").encode(a);
                  if (
                    this.element.getAttribute("fb-iframe-plugin-query") === a
                  ) {
                    d("Log").info(
                      "Skipping render: %s:%s %s",
                      this.ns,
                      this.tag,
                      a
                    );
                    this.inform("render");
                    return;
                  }
                  this.element.setAttribute("fb-iframe-plugin-query", a);
                  h(
                    this.element,
                    ES(this.render, "bind", !0, this),
                    this.shadowCss
                  );
                  this.inform("render");
                };
                return e;
              })(d("sdk.Observable").Observable);
              function h(a, b, e) {
                e === void 0 && (e = []);
                while (a.firstChild) a.removeChild(a.firstChild);
                if (typeof a.attachShadow === "function") {
                  var f = document.createElement("div");
                  a.appendChild(f);
                  var g = f.attachShadow({
                    mode: c("sdk.feature")("shadow_dom_plugin_mode", "closed"),
                  });
                  e.forEach(function (a) {
                    return d("sdk.DOM").addCssRules(
                      c("JSSDKShadowCssConfig")[a],
                      [a],
                      g
                    );
                  });
                  g.appendChild(b(g));
                } else
                  e.forEach(function (a) {
                    return d("sdk.DOM").addCssRules(
                      c("JSSDKShadowCssConfig")[a],
                      [a]
                    );
                  }),
                    a.appendChild(b(document));
              }
              g.DOMPlugin = a;
              g.maybeCreateShadowRootAndRenderInDOM = h;
            },
            98
          );
          __d(
            "getJSEnumSafe",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              function a(a, b) {
                if (b == null) return null;
                if (!Object.prototype.hasOwnProperty.call(a, b)) return null;
                b = b;
                return a[b];
              }
              f["default"] = a;
            },
            66
          );
          __d(
            "nativeRequestAnimationFrame",
            [],
            function (a, b, c, d, e, f) {
              b =
                a.__fbNativeRequestAnimationFrame ||
                a.requestAnimationFrame ||
                a.webkitRequestAnimationFrame ||
                a.mozRequestAnimationFrame ||
                a.oRequestAnimationFrame ||
                a.msRequestAnimationFrame;
              c = b;
              f["default"] = c;
            },
            66
          );
          __d(
            "requestAnimationFramePolyfill",
            ["nativeRequestAnimationFrame", "performanceNow"],
            function (a, b, c, d, e, f, g) {
              var h = 0;
              b =
                c("nativeRequestAnimationFrame") ||
                function (b) {
                  var d = c("performanceNow")(),
                    e = Math.max(0, 16 - (d - h));
                  h = d + e;
                  return a.setTimeout(function () {
                    b(c("performanceNow")());
                  }, e);
                };
              d = b;
              g["default"] = d;
            },
            98
          );
          __d(
            "IdleCallbackImplementation",
            ["performanceNow", "requestAnimationFramePolyfill"],
            function (a, b, c, d, e, f, g) {
              var h = [],
                i = 0,
                j = 0,
                k = -1,
                l = !1,
                m = 1e3 / 60,
                n = 2;
              function o(a) {
                return a;
              }
              function p(a) {
                return a;
              }
              function b(b, c) {
                var d = j++;
                h[d] = b;
                r();
                if (c != null && c.timeout > 0) {
                  var e = o(d);
                  a.setTimeout(function () {
                    return x(e);
                  }, c.timeout);
                }
                return o(d);
              }
              function q(a) {
                a = p(a);
                h[a] = null;
              }
              function r() {
                l ||
                  ((l = !0),
                  c("requestAnimationFramePolyfill")(function (a) {
                    (l = !1), t(c("performanceNow")() - a);
                  }));
              }
              function s(a) {
                var b = m - n;
                if (a < b) return b - a;
                a = a % m;
                if (a > b || a < n) return 0;
                else return b - a;
              }
              function t(a) {
                var b = c("performanceNow")();
                if (b > k) {
                  a = s(a);
                  if (a > 0) {
                    b = b + a;
                    w(b);
                    k = b;
                  }
                }
                u() && r();
              }
              function u() {
                return i < h.length;
              }
              function v() {
                while (u()) {
                  var a = h[i];
                  i++;
                  if (a) return a;
                }
                return null;
              }
              function w(a) {
                var b;
                while (c("performanceNow")() < a && (b = v())) b(new y(a));
              }
              function x(a) {
                var b = p(a);
                b = h[b];
                b && (q(a), b(new y(null)));
              }
              var y = (function () {
                function a(a) {
                  (this.didTimeout = a == null), (this.$1 = a);
                }
                var b = a.prototype;
                b.timeRemaining = function () {
                  var a = this.$1;
                  if (a != null) {
                    var b = c("performanceNow")();
                    if (b < a) return a - b;
                  }
                  return 0;
                };
                return a;
              })();
              g.requestIdleCallback = b;
              g.cancelIdleCallback = q;
            },
            98
          );
          __d(
            "sdk.IdleCallback",
            ["IdleCallbackImplementation", "sdk.feature"],
            function (a, b, c, d, e, f, g) {
              "use strict";
              a = (function () {
                function a(a, b, d) {
                  d === void 0 &&
                    (d = c("sdk.feature")("idle_callback_wait_time_ms", 2e3)),
                    (this.$1 = d),
                    (this.$3 = b),
                    (this.$2 = a);
                }
                var b = a.prototype;
                b.start = function () {
                  var a = this;
                  if (
                    this.$1 === 0 ||
                    isNaN(this.$1) ||
                    this.$2 === 0 ||
                    isNaN(this.$2)
                  ) {
                    this.$3();
                    return null;
                  }
                  var b = Date.now(),
                    c = this.isBrowserCompatible()
                      ? window.requestIdleCallback
                      : d("IdleCallbackImplementation").requestIdleCallback,
                    e = 0,
                    f = 0,
                    g = function d(g) {
                      if (e > a.$1) {
                        a.$3();
                        return;
                      }
                      var h = Date.now();
                      if (h - b > a.$2) {
                        a.$3();
                        return;
                      }
                      h = g.timeRemaining();
                      e += h >= 49 && f >= 49 ? h : 0;
                      f = h;
                      c(d);
                    };
                  return c(g);
                };
                b.isBrowserCompatible = function () {
                  return typeof window === "undefined"
                    ? !1
                    : typeof window.requestIdleCallback === "function";
                };
                return a;
              })();
              g["default"] = a;
            },
            98
          );
          __d(
            "uuid",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              function a() {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
                  /[xy]/g,
                  function (a) {
                    var b = (Math.random() * 16) | 0;
                    a = a == "x" ? b : (b & 3) | 8;
                    return a.toString(16);
                  }
                );
              }
              f["default"] = a;
            },
            66
          );
          __d(
            "sdk.XFBML.ChatDOM",
            [
              "$InternalEnum",
              "CORSRequest",
              "ChatPluginEntryPointIconEnum",
              "ChatPluginEntryPointLabelEnum",
              "ChatPluginEntryPointSizeEnum",
              "ChatPluginSDKPreLoggingUtils",
              "ChatPluginStyleUtils",
              "DOMPlugin",
              "Log",
              "UrlMap",
              "getJSEnumSafe",
              "performanceAbsoluteNow",
              "sdk.Content",
              "sdk.DOM",
              "sdk.IdleCallback",
              "sdk.XFBML.CustomerChatNew",
              "sdk.fbt",
              "sdk.feature",
              "uuid",
            ],
            function (a, b, c, d, e, f, g) {
              "use strict";
              var h = b("$InternalEnum").Mirrored([
                "WAITING",
                "LOADING",
                "LOADED",
              ]);
              a = (function (a) {
                babelHelpers.inheritsLoose(b, a);
                function b(b, e, f, g) {
                  var i;
                  i =
                    a.call(this, b, e, f, g, {
                      allow_guests: "bool",
                      attribution: "string",
                      greeting_dialog_display: "string",
                      greeting_dialog_delay: "string",
                      logged_in_greeting: "string",
                      logged_out_greeting: "string",
                      minimized: "bool",
                      page_id: "string",
                      theme_color: "string",
                      override: "string",
                      attribution_version: "string",
                      is_loaded_by_facade: "bool",
                    }) || this;
                  e = c("performanceAbsoluteNow")();
                  f = c("uuid")();
                  var j = window.location.href;
                  ES("Object", "assign", !1, i.params, {
                    current_url: j,
                    log_id: f,
                    request_time: e,
                    is_loaded_by_facade: !0,
                    should_use_new_domain: g.should_use_new_domain,
                  });
                  d("ChatPluginSDKPreLoggingUtils").preLogging(
                    Boolean(g.should_use_new_domain),
                    "chat_plugin_sdk_facade_create",
                    i.params,
                    !1
                  );
                  d("sdk.DOM").remove(b);
                  d("sdk.Content").append(b);
                  i.$ChatDOMFacade3 = document.createElement("div");
                  i.$ChatDOMFacade1 = h.WAITING;
                  i.$ChatDOMFacade2 = !1;
                  i.$ChatDOMFacade6 = !1;
                  i.$ChatDOMFacade8 = "standard";
                  i.$ChatDOMFacade9 = "none";
                  i.$ChatDOMFacade10 = "none";
                  i.$ChatDOMFacade11 = "left";
                  i.$ChatDOMFacade12 = 0;
                  i.$ChatDOMFacade13 = 0;
                  i.$ChatDOMFacade14 = !1;
                  i.$ChatDOMFacade15 = Boolean(g.should_use_new_domain);
                  i.shadowCss = ["css:fb.shadow.css.chatdom"];
                  i.$ChatDOMFacade4 = c("performanceAbsoluteNow")();
                  d("Log").info("facadeperf: Started browser idle loader.");
                  i.$ChatDOMFacade5 = new (c("sdk.IdleCallback"))(
                    c("sdk.feature")("chat_plugin_facade_timeout_ms", 8e3),
                    function () {
                      var a = c("performanceAbsoluteNow")();
                      d("Log").info(
                        "facadeperf: Idle callback starts full load in %sms.",
                        a - i.$ChatDOMFacade4
                      );
                      i.$ChatDOMFacade16(!1, !1);
                    }
                  ).start();
                  return i;
                }
                var e = b.prototype;
                e.render = function (a) {
                  var b = this;
                  this.$ChatDOMFacade3.classList.add("container");
                  a = this.$ChatDOMFacade15
                    ? d("UrlMap").resolve("social_plugin") +
                      "/customer_chat/facade/"
                    : d("UrlMap").resolve("www") +
                      "/plugins/customer_chat/facade/";
                  c("CORSRequest").execute(a, "get", this.params, function (a) {
                    var e,
                      f = c("performanceAbsoluteNow")();
                    d("Log").info(
                      "facadeperf: CORS request completed in %sms.",
                      f - b.$ChatDOMFacade4
                    );
                    if (a.error) return;
                    b.$ChatDOMFacade11 = a.alignment;
                    b.$ChatDOMFacade12 = a.bottom_spacing;
                    b.$ChatDOMFacade13 = a.side_spacing;
                    f = a.theme_color;
                    b.$ChatDOMFacade8 =
                      (e = c("getJSEnumSafe")(
                        c("ChatPluginEntryPointSizeEnum"),
                        (e = a.entry_point_size) == null
                          ? void 0
                          : e.toUpperCase()
                      )) != null
                        ? e
                        : "standard";
                    b.$ChatDOMFacade9 =
                      (e = c("ChatPluginEntryPointLabelEnum").cast(
                        a.entry_point_label
                      )) != null
                        ? e
                        : "none";
                    b.$ChatDOMFacade10 =
                      (e = c("ChatPluginEntryPointIconEnum").cast(
                        a.entry_point_icon_enum
                      )) != null
                        ? e
                        : "none";
                    b.$ChatDOMFacade14 =
                      a.away_hours_enabled && !a.is_page_away;
                    if (b.$ChatDOMFacade9 === "none") {
                      e = document.createElement("div");
                      d("sdk.DOM").html(e, a.entry_point_icon_svg);
                      e = e == null ? void 0 : e.outerHTML;
                      d("sdk.DOM").html(b.$ChatDOMFacade3, e);
                    } else {
                      e = a.entry_point_icon_svg;
                      d("sdk.DOM").html(
                        b.$ChatDOMFacade3,
                        b.$ChatDOMFacade17(e)
                      );
                    }
                    e = d("ChatPluginStyleUtils").getEntryPointStyle(
                      a.alignment,
                      a.bottom_spacing,
                      a.side_spacing,
                      !1,
                      !0,
                      a.entry_point_label,
                      b.$ChatDOMFacade8
                    );
                    ES("Object", "assign", !1, b.$ChatDOMFacade3.style, e);
                    b.$ChatDOMFacade3.style.backgroundColor = f;
                    if (b.$ChatDOMFacade14) {
                      e = d(
                        "ChatPluginStyleUtils"
                      ).getAvailabilityStatusStyleText(
                        a.alignment,
                        a.bottom_spacing,
                        a.side_spacing,
                        a.entry_point_label,
                        a.entry_point_icon_enum,
                        b.$ChatDOMFacade8,
                        !1,
                        !0
                      );
                      f = document.createElement("div");
                      ES("Object", "assign", !1, f.style, e);
                      b.$ChatDOMFacade3.append(f);
                    }
                    d("ChatPluginSDKPreLoggingUtils").preLogging(
                      b.$ChatDOMFacade15,
                      "chat_plugin_sdk_facade_load",
                      b.params
                    );
                  });
                  this.$ChatDOMFacade3.addEventListener("click", function (a) {
                    b.$ChatDOMFacade16(!0, !0);
                  });
                  return this.$ChatDOMFacade3;
                };
                e.$ChatDOMFacade18 = function (a) {
                  switch (a) {
                    case "chat":
                      return c("sdk.fbt")._("Chat");
                    case "help":
                      return c("sdk.fbt")._("Help");
                    case "ask_us":
                      return c("sdk.fbt")._("Ask us");
                    case "none":
                      return "";
                  }
                };
                e.$ChatDOMFacade19 = function () {
                  var a;
                  (a = this.element.parentNode) == null
                    ? void 0
                    : a.removeChild(this.element);
                };
                e.$ChatDOMFacade20 = function () {
                  if (this.$ChatDOMFacade2 || this.$ChatDOMFacade1 === h.LOADED)
                    return;
                  if (this.$ChatDOMFacade9 === "none") {
                    var a = this.$ChatDOMFacade8 === "compact" ? 24 : 36;
                    a = this.$ChatDOMFacade21(a);
                    d("sdk.DOM").html(
                      this.$ChatDOMFacade3,
                      '\n          <div class="centered-container">\n            ' +
                        a +
                        "\n          </div>\n        "
                    );
                  } else {
                    a = this.$ChatDOMFacade8 === "compact" ? 20 : 24;
                    a = this.$ChatDOMFacade21(a);
                    if (this.$ChatDOMFacade10 === "none") {
                      var b =
                        this.$ChatDOMFacade8 === "compact"
                          ? d("ChatPluginStyleUtils")
                              .LABELED_ENTRY_POINT_COMPACT_ICON_MARGIN_RIGHT
                          : d("ChatPluginStyleUtils")
                              .LABELED_ENTRY_POINT_STANDARD_ICON_MARGIN_RIGHT;
                      d("sdk.DOM").html(
                        this.$ChatDOMFacade3.children[0],
                        this.$ChatDOMFacade22(b, a) +
                          this.$ChatDOMFacade3.children[0].innerHTML
                      );
                      if (this.$ChatDOMFacade14) {
                        b = d(
                          "ChatPluginStyleUtils"
                        ).getAvailabilityStatusStyleText(
                          this.$ChatDOMFacade11,
                          this.$ChatDOMFacade12,
                          this.$ChatDOMFacade13,
                          this.$ChatDOMFacade9,
                          "chat_round_icon",
                          this.$ChatDOMFacade8,
                          !1,
                          !1
                        );
                        var c = document.createElement("div");
                        ES("Object", "assign", !1, c.style, b);
                        d("sdk.DOM").remove(this.$ChatDOMFacade3.children[1]);
                        this.$ChatDOMFacade3.append(c);
                      }
                    } else
                      d("sdk.DOM").html(
                        this.$ChatDOMFacade3.children[0].children[0],
                        a
                      );
                  }
                  this.$ChatDOMFacade2 = !0;
                };
                e.$ChatDOMFacade17 = function (a) {
                  var b =
                      this.$ChatDOMFacade8 === "compact"
                        ? d("ChatPluginStyleUtils")
                            .LABELED_ENTRY_POINT_COMPACT_HEIGHT
                        : d("ChatPluginStyleUtils")
                            .LABELED_ENTRY_POINT_STANDARD_HEIGHT,
                    c =
                      this.$ChatDOMFacade8 === "compact"
                        ? d("ChatPluginStyleUtils")
                            .LABELED_ENTRY_POINT_COMPACT_FONT_SIZE
                        : d("ChatPluginStyleUtils")
                            .LABELED_ENTRY_POINT_STANDARD_FONT_SIZE,
                    e =
                      this.$ChatDOMFacade8 === "compact"
                        ? d("ChatPluginStyleUtils")
                            .LABELED_ENTRY_POINT_COMPACT_LINE_HEIGHT
                        : d("ChatPluginStyleUtils")
                            .LABELED_ENTRY_POINT_STANDARD_LINE_HEIGHT,
                    f =
                      this.$ChatDOMFacade8 === "compact"
                        ? d("ChatPluginStyleUtils")
                            .LABELED_ENTRY_POINT_COMPACT_ICON_MARGIN_RIGHT
                        : d("ChatPluginStyleUtils")
                            .LABELED_ENTRY_POINT_STANDARD_ICON_MARGIN_RIGHT,
                    g =
                      this.$ChatDOMFacade8 === "compact"
                        ? d("ChatPluginStyleUtils")
                            .LABELED_ENTRY_POINT_COMPACT_PADDING_HORIZONTAL
                        : d("ChatPluginStyleUtils")
                            .LABELED_ENTRY_POINT_STANDARD_PADDING_HORIZONTAL;
                  return (
                    '\n      <div class="label-container" style="\n        height: ' +
                    b +
                    "px;\n        padding: 0 " +
                    g +
                    'px\n      ">\n        ' +
                    (a &&
                      '\n            <div class="label-container-icon" style="\n              margin-right: ' +
                        f +
                        'px;\n            ">\n              ' +
                        a +
                        "\n            </div>\n          ") +
                    '\n        <div\n          class="label-container-label"\n          style="\n            font-size: ' +
                    c +
                    "px;\n            line-height: " +
                    e +
                    'px;\n        ">' +
                    this.$ChatDOMFacade18(this.$ChatDOMFacade9).toString() +
                    "</div>\n      </div>\n    "
                  );
                };
                e.$ChatDOMFacade22 = function (a, b) {
                  return (
                    '\n      <div class="label-container-icon" style="\n        margin-right: ' +
                    a +
                    'px;\n      ">\n        ' +
                    b +
                    "\n      </div>\n    "
                  );
                };
                e.$ChatDOMFacade21 = function (a) {
                  return (
                    '\n      <svg class="spinning" x="0" y="0" width="' +
                    a +
                    '" height="' +
                    a +
                    '" viewbox="0 0 60 60">\n        <circle class="path" cx="30" cy="30" r="24" fill="none" stroke-width="6"></circle>\n      </svg>\n    '
                  );
                };
                e.$ChatDOMFacade23 = function (a) {
                  if (a && this.$ChatDOMFacade7 && !this.$ChatDOMFacade6) {
                    this.$ChatDOMFacade6 = !0;
                    var b = this.$ChatDOMFacade7;
                    b.subscribe("iframes_loaded", function (a) {
                      b.showDialog();
                    });
                  }
                };
                e.$ChatDOMFacade16 = function (a, b) {
                  var e = this;
                  b && this.$ChatDOMFacade20();
                  this.$ChatDOMFacade23(a);
                  if (this.$ChatDOMFacade1 !== h.WAITING) return;
                  this.$ChatDOMFacade1 = h.LOADING;
                  b = document.createElement("div");
                  d("sdk.Content").append(b, this.element);
                  b = new (c("sdk.XFBML.CustomerChatNew"))(
                    b,
                    "fb",
                    "customerchat",
                    this.params
                  );
                  this.$ChatDOMFacade7 = b;
                  b.subscribe("xd.mpn.setupIconIframe", function (a) {
                    (e.$ChatDOMFacade1 = h.LOADED), e.$ChatDOMFacade19();
                  });
                  this.$ChatDOMFacade23(a);
                  b.process();
                };
                return b;
              })(d("DOMPlugin").DOMPlugin);
              g["default"] = a;
            },
            98
          );
          __d(
            "IframePluginClass",
            [
              "Log",
              "QueryString",
              "UrlMap",
              "guid",
              "sdk.Auth.LoginStatus",
              "sdk.AuthUtils",
              "sdk.DOM",
              "sdk.Event",
              "sdk.Observable",
              "sdk.PlatformVersioning",
              "sdk.PluginUtils",
              "sdk.Runtime",
              "sdk.UA",
              "sdk.URI",
              "sdk.XD",
              "sdk.createIframe",
            ],
            function (a, b, c, d, e, f, g) {
              a = (function (a) {
                babelHelpers.inheritsLoose(b, a);
                function b(b, e, f, g, h) {
                  var i;
                  h === void 0 && (h = null);
                  i = a.call(this) || this;
                  f = f.replace(/-/g, "_");
                  i.$IframePluginClass2 = !1;
                  i.config =
                    h != null
                      ? h
                      : { fluid: !1, mobile_fullsize: !1, full_width: !1 };
                  var j = d("sdk.PluginUtils").getVal(g, "plugin_id");
                  i.subscribe(
                    "xd.resize",
                    d("sdk.PluginUtils").resizeBubbler(j)
                  );
                  i.subscribe(
                    "xd.resize.flow",
                    d("sdk.PluginUtils").resizeBubbler(j)
                  );
                  i.subscribe("xd.resize.flow", function (a) {
                    ES("Object", "assign", !1, i.iframeOptions.root.style, {
                      verticalAlign: "bottom",
                      overflow: "",
                    }),
                      d("sdk.PluginUtils").resize(
                        i.iframeOptions.root,
                        d("sdk.PluginUtils").parse(a.width),
                        d("sdk.PluginUtils").parse(a.height)
                      ),
                      i.updateLift(),
                      window.clearTimeout(i.$IframePluginClass1);
                  });
                  i.subscribe("xd.resize", function (a) {
                    ES("Object", "assign", !1, i.iframeOptions.root.style, {
                      verticalAlign: "bottom",
                      overflow: "",
                    }),
                      d("sdk.PluginUtils").resize(
                        i.iframeOptions.root,
                        d("sdk.PluginUtils").parse(a.width),
                        d("sdk.PluginUtils").parse(a.height)
                      ),
                      d("sdk.PluginUtils").resize(
                        i.iframe,
                        d("sdk.PluginUtils").parse(a.width),
                        d("sdk.PluginUtils").parse(a.height)
                      ),
                      (i.$IframePluginClass2 = !0),
                      i.updateLift(),
                      window.clearTimeout(i.$IframePluginClass1);
                  });
                  i.subscribe("xd.resize.iframe", function (a) {
                    d("sdk.PluginUtils").resize(
                      i.iframe,
                      d("sdk.PluginUtils").parse(a.width),
                      d("sdk.PluginUtils").parse(a.height)
                    ),
                      (i.$IframePluginClass2 = !0),
                      i.updateLift(),
                      window.clearTimeout(i.$IframePluginClass1);
                  });
                  i.subscribe("xd.sdk_event", function (a) {
                    var c = ES("JSON", "parse", !1, a.data);
                    c.pluginID = j;
                    d("sdk.Event").fire(a.event, c, b);
                  });
                  h = g.should_use_new_domain
                    ? d("UrlMap").resolve("social_plugin") + "/" + f + ".php?"
                    : d("UrlMap").resolve("www") + "/plugins/" + f + ".php?";
                  var k = {};
                  d("sdk.PluginUtils").validate(i.getParams(), b, g, k);
                  d("sdk.PluginUtils").validate(
                    d("sdk.PluginUtils").baseParams,
                    b,
                    g,
                    k
                  );
                  ES("Object", "assign", !1, k, {
                    app_id: c("sdk.Runtime").getClientID(),
                    locale: c("sdk.Runtime").getLocale(),
                    sdk: "joey",
                    kid_directed_site: c("sdk.Runtime").getKidDirectedSite(),
                    channel: d("sdk.XD").handler(
                      function (a) {
                        a != null && i.inform("xd." + a.type, a);
                      },
                      "parent.parent",
                      !0
                    ),
                  });
                  i.shouldIgnoreWidth() && (k.width = void 0);
                  k.container_width = b.offsetWidth;
                  d("sdk.DOM").addCss(b, "fb_iframe_widget");
                  var l = c("guid")();
                  i.subscribe("xd.verify", function (a) {
                    d("sdk.XD").sendToFacebook(l, {
                      method: "xd/verify",
                      params: ES("JSON", "stringify", !1, a.token),
                    });
                  });
                  i.subscribe("xd.refreshLoginStatus", function () {
                    d("sdk.AuthUtils").removeLogoutState(),
                      c("sdk.Auth.LoginStatus").getLoginStatus(
                        ES(
                          i.inform,
                          "bind",
                          !0,
                          babelHelpers.assertThisInitialized(i),
                          "login.status"
                        ),
                        !0
                      );
                  });
                  g = document.createElement("span");
                  ES("Object", "assign", !1, g.style, {
                    verticalAlign: "top",
                    width: k.lazy ? "1px" : "0px",
                    height: k.lazy ? "1px" : "0px",
                    overflow: "hidden",
                  });
                  i.element = b;
                  i.ns = e;
                  i.tag = f;
                  i.params = k;
                  i.iframeOptions = {
                    root: g,
                    url: h + c("QueryString").encode(k),
                    name: l,
                    width:
                      i.config.mobile_fullsize && c("sdk.UA").mobile()
                        ? void 0
                        : k.width || 1e3,
                    height: k.height || 1e3,
                    style: { border: "none", visibility: "hidden" },
                    title: i.ns + ":" + i.tag + " Facebook Social Plugin",
                    testid: i.ns + ":" + i.tag + " Facebook Social Plugin",
                    onload: function () {
                      return i.inform("render");
                    },
                    onerror: function () {
                      return d("sdk.PluginUtils").collapseIframe(i.iframe);
                    },
                    lazy: k.lazy,
                  };
                  i.config.fluid &&
                    k.width !== "auto" &&
                    (d("sdk.DOM").addCss(
                      i.element,
                      "fbiframe_widget_fluid_desktop"
                    ),
                    !k.width &&
                      i.config.full_width &&
                      ((i.element.style.width = "100%"),
                      (i.iframeOptions.root.style.width = "100%"),
                      (i.iframeOptions.style.width = "100%"),
                      (i.params.container_width = i.element.offsetWidth),
                      (i.iframeOptions.url =
                        h + c("QueryString").encode(i.params))));
                  return i;
                }
                var e = b.prototype;
                e.shouldIgnoreWidth = function () {
                  return c("sdk.UA").mobile() && this.config.mobile_fullsize;
                };
                e.useInlineHeightForMobile = function () {
                  return !0;
                };
                e.process = function () {
                  var a = this;
                  if (c("sdk.Runtime").getIsVersioned()) {
                    d("sdk.PlatformVersioning").assertVersionIsSet();
                    var b = new (c("sdk.URI"))(this.iframeOptions.url);
                    this.iframeOptions.url = b
                      .setPath(
                        "/" + c("sdk.Runtime").getVersion() + b.getPath()
                      )
                      .toString();
                  }
                  b = babelHelpers["extends"]({}, this.params);
                  delete b.channel;
                  var e = c("QueryString").encode(b);
                  if (
                    this.element.getAttribute("fb-iframe-plugin-query") == e
                  ) {
                    d("Log").info(
                      "Skipping render: %s:%s %s",
                      this.ns,
                      this.tag,
                      e
                    );
                    this.inform("render");
                    return;
                  }
                  this.element.setAttribute("fb-iframe-plugin-query", e);
                  this.subscribe("render", function () {
                    d("sdk.Event").fire("iframeplugin:onload"),
                      (a.iframe.style.visibility = "visible"),
                      a.$IframePluginClass2 ||
                        d("sdk.PluginUtils").collapseIframe(a.iframe);
                  });
                  while (this.element.firstChild)
                    this.element.removeChild(this.element.firstChild);
                  this.element.appendChild(this.iframeOptions.root);
                  var f = c("sdk.UA").mobile() ? 120 : 45;
                  this.$IframePluginClass1 = window.setTimeout(function () {
                    d("sdk.PluginUtils").collapseIframe(a.iframe),
                      d("Log").warn(
                        "%s:%s failed to resize in %ss",
                        a.ns,
                        a.tag,
                        f
                      );
                  }, f * 1e3);
                  this.iframe = c("sdk.createIframe")(this.iframeOptions);
                  d("sdk.Event").fire("iframeplugin:create");
                  if (c("sdk.UA").mobile() || b.width === "auto") {
                    this.useInlineHeightForMobile() &&
                      d("sdk.DOM").addCss(
                        this.element,
                        "fbiframe_widget_fluid"
                      );
                    if (!this.iframeOptions.width) {
                      ES("Object", "assign", !1, this.element.style, {
                        display: "block",
                        width: "100%",
                        height: "auto",
                      });
                      ES(
                        "Object",
                        "assign",
                        !1,
                        this.iframeOptions.root.style,
                        { width: "100%", height: "auto" }
                      );
                      e = { height: "auto", position: "static", width: "100%" };
                      (c("sdk.UA").iphone() || c("sdk.UA").ipad()) &&
                        ES("Object", "assign", !1, e, {
                          width: "220px",
                          minWidth: "100%",
                        });
                      ES("Object", "assign", !1, this.iframe.style, e);
                    }
                  }
                };
                e.getParams = function () {
                  return this.params;
                };
                e.updateLift = function () {
                  var a =
                    this.iframe.style.width ===
                      this.iframeOptions.root.style.width &&
                    this.iframe.style.height ===
                      this.iframeOptions.root.style.height;
                  (a ? d("sdk.DOM").removeCss : d("sdk.DOM").addCss)(
                    this.iframe,
                    "fbiframe_widget_lift"
                  );
                };
                return b;
              })(d("sdk.Observable").Observable);
              g["default"] = a;
            },
            98
          );
          __d(
            "MPNExplicitUserInteractions",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              var g = 36e5;
              function a(a) {
                return a == null ? !1 : Date.now() <= a + g;
              }
              f.hasUserInteraction = a;
            },
            66
          );
          __d(
            "MPNLocalState",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              a = {
                LANDING_BANNER: 1,
                WELCOME_PAGE: 2,
                ITP_CONTINUE: 3,
                THREAD_VIEW: 4,
                BUBBLE: 5,
                REENGAGEMENT_COLLAPSED_VIEW: 6,
                REENGAGEMENT_EXPANDED_VIEW: 7,
              };
              b = {
                CHAT_NOT_STARTED: 1,
                LOGGED_IN_CHAT_STARTED: 2,
                GUEST_CHAT_STARTED: 3,
              };
              c = "__fb_chat_plugin";
              f.MPNLocalStatePath = a;
              f.MPNChatState = b;
              f.LOCAL_STATE_KEY = c;
            },
            66
          );
          __d(
            "getFacebookOriginForTarget",
            ["Log"],
            function (a, b, c, d, e, f, g) {
              function a(a, b) {
                b === void 0 && (b = top);
                var c = 0,
                  e = !1,
                  f = 200;
                window.addEventListener(
                  "message",
                  function (c) {
                    c.source === b &&
                      c.data.xdArbiterAck &&
                      (/\.facebook\.(com|net)$/.test(c.origin) &&
                      /^https:/.test(c.origin)
                        ? e === !1 &&
                          ((e = !0),
                          d("Log").debug(
                            "initXdArbiter got xdArbiterAck from " + c.origin
                          ),
                          a(c.origin))
                        : d("Log").error(
                            "xdAbiterAck was not from Facebook: ",
                            c.origin
                          ));
                  },
                  !1
                );
                b.postMessage({ xdArbiterSyn: !0 }, "*");
                c = window.setInterval(function () {
                  !e && f > 0
                    ? (f--,
                      d("Log").debug("resending xdArbiterSyn"),
                      b.postMessage({ xdArbiterSyn: !0 }, "*"))
                    : window.clearInterval(c);
                }, 200);
              }
              g["default"] = a;
            },
            98
          );
          __d(
            "MPNSingletonProvider",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              a = (function () {
                function a(a) {
                  (this.$1 = null), (this.$2 = a);
                }
                var b = a.prototype;
                b.get = function () {
                  this.$1 == null && (this.$1 = this.$2());
                  return this.$1;
                };
                b.clear = function () {
                  this.$1 = null;
                };
                return a;
              })();
              f["default"] = a;
            },
            66
          );
          __d(
            "sdk.DocumentTitle",
            [],
            function (a, b, c, d, e, f) {
              var g = document.title,
                h = null,
                i = 1500,
                j = null,
                k = !1;
              function l() {
                h !== null
                  ? !k
                    ? m(h)
                    : n()
                  : (clearInterval(j), (j = null), n());
              }
              function m(a) {
                (document.title = a), (k = !0);
              }
              function n() {
                o(g), (k = !1);
              }
              function a() {
                return g;
              }
              function o(a) {
                document.title = a;
              }
              function b(a) {
                h = a;
                j === null && (j = setInterval(l, i));
                return {
                  stop: function () {
                    h = null;
                  },
                };
              }
              f.get = a;
              f.set = o;
              f.blink = b;
            },
            66
          );
          __d(
            "sdk.cp.Constants",
            ["MPNLocalState", "UrlMap", "sdk.Runtime"],
            function (a, b, c, d, e, f, g) {
              "use strict";
              a = c("sdk.Runtime").getIsVersioned()
                ? d("UrlMap").resolve("www") +
                  "/" +
                  c("sdk.Runtime").getVersion() +
                  "/plugins/customer_chat/bubble"
                : d("UrlMap").resolve("www") + "/plugins/customer_chat/bubble";
              b = c("sdk.Runtime").getIsVersioned()
                ? d("UrlMap").resolve("social_plugin") +
                  "/" +
                  c("sdk.Runtime").getVersion() +
                  "/customer_chat/bubble"
                : d("UrlMap").resolve("social_plugin") +
                  "/customer_chat/bubble";
              e = {
                attribute: {
                  alignment: "alignment",
                  mobilePath: "mobile_path",
                  desktopBottomSpacing: "desktop_bottom_spacing",
                },
                path: {
                  landingPage: "/",
                  welcomePage: "/welcome",
                  bubble: "/bubble",
                  itp: "/itpcontinue",
                },
                localStateKey: d("MPNLocalState").LOCAL_STATE_KEY,
                animationEvents: [
                  "animationend",
                  "mozAnimationEnd",
                  "MSAnimationEnd",
                  "oAnimationEnd",
                  "webkitAnimationEnd",
                ],
                blankFrameURL: a,
                blankFrameNewDomainURL: b,
              };
              g["default"] = e;
            },
            98
          );
          __d(
            "sdk.cp.Actions",
            [
              "DOMEventListener",
              "MPNExplicitUserInteractions",
              "MPNLocalState",
              "MPNSingletonProvider",
              "sdk.DOM",
              "sdk.DocumentTitle",
              "sdk.URI",
              "sdk.WebStorage",
              "sdk.cp.Constants",
            ],
            function (a, b, c, d, e, f, g) {
              "use strict";
              var h = (function () {
                function a() {}
                var b = a.prototype;
                b.reloadIframe = function (a, b) {
                  var e;
                  if (a == null) return;
                  var f = new (c("sdk.URI"))(a.src),
                    g = f.getQueryData();
                  g.local_state =
                    (e = d("sdk.WebStorage").getLocalStorage()) == null
                      ? void 0
                      : e.getItem(c("sdk.cp.Constants").localStateKey);
                  g.request_time = Date.now();
                  (b === "true" || this.getExplicitUserInteractionFlag()) &&
                    (g.has_explicit_interaction = "1");
                  g.is_implicit_reload = "1";
                  f.setQueryData(g);
                  a.src = f.valueOf();
                };
                b.getExplicitUserInteractionFlag = function () {
                  var a = d("sdk.WebStorage").getLocalStorage(),
                    b = null;
                  if (a != null)
                    try {
                      b = a.getItem(d("MPNLocalState").LOCAL_STATE_KEY);
                    } catch (a) {
                      return !1;
                    }
                  if (b != null)
                    try {
                      a = ES("JSON", "parse", !1, b);
                      return d(
                        "MPNExplicitUserInteractions"
                      ).hasUserInteraction(a == null ? void 0 : a.euit);
                    } catch (a) {
                      return !1;
                    }
                  return !1;
                };
                b.setDialogAppearance = function (a, b) {
                  if (a == null) return;
                  var c = b.height,
                    e = b.boxShadow,
                    f = b.margin,
                    g = b.width;
                  b = b.bottom;
                  e != null && d("sdk.DOM").setStyle(a, "boxShadow", e);
                  f != null && d("sdk.DOM").setStyle(a, "margin", f);
                  c != null && d("sdk.DOM").setStyle(a, "height", c);
                  g != null && d("sdk.DOM").setStyle(a, "width", g);
                  b != null && d("sdk.DOM").setStyle(a, "bottom", b);
                };
                b.blinkPageTitle = function (a) {
                  var b = this;
                  a != null
                    ? (this.$2(),
                      (this.$1 = d("sdk.DocumentTitle").blink(a)),
                      c("DOMEventListener").add(window, "focus", function (a) {
                        b.$2();
                      }))
                    : this.$1 && a == null && this.$2();
                };
                b.$2 = function () {
                  this.$1 != null && (this.$1.stop(), (this.$1 = null));
                };
                return a;
              })();
              a = new (c("MPNSingletonProvider"))(function () {
                return new h();
              });
              b = a.get();
              g["default"] = b;
            },
            98
          );
          __d(
            "sdk.cp.Animation",
            ["sdk.DOM", "sdk.UA", "sdk.cp.Constants"],
            function (a, b, c, d, e, f, g) {
              "use strict";
              function a(a) {
                if (!a) return;
                var b = d("sdk.DOM").getAttr(
                  a,
                  c("sdk.cp.Constants").attribute.alignment
                );
                a = d("sdk.DOM").getAttr(
                  a,
                  c("sdk.cp.Constants").attribute.mobilePath
                );
                var e = c("sdk.UA").mobile(),
                  f;
                if (e)
                  switch (a) {
                    case c("sdk.cp.Constants").path.landingPage:
                      return "fb_mpn_mobile_landing_page_slide_up";
                    case c("sdk.cp.Constants").path.welcomePage:
                    case c("sdk.cp.Constants").path.bubble:
                    case c("sdk.cp.Constants").path.itp:
                      return null;
                    default:
                      return "fb_mpn_mobile_bounce_in";
                  }
                else
                  switch (b) {
                    case "left":
                      f = "fb_customer_chat_bounce_in_from_left";
                      break;
                    case "right":
                    default:
                      f = "fb_customer_chat_bounce_in_v2";
                  }
                return f;
              }
              function b(a) {
                if (!a) return;
                var b = d("sdk.DOM").getAttr(
                  a,
                  c("sdk.cp.Constants").attribute.alignment
                );
                a = d("sdk.DOM").getAttr(
                  a,
                  c("sdk.cp.Constants").attribute.mobilePath
                );
                var e = c("sdk.UA").mobile(),
                  f;
                if (e)
                  switch (a) {
                    case c("sdk.cp.Constants").path.landingPage:
                      return b === "left"
                        ? "fb_mpn_mobile_landing_page_slide_out_from_left"
                        : "fb_mpn_mobile_landing_page_slide_out";
                    case c("sdk.cp.Constants").path.bubble:
                      return "fb_mpn_mobile_bounce_out_v2";
                    default:
                      return "fb_mpn_mobile_bounce_out";
                  }
                else
                  switch (b) {
                    case "left":
                      f = "fb_customer_chat_bounce_out_from_left";
                      break;
                    case "right":
                    default:
                      f = "fb_customer_chat_bounce_out_v2";
                  }
                return f;
              }
              g.iframeBounceInAnimation = a;
              g.iframeBounceOutAnimation = b;
            },
            98
          );
          __d(
            "sdk.cp.Storage",
            ["MPNSingletonProvider", "sdk.WebStorage", "sdk.cp.Constants"],
            function (a, b, c, d, e, f, g) {
              "use strict";
              var h = (function () {
                function a() {}
                var b = a.prototype;
                b.setState = function (a) {
                  var b = d("sdk.WebStorage").getLocalStorageForRead();
                  if (!b) return;
                  try {
                    if (a == null)
                      b.removeItem(c("sdk.cp.Constants").localStateKey);
                    else {
                      var e = b.getItem(c("sdk.cp.Constants").localStateKey);
                      if (e == null)
                        b.setItem(
                          c("sdk.cp.Constants").localStateKey,
                          ES(
                            "JSON",
                            "stringify",
                            !1,
                            ES("JSON", "parse", !1, a)
                          )
                        );
                      else {
                        e = ES("JSON", "parse", !1, e);
                        a = ES("JSON", "parse", !1, a);
                        b.setItem(
                          c("sdk.cp.Constants").localStateKey,
                          ES(
                            "JSON",
                            "stringify",
                            !1,
                            babelHelpers["extends"]({}, e, a)
                          )
                        );
                      }
                    }
                  } catch (a) {
                    return;
                  }
                };
                b.getStateJSON = function () {
                  var a = d("sdk.WebStorage").getLocalStorageForRead();
                  if (!a) return "{}";
                  a = a.getItem(c("sdk.cp.Constants").localStateKey);
                  return a == null
                    ? "{}"
                    : ES("JSON", "stringify", !1, ES("JSON", "parse", !1, a));
                };
                return a;
              })();
              a = new (c("MPNSingletonProvider"))(function () {
                return new h();
              });
              b = a.get();
              g["default"] = b;
            },
            98
          );
          __d(
            "sdk.XFBML.CustomerChatNew",
            [
              "ChatPluginSDKPreLoggingUtils",
              "DOMEventListener",
              "IframePluginClass",
              "Log",
              "MPNExplicitUserInteractions",
              "MPNLocalState",
              "QueryString",
              "UrlMap",
              "getFacebookOriginForTarget",
              "performanceAbsoluteNow",
              "sdk.Content",
              "sdk.DOM",
              "sdk.DialogUtils",
              "sdk.Event",
              "sdk.UA",
              "sdk.WebStorage",
              "sdk.XD",
              "sdk.XFBML.CustomerChatWrapper",
              "sdk.cp.Actions",
              "sdk.cp.Animation",
              "sdk.cp.Constants",
              "sdk.cp.Storage",
              "sdk.createIframe",
            ],
            function (a, b, c, d, e, f, g) {
              "use strict";
              a = (function (a) {
                babelHelpers.inheritsLoose(b, a);
                function b(b, c, e, f) {
                  var g;
                  g = a.call(this, b, c, e, f) || this;
                  g.$CustomerChat1 = null;
                  g.$CustomerChat2 = null;
                  g.$CustomerChat3 = null;
                  g.$CustomerChat4 = null;
                  g.$CustomerChat5 = null;
                  g.$CustomerChat6 = null;
                  g.$CustomerChat7 = null;
                  g.$CustomerChat8 = null;
                  g.$CustomerChat9 = null;
                  g.$CustomerChat10 = null;
                  g.$CustomerChat11 = null;
                  g.$CustomerChat12 = !1;
                  g.$CustomerChat13 = null;
                  g.$CustomerChat14 = !1;
                  g.$CustomerChat15 = !1;
                  g.show = function (a) {
                    a === void 0 && (a = !0),
                      (g.$CustomerChat15 = !1),
                      g.$CustomerChat1 != null &&
                        d("sdk.DOM").setStyle(
                          g.$CustomerChat1,
                          "display",
                          "inline"
                        ),
                      a && g.$CustomerChat30(g.$CustomerChat4),
                      d("sdk.Event").fire("customerchat.show"),
                      g.$CustomerChat34("show");
                  };
                  g.hide = function () {
                    (g.$CustomerChat15 = !0),
                      g.$CustomerChat1 != null &&
                        d("sdk.DOM").setStyle(
                          g.$CustomerChat1,
                          "display",
                          "none"
                        ),
                      g.$CustomerChat29(g.$CustomerChat4),
                      d("sdk.Event").fire("customerchat.hide"),
                      g.$CustomerChat34("hide");
                  };
                  g.showDialog = function () {
                    g.$CustomerChat1 != null &&
                      d("sdk.DOM").setStyle(
                        g.$CustomerChat1,
                        "display",
                        "inline"
                      ),
                      g.$CustomerChat30(g.$CustomerChat4),
                      g.$CustomerChat34("showDialog");
                  };
                  g.hideDialog = function () {
                    g.$CustomerChat29(g.$CustomerChat4),
                      g.$CustomerChat34("hideDialog");
                  };
                  g.update = function (a) {
                    var b;
                    d("sdk.XD").sendToFacebook(
                      (b = g.$CustomerChat5) != null ? b : "",
                      {
                        method: "updateCustomerChat",
                        params: ES("JSON", "stringify", !1, a || {}),
                      }
                    );
                    g.$CustomerChat34("update");
                  };
                  d("sdk.DOM").addCss(b, "fb_invisible_flow");
                  d("sdk.DOM").remove(b);
                  d("sdk.Content").append(b);
                  g.$CustomerChat16 = Boolean(f.should_use_new_domain);
                  g.$CustomerChat17();
                  d("sdk.Event").fire("customerchat.load");
                  g.$CustomerChat18();
                  d("ChatPluginSDKPreLoggingUtils").preLogging(
                    g.$CustomerChat16,
                    "chat_plugin_sdk_dialog_iframe_create",
                    g.params,
                    !1
                  );
                  return g;
                }
                var e = b.prototype;
                e.$CustomerChat17 = function () {
                  var a = d("sdk.WebStorage").getLocalStorage(),
                    b = null;
                  if (a != null)
                    try {
                      b = a.getItem(d("MPNLocalState").LOCAL_STATE_KEY);
                    } catch (a) {
                      d("Log").warn("Failed to access localStorage");
                    }
                  b != null &&
                    ES("Object", "assign", !1, this.params, { local_state: b });
                  if (b != null)
                    try {
                      a = ES("JSON", "parse", !1, b);
                      d("MPNExplicitUserInteractions").hasUserInteraction(
                        a == null ? void 0 : a.euit
                      ) &&
                        ES("Object", "assign", !1, this.params, {
                          has_explicit_interaction: 1,
                        });
                    } catch (a) {
                      d("Log").warn("Invalid local state");
                    }
                  b = c("performanceAbsoluteNow")();
                  ES("Object", "assign", !1, this.params, { request_time: b });
                  a = this.$CustomerChat16
                    ? d("UrlMap").resolve("social_plugin") +
                      "/" +
                      this.tag +
                      ".php?"
                    : d("UrlMap").resolve("www") +
                      "/plugins/" +
                      this.tag +
                      ".php?";
                  this.iframeOptions.url =
                    a + c("QueryString").encode(this.params);
                  this.iframeOptions.title = "";
                };
                e.$CustomerChat18 = function () {
                  var a = this;
                  this.subscribe("render", function () {
                    d("ChatPluginSDKPreLoggingUtils").preLogging(
                      a.$CustomerChat16,
                      "chat_plugin_sdk_dialog_iframe_load",
                      a.params
                    );
                  });
                  this.subscribe("xd.mpn.storeState", function (a) {
                    c("sdk.cp.Storage").setState(a.state);
                  });
                  this.subscribe("xd.mpn.getState", function (b) {
                    b = c("sdk.cp.Storage").getStateJSON();
                    b = { name: "mpnDidFetchState", params: b };
                    a.$CustomerChat19(b);
                    a.$CustomerChat20(b);
                  });
                  this.subscribe("xd.mpn.setupIconIframe", function (b) {
                    a.$CustomerChat21(b);
                  });
                  this.subscribe("xd.mpn.setupDialogIframe", function (b) {
                    a.$CustomerChat22(b);
                  });
                  this.subscribe("xd.mpn.toggleDialogVisibility", function (b) {
                    a.$CustomerChat23(b);
                  });
                  this.subscribe(
                    "xd.mpn.toggleGreetingDialogVisibility",
                    function (b) {
                      a.$CustomerChat24(b);
                    }
                  );
                  this.subscribe(
                    "xd.mpn.updateGreetingAppearance",
                    function (b) {
                      c("sdk.cp.Actions").setDialogAppearance(
                        a.$CustomerChat10,
                        b
                      );
                    }
                  );
                  this.subscribe("xd.mpn.updateDialogAppearance", function (b) {
                    c("sdk.cp.Actions").setDialogAppearance(a.iframe, b);
                  });
                  this.subscribe("xd.mpn.updateIconAppearance", function (b) {
                    c("sdk.cp.Actions").setDialogAppearance(
                      a.$CustomerChat3,
                      b
                    );
                  });
                  this.subscribe("xd.mpn.reload", function (b) {
                    c("sdk.cp.Actions").reloadIframe(
                      a.iframe,
                      b.hasExplicitInteraction
                    );
                  });
                  this.subscribe("xd.mpn.updatePageTitle", function (a) {
                    c("sdk.cp.Actions").blinkPageTitle(a.title);
                  });
                  this.subscribe("xd.mpn.navigateToWelcomePage", function (b) {
                    a.$CustomerChat25(b.isHidden);
                  });
                  d(
                    "sdk.XFBML.CustomerChatWrapper"
                  ).CustomerChatInternalEvent.subscribe(
                    d("sdk.XFBML.CustomerChatWrapper")
                      .CustomerChatInternalEventType.SHOW,
                    this.show
                  );
                  d(
                    "sdk.XFBML.CustomerChatWrapper"
                  ).CustomerChatInternalEvent.subscribe(
                    d("sdk.XFBML.CustomerChatWrapper")
                      .CustomerChatInternalEventType.HIDE,
                    this.hide
                  );
                  d(
                    "sdk.XFBML.CustomerChatWrapper"
                  ).CustomerChatInternalEvent.subscribe(
                    d("sdk.XFBML.CustomerChatWrapper")
                      .CustomerChatInternalEventType.SHOW_DIALOG,
                    this.showDialog
                  );
                  d(
                    "sdk.XFBML.CustomerChatWrapper"
                  ).CustomerChatInternalEvent.subscribe(
                    d("sdk.XFBML.CustomerChatWrapper")
                      .CustomerChatInternalEventType.HIDE_DIALOG,
                    this.hideDialog
                  );
                  d(
                    "sdk.XFBML.CustomerChatWrapper"
                  ).CustomerChatInternalEvent.subscribe(
                    d("sdk.XFBML.CustomerChatWrapper")
                      .CustomerChatInternalEventType.UPDATE,
                    this.update
                  );
                };
                e.$CustomerChat21 = function (a) {
                  var b = this;
                  this.$CustomerChat1 &&
                    d("sdk.DOM").remove(this.$CustomerChat1);
                  var e = a.frameName,
                    f = a.iconSVG,
                    g = d("sdk.DialogUtils").setupNewDialog(),
                    h = ES("JSON", "parse", !1, a.cssText),
                    i = document.createElement("div");
                  f != null &&
                    (d("sdk.DOM").html(i, f),
                    ES("Object", "assign", !1, i.style, h),
                    (i.style.boxShadow = "none"),
                    d("sdk.Content").append(i, g.contentRoot));
                  var j = "blank_" + e;
                  this.$CustomerChat1 = g.dialogElement;
                  this.$CustomerChat3 = c("sdk.createIframe")({
                    url: this.$CustomerChat16
                      ? c("sdk.cp.Constants").blankFrameNewDomainURL
                      : c("sdk.cp.Constants").blankFrameURL,
                    name: j,
                    root: g.contentRoot,
                    tabindex: -1,
                    width: 60,
                    style: h,
                    "data-testid": "bubble_iframe",
                    onload: function () {
                      d("ChatPluginSDKPreLoggingUtils").preLogging(
                        b.$CustomerChat16,
                        "chat_plugin_sdk_icon_iframe_load",
                        b.params
                      ),
                        (b.$CustomerChat2 = j),
                        b.$CustomerChat26(),
                        b.$CustomerChat27(),
                        window.setTimeout(function () {
                          d("sdk.DOM").remove(i);
                        }, 100);
                    },
                  });
                  this.$CustomerChat1 &&
                    this.$CustomerChat1.setAttribute(
                      c("sdk.cp.Constants").attribute.alignment,
                      a.alignment
                    );
                  this.$CustomerChat1 &&
                    d("sdk.Content").append(this.$CustomerChat1);
                  var k = "availabilityStatus_" + e;
                  this.$CustomerChat8 = c("sdk.createIframe")({
                    url: this.$CustomerChat16
                      ? c("sdk.cp.Constants").blankFrameNewDomainURL
                      : c("sdk.cp.Constants").blankFrameURL,
                    name: k,
                    root: g.contentRoot,
                    tabindex: -1,
                    style: ES("JSON", "parse", !1, a.availabilityStatusCssText),
                    "data-testid": "availabilityStatus_iframe",
                    onload: function () {
                      (b.$CustomerChat9 = k),
                        b.$CustomerChat26(),
                        b.$CustomerChat27();
                    },
                  });
                  d("sdk.Content").append(this.$CustomerChat8, g.contentRoot);
                  var l = "unread_" + e;
                  this.$CustomerChat6 = c("sdk.createIframe")({
                    url: this.$CustomerChat16
                      ? c("sdk.cp.Constants").blankFrameNewDomainURL
                      : c("sdk.cp.Constants").blankFrameURL,
                    name: l,
                    root: g.contentRoot,
                    tabindex: -1,
                    style: ES("JSON", "parse", !1, a.unreadCountCssText),
                    "data-testid": "unread_iframe",
                    onload: function () {
                      (b.$CustomerChat7 = l),
                        b.$CustomerChat26(),
                        b.$CustomerChat27();
                    },
                  });
                  d("sdk.Content").append(this.$CustomerChat6, g.contentRoot);
                  f = c("sdk.UA").mobile();
                  if (!f) {
                    var m = "greeting_" + e;
                    this.$CustomerChat10 = c("sdk.createIframe")({
                      url: this.$CustomerChat16
                        ? c("sdk.cp.Constants").blankFrameNewDomainURL
                        : c("sdk.cp.Constants").blankFrameURL,
                      name: m,
                      root: g.contentRoot,
                      tabindex: -1,
                      style: ES("JSON", "parse", !1, a.greetingCssText),
                      "data-testid": "greeting_iframe",
                      onload: function () {
                        (b.$CustomerChat11 = m),
                          b.$CustomerChat26(),
                          b.$CustomerChat27();
                      },
                    });
                    d("sdk.Content").append(
                      this.$CustomerChat10,
                      g.contentRoot
                    );
                  }
                };
                e.$CustomerChat27 = function () {
                  this.$CustomerChat2 !== null &&
                    this.$CustomerChat7 !== null &&
                    this.$CustomerChat9 !== null &&
                    this.$CustomerChat5 !== null &&
                    this.$CustomerChat11 !== null &&
                    !this.$CustomerChat12 &&
                    ((this.$CustomerChat12 = !0),
                    this.inform("iframes_loaded"));
                };
                e.$CustomerChat26 = function () {
                  var a;
                  this.$CustomerChat19({
                    name: "bubbleFrameLoaded",
                    frameName: this.$CustomerChat2,
                    unreadCountFrameName: this.$CustomerChat7,
                    availabilityStatusIframeName: this.$CustomerChat9,
                    greetingIframeName: this.$CustomerChat11,
                    iconSrc: (a = this.$CustomerChat3) == null ? void 0 : a.src,
                    unreadSrc:
                      (a = this.$CustomerChat6) == null ? void 0 : a.src,
                    request_time: this.params.request_time,
                    log_id: this.params.log_id,
                  });
                };
                e.$CustomerChat25 = function (a) {
                  this.$CustomerChat19({
                    name: "navigateToWelcomePage",
                    isHidden: a,
                  });
                };
                e.$CustomerChat22 = function (a) {
                  var b = a.cssText,
                    e = a.mobilePath,
                    f = a.isDialogHidden;
                  a = a.desktopBottomSpacing;
                  this.$CustomerChat1 &&
                    (e &&
                      this.$CustomerChat1.setAttribute(
                        c("sdk.cp.Constants").attribute.mobilePath,
                        e
                      ),
                    a &&
                      this.$CustomerChat1.setAttribute(
                        c("sdk.cp.Constants").attribute.desktopBottomSpacing,
                        a.toString()
                      ));
                  this.$CustomerChat14 = f === "true";
                  this.iframe &&
                    (this.iframe.setAttribute("data-testid", "dialog_iframe"),
                    (this.iframe.style.cssText = b));
                  this.$CustomerChat4 = this.iframe;
                  this.$CustomerChat5 = this.iframe.name;
                  this.$CustomerChat27();
                  a = c("sdk.UA").mobile();
                  if (a && !this.$CustomerChat14) {
                    if (e == c("sdk.cp.Constants").path.landingPage) {
                      f = d("sdk.cp.Animation").iframeBounceInAnimation(
                        this.$CustomerChat1
                      );
                      f != null && d("sdk.DOM").addCss(this.$CustomerChat4, f);
                    }
                    e != c("sdk.cp.Constants").path.landingPage &&
                      e != c("sdk.cp.Constants").path.bubble &&
                      this.$CustomerChat28();
                  }
                  this.$CustomerChat15 && this.hide();
                };
                e.$CustomerChat23 = function (a) {
                  a = a.shouldHide;
                  a === "true"
                    ? this.$CustomerChat29(this.iframe)
                    : this.$CustomerChat30(this.iframe);
                };
                e.$CustomerChat24 = function (a) {
                  a = a.shouldHide;
                  a === "true"
                    ? this.$CustomerChat31(this.$CustomerChat10)
                    : this.$CustomerChat32(this.$CustomerChat10);
                };
                e.getParams = function () {
                  return {
                    allow_guests: "bool",
                    attribution: "string",
                    greeting_dialog_display: "string",
                    greeting_dialog_delay: "string",
                    logged_in_greeting: "string",
                    logged_out_greeting: "string",
                    minimized: "bool",
                    page_id: "string",
                    theme_color: "string",
                    override: "string",
                    attribution_version: "string",
                    is_loaded_by_facade: "bool",
                    current_url: "string",
                    log_id: "string",
                    request_time: "px",
                  };
                };
                e.$CustomerChat33 = function (a, b) {
                  var d = this,
                    e = window.frames[a],
                    f = function (a) {
                      e == null
                        ? void 0
                        : e.postMessage(babelHelpers["extends"]({}, b), a);
                    };
                  this.$CustomerChat13 === null
                    ? c("getFacebookOriginForTarget")(function (a) {
                        (d.$CustomerChat13 = a), f(d.$CustomerChat13);
                      }, e)
                    : f(this.$CustomerChat13);
                };
                e.$CustomerChat20 = function (a) {
                  var b;
                  this.$CustomerChat33(
                    (b = this.$CustomerChat2) != null ? b : "",
                    a
                  );
                };
                e.$CustomerChat19 = function (a) {
                  var b;
                  this.$CustomerChat33(
                    (b = this.$CustomerChat5) != null ? b : "",
                    a
                  );
                };
                e.$CustomerChat34 = function (a) {
                  this.$CustomerChat19({
                    name: "CustomerChat.SDK.Called",
                    event: a,
                  });
                };
                e.$CustomerChat28 = function () {
                  var a = "fb_new_ui_mobile_overlay_active";
                  d("sdk.DOM").addCss(document.body, a);
                };
                e.$CustomerChat30 = function (a) {
                  if (!a) return;
                  if (this.$CustomerChat14) {
                    this.$CustomerChat14 = !1;
                    var b = d("sdk.cp.Animation").iframeBounceInAnimation(
                        this.$CustomerChat1
                      ),
                      e = d("sdk.cp.Animation").iframeBounceOutAnimation(
                        this.$CustomerChat1
                      );
                    e != null && d("sdk.DOM").removeCss(a, e);
                    b != null && d("sdk.DOM").addCss(a, b);
                    if (c("sdk.UA").mobile())
                      d("sdk.DOM").setStyle(a, "maxHeight", "100%"),
                        d("sdk.DOM").setStyle(a, "height", "100%"),
                        d("sdk.DOM").setStyle(a, "width", "100%");
                    else {
                      e =
                        this.$CustomerChat1 &&
                        d("sdk.DOM").getAttr(
                          this.$CustomerChat1,
                          c("sdk.cp.Constants").attribute.desktopBottomSpacing
                        );
                      b = e == null ? "80" : Number(e) + 60;
                      d("sdk.DOM").setStyle(
                        a,
                        "maxHeight",
                        "calc(100% - " + b + "px)"
                      );
                      d("sdk.DOM").setStyle(a, "minHeight", "300px");
                    }
                    this.$CustomerChat19({
                      name: "CustomerChat.isDialogHidden",
                      params: { is_dialog_hidden: !1 },
                    });
                    this.$CustomerChat20({
                      name: "CustomerChat.isDialogHidden",
                      params: { is_dialog_hidden: !1 },
                    });
                    d("sdk.Event").fire("customerchat.dialogShow");
                  }
                };
                e.$CustomerChat29 = function (a) {
                  var b = this;
                  if (!a) return;
                  if (!this.$CustomerChat14) {
                    this.$CustomerChat14 = !0;
                    var e = d("sdk.cp.Animation").iframeBounceInAnimation(
                        this.$CustomerChat1
                      ),
                      f = d("sdk.cp.Animation").iframeBounceOutAnimation(
                        this.$CustomerChat1
                      );
                    e != null && d("sdk.DOM").removeCss(a, e);
                    f != null && d("sdk.DOM").addCss(a, f);
                    var g = {};
                    c("sdk.cp.Constants").animationEvents.forEach(function (e) {
                      var f = function (e) {
                        b.$CustomerChat14 &&
                          (d("sdk.DOM").setStyle(a, "maxHeight", "0"),
                          d("sdk.DOM").setStyle(a, "minHeight", "0"),
                          c("sdk.cp.Constants").animationEvents.forEach(
                            function (b) {
                              g[b] &&
                                (d("DOMEventListener").remove(a, b, g[b]),
                                delete g[b]);
                            }
                          ));
                      };
                      g[e] = f;
                      d("DOMEventListener").add(a, e, f);
                    });
                    this.$CustomerChat19({
                      name: "CustomerChat.isDialogHidden",
                      params: { is_dialog_hidden: !0 },
                    });
                    this.$CustomerChat20({
                      name: "CustomerChat.isDialogHidden",
                      params: { is_dialog_hidden: !0 },
                    });
                  }
                  d("sdk.Event").fire("customerchat.dialogHide");
                };
                e.$CustomerChat31 = function (a) {
                  if (!a) return;
                  d("sdk.DOM").setStyle(a, "maxHeight", "0");
                  d("sdk.DOM").setStyle(a, "minHeight", "0");
                };
                e.$CustomerChat32 = function (a) {
                  if (!a) return;
                  d("sdk.DOM").setStyle(a, "maxHeight", "calc(100% - 80px)");
                };
                return b;
              })(c("IframePluginClass"));
              g["default"] = a;
            },
            98
          );
          __d(
            "sdk.XFBML.CustomerChatWrapper",
            [
              "$InternalEnum",
              "CORSRequest",
              "UrlMap",
              "sdk.Observable",
              "sdk.XFBML.ChatDOM",
            ],
            function (a, b, c, d, e, f, g) {
              a = b("$InternalEnum")({
                SHOW: "SHOW",
                HIDE: "HIDE",
                SHOW_DIALOG: "SHOW_DIALOG",
                HIDE_DIALOG: "HIDE_DIALOG",
                UPDATE: "UDPATE",
              });
              e = new (d("sdk.Observable").Observable)();
              f = function (a, b, c, d) {
                return new h(a, b, c, d);
              };
              var h = (function (b) {
                babelHelpers.inheritsLoose(a, b);
                function a(a, c, d, e) {
                  var f;
                  f = b.call(this) || this;
                  f.$CustomerChatWrapper2 = a;
                  f.$CustomerChatWrapper3 = c;
                  f.$CustomerChatWrapper4 = d;
                  f.$CustomerChatWrapper5 = e;
                  return f;
                }
                var e = a.prototype;
                e.process = function () {
                  var a = this,
                    b =
                      d("UrlMap").resolve("social_plugin") +
                      "/new_domain_gating/";
                  c("CORSRequest").execute(
                    b,
                    "get",
                    {
                      page_id: this.$CustomerChatWrapper5.page_id,
                      endpoint: this.$CustomerChatWrapper4,
                    },
                    function (b) {
                      (a.$CustomerChatWrapper5.should_use_new_domain =
                        b.should_use_new_domain),
                        (a.$CustomerChatWrapper1 = new (c("sdk.XFBML.ChatDOM"))(
                          a.$CustomerChatWrapper2,
                          a.$CustomerChatWrapper3,
                          a.$CustomerChatWrapper4,
                          a.$CustomerChatWrapper5
                        )),
                        a.$CustomerChatWrapper1.subscribe(
                          "render",
                          function () {
                            a.inform("render");
                          }
                        ),
                        a.$CustomerChatWrapper1.process();
                    }
                  );
                };
                return a;
              })(d("sdk.Observable").Observable);
              g.CustomerChatInternalEventType = a;
              g.CustomerChatInternalEvent = e;
              g.CustomerChatWrapperPlugin = f;
            },
            98
          );
          __d(
            "sdk.XFBML.LWIAdsCreation",
            ["IframePlugin", "sdk.createIframe"],
            function (a, b, c, d, e, f, g) {
              "use strict";
              a = c("IframePlugin").extend({
                constructor: function (a, b, c, d) {
                  this.parent(a, b, c, d), this._setUpSubscriptions();
                },
                getParams: function () {
                  return {
                    fbe_extras: "string",
                    fbe_redirect_uri: "string",
                    fbe_scopes: "string",
                    fbe_state: "string",
                    hide_manage_button: "bool",
                    hide_explore_more_options: "bool",
                    preferred_ad_options: "string",
                  };
                },
                _setUpSubscriptions: function () {
                  var a = this;
                  this.subscribe("xd.lwiadscreation.load", function (b) {
                    a._createIframe(b);
                  });
                },
                _createIframe: function (a) {
                  c("sdk.createIframe")({
                    url: a.iframeURL,
                    name: "LWIAdsCreationRootIframe",
                    root: document.body,
                    height: 300,
                    width: 950,
                  });
                },
              });
              b = a;
              g["default"] = b;
            },
            98
          );
          __d(
            "sdk.XFBML.LWIAdsInsights",
            ["IframePlugin", "sdk.createIframe"],
            function (a, b, c, d, e, f, g) {
              "use strict";
              a = c("IframePlugin").extend({
                constructor: function (a, b, c, d) {
                  this.parent(a, b, c, d), this._setUpSubscriptions();
                },
                getParams: function () {
                  return {
                    fbe_extras: "string",
                    fbe_redirect_uri: "string",
                    fbe_scopes: "string",
                    fbe_state: "string",
                  };
                },
                _setUpSubscriptions: function () {
                  var a = this;
                  this.subscribe("xd.lwiadsinsights.load", function (b) {
                    a._createIframe(b);
                  });
                },
                _createIframe: function (a) {
                  c("sdk.createIframe")({
                    url: a.iframeURL,
                    name: "LWIAdsInsightsRootIframe",
                    root: document.body,
                    height: 800,
                    width: 1050,
                  });
                },
              });
              b = a;
              g["default"] = b;
            },
            98
          );
          __d(
            "safeEval",
            ["sdk.Runtime", "sdk.Scribe"],
            function (a, b, c, d, e, f, g) {
              function a(a, b) {
                if (a === null || typeof a === "undefined") return;
                if (typeof a !== "string") return a;
                if (/^\w+$/.test(a) && typeof window[a] === "function")
                  return window[a].apply(null, b || []);
                d("sdk.Scribe").log("jssdk_error", {
                  appId: c("sdk.Runtime").getClientID(),
                  error: "USE_OF_EVAL_FUNCTION",
                  extra: { message: "Developer used an eval function" },
                });
                return Function(
                  'return eval("' + a.replace(/\"/g, '\\"') + '");'
                ).apply(null, b || []);
              }
              f.exports = a;
            },
            34
          );
          __d(
            "sdk.SVGLogos",
            ["guid"],
            function (a, b, c, d, e, f, g) {
              "use strict";
              var h =
                  "M90,212v-75h-27v-31h27v-25q0,-40 40,-40q15,0 24,2v26h-14q-16,0 -16,16v21h30l-5,31h-27v75",
                i = "a106 106,0,1,0,-32 0",
                j = "a106 106,1,0,1,-32 0";
              function k(a, b) {
                Object.getOwnPropertyNames(b).forEach(function (c) {
                  return a.setAttribute(c, b[c]);
                });
                return a;
              }
              function l(a, b, c) {
                b = k(
                  document.createElementNS("http://www.w3.org/2000/svg", b),
                  c
                );
                a == null ? void 0 : a.appendChild(b);
                return b;
              }
              a = function (a) {
                a = l(
                  null,
                  "svg",
                  ES(
                    "Object",
                    "assign",
                    !1,
                    { viewBox: "0 0 100 100", preserveAspectRatio: "xMinYMin" },
                    a
                  )
                );
                l(a, "line", {
                  x1: "0",
                  y1: "100",
                  x2: "100",
                  y2: "0",
                  "stroke-width": "12",
                });
                l(a, "line", {
                  x1: "0",
                  y1: "0",
                  x2: "100",
                  y2: "100",
                  "stroke-width": "12",
                });
                return a;
              };
              b = function (a) {
                a = l(
                  null,
                  "svg",
                  ES(
                    "Object",
                    "assign",
                    !1,
                    { viewBox: "0 0 213 213", preserveAspectRatio: "xMinYMin" },
                    a
                  )
                );
                l(a, "path", { d: h + i, class: "f_logo_circle" });
                l(a, "path", { d: h + j, class: "f_logo_f" });
                return a;
              };
              d = function (a) {
                a = l(
                  null,
                  "svg",
                  ES(
                    "Object",
                    "assign",
                    !1,
                    { viewBox: "0 0 213 213", preserveAspectRatio: "xMinYMin" },
                    a
                  )
                );
                l(a, "path", {
                  d: h + i,
                  class: "f_logo_circle",
                  fill: "white",
                });
                l(a, "path", { d: h + j, class: "f_logo_f", fill: "white" });
                return a;
              };
              e = function (a) {
                a = l(
                  null,
                  "svg",
                  ES(
                    "Object",
                    "assign",
                    !1,
                    {
                      viewBox: "-2 -2 104 104",
                      preserveAspectRatio: "xMinYMin",
                    },
                    a
                  )
                );
                l(a, "rect", {
                  x: "5",
                  y: "5",
                  width: "91",
                  height: "91",
                  "stroke-width": "9",
                  rx: "23",
                  class: "ig_logo_body",
                });
                l(a, "circle", {
                  cx: "77",
                  cy: "23",
                  r: "6",
                  class: "ig_logo_flash",
                });
                l(a, "circle", {
                  cx: "50",
                  cy: "50",
                  r: "21",
                  "stroke-width": "9",
                  class: "ig_logo_lens",
                });
                return a;
              };
              f = function (a) {
                var b = c("guid")();
                a = l(
                  null,
                  "svg",
                  ES(
                    "Object",
                    "assign",
                    !1,
                    {
                      viewBox: "-2 -2 104 104",
                      preserveAspectRatio: "xMinYMin",
                    },
                    a
                  )
                );
                var d = l(a, "defs", {}),
                  e = l(d, "mask", { id: b });
                l(e, "circle", { cx: "77", cy: "23", r: "6", fill: "white" });
                l(e, "circle", {
                  cx: "50",
                  cy: "50",
                  r: "21",
                  "stroke-width": "9",
                  stroke: "white",
                });
                l(e, "rect", {
                  x: "5",
                  y: "5",
                  width: "91",
                  height: "91",
                  "stroke-width": "9",
                  rx: "23",
                  stroke: "white",
                  fill: "none",
                });
                e = l(d, "linearGradient", {
                  id: "purplepink",
                  x1: "0",
                  x2: ".15",
                  y1: "0",
                  y2: ".6",
                });
                l(e, "stop", { offset: "12%", "stop-color": "rgb(88,85,214)" });
                l(e, "stop", {
                  offset: "85%",
                  "stop-color": "rgb(215,27,122)",
                });
                e = l(d, "radialGradient", {
                  id: "yelloworange",
                  cx: ".35",
                  cy: "1",
                  r: "2",
                });
                l(e, "stop", {
                  offset: "7%",
                  "stop-color": "rgb(252,215,114)",
                });
                l(e, "stop", {
                  offset: "20%",
                  "stop-color": "rgb(244,102,37)",
                });
                l(e, "stop", {
                  offset: "38%",
                  "stop-color": "rgb(225,37,122)",
                  "stop-opacity": "0",
                });
                l(a, "rect", {
                  x: "1",
                  y: "1",
                  width: "99",
                  height: "99",
                  "stroke-width": "0",
                  rx: "23",
                  fill: "url(#purplepink)",
                  style: "mask: url(#" + b + ")",
                });
                l(a, "rect", {
                  x: "1",
                  y: "1",
                  width: "99",
                  height: "99",
                  "stroke-width": "0",
                  rx: "23",
                  fill: "url(#yelloworange)",
                  style: "mask: url(#" + b + ")",
                });
                return a;
              };
              g.close = a;
              g.facebook = b;
              g.facebookWhite = d;
              g.instagram = e;
              g.instagramColor = f;
            },
            98
          );
          __d(
            "sdk.SharedStringConstants",
            ["sdk.fbt"],
            function (a, b, c, d, e, f, g) {
              "use strict";
              a = {
                continueWith: c("sdk.fbt")._(
                  "Continue with {facebook_app_name} or {instagram_app_name}"
                ),
                continueWithShort: c("sdk.fbt")._(
                  "{facebook_app_name} or {instagram_app_name}"
                ),
                loginButtonAriaLabel: c("sdk.fbt")._(
                  "Continue with Facebook or Instagram"
                ),
                logout: c("sdk.fbt")._("Logout"),
                logoutButtonAriaLabel: c("sdk.fbt")._(
                  "Logout the current website"
                ),
                titleText: c("sdk.fbt")._("Choose Account"),
                promptText: c("sdk.fbt")._(
                  "Which account would you like to use to log in?"
                ),
                facebookText: c("sdk.fbt")._("Log in with Facebook"),
                facebookTextShort: c("sdk.fbt")._("Log in"),
                instagramText: c("sdk.fbt")._("Log in with Instagram"),
                disambiguationDialogAriaLabelText: c("sdk.fbt")._(
                  "Log in with Facebook or Instagram"
                ),
                fbButtonText: c("sdk.fbt")._("Continue with Facebook"),
                igButtonText: c("sdk.fbt")._("Continue with Instagram"),
              };
              g.buttonStringsFBT = a;
            },
            98
          );
          __d(
            "sdk.XFBML.ShadowDOMLoginButton",
            [
              "DOMPlugin",
              "UrlMap",
              "sdk.Auth",
              "sdk.Event",
              "sdk.LoggingUtils",
              "sdk.PluginUtils",
              "sdk.Runtime",
              "sdk.SVGLogos",
              "sdk.SharedStringConstants",
              "sdk.createIframe",
              "sdk.ui",
            ],
            function (a, b, c, d, e, f, g) {
              var h = { small: "11px", medium: "13px", large: "16px" },
                i = { small: "20px", medium: "30px", large: "40px" },
                j = "{facebook_app_name}";
              a = (function (a) {
                babelHelpers.inheritsLoose(b, a);
                function b(b, e, f, g, h) {
                  b = a.call(this, b, e, f, g, h) || this;
                  b.stateObservers = [];
                  b.shadowCss = ["css:fb.shadow.css.fb_login_button"];
                  b.container = document.createElement("div");
                  b.container.classList.add("fb_login_button_container");
                  b.container.dir = "auto";
                  b.loginButtonText = b.updateLabel();
                  b.fbLoginButton = document.createElement("button");
                  b.borderRadius = b.updateRadius(b.params);
                  b.fbLoginButton = b.createSingleButton(b.loginButtonText);
                  b.createFBButton(
                    "fb-button-main-element",
                    d("sdk.SharedStringConstants").buttonStringsFBT.logout,
                    d("sdk.SharedStringConstants").buttonStringsFBT
                      .logoutButtonAriaLabel,
                    r,
                    function (a) {
                      this.style.display =
                        a.status === "connected" ? "flex" : "none";
                    },
                    ES(
                      function (a) {
                        c("sdk.Auth").logout(),
                          a &&
                            a.detail === 0 &&
                            this.fbLoginButton &&
                            this.fbLoginButton.style.display !== "none" &&
                            this.fbLoginButton.focus();
                      },
                      "bind",
                      !0,
                      babelHelpers.assertThisInitialized(b)
                    )
                  );
                  return b;
                }
                var e = b.prototype;
                e.render = function (a) {
                  var b = this;
                  this.updateDisplay({
                    shouldHideDisambiguation: !0,
                    status: c("sdk.Runtime").getLoginStatus(),
                  });
                  d("sdk.Event").subscribe("auth.statusChange", function (a) {
                    a = {
                      shouldHideDisambiguation: !0,
                      status: a.status,
                      fxApp: a.loginSource,
                    };
                    b.updateDisplay(a);
                  });
                  return this.container;
                };
                e.createSingleButton = function (a) {
                  return this.createFBButton(
                    "fb-button-main-element",
                    a,
                    a,
                    q,
                    function (a) {
                      this.style.display =
                        a.status === "connected" ? "none" : "flex";
                    },
                    ES(
                      function (a) {
                        a.stopPropagation(),
                          d("sdk.LoggingUtils").logLoginEvent(
                            this.params,
                            d("sdk.LoggingUtils").logEventName.buttonClick +
                              "_single_fb"
                          ),
                          this.loginTrigger();
                      },
                      "bind",
                      !0,
                      this
                    )
                  );
                };
                e.loginTrigger = function () {
                  var a = "";
                  c("sdk.ui")(
                    { method: "permissions.oauth", display: "popup", scope: a },
                    this.loginCb()
                  );
                };
                e.createFBButton = function (a, b, c, d, e, f) {
                  var g = document.createElement("button");
                  g.classList.add(a);
                  g.setAttribute("aria-label", c);
                  a = document.createElement("span");
                  a.classList.add("fb_button_label_element");
                  a.classList.add("fb_button_label");
                  this.applyStyles(g, this.params);
                  this.use_continue_as === !0
                    ? a.append(
                        this.createIframeOverlay(this.container, this.params)
                      )
                    : d(this.params, b, a);
                  g.appendChild(a);
                  g.addEventListener("click", function (a) {
                    f(a), g.blur();
                  });
                  g.updateDisplay = ES(e, "bind", !0, g);
                  this.stateObservers.push(g);
                  this.container.appendChild(g);
                  return g;
                };
                e.loginCb = function () {
                  var a = this;
                  return function (b) {
                    b.authResponse != null && b.status === "connected"
                      ? d("sdk.LoggingUtils").logLoginEvent(
                          a.params,
                          d("sdk.LoggingUtils").logEventName.loginSuccess +
                            "_single_fb"
                        )
                      : d("sdk.LoggingUtils").logLoginEvent(
                          a.params,
                          d("sdk.LoggingUtils").logEventName.loginCancel +
                            "_single_fb"
                        );
                  };
                };
                e.updateDisplay = function (a) {
                  this.stateObservers.forEach(function (b) {
                    return b.updateDisplay(a);
                  });
                };
                e.updateLabel = function () {
                  var a =
                      this.params["button-type"] === "login_with"
                        ? d("sdk.SharedStringConstants").buttonStringsFBT
                            .facebookText
                        : d("sdk.SharedStringConstants").buttonStringsFBT
                            .fbButtonText,
                    b = o(this.params, a);
                  this.params["button-type"] === "login_with" &&
                    (a = b
                      ? a
                      : d("sdk.SharedStringConstants").buttonStringsFBT
                          .facebookTextShort);
                  return a;
                };
                e.updateRadius = function (a) {
                  var b;
                  b =
                    (b = d("sdk.PluginUtils").getVal(a, "layout")) != null
                      ? b
                      : "default";
                  a = String(d("sdk.PluginUtils").getVal(a, "size"));
                  a = a !== "" ? a : "small";
                  a = a === "large" ? "4px" : "3px";
                  return b === "rounded" ? "20px" : a;
                };
                e.applyStyles = function (a, b) {
                  var c = String(d("sdk.PluginUtils").getVal(b, "size"));
                  c = c !== "" ? c : "small";
                  a.style.borderRadius = this.borderRadius;
                  b =
                    (b = d("sdk.PluginUtils").getVal(b, "width")) != null
                      ? b
                      : null;
                  a.style.width = k(c, b).toString();
                  a.style.fontSize = h[c];
                  a.style.height = i[c];
                  a.style.backgroundColor = "rgb(26,119,242)";
                  a.style.color = "#fff";
                  a.style.border = "0";
                  a.style.fontWeight = "bold";
                };
                e.createIframeOverlay = function (a, b) {
                  var e,
                    f = String(d("sdk.PluginUtils").getVal(b, "size"));
                  f = f !== "" ? f : "small";
                  var g = c("sdk.Runtime").getClientID(),
                    h = String(d("sdk.PluginUtils").getVal(b, "layout"));
                  h = h !== "" ? h : "default";
                  e =
                    (e = d("sdk.PluginUtils").getVal(b, "width")) != null
                      ? e
                      : null;
                  e = k(f, e).toString();
                  g =
                    d("UrlMap").resolve("www") +
                    ("/plugins/login_button_overlay/" +
                      g +
                      "/" +
                      e +
                      "/" +
                      f +
                      "/" +
                      h +
                      "/");
                  h = {
                    root: a,
                    url: g,
                    borderRadius:
                      (f = d("sdk.PluginUtils").getVal(b, "layout")) != null
                        ? f
                        : "default",
                    width: e,
                  };
                  a = c("sdk.createIframe")(h);
                  a.classList.add("fb-iframe-overlay");
                  return a;
                };
                return b;
              })(d("DOMPlugin").DOMPlugin);
              function k(a, b) {
                a = a != null ? a : "small";
                return b === "" || b == null ? m(a) : l(a, b);
              }
              function l(a, b) {
                b = isNaN(b) ? 0 : Number(b);
                var c = m(a),
                  d = n(a);
                if (b < m(a)) return c;
                return b > n(a) ? d : b;
              }
              function m(a) {
                switch (a) {
                  case "large":
                    return 240;
                  case "medium":
                    return 200;
                  default:
                    return 200;
                }
              }
              function n(a) {
                switch (a) {
                  case "large":
                    return 400;
                  case "medium":
                    return 320;
                  default:
                    return 300;
                }
              }
              function o(a, b) {
                var c;
                b = b.replace(/\s?{facebook_app_name}\s?/, "");
                c =
                  (c = d("sdk.PluginUtils").getVal(a, "width")) != null
                    ? c
                    : null;
                a =
                  (a = d("sdk.PluginUtils").getVal(a, "size")) != null
                    ? a
                    : "large";
                a = k(a, c);
                c = p(b) ? p(b) : 0;
                return c < a;
              }
              function p(a) {
                var b =
                  p.canvas || (p.canvas = document.createElement("canvas"));
                b = b.getContext("2d");
                b = b == null ? void 0 : b.measureText(a);
                return b == null ? void 0 : b.width;
              }
              function q(a, b, c) {
                var d = document.createElement("span"),
                  e = s();
                e.classList.add("single_button_svg_logo");
                c.append(e);
                d.textContent = o(a, b) ? b : "";
                c.append(d);
              }
              function r(a, b, c) {
                c.textContent = "";
                a = b.search(j);
                var d = a + j.length,
                  e = Math.min(a),
                  f = Math.min(d);
                a = Math.max(a);
                d = Math.max(d);
                var g = s(),
                  h = document.createElement("span");
                h.style.whiteSpace = "nowrap";
                h.append(b.substring(0, e));
                e = document.createElement("span");
                e.style.whiteSpace = "nowrap";
                e.append(b.substring(f, a));
                f = document.createElement("span");
                f.style.whiteSpace = "nowrap";
                f.append(b.substring(d, b.length));
                c.append(g);
                c.append(h);
                c.append(e);
                c.append(f);
              }
              function s() {
                return d("sdk.SVGLogos").facebookWhite({
                  class: "fb_button_svg_logo login_fb_logo",
                });
              }
              g["default"] = a;
            },
            98
          );
          __d(
            "sdk.XFBML.LoginButton",
            [
              "IframePlugin",
              "Log",
              "guid",
              "safeEval",
              "sdk.Auth",
              "sdk.Auth.LoginStatus",
              "sdk.Dialog",
              "sdk.ErrorHandling",
              "sdk.Impressions",
              "sdk.PluginUtils",
              "sdk.Runtime",
              "sdk.Scribe",
              "sdk.UIServer",
              "sdk.XD",
              "sdk.XFBML.ShadowDOMLoginButton",
              "sdk.feature",
              "sdk.getContextType",
              "sdk.modFeatureCheck",
              "sdk.ui",
            ],
            function (a, b, c, d, e, f, g) {
              var h = c("sdk.feature")("https_only_learn_more", "");
              function i(a, b, d) {
                a &&
                  (typeof a === "string"
                    ? c("sdk.ErrorHandling").unguard(c("safeEval"))(a, d)
                    : a.apply &&
                      c("sdk.ErrorHandling")
                        .unguard(a)
                        .apply(b, d || []));
              }
              function j(a, b, e) {
                a.id = c("guid")();
                a.plugin_prepare = !0;
                a.origin = c("sdk.getContextType")();
                a.domain = location.hostname;
                a.fallback_redirect_uri = document.location.href;
                var f = c("sdk.feature")("e2e_tracking", !0);
                f && (a.e2e = {});
                f = function (a) {
                  g != null &&
                    d("sdk.XD").sendToFacebook(b, {
                      method: "loginComplete",
                      params: ES("JSON", "stringify", !1, {
                        frame_name: g.id,
                        status: c("sdk.Runtime").getLoginStatus(),
                      }),
                    }),
                    e(a);
                };
                var g = c("sdk.UIServer").prepareCall(a, f);
                g != null &&
                  ((g.dims = {}),
                  (g.dims.screenX = window.screenX),
                  (g.dims.screenY = window.screenY),
                  (g.dims.outerWidth = window.outerWidth),
                  (g.dims.outerHeight = window.outerHeight),
                  (g.dims.screenWidth = window.screen.width));
                d("sdk.XD").sendToFacebook(b, {
                  method: "loginButtonStateInit",
                  params: ES("JSON", "stringify", !1, { call: g }),
                });
              }
              a = c("IframePlugin").extend({
                constructor: function (a, b, e, f) {
                  if (
                    (d("sdk.modFeatureCheck").forIDs(
                      "allow_shadow_dom_for_apps_with_id",
                      [c("sdk.Runtime").getClientID()]
                    ) ||
                      (f["data-shadow-test"] != null &&
                        f["data-shadow-test"] === "true")) &&
                    c("sdk.feature")("allow_shadow_dom", !1) === !0 &&
                    f["data-use-continue-as"] !== "true"
                  )
                    return new (c("sdk.XFBML.ShadowDOMLoginButton"))(
                      a,
                      b,
                      e,
                      f,
                      {
                        width: "string",
                        size: "string",
                        "button-type": "string",
                        layout: "string",
                        "auto-logout-link": "bool",
                        "use-continue-as": "bool",
                      }
                    );
                  if (location.protocol !== "https:") {
                    var g =
                      "The Login Button plugin no longer works on http pages. Please update your site to use https for Facebook Login. %s";
                    d("Log").log("error", -1, g, h);
                    c("sdk.feature")("https_only_scribe_logging", !0) &&
                      d("sdk.Scribe").log("jssdk_error", {
                        appId: c("sdk.Runtime").getClientID(),
                        error: "HttpsOnly",
                        extra: { message: "LoginButton" },
                      });
                  }
                  this.parent(a, b, e, f);
                  var k = d("sdk.PluginUtils").getVal(f, "on_login"),
                    l = null,
                    m = this._iframeOptions.name;
                  k &&
                    ((l = function (a) {
                      if (a.error_code) {
                        d("Log").debug(
                          "Plugin Return Error (%s): %s",
                          a.error_code,
                          a.error_message || a.error_description
                        );
                        return;
                      }
                      i(k, null, [a]);
                    }),
                    this.subscribe("login.status", l));
                  var n = function (a) {
                    i(l, null, [a]),
                      d("sdk.XD").sendToFacebook(m, {
                        method: "loginReload",
                        params: ES("JSON", "stringify", !1, a),
                      });
                  };
                  this.subscribe("xd.login_button_dialog_open", function (a) {
                    c("sdk.ui")(
                      ES("JSON", "parse", !1, a.params),
                      function (a) {
                        d("sdk.XD").sendToFacebook(m, {
                          method: "loginComplete",
                          params: "{}",
                        }),
                          n(a);
                      }
                    );
                  });
                  this.subscribe("xd.login_button_prepare_call", function (a) {
                    var b = ES("JSON", "parse", !1, a.params),
                      d = a.params;
                    j(b, m, n);
                    c("sdk.Auth").subscribe("status.change", function (a) {
                      var b = ES("JSON", "parse", !1, d);
                      b.logger_id = c("guid")();
                      a != null &&
                        a.status != null &&
                        a.status !== "connected" &&
                        j(b, m, n);
                    });
                  });
                  this.subscribe("xd.login_button_click", function (a) {
                    var b = ES("JSON", "parse", !1, a.params);
                    if (b.popup) {
                      if (c("sdk.feature")("e2e_tracking", !0)) {
                        a = c("sdk.Dialog").get(b.call.id);
                        a.subscribe("e2e:end", function (a) {
                          (a.method = b.call.params.method),
                            (a.display = b.call.params.display),
                            d("Log").debug(
                              "e2e: %s",
                              ES("JSON", "stringify", !1, a)
                            ),
                            d("sdk.Impressions").log(114, { payload: a });
                        });
                      }
                    } else
                      c("sdk.feature")("popup_blocker_scribe_logging", !0) &&
                        d("sdk.Scribe").log("jssdk_error", {
                          appId: c("sdk.Runtime").getClientID(),
                          error: "POPUP_MAYBE_BLOCKED_NEW",
                          extra: { call: b.call.name },
                        });
                  });
                  var o = function () {
                    i(l, null, [
                      {
                        status: c("sdk.Runtime").getLoginStatus(),
                        authResponse: c("sdk.Auth").getAuthResponse(),
                      },
                    ]);
                  };
                  this.subscribe("xd.login_button_connected", o);
                  this.subscribe("xd.login_button_popup_closed", function () {
                    c("sdk.Auth.LoginStatus").getLoginStatus(o, !0);
                  });
                },
                shouldIgnoreWidth: function () {
                  return !1;
                },
                getParams: function () {
                  return {
                    scope: "string",
                    asset_scope: "string",
                    perms: "string",
                    size: "string",
                    login_text: "text",
                    show_faces: "bool",
                    max_rows: "string",
                    show_login_face: "bool",
                    show_login_numbers: "bool",
                    registration_url: "url_maybe",
                    auto_logout_link: "bool",
                    one_click: "bool",
                    show_banner: "bool",
                    auth_type: "string",
                    default_audience: "string",
                    use_continue_as: "bool",
                    layout: "string",
                    button_type: "string",
                    width: "px",
                    height: "px",
                    force_confirmation: "bool",
                    messenger_page_id: "string",
                    reset_messenger_state: "bool",
                    config_id: "string",
                  };
                },
              });
              b = a;
              g["default"] = b;
            },
            98
          );
          __d(
            "sdk.XFBML.MessengerCheckbox",
            ["FB", "IframePluginClass", "Log", "PluginAttrTypes", "sdk.XD"],
            function (a, b, c, d, e, f, g) {
              "use strict";
              function h(a) {
                var b = a.app_id,
                  c = a.page_id;
                a = a.user_ref;
                c =
                  '[page_id="' +
                  c +
                  '"][messenger_app_id="' +
                  b +
                  '"][user_ref="' +
                  a +
                  '"] iframe';
                b = document.querySelector(c);
                return (b == null ? void 0 : b.getAttribute("name")) || null;
              }
              c("FB").provide("CheckboxPlugin", {
                confirm: function (a) {
                  var b = a.app_id,
                    c = a.page_id,
                    e = a.user_ref,
                    f = h(a);
                  if (b == null) {
                    d("Log").warn("app_id is a required parameter.");
                    return;
                  }
                  if (c == null) {
                    d("Log").warn("page_id is a required parameter.");
                    return;
                  }
                  if (e == null) {
                    d("Log").warn("user_ref is a required parameter.");
                    return;
                  }
                  if (f == null) {
                    d("Log").warn(
                      "No matching checkbox for the app_id, page_id, and user_ref given."
                    );
                    return;
                  }
                  d("sdk.XD").sendToFacebook(f, {
                    method: "confirmCheckboxSubmission",
                    params: a,
                  });
                },
              });
              a = (function (a) {
                babelHelpers.inheritsLoose(b, a);
                function b(b, c, d, e) {
                  return (
                    a.call(this, b, c, d, e, {
                      fluid: !0,
                      full_width: !0,
                      mobile_fullsize: !1,
                    }) || this
                  );
                }
                var c = b.prototype;
                c.getParams = function () {
                  return {
                    messenger_app_id: d("PluginAttrTypes").string,
                    page_id: d("PluginAttrTypes").string,
                    pixel_id: d("PluginAttrTypes").string,
                    prechecked: d("PluginAttrTypes").bool,
                    allow_login: d("PluginAttrTypes").bool,
                    size: d("PluginAttrTypes").string,
                    origin: d("PluginAttrTypes").string,
                    user_ref: d("PluginAttrTypes").string,
                    identity_match: d("PluginAttrTypes").string,
                    center_align: d("PluginAttrTypes").bool,
                    opt_in_type: d("PluginAttrTypes").string,
                    promotional_frequency: d("PluginAttrTypes").string,
                    promotional_topic: d("PluginAttrTypes").string,
                  };
                };
                return b;
              })(c("IframePluginClass"));
              g["default"] = a;
            },
            98
          );
          __d(
            "sdk.XFBML.MessengerCheckboxWrapper",
            [
              "CORSRequest",
              "UrlMap",
              "sdk.Observable",
              "sdk.XFBML.MessengerCheckbox",
            ],
            function (a, b, c, d, e, f, g) {
              a = function (a, b, c, d) {
                return new h(a, b, c, d);
              };
              var h = (function (b) {
                babelHelpers.inheritsLoose(a, b);
                function a(a, c, d, e) {
                  var f;
                  f = b.call(this) || this;
                  f.$MessengerCheckboxWrapper2 = a;
                  f.$MessengerCheckboxWrapper3 = c;
                  f.$MessengerCheckboxWrapper4 = d;
                  f.$MessengerCheckboxWrapper5 = e;
                  return f;
                }
                var e = a.prototype;
                e.process = function () {
                  var a = this,
                    b =
                      d("UrlMap").resolve("social_plugin") +
                      "/new_domain_gating/";
                  c("CORSRequest").execute(
                    b,
                    "get",
                    {
                      page_id: this.$MessengerCheckboxWrapper5.page_id,
                      endpoint: this.$MessengerCheckboxWrapper4,
                    },
                    function (b) {
                      (a.$MessengerCheckboxWrapper5.should_use_new_domain =
                        b.should_use_new_domain),
                        (a.$MessengerCheckboxWrapper1 = new (c(
                          "sdk.XFBML.MessengerCheckbox"
                        ))(
                          a.$MessengerCheckboxWrapper2,
                          a.$MessengerCheckboxWrapper3,
                          a.$MessengerCheckboxWrapper4,
                          a.$MessengerCheckboxWrapper5
                        )),
                        a.$MessengerCheckboxWrapper1.subscribe(
                          "render",
                          function () {
                            a.inform("render");
                          }
                        ),
                        a.$MessengerCheckboxWrapper1.process();
                    }
                  );
                };
                return a;
              })(d("sdk.Observable").Observable);
              b = a;
              g["default"] = b;
            },
            98
          );
          __d(
            "sdk.XFBML.MessengerMessageUs",
            ["IframePluginClass", "PluginAttrTypes"],
            function (a, b, c, d, e, f, g) {
              "use strict";
              a = (function (a) {
                babelHelpers.inheritsLoose(b, a);
                function b(b, c, d, e) {
                  return (
                    a.call(this, b, c, d, e, {
                      fluid: !1,
                      full_width: !1,
                      mobile_fullsize: !0,
                    }) || this
                  );
                }
                var c = b.prototype;
                c.getParams = function () {
                  return {
                    messenger_app_id: d("PluginAttrTypes").string,
                    page_id: d("PluginAttrTypes").string,
                    color: d("PluginAttrTypes").string,
                    size: d("PluginAttrTypes").string,
                  };
                };
                return b;
              })(c("IframePluginClass"));
              g["default"] = a;
            },
            98
          );
          __d(
            "sdk.XFBML.MessengerMessageUsWrapper",
            [
              "CORSRequest",
              "UrlMap",
              "sdk.Observable",
              "sdk.XFBML.MessengerMessageUs",
            ],
            function (a, b, c, d, e, f, g) {
              a = function (a, b, c, d) {
                return new h(a, b, c, d);
              };
              var h = (function (b) {
                babelHelpers.inheritsLoose(a, b);
                function a(a, c, d, e) {
                  var f;
                  f = b.call(this) || this;
                  f.$MessengerMessageUsWrapper2 = a;
                  f.$MessengerMessageUsWrapper3 = c;
                  f.$MessengerMessageUsWrapper4 = d;
                  f.$MessengerMessageUsWrapper5 = e;
                  return f;
                }
                var e = a.prototype;
                e.process = function () {
                  var a = this,
                    b =
                      d("UrlMap").resolve("social_plugin") +
                      "/new_domain_gating/";
                  c("CORSRequest").execute(
                    b,
                    "get",
                    {
                      page_id: this.$MessengerMessageUsWrapper5.page_id,
                      endpoint: this.$MessengerMessageUsWrapper4,
                    },
                    function (b) {
                      (a.$MessengerMessageUsWrapper5.should_use_new_domain =
                        b.should_use_new_domain),
                        (a.$MessengerMessageUsWrapper1 = new (c(
                          "sdk.XFBML.MessengerMessageUs"
                        ))(
                          a.$MessengerMessageUsWrapper2,
                          a.$MessengerMessageUsWrapper3,
                          a.$MessengerMessageUsWrapper4,
                          a.$MessengerMessageUsWrapper5
                        )),
                        a.$MessengerMessageUsWrapper1.subscribe(
                          "render",
                          function () {
                            a.inform("render");
                          }
                        ),
                        a.$MessengerMessageUsWrapper1.process();
                    }
                  );
                };
                return a;
              })(d("sdk.Observable").Observable);
              b = a;
              g["default"] = b;
            },
            98
          );
          __d(
            "sdk.XFBML.Save",
            [
              "IframePlugin",
              "UrlMap",
              "sdk.Content",
              "sdk.DOM",
              "sdk.DialogUtils",
              "sdk.Event",
              "sdk.Runtime",
              "sdk.UA",
              "sdk.XD",
              "sdk.createIframe",
            ],
            function (a, b, c, d, e, f, g) {
              "use strict";
              var h;
              a = c("IframePlugin").extend({
                constructor: function (a, b, e, f) {
                  var g = this;
                  this.parent(a, b, e, f);
                  var i = c("sdk.UA").mobile();
                  this.subscribe("xd.savePluginGetBlankIframe", function (a) {
                    var b,
                      c = function (a) {
                        a && d("sdk.DOM").removeCss(a, "fb_invisible");
                      },
                      e = function (a) {
                        a && d("sdk.DOM").addCss(a, "fb_invisible");
                      };
                    i &&
                      ((b = d("sdk.DialogUtils").setupNewDarkOverlay()),
                      e(b),
                      d("sdk.Content").append(b),
                      d("sdk.DialogUtils").addDoubleClickAction(
                        b,
                        function () {
                          return j.forEach(e);
                        },
                        5e3
                      ));
                    var f = g.setupNewIframeDialog(
                      ES("JSON", "parse", !1, a.data),
                      a.fromIframe
                    );
                    e(f);
                    d("sdk.Content").append(f);
                    var j = [f, b],
                      k = function () {
                        j.forEach(e),
                          d("sdk.DialogUtils").onDialogHideCleanup(i),
                          window.clearInterval(h);
                      },
                      l;
                    g.subscribe("xd.savePluginShowIframe", function () {
                      d("sdk.Event").fire("savePlugin:hideDialog"),
                        j.forEach(c),
                        g.positionOnScreen(f, b),
                        !i &&
                          !l &&
                          (l = d("sdk.DialogUtils").addIdleDesktopAction(
                            f,
                            k,
                            7e3
                          ));
                    });
                    g.subscribe("xd.savePluginHideIframe", function () {
                      return k();
                    });
                    d("sdk.Event").subscribe(
                      "savePlugin:hideDialog",
                      function () {
                        return k();
                      }
                    );
                    var m = window.setInterval(function () {
                      var b = document.getElementsByName(a.fromIframe);
                      b.length === 0 &&
                        (window.clearInterval(m),
                        k(),
                        j.forEach(function (a) {
                          a && a.parentNode.removeChild(a);
                        }));
                    }, 500);
                  });
                },
                positionOnScreen: function (a, b) {
                  var e = c("sdk.UA").mobile();
                  if (e) {
                    var f = function (a, b) {
                      b != null &&
                        d("sdk.DialogUtils").setDialogPositionToCenter(b, e),
                        d("sdk.DialogUtils").setDialogPositionToCenter(a, e);
                    };
                    f(a, b);
                    d("sdk.DialogUtils").addMobileOrientationChangeAction(
                      function (c) {
                        f(a, b);
                      }
                    );
                    h = window.setInterval(function () {
                      return f(a, b);
                    }, 100);
                  } else
                    d("sdk.DOM").setStyle(a, "position", "fixed"),
                      d("sdk.DOM").setStyle(a, "top", "20px"),
                      d("sdk.DOM").setStyle(a, "right", "20px");
                },
                getOverlayIFrameURL: function () {
                  return (
                    d("UrlMap").resolve("www") +
                    (c("sdk.Runtime").getIsVersioned()
                      ? "/" + c("sdk.Runtime").getVersion()
                      : "") +
                    "/plugins/save/overlay?app_id=" +
                    c("sdk.Runtime").getClientID()
                  );
                },
                setupNewIframeDialog: function (a, b) {
                  var e = this,
                    f = d("sdk.DialogUtils").setupNewDialog(),
                    g = function () {
                      d("sdk.XD").sendToFacebook(b, {
                        method: "saveOverlayIFrameAck",
                        params: ES("JSON", "stringify", !1, {
                          name: "overlay_" + e._iframeOptions.name,
                        }),
                      });
                    };
                  c("sdk.createIframe")({
                    url: this.getOverlayIFrameURL(),
                    name: "overlay_" + this._iframeOptions.name,
                    root: f.contentRoot,
                    tabindex: -1,
                    onload: ES(g, "bind", !0, this),
                  });
                  d("sdk.DOM").addCss(f.contentRoot, "fb_dialog_iframe");
                  ES(
                    "Object",
                    "assign",
                    !1,
                    f.dialogElement.style,
                    a.style || {}
                  );
                  d("sdk.DOM").setStyle(
                    f.dialogElement,
                    "width",
                    a.width + "px"
                  );
                  d("sdk.DOM").setStyle(
                    f.dialogElement,
                    "height",
                    a.height + "px"
                  );
                  a.classList.forEach(function (a) {
                    return d("sdk.DOM").addCss(f.dialogElement, a);
                  });
                  d("sdk.DOM").removeCss(f.dialogElement, "fb_dialog_advanced");
                  return f.dialogElement;
                },
                getParams: function () {
                  return { uri: "url", url_category: "string", size: "string" };
                },
              });
              b = a;
              g["default"] = b;
            },
            98
          );
          __d(
            "sdk.XFBML.SendToMessenger",
            ["IframePluginClass", "PluginAttrTypes"],
            function (a, b, c, d, e, f, g) {
              "use strict";
              a = (function (a) {
                babelHelpers.inheritsLoose(b, a);
                function b(b, c, d, e) {
                  return (
                    a.call(this, b, c, d, e, {
                      fluid: !1,
                      full_width: !1,
                      mobile_fullsize: !0,
                    }) || this
                  );
                }
                var c = b.prototype;
                c.getParams = function () {
                  return {
                    messenger_app_id: d("PluginAttrTypes").string,
                    page_id: d("PluginAttrTypes").string,
                    color: d("PluginAttrTypes").string,
                    size: d("PluginAttrTypes").string,
                    enforce_login: d("PluginAttrTypes").bool,
                    identity_match: d("PluginAttrTypes").string,
                    origin: d("PluginAttrTypes").string,
                    cta_text: d("PluginAttrTypes").string,
                    allow_login: d("PluginAttrTypes").bool,
                  };
                };
                return b;
              })(c("IframePluginClass"));
              g["default"] = a;
            },
            98
          );
          __d(
            "sdk.XFBML.SendToMessengerWrapper",
            [
              "CORSRequest",
              "UrlMap",
              "sdk.Observable",
              "sdk.XFBML.SendToMessenger",
            ],
            function (a, b, c, d, e, f, g) {
              a = function (a, b, c, d) {
                return new h(a, b, c, d);
              };
              var h = (function (b) {
                babelHelpers.inheritsLoose(a, b);
                function a(a, c, d, e) {
                  var f;
                  f = b.call(this) || this;
                  f.$SendToMessengerWrapper2 = a;
                  f.$SendToMessengerWrapper3 = c;
                  f.$SendToMessengerWrapper4 = d;
                  f.$SendToMessengerWrapper5 = e;
                  return f;
                }
                var e = a.prototype;
                e.process = function () {
                  var a = this,
                    b =
                      d("UrlMap").resolve("social_plugin") +
                      "/new_domain_gating/";
                  c("CORSRequest").execute(
                    b,
                    "get",
                    {
                      page_id: this.$SendToMessengerWrapper5.page_id,
                      endpoint: this.$SendToMessengerWrapper4,
                    },
                    function (b) {
                      (a.$SendToMessengerWrapper5.should_use_new_domain =
                        b.should_use_new_domain),
                        (a.$SendToMessengerWrapper1 = new (c(
                          "sdk.XFBML.SendToMessenger"
                        ))(
                          a.$SendToMessengerWrapper2,
                          a.$SendToMessengerWrapper3,
                          a.$SendToMessengerWrapper4,
                          a.$SendToMessengerWrapper5
                        )),
                        a.$SendToMessengerWrapper1.subscribe(
                          "render",
                          function () {
                            a.inform("render");
                          }
                        ),
                        a.$SendToMessengerWrapper1.process();
                    }
                  );
                };
                return a;
              })(d("sdk.Observable").Observable);
              b = a;
              g["default"] = b;
            },
            98
          );
          __d(
            "sdk.XFBML.ShareButton",
            ["IframePlugin"],
            function (a, b, c, d, e, f, g) {
              "use strict";
              a = c("IframePlugin").extend({
                constructor: function (a, b, c, d) {
                  this.parent(a, b, c, d);
                },
                getParams: function () {
                  return {
                    href: "url",
                    layout: "string",
                    mobile_iframe: "bool",
                    type: "string",
                    size: "string",
                  };
                },
              });
              b = a;
              g["default"] = b;
            },
            98
          );
          __d(
            "sdk.XFBML.Video",
            [
              "Assert",
              "IframePlugin",
              "ObservableMixin",
              "sdk.Event",
              "sdk.XD",
            ],
            function (a, b, c, d, e, f, g) {
              var h = (function () {
                  function a(a) {
                    (this.$1 = a.isMuted),
                      (this.$2 = a.volume),
                      (this.$3 = a.timePosition),
                      (this.$4 = a.duration);
                  }
                  var b = a.prototype;
                  b.update = function (a) {
                    a.isMuted !== void 0 && (this.$1 = a.isMuted),
                      a.volume !== void 0 && (this.$2 = a.volume),
                      a.timePosition !== void 0 && (this.$3 = a.timePosition),
                      a.duration !== void 0 && (this.$4 = a.duration);
                  };
                  b.isMuted = function () {
                    return this.$1;
                  };
                  b.getVolume = function () {
                    return this.$1 ? 0 : this.$2;
                  };
                  b.getCurrentPosition = function () {
                    return this.$3;
                  };
                  b.getDuration = function () {
                    return this.$4;
                  };
                  return a;
                })(),
                i = (function () {
                  function a(a, b, c) {
                    (this.$1 = a), (this.$2 = b), (this.$3 = c);
                  }
                  var b = a.prototype;
                  b.play = function () {
                    d("sdk.XD").sendToFacebook(this.$1, {
                      method: "play",
                      params: ES("JSON", "stringify", !1, {}),
                    });
                  };
                  b.pause = function () {
                    d("sdk.XD").sendToFacebook(this.$1, {
                      method: "pause",
                      params: ES("JSON", "stringify", !1, {}),
                    });
                  };
                  b.seek = function (a) {
                    c("Assert").isNumber(a, "Invalid argument"),
                      d("sdk.XD").sendToFacebook(this.$1, {
                        method: "seek",
                        params: ES("JSON", "stringify", !1, { target: a }),
                      });
                  };
                  b.mute = function () {
                    d("sdk.XD").sendToFacebook(this.$1, {
                      method: "mute",
                      params: ES("JSON", "stringify", !1, {}),
                    });
                  };
                  b.unmute = function () {
                    d("sdk.XD").sendToFacebook(this.$1, {
                      method: "unmute",
                      params: ES("JSON", "stringify", !1, {}),
                    });
                  };
                  b.setVolume = function (a) {
                    c("Assert").isNumber(a, "Invalid argument"),
                      d("sdk.XD").sendToFacebook(this.$1, {
                        method: "setVolume",
                        params: ES("JSON", "stringify", !1, { volume: a }),
                      });
                  };
                  b.isMuted = function () {
                    return this.$3.isMuted();
                  };
                  b.getVolume = function () {
                    return this.$3.getVolume();
                  };
                  b.getCurrentPosition = function () {
                    return this.$3.getCurrentPosition();
                  };
                  b.getDuration = function () {
                    return this.$3.getDuration();
                  };
                  b.subscribe = function (a, b) {
                    var d = this;
                    c("Assert").isString(a, "Invalid argument");
                    c("Assert").isFunction(b, "Invalid argument");
                    this.$2.subscribe(a, b);
                    return {
                      release: function () {
                        d.$2.unsubscribe(a, b);
                      },
                    };
                  };
                  return a;
                })();
              a = c("IframePlugin").extend({
                constructor: function (a, b, e, f) {
                  this.parent(a, b, e, f),
                    (this._videoController = null),
                    (this._sharedObservable = null),
                    (this._sharedVideoCache = null),
                    this.subscribe("xd.onVideoAPIReady", function (a) {
                      (this._sharedObservable = new (c("ObservableMixin"))()),
                        (this._sharedVideoCache = new h(
                          ES("JSON", "parse", !1, a.data)
                        )),
                        (this._videoController = new i(
                          this._iframeOptions.name,
                          this._sharedObservable,
                          this._sharedVideoCache
                        )),
                        d("sdk.Event").fire("xfbml.ready", {
                          type: "video",
                          id: f.id,
                          instance: this._videoController,
                        });
                    }),
                    this.subscribe("xd.stateChange", function (a) {
                      this._sharedObservable.inform(a.state);
                    }),
                    this.subscribe("xd.cachedStateUpdateRequest", function (a) {
                      this._sharedVideoCache.update(
                        ES("JSON", "parse", !1, a.data)
                      );
                    });
                },
                getParams: function () {
                  return {
                    allowfullscreen: "bool",
                    autoplay: "bool",
                    controls: "bool",
                    href: "url",
                    show_captions: "bool",
                    show_text: "bool",
                  };
                },
                getConfig: function () {
                  return { fluid: !0, full_width: !0 };
                },
              });
              b = a;
              g["default"] = b;
            },
            98
          );
          __d(
            "sdk.CustomTags",
            [
              "sdk.XFBML.Comments",
              "sdk.XFBML.CommentsCount",
              "sdk.XFBML.CustomerChatWrapper",
              "sdk.XFBML.LWIAdsCreation",
              "sdk.XFBML.LWIAdsInsights",
              "sdk.XFBML.LoginButton",
              "sdk.XFBML.MessengerCheckboxWrapper",
              "sdk.XFBML.MessengerMessageUsWrapper",
              "sdk.XFBML.Save",
              "sdk.XFBML.SendToMessengerWrapper",
              "sdk.XFBML.ShareButton",
              "sdk.XFBML.Video",
            ],
            function (a, b, c, d, e, f, g) {
              "use strict";
              a = {
                comments: b("sdk.XFBML.Comments"),
                comments_count: b("sdk.XFBML.CommentsCount"),
                login_button: b("sdk.XFBML.LoginButton"),
                customerchat: d("sdk.XFBML.CustomerChatWrapper")
                  .CustomerChatWrapperPlugin,
                lwi_ads_creation: b("sdk.XFBML.LWIAdsCreation"),
                lwi_ads_insights: b("sdk.XFBML.LWIAdsInsights"),
                messengermessageus: b("sdk.XFBML.MessengerMessageUsWrapper"),
                send_to_messenger: b("sdk.XFBML.SendToMessengerWrapper"),
                messenger_checkbox: b("sdk.XFBML.MessengerCheckboxWrapper"),
                save: b("sdk.XFBML.Save"),
                share_button: b("sdk.XFBML.ShareButton"),
                video: b("sdk.XFBML.Video"),
              };
              c = a;
              g["default"] = c;
            },
            98
          );
          __d(
            "sdk.XFBML-public",
            [
              "AssertionError",
              "FB",
              "IframePlugin",
              "PluginConfig",
              "PluginTags",
              "XFBML",
              "sdk.CustomTags",
              "sdk.Event",
              "sdk.domReady",
              "sdk.feature",
              "wrapFunction",
            ],
            function (a, b, c, d, e, f) {
              function a() {
                b("FB").provide("XFBML", {
                  parse: function (a) {
                    if (
                      a != null &&
                      !(
                        (a.nodeType === 1 || a.nodeType === 9) &&
                        typeof a.nodeName === "string"
                      )
                    )
                      throw new (b("AssertionError"))("Invalid argument");
                    a && a.nodeType === 9 && a.body;
                    return b("XFBML").parse.apply(null, arguments);
                  },
                });
                b("XFBML").subscribe("parse", function (a) {
                  return b("sdk.Event").fire("xfbml.parse", a[0], a[1]);
                });
                b("XFBML").subscribe("render", function (a) {
                  return b("sdk.Event").fire("xfbml.render", a[0], a[1]);
                });
                b("sdk.Event").subscribe("init:post", function (a) {
                  a.xfbml &&
                    window.setTimeout(
                      b("wrapFunction")(
                        ES(
                          b("sdk.domReady"),
                          "bind",
                          !0,
                          null,
                          b("XFBML").parse
                        ),
                        "entry",
                        "init:post:xfbml.parse"
                      ),
                      0
                    );
                });
                try {
                  document.namespaces &&
                    !document.namespaces.item.fb &&
                    document.namespaces.add("fb");
                } catch (a) {}
              }
              function c() {
                var a = b("sdk.feature")("plugin_tags_blocklist", []);
                Object.keys(b("PluginTags")).forEach(function (c) {
                  if (a.indexOf(c) !== -1) return;
                  b("XFBML").registerTag({
                    xmlns: "fb",
                    localName: c.replace(/_/g, "-"),
                    ctor: b("IframePlugin").withParams(
                      b("PluginTags")[c],
                      b("PluginConfig")[c]
                    ),
                  });
                });
                Object.keys(b("sdk.CustomTags")).forEach(function (c) {
                  if (a.indexOf(c) !== -1) return;
                  b("XFBML").registerTag({
                    xmlns: "fb",
                    localName: c.replace(/_/g, "-"),
                    ctor: b("sdk.CustomTags")[c],
                  });
                });
              }
              d = { init: a, initXFBMLBasedSocialPlugin: c };
              e = d;
              f["default"] = e;
            },
            66
          );
          __d(
            "sdk.api-public",
            [
              "ApiClient",
              "FB",
              "sdk.Runtime",
              "sdk.Scribe",
              "sdk.api",
              "sdk.feature",
            ],
            function (a, b, c, d, e, f, g) {
              var h = c("sdk.feature")("should_log_response_error", !1),
                i;
              function a() {
                c("sdk.Runtime").subscribe("ClientID.change", function (a) {
                  return c("ApiClient").setClientID(a);
                }),
                  c("sdk.Runtime").subscribe(
                    "AccessToken.change",
                    function (a) {
                      (i = a), c("ApiClient").setAccessToken(a);
                    }
                  ),
                  c("ApiClient").setDefaultParams({ sdk: "joey" }),
                  c("ApiClient").subscribe(
                    "request.complete",
                    function (a, b, d, e) {
                      a = !1;
                      e &&
                        typeof e === "object" &&
                        (e.error
                          ? (e.error == "invalid_token" ||
                              (e.error.type == "OAuthException" &&
                                e.error.code == 190)) &&
                            (a = !0)
                          : e.error_code && e.error_code == "190" && (a = !0));
                      a &&
                        i === c("sdk.Runtime").getAccessToken() &&
                        c("sdk.Runtime").setAccessToken(null);
                    }
                  ),
                  c("ApiClient").subscribe(
                    "request.complete",
                    function (a, b, d, e) {
                      ((a == "/me/permissions" && b === "delete") ||
                        (a == "/restserver.php" &&
                          d.method == "Auth.revokeAuthorization")) &&
                        e === !0 &&
                        c("sdk.Runtime").setAccessToken(null);
                    }
                  ),
                  c("ApiClient").subscribe(
                    "request.error",
                    function (a, b, e, f) {
                      h &&
                        f.error.type === "http" &&
                        d("sdk.Scribe").log("jssdk_error", {
                          appId: c("sdk.Runtime").getClientID(),
                          error: "transport",
                          extra: {
                            name: "transport",
                            message:
                              ES("JSON", "stringify", !1, f.error) +
                              " from " +
                              a +
                              " , " +
                              b,
                          },
                        });
                    }
                  ),
                  c("FB").provide("", { api: c("sdk.api") });
              }
              b = { init: a };
              e = b;
              g["default"] = e;
            },
            98
          );
          __d(
            "sdk.MBasicInitializer",
            [
              "UrlMap",
              "sdk.DOM",
              "sdk.Runtime",
              "sdk.UA",
              "sdk.URI",
              "sdk.fbt",
            ],
            function (a, b, c, d, e, f, g) {
              var h = function () {
                function a(a) {
                  if (!a) return;
                  var b = a.parentNode;
                  if (!b) return;
                  var e =
                      d("sdk.DOM").getAttr(a, "href") || window.location.href,
                    f = new (c("sdk.URI"))(d("UrlMap").resolve("m"));
                  f.setPath("/dialog/share");
                  f.addQueryData("href", encodeURI(e));
                  f.addQueryData("app_id", c("sdk.Runtime").getClientID());
                  f.addQueryData("mbasic_link", 1);
                  e = document.createElement("a");
                  e.style = "display:inline-block; zoom:1;";
                  e.textContent = c("sdk.fbt")._("Share to Facebook");
                  e.setAttribute("href", f.toString());
                  e.setAttribute("target", "_blank");
                  b.insertBefore(e, a);
                  b.removeChild(a);
                }
                ES(
                  "Array",
                  "from",
                  !1,
                  document.getElementsByTagName("fb:share-button")
                ).forEach(function (b) {
                  return a(b);
                });
                ES(
                  "Array",
                  "from",
                  !1,
                  document.getElementsByClassName("fb-share-button")
                ).forEach(function (b) {
                  return a(b);
                });
              };
              function a() {
                if (!c("sdk.UA").mBasic()) return;
                h();
              }
              g.init = a;
            },
            98
          );
          __d(
            "sdk.init",
            [
              "Log",
              "ManagedError",
              "sdk.Cookie",
              "sdk.Event",
              "sdk.MBasicInitializer",
              "sdk.PlatformVersioning",
              "sdk.Runtime",
              "sdk.UA",
              "sdk.URI",
            ],
            function (a, b, c, d, e, f, g) {
              function h(a) {
                var b =
                  (typeof a === "number" && a > 0) ||
                  (typeof a === "string" &&
                    /^[0-9a-f]{21,}$|^[0-9]{1,21}$/.test(a));
                if (b) return a.toString();
                d("Log").warn(
                  "Invalid App Id: Must be a number or numeric string representing the application id."
                );
                return null;
              }
              function a(a) {
                c("sdk.Runtime").getInitialized() &&
                  d("Log").warn(
                    "FB.init has already been called - this could indicate a problem"
                  );
                if (c("sdk.Runtime").getIsVersioned()) {
                  if (Object.prototype.toString.call(a) !== "[object Object]")
                    throw new (c("ManagedError"))("Invalid argument");
                  if (a.authResponse)
                    throw new (c("ManagedError"))(
                      "Setting authResponse is not supported"
                    );
                  a.version ||
                    (a.version = new (c("sdk.URI"))(
                      location.href
                    ).getQueryData().sdk_version);
                  d("sdk.PlatformVersioning").assertValidVersion(a.version);
                  c("sdk.Runtime").setVersion(a.version);
                } else
                  /number|string/.test(typeof a) &&
                    (d("Log").warn("FB.init called with invalid parameters"),
                    (a = { apiKey: a })),
                    a.status == null && (a.legacyStatusInit = !0),
                    (a = babelHelpers["extends"]({ status: !0 }, a || {}));
                var b = h(a.appId || a.apiKey);
                b !== null && c("sdk.Runtime").setClientID(b);
                "scope" in a && c("sdk.Runtime").setScope(a.scope);
                a.cookie &&
                  (c("sdk.Runtime").setUseCookie(!0),
                  typeof a.cookie === "string" &&
                    d("sdk.Cookie").setDomain(a.cookie));
                (a.localStorage === !1 || a.localStorage === "false") &&
                  c("sdk.Runtime").setUseLocalStorage(!1);
                a.kidDirectedSite && c("sdk.Runtime").setKidDirectedSite(!0);
                a.useFamilyLogin &&
                  c("sdk.Runtime").setShouldLoadFamilyLogin(!0);
                (a.autoLogAppEvents === "1" || a.autoLogAppEvents === "true") &&
                  (a.autoLogAppEvents = !0);
                a.ab && c("sdk.Runtime").setSDKAB(a.ab);
                c("sdk.Runtime").setInitialized(!0);
                c("sdk.UA").mBasic() && d("sdk.MBasicInitializer").init();
                d("sdk.Event").fire("init:post", a);
              }
              g["default"] = a;
            },
            98
          );
          __d(
            "sdk.init-public",
            [
              "FB",
              "QueryString",
              "sdk.AppEvents",
              "sdk.ErrorHandling",
              "sdk.Event",
              "sdk.Frictionless",
              "sdk.XD",
              "sdk.init",
            ],
            function (a, b, c, d, e, f, g) {
              "use strict";
              function a() {
                b("sdk.XD"),
                  b("sdk.AppEvents"),
                  b("sdk.Frictionless"),
                  window.setTimeout(function () {
                    var a =
                      /(connect\.facebook\.net|\.facebook\.com\/assets.php|\.facebook\.net\/assets.php).*?#(.*)/;
                    ES(
                      "Array",
                      "from",
                      !1,
                      window.document.getElementsByTagName("script")
                    ).forEach(function (b) {
                      if (b.src) {
                        b = a.exec(b.src);
                        if (b) {
                          var d = {};
                          b = c("QueryString").decode(b[2]);
                          for (var e in b)
                            if (Object.prototype.hasOwnProperty.call(b, e)) {
                              var f = b[e];
                              f === "0" ? (d[e] = 0) : (d[e] = f);
                            }
                          c("sdk.init")(d);
                        }
                      }
                    });
                    window.fbAsyncInit &&
                      !window.fbAsyncInit.hasRun &&
                      (d("sdk.Event").fire("init:asyncstart"),
                      (window.fbAsyncInit.hasRun = !0),
                      c("sdk.ErrorHandling").unguard(window.fbAsyncInit)());
                  }, 0),
                  c("FB").provide("", { init: c("sdk.init") }),
                  d("sdk.Event").subscribe("init:post", function () {
                    window.__buffer !== void 0 && window.__buffer.replay();
                  }),
                  window.setTimeout(function () {
                    window.__buffer &&
                      window.__buffer.opts &&
                      c("sdk.init")(window.__buffer.opts);
                  }, 0);
              }
              e = { initialize: a };
              f = e;
              g["default"] = f;
            },
            98
          );
          __d(
            "sdk.Time",
            ["Log", "sdk.Impressions", "sdk.Runtime", "sdk.URI", "sdk.feature"],
            function (a, b, c, d, e, f, g) {
              "use strict";
              var h = window.performance,
                i = h && "now" in h && "getEntriesByName" in h,
                j,
                k = {};
              function a() {
                function a(a, b) {
                  var e = !1;
                  try {
                    a = new (c("sdk.URI"))(a.name);
                    var f = a.getDomain();
                    a = a.getPath();
                    e =
                      f === b.getDomain() &&
                      ES(a, "includes", !0, "/rsrc.php/");
                  } catch (a) {
                    d("Log").error(
                      "Malformed URL was passed to the URL constructor: Error %s occured",
                      a.message
                    );
                  }
                  return e;
                }
                function b(b) {
                  var d = h.getEntriesByType("resource").filter(function (d) {
                      return a(d, new (c("sdk.URI"))(b));
                    }),
                    e = d.length >= 1;
                  e ||
                    (d = h.getEntriesByType("resource").filter(function (a) {
                      return ES(a.name, "startsWith", !0, b);
                    }));
                  return d;
                }
                if (i) {
                  var e = c("sdk.Runtime").getSDKUrl(),
                    f = null;
                  b = b(e);
                  if (b.length > 1)
                    if (b > 2) b = null;
                    else {
                      var g = ES(b, "findIndex", !0, function (a) {
                        return ES(a.name, "startsWith", !0, e + "?hash=");
                      });
                      !g ? (b = null) : ((f = b.splice(g)[0]), (b = b[0]));
                    }
                  else if (b.length === 1) {
                    g = document.getElementById("facebook-jssdk-iframe");
                    g &&
                      g instanceof HTMLIFrameElement &&
                      (f = g.contentWindow.performance
                        .getEntriesByType("resource")
                        .find(function (a) {
                          return ES(a.name, "startsWith", !0, e);
                        }));
                    b = b[0];
                  } else b = null;
                  b &&
                    ((k.fetchTime = Math.round(b.duration)),
                    f && (k.fetchTime += Math.round(f.duration)),
                    "transferSize" in b &&
                      ((k.transferSize = b.transferSize),
                      f && (k.transferSize += f.transferSize)),
                    d("Log").debug(
                      "sdkperf: it took %s ms and %s bytes to load %s",
                      k.fetchTime,
                      k.transferSize,
                      e
                    ),
                    (j = b.startTime),
                    (k.ns = c("sdk.Runtime").getSDKNS()),
                    j &&
                      window.setTimeout(function () {
                        var a = c("sdk.feature")("log_perf", !1),
                          b = c("sdk.Runtime").getSDKAB();
                        b && ((k.ab = b), (a = !0));
                        a && d("sdk.Impressions").log(116, k);
                      }, 1e4));
                }
              }
              function b(a) {
                if (!i || !j) return;
                k[a] = Math.round(h.now() - j);
                d("Log").debug("sdkperf: %s logged after %s ms", a, k[a]);
              }
              g.recordBootload = a;
              g.log = b;
            },
            98
          );
          __d(
            "sdk.time-public",
            ["runOnce", "sdk.Event", "sdk.Time"],
            function (a, b, c, d, e, f, g) {
              "use strict";
              function a() {
                d("sdk.Time").recordBootload(),
                  d("sdk.Event").subscribe("init:post", function () {
                    d("sdk.Time").log("init");
                  }),
                  d("sdk.Event").subscribe("init:asyncstart", function () {
                    d("sdk.Time").log("asyncstart");
                  }),
                  d("sdk.Event").subscribe(
                    "iframeplugin:create",
                    c("runOnce")(function () {
                      return d("sdk.Time").log("pluginframe");
                    })
                  ),
                  d("sdk.Event").subscribe(
                    "iframeplugin:onload",
                    c("runOnce")(function () {
                      return d("sdk.Time").log("ttfp");
                    })
                  );
              }
              b = { init: a };
              e = b;
              g["default"] = e;
            },
            98
          );
          __d(
            "legacy:fb.sdk.index",
            [
              "FB",
              "sdk.AppEvents-public",
              "sdk.Auth-public",
              "sdk.Canvas-public",
              "sdk.Event-public",
              "sdk.Frictionless-public",
              "sdk.GamingServices-public",
              "sdk.Runtime",
              "sdk.XFBML-public",
              "sdk.api-public",
              "sdk.init-public",
              "sdk.time-public",
              "sdk.ui",
            ],
            function (a, b, c, d, e, f, g) {
              c("sdk.api-public").init(),
                c("sdk.AppEvents-public").init(),
                c("sdk.Auth-public").init(),
                c("sdk.Canvas-public").init(),
                c("sdk.Canvas-public").initCanvasPlugin(),
                c("sdk.Canvas-public").initCanvasPrefetcher(),
                c("sdk.Canvas-public").initCanvasPresence(),
                c("sdk.Event-public").init(),
                c("sdk.Frictionless-public").init(),
                c("sdk.GamingServices-public").init(),
                c("sdk.init-public").initialize(),
                c("sdk.time-public").init(),
                c("FB").provide("", { ui: c("sdk.ui") }),
                c("sdk.XFBML-public").init(),
                c("sdk.XFBML-public").initXFBMLBasedSocialPlugin(),
                c("sdk.Runtime").setIsVersioned(!0);
            },
            35
          );
          window.FB &&
            window.FB.__buffer &&
            (window.__buffer = babelHelpers["extends"]({}, window.FB.__buffer));
        }
      }.call(global));
    })();
} catch (e) {
  var i = new Image();
  i.crossOrigin = "anonymous";
  i.dataset.testid = "fbSDKErrorReport";
  i.src =
    "https://www.facebook.com/platform/scribe_endpoint.php/?c=jssdk_error&m=" +
    encodeURIComponent(
      '{"error":"LOAD", "extra": {"name":"' +
        e.name +
        '","line":"' +
        (e.lineNumber || e.line) +
        '","script":"' +
        (e.fileName || e.sourceURL || e.script || "sdk.js") +
        '","stack":"' +
        (e.stackTrace || e.stack) +
        '","revision":"1006801365","namespace":"FB","message":"' +
        e.message +
        '"}}'
    );
  document.body.appendChild(i);
}
