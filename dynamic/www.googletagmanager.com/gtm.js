// Copyright 2012 Google Inc. All rights reserved.
(function () {
  var data = {
    resource: {
      version: "1",

      macros: [
        {
          function: "__u",
          vtp_component: "URL",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          vtp_component: "HOST",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          vtp_component: "PATH",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        { function: "__f", vtp_component: "URL" },
        { function: "__e" },
      ],
      tags: [],
      predicates: [],
      rules: [],
    },
    runtime: [],
  };

  /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var ba,
    da = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    ea =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    fa;
  if ("function" == typeof Object.setPrototypeOf) fa = Object.setPrototypeOf;
  else {
    var ha;
    a: {
      var ia = { a: !0 },
        ja = {};
      try {
        ja.__proto__ = ia;
        ha = ja.a;
        break a;
      } catch (a) {}
      ha = !1;
    }
    fa = ha
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var ka = fa,
    la = function (a, b) {
      a.prototype = ea(b.prototype);
      a.prototype.constructor = a;
      if (ka) ka(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.jl = b.prototype;
    },
    ma = this || self,
    na = function (a) {
      return a;
    };
  var oa = function () {},
    pa = function (a) {
      return "function" === typeof a;
    },
    h = function (a) {
      return "string" === typeof a;
    },
    qa = function (a) {
      return "number" === typeof a && !isNaN(a);
    },
    ra = Array.isArray,
    sa = function (a, b) {
      if (a && ra(a))
        for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
    },
    ta = function (a, b) {
      if (!qa(a) || !qa(b) || a > b) (a = 0), (b = 2147483647);
      return Math.floor(Math.random() * (b - a + 1) + a);
    },
    xa = function (a, b) {
      for (var c = new ua(), d = 0; d < a.length; d++) c.set(a[d], !0);
      for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
      return !1;
    },
    k = function (a, b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
    },
    za = function (a) {
      return (
        !!a &&
        ("[object Arguments]" === Object.prototype.toString.call(a) ||
          Object.prototype.hasOwnProperty.call(a, "callee"))
      );
    },
    Aa = function (a) {
      return Math.round(Number(a)) || 0;
    },
    Ba = function (a) {
      return "false" === String(a).toLowerCase() ? !1 : !!a;
    },
    Ca = function (a) {
      var b = [];
      if (ra(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b;
    },
    Da = function (a) {
      return a ? a.replace(/^\s+|\s+$/g, "") : "";
    },
    Ea = function () {
      return new Date(Date.now());
    },
    z = function () {
      return Ea().getTime();
    },
    ua = function () {
      this.prefix = "gtm.";
      this.values = {};
    };
  ua.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  ua.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  var Fa = function (a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c;
    },
    Ga = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = void 0;
          try {
            c();
          } catch (d) {}
        }
      };
    },
    Ha = function (a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    },
    Ia = function (a) {
      for (var b in a) if (a.hasOwnProperty(b)) return !0;
      return !1;
    },
    Ja = function (a, b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c;
    },
    Ka = function (a, b) {
      for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
        d = d[e[f]] = {};
      d[e[e.length - 1]] = b;
      return c;
    },
    La = /^\w{1,9}$/,
    Ma = function (a, b) {
      a = a || {};
      b = b || ",";
      var c = [];
      k(a, function (d, e) {
        La.test(d) && e && c.push(d);
      });
      return c.join(b);
    },
    Na = function (a, b) {
      function c() {
        ++d === b && (e(), (e = null), (c.done = !0));
      }
      var d = 0,
        e = a;
      c.done = !1;
      return c;
    };
  function Qa() {
    for (var a = Ra, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function Sa() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var Ra, Ta;
  function Ua(a) {
    Ra = Ra || Sa();
    Ta = Ta || Qa();
    for (var b = [], c = 0; c < a.length; c += 3) {
      var d = c + 1 < a.length,
        e = c + 2 < a.length,
        f = a.charCodeAt(c),
        g = d ? a.charCodeAt(c + 1) : 0,
        l = e ? a.charCodeAt(c + 2) : 0,
        m = f >> 2,
        n = ((f & 3) << 4) | (g >> 4),
        p = ((g & 15) << 2) | (l >> 6),
        q = l & 63;
      e || ((q = 64), d || (p = 64));
      b.push(Ra[m], Ra[n], Ra[p], Ra[q]);
    }
    return b.join("");
  }
  function Va(a) {
    function b(m) {
      for (; d < a.length; ) {
        var n = a.charAt(d++),
          p = Ta[n];
        if (null != p) return p;
        if (!/^[\s\xa0]*$/.test(n))
          throw Error("Unknown base64 encoding at char: " + n);
      }
      return m;
    }
    Ra = Ra || Sa();
    Ta = Ta || Qa();
    for (var c = "", d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        g = b(64),
        l = b(64);
      if (64 === l && -1 === e) return c;
      c += String.fromCharCode((e << 2) | (f >> 4));
      64 != g &&
        ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))),
        64 != l && (c += String.fromCharCode(((g << 6) & 192) | l)));
    }
  }
  var Wa = {},
    Xa = function (a, b) {
      Wa[a] = Wa[a] || [];
      Wa[a][b] = !0;
    },
    Ya = function () {
      delete Wa.GA4_EVENT;
    },
    Za = function (a) {
      var b = Wa[a];
      if (!b || 0 === b.length) return "";
      for (var c = [], d = 0, e = 0; e < b.length; e++)
        0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), (d = 0)),
          b[e] && (d |= 1 << e % 8);
      0 < d && c.push(String.fromCharCode(d));
      return Ua(c.join("")).replace(/\.+$/, "");
    };
  var $a = Array.prototype.indexOf
    ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0);
      }
    : function (a, b) {
        if ("string" === typeof a)
          return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      };
  var ab,
    bb = function () {
      if (void 0 === ab) {
        var a = null,
          b = ma.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy("goog#html", {
              createHTML: na,
              createScript: na,
              createScriptURL: na,
            });
          } catch (c) {
            ma.console && ma.console.error(c.message);
          }
          ab = a;
        } else ab = a;
      }
      return ab;
    };
  var db = function (a, b) {
    this.h = b === cb ? a : "";
  };
  db.prototype.toString = function () {
    return this.h + "";
  };
  var cb = {};
  var eb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
  function fb() {
    var a = ma.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return "";
  }
  function gb(a) {
    return -1 != fb().indexOf(a);
  }
  function hb() {
    return gb("Firefox") || gb("FxiOS");
  }
  function ib() {
    return ((gb("Chrome") || gb("CriOS")) && !gb("Edge")) || gb("Silk");
  }
  var jb = {},
    kb = function (a, b) {
      this.h = b === jb ? a : "";
    };
  kb.prototype.toString = function () {
    return this.h.toString();
  }; /*

 SPDX-License-Identifier: Apache-2.0
*/
  try {
    new URL("s://g");
  } catch (a) {}
  var lb = {};
  function mb(a, b) {
    if (void 0 !== a.tagName) {
      if ("script" === a.tagName.toLowerCase())
        throw Error("Use setTextContent with a SafeScript.");
      if ("style" === a.tagName.toLowerCase())
        throw Error("Use setTextContent with a SafeStyleSheet.");
    }
    a.innerHTML =
      b instanceof kb && b.constructor === kb ? b.h : "type_error:SafeHtml";
  }
  var nb = [
    [
      "dir",
      {
        hc: 3,
        conditions: new Map([["dir", new Set(["auto", "ltr", "rtl"])]]),
      },
    ],
    ["async", { hc: 3, conditions: new Map([["async", new Set(["async"])]]) }],
    ["cite", { hc: 2 }],
    [
      "loading",
      { hc: 3, conditions: new Map([["loading", new Set(["eager", "lazy"])]]) },
    ],
    ["poster", { hc: 2 }],
    [
      "target",
      {
        hc: 3,
        conditions: new Map([["target", new Set(["_self", "_blank"])]]),
      },
    ],
  ];
  "title aria-atomic aria-autocomplete aria-busy aria-checked aria-current aria-disabled aria-dropeffect aria-expanded aria-haspopup aria-hidden aria-invalid aria-label aria-level aria-live aria-multiline aria-multiselectable aria-orientation aria-posinset aria-pressed aria-readonly aria-relevant aria-required aria-selected aria-setsize aria-sort aria-valuemax aria-valuemin aria-valuenow aria-valuetext alt align autocapitalize autocomplete autocorrect autofocus autoplay bgcolor border cellpadding cellspacing checked color cols colspan controls datetime disabled download draggable enctype face formenctype frameborder height hreflang hidden ismap label lang loop max maxlength media minlength min multiple muted nonce open placeholder preload rel required reversed role rows rowspan selected shape size sizes slot span spellcheck start step summary translate type valign value width wrap itemscope itemtype itemid itemprop itemref"
    .split(" ")
    .concat(["class", "id"]);
  nb.concat([["style", { hc: 4 }]]);
  var ob = function () {
    if (lb !== lb) throw Error("Bad secret");
  };
  new ob();
  new ob();
  function pb(a) {
    var b = (a = qb(a)),
      c = bb(),
      d = c ? c.createHTML(b) : b;
    return new kb(d, jb);
  }
  function qb(a) {
    return null === a ? "null" : void 0 === a ? "undefined" : a;
  }
  var E = window,
    F = document,
    rb = navigator,
    sb = F.currentScript && F.currentScript.src,
    tb = function (a, b) {
      var c = E[a];
      E[a] = void 0 === c ? b : c;
      return E[a];
    },
    ub = function (a, b) {
      b &&
        (a.addEventListener
          ? (a.onload = b)
          : (a.onreadystatechange = function () {
              a.readyState in { loaded: 1, complete: 1 } &&
                ((a.onreadystatechange = null), b());
            }));
    },
    vb = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
    wb = { onload: 1, src: 1, width: 1, height: 1, style: 1 };
  function xb(a, b, c) {
    b &&
      k(b, function (d, e) {
        d = d.toLowerCase();
        c.hasOwnProperty(d) || a.setAttribute(d, e);
      });
  }
  var yb = function (a, b, c, d, e) {
      var f = F.createElement("script");
      xb(f, d, vb);
      f.type = "text/javascript";
      f.async = !0;
      var g,
        l = qb(a),
        m = bb(),
        n = m ? m.createScriptURL(l) : l;
      g = new db(n, cb);
      f.src =
        g instanceof db && g.constructor === db
          ? g.h
          : "type_error:TrustedResourceUrl";
      var p,
        q,
        t,
        u =
          null ==
          (t = (q = ((f.ownerDocument && f.ownerDocument.defaultView) || window)
            .document).querySelector)
            ? void 0
            : t.call(q, "script[nonce]");
      (p = u ? u.nonce || u.getAttribute("nonce") || "" : "") &&
        f.setAttribute("nonce", p);
      ub(f, b);
      c && (f.onerror = c);
      if (e) e.appendChild(f);
      else {
        var r = F.getElementsByTagName("script")[0] || F.body || F.head;
        r.parentNode.insertBefore(f, r);
      }
      return f;
    },
    zb = function () {
      if (sb) {
        var a = sb.toLowerCase();
        if (0 === a.indexOf("https://")) return 2;
        if (0 === a.indexOf("http://")) return 3;
      }
      return 1;
    },
    Ab = function (a, b, c, d, e) {
      var f;
      f = void 0 === f ? !0 : f;
      var g = e,
        l = !1;
      g || ((g = F.createElement("iframe")), (l = !0));
      xb(g, c, wb);
      d &&
        k(d, function (n, p) {
          g.dataset[n] = p;
        });
      f &&
        ((g.height = "0"),
        (g.width = "0"),
        (g.style.display = "none"),
        (g.style.visibility = "hidden"));
      if (l) {
        var m = (F.body && F.body.lastChild) || F.body || F.head;
        m.parentNode.insertBefore(g, m);
      }
      ub(g, b);
      void 0 !== a && (g.src = a);
      return g;
    },
    Bb = function (a, b, c) {
      var d = new Image(1, 1);
      d.onload = function () {
        d.onload = null;
        b && b();
      };
      d.onerror = function () {
        d.onerror = null;
        c && c();
      };
      d.src = a;
    },
    Cb = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, !!d)
        : a.attachEvent && a.attachEvent("on" + b, c);
    },
    Db = function (a, b, c) {
      a.removeEventListener
        ? a.removeEventListener(b, c, !1)
        : a.detachEvent && a.detachEvent("on" + b, c);
    },
    G = function (a) {
      E.setTimeout(a, 0);
    },
    Eb = function (a, b) {
      return a && b && a.attributes && a.attributes[b]
        ? a.attributes[b].value
        : null;
    },
    Fb = function (a) {
      var b = a.innerText || a.textContent || "";
      b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
      return b;
    },
    Gb = function (a) {
      var b = F.createElement("div");
      mb(b, pb("A<div>" + a + "</div>"));
      b = b.lastChild;
      for (var c = []; b.firstChild; ) c.push(b.removeChild(b.firstChild));
      return c;
    },
    Hb = function (a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, g = 0; f && g <= c; g++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement;
      }
      return null;
    },
    Ib = function (a) {
      var b;
      try {
        b = rb.sendBeacon && rb.sendBeacon(a);
      } catch (c) {
        Xa("TAGGING", 15);
      }
      b || Bb(a);
    },
    Jb = function (a, b) {
      var c = a[b];
      c && "string" === typeof c.animVal && (c = c.animVal);
      return c;
    },
    Kb = function () {
      var a = E.performance;
      if (a && pa(a.now)) return a.now();
    },
    Lb = function () {
      return E.performance || void 0;
    }; /*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var Mb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    Nb = function (a) {
      if (null == a) return String(a);
      var b = Mb.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    Ob = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    Pb = function (a) {
      if (!a || "object" != Nb(a) || a.nodeType || a == a.window) return !1;
      try {
        if (
          a.constructor &&
          !Ob(a, "constructor") &&
          !Ob(a.constructor.prototype, "isPrototypeOf")
        )
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return void 0 === b || Ob(a, b);
    },
    I = function (a, b) {
      var c = b || ("array" == Nb(a) ? [] : {}),
        d;
      for (d in a)
        if (Ob(a, d)) {
          var e = a[d];
          "array" == Nb(e)
            ? ("array" != Nb(c[d]) && (c[d] = []), (c[d] = I(e, c[d])))
            : Pb(e)
            ? (Pb(c[d]) || (c[d] = {}), (c[d] = I(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  var Qb = function (a) {
    if (void 0 === a || ra(a) || Pb(a)) return !0;
    switch (typeof a) {
      case "boolean":
      case "number":
      case "string":
      case "function":
        return !0;
    }
    return !1;
  };
  var Rb = (function () {
    var a = function (b) {
      return {
        toString: function () {
          return b;
        },
      };
    };
    return {
      Zh: a("consent"),
      Xf: a("convert_case_to"),
      Yf: a("convert_false_to"),
      Zf: a("convert_null_to"),
      ag: a("convert_true_to"),
      cg: a("convert_undefined_to"),
      Mk: a("debug_mode_metadata"),
      Sa: a("function"),
      bf: a("instance_name"),
      Ri: a("live_only"),
      Si: a("malware_disabled"),
      Ti: a("metadata"),
      Wi: a("original_activity_id"),
      Tk: a("original_vendor_template_id"),
      Sk: a("once_on_load"),
      Vi: a("once_per_event"),
      bh: a("once_per_load"),
      Uk: a("priority_override"),
      Vk: a("respected_consent_types"),
      gh: a("setup_tags"),
      sb: a("tag_id"),
      ih: a("teardown_tags"),
    };
  })();
  var nc;
  var oc = [],
    pc = [],
    qc = [],
    rc = [],
    sc = [],
    tc = {},
    uc,
    vc,
    xc = function () {
      var a = wc;
      vc = vc || a;
    },
    yc,
    zc = function (a, b) {
      var c = a["function"],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = tc[c],
        f = {},
        g;
      for (g in a)
        a.hasOwnProperty(g) &&
          0 === g.indexOf("vtp_") &&
          (e && d && d.nh && d.nh(a[g]),
          (f[void 0 !== e ? g : g.substr(4)] = a[g]));
      e && d && d.mh && (f.vtp_gtmCachedValues = d.mh);
      if (b) {
        if (null == b.name) {
          var l;
          a: {
            var m = b.index;
            if (null == m) l = "";
            else {
              var n;
              switch (b.type) {
                case 2:
                  n = oc[m];
                  break;
                case 1:
                  n = rc[m];
                  break;
                default:
                  l = "";
                  break a;
              }
              var p = n && n[Rb.bf];
              l = p ? String(p) : "";
            }
          }
          b.name = l;
        }
        e && ((f.vtp_gtmEntityIndex = b.index), (f.vtp_gtmEntityName = b.name));
      }
      return void 0 !== e ? e(f) : nc(c, f, b);
    },
    Bc = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = Ac(a[e], b, c));
      return d;
    },
    Ac = function (a, b, c) {
      if (ra(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(Ac(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var g = oc[f];
            if (!g || b.yf(g)) return;
            c[f] = !0;
            var l = String(g[Rb.bf]);
            try {
              var m = Bc(g, b, c);
              m.vtp_gtmEventId = b.id;
              b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
              d = zc(m, { event: b, index: f, type: 2, name: l });
              yc && (d = yc.qj(d, m));
            } catch (x) {
              b.zh && b.zh(x, Number(f), l), (d = !1);
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var n = 1; n < a.length; n += 2)
              d[Ac(a[n], b, c)] = Ac(a[n + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var p = !1, q = 1; q < a.length; q++) {
              var t = Ac(a[q], b, c);
              vc && (p = p || t === vc.Vd);
              d.push(t);
            }
            return vc && p ? vc.rj(d) : d.join("");
          case "escape":
            d = Ac(a[1], b, c);
            if (vc && ra(a[1]) && "macro" === a[1][0] && vc.Pj(a))
              return vc.ik(d);
            d = String(d);
            for (var u = 2; u < a.length; u++) Sb[a[u]] && (d = Sb[a[u]](d));
            return d;
          case "tag":
            var r = a[1];
            if (!rc[r])
              throw Error("Unable to resolve tag reference " + r + ".");
            return (d = { sh: a[2], index: r });
          case "zb":
            var v = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
            v["function"] = a[1];
            var w = Cc(v, b, c),
              y = !!a[4];
            return y || 2 !== w ? y !== (1 === w) : null;
          default:
            throw Error(
              "Attempting to expand unknown Value type: " + a[0] + "."
            );
        }
      }
      return a;
    },
    Cc = function (a, b, c) {
      try {
        return uc(Bc(a, b, c));
      } catch (d) {
        JSON.stringify(a);
      }
      return 2;
    };
  var Fc = function (a) {
      function b(t) {
        for (var u = 0; u < t.length; u++) d[t[u]] = !0;
      }
      for (var c = [], d = [], e = Dc(a), f = 0; f < pc.length; f++) {
        var g = pc[f],
          l = Ec(g, e);
        if (l) {
          for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
          b(g.block || []);
        } else null === l && b(g.block || []);
      }
      for (var p = [], q = 0; q < rc.length; q++) c[q] && !d[q] && (p[q] = !0);
      return p;
    },
    Ec = function (a, b) {
      for (var c = a["if"] || [], d = 0; d < c.length; d++) {
        var e = b(c[d]);
        if (0 === e) return !1;
        if (2 === e) return null;
      }
      for (var f = a.unless || [], g = 0; g < f.length; g++) {
        var l = b(f[g]);
        if (2 === l) return null;
        if (1 === l) return !1;
      }
      return !0;
    },
    Dc = function (a) {
      var b = [];
      return function (c) {
        void 0 === b[c] && (b[c] = Cc(qc[c], a));
        return b[c];
      };
    };
  var Gc = {
    qj: function (a, b) {
      b[Rb.Xf] &&
        "string" === typeof a &&
        (a = 1 == b[Rb.Xf] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(Rb.Zf) && null === a && (a = b[Rb.Zf]);
      b.hasOwnProperty(Rb.cg) && void 0 === a && (a = b[Rb.cg]);
      b.hasOwnProperty(Rb.ag) && !0 === a && (a = b[Rb.ag]);
      b.hasOwnProperty(Rb.Yf) && !1 === a && (a = b[Rb.Yf]);
      return a;
    },
  };
  var cd = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;
  function dd(a, b) {
    return "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
      (a << 2) | b
    ];
  }
  var fd = function (a) {
      return ed ? F.querySelectorAll(a) : null;
    },
    jd = function (a, b) {
      if (!ed) return null;
      if (Element.prototype.closest)
        try {
          return a.closest(b);
        } catch (e) {
          return null;
        }
      var c =
          Element.prototype.matches ||
          Element.prototype.webkitMatchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector ||
          Element.prototype.oMatchesSelector,
        d = a;
      if (!F.documentElement.contains(d)) return null;
      do {
        try {
          if (c.call(d, b)) return d;
        } catch (e) {
          break;
        }
        d = d.parentElement || d.parentNode;
      } while (null !== d && 1 === d.nodeType);
      return null;
    },
    kd = !1;
  if (F.querySelectorAll)
    try {
      var ld = F.querySelectorAll(":root");
      ld && 1 == ld.length && ld[0] == F.documentElement && (kd = !0);
    } catch (a) {}
  var ed = kd;
  var O = function (a) {
    Xa("GTM", a);
  };
  var P = {
      g: {
        F: "ad_storage",
        T: "analytics_storage",
        Tf: "region",
        Uf: "consent_updated",
        Vf: "wait_for_update",
        ei: "app_remove",
        fi: "app_store_refund",
        gi: "app_store_subscription_cancel",
        hi: "app_store_subscription_convert",
        ii: "app_store_subscription_renew",
        dg: "add_payment_info",
        eg: "add_shipping_info",
        uc: "add_to_cart",
        vc: "remove_from_cart",
        fg: "view_cart",
        Nb: "begin_checkout",
        wc: "select_item",
        vb: "view_item_list",
        Ob: "select_promotion",
        wb: "view_promotion",
        Ca: "purchase",
        xc: "refund",
        Ia: "view_item",
        gg: "add_to_wishlist",
        ji: "first_open",
        ki: "first_visit",
        wa: "gtag.config",
        Da: "gtag.get",
        li: "in_app_purchase",
        yc: "page_view",
        mi: "session_start",
        Ae: "user_engagement",
        Pb: "gclid",
        da: "ads_data_redaction",
        X: "allow_ad_personalization_signals",
        Be: "allow_custom_scripts",
        ni: "allow_display_features",
        zc: "allow_enhanced_conversions",
        xb: "allow_google_signals",
        xa: "allow_interest_groups",
        Ad: "auid",
        oi: "auto_detection_enabled",
        Xa: "aw_remarketing",
        Bd: "aw_remarketing_only",
        Ac: "discount",
        Bc: "aw_feed_country",
        Cc: "aw_feed_language",
        Z: "items",
        Dc: "aw_merchant_id",
        hg: "aw_basket_type",
        Cd: "campaign_content",
        Dd: "campaign_id",
        Ed: "campaign_medium",
        Fd: "campaign_name",
        Ec: "campaign",
        Gd: "campaign_source",
        Hd: "campaign_term",
        pb: "client_id",
        ri: "content_group",
        si: "content_type",
        Ea: "conversion_cookie_prefix",
        Fc: "conversion_id",
        Ya: "conversion_label",
        ra: "conversion_linker",
        Ce: "conversion_api",
        Za: "cookie_domain",
        Ja: "cookie_expires",
        ab: "cookie_flags",
        Gc: "cookie_name",
        De: "cookie_path",
        Qa: "cookie_prefix",
        yb: "cookie_update",
        Qb: "country",
        na: "currency",
        Hc: "customer_lifetime_value",
        Ic: "custom_map",
        ui: "debug_mode",
        aa: "developer_id",
        ig: "disable_merchant_reported_purchases",
        vi: "dc_custom_params",
        wi: "dc_natural_search",
        Ee: "dynamic_event_settings",
        xi: "affiliation",
        jg: "checkout_option",
        kg: "checkout_step",
        yi: "coupon",
        Fe: "item_list_name",
        Ge: "list_name",
        zi: "promotions",
        Jc: "shipping",
        lg: "tax",
        Id: "engagement_time_msec",
        Kc: "enhanced_client_id",
        Lc: "enhanced_conversions",
        mg: "enhanced_conversions_automatic_settings",
        Mc: "estimated_delivery_date",
        He: "euid_logged_in_state",
        Rb: "event_callback",
        Sb: "event_developer_id_string",
        ng: "event",
        Jd: "event_settings",
        Kd: "event_timeout",
        Ai: "experiments",
        Ie: "firebase_id",
        Ld: "first_party_collection",
        Md: "_x_20",
        zb: "_x_19",
        og: "fledge",
        pg: "flight_error_code",
        qg: "flight_error_message",
        rg: "gac_gclid",
        Nd: "gac_wbraid",
        sg: "gac_wbraid_multiple_conversions",
        Je: "ga_restrict_domain",
        Ke: "ga_temp_client_id",
        ug: "gdpr_applies",
        vg: "geo_granularity",
        cb: "value_callback",
        Ra: "value_key",
        Tb: "global_developer_id_string",
        Nk: "google_ono",
        eb: "google_signals",
        Nc: "google_tld",
        Od: "groups",
        wg: "gsa_experiment_id",
        xg: "iframe_state",
        Pd: "ignore_referrer",
        Le: "internal_traffic_results",
        Qd: "is_legacy_loaded",
        yg: "is_passthrough",
        Ka: "language",
        Me: "legacy_developer_id_string",
        sa: "linker",
        Ub: "accept_incoming",
        Ab: "decorate_forms",
        N: "domains",
        Vb: "url_position",
        zg: "method",
        Wb: "new_customer",
        Ag: "non_interaction",
        Bi: "optimize_id",
        La: "page_location",
        Ne: "page_path",
        Ma: "page_referrer",
        Xb: "page_title",
        Bg: "passengers",
        Cg: "phone_conversion_callback",
        Ci: "phone_conversion_country_code",
        Dg: "phone_conversion_css_class",
        Di: "phone_conversion_ids",
        Eg: "phone_conversion_number",
        Fg: "phone_conversion_options",
        Gg: "quantity",
        Oc: "redact_device_info",
        Oe: "redact_enhanced_user_id",
        Ei: "redact_ga_client_id",
        Fi: "redact_user_id",
        Rd: "referral_exclusion_definition",
        qb: "restricted_data_processing",
        Gi: "retoken",
        Hg: "screen_name",
        Bb: "screen_resolution",
        Hi: "search_term",
        ya: "send_page_view",
        Cb: "send_to",
        Pc: "session_duration",
        Sd: "session_engaged",
        Pe: "session_engaged_time",
        rb: "session_id",
        Td: "session_number",
        Yb: "delivery_postal_code",
        Ig: "tc_privacy_string",
        Jg: "temporary_client_id",
        Ii: "tracking_id",
        Qe: "traffic_type",
        Fa: "transaction_id",
        oa: "transport_url",
        Kg: "trip_type",
        Qc: "update",
        fb: "url_passthrough",
        Re: "_user_agent_architecture",
        Se: "_user_agent_bitness",
        Te: "_user_agent_full_version_list",
        Lg: "_user_agent_mobile",
        Ue: "_user_agent_model",
        Ve: "_user_agent_platform",
        We: "_user_agent_platform_version",
        Mg: "_user_agent_wait",
        Xe: "_user_agent_wow64",
        fa: "user_data",
        Ng: "user_data_auto_latency",
        Og: "user_data_auto_meta",
        Pg: "user_data_auto_multi",
        Qg: "user_data_auto_selectors",
        Rg: "user_data_auto_status",
        Sg: "user_data_mode",
        Ye: "user_data_settings",
        va: "user_id",
        Na: "user_properties",
        Tg: "us_privacy_string",
        la: "value",
        Ud: "wbraid",
        Ug: "wbraid_multiple_conversions",
        Xg: "_host_name",
        Yg: "_in_page_command",
        cf: "_is_linker_valid",
        Zg: "_is_passthrough_cid",
        ah: "non_personalized_ads",
        Uc: "_sst_parameters",
      },
    },
    Jd = {},
    Kd = Object.freeze(
      ((Jd[P.g.X] = 1),
      (Jd[P.g.zc] = 1),
      (Jd[P.g.xb] = 1),
      (Jd[P.g.Z] = 1),
      (Jd[P.g.Za] = 1),
      (Jd[P.g.Ja] = 1),
      (Jd[P.g.ab] = 1),
      (Jd[P.g.Gc] = 1),
      (Jd[P.g.De] = 1),
      (Jd[P.g.Qa] = 1),
      (Jd[P.g.yb] = 1),
      (Jd[P.g.Ic] = 1),
      (Jd[P.g.aa] = 1),
      (Jd[P.g.Ee] = 1),
      (Jd[P.g.Rb] = 1),
      (Jd[P.g.Jd] = 1),
      (Jd[P.g.Kd] = 1),
      (Jd[P.g.Ld] = 1),
      (Jd[P.g.Je] = 1),
      (Jd[P.g.eb] = 1),
      (Jd[P.g.Nc] = 1),
      (Jd[P.g.Od] = 1),
      (Jd[P.g.Le] = 1),
      (Jd[P.g.Qd] = 1),
      (Jd[P.g.sa] = 1),
      (Jd[P.g.Oe] = 1),
      (Jd[P.g.Rd] = 1),
      (Jd[P.g.qb] = 1),
      (Jd[P.g.ya] = 1),
      (Jd[P.g.Cb] = 1),
      (Jd[P.g.Pc] = 1),
      (Jd[P.g.Pe] = 1),
      (Jd[P.g.Yb] = 1),
      (Jd[P.g.oa] = 1),
      (Jd[P.g.Qc] = 1),
      (Jd[P.g.Ye] = 1),
      (Jd[P.g.Na] = 1),
      (Jd[P.g.Uc] = 1),
      Jd)
    );
  Object.freeze([
    P.g.La,
    P.g.Ma,
    P.g.Xb,
    P.g.Ka,
    P.g.Hg,
    P.g.va,
    P.g.Ie,
    P.g.ri,
  ]);
  var Ld = {},
    Md = Object.freeze(
      ((Ld[P.g.ei] = 1),
      (Ld[P.g.fi] = 1),
      (Ld[P.g.gi] = 1),
      (Ld[P.g.hi] = 1),
      (Ld[P.g.ii] = 1),
      (Ld[P.g.ji] = 1),
      (Ld[P.g.ki] = 1),
      (Ld[P.g.li] = 1),
      (Ld[P.g.mi] = 1),
      (Ld[P.g.Ae] = 1),
      Ld)
    ),
    Nd = {},
    Od = Object.freeze(
      ((Nd[P.g.dg] = 1),
      (Nd[P.g.eg] = 1),
      (Nd[P.g.uc] = 1),
      (Nd[P.g.vc] = 1),
      (Nd[P.g.fg] = 1),
      (Nd[P.g.Nb] = 1),
      (Nd[P.g.wc] = 1),
      (Nd[P.g.vb] = 1),
      (Nd[P.g.Ob] = 1),
      (Nd[P.g.wb] = 1),
      (Nd[P.g.Ca] = 1),
      (Nd[P.g.xc] = 1),
      (Nd[P.g.Ia] = 1),
      (Nd[P.g.gg] = 1),
      Nd)
    ),
    Pd = Object.freeze([P.g.X, P.g.xb, P.g.yb]),
    Qd = Object.freeze([].concat(Pd)),
    Sd = Object.freeze([P.g.Ja, P.g.Kd, P.g.Pc, P.g.Pe, P.g.Id]),
    Td = Object.freeze([].concat(Sd)),
    Ud = {},
    Vd = ((Ud[P.g.F] = "1"), (Ud[P.g.T] = "2"), Ud),
    Wd = {},
    Xd = Object.freeze(
      ((Wd[P.g.X] = 1),
      (Wd[P.g.zc] = 1),
      (Wd[P.g.xa] = 1),
      (Wd[P.g.Xa] = 1),
      (Wd[P.g.Bd] = 1),
      (Wd[P.g.Ac] = 1),
      (Wd[P.g.Bc] = 1),
      (Wd[P.g.Cc] = 1),
      (Wd[P.g.Z] = 1),
      (Wd[P.g.Dc] = 1),
      (Wd[P.g.Ea] = 1),
      (Wd[P.g.ra] = 1),
      (Wd[P.g.Za] = 1),
      (Wd[P.g.Ja] = 1),
      (Wd[P.g.ab] = 1),
      (Wd[P.g.Qa] = 1),
      (Wd[P.g.na] = 1),
      (Wd[P.g.Hc] = 1),
      (Wd[P.g.aa] = 1),
      (Wd[P.g.ig] = 1),
      (Wd[P.g.Lc] = 1),
      (Wd[P.g.Mc] = 1),
      (Wd[P.g.Ie] = 1),
      (Wd[P.g.Ld] = 1),
      (Wd[P.g.Qd] = 1),
      (Wd[P.g.Ka] = 1),
      (Wd[P.g.Wb] = 1),
      (Wd[P.g.La] = 1),
      (Wd[P.g.Ma] = 1),
      (Wd[P.g.Cg] = 1),
      (Wd[P.g.Dg] = 1),
      (Wd[P.g.Eg] = 1),
      (Wd[P.g.Fg] = 1),
      (Wd[P.g.qb] = 1),
      (Wd[P.g.ya] = 1),
      (Wd[P.g.Cb] = 1),
      (Wd[P.g.Yb] = 1),
      (Wd[P.g.Fa] = 1),
      (Wd[P.g.oa] = 1),
      (Wd[P.g.Qc] = 1),
      (Wd[P.g.fb] = 1),
      (Wd[P.g.fa] = 1),
      (Wd[P.g.va] = 1),
      (Wd[P.g.la] = 1),
      Wd)
    );
  Object.freeze(P.g);
  var Yd = {},
    Zd = (E.google_tag_manager = E.google_tag_manager || {}),
    $d = Math.random();
  Yd.Tc = "190";
  Yd.hf = Number("0") || 0;
  Yd.ja = "dataLayer";
  Yd.bi =
    "ChEIgLb0nQYQt/XbhMqPsPieARIkABeciwdCJNkqaeZ+/nLkYlkIP040hv9EYF+SAfnEBI2bGe92GgKDjg\x3d\x3d";
  var ae = {
      __cl: !0,
      __ecl: !0,
      __ehl: !0,
      __evl: !0,
      __fal: !0,
      __fil: !0,
      __fsl: !0,
      __hl: !0,
      __jel: !0,
      __lcl: !0,
      __sdl: !0,
      __tl: !0,
      __ytl: !0,
    },
    be = { __paused: !0, __tg: !0 },
    ce;
  for (ce in ae) ae.hasOwnProperty(ce) && (be[ce] = !0);
  var de = Ba(""),
    ee = Ba(""),
    fe,
    ge = !1;
  fe = ge;
  var he,
    ie = !1;
  he = ie;
  var je,
    ke = !1;
  je = ke;
  var le,
    me = !1;
  le = me;
  Yd.zd = "www.googletagmanager.com";
  var ne = "" + Yd.zd + (fe ? "/gtag/js" : "/gtm.js"),
    oe = null,
    pe = null,
    qe = {},
    re = {},
    se = {},
    te = function () {
      var a = Zd.sequence || 1;
      Zd.sequence = a + 1;
      return a;
    };
  Yd.ai = "true";
  var ue = "";
  Yd.Zd = ue;
  var ve = new ua(),
    we = {},
    xe = {},
    Ae = {
      name: Yd.ja,
      set: function (a, b) {
        I(Ka(a, b), we);
        ye();
      },
      get: function (a) {
        return ze(a, 2);
      },
      reset: function () {
        ve = new ua();
        we = {};
        ye();
      },
    },
    ze = function (a, b) {
      return 2 != b ? ve.get(a) : Be(a);
    },
    Be = function (a) {
      var b,
        c = a.split(".");
      b = b || [];
      for (var d = we, e = 0; e < c.length; e++) {
        if (null === d) return !1;
        if (void 0 === d) break;
        d = d[c[e]];
        if (-1 !== b.indexOf(d)) return;
      }
      return d;
    },
    Ce = function (a, b) {
      xe.hasOwnProperty(a) || (ve.set(a, b), I(Ka(a, b), we), ye());
    },
    ye = function (a) {
      k(xe, function (b, c) {
        ve.set(b, c);
        I(Ka(b), we);
        I(Ka(b, c), we);
        a && delete xe[b];
      });
    },
    De = function (a, b) {
      var c,
        d = 1 !== (void 0 === b ? 2 : b) ? Be(a) : ve.get(a);
      "array" === Nb(d) || "object" === Nb(d) ? (c = I(d)) : (c = d);
      return c;
    };
  var Ee,
    Fe = !1,
    Ge = function (a) {
      if (!Fe) {
        Fe = !0;
        Ee = Ee || {};
      }
      return Ee[a];
    };
  var He = function () {
      var a = E.screen;
      return { width: a ? a.width : 0, height: a ? a.height : 0 };
    },
    Ie = function (a) {
      if (F.hidden) return !0;
      var b = a.getBoundingClientRect();
      if (b.top == b.bottom || b.left == b.right || !E.getComputedStyle)
        return !0;
      var c = E.getComputedStyle(a, null);
      if ("hidden" === c.visibility) return !0;
      for (var d = a, e = c; d; ) {
        if ("none" === e.display) return !0;
        var f = e.opacity,
          g = e.filter;
        if (g) {
          var l = g.indexOf("opacity(");
          0 <= l &&
            ((g = g.substring(l + 8, g.indexOf(")", l))),
            "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)),
            (f = Math.min(g, f)));
        }
        if (void 0 !== f && 0 >= f) return !0;
        (d = d.parentElement) && (e = E.getComputedStyle(d, null));
      }
      return !1;
    };
  var Te = /:[0-9]+$/,
    Ue = function (a, b, c) {
      for (var d = a.split("&"), e = 0; e < d.length; e++) {
        var f = d[e].split("=");
        if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
          var g = f.slice(1).join("=");
          return c ? g : decodeURIComponent(g).replace(/\+/g, " ");
        }
      }
    },
    Xe = function (a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if ("protocol" === b || "port" === b)
        a.protocol = Ve(a.protocol) || Ve(E.location.protocol);
      "port" === b
        ? (a.port = String(
            Number(a.hostname ? a.port : E.location.port) ||
              ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")
          ))
        : "host" === b &&
          (a.hostname = (a.hostname || E.location.hostname)
            .replace(Te, "")
            .toLowerCase());
      return We(a, b, c, d, e);
    },
    We = function (a, b, c, d, e) {
      var f,
        g = Ve(a.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
        case "url_no_fragment":
          f = Ye(a);
          break;
        case "protocol":
          f = g;
          break;
        case "host":
          f = a.hostname.replace(Te, "").toLowerCase();
          if (c) {
            var l = /^www\d*\./.exec(f);
            l && l[0] && (f = f.substr(l[0].length));
          }
          break;
        case "port":
          f = String(
            Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : "")
          );
          break;
        case "path":
          a.pathname || a.hostname || Xa("TAGGING", 1);
          f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
          var m = f.split("/");
          0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
          f = m.join("/");
          break;
        case "query":
          f = a.search.replace("?", "");
          e && (f = Ue(f, e));
          break;
        case "extension":
          var n = a.pathname.split(".");
          f = 1 < n.length ? n[n.length - 1] : "";
          f = f.split("/")[0];
          break;
        case "fragment":
          f = a.hash.replace("#", "");
          break;
        default:
          f = a && a.href;
      }
      return f;
    },
    Ve = function (a) {
      return a ? a.replace(":", "").toLowerCase() : "";
    },
    Ye = function (a) {
      var b = "";
      if (a && a.href) {
        var c = a.href.indexOf("#");
        b = 0 > c ? a.href : a.href.substr(0, c);
      }
      return b;
    },
    Ze = function (a) {
      var b = F.createElement("a");
      a && (b.href = a);
      var c = b.pathname;
      "/" !== c[0] && (a || Xa("TAGGING", 1), (c = "/" + c));
      var d = b.hostname.replace(Te, "");
      return {
        href: b.href,
        protocol: b.protocol,
        host: b.host,
        hostname: d,
        pathname: c,
        search: b.search,
        hash: b.hash,
        port: b.port,
      };
    },
    $e = function (a) {
      function b(n) {
        var p = n.split("=")[0];
        return 0 > d.indexOf(p) ? n : p + "=0";
      }
      function c(n) {
        return n
          .split("&")
          .map(b)
          .filter(function (p) {
            return void 0 !== p;
          })
          .join("&");
      }
      var d =
          "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(
            " "
          ),
        e = Ze(a),
        f = a.split(/[?#]/)[0],
        g = e.search,
        l = e.hash;
      "?" === g[0] && (g = g.substring(1));
      "#" === l[0] && (l = l.substring(1));
      g = c(g);
      l = c(l);
      "" !== g && (g = "?" + g);
      "" !== l && (l = "#" + l);
      var m = "" + f + g + l;
      "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
      return m;
    };
  var af = {};
  var Df = {},
    Ef = function (a, b) {
      if (E._gtmexpgrp && E._gtmexpgrp.hasOwnProperty(a))
        return E._gtmexpgrp[a];
      void 0 === Df[a] && (Df[a] = Math.floor(Math.random() * b));
      return Df[a];
    };
  var Gf = { qf: "IN", pk: "IN-UP" };
  var Hf = new (function (a, b) {
    this.h = a;
    this.defaultValue = void 0 === b ? !1 : b;
  })(1933);
  var If = function (a) {
    If[" "](a);
    return a;
  };
  If[" "] = function () {};
  var Kf = function () {
    var a = Jf,
      b = "wf";
    if (a.wf && a.hasOwnProperty(b)) return a.wf;
    var c = new a();
    return (a.wf = c);
  };
  var Jf = function () {
    var a = {};
    this.h = function () {
      var b = Hf.h,
        c = Hf.defaultValue;
      return null != a[b] ? a[b] : c;
    };
    this.m = function () {
      a[Hf.h] = !0;
    };
  };
  var Lf = [];
  function Mf() {
    var a = tb("google_tag_data", {});
    a.ics ||
      (a.ics = {
        entries: {},
        set: Nf,
        update: Of,
        addListener: Pf,
        notifyListeners: Qf,
        active: !1,
        usedDefault: !1,
        usedUpdate: !1,
        accessedDefault: !1,
        accessedAny: !1,
        wasSetLate: !1,
      });
    return a.ics;
  }
  function Nf(a, b, c, d, e, f) {
    var g = Mf();
    g.usedDefault ||
      (!g.accessedDefault && !g.accessedAny) ||
      (g.wasSetLate = !0);
    g.active = !0;
    g.usedDefault = !0;
    if (void 0 != b) {
      var l = g.entries,
        m = l[a] || {},
        n = m.region,
        p = c && h(c) ? c.toUpperCase() : void 0;
      d = d.toUpperCase();
      e = e.toUpperCase();
      if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
        var q = !!(f && 0 < f && void 0 === m.update),
          t = {
            region: p,
            initial: "granted" === b,
            update: m.update,
            quiet: q,
          };
        if ("" !== d || !1 !== m.initial) l[a] = t;
        q &&
          E.setTimeout(function () {
            l[a] === t &&
              t.quiet &&
              ((t.quiet = !1), Rf(a), Qf(), Xa("TAGGING", 2));
          }, f);
      }
    }
  }
  function Of(a, b) {
    var c = Mf();
    c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
    c.active = !0;
    c.usedUpdate = !0;
    if (void 0 != b) {
      var d = Sf(c, a),
        e = c.entries,
        f = (e[a] = e[a] || {});
      f.update = "granted" === b;
      var g = Sf(c, a);
      f.quiet ? ((f.quiet = !1), Rf(a)) : g !== d && Rf(a);
    }
  }
  function Pf(a, b) {
    Lf.push({ nf: a, zj: b });
  }
  function Rf(a) {
    for (var b = 0; b < Lf.length; ++b) {
      var c = Lf[b];
      ra(c.nf) && -1 !== c.nf.indexOf(a) && (c.Eh = !0);
    }
  }
  function Qf(a, b) {
    for (var c = 0; c < Lf.length; ++c) {
      var d = Lf[c];
      if (d.Eh) {
        d.Eh = !1;
        try {
          d.zj({ consentEventId: a, consentPriorityId: b });
        } catch (e) {}
      }
    }
  }
  function Sf(a, b) {
    var c = a.entries[b] || {};
    return void 0 !== c.update ? c.update : c.initial;
  }
  var Tf = function (a) {
      var b = Mf();
      b.accessedAny = !0;
      return Sf(b, a);
    },
    Uf = function (a) {
      var b = Mf();
      b.accessedDefault = !0;
      return (b.entries[a] || {}).initial;
    },
    Vf = function (a) {
      var b = Mf();
      b.accessedAny = !0;
      return !(b.entries[a] || {}).quiet;
    },
    Wf = function () {
      if (!Kf().h()) return !1;
      var a = Mf();
      a.accessedAny = !0;
      return a.active;
    },
    Xf = function () {
      var a = Mf();
      a.accessedDefault = !0;
      return a.usedDefault;
    },
    Yf = function (a, b) {
      Mf().addListener(a, b);
    },
    Zf = function (a, b) {
      Mf().notifyListeners(a, b);
    },
    $f = function (a, b) {
      function c() {
        for (var e = 0; e < b.length; e++) if (!Vf(b[e])) return !0;
        return !1;
      }
      if (c()) {
        var d = !1;
        Yf(b, function (e) {
          d || c() || ((d = !0), a(e));
        });
      } else a({});
    },
    ag = function (a, b) {
      function c() {
        for (var f = [], g = 0; g < d.length; g++) {
          var l = d[g];
          !1 === Tf(l) || e[l] || (f.push(l), (e[l] = !0));
        }
        return f;
      }
      var d = h(b) ? [b] : b,
        e = {};
      c().length !== d.length &&
        Yf(d, function (f) {
          var g = c();
          0 < g.length && ((f.nf = g), a(f));
        });
    };
  function bg() {}
  function cg() {}
  function dg(a) {
    for (var b = [], c = 0; c < eg.length; c++) {
      var d = a(eg[c]);
      b[c] = !0 === d ? "1" : !1 === d ? "0" : "-";
    }
    return b.join("");
  }
  var eg = [P.g.F, P.g.T],
    fg = function (a) {
      var b = a[P.g.Tf];
      b && O(40);
      var c = a[P.g.Vf];
      c && O(41);
      for (
        var d = ra(b) ? b : [b], e = { oc: 0 };
        e.oc < d.length;
        e = { oc: e.oc }, ++e.oc
      )
        k(
          a,
          (function (f) {
            return function (g, l) {
              if (g !== P.g.Tf && g !== P.g.Vf) {
                var m = d[f.oc],
                  n = Gf.qf,
                  p = Gf.pk;
                Mf().set(g, l, m, n, p, c);
              }
            };
          })(e)
        );
    },
    gg = function (a, b) {
      k(a, function (c, d) {
        Mf().update(c, d);
      });
      Zf(b.eventId, b.priorityId);
    },
    hg = function (a) {
      var b = Tf(a);
      return void 0 != b ? b : !0;
    },
    ig = function () {
      return "G1" + dg(Tf);
    },
    jg = function () {
      return "G1" + dg(Uf);
    },
    kg = function (a, b) {
      ag(a, b);
    },
    lg = function (a, b) {
      $f(a, b);
    };
  var Q = [];
  Q[7] = !0;
  Q[9] = !0;
  Q[27] = !0;
  Q[6] = !0;
  Q[12] = !0;
  Q[11] = !0;
  Q[13] = !0;
  Q[15] = !0;
  Q[23] = !0;
  Q[29] = !0;
  Q[35] = !0;
  Q[36] = !0;
  Q[38] = !0;
  Q[43] = !0;
  Q[44] = !0;
  a: {
    for (var mg, ng, og = 0; mg === ng; )
      if (
        ((mg = Math.floor(2 * Math.random())),
        (ng = Math.floor(2 * Math.random())),
        og++,
        20 < og)
      )
        break a;
    mg ? (Q[46] = !0) : (Q[47] = !0);
  }
  Q[51] = !0;
  Q[54] = !0;
  Q[57] = !0;
  Q[60] = !0;

  var S = function (a) {
    return !!Q[a];
  };
  var pg = function (a) {
    var b = 1,
      c,
      d,
      e;
    if (a)
      for (b = 0, d = a.length - 1; 0 <= d; d--)
        (e = a.charCodeAt(d)),
          (b = ((b << 6) & 268435455) + e + (e << 14)),
          (c = b & 266338304),
          (b = 0 !== c ? b ^ (c >> 21) : b);
    return b;
  };
  var qg = function (a, b, c) {
    for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
      var g = e[f].split("="),
        l = g[0].replace(/^\s*|\s*$/g, "");
      if (l && l == a) {
        var m = g
          .slice(1)
          .join("=")
          .replace(/^\s*|\s*$/g, "");
        m && c && (m = decodeURIComponent(m));
        d.push(m);
      }
    }
    return d;
  };
  var rg = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    sg = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  function tg(a) {
    return "null" !== a.origin;
  }
  var wg = function (a, b, c, d) {
      return ug(d) ? qg(a, String(b || vg()), c) : [];
    },
    zg = function (a, b, c, d, e) {
      if (ug(e)) {
        var f = xg(a, d, e);
        if (1 === f.length) return f[0].id;
        if (0 !== f.length) {
          f = yg(
            f,
            function (g) {
              return g.fe;
            },
            b
          );
          if (1 === f.length) return f[0].id;
          f = yg(
            f,
            function (g) {
              return g.ld;
            },
            c
          );
          return f[0] ? f[0].id : void 0;
        }
      }
    };
  function Ag(a, b, c, d) {
    var e = vg(),
      f = window;
    tg(f) && (f.document.cookie = a);
    var g = vg();
    return e != g || (void 0 != c && 0 <= wg(b, g, !1, d).indexOf(c));
  }
  var Eg = function (a, b, c) {
      function d(u, r, v) {
        if (null == v) return delete g[r], u;
        g[r] = v;
        return u + "; " + r + "=" + v;
      }
      function e(u, r) {
        if (null == r) return delete g[r], u;
        g[r] = !0;
        return u + "; " + r;
      }
      if (!ug(c.jb)) return 2;
      var f;
      void 0 == b
        ? (f = a + "=deleted; expires=" + new Date(0).toUTCString())
        : (c.encode && (b = encodeURIComponent(b)),
          (b = Bg(b)),
          (f = a + "=" + b));
      var g = {};
      f = d(f, "path", c.path);
      var l;
      c.expires instanceof Date
        ? (l = c.expires.toUTCString())
        : null != c.expires && (l = "" + c.expires);
      f = d(f, "expires", l);
      f = d(f, "max-age", c.al);
      f = d(f, "samesite", c.bl);
      c.fl && (f = e(f, "secure"));
      var m = c.domain;
      if (m && "auto" === m.toLowerCase()) {
        for (var n = Cg(), p = 0; p < n.length; ++p) {
          var q = "none" !== n[p] ? n[p] : void 0,
            t = d(f, "domain", q);
          t = e(t, c.flags);
          if (!Dg(q, c.path) && Ag(t, a, b, c.jb)) return 0;
        }
        return 1;
      }
      m && "none" !== m.toLowerCase() && (f = d(f, "domain", m));
      f = e(f, c.flags);
      return Dg(m, c.path) ? 1 : Ag(f, a, b, c.jb) ? 0 : 1;
    },
    Fg = function (a, b, c) {
      null == c.path && (c.path = "/");
      c.domain || (c.domain = "auto");
      return Eg(a, b, c);
    };
  function yg(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
      var l = a[g],
        m = b(l);
      m === c
        ? d.push(l)
        : void 0 === f || m < f
        ? ((e = [l]), (f = m))
        : m === f && e.push(l);
    }
    return 0 < d.length ? d : e;
  }
  function xg(a, b, c) {
    for (var d = [], e = wg(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var g = e[f].split("."),
        l = g.shift();
      if (!b || -1 !== b.indexOf(l)) {
        var m = g.shift();
        m &&
          ((m = m.split("-")),
          d.push({ id: g.join("."), fe: 1 * m[0] || 1, ld: 1 * m[1] || 1 }));
      }
    }
    return d;
  }
  var Bg = function (a) {
      a && 1200 < a.length && (a = a.substring(0, 1200));
      return a;
    },
    Gg = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    Hg = /(^|\.)doubleclick\.net$/i,
    Dg = function (a, b) {
      return (
        Hg.test(window.document.location.hostname) || ("/" === b && Gg.test(a))
      );
    },
    vg = function () {
      return tg(window) ? window.document.cookie : "";
    },
    Cg = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (4 === b.length) {
        var c = b[b.length - 1];
        if (parseInt(c, 10).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      Hg.test(e) || Gg.test(e) || a.push("none");
      return a;
    },
    ug = function (a) {
      if (!Kf().h() || !a || !Wf()) return !0;
      if (!Vf(a)) return !1;
      var b = Tf(a);
      return null == b ? !0 : !!b;
    };
  var Pg = function (a) {
      var b = Math.round(2147483647 * Math.random());
      return a ? String(b ^ (pg(a) & 2147483647)) : String(b);
    },
    Qg = function (a) {
      return [Pg(a), Math.round(z() / 1e3)].join(".");
    },
    Tg = function (a, b, c, d, e) {
      var f = Rg(b);
      return zg(a, f, Sg(c), d, e);
    },
    Ug = function (a, b, c, d) {
      var e = "" + Rg(c),
        f = Sg(d);
      1 < f && (e += "-" + f);
      return [b, e, a].join(".");
    },
    Rg = function (a) {
      if (!a) return 1;
      a = 0 === a.indexOf(".") ? a.substr(1) : a;
      return a.split(".").length;
    },
    Sg = function (a) {
      if (!a || "/" === a) return 1;
      "/" !== a[0] && (a = "/" + a);
      "/" !== a[a.length - 1] && (a += "/");
      return a.split("/").length - 1;
    };
  var Vg = function () {
    Zd.dedupe_gclid || (Zd.dedupe_gclid = "" + Qg());
    return Zd.dedupe_gclid;
  };
  var Wg = function () {
    var a = !1;
    return a;
  };
  var Xg = { H: "GTM-W8KNLGB", ob: "" },
    Yg = { Bh: "GTM-W8KNLGB", Ch: "GTM-W8KNLGB" };
  Xg.df = Ba("");
  var Zg = function () {
      return Yg.Bh ? Yg.Bh.split("|") : [Xg.H];
    },
    $g = function () {
      return Yg.Ch ? Yg.Ch.split("|") : [];
    },
    ah = function () {
      this.container = {};
      this.destination = {};
      this.canonical = {};
    },
    ch = function () {
      for (var a = bh(), b = Zg(), c = 0; c < b.length; c++) {
        var d = a.container[b[c]];
        !d || qa(d) ? (a.container[b[c]] = { state: 2 }) : (d.state = 2);
      }
      for (var e = $g(), f = 0; f < e.length; f++) {
        var g = a.destination[e[f]];
        g && 0 === g.state && O(93);
        g ? (g.state = 2) : (a.destination[e[f]] = { state: 2 });
      }
      a.canonical[Xg.ob] = 2;
    },
    dh = function (a) {
      return !!bh().container[a];
    },
    eh = function () {
      var a = bh().container,
        b;
      for (b in a)
        if (a.hasOwnProperty(b)) {
          var c = a[b];
          if (qa(c)) {
            if (1 === c) return !0;
          } else if (1 === c.state) return !0;
        }
      return !1;
    },
    fh = function () {
      var a = {};
      k(bh().destination, function (b, c) {
        0 === c.state && (a[b] = c);
      });
      return a;
    };
  function bh() {
    var a = Zd.tidr;
    a || ((a = new ah()), (Zd.tidr = a));
    return a;
  }
  var gh = {
      "": "n",
      UA: "u",
      AW: "a",
      DC: "d",
      G: "e",
      GF: "f",
      GT: "t",
      HA: "h",
      MC: "m",
      GTM: "g",
      OPT: "o",
    },
    hh = { UA: 1, AW: 2, DC: 3, G: 4, GF: 5, GT: 12, GTM: 14, HA: 6, MC: 7 },
    ih = function (a) {
      var b = Xg.H.split("-"),
        c = b[0].toUpperCase();
      if (S(45)) {
        var d = {};
        d.sj = Xg.H;
        d.tk = Yd.hf;
        d.xk = Yd.Tc;
        d.Yj = Xg.df ? 2 : 1;
        fe ? ((d.ue = hh[c]), d.ue || (d.ue = 0)) : (d.ue = le ? 13 : 10);
        je ? (d.Df = 1) : Wg() ? (d.Df = 2) : (d.Df = 3);
        var e;
        var f = d.ue,
          g = d.Df;
        void 0 === f
          ? (e = "")
          : (g || (g = 0),
            (e =
              "" +
              dd(1, 1) +
              "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
                (f << 2) | g
              ]));
        var l = d.Wk,
          m =
            4 +
            e +
            (l
              ? "" +
                dd(2, 1) +
                "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
                  l
                ]
              : ""),
          n,
          p = d.xk;
        n = p && cd.test(p) ? "" + dd(3, 2) + p : "";
        var q,
          t = d.tk;
        q = t
          ? "" +
            dd(4, 1) +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
              t
            ]
          : "";
        var u;
        var r = d.sj;
        if (r && a) {
          var v = r.split("-"),
            w = v[0].toUpperCase();
          if ("GTM" !== w && "OPT" !== w) u = "";
          else {
            var y = v[1];
            u =
              "" +
              dd(5, 3) +
              "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
                1 + y.length
              ] +
              (d.Yj || 0) +
              y;
          }
        } else u = "";
        return m + n + q + u;
      }
      var x = gh[c] || "i",
        A = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
        B = "w";
      fe && (B = Wg() ? "s" : "o");
      he
        ? ("w" === B && (B = "x"), "o" === B && (B = "q"))
        : je
        ? ("w" === B && (B = "y"), "o" === B && (B = "r"))
        : le && (B = "z");
      return "2" + B + x + (4 === Yd.Tc.length ? Yd.Tc.slice(1) : Yd.Tc) + A;
    };
  function jh(a, b) {
    if ("" === a) return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  var kh = function (a, b, c) {
    a.addEventListener && a.addEventListener(b, c, !1);
  };
  function lh() {
    return gb("iPhone") && !gb("iPod") && !gb("iPad");
  }
  function mh() {
    lh() || gb("iPad") || gb("iPod");
  }
  gb("Opera");
  gb("Trident") || gb("MSIE");
  gb("Edge");
  !gb("Gecko") ||
    (-1 != fb().toLowerCase().indexOf("webkit") && !gb("Edge")) ||
    gb("Trident") ||
    gb("MSIE") ||
    gb("Edge");
  -1 != fb().toLowerCase().indexOf("webkit") && !gb("Edge") && gb("Mobile");
  gb("Macintosh");
  gb("Windows");
  gb("Linux") || gb("CrOS");
  var nh = ma.navigator || null;
  nh && (nh.appVersion || "").indexOf("X11");
  gb("Android");
  lh();
  gb("iPad");
  gb("iPod");
  mh();
  fb().toLowerCase().indexOf("kaios");
  var oh = function (a, b, c, d) {
      for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d; ) {
        var g = a.charCodeAt(e - 1);
        if (38 == g || 63 == g) {
          var l = a.charCodeAt(e + f);
          if (!l || 61 == l || 38 == l || 35 == l) return e;
        }
        e += f + 1;
      }
      return -1;
    },
    ph = /#|$/,
    qh = function (a, b) {
      var c = a.search(ph),
        d = oh(a, 0, b, c);
      if (0 > d) return null;
      var e = a.indexOf("&", d);
      if (0 > e || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(
        a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " ")
      );
    },
    rh = /[?&]($|#)/,
    sh = function (a, b, c) {
      for (
        var d, e = a.search(ph), f = 0, g, l = [];
        0 <= (g = oh(a, f, b, e));

      )
        l.push(a.substring(f, g)),
          (f = Math.min(a.indexOf("&", g) + 1 || e, e));
      l.push(a.slice(f));
      d = l.join("").replace(rh, "$1");
      var m,
        n = null != c ? "=" + encodeURIComponent(String(c)) : "";
      var p = b + n;
      if (p) {
        var q,
          t = d.indexOf("#");
        0 > t && (t = d.length);
        var u = d.indexOf("?"),
          r;
        0 > u || u > t ? ((u = t), (r = "")) : (r = d.substring(u + 1, t));
        q = [d.slice(0, u), r, d.slice(t)];
        var v = q[1];
        q[1] = p ? (v ? v + "&" + p : p) : v;
        m = q[0] + (q[1] ? "?" + q[1] : "") + q[2];
      } else m = d;
      return m;
    };
  var th = function (a, b) {
    if (a)
      for (var c in a)
        Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
  };
  function uh(a) {
    if (!a || !F.head) return null;
    var b = vh("META");
    F.head.appendChild(b);
    b.httpEquiv = "origin-trial";
    b.content = a;
    return b;
  }
  var wh = function () {
      if (E.top == E) return 0;
      var a = E.location.ancestorOrigins;
      if (a) return a[a.length - 1] == E.location.origin ? 1 : 2;
      var b;
      var c = E.top;
      try {
        var d;
        if ((d = !!c && null != c.location.href))
          b: {
            try {
              If(c.foo);
              d = !0;
              break b;
            } catch (e) {}
            d = !1;
          }
        b = d;
      } catch (e) {
        b = !1;
      }
      return b ? 1 : 2;
    },
    vh = function (a, b) {
      b = void 0 === b ? document : b;
      return b.createElement(String(a).toLowerCase());
    };
  function xh(a, b, c, d) {
    d = void 0 === d ? !1 : d;
    a.google_image_requests || (a.google_image_requests = []);
    var e = vh("IMG", a.document);
    if (c) {
      var f = function () {
        if (c) {
          var g = a.google_image_requests,
            l = $a(g, e);
          0 <= l && Array.prototype.splice.call(g, l, 1);
        }
        e.removeEventListener && e.removeEventListener("load", f, !1);
        e.removeEventListener && e.removeEventListener("error", f, !1);
      };
      kh(e, "load", f);
      kh(e, "error", f);
    }
    d && (e.attributionsrc = "");
    e.src = b;
    a.google_image_requests.push(e);
  }
  var zh = function (a) {
      var b;
      b = void 0 === b ? !1 : b;
      var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
      th(a, function (d, e) {
        d && (c += "&" + e + "=" + encodeURIComponent(d));
      });
      yh(c, b);
    },
    yh = function (a, b) {
      var c = window,
        d;
      b = void 0 === b ? !1 : b;
      d = void 0 === d ? !1 : d;
      if (c.fetch) {
        var e = {
          keepalive: !0,
          credentials: "include",
          redirect: "follow",
          method: "get",
          mode: "no-cors",
        };
        d &&
          ((e.mode = "cors"),
          (e.headers = { "Attribution-Reporting-Eligible": "event-source" }));
        c.fetch(a, e);
      } else xh(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d);
    };
  var Ah = function () {};
  var Bh = function (a) {
      void 0 !== a.addtlConsent &&
        "string" !== typeof a.addtlConsent &&
        (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies &&
        "boolean" !== typeof a.gdprApplies &&
        (a.gdprApplies = void 0);
      return (void 0 !== a.tcString && "string" !== typeof a.tcString) ||
        (void 0 !== a.listenerId && "number" !== typeof a.listenerId)
        ? 2
        : a.cmpStatus && "error" !== a.cmpStatus
        ? 0
        : 3;
    },
    Ch = function (a, b) {
      b = void 0 === b ? {} : b;
      this.m = a;
      this.h = null;
      this.M = {};
      this.Ha = 0;
      var c;
      this.R = null != (c = b.Gk) ? c : 500;
      var d;
      this.D = null != (d = b.Xk) ? d : !1;
      this.B = null;
    };
  la(Ch, Ah);
  Ch.prototype.addEventListener = function (a) {
    var b = this,
      c = { internalBlockOnErrors: this.D },
      d = sg(function () {
        return a(c);
      }),
      e = 0;
    -1 !== this.R &&
      (e = setTimeout(function () {
        c.tcString = "tcunavailable";
        c.internalErrorState = 1;
        d();
      }, this.R));
    var f = function (g, l) {
      clearTimeout(e);
      g
        ? ((c = g),
          (c.internalErrorState = Bh(c)),
          (c.internalBlockOnErrors = b.D),
          (l && 0 === c.internalErrorState) ||
            ((c.tcString = "tcunavailable"), l || (c.internalErrorState = 3)))
        : ((c.tcString = "tcunavailable"), (c.internalErrorState = 3));
      a(c);
    };
    try {
      Dh(this, "addEventListener", f);
    } catch (g) {
      (c.tcString = "tcunavailable"),
        (c.internalErrorState = 3),
        e && (clearTimeout(e), (e = 0)),
        d();
    }
  };
  Ch.prototype.removeEventListener = function (a) {
    a && a.listenerId && Dh(this, "removeEventListener", null, a.listenerId);
  };
  var Fh = function (a, b, c) {
      var d;
      d = void 0 === d ? "755" : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (void 0 !== f) {
            e = f[void 0 === d ? "755" : d];
            break a;
          }
        }
        e = void 0;
      }
      var g = e;
      if (0 === g) return !1;
      var l = c;
      2 === c
        ? ((l = 0), 2 === g && (l = 1))
        : 3 === c && ((l = 1), 1 === g && (l = 0));
      var m;
      if (0 === l)
        if (a.purpose && a.vendor) {
          var n = Eh(a.vendor.consents, void 0 === d ? "755" : d);
          m =
            n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC
              ? !0
              : n && Eh(a.purpose.consents, b);
        } else m = !0;
      else
        m =
          1 === l
            ? a.purpose && a.vendor
              ? Eh(a.purpose.legitimateInterests, b) &&
                Eh(a.vendor.legitimateInterests, void 0 === d ? "755" : d)
              : !0
            : !0;
      return m;
    },
    Eh = function (a, b) {
      return !(!a || !a[b]);
    },
    Dh = function (a, b, c, d) {
      c || (c = function () {});
      if ("function" === typeof a.m.__tcfapi) {
        var e = a.m.__tcfapi;
        e(b, 2, c, d);
      } else if (Gh(a)) {
        Hh(a);
        var f = ++a.Ha;
        a.M[f] = c;
        if (a.h) {
          var g = {};
          a.h.postMessage(
            ((g.__tcfapiCall = {
              command: b,
              version: 2,
              callId: f,
              parameter: d,
            }),
            g),
            "*"
          );
        }
      } else c({}, !1);
    },
    Gh = function (a) {
      if (a.h) return a.h;
      var b;
      a: {
        for (var c = a.m, d = 0; 50 > d; ++d) {
          var e;
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator);
          } catch (l) {
            e = !1;
          }
          if (e) {
            b = c;
            break a;
          }
          var f;
          b: {
            try {
              var g = c.parent;
              if (g && g != c) {
                f = g;
                break b;
              }
            } catch (l) {}
            f = null;
          }
          if (!(c = f)) break;
        }
        b = null;
      }
      a.h = b;
      return a.h;
    },
    Hh = function (a) {
      a.B ||
        ((a.B = function (b) {
          try {
            var c;
            c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data)
              .__tcfapiReturn;
            a.M[c.callId](c.returnValue, c.success);
          } catch (d) {}
        }),
        kh(a.m, "message", a.B));
    },
    Ih = function (a) {
      if (!1 === a.gdprApplies) return !0;
      void 0 === a.internalErrorState && (a.internalErrorState = Bh(a));
      return "error" === a.cmpStatus || 0 !== a.internalErrorState
        ? a.internalBlockOnErrors
          ? (zh({ e: String(a.internalErrorState) }), !1)
          : !0
        : "loaded" !== a.cmpStatus ||
          ("tcloaded" !== a.eventStatus &&
            "useractioncomplete" !== a.eventStatus)
        ? !1
        : !0;
    };
  var Jh = !0;
  Jh = !1;
  var Kh = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 },
    Lh = jh("", 550),
    Mh = jh("", 500);
  function Nh() {
    var a = Zd.tcf || {};
    return (Zd.tcf = a);
  }
  var Sh = function () {
    var a = Nh(),
      b = new Ch(E, { Gk: Jh ? 3e3 : -1 });
    if (
      !0 === E.gtag_enable_tcf_support &&
      !a.active &&
      ("function" === typeof E.__tcfapi ||
        "function" === typeof b.m.__tcfapi ||
        null != Gh(b))
    ) {
      a.active = !0;
      a.nd = {};
      Oh();
      var c = null;
      Jh
        ? (c = E.setTimeout(function () {
            Ph(a);
            Qh(a);
            c = null;
          }, Mh))
        : (a.tcString = "tcunavailable");
      try {
        b.addEventListener(function (d) {
          c && (clearTimeout(c), (c = null));
          if (0 !== d.internalErrorState) Ph(a), Qh(a);
          else {
            var e;
            a.gdprApplies = d.gdprApplies;
            if (!1 === d.gdprApplies) (e = Rh()), b.removeEventListener(d);
            else if (
              "tcloaded" === d.eventStatus ||
              "useractioncomplete" === d.eventStatus ||
              "cmpuishown" === d.eventStatus
            ) {
              var f = {},
                g;
              for (g in Kh)
                if (Kh.hasOwnProperty(g))
                  if ("1" === g) {
                    var l,
                      m = d,
                      n = !0;
                    n = void 0 === n ? !1 : n;
                    l = Ih(m)
                      ? !1 === m.gdprApplies ||
                        "tcunavailable" === m.tcString ||
                        (void 0 === m.gdprApplies && !n) ||
                        "string" !== typeof m.tcString ||
                        !m.tcString.length
                        ? !0
                        : Fh(m, "1", 0)
                      : !1;
                    f["1"] = l;
                  } else f[g] = Fh(d, g, Kh[g]);
              e = f;
            }
            e && ((a.tcString = d.tcString || "tcempty"), (a.nd = e), Qh(a));
          }
        });
      } catch (d) {
        c && (clearTimeout(c), (c = null)), Ph(a), Qh(a);
      }
    }
  };
  function Ph(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
    Jh && (a.nd = Rh());
  }
  function Oh() {
    var a = {},
      b = ((a.ad_storage = "denied"), (a.wait_for_update = Lh), a);
    fg(b);
  }
  function Rh() {
    var a = {},
      b;
    for (b in Kh) Kh.hasOwnProperty(b) && (a[b] = !0);
    return a;
  }
  function Qh(a) {
    var b = {},
      c = ((b.ad_storage = a.nd["1"] ? "granted" : "denied"), b);
    gg(
      c,
      { eventId: 0 },
      { gdprApplies: a ? a.gdprApplies : void 0, tcString: Th() }
    );
  }
  var Th = function () {
      var a = Nh();
      return a.active ? a.tcString || "" : "";
    },
    Uh = function () {
      var a = Nh();
      return a.active && void 0 !== a.gdprApplies
        ? a.gdprApplies
          ? "1"
          : "0"
        : "";
    },
    Vh = function (a) {
      if (!Kh.hasOwnProperty(String(a))) return !0;
      var b = Nh();
      return b.active && b.nd ? !!b.nd[String(a)] : !0;
    };
  var Wh = function (a) {
    var b = String(a[Rb.Sa] || "").replace(/_/g, "");
    0 === b.indexOf("cvt") && (b = "cvt");
    return b;
  };
  var Xh = ["L", "S", "Y"],
    Yh = ["S", "E"],
    Zh = { sampleRate: "0.005000", Uh: "", Th: Number("5"), Sh: Number("") },
    $h =
      0 <= F.location.search.indexOf("?gtm_latency=") ||
      0 <= F.location.search.indexOf("&gtm_latency="),
    ai;
  if (!(ai = $h)) {
    var bi = Math.random(),
      ci = Zh.sampleRate;
    ai = bi < ci;
  }
  var di = ai,
    ei = "https://www.googletagmanager.com/a?id=" + Xg.H + "&cv=1",
    fi = {
      label: Xg.H + " Container",
      children: [{ label: "Initialization", children: [] }],
    };
  function gi() {
    return [ei, "&v=3&t=t", "&pid=" + ta(), "&rv=" + Yd.Tc].join("");
  }
  var hi = gi();
  function ii() {
    hi = gi();
  }
  var ji = {},
    ki = "",
    li = "",
    mi = "",
    ni = "",
    oi = [],
    pi = "",
    qi = {},
    ri = !1,
    si = {},
    ti = {},
    ui = {},
    vi = "",
    wi = void 0,
    xi = {},
    yi = {},
    zi = void 0,
    Ai = 5;
  0 < Zh.Th && (Ai = Zh.Th);
  var Bi = (function (a, b) {
      for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
      return {
        Qj: function () {
          return c < a ? !1 : z() - d[c % a] < b;
        },
        qk: function () {
          var f = c++ % a;
          d[f] = z();
        },
      };
    })(Ai, 1e3),
    Ci = 1e3,
    Di = "";
  function Ei(a, b) {
    var c = wi;
    if (void 0 === c) return "";
    var d = Za("GTM"),
      e = Za("TAGGING"),
      f = Za("HEALTH"),
      g = hi,
      l = ji[c] ? "" : "&es=1",
      m = xi[c],
      n = Fi(c),
      p = Gi(),
      q = ki,
      t = li,
      u = vi,
      r = Hi(a),
      v = mi,
      w = ni,
      y = Ii(a, b),
      x;
    return [
      g,
      l,
      m,
      n,
      d ? "&u=" + d : "",
      e ? "&ut=" + e : "",
      f ? "&h=" + f : "",
      p,
      q,
      t,
      u,
      r,
      v,
      w,
      y,
      x,
      pi ? "&dl=" + encodeURIComponent(pi) : "",
      0 < oi.length ? "&tdp=" + oi.join(".") : "",
      Yd.hf ? "&x=" + Yd.hf : "",
      "&z=0",
    ].join("");
  }
  function Ki(a) {
    zi && (E.clearTimeout(zi), (zi = void 0));
    if (void 0 !== wi && (!ji[wi] || ki || li || Li(a)))
      if (void 0 === Mi[wi] && (yi[wi] || Bi.Qj() || 0 >= Ci--))
        O(1), (yi[wi] = !0);
      else {
        void 0 === Mi[wi] && Bi.qk();
        var b = Ei(!0, a);
        a ? Ib(b) : Bb(b);
        if (ni || (pi && 0 < oi.length)) {
          var c = b.replace("/a?", "/td?");
          Bb(c);
        }
        ji[wi] = !0;
        pi = ni = mi = vi = li = ki = "";
        oi = [];
      }
  }
  function Ni() {
    zi || (zi = E.setTimeout(Ki, 500));
  }
  function Oi(a) {
    return a.match(/^(gtm|gtag)\./) ? encodeURIComponent(a) : "*";
  }
  function Pi() {
    2022 <= Ei().length && Ki();
  }
  function Gi() {
    return (
      "&tc=" +
      rc.filter(function (a) {
        return a;
      }).length
    );
  }
  var Ri = function (a, b) {
      if (di && !yi[a] && wi !== a) {
        Ki();
        wi = a;
        mi = ki = "";
        xi[a] = "&e=" + Oi(b) + "&eid=" + a;
        Ni();
      }
    },
    Si = function (a, b, c, d) {
      if (di && b) {
        var e = Wh(b),
          f = c + e;
        if (!yi[a]) {
          a !== wi && (Ki(), (wi = a));
          ki = ki ? ki + "." + f : "&tr=" + f;
          var g = b["function"];
          if (!g)
            throw Error("Error: No function name given for function call.");
          var l = (tc[g] ? "1" : "2") + e;
          mi = mi ? mi + "." + l : "&ti=" + l;
          Ni();
          Pi();
        }
      }
    },
    Ti = function (a, b, c) {
      if (di && a && a[Rb.sb]) {
        var d = b + "." + a[Rb.sb];
        ui[d] = c;
        "html" == Wh(a) && Di == d && (ki += ":" + Math.floor(c));
      }
    };
  function Hi(a) {}
  function Fi(a) {}
  var $i = function (a, b, c) {
      if (di && void 0 !== a && !yi[a]) {
        a !== wi && (Ki(), (wi = a));
        var d = c + b;
        li = li ? li + "." + d : "&epr=" + d;
        Ni();
        Pi();
      }
    },
    aj = function (a, b, c) {},
    bj = ["S", "P", "C", "Z"],
    cj = {},
    dj = ((cj[1] = 5), (cj[2] = 5), (cj[3] = 5), cj),
    ej = {},
    Mi = {},
    Ji = void 0,
    fj = function (a, b) {
      var c = !1;
      if (!di || Mi[a] || 0 === dj[b]) return !1;
      --dj[b];
      Mi[a] = b;
      c = !0;
      return c;
    },
    gj = function (a, b, c) {
      if (!di || !Mi[a]) return;
      var d = ej[a];
      d || (ej[a] = d = {});
      d[b] = c;
    };
  function Ii(a, b) {
    var c;
    if (!wi || !Li(b)) return "";
    var d = ej[wi];
    c =
      "&al=" +
      bj
        .filter(function (e) {
          return void 0 !== d[e];
        })
        .map(function (e) {
          return e + Math.floor(d[e]);
        })
        .join(".") +
      (".Z" + Mi[wi]);
    a && delete ej[wi];
    return c;
  }
  function Li(a) {
    var b = !1;
    if (!wi || !ej[wi]) return !1;
    b = a || "C" in ej[wi];
    return b;
  }
  var hj = function () {
    if (di) {
      E.setInterval(ii, 864e5);
      Cb(E, "pagehide", function () {
        wi && Mi[wi] && Ki(!0);
        for (var a in ej) ej.hasOwnProperty(a) && ((wi = Number(a)), Ki(!0));
      });
    }
  };
  hb();
  lh() || gb("iPod");
  gb("iPad");
  !gb("Android") || ib() || hb() || gb("Opera") || gb("Silk");
  ib();
  !gb("Safari") ||
    ib() ||
    gb("Coast") ||
    gb("Opera") ||
    gb("Edge") ||
    gb("Edg/") ||
    gb("OPR") ||
    hb() ||
    gb("Silk") ||
    gb("Android") ||
    mh();
  var ij = {},
    jj = null,
    kj = function (a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        255 < e && ((b[c++] = e & 255), (e >>= 8));
        b[c++] = e;
      }
      var f = 4;
      void 0 === f && (f = 0);
      if (!jj) {
        jj = {};
        for (
          var g =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                ""
              ),
            l = ["+/=", "+/", "-_=", "-_.", "-_"],
            m = 0;
          5 > m;
          m++
        ) {
          var n = g.concat(l[m].split(""));
          ij[m] = n;
          for (var p = 0; p < n.length; p++) {
            var q = n[p];
            void 0 === jj[q] && (jj[q] = p);
          }
        }
      }
      for (
        var t = ij[f],
          u = Array(Math.floor(b.length / 3)),
          r = t[64] || "",
          v = 0,
          w = 0;
        v < b.length - 2;
        v += 3
      ) {
        var y = b[v],
          x = b[v + 1],
          A = b[v + 2],
          B = t[y >> 2],
          D = t[((y & 3) << 4) | (x >> 4)],
          H = t[((x & 15) << 2) | (A >> 6)],
          J = t[A & 63];
        u[w++] = "" + B + D + H + J;
      }
      var C = 0,
        K = r;
      switch (b.length - v) {
        case 2:
          (C = b[v + 1]), (K = t[(C & 15) << 2] || r);
        case 1:
          var M = b[v];
          u[w] = "" + t[M >> 2] + t[((M & 3) << 4) | (C >> 4)] + K + r;
      }
      return u.join("");
    };
  var lj =
    "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(
      " "
    );
  function mj() {
    var a;
    return null != (a = E.google_tag_data) ? a : (E.google_tag_data = {});
  }
  function nj() {
    var a = E.google_tag_data,
      b;
    if (null != a && a.uach) {
      var c = a.uach,
        d = Object.assign({}, c);
      c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
      b = d;
    } else b = null;
    return b;
  }
  function oj() {
    var a, b;
    return null !=
      (b = null == (a = E.google_tag_data) ? void 0 : a.uach_promise)
      ? b
      : null;
  }
  function pj() {
    var a, b;
    return (
      "function" ===
      typeof (null == (a = E.navigator)
        ? void 0
        : null == (b = a.userAgentData)
        ? void 0
        : b.getHighEntropyValues)
    );
  }
  function qj() {
    if (!pj()) return null;
    var a = mj();
    if (a.uach_promise) return a.uach_promise;
    var b = E.navigator.userAgentData
      .getHighEntropyValues(lj)
      .then(function (c) {
        null != a.uach || (a.uach = c);
        return c;
      });
    return (a.uach_promise = b);
  }
  function wj(a, b, c, d) {
    var e,
      f = Number(null != a.Ua ? a.Ua : void 0);
    0 !== f && (e = new Date((b || z()) + 1e3 * (f || 7776e3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: e,
      jb: d,
    };
  }
  var xj;
  var Bj = function () {
      var a = yj,
        b = zj,
        c = Aj(),
        d = function (g) {
          a(g.target || g.srcElement || {});
        },
        e = function (g) {
          b(g.target || g.srcElement || {});
        };
      if (!c.init) {
        Cb(F, "mousedown", d);
        Cb(F, "keyup", d);
        Cb(F, "submit", e);
        var f = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function () {
          b(this);
          f.call(this);
        };
        c.init = !0;
      }
    },
    Cj = function (a, b, c, d, e) {
      var f = {
        callback: a,
        domains: b,
        fragment: 2 === c,
        placement: c,
        forms: d,
        sameHost: e,
      };
      Aj().decorators.push(f);
    },
    Tj = function (a, b, c) {
      for (var d = Aj().decorators, e = {}, f = 0; f < d.length; ++f) {
        var g = d[f],
          l;
        if ((l = !c || g.forms))
          a: {
            var m = g.domains,
              n = a,
              p = !!g.sameHost;
            if (m && (p || n !== F.location.hostname))
              for (var q = 0; q < m.length; q++)
                if (m[q] instanceof RegExp) {
                  if (m[q].test(n)) {
                    l = !0;
                    break a;
                  }
                } else if (
                  0 <= n.indexOf(m[q]) ||
                  (p && 0 <= m[q].indexOf(n))
                ) {
                  l = !0;
                  break a;
                }
            l = !1;
          }
        if (l) {
          var t = g.placement;
          void 0 == t && (t = g.fragment ? 2 : 1);
          t === b && Ha(e, g.callback());
        }
      }
      return e;
    };
  function Aj() {
    var a = tb("google_tag_data", {}),
      b = a.gl;
    (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
    return b;
  }
  var Uj = /(.*?)\*(.*?)\*(.*)/,
    Vj = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    Wj = /^(?:www\.|m\.|amp\.)+/,
    Xj = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function Yj(a) {
    return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)");
  }
  var ak = function (a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        void 0 !== d &&
          d === d &&
          null !== d &&
          "[object Object]" !== d.toString() &&
          (b.push(c), b.push(Ua(String(d))));
      }
    var e = b.join("*");
    return ["1", Zj(e), e].join("*");
  };
  function Zj(a, b) {
    var c = [
        rb.userAgent,
        new Date().getTimezoneOffset(),
        rb.userLanguage || rb.language,
        Math.floor(z() / 60 / 1e3) - (void 0 === b ? 0 : b),
        a,
      ].join("*"),
      d;
    if (!(d = xj)) {
      for (var e = Array(256), f = 0; 256 > f; f++) {
        for (var g = f, l = 0; 8 > l; l++)
          g = g & 1 ? (g >>> 1) ^ 3988292384 : g >>> 1;
        e[f] = g;
      }
      d = e;
    }
    xj = d;
    for (var m = 4294967295, n = 0; n < c.length; n++)
      m = (m >>> 8) ^ xj[(m ^ c.charCodeAt(n)) & 255];
    return ((m ^ -1) >>> 0).toString(36);
  }
  function bk() {
    return function (a) {
      var b = Ze(E.location.href),
        c = b.search.replace("?", ""),
        d = Ue(c, "_gl", !0) || "";
      a.query = ck(d) || {};
      var e = Xe(b, "fragment").match(Yj("_gl"));
      a.fragment = ck((e && e[3]) || "") || {};
    };
  }
  function dk(a, b) {
    var c = Yj(a).exec(b),
      d = b;
    if (c) {
      var e = c[2],
        f = c[4];
      d = c[1];
      f && (d = d + e + f);
    }
    return d;
  }
  var ek = function (a, b) {
      b || (b = "_gl");
      var c = Xj.exec(a);
      if (!c) return "";
      var d = c[1],
        e = dk(b, (c[2] || "").slice(1)),
        f = dk(b, (c[3] || "").slice(1));
      e.length && (e = "?" + e);
      f.length && (f = "#" + f);
      return "" + d + e + f;
    },
    fk = function (a) {
      var b = bk(),
        c = Aj();
      c.data || ((c.data = { query: {}, fragment: {} }), b(c.data));
      var d = {},
        e = c.data;
      e && (Ha(d, e.query), a && Ha(d, e.fragment));
      return d;
    },
    ck = function (a) {
      try {
        var b = gk(a, 3);
        if (void 0 !== b) {
          for (
            var c = {}, d = b ? b.split("*") : [], e = 0;
            e + 1 < d.length;
            e += 2
          ) {
            var f = d[e],
              g = Va(d[e + 1]);
            c[f] = g;
          }
          Xa("TAGGING", 6);
          return c;
        }
      } catch (l) {
        Xa("TAGGING", 8);
      }
    };
  function gk(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; 3 > e; ++e) {
          var f = Uj.exec(d);
          if (f) {
            c = f;
            break a;
          }
          d = decodeURIComponent(d);
        }
        c = void 0;
      }
      var g = c;
      if (g && "1" === g[1]) {
        var l = g[3],
          m;
        a: {
          for (var n = g[2], p = 0; p < b; ++p)
            if (n === Zj(l, p)) {
              m = !0;
              break a;
            }
          m = !1;
        }
        if (m) return l;
        Xa("TAGGING", 7);
      }
    }
  }
  function hk(a, b, c, d) {
    function e(p) {
      p = dk(a, p);
      var q = p.charAt(p.length - 1);
      p && "&" !== q && (p += "&");
      return p + n;
    }
    d = void 0 === d ? !1 : d;
    var f = Xj.exec(c);
    if (!f) return "";
    var g = f[1],
      l = f[2] || "",
      m = f[3] || "",
      n = a + "=" + b;
    d ? (m = "#" + e(m.substring(1))) : (l = "?" + e(l.substring(1)));
    return "" + g + l + m;
  }
  function ik(a, b) {
    var c = "FORM" === (a.tagName || "").toUpperCase(),
      d = Tj(b, 1, c),
      e = Tj(b, 2, c),
      f = Tj(b, 3, c);
    if (Ia(d)) {
      var g = ak(d);
      c ? jk("_gl", g, a) : kk("_gl", g, a, !1);
    }
    if (!c && Ia(e)) {
      var l = ak(e);
      kk("_gl", l, a, !0);
    }
    for (var m in f)
      if (f.hasOwnProperty(m))
        a: {
          var n = m,
            p = f[m],
            q = a;
          if (q.tagName) {
            if ("a" === q.tagName.toLowerCase()) {
              kk(n, p, q);
              break a;
            }
            if ("form" === q.tagName.toLowerCase()) {
              jk(n, p, q);
              break a;
            }
          }
          "string" == typeof q && hk(n, p, q);
        }
  }
  function kk(a, b, c, d) {
    if (c.href) {
      var e = hk(a, b, c.href, void 0 === d ? !1 : d);
      eb.test(e) && (c.href = e);
    }
  }
  function jk(a, b, c) {
    if (c && c.action) {
      var d = (c.method || "").toLowerCase();
      if ("get" === d) {
        for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
          var l = e[g];
          if (l.name === a) {
            l.setAttribute("value", b);
            f = !0;
            break;
          }
        }
        if (!f) {
          var m = F.createElement("input");
          m.setAttribute("type", "hidden");
          m.setAttribute("name", a);
          m.setAttribute("value", b);
          c.appendChild(m);
        }
      } else if ("post" === d) {
        var n = hk(a, b, c.action);
        eb.test(n) && (c.action = n);
      }
    }
  }
  function yj(a) {
    try {
      var b;
      a: {
        for (var c = a, d = 100; c && 0 < d; ) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c;
            break a;
          }
          c = c.parentNode;
          d--;
        }
        b = null;
      }
      var e = b;
      if (e) {
        var f = e.protocol;
        ("http:" !== f && "https:" !== f) || ik(e, e.hostname);
      }
    } catch (g) {}
  }
  function zj(a) {
    try {
      if (a.action) {
        var b = Xe(Ze(a.action), "host");
        ik(a, b);
      }
    } catch (c) {}
  }
  var lk = function (a, b, c, d) {
      Bj();
      Cj(a, b, "fragment" === c ? 2 : 1, !!d, !1);
    },
    mk = function (a, b) {
      Bj();
      Cj(a, [We(E.location, "host", !0)], b, !0, !0);
    },
    nk = function () {
      var a = F.location.hostname,
        b = Vj.exec(F.referrer);
      if (!b) return !1;
      var c = b[2],
        d = b[1],
        e = "";
      if (c) {
        var f = c.split("/"),
          g = f[1];
        e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g);
      } else if (d) {
        if (0 === d.indexOf("xn--")) return !1;
        e = d.replace(/-/g, ".").replace(/\.\./g, "-");
      }
      var l = a.replace(Wj, ""),
        m = e.replace(Wj, ""),
        n;
      if (!(n = l === m)) {
        var p = "." + m;
        n = l.substring(l.length - p.length, l.length) === p;
      }
      return n;
    },
    ok = function (a, b) {
      return !1 === a ? !1 : a || b || nk();
    };
  var pk = ["1"],
    qk = {},
    rk = {},
    tk = function (a) {
      return qk[sk(a)];
    },
    wk = function (a, b) {
      b = void 0 === b ? !0 : b;
      var c = sk(a.prefix);
      if (!qk[c] && !uk(c, a.path, a.domain) && b) {
        var d = sk(a.prefix),
          e = Qg();
        if (0 === vk(d, e, a)) {
          var f = tb("google_tag_data", {});
          f._gcl_au || (f._gcl_au = e);
        }
        uk(c, a.path, a.domain);
      }
    };
  function vk(a, b, c, d) {
    var e = Ug(b, "1", c.domain, c.path),
      f = wj(c, d);
    f.jb = "ad_storage";
    return Fg(a, e, f);
  }
  function uk(a, b, c) {
    var d = Tg(a, b, c, pk, "ad_storage");
    if (!d) return !1;
    xk(a, d);
    return !0;
  }
  function xk(a, b) {
    var c = b.split(".");
    5 === c.length
      ? ((qk[a] = c.slice(0, 2).join(".")),
        (rk[a] = { id: c.slice(2, 4).join("."), yh: Number(c[4]) || 0 }))
      : 3 === c.length
      ? (rk[a] = { id: c.slice(0, 2).join("."), yh: Number(c[2]) || 0 })
      : (qk[a] = b);
  }
  function sk(a) {
    return (a || "_gcl") + "_au";
  }
  function yk(a) {
    Wf() || a();
    $f(
      function () {
        Tf("ad_storage") && a();
        ag(a, "ad_storage");
      },
      ["ad_storage"]
    );
  }
  function zk(a) {
    var b = fk(!0),
      c = sk(a.prefix);
    yk(function () {
      var d = b[c];
      if (d) {
        xk(c, d);
        var e = 1e3 * Number(qk[c].split(".")[1]);
        if (e) {
          var f = wj(a, e);
          f.jb = "ad_storage";
          var g = Ug(d, "1", a.domain, a.path);
          Fg(c, g, f);
        }
      }
    });
  }
  function Ak(a, b, c, d) {
    d = d || {};
    var e = function () {
      var f = sk(d.prefix),
        g = {},
        l = Tg(f, d.path, d.domain, pk, "ad_storage");
      if (!l) return g;
      g[f] = l;
      return g;
    };
    yk(function () {
      lk(e, a, b, c);
    });
  }
  var Bk = function (a) {
    for (
      var b = [],
        c = F.cookie.split(";"),
        d = new RegExp(
          "^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"
        ),
        e = 0;
      e < c.length;
      e++
    ) {
      var f = c[e].match(d);
      f &&
        b.push({
          Pf: f[1],
          value: f[2],
          timestamp: Number(f[2].split(".")[1]) || 0,
        });
    }
    b.sort(function (g, l) {
      return l.timestamp - g.timestamp;
    });
    return b;
  };
  function Ck(a, b) {
    var c = Bk(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (
        !("1" !== f[0] || (b && 3 > f.length) || (!b && 3 !== f.length)) &&
        Number(f[1])
      ) {
        d[c[e].Pf] || (d[c[e].Pf] = []);
        var g = { version: f[0], timestamp: 1e3 * Number(f[1]), ia: f[2] };
        b && 3 < f.length && (g.labels = f.slice(3));
        d[c[e].Pf].push(g);
      }
    }
    return d;
  }
  var Dk = /^\w+$/,
    Ek = /^[\w-]+$/,
    Fk = { aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp", gb: "_gb" },
    Gk = function () {
      if (!Kf().h() || !Wf()) return !0;
      var a = Tf("ad_storage");
      return null == a ? !0 : !!a;
    },
    Hk = function (a, b) {
      Vf("ad_storage")
        ? Gk()
          ? a()
          : ag(a, "ad_storage")
        : b
        ? Xa("TAGGING", 3)
        : $f(
            function () {
              Hk(a, !0);
            },
            ["ad_storage"]
          );
    },
    Jk = function (a) {
      return Ik(a).map(function (b) {
        return b.ia;
      });
    },
    Ik = function (a) {
      var b = [];
      if (!tg(E) || !F.cookie) return b;
      var c = wg(a, F.cookie, void 0, "ad_storage");
      if (!c || 0 == c.length) return b;
      for (var d = {}, e = 0; e < c.length; d = { ud: d.ud }, e++) {
        var f = Kk(c[e]);
        if (null != f) {
          var g = f,
            l = g.version;
          d.ud = g.ia;
          var m = g.timestamp,
            n = g.labels,
            p = sa(
              b,
              (function (q) {
                return function (t) {
                  return t.ia === q.ud;
                };
              })(d)
            );
          p
            ? ((p.timestamp = Math.max(p.timestamp, m)),
              (p.labels = Lk(p.labels, n || [])))
            : b.push({ version: l, ia: d.ud, timestamp: m, labels: n });
        }
      }
      b.sort(function (q, t) {
        return t.timestamp - q.timestamp;
      });
      return Mk(b);
    };
  function Lk(a, b) {
    for (var c = {}, d = [], e = 0; e < a.length; e++)
      (c[a[e]] = !0), d.push(a[e]);
    for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
    return d;
  }
  function Nk(a) {
    return a && "string" == typeof a && a.match(Dk) ? a : "_gcl";
  }
  var Pk = function () {
      var a = Ze(E.location.href),
        b = Xe(a, "query", !1, void 0, "gclid"),
        c = Xe(a, "query", !1, void 0, "gclsrc"),
        d = Xe(a, "query", !1, void 0, "wbraid"),
        e = Xe(a, "query", !1, void 0, "dclid");
      if (!b || !c || !d) {
        var f = a.hash.replace("#", "");
        b = b || Ue(f, "gclid");
        c = c || Ue(f, "gclsrc");
        d = d || Ue(f, "wbraid");
      }
      return Ok(b, c, e, d);
    },
    Ok = function (a, b, c, d) {
      var e = {},
        f = function (g, l) {
          e[l] || (e[l] = []);
          e[l].push(g);
        };
      e.gclid = a;
      e.gclsrc = b;
      e.dclid = c;
      void 0 !== d && Ek.test(d) && ((e.gbraid = d), f(d, "gb"));
      if (void 0 !== a && a.match(Ek))
        switch (b) {
          case void 0:
            f(a, "aw");
            break;
          case "aw.ds":
            f(a, "aw");
            f(a, "dc");
            break;
          case "ds":
            f(a, "dc");
            break;
          case "3p.ds":
            f(a, "dc");
            break;
          case "gf":
            f(a, "gf");
            break;
          case "ha":
            f(a, "ha");
        }
      c && f(c, "dc");
      return e;
    },
    Rk = function (a) {
      var b = Pk();
      Hk(function () {
        Qk(b, !1, a);
      });
    };
  function Qk(a, b, c, d, e) {
    function f(w, y) {
      var x = Sk(w, g);
      x && (Fg(x, y, l), (m = !0));
    }
    c = c || {};
    e = e || [];
    var g = Nk(c.prefix);
    d = d || z();
    var l = wj(c, d, !0);
    l.jb = "ad_storage";
    var m = !1,
      n = Math.round(d / 1e3),
      p = function (w) {
        var y = ["GCL", n, w];
        0 < e.length && y.push(e.join("."));
        return y.join(".");
      };
    a.aw && f("aw", p(a.aw[0]));
    a.dc && f("dc", p(a.dc[0]));
    a.gf && f("gf", p(a.gf[0]));
    a.ha && f("ha", p(a.ha[0]));
    a.gp && f("gp", p(a.gp[0]));
    if (!m && a.gb) {
      var q = a.gb[0],
        t = Sk("gb", g),
        u = !1;
      if (!b)
        for (var r = Ik(t), v = 0; v < r.length; v++)
          r[v].ia === q && r[v].labels && 0 < r[v].labels.length && (u = !0);
      u || f("gb", p(q));
    }
  }
  var Uk = function (a, b) {
      var c = fk(!0);
      Hk(function () {
        for (var d = Nk(b.prefix), e = 0; e < a.length; ++e) {
          var f = a[e];
          if (void 0 !== Fk[f]) {
            var g = Sk(f, d),
              l = c[g];
            if (l) {
              var m = Math.min(Tk(l), z()),
                n;
              b: {
                var p = m;
                if (tg(E))
                  for (
                    var q = wg(g, F.cookie, void 0, "ad_storage"), t = 0;
                    t < q.length;
                    ++t
                  )
                    if (Tk(q[t]) > p) {
                      n = !0;
                      break b;
                    }
                n = !1;
              }
              if (!n) {
                var u = wj(b, m, !0);
                u.jb = "ad_storage";
                Fg(g, l, u);
              }
            }
          }
        }
        Qk(Ok(c.gclid, c.gclsrc), !1, b);
      });
    },
    Sk = function (a, b) {
      var c = Fk[a];
      if (void 0 !== c) return b + c;
    },
    Tk = function (a) {
      return 0 !== Vk(a.split(".")).length
        ? 1e3 * (Number(a.split(".")[1]) || 0)
        : 0;
    };
  function Kk(a) {
    var b = Vk(a.split("."));
    return 0 === b.length
      ? null
      : {
          version: b[0],
          ia: b[2],
          timestamp: 1e3 * (Number(b[1]) || 0),
          labels: b.slice(3),
        };
  }
  function Vk(a) {
    return 3 > a.length ||
      ("GCL" !== a[0] && "1" !== a[0]) ||
      !/^\d+$/.test(a[1]) ||
      !Ek.test(a[2])
      ? []
      : a;
  }
  var Wk = function (a, b, c, d, e) {
      if (ra(b) && tg(E)) {
        var f = Nk(e),
          g = function () {
            for (var l = {}, m = 0; m < a.length; ++m) {
              var n = Sk(a[m], f);
              if (n) {
                var p = wg(n, F.cookie, void 0, "ad_storage");
                p.length && (l[n] = p.sort()[p.length - 1]);
              }
            }
            return l;
          };
        Hk(function () {
          lk(g, b, c, d);
        });
      }
    },
    Mk = function (a) {
      return a.filter(function (b) {
        return Ek.test(b.ia);
      });
    },
    Xk = function (a, b) {
      if (tg(E)) {
        for (var c = Nk(b.prefix), d = {}, e = 0; e < a.length; e++)
          Fk[a[e]] && (d[a[e]] = Fk[a[e]]);
        Hk(function () {
          k(d, function (f, g) {
            var l = wg(c + g, F.cookie, void 0, "ad_storage");
            l.sort(function (u, r) {
              return Tk(r) - Tk(u);
            });
            if (l.length) {
              var m = l[0],
                n = Tk(m),
                p = 0 !== Vk(m.split(".")).length ? m.split(".").slice(3) : [],
                q = {},
                t;
              t = 0 !== Vk(m.split(".")).length ? m.split(".")[2] : void 0;
              q[f] = [t];
              Qk(q, !0, b, n, p);
            }
          });
        });
      }
    };
  function Yk(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  var Zk = function (a) {
      function b(e, f, g) {
        g && (e[f] = g);
      }
      if (Wf()) {
        var c = Pk();
        if (Yk(c, a)) {
          var d = {};
          b(d, "gclid", c.gclid);
          b(d, "dclid", c.dclid);
          b(d, "gclsrc", c.gclsrc);
          b(d, "wbraid", c.gbraid);
          mk(function () {
            return d;
          }, 3);
          mk(function () {
            var e = {};
            return (e._up = "1"), e;
          }, 1);
        }
      }
    },
    $k = function (a, b, c, d) {
      var e = [];
      c = c || {};
      if (!Gk()) return e;
      var f = Ik(a);
      if (!f.length) return e;
      for (var g = 0; g < f.length; g++)
        -1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
      if (d) return e;
      if (1 !== e[0]) {
        var l = f[0],
          m = f[0].timestamp,
          n = [l.version, Math.round(m / 1e3), l.ia]
            .concat(l.labels || [], [b])
            .join("."),
          p = wj(c, m, !0);
        p.jb = "ad_storage";
        Fg(a, n, p);
      }
      return e;
    };
  function al(a, b) {
    var c = Nk(b),
      d = Sk(a, c);
    if (!d) return 0;
    for (var e = Ik(d), f = 0, g = 0; g < e.length; g++)
      f = Math.max(f, e[g].timestamp);
    return f;
  }
  function bl(a) {
    var b = 0,
      c;
    for (c in a)
      for (var d = a[c], e = 0; e < d.length; e++)
        b = Math.max(b, Number(d[e].timestamp));
    return b;
  }
  var cl = function (a) {
    var b = Math.max(al("aw", a), bl(Gk() ? Ck() : {}));
    return Math.max(al("gb", a), bl(Gk() ? Ck("_gac_gb", !0) : {})) > b;
  };
  var hl = /[A-Z]+/,
    il = /\s/,
    jl = function (a) {
      if (h(a)) {
        a = Da(a);
        var b = a.indexOf("-");
        if (!(0 > b)) {
          var c = a.substring(0, b);
          if (hl.test(c)) {
            for (
              var d = a.substring(b + 1).split("/"), e = 0;
              e < d.length;
              e++
            )
              if (!d[e] || (il.test(d[e]) && ("AW" !== c || 1 !== e))) return;
            return { id: a, prefix: c, U: c + "-" + d[0], J: d };
          }
        }
      }
    },
    ll = function (a) {
      for (var b = {}, c = 0; c < a.length; ++c) {
        var d = jl(a[c]);
        d && (b[d.id] = d);
      }
      kl(b);
      var e = [];
      k(b, function (f, g) {
        e.push(g);
      });
      return e;
    };
  function kl(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        "AW" === d.prefix && d.J[1] && b.push(d.U);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var nl = function (a, b, c, d) {
      return (2 === ml() || d || "http:" != E.location.protocol ? a : b) + c;
    },
    ml = function () {
      var a = zb(),
        b;
      if (1 === a)
        a: {
          var c = ne;
          c = c.toLowerCase();
          for (
            var d = "https://" + c,
              e = "http://" + c,
              f = 1,
              g = F.getElementsByTagName("script"),
              l = 0;
            l < g.length && 100 > l;
            l++
          ) {
            var m = g[l].src;
            if (m) {
              m = m.toLowerCase();
              if (0 === m.indexOf(e)) {
                b = 3;
                break a;
              }
              1 === f && 0 === m.indexOf(d) && (f = 2);
            }
          }
          b = f;
        }
      else b = a;
      return b;
    };
  var zl = function (a, b, c) {
      this.target = a;
      this.eventName = b;
      this.h = c;
      this.m = {};
      this.metadata = I(c.eventMetadata || {});
      this.I = !1;
    },
    Al = function (a, b, c) {
      var d = U(a.h, b);
      void 0 !== d ? (a.m[b] = d) : void 0 !== c && (a.m[b] = c);
    },
    Bl = function (a, b, c) {
      var d = Ge(a.target.U);
      return d && d.hasOwnProperty(b) ? d[b] : c;
    };
  function Cl(a) {
    return {
      getDestinationId: function () {
        return a.target.U;
      },
      getEventName: function () {
        return a.eventName;
      },
      setEventName: function (b) {
        return void (a.eventName = b);
      },
      getHitData: function (b) {
        return a.m[b];
      },
      setHitData: function (b, c) {
        return void (a.m[b] = c);
      },
      setHitDataIfNotDefined: function (b, c) {
        void 0 === a.m[b] && (a.m[b] = c);
      },
      copyToHitData: function (b, c) {
        Al(a, b, c);
      },
      getMetadata: function (b) {
        return a.metadata[b];
      },
      setMetadata: function (b, c) {
        return void (a.metadata[b] = c);
      },
      abort: function () {
        return void (a.I = !0);
      },
      getProcessedEvent: function () {
        return a;
      },
      getFromEventContext: function (b) {
        return U(a.h, b);
      },
    };
  }
  var Vl = function (a, b, c, d, e, f, g, l, m, n, p, q) {
      this.eventId = a;
      this.priorityId = b;
      this.h = c;
      this.M = d;
      this.m = e;
      this.D = f;
      this.R = g;
      this.B = l;
      this.eventMetadata = m;
      this.P = n;
      this.O = p;
      this.C = q;
    },
    U = function (a, b, c) {
      if (void 0 !== a.h[b]) return a.h[b];
      if (void 0 !== a.M[b]) return a.M[b];
      if (void 0 !== a.m[b]) return a.m[b];
      di && Wl(a, a.D[b], a.R[b]) && (O(71), O(79));
      return void 0 !== a.D[b] ? a.D[b] : void 0 !== a.B[b] ? a.B[b] : c;
    },
    Xl = function (a) {
      function b(g) {
        for (var l = Object.keys(g), m = 0; m < l.length; ++m) c[l[m]] = 1;
      }
      var c = {};
      b(a.h);
      b(a.M);
      b(a.m);
      b(a.D);
      if (di)
        for (var d = Object.keys(a.R), e = 0; e < d.length; e++) {
          var f = d[e];
          if (
            "event" !== f &&
            "gtm" !== f &&
            "tagTypeBlacklist" !== f &&
            !c.hasOwnProperty(f)
          ) {
            O(71);
            O(80);
            break;
          }
        }
      return Object.keys(c);
    },
    Yl = function (a, b, c) {
      function d(m) {
        Pb(m) &&
          k(m, function (n, p) {
            f = !0;
            e[n] = p;
          });
      }
      var e = {},
        f = !1;
      (c && 1 !== c) || (d(a.B[b]), d(a.D[b]), d(a.m[b]), d(a.M[b]));
      (c && 2 !== c) || d(a.h[b]);
      if (di) {
        var g = f,
          l = e;
        e = {};
        f = !1;
        (c && 1 !== c) || (d(a.B[b]), d(a.R[b]), d(a.m[b]), d(a.M[b]));
        (c && 2 !== c) || d(a.h[b]);
        if (f !== g || Wl(a, e, l)) O(71), O(81);
        f = g;
        e = l;
      }
      return f ? e : void 0;
    },
    Zl = function (a) {
      var b = [P.g.Ec, P.g.Cd, P.g.Dd, P.g.Ed, P.g.Fd, P.g.Gd, P.g.Hd],
        c = {},
        d = !1,
        e = function (l) {
          for (var m = 0; m < b.length; m++)
            void 0 !== l[b[m]] && ((c[b[m]] = l[b[m]]), (d = !0));
          return d;
        };
      if (e(a.h) || e(a.M) || e(a.m)) return c;
      e(a.D);
      if (di) {
        var f = c,
          g = d;
        c = {};
        d = !1;
        e(a.R);
        Wl(a, c, f) && (O(71), O(82));
        c = f;
        d = g;
      }
      if (d) return c;
      e(a.B);
      return c;
    },
    Wl = function (a, b, c) {
      if (!di) return !1;
      try {
        if (b === c) return !1;
        var d = Nb(b);
        if (d !== Nb(c) || !((Pb(b) && Pb(c)) || "array" === d)) return !0;
        if ("array" === d) {
          if (b.length !== c.length) return !0;
          for (var e = 0; e < b.length; e++) if (Wl(a, b[e], c[e])) return !0;
        } else {
          for (var f in c) if (!b.hasOwnProperty(f)) return !0;
          for (var g in b)
            if (!c.hasOwnProperty(g) || Wl(a, b[g], c[g])) return !0;
        }
      } catch (l) {
        O(72);
      }
      return !1;
    },
    $l = function (a, b) {
      this.Mi = a;
      this.Ni = b;
      this.D = {};
      this.Vg = {};
      this.h = {};
      this.M = {};
      this.m = {};
      this.Rc = {};
      this.B = {};
      this.sc = function () {};
      this.Ha = function () {};
      this.R = !1;
    },
    am = function (a, b) {
      a.D = b;
      return a;
    },
    bm = function (a, b) {
      a.Vg = b;
      return a;
    },
    cm = function (a, b) {
      a.h = b;
      return a;
    },
    dm = function (a, b) {
      a.M = b;
      return a;
    },
    em = function (a, b) {
      a.m = b;
      return a;
    },
    fm = function (a, b) {
      a.Rc = b;
      return a;
    },
    gm = function (a, b) {
      a.B = b || {};
      return a;
    },
    hm = function (a, b) {
      a.sc = b;
      return a;
    },
    im = function (a, b) {
      a.Ha = b;
      return a;
    },
    jm = function (a) {
      a.R = !0;
      return a;
    },
    km = function (a) {
      return new Vl(
        a.Mi,
        a.Ni,
        a.D,
        a.Vg,
        a.h,
        a.M,
        a.m,
        a.Rc,
        a.B,
        a.sc,
        a.Ha,
        a.R
      );
    };
  function om() {
    return "attribution-reporting";
  }
  function pm(a) {
    var b;
    b = void 0 === b ? document : b;
    var c;
    return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a));
  }
  var qm = !1;
  function rm() {
    if (pm("join-ad-interest-group") && pa(rb.joinAdInterestGroup)) return !0;
    qm ||
      (uh(
        "A751Xsk4ZW3DVQ8WZng2Dk5s3YzAyqncTzgv+VaE6wavgTY0QHkDvUTET1o7HanhuJO8lgv1Vvc88Ij78W1FIAAAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1RoaXJkUGFydHkiOnRydWV9"
      ),
      (qm = !0));
    return pm("join-ad-interest-group") && pa(rb.joinAdInterestGroup);
  }
  function sm(a, b) {
    var c = void 0;
    try {
      c = F.querySelector('iframe[data-tagging-id="' + b + '"]');
    } catch (e) {}
    if (c) {
      var d = Number(c.dataset.loadTime);
      if (d && 6e4 > z() - d) {
        Xa("TAGGING", 9);
        return;
      }
    } else
      try {
        if (
          50 <=
          F.querySelectorAll(
            'iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]'
          ).length
        ) {
          Xa("TAGGING", 10);
          return;
        }
      } catch (e) {}
    Ab(
      a,
      void 0,
      { allow: "join-ad-interest-group" },
      { taggingId: b, loadTime: z() },
      c
    );
  }
  function tm() {
    return S(60)
      ? "https://td.doubleclick.net"
      : "https://googleads.g.doubleclick.net";
  }
  var um = RegExp(
      "^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"
    ),
    vm = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
    wm = /^\d+\.fls\.doubleclick\.net$/,
    xm = /;gac=([^;?]+)/,
    ym = /;gacgb=([^;?]+)/,
    zm = /;gclaw=([^;?]+)/,
    Am = /;gclgb=([^;?]+)/;
  function Bm(a, b) {
    if (wm.test(F.location.host)) {
      var c = F.location.href.match(b);
      return c && 2 == c.length && c[1].match(um)
        ? decodeURIComponent(c[1])
        : "";
    }
    var d = [],
      e;
    for (e in a) {
      for (var f = [], g = a[e], l = 0; l < g.length; l++) f.push(g[l].ia);
      d.push(e + ":" + f.join(","));
    }
    return 0 < d.length ? d.join(";") : "";
  }
  var Cm = function (a, b, c) {
    var d = Gk() ? Ck("_gac_gb", !0) : {},
      e = [],
      f = !1,
      g;
    for (g in d) {
      var l = $k("_gac_gb_" + g, a, b, c);
      f =
        f ||
        (0 !== l.length &&
          l.some(function (m) {
            return 1 === m;
          }));
      e.push(g + ":" + l.join(","));
    }
    return { Cj: f ? e.join(";") : "", Bj: Bm(d, ym) };
  };
  function Dm(a, b, c) {
    if (wm.test(F.location.host)) {
      var d = F.location.href.match(c);
      if (d && 2 == d.length && d[1].match(vm)) return [{ ia: d[1] }];
    } else return Ik((a || "_gcl") + b);
    return [];
  }
  var Em = function (a) {
      return Dm(a, "_aw", zm)
        .map(function (b) {
          return b.ia;
        })
        .join(".");
    },
    Fm = function (a) {
      return Dm(a, "_gb", Am)
        .map(function (b) {
          return b.ia;
        })
        .join(".");
    },
    Gm = function (a, b) {
      var c = $k(((b && b.prefix) || "_gcl") + "_gb", a, b);
      return 0 === c.length ||
        c.every(function (d) {
          return 0 === d;
        })
        ? ""
        : c.join(".");
    };
  var Hm = function () {
    if (pa(E.__uspapi)) {
      var a = "";
      try {
        E.__uspapi("getUSPData", 1, function (b, c) {
          if (c && b) {
            var d = b.uspString;
            d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d);
          }
        });
      } catch (b) {}
      return a;
    }
  };
  var rn = {
    ca: {
      Wh: "ads_conversion_hit",
      Lk: "container_execute_start",
      ci: "container_setup_end",
      Wf: "container_setup_start",
      Ok: "event_execute_end",
      Pk: "event_execute_start",
      Qk: "event_setup_start",
      Ki: "ga4_conversion_hit",
      ef: "page_load",
      Db: "snippet_load",
      Zi: "tag_callback_error",
      aj: "tag_callback_failure",
      bj: "tag_callback_success",
      cj: "tag_execute_end",
      hh: "tag_execute_start",
    },
  };
  var un = function (a, b, c, d, e, f) {
      var g = {};
      return g;
    },
    vn = function (a) {
      var b = !1;
      return b;
    },
    wn = function (a, b) {},
    xn = function (a, b, c) {},
    yn = function () {
      function a(d) {
        return !qa(d) || 0 > d ? 0 : d;
      }
      if (!Zd._li && Lb() && Lb().timing) {
        var b = Lb().timing.navigationStart,
          c = qa(Ae.get("gtm.start")) ? Ae.get("gtm.start") : 0;
        Zd._li = { cst: a(c - b), cbt: a(pe - b) };
      }
    },
    zn = function (a) {
      Lb() && Lb().mark(Xg.H + "_" + a + "_start");
    },
    An = function (a) {
      if (Lb()) {
        var b = Lb(),
          c = Xg.H + "_" + a + "_start",
          d = Xg.H + "_" + a + "_duration";
        b.measure(d, c);
        var e = Lb().getEntriesByName(d)[0];
        b.clearMarks(c);
        b.clearMeasures(d);
        var f = Zd._p || {};
        void 0 === f[a] && ((f[a] = e.duration), (Zd._p = f));
        return e.duration;
      }
    },
    Bn = function () {
      var a = Kb();
      if (void 0 !== a) {
        var b = Zd._p || {};
        b.PAGEVIEW = a;
        Zd._p = b;
      }
    };
  var Cn = function (a, b) {
    var c,
      d = E.GooglebQhCsO;
    d || ((d = {}), (E.GooglebQhCsO = d));
    c = d;
    if (c[a]) return !1;
    c[a] = [];
    c[a][0] = b;
    return !0;
  };
  var Dn = function (a, b) {
    var c = qh(a, "fmt");
    if (b) {
      var d = qh(a, "random"),
        e = qh(a, "label") || "";
      if (!d) return !1;
      var f = kj(
        decodeURIComponent(e.replace(/\+/g, " ")) +
          ":" +
          decodeURIComponent(d.replace(/\+/g, " "))
      );
      if (!Cn(f, b)) return !1;
    }
    c && 4 != c && (a = sh(a, "rfmt", c));
    var g = sh(a, "fmt", 4);
    yb(
      g,
      function () {
        E.google_noFurtherRedirects &&
          b &&
          b.call &&
          ((E.google_noFurtherRedirects = null), b());
      },
      void 0,
      void 0,
      F.getElementsByTagName("script")[0].parentElement || void 0
    );
    return !0;
  };
  var Tn = function () {
      this.h = {};
    },
    Un = function (a, b, c) {
      null != c && (a.h[b] = c);
    },
    Vn = function (a) {
      return Object.keys(a.h)
        .map(function (b) {
          return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b]);
        })
        .join("&");
    },
    Xn = function (a, b, c, d, e) {};
  function Zn(a, b) {
    if (a) {
      var c = "" + a;
      0 !== c.indexOf("http://") &&
        0 !== c.indexOf("https://") &&
        (c = "https://" + c);
      "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
      return Ze("" + c + b).href;
    }
  }
  function $n(a, b) {
    return he || je ? Zn(a, b) : void 0;
  }
  function ao() {
    return !!Yd.Zd && "SGTM_TOKEN" !== Yd.Zd.split("@@").join("");
  }
  var co = function (a, b, c, d) {
      if (!bo() && !dh(a)) {
        var e = c ? "/gtag/js" : "/gtm.js",
          f = "?id=" + encodeURIComponent(a) + "&l=" + Yd.ja,
          g = 0 === a.indexOf("GTM-");
        g || (f += "&cx=c");
        var l = ao();
        l && (f += "&sign=" + Yd.Zd);
        var m = $n(b, e + f);
        if (!m) {
          var n = Yd.zd + e;
          l &&
            sb &&
            g &&
            (n = sb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
          m = nl("https://", "http://", n + f);
        }
        bh().container[a] = { state: 1, context: d };
        yb(m);
      }
    },
    eo = function (a, b, c) {
      var d;
      if ((d = !bo())) {
        var e = bh().destination[a];
        d = !(e && e.state);
      }
      if (d)
        if (eh())
          (bh().destination[a] = { state: 0, transportUrl: b, context: c }),
            O(91);
        else {
          var f =
            "/gtag/destination?id=" +
            encodeURIComponent(a) +
            "&l=" +
            Yd.ja +
            "&cx=c";
          ao() && (f += "&sign=" + Yd.Zd);
          var g = $n(b, f);
          g || (g = nl("https://", "http://", Yd.zd + f));
          bh().destination[a] = { state: 1, context: c };
          yb(g);
        }
    };
  function bo() {
    if (Wg()) {
      return !0;
    }
    return !1;
  }
  var fo = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
    ),
    go = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: [
        "customScripts",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      customScripts: [
        "html",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"],
    },
    ho = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: [
        "customPixels",
        "customScripts",
        "html",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
    },
    io =
      "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(
        " "
      ),
    lo = function (a) {
      var b = ze("gtm.allowlist") || ze("gtm.whitelist");
      b && O(9);
      fe && (b = ["google", "gtagfl", "lcl", "zone"]);
      jo &&
        ko() &&
        ((b = []),
        window.console &&
          window.console.log &&
          window.console.log("GTM blocked. See go/13687728."));
      var c = b && Ja(Ca(b), go),
        d = ze("gtm.blocklist") || ze("gtm.blacklist");
      d || ((d = ze("tagTypeBlacklist")) && O(3));
      d ? O(8) : (d = []);
      ko() &&
        ((d = Ca(d)),
        d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
      0 <= Ca(d).indexOf("google") && O(2);
      var e = d && Ja(Ca(d), ho),
        f = {};
      return function (g) {
        var l = g && g[Rb.Sa];
        if (!l || "string" != typeof l) return !0;
        l = l.replace(/^_*/, "");
        if (void 0 !== f[l]) return f[l];
        var m = re[l] || [],
          n = a(l, m);
        if (b) {
          var p;
          if ((p = n))
            a: {
              if (0 > c.indexOf(l))
                if (m && 0 < m.length)
                  for (var q = 0; q < m.length; q++) {
                    if (0 > c.indexOf(m[q])) {
                      O(11);
                      p = !1;
                      break a;
                    }
                  }
                else {
                  p = !1;
                  break a;
                }
              p = !0;
            }
          n = p;
        }
        var t = !1;
        if (d) {
          var u = 0 <= e.indexOf(l);
          if (u) t = u;
          else {
            var r = xa(e, m || []);
            r && O(10);
            t = r;
          }
        }
        var v = !n || t;
        v ||
          !(0 <= m.indexOf("sandboxedScripts")) ||
          (c && -1 !== c.indexOf("sandboxedScripts")) ||
          (v = xa(e, io));
        return (f[l] = v);
      };
    },
    jo = !1;
  var ko = function () {
    return fo.test(E.location && E.location.hostname);
  };
  var mo = { initialized: 11, complete: 12, interactive: 13 },
    no = {},
    oo = Object.freeze(((no[P.g.ya] = !0), no)),
    po =
      0 <= F.location.search.indexOf("?gtm_diagnostics=") ||
      0 <= F.location.search.indexOf("&gtm_diagnostics="),
    ro = function (a, b, c) {
      if (di && "config" === a && !(1 < jl(b).J.length)) {
        var d,
          e = tb("google_tag_data", {});
        e.td || (e.td = {});
        d = e.td;
        var f = I(c.D);
        I(c.h, f);
        var g = [],
          l;
        for (l in d) {
          var m = qo(d[l], f);
          m.length && (po && console.log(m), g.push(l));
        }
        if (g.length) {
          if (g.length) {
            var n = b + "*" + g.join(".");
            ni = ni ? ni + "!" + n : "&tdc=" + n;
          }
          Xa("TAGGING", mo[F.readyState] || 14);
        }
        d[b] = f;
      }
    };
  function so(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c;
  }
  function qo(a, b, c, d) {
    c = void 0 === c ? {} : c;
    d = void 0 === d ? "" : d;
    if (a === b) return [];
    var e = function (q, t) {
        var u = t[q];
        return void 0 === u ? oo[q] : u;
      },
      f;
    for (f in so(a, b)) {
      var g = (d ? d + "." : "") + f,
        l = e(f, a),
        m = e(f, b),
        n = "object" === Nb(l) || "array" === Nb(l),
        p = "object" === Nb(m) || "array" === Nb(m);
      if (n && p) qo(l, m, c, g);
      else if (n || p || l !== m) c[g] = !0;
    }
    return Object.keys(c);
  }
  var to = !1,
    uo = 0,
    vo = [];
  function wo(a) {
    if (!to) {
      var b = F.createEventObject,
        c = "complete" == F.readyState,
        d = "interactive" == F.readyState;
      if (!a || "readystatechange" != a.type || c || (!b && d)) {
        to = !0;
        for (var e = 0; e < vo.length; e++) G(vo[e]);
      }
      vo.push = function () {
        for (var f = 0; f < arguments.length; f++) G(arguments[f]);
        return 0;
      };
    }
  }
  function xo() {
    if (!to && 140 > uo) {
      uo++;
      try {
        F.documentElement.doScroll("left"), wo();
      } catch (a) {
        E.setTimeout(xo, 50);
      }
    }
  }
  var yo = function (a) {
    to ? a() : vo.push(a);
  };
  var zo = function (a, b) {
    return {
      entityType: 1,
      indexInOriginContainer: a,
      nameInOriginContainer: b,
      originContainerId: Xg.H,
    };
  };
  var Bo = function (a, b) {
      this.h = !1;
      this.D = [];
      this.M = { tags: [] };
      this.R = !1;
      this.m = this.B = 0;
      Ao(this, a, b);
    },
    Co = function (a, b, c, d) {
      if (be.hasOwnProperty(b) || "__zone" === b) return -1;
      var e = {};
      Pb(d) && (e = I(d, e));
      e.id = c;
      e.status = "timeout";
      return a.M.tags.push(e) - 1;
    },
    Do = function (a, b, c, d) {
      var e = a.M.tags[b];
      e && ((e.status = c), (e.executionTime = d));
    },
    Eo = function (a) {
      if (!a.h) {
        for (var b = a.D, c = 0; c < b.length; c++) b[c]();
        a.h = !0;
        a.D.length = 0;
      }
    },
    Ao = function (a, b, c) {
      void 0 !== b && Fo(a, b);
      c &&
        E.setTimeout(function () {
          return Eo(a);
        }, Number(c));
    },
    Fo = function (a, b) {
      var c = Ga(function () {
        return G(function () {
          b(Xg.H, a.M);
        });
      });
      a.h ? c() : a.D.push(c);
    },
    Go = function (a) {
      a.B++;
      return Ga(function () {
        a.m++;
        a.R && a.m >= a.B && Eo(a);
      });
    },
    Ho = function (a) {
      a.R = !0;
      a.m >= a.B && Eo(a);
    };
  var Io = {},
    Jo = function () {
      return E.GoogleAnalyticsObject && E[E.GoogleAnalyticsObject];
    },
    Ko = !1;
  function No() {
    return E.GoogleAnalyticsObject || "ga";
  }
  var Oo = function (a) {},
    Po = function (a, b) {
      return function () {
        var c = Jo(),
          d = c && c.getByName && c.getByName(a);
        if (d) {
          var e = d.get("sendHitTask");
          d.set("sendHitTask", function (f) {
            var g = f.get("hitPayload"),
              l = f.get("hitCallback"),
              m = 0 > g.indexOf("&tid=" + b);
            m &&
              (f.set(
                "hitPayload",
                g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b),
                !0
              ),
              f.set("hitCallback", void 0, !0));
            e(f);
            m &&
              (f.set("hitPayload", g, !0),
              f.set("hitCallback", l, !0),
              f.set("_x_19", void 0, !0),
              e(f));
          });
        }
      };
    };
  function Uo(a, b, c, d) {
    var e = rc[a],
      f = Vo(a, b, c, d);
    if (!f) return null;
    var g = Ac(e[Rb.gh], c, []);
    if (g && g.length) {
      var l = g[0];
      f = Uo(
        l.index,
        { P: f, O: 1 === l.sh ? b.terminate : f, terminate: b.terminate },
        c,
        d
      );
    }
    return f;
  }
  function Vo(a, b, c, d) {
    function e() {
      if (f[Rb.Si]) l();
      else {
        var w = Bc(f, c, []),
          y = w[Rb.Zh];
        if (null != y)
          for (var x = 0; x < y.length; x++)
            if (!hg(y[x])) {
              l();
              return;
            }
        var A = Co(c.Fb, String(f[Rb.Sa]), Number(f[Rb.sb]), w[Rb.Ti]),
          B = !1;
        w.vtp_gtmOnSuccess = function () {
          if (!B) {
            B = !0;
            var C = z() - J;
            Si(c.id, rc[a], "5", C);
            Do(c.Fb, A, "success", C);
            S(70) && xn(c, f, rn.ca.bj);
            g();
          }
        };
        w.vtp_gtmOnFailure = function () {
          if (!B) {
            B = !0;
            var C = z() - J;
            Si(c.id, rc[a], "6", C);
            Do(c.Fb, A, "failure", C);
            S(70) && xn(c, f, rn.ca.aj);
            l();
          }
        };
        w.vtp_gtmTagId = f.tag_id;
        w.vtp_gtmEventId = c.id;
        c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
        Si(c.id, f, "1");
        var D = function () {
          var C = z() - J;
          Si(c.id, f, "7", C);
          Do(c.Fb, A, "exception", C);
          S(70) && xn(c, f, rn.ca.Zi);
          B || ((B = !0), l());
        };
        if (S(70)) {
          var H = un(rn.ca.hh, Xg.H, c.id, Number(f[Rb.sb]), c.name, Wh(f));
          vn(H);
        }
        var J = z();
        try {
          zc(w, { event: c, index: a, type: 1 });
        } catch (C) {
          D(C);
        }
        S(70) && xn(c, f, rn.ca.cj);
      }
    }
    var f = rc[a],
      g = b.P,
      l = b.O,
      m = b.terminate;
    if (c.yf(f)) return null;
    var n = Ac(f[Rb.ih], c, []);
    if (n && n.length) {
      var p = n[0],
        q = Uo(p.index, { P: g, O: l, terminate: m }, c, d);
      if (!q) return null;
      g = q;
      l = 2 === p.sh ? m : q;
    }
    if (f[Rb.bh] || f[Rb.Vi]) {
      var t = f[Rb.bh] ? sc : c.Ek,
        u = g,
        r = l;
      if (!t[a]) {
        e = Ga(e);
        var v = Wo(a, t, e);
        g = v.P;
        l = v.O;
      }
      return function () {
        t[a](u, r);
      };
    }
    return e;
  }
  function Wo(a, b, c) {
    var d = [],
      e = [];
    b[a] = Xo(d, e, c);
    return {
      P: function () {
        b[a] = Yo;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      O: function () {
        b[a] = Zo;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }
  function Xo(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function Yo(a) {
    a();
  }
  function Zo(a, b) {
    b();
  }
  var ap = function (a, b) {
      return 1 === arguments.length ? $o("config", a) : $o("config", a, b);
    },
    bp = function (a, b, c) {
      c = c || {};
      c[P.g.Cb] = a;
      return $o("event", b, c);
    };
  function $o(a) {
    return arguments;
  }
  var cp = function () {
    this.h = [];
    this.m = [];
  };
  cp.prototype.enqueue = function (a, b, c) {
    var d = this.h.length + 1;
    a["gtm.uniqueEventId"] = b;
    a["gtm.priorityId"] = d;
    c.eventId = b;
    c.fromContainerExecution = !0;
    c.priorityId = d;
    var e = {
      message: a,
      notBeforeEventId: b,
      priorityId: d,
      messageContext: c,
    };
    this.h.push(e);
    for (var f = 0; f < this.m.length; f++)
      try {
        this.m[f](e);
      } catch (g) {}
  };
  cp.prototype.listen = function (a) {
    this.m.push(a);
  };
  cp.prototype.get = function () {
    for (var a = {}, b = 0; b < this.h.length; b++) {
      var c = this.h[b],
        d = a[c.notBeforeEventId];
      d || ((d = []), (a[c.notBeforeEventId] = d));
      d.push(c);
    }
    return a;
  };
  cp.prototype.prune = function (a) {
    for (var b = [], c = [], d = 0; d < this.h.length; d++) {
      var e = this.h[d];
      e.notBeforeEventId === a ? b.push(e) : c.push(e);
    }
    this.h = c;
    return b;
  };
  var ep = function (a, b, c) {
      dp().enqueue(a, b, c);
    },
    gp = function () {
      var a = fp;
      dp().listen(a);
    };
  function dp() {
    var a = Zd.mb;
    a || ((a = new cp()), (Zd.mb = a));
    return a;
  }
  var op = function (a) {
      var b = Zd.zones;
      return b
        ? b.getIsAllowedFn(Zg(), a)
        : function () {
            return !0;
          };
    },
    pp = function (a) {
      var b = Zd.zones;
      return b ? b.isActive(Zg(), a) : !0;
    };
  var sp = function (a, b) {
    for (var c = [], d = 0; d < rc.length; d++)
      if (a[d]) {
        var e = rc[d];
        var f = Go(b.Fb);
        try {
          var g = Uo(d, { P: f, O: f, terminate: f }, b, d);
          if (g) {
            var l = c,
              m = l.push,
              n = d,
              p = e["function"];
            if (!p) throw "Error: No function name given for function call.";
            var q = tc[p];
            m.call(l, {
              Ph: n,
              Fh: q ? q.priorityOverride || 0 : 0,
              execute: g,
            });
          } else qp(d, b), f();
        } catch (u) {
          f();
        }
      }
    c.sort(rp);
    for (var t = 0; t < c.length; t++) c[t].execute();
    return 0 < c.length;
  };
  function rp(a, b) {
    var c,
      d = b.Fh,
      e = a.Fh;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c;
    else {
      var g = a.Ph,
        l = b.Ph;
      f = g > l ? 1 : g < l ? -1 : 0;
    }
    return f;
  }
  function qp(a, b) {
    if (di) {
      var c = function (d) {
        var e = b.yf(rc[d]) ? "3" : "4",
          f = Ac(rc[d][Rb.gh], b, []);
        f && f.length && c(f[0].index);
        Si(b.id, rc[d], e);
        var g = Ac(rc[d][Rb.ih], b, []);
        g && g.length && c(g[0].index);
      };
      c(a);
    }
  }
  var vp = !1,
    tp;
  var cq = function (a) {
    var b = z(),
      c = a["gtm.uniqueEventId"],
      d = a["gtm.priorityId"],
      e = a.event;
    if ("gtm.js" === e) {
      if (vp) return !1;
      vp = !0;
    }
    var l,
      m = !1;
    if (pp(c)) l = op(c);
    else {
      if ("gtm.js" !== e && "gtm.init" !== e && "gtm.init_consent" !== e)
        return !1;
      m = !0;
      l = op(Number.MAX_SAFE_INTEGER);
    }
    Ri(c, e);
    var n = a.eventCallback,
      p = a.eventTimeout,
      q = n;
    var t = {
        id: c,
        priorityId: d,
        name: e,
        yf: lo(l),
        Ek: [],
        zh: function () {
          O(6);
          Xa("HEALTH", 0);
        },
        mh: wp(),
        nh: xp(c),
        Fb: new Bo(q, p),
      },
      u = Fc(t);
    m && (u = aq(u));
    var r = sp(u, t),
      v = !1;
    Ho(t.Fb);
    ("gtm.js" !== e && "gtm.sync" !== e) || Oo(Xg.H);
    return bq(u, r) || v;
  };
  function xp(a) {
    return function (b) {
      di && (Qb(b) || aj(a, "input", b));
    };
  }
  function wp() {
    var a = {};
    a.event = De("event", 1);
    a.ecommerce = De("ecommerce", 1);
    a.gtm = De("gtm");
    a.eventModel = De("eventModel");
    return a;
  }
  function aq(a) {
    for (var b = [], c = 0; c < a.length; c++)
      if (a[c]) {
        var d = String(rc[c][Rb.Sa]);
        if (ae[d] || void 0 !== rc[c][Rb.Wi] || se[d]) b[c] = !0;
        S(58) ||
          (0 !== rc[c][Rb.Sa].indexOf("__ccd") &&
            0 !== rc[c][Rb.Sa].indexOf("__ogt") &&
            "__set_product_settings" !== rc[c][Rb.Sa]) ||
          (b[c] = !0);
      }
    return b;
  }
  function bq(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++)
      if (a[c] && rc[c] && !be[String(rc[c][Rb.Sa])]) return !0;
    return !1;
  }
  var eq = function (a, b, c, d) {
      dq.push("event", [b, a], c, d);
    },
    fq = function (a, b, c, d) {
      dq.push("get", [a, b], c, d);
    },
    gq = function () {
      this.status = 1;
      this.D = {};
      this.h = {};
      this.M = {};
      this.R = null;
      this.B = {};
      this.m = !1;
    },
    hq = function (a, b, c, d) {
      var e = z();
      this.type = a;
      this.m = e;
      this.W = b || "";
      this.h = c;
      this.messageContext = d;
    },
    iq = function () {
      this.m = {};
      this.B = {};
      this.h = [];
    },
    jq = function (a, b) {
      var c = jl(b);
      return (a.m[c.U] = a.m[c.U] || new gq());
    },
    kq = function (a, b, c, d) {
      if (d.W) {
        var e = jq(a, d.W),
          f = e.R;
        if (f) {
          var g = I(c),
            l = I(e.D[d.W]),
            m = I(e.B),
            n = I(e.h),
            p = I(a.B),
            q = {};
          if (di)
            try {
              q = I(we);
            } catch (v) {
              O(72);
            }
          var t = jl(d.W).prefix,
            u = function (v) {
              $i(d.messageContext.eventId, t, v);
              var w = g[P.g.Rb];
              w && G(w);
            },
            r = km(
              im(
                hm(
                  gm(
                    em(
                      dm(
                        fm(
                          cm(
                            bm(
                              am(
                                new $l(
                                  d.messageContext.eventId,
                                  d.messageContext.priorityId
                                ),
                                g
                              ),
                              l
                            ),
                            m
                          ),
                          n
                        ),
                        p
                      ),
                      q
                    ),
                    d.messageContext.eventMetadata
                  ),
                  function () {
                    if (u) {
                      var v = u;
                      u = void 0;
                      v("2");
                    }
                  }
                ),
                function () {
                  if (u) {
                    var v = u;
                    u = void 0;
                    v("3");
                  }
                }
              )
            );
          try {
            $i(d.messageContext.eventId, t, "1"),
              ro(d.type, d.W, r),
              f(d.W, b, d.m, r);
          } catch (v) {
            $i(d.messageContext.eventId, t, "4");
          }
        }
      }
    };
  iq.prototype.register = function (a, b, c) {
    var d = jq(this, a);
    3 !== d.status &&
      ((d.R = b), (d.status = 3), c && (I(d.h, c), (d.h = c)), this.flush());
  };
  iq.prototype.push = function (a, b, c, d) {
    if (void 0 !== c) {
      if (!jl(c)) return;
      if (c) {
        var e = jl(c);
        e &&
          1 === jq(this, c).status &&
          ((jq(this, c).status = 2), this.push("require", [{}], e.U, {}));
      }
      jq(this, c).m && (d.deferrable = !1);
    }
    this.h.push(new hq(a, c, b, d));
    d.deferrable || this.flush();
  };
  iq.prototype.flush = function (a) {
    for (var b = this, c = [], d = !1, e = {}; this.h.length; ) {
      var f = this.h[0];
      if (f.messageContext.deferrable)
        !f.W || jq(this, f.W).m
          ? ((f.messageContext.deferrable = !1), this.h.push(f))
          : c.push(f),
          this.h.shift();
      else {
        var g = void 0;
        switch (f.type) {
          case "require":
            g = jq(this, f.W);
            if (3 !== g.status && !a) {
              this.h.push.apply(this.h, c);
              return;
            }
            break;
          case "set":
            k(f.h[0], function (t, u) {
              I(Ka(t, u), b.B);
            });
            break;
          case "config":
            g = jq(this, f.W);
            e.kb = {};
            k(
              f.h[0],
              (function (t) {
                return function (u, r) {
                  I(Ka(u, r), t.kb);
                };
              })(e)
            );
            var l = !!e.kb[P.g.Qc];
            delete e.kb[P.g.Qc];
            var m = jl(f.W),
              n = m.U === m.id;
            l || (n ? (g.B = {}) : (g.D[f.W] = {}));
            (g.m && l) || kq(this, P.g.wa, e.kb, f);
            g.m = !0;
            n ? I(e.kb, g.B) : (I(e.kb, g.D[f.W]), O(70));
            d = !0;
            break;
          case "event":
            g = jq(this, f.W);
            e.sd = {};
            k(
              f.h[0],
              (function (t) {
                return function (u, r) {
                  I(Ka(u, r), t.sd);
                };
              })(e)
            );
            kq(this, f.h[1], e.sd, f);
            break;
          case "get":
            g = jq(this, f.W);
            var p = {},
              q = ((p[P.g.Ra] = f.h[0]), (p[P.g.cb] = f.h[1]), p);
            kq(this, P.g.Da, q, f);
        }
        this.h.shift();
        lq(this, f);
      }
      e = { kb: e.kb, sd: e.sd };
    }
    this.h.push.apply(this.h, c);
    d && this.flush();
  };
  var lq = function (a, b) {
      if ("require" !== b.type)
        if (b.W)
          for (var c = jq(a, b.W).M[b.type] || [], d = 0; d < c.length; d++)
            c[d]();
        else
          for (var e in a.m)
            if (a.m.hasOwnProperty(e)) {
              var f = a.m[e];
              if (f && f.M)
                for (var g = f.M[b.type] || [], l = 0; l < g.length; l++)
                  g[l]();
            }
    },
    mq = function (a, b) {
      var c = dq,
        d = I(b);
      I(jq(c, a).h, d);
      jq(c, a).h = d;
    },
    dq = new iq();
  var nq = {},
    oq = {},
    pq = function (a) {
      for (
        var b = [], c = [], d = {}, e = 0;
        e < a.length;
        d = { yd: d.yd, vd: d.vd }, e++
      ) {
        var f = a[e];
        if (0 <= f.indexOf("-"))
          (d.yd = jl(f)),
            d.yd &&
              (sa(
                $g(),
                (function (p) {
                  return function (q) {
                    return p.yd.U === q;
                  };
                })(d)
              )
                ? b.push(f)
                : c.push(f));
        else {
          var g = nq[f] || [];
          d.vd = {};
          g.forEach(
            (function (p) {
              return function (q) {
                return (p.vd[q] = !0);
              };
            })(d)
          );
          for (var l = Zg(), m = 0; m < l.length; m++)
            if (d.vd[l[m]]) {
              b = b.concat($g());
              break;
            }
          var n = oq[f] || [];
          n.length && (b = b.concat(n));
        }
      }
      return { Zj: b, ck: c };
    },
    qq = function (a) {
      k(nq, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    },
    rq = function (a) {
      k(oq, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    };
  var sq = "HA GF G UA AW DC MC".split(" "),
    tq = !1,
    uq = !1;
  function vq(a, b) {
    a.hasOwnProperty("gtm.uniqueEventId") ||
      Object.defineProperty(a, "gtm.uniqueEventId", { value: te() });
    b.eventId = a["gtm.uniqueEventId"];
    b.priorityId = a["gtm.priorityId"];
    return { eventId: b.eventId, priorityId: b.priorityId };
  }
  var wq = {
      config: function (a, b) {
        var c = vq(a, b);
        if (!(2 > a.length) && h(a[1])) {
          var d = {};
          if (2 < a.length) {
            if ((void 0 != a[2] && !Pb(a[2])) || 3 < a.length) return;
            d = a[2];
          }
          var e = jl(a[1]);
          if (e) {
            Ri(c.eventId, "gtag.config");
            var f = e.U,
              g = e.id !== f;
            if (g ? -1 === $g().indexOf(f) : -1 === Zg().indexOf(f)) {
              if (!S(61) || !d[P.g.Qd]) {
                var l = d[P.g.oa] || dq.B[P.g.oa];
                g
                  ? eo(f, l, {
                      source: 2,
                      fromContainerExecution: b.fromContainerExecution,
                    })
                  : co(f, l, !0, {
                      source: 2,
                      fromContainerExecution: b.fromContainerExecution,
                    });
              }
            } else {
              if (ee && !g && !d[P.g.Qc]) {
                var m = uq;
                uq = !0;
                if (m) return;
              }
              tq || O(43);
              if (!b.noTargetGroup)
                if (g) {
                  rq(e.id);
                  var n = e.id,
                    p = d[P.g.Od] || "default";
                  p = String(p).split(",");
                  for (var q = 0; q < p.length; q++) {
                    var t = oq[p[q]] || [];
                    oq[p[q]] = t;
                    0 > t.indexOf(n) && t.push(n);
                  }
                } else {
                  qq(e.id);
                  var u = e.id,
                    r = d[P.g.Od] || "default";
                  r = r.toString().split(",");
                  for (var v = 0; v < r.length; v++) {
                    var w = nq[r[v]] || [];
                    nq[r[v]] = w;
                    0 > w.indexOf(u) && w.push(u);
                  }
                }
              delete d[P.g.Od];
              var y = b.eventMetadata || {};
              y.hasOwnProperty("is_external_event") ||
                (y.is_external_event = !b.fromContainerExecution);
              b.eventMetadata = y;
              delete d[P.g.Rb];
              for (var x = g ? [e.id] : $g(), A = 0; A < x.length; A++) {
                var B = I(b);
                dq.push("config", [d], x[A], B);
              }
            }
          }
        }
      },
      consent: function (a, b) {
        if (3 === a.length) {
          O(39);
          var c = vq(a, b),
            d = a[1];
          "default" === d ? fg(a[2]) : "update" === d && gg(a[2], c);
        }
      },
      event: function (a, b) {
        var c = a[1];
        if (!(2 > a.length) && h(c)) {
          var d;
          if (2 < a.length) {
            if ((!Pb(a[2]) && void 0 != a[2]) || 3 < a.length) return;
            d = a[2];
          }
          var e = d,
            f = {},
            g = ((f.event = c), f);
          e &&
            ((g.eventModel = I(e)),
            e[P.g.Rb] && (g.eventCallback = e[P.g.Rb]),
            e[P.g.Kd] && (g.eventTimeout = e[P.g.Kd]));
          var l = vq(a, b),
            m = l.eventId,
            n = l.priorityId;
          g["gtm.uniqueEventId"] = m;
          n && (g["gtm.priorityId"] = n);
          if ("optimize.callback" === c)
            return (g.eventModel = g.eventModel || {}), g;
          var p;
          var q = d,
            t = q && q[P.g.Cb];
          void 0 === t &&
            ((t = ze(P.g.Cb, 2)), void 0 === t && (t = "default"));
          if (h(t) || ra(t)) {
            var u = t.toString().replace(/\s+/g, "").split(","),
              r = pq(u),
              v = r.Zj,
              w = r.ck;
            if (w.length)
              for (
                var y = (q && q[P.g.oa]) || dq.B[P.g.oa], x = 0;
                x < w.length;
                x++
              ) {
                var A = jl(w[x]);
                A &&
                  eo(A.U, y, {
                    source: 3,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            p = ll(v);
          } else p = void 0;
          var B = p;
          if (B) {
            Ri(m, c);
            for (var D = [], H = 0; H < B.length; H++) {
              var J = B[H],
                C = I(b);
              if (-1 !== sq.indexOf(J.prefix)) {
                var K = I(d),
                  M = C.eventMetadata || {};
                M.hasOwnProperty("is_external_event") ||
                  (M.is_external_event = !C.fromContainerExecution);
                C.eventMetadata = M;
                delete K[P.g.Rb];
                eq(c, K, J.id, C);
              }
              D.push(J.id);
            }
            g.eventModel = g.eventModel || {};
            0 < B.length
              ? (g.eventModel[P.g.Cb] = D.join())
              : delete g.eventModel[P.g.Cb];
            tq || O(43);
            return b.noGtmEvent ? void 0 : g;
          }
        }
      },
      get: function (a, b) {
        O(53);
        if (4 === a.length && h(a[1]) && h(a[2]) && pa(a[3])) {
          var c = jl(a[1]),
            d = String(a[2]),
            e = a[3];
          if (c) {
            tq || O(43);
            var f = dq.B[P.g.oa];
            if (
              !sa($g(), function (l) {
                return c.U === l;
              })
            )
              eo(c.U, f, {
                source: 4,
                fromContainerExecution: b.fromContainerExecution,
              });
            else if (-1 !== sq.indexOf(c.prefix)) {
              vq(a, b);
              var g = {};
              bg(I(((g[P.g.Ra] = d), (g[P.g.cb] = e), g)));
              fq(
                d,
                function (l) {
                  G(function () {
                    return e(l);
                  });
                },
                c.id,
                b
              );
            }
          }
        }
      },
      js: function (a, b) {
        if (2 == a.length && a[1].getTime) {
          tq = !0;
          var c = vq(a, b),
            d = c.eventId,
            e = c.priorityId,
            f = {};
          return (
            (f.event = "gtm.js"),
            (f["gtm.start"] = a[1].getTime()),
            (f["gtm.uniqueEventId"] = d),
            (f["gtm.priorityId"] = e),
            f
          );
        }
      },
      policy: function () {},
      set: function (a, b) {
        var c;
        2 == a.length && Pb(a[1])
          ? (c = I(a[1]))
          : 3 == a.length &&
            h(a[1]) &&
            ((c = {}),
            Pb(a[2]) || ra(a[2]) ? (c[a[1]] = I(a[2])) : (c[a[1]] = a[2]));
        if (c) {
          var d = vq(a, b),
            e = d.eventId,
            f = d.priorityId;
          I(c);
          var g = I(c);
          dq.push("set", [g], void 0, b);
          c["gtm.uniqueEventId"] = e;
          f && (c["gtm.priorityId"] = f);
          S(30) && delete c.event;
          b.overwriteModelFields = !0;
          return c;
        }
      },
    },
    xq = { policy: !0 };
  var yq = function (a) {
      var b = E[Yd.ja].hide;
      if (b && void 0 !== b[a] && b.end) {
        b[a] = !1;
        var c = !0,
          d;
        for (d in b)
          if (b.hasOwnProperty(d) && !0 === b[d]) {
            c = !1;
            break;
          }
        c && (b.end(), (b.end = null));
      }
    },
    zq = function (a) {
      var b = E[Yd.ja],
        c = b && b.hide;
      c && c.end && (c[a] = !0);
    };
  var Aq = !1,
    Bq = [];
  function Cq() {
    if (!Aq) {
      Aq = !0;
      for (var a = 0; a < Bq.length; a++) G(Bq[a]);
    }
  }
  var Dq = function (a) {
    Aq ? G(a) : Bq.push(a);
  };
  var Uq = function (a) {
    if (Tq(a)) return a;
    this.h = a;
  };
  Uq.prototype.getUntrustedMessageValue = function () {
    return this.h;
  };
  var Tq = function (a) {
    return !a || "object" !== Nb(a) || Pb(a)
      ? !1
      : "getUntrustedMessageValue" in a;
  };
  Uq.prototype.getUntrustedMessageValue = Uq.prototype.getUntrustedMessageValue;
  var Vq = 0,
    Wq = {},
    Xq = [],
    Yq = [],
    Zq = !1,
    $q = !1;
  function ar(a, b) {
    return (
      a.messageContext.eventId - b.messageContext.eventId ||
      a.messageContext.priorityId - b.messageContext.priorityId
    );
  }
  var br = function (a) {
      return E[Yd.ja].push(a);
    },
    cr = function (a, b) {
      var c = Zd[Yd.ja],
        d = c ? c.subscribers : 1,
        e = 0,
        f = !1,
        g = void 0;
      b &&
        (g = E.setTimeout(function () {
          f || ((f = !0), a());
          g = void 0;
        }, b));
      return function () {
        ++e === d &&
          (g && (E.clearTimeout(g), (g = void 0)), f || (a(), (f = !0)));
      };
    };
  function dr(a, b) {
    var c = a._clear || b.overwriteModelFields;
    k(a, function (e, f) {
      "_clear" !== e && (c && Ce(e), Ce(e, f));
    });
    oe || (oe = a["gtm.start"]);
    var d = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    "number" !== typeof d &&
      ((d = te()), (a["gtm.uniqueEventId"] = d), Ce("gtm.uniqueEventId", d));
    return cq(a);
  }
  function er(a) {
    if (null == a || "object" !== typeof a) return !1;
    if (a.event) return !0;
    if (za(a)) {
      var b = a[0];
      if ("config" === b || "event" === b || "js" === b || "get" === b)
        return !0;
    }
    return !1;
  }
  function fr() {
    var a;
    if (Yq.length) a = Yq.shift();
    else if (Xq.length) a = Xq.shift();
    else return;
    var b;
    var c = a;
    if (Zq || !er(c.message)) b = c;
    else {
      Zq = !0;
      var d = c.message["gtm.uniqueEventId"];
      "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = te());
      var e = {},
        f = {
          message:
            ((e.event = "gtm.init_consent"),
            (e["gtm.uniqueEventId"] = d - 2),
            e),
          messageContext: { eventId: d - 2 },
        },
        g = {},
        l = {
          message:
            ((g.event = "gtm.init"), (g["gtm.uniqueEventId"] = d - 1), g),
          messageContext: { eventId: d - 1 },
        };
      Xq.unshift(l, c);
      if (di && Xg.H) {
        var m;
        if (Xg.df) {
          var n = Xg.H,
            p = bh().destination[n];
          m = p && p.context;
        } else {
          var q = Xg.H,
            t = bh().container[q];
          m = t && t.context;
        }
        var u = m,
          r,
          v = Ze(E.location.href);
        r = v.hostname + v.pathname;
        var w = u && u.fromContainerExecution,
          y = u && u.source,
          x = Xg.H,
          A = Xg.ob,
          B = Xg.df;
        pi || (pi = r);
        oi.push(
          x + ";" + A + ";" + (w ? 1 : 0) + ";" + (y || 0) + ";" + (B ? 1 : 0)
        );
      }
      b = f;
    }
    return b;
  }
  function gr() {
    for (var a = !1, b; !$q && (b = fr()); ) {
      $q = !0;
      delete we.eventModel;
      ye();
      var c = b,
        d = c.message,
        e = c.messageContext;
      if (null == d) $q = !1;
      else {
        if (e.fromContainerExecution)
          for (
            var f = [
                "gtm.allowlist",
                "gtm.blocklist",
                "gtm.whitelist",
                "gtm.blacklist",
                "tagTypeBlacklist",
              ],
              g = 0;
            g < f.length;
            g++
          ) {
            var l = f[g],
              m = ze(l, 1);
            if (ra(m) || Pb(m)) m = I(m);
            xe[l] = m;
          }
        try {
          if (pa(d))
            try {
              d.call(Ae);
            } catch (D) {}
          else if (ra(d)) {
            var n = d;
            if (h(n[0])) {
              var p = n[0].split("."),
                q = p.pop(),
                t = n.slice(1),
                u = ze(p.join("."), 2);
              if (null != u)
                try {
                  u[q].apply(u, t);
                } catch (D) {}
            }
          } else {
            var r = void 0,
              v = !1;
            if (za(d)) {
              a: {
                if (d.length && h(d[0])) {
                  var w = wq[d[0]];
                  if (w && (!e.fromContainerExecution || !xq[d[0]])) {
                    r = w(d, e);
                    break a;
                  }
                }
                r = void 0;
              }
              (v = r && "set" === d[0] && !!r.event) && O(101);
            } else r = d;
            if (r) {
              var y = dr(r, e);
              a = y || a;
              v && y && O(113);
            }
          }
        } finally {
          e.fromContainerExecution && ye(!0);
          var x = d["gtm.uniqueEventId"];
          if ("number" === typeof x) {
            for (var A = Wq[String(x)] || [], B = 0; B < A.length; B++)
              Yq.push(hr(A[B]));
            A.length && Yq.sort(ar);
            delete Wq[String(x)];
            x > Vq && (Vq = x);
          }
          $q = !1;
        }
      }
    }
    return !a;
  }
  function ir() {
    var b = gr();
    try {
      yq(Xg.H);
    } catch (c) {}
    return b;
  }
  function fp(a) {
    if (Vq < a.notBeforeEventId) {
      var b = String(a.notBeforeEventId);
      Wq[b] = Wq[b] || [];
      Wq[b].push(a);
    } else
      Yq.push(hr(a)),
        Yq.sort(ar),
        G(function () {
          $q || gr();
        });
  }
  function hr(a) {
    return { message: a.message, messageContext: a.messageContext };
  }
  var kr = function () {
      function a(f) {
        var g = {};
        if (Tq(f)) {
          var l = f;
          f = Tq(l) ? l.getUntrustedMessageValue() : void 0;
          g.fromContainerExecution = !0;
        }
        return { message: f, messageContext: g };
      }
      var b = tb(Yd.ja, []),
        c = (Zd[Yd.ja] = Zd[Yd.ja] || {});
      !0 === c.pruned && O(83);
      Wq = dp().get();
      gp();
      yo(function () {
        if (!c.gtmDom) {
          c.gtmDom = !0;
          var f = {};
          b.push(((f.event = "gtm.dom"), f));
        }
      });
      Dq(function () {
        if (!c.gtmLoad) {
          c.gtmLoad = !0;
          var f = {};
          b.push(((f.event = "gtm.load"), f));
        }
      });
      c.subscribers = (c.subscribers || 0) + 1;
      var d = b.push;
      b.push = function () {
        var f;
        if (0 < Zd.SANDBOXED_JS_SEMAPHORE) {
          f = [];
          for (var g = 0; g < arguments.length; g++)
            f[g] = new Uq(arguments[g]);
        } else f = [].slice.call(arguments, 0);
        var l = f.map(function (q) {
          return a(q);
        });
        Xq.push.apply(Xq, l);
        var m = d.apply(b, f),
          n = Math.max(100, Number("1000") || 300);
        if (this.length > n)
          for (O(4), c.pruned = !0; this.length > n; ) this.shift();
        var p = "boolean" !== typeof m || m;
        return gr() && p;
      };
      var e = b.slice(0).map(function (f) {
        return a(f);
      });
      Xq.push.apply(Xq, e);
      if (jr()) {
        G(ir);
      }
    },
    jr = function () {
      var a = !0;
      return a;
    };
  function lr(a) {
    if (null == a || 0 === a.length) return !1;
    var b = Number(a),
      c = z();
    return b < c + 3e5 && b > c - 9e5;
  }
  function mr(a) {
    return a && 0 === a.indexOf("pending:") ? lr(a.substr(8)) : !1;
  }
  var wc = {};
  wc.Vd = new String("undefined");
  var Nr = E.clearTimeout,
    Or = E.setTimeout,
    W = function (a, b, c, d) {
      if (Wg()) {
        b && G(b);
      } else return yb(a, b, c, d);
    },
    Pr = function () {
      return new Date();
    },
    Qr = function () {
      return E.location.href;
    },
    Rr = function (a) {
      return Xe(Ze(a), "fragment");
    },
    Sr = function (a) {
      return Ye(Ze(a));
    },
    Tr = function (a, b) {
      return ze(a, b || 2);
    },
    Ur = function (a, b, c) {
      var d;
      b
        ? ((a.eventCallback = b), c && (a.eventTimeout = c), (d = br(a)))
        : (d = br(a));
      return d;
    },
    Vr = function (a, b) {
      E[a] = b;
    },
    X = function (a, b, c) {
      b && (void 0 === E[a] || (c && !E[a])) && (E[a] = b);
      return E[a];
    },
    Wr = function (a, b, c) {
      return wg(a, b, void 0 === c ? !0 : !!c);
    },
    Xr = function (a, b, c) {
      return 0 === Fg(a, b, c);
    },
    Yr = function (a, b) {
      if (Wg()) {
        b && G(b);
      } else Ab(a, b);
    },
    Zr = function (a) {
      return !!tr(a, "init", !1);
    },
    $r = function (a) {
      rr(a, "init", !0);
    },
    as = function (a, b, c) {
      di && (Qb(a) || aj(c, b, a));
    };
  var ys = [
    "matches",
    "webkitMatchesSelector",
    "mozMatchesSelector",
    "msMatchesSelector",
    "oMatchesSelector",
  ];
  function zs(a, b) {
    a = String(a);
    b = String(b);
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) === c;
  }
  var As = new ua();
  function Bs(a, b, c) {
    var d = c ? "i" : void 0;
    try {
      var e = String(b) + d,
        f = As.get(e);
      f || ((f = new RegExp(b, d)), As.set(e, f));
      return f.test(a);
    } catch (g) {
      return !1;
    }
  }
  function Cs(a, b) {
    function c(g) {
      var l = Ze(g),
        m = Xe(l, "protocol"),
        n = Xe(l, "host", !0),
        p = Xe(l, "port"),
        q = Xe(l, "path").toLowerCase().replace(/\/$/, "");
      if (
        void 0 === m ||
        ("http" === m && "80" === p) ||
        ("https" === m && "443" === p)
      )
        (m = "web"), (p = "default");
      return [m, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0;
  }
  function Ds(a) {
    return Es(a) ? 1 : 0;
  }
  function Es(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = I(a, {});
        I({ arg1: c[d], any_of: void 0 }, e);
        if (Ds(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return 0 <= String(b).indexOf(String(c));
      case "_css":
        var f;
        a: {
          if (b)
            try {
              for (var g = 0; g < ys.length; g++) {
                var l = ys[g];
                if (b[l]) {
                  f = b[l](c);
                  break a;
                }
              }
            } catch (m) {}
          f = !1;
        }
        return f;
      case "_ew":
        return zs(b, c);
      case "_eq":
        return String(b) === String(c);
      case "_ge":
        return Number(b) >= Number(c);
      case "_gt":
        return Number(b) > Number(c);
      case "_lc":
        return 0 <= String(b).split(",").indexOf(String(c));
      case "_le":
        return Number(b) <= Number(c);
      case "_lt":
        return Number(b) < Number(c);
      case "_re":
        return Bs(b, c, a.ignore_case);
      case "_sw":
        return 0 === String(b).indexOf(String(c));
      case "_um":
        return Cs(b, c);
    }
    return !1;
  }
  Object.freeze({ dl: 1, id: 1 });
  Object.freeze(["config", "event", "get", "set"]);
  function $s() {
    return (E.gaGlobal = E.gaGlobal || {});
  }
  var at = function () {
      var a = $s();
      a.hid = a.hid || ta();
      return a.hid;
    },
    bt = function (a, b) {
      var c = $s();
      if (void 0 == c.vid || (b && !c.from_cookie))
        (c.vid = a), (c.from_cookie = b);
    };
  var xt = function () {
      var a = !0;
      (Vh(7) && Vh(9) && Vh(10)) || (a = !1);
      return a;
    },
    yt = function () {
      var a = !0;
      (Vh(3) && Vh(4)) || (a = !1);
      return a;
    };
  var bu = window,
    cu = document,
    du = function (a) {
      var b = bu._gaUserPrefs;
      if ((b && b.ioo && b.ioo()) || (a && !0 === bu["ga-disable-" + a]))
        return !0;
      try {
        var c = bu.external;
        if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
      } catch (f) {}
      for (
        var d = qg("AMP_TOKEN", String(cu.cookie), !0), e = 0;
        e < d.length;
        e++
      )
        if ("$OPT_OUT" == d[e]) return !0;
      return cu.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  function lu(a) {
    k(a, function (c) {
      "_" === c.charAt(0) && delete a[c];
    });
    var b = a[P.g.Na] || {};
    k(b, function (c) {
      "_" === c.charAt(0) && delete b[c];
    });
  }
  var uu = function (a, b) {};
  function tu(a, b) {
    var c = function () {};
    return c;
  }
  function vu(a, b, c) {}
  var pw = tu;
  var rw = encodeURI,
    Y = encodeURIComponent,
    sw = function (a, b, c) {
      Bb(a, b, c);
    },
    tw = function (a, b) {
      if (!a) return !1;
      var c = Xe(Ze(a), "host");
      if (!c) return !1;
      for (var d = 0; b && d < b.length; d++) {
        var e = b[d] && b[d].toLowerCase();
        if (e) {
          var f = c.length - e.length;
          0 < f && "." != e.charAt(0) && (f--, (e = "." + e));
          if (0 <= f && c.indexOf(e, f) == f) return !0;
        }
      }
      return !1;
    },
    uw = function (a, b, c) {
      for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
        a[f] &&
          a[f].hasOwnProperty(b) &&
          a[f].hasOwnProperty(c) &&
          ((d[a[f][b]] = a[f][c]), (e = !0));
      return e ? d : null;
    };
  var Z = { o: {} };
  (Z.o.e = ["google"]),
    (function () {
      (function (a) {
        Z.__e = a;
        Z.__e.s = "e";
        Z.__e.isVendorTemplate = !0;
        Z.__e.priorityOverride = 0;
        Z.__e.isInfrastructure = !1;
      })(function (a) {
        return String(a.vtp_gtmCachedValues.event);
      });
    })();
  (Z.o.f = ["google"]),
    (function () {
      (function (a) {
        Z.__f = a;
        Z.__f.s = "f";
        Z.__f.isVendorTemplate = !0;
        Z.__f.priorityOverride = 0;
        Z.__f.isInfrastructure = !1;
      })(function (a) {
        var b = Tr("gtm.referrer", 1) || F.referrer;
        return b
          ? a.vtp_component && "URL" != a.vtp_component
            ? Xe(
                Ze(String(b)),
                a.vtp_component,
                a.vtp_stripWww,
                a.vtp_defaultPages,
                a.vtp_queryKey
              )
            : Sr(String(b))
          : String(b);
      });
    })();
  (Z.o.u = ["google"]),
    (function () {
      var a = function (b) {
        return {
          toString: function () {
            return b;
          },
        };
      };
      (function (b) {
        Z.__u = b;
        Z.__u.s = "u";
        Z.__u.isVendorTemplate = !0;
        Z.__u.priorityOverride = 0;
        Z.__u.isInfrastructure = !1;
      })(function (b) {
        var c;
        c =
          (c = b.vtp_customUrlSource
            ? b.vtp_customUrlSource
            : Tr("gtm.url", 1)) || Qr();
        var d = b[a("vtp_component")];
        if (!d || "URL" == d) return Sr(String(c));
        var e = Ze(String(c)),
          f;
        if ("QUERY" === d)
          a: {
            var g = b[a("vtp_multiQueryKeys").toString()],
              l = b[a("vtp_queryKey").toString()] || "",
              m = b[a("vtp_ignoreEmptyQueryParam").toString()],
              n;
            g
              ? ra(l)
                ? (n = l)
                : (n = String(l).replace(/\s+/g, "").split(","))
              : (n = [String(l)]);
            for (var p = 0; p < n.length; p++) {
              var q = Xe(e, "QUERY", void 0, void 0, n[p]);
              if (void 0 != q && (!m || "" !== q)) {
                f = q;
                break a;
              }
            }
            f = void 0;
          }
        else
          f = Xe(
            e,
            d,
            "HOST" == d ? b[a("vtp_stripWww")] : void 0,
            "PATH" == d ? b[a("vtp_defaultPages")] : void 0
          );
        return f;
      });
    })();

  var Mx = {};
  Mx.dataLayer = Ae;
  Mx.callback = function (a) {
    qe.hasOwnProperty(a) && pa(qe[a]) && qe[a]();
    delete qe[a];
  };
  Mx.bootstrap = 0;
  Mx._spx = !1;
  function Nx() {
    Zd[Xg.H] = Zd[Xg.H] || Mx;
    Xg.ob && (Zd["ctid_" + Xg.ob] = Mx);
    ch();
    eh() ||
      k(fh(), function (a, b) {
        eo(a, b.transportUrl, b.context);
        O(92);
      });
    Ha(re, Z.o);
    yc = Gc;
  }
  (function (a) {
    function b() {
      m = F.documentElement.getAttribute("data-tag-assistant-present");
      lr(m) && (l = g.Ji);
    }
    if (!E["__TAGGY_INSTALLED"]) {
      var c = !1;
      if (F.referrer) {
        var d = Ze(F.referrer);
        c = "cct.google" === We(d, "host");
      }
      if (!c) {
        var e = wg("googTaggyReferrer");
        c = e.length && e[0].length;
      }
      c &&
        ((E["__TAGGY_INSTALLED"] = !0),
        yb("https://cct.google/taggy/agent.js"));
    }
    if (le) a();
    else {
      var f = function (r) {
          var v = "GTM",
            w = "GTM";
          fe ? ((v = "OGT"), (w = "GTAG")) : le && (w = v = "OPT");
          var y = E["google.tagmanager.debugui2.queue"];
          y ||
            ((y = []),
            (E["google.tagmanager.debugui2.queue"] = y),
            yb(
              "https://" +
                Yd.zd +
                "/debug/bootstrap?id=" +
                Xg.H +
                "&src=" +
                w +
                "&cond=" +
                r +
                "&gtm=" +
                ih()
            ));
          var x = {
            messageType: "CONTAINER_STARTING",
            data: {
              scriptSource: sb,
              containerProduct: v,
              debug: !1,
              id: Xg.H,
              isGte: ee,
            },
          };
          x.data.resume = function () {
            a();
          };
          Yd.ai && (x.data.initialPublish = !0);
          y.push(x);
        },
        g = { Rk: 1, Li: 2, Xi: 3, di: 4, Ji: 5 },
        l = void 0,
        m = void 0,
        n = Xe(E.location, "query", !1, void 0, "gtm_debug");
      lr(n) && (l = g.Li);
      if (!l && F.referrer) {
        var p = Ze(F.referrer);
        "tagassistant.google.com" === We(p, "host") && (l = g.Xi);
      }
      if (!l) {
        var q = wg("__TAG_ASSISTANT");
        q.length && q[0].length && (l = g.di);
      }
      l || b();
      if (!l && S(54) && mr(m)) {
        var t = function () {
            if (u) return !0;
            u = !0;
            b();
            l && sb ? f(l) : a();
          },
          u = !1;
        Cb(
          F,
          "TADebugSignal",
          function () {
            t();
          },
          !1
        );
        E.setTimeout(function () {
          t();
        }, 200);
      } else l && sb ? f(l) : a();
    }
  })(function () {
    var a = !1;
    a && zn("INIT");
    if (S(70)) {
      var b = un(rn.ca.Wf, Xg.H);
      vn(b);
    }
    Kf().m();
    Sh();
    if (Xg.ob ? Zd["ctid_" + Xg.ob] : Zd[Xg.H]) {
      var c = Zd.zones;
      c && c.unregisterChild(Zg());
    } else {
      for (
        var d = data.resource || {}, e = d.macros || [], f = 0;
        f < e.length;
        f++
      )
        oc.push(e[f]);
      for (var g = d.tags || [], l = 0; l < g.length; l++) rc.push(g[l]);
      for (var m = d.predicates || [], n = 0; n < m.length; n++) qc.push(m[n]);
      for (var p = d.rules || [], q = 0; q < p.length; q++) {
        for (var t = p[q], u = {}, r = 0; r < t.length; r++)
          u[t[r][0]] = Array.prototype.slice.call(t[r], 1);
        pc.push(u);
      }
      tc = Z;
      uc = Ds;
      Nx();
      kr();
      to = !1;
      uo = 0;
      if (
        ("interactive" == F.readyState && !F.createEventObject) ||
        "complete" == F.readyState
      )
        wo();
      else {
        Cb(F, "DOMContentLoaded", wo);
        Cb(F, "readystatechange", wo);
        if (F.createEventObject && F.documentElement.doScroll) {
          var v = !0;
          try {
            v = !E.frameElement;
          } catch (H) {}
          v && xo();
        }
        Cb(E, "load", wo);
      }
      Aq = !1;
      "complete" === F.readyState ? Cq() : Cb(E, "load", Cq);
      hj();
      S(46) && (O(111), Xa("HEALTH", 1));
      S(47) && (O(112), Xa("HEALTH", 2));
      pe = z();
      Mx.bootstrap = pe;
      if (a) {
        var A = An("INIT");
      }
      if (S(70)) {
        var B = un(rn.ca.ci, Xg.H);
        if (vn(B)) {
          var D = un(rn.ca.Wf, Xg.H);
          wn(B, D);
        }
      }
    }
  });
})();
