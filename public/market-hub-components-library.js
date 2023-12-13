import * as C from "react";
import J, { useId as oe, forwardRef as de, Fragment as $e, useSyncExternalStore as qr, useState as I, useEffect as ce, useCallback as Yr, useImperativeHandle as Hr, useMemo as cr, createContext as dr, useContext as X } from "react";
import * as zr from "@heroicons/react/24/outline";
import { XMarkIcon as Gr, ExclamationTriangleIcon as ur, ExclamationCircleIcon as Jr, InformationCircleIcon as Xr, CheckCircleIcon as mr, BellAlertIcon as Kr } from "@heroicons/react/24/outline";
import v from "classnames";
import { useTranslation as K } from "react-i18next";
import * as Zr from "@heroicons/react/24/solid";
import { ExclamationTriangleIcon as Qr, ChevronRightIcon as nr } from "@heroicons/react/24/solid";
import { Link as Te, NavLink as fr, Outlet as Z, useRouteError as et, isRouteErrorResponse as rt } from "react-router-dom";
import { Listbox as Y, Transition as xr, Switch as tt, Dialog as Se } from "@headlessui/react";
import { useFormContext as ue, useController as me } from "react-hook-form";
import { rankItem as at } from "@tanstack/match-sorter-utils";
import { flexRender as ir, useReactTable as st, getCoreRowModel as nt, getFilteredRowModel as it, getPaginationRowModel as lt, getSortedRowModel as ot, getExpandedRowModel as ct, getFacetedUniqueValues as dt } from "@tanstack/react-table";
import { Helmet as ut } from "react-helmet";
var Oe = { exports: {} }, H = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lr;
function mt() {
  if (lr)
    return H;
  lr = 1;
  var t = J, a = Symbol.for("react.element"), s = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function m(p, f, k) {
    var b, h = {}, E = null, $ = null;
    k !== void 0 && (E = "" + k), f.key !== void 0 && (E = "" + f.key), f.ref !== void 0 && ($ = f.ref);
    for (b in f)
      i.call(f, b) && !c.hasOwnProperty(b) && (h[b] = f[b]);
    if (p && p.defaultProps)
      for (b in f = p.defaultProps, f)
        h[b] === void 0 && (h[b] = f[b]);
    return { $$typeof: a, type: p, key: E, ref: $, props: h, _owner: o.current };
  }
  return H.Fragment = s, H.jsx = m, H.jsxs = m, H;
}
var z = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var or;
function ft() {
  return or || (or = 1, process.env.NODE_ENV !== "production" && function() {
    var t = J, a = Symbol.for("react.element"), s = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), p = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), A = Symbol.iterator, L = "@@iterator";
    function _(r) {
      if (r === null || typeof r != "object")
        return null;
      var n = A && r[A] || r[L];
      return typeof n == "function" ? n : null;
    }
    var S = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function j(r) {
      {
        for (var n = arguments.length, l = new Array(n > 1 ? n - 1 : 0), d = 1; d < n; d++)
          l[d - 1] = arguments[d];
        xe("error", r, l);
      }
    }
    function xe(r, n, l) {
      {
        var d = S.ReactDebugCurrentFrame, g = d.getStackAddendum();
        g !== "" && (n += "%s", l = l.concat([g]));
        var y = l.map(function(x) {
          return String(x);
        });
        y.unshift("Warning: " + n), Function.prototype.apply.call(console[r], console, y);
      }
    }
    var he = !1, ge = !1, F = !1, pe = !1, D = !1, ee;
    ee = Symbol.for("react.module.reference");
    function be(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === i || r === c || D || r === o || r === k || r === b || pe || r === $ || he || ge || F || typeof r == "object" && r !== null && (r.$$typeof === E || r.$$typeof === h || r.$$typeof === m || r.$$typeof === p || r.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === ee || r.getModuleId !== void 0));
    }
    function ye(r, n, l) {
      var d = r.displayName;
      if (d)
        return d;
      var g = n.displayName || n.name || "";
      return g !== "" ? l + "(" + g + ")" : l;
    }
    function W(r) {
      return r.displayName || "Context";
    }
    function O(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && j("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case i:
          return "Fragment";
        case s:
          return "Portal";
        case c:
          return "Profiler";
        case o:
          return "StrictMode";
        case k:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case p:
            var n = r;
            return W(n) + ".Consumer";
          case m:
            var l = r;
            return W(l._context) + ".Provider";
          case f:
            return ye(r, r.render, "ForwardRef");
          case h:
            var d = r.displayName || null;
            return d !== null ? d : O(r.type) || "Memo";
          case E: {
            var g = r, y = g._payload, x = g._init;
            try {
              return O(x(y));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var M = Object.assign, U = 0, Me, Ae, Le, Be, Ve, We, Ue;
    function qe() {
    }
    qe.__reactDisabledLog = !0;
    function yr() {
      {
        if (U === 0) {
          Me = console.log, Ae = console.info, Le = console.warn, Be = console.error, Ve = console.group, We = console.groupCollapsed, Ue = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: qe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: r,
            log: r,
            warn: r,
            error: r,
            group: r,
            groupCollapsed: r,
            groupEnd: r
          });
        }
        U++;
      }
    }
    function vr() {
      {
        if (U--, U === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: M({}, r, {
              value: Me
            }),
            info: M({}, r, {
              value: Ae
            }),
            warn: M({}, r, {
              value: Le
            }),
            error: M({}, r, {
              value: Be
            }),
            group: M({}, r, {
              value: Ve
            }),
            groupCollapsed: M({}, r, {
              value: We
            }),
            groupEnd: M({}, r, {
              value: Ue
            })
          });
        }
        U < 0 && j("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ve = S.ReactCurrentDispatcher, je;
    function re(r, n, l) {
      {
        if (je === void 0)
          try {
            throw Error();
          } catch (g) {
            var d = g.stack.trim().match(/\n( *(at )?)/);
            je = d && d[1] || "";
          }
        return `
` + je + r;
      }
    }
    var we = !1, te;
    {
      var jr = typeof WeakMap == "function" ? WeakMap : Map;
      te = new jr();
    }
    function Ye(r, n) {
      if (!r || we)
        return "";
      {
        var l = te.get(r);
        if (l !== void 0)
          return l;
      }
      var d;
      we = !0;
      var g = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var y;
      y = ve.current, ve.current = null, yr();
      try {
        if (n) {
          var x = function() {
            throw Error();
          };
          if (Object.defineProperty(x.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(x, []);
            } catch (P) {
              d = P;
            }
            Reflect.construct(r, [], x);
          } else {
            try {
              x.call();
            } catch (P) {
              d = P;
            }
            r.call(x.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (P) {
            d = P;
          }
          r();
        }
      } catch (P) {
        if (P && d && typeof P.stack == "string") {
          for (var u = P.stack.split(`
`), R = d.stack.split(`
`), w = u.length - 1, N = R.length - 1; w >= 1 && N >= 0 && u[w] !== R[N]; )
            N--;
          for (; w >= 1 && N >= 0; w--, N--)
            if (u[w] !== R[N]) {
              if (w !== 1 || N !== 1)
                do
                  if (w--, N--, N < 0 || u[w] !== R[N]) {
                    var T = `
` + u[w].replace(" at new ", " at ");
                    return r.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", r.displayName)), typeof r == "function" && te.set(r, T), T;
                  }
                while (w >= 1 && N >= 0);
              break;
            }
        }
      } finally {
        we = !1, ve.current = y, vr(), Error.prepareStackTrace = g;
      }
      var V = r ? r.displayName || r.name : "", sr = V ? re(V) : "";
      return typeof r == "function" && te.set(r, sr), sr;
    }
    function wr(r, n, l) {
      return Ye(r, !1);
    }
    function Nr(r) {
      var n = r.prototype;
      return !!(n && n.isReactComponent);
    }
    function ae(r, n, l) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return Ye(r, Nr(r));
      if (typeof r == "string")
        return re(r);
      switch (r) {
        case k:
          return re("Suspense");
        case b:
          return re("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case f:
            return wr(r.render);
          case h:
            return ae(r.type, n, l);
          case E: {
            var d = r, g = d._payload, y = d._init;
            try {
              return ae(y(g), n, l);
            } catch {
            }
          }
        }
      return "";
    }
    var se = Object.prototype.hasOwnProperty, He = {}, ze = S.ReactDebugCurrentFrame;
    function ne(r) {
      if (r) {
        var n = r._owner, l = ae(r.type, r._source, n ? n.type : null);
        ze.setExtraStackFrame(l);
      } else
        ze.setExtraStackFrame(null);
    }
    function kr(r, n, l, d, g) {
      {
        var y = Function.call.bind(se);
        for (var x in r)
          if (y(r, x)) {
            var u = void 0;
            try {
              if (typeof r[x] != "function") {
                var R = Error((d || "React class") + ": " + l + " type `" + x + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[x] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw R.name = "Invariant Violation", R;
              }
              u = r[x](n, x, d, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (w) {
              u = w;
            }
            u && !(u instanceof Error) && (ne(g), j("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", d || "React class", l, x, typeof u), ne(null)), u instanceof Error && !(u.message in He) && (He[u.message] = !0, ne(g), j("Failed %s type: %s", l, u.message), ne(null));
          }
      }
    }
    var Er = Array.isArray;
    function Ne(r) {
      return Er(r);
    }
    function Rr(r) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, l = n && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return l;
      }
    }
    function Cr(r) {
      try {
        return Ge(r), !1;
      } catch {
        return !0;
      }
    }
    function Ge(r) {
      return "" + r;
    }
    function Je(r) {
      if (Cr(r))
        return j("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Rr(r)), Ge(r);
    }
    var q = S.ReactCurrentOwner, Sr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Xe, Ke, ke;
    ke = {};
    function _r(r) {
      if (se.call(r, "ref")) {
        var n = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function Tr(r) {
      if (se.call(r, "key")) {
        var n = Object.getOwnPropertyDescriptor(r, "key").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function Or(r, n) {
      if (typeof r.ref == "string" && q.current && n && q.current.stateNode !== n) {
        var l = O(q.current.type);
        ke[l] || (j('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', O(q.current.type), r.ref), ke[l] = !0);
      }
    }
    function Pr(r, n) {
      {
        var l = function() {
          Xe || (Xe = !0, j("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        l.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: l,
          configurable: !0
        });
      }
    }
    function Fr(r, n) {
      {
        var l = function() {
          Ke || (Ke = !0, j("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        l.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: l,
          configurable: !0
        });
      }
    }
    var Ir = function(r, n, l, d, g, y, x) {
      var u = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: r,
        key: n,
        ref: l,
        props: x,
        // Record the component responsible for creating this element.
        _owner: y
      };
      return u._store = {}, Object.defineProperty(u._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(u, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.defineProperty(u, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: g
      }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
    };
    function $r(r, n, l, d, g) {
      {
        var y, x = {}, u = null, R = null;
        l !== void 0 && (Je(l), u = "" + l), Tr(n) && (Je(n.key), u = "" + n.key), _r(n) && (R = n.ref, Or(n, g));
        for (y in n)
          se.call(n, y) && !Sr.hasOwnProperty(y) && (x[y] = n[y]);
        if (r && r.defaultProps) {
          var w = r.defaultProps;
          for (y in w)
            x[y] === void 0 && (x[y] = w[y]);
        }
        if (u || R) {
          var N = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          u && Pr(x, N), R && Fr(x, N);
        }
        return Ir(r, u, R, g, d, q.current, x);
      }
    }
    var Ee = S.ReactCurrentOwner, Ze = S.ReactDebugCurrentFrame;
    function B(r) {
      if (r) {
        var n = r._owner, l = ae(r.type, r._source, n ? n.type : null);
        Ze.setExtraStackFrame(l);
      } else
        Ze.setExtraStackFrame(null);
    }
    var Re;
    Re = !1;
    function Ce(r) {
      return typeof r == "object" && r !== null && r.$$typeof === a;
    }
    function Qe() {
      {
        if (Ee.current) {
          var r = O(Ee.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
    }
    function Dr(r) {
      {
        if (r !== void 0) {
          var n = r.fileName.replace(/^.*[\\\/]/, ""), l = r.lineNumber;
          return `

Check your code at ` + n + ":" + l + ".";
        }
        return "";
      }
    }
    var er = {};
    function Mr(r) {
      {
        var n = Qe();
        if (!n) {
          var l = typeof r == "string" ? r : r.displayName || r.name;
          l && (n = `

Check the top-level render call using <` + l + ">.");
        }
        return n;
      }
    }
    function rr(r, n) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var l = Mr(n);
        if (er[l])
          return;
        er[l] = !0;
        var d = "";
        r && r._owner && r._owner !== Ee.current && (d = " It was passed a child from " + O(r._owner.type) + "."), B(r), j('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', l, d), B(null);
      }
    }
    function tr(r, n) {
      {
        if (typeof r != "object")
          return;
        if (Ne(r))
          for (var l = 0; l < r.length; l++) {
            var d = r[l];
            Ce(d) && rr(d, n);
          }
        else if (Ce(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var g = _(r);
          if (typeof g == "function" && g !== r.entries)
            for (var y = g.call(r), x; !(x = y.next()).done; )
              Ce(x.value) && rr(x.value, n);
        }
      }
    }
    function Ar(r) {
      {
        var n = r.type;
        if (n == null || typeof n == "string")
          return;
        var l;
        if (typeof n == "function")
          l = n.propTypes;
        else if (typeof n == "object" && (n.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        n.$$typeof === h))
          l = n.propTypes;
        else
          return;
        if (l) {
          var d = O(n);
          kr(l, r.props, "prop", d, r);
        } else if (n.PropTypes !== void 0 && !Re) {
          Re = !0;
          var g = O(n);
          j("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", g || "Unknown");
        }
        typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && j("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Lr(r) {
      {
        for (var n = Object.keys(r.props), l = 0; l < n.length; l++) {
          var d = n[l];
          if (d !== "children" && d !== "key") {
            B(r), j("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", d), B(null);
            break;
          }
        }
        r.ref !== null && (B(r), j("Invalid attribute `ref` supplied to `React.Fragment`."), B(null));
      }
    }
    function ar(r, n, l, d, g, y) {
      {
        var x = be(r);
        if (!x) {
          var u = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (u += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var R = Dr(g);
          R ? u += R : u += Qe();
          var w;
          r === null ? w = "null" : Ne(r) ? w = "array" : r !== void 0 && r.$$typeof === a ? (w = "<" + (O(r.type) || "Unknown") + " />", u = " Did you accidentally export a JSX literal instead of a component?") : w = typeof r, j("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", w, u);
        }
        var N = $r(r, n, l, g, y);
        if (N == null)
          return N;
        if (x) {
          var T = n.children;
          if (T !== void 0)
            if (d)
              if (Ne(T)) {
                for (var V = 0; V < T.length; V++)
                  tr(T[V], r);
                Object.freeze && Object.freeze(T);
              } else
                j("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              tr(T, r);
        }
        return r === i ? Lr(N) : Ar(N), N;
      }
    }
    function Br(r, n, l) {
      return ar(r, n, l, !0);
    }
    function Vr(r, n, l) {
      return ar(r, n, l, !1);
    }
    var Wr = Vr, Ur = Br;
    z.Fragment = i, z.jsx = Wr, z.jsxs = Ur;
  }()), z;
}
process.env.NODE_ENV === "production" ? Oe.exports = mt() : Oe.exports = ft();
var e = Oe.exports;
const ie = ({
  children: t,
  icon: a,
  className: s,
  heading: i,
  onClose: o,
  ...c
}) => {
  const m = oe(), p = oe(), f = oe(), { t: k } = K();
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      role: "region",
      className: v(
        "flex items-start gap-4 rounded-[6px] p-4 text-primary-dark-grey",
        s
      ),
      "aria-labelledby": i ? m : void 0,
      "aria-describedby": p,
      ...c,
      children: [
        /* @__PURE__ */ e.jsx("div", { className: "flex gap-2", children: /* @__PURE__ */ e.jsx("div", { className: "flex-shrink-0", role: "presentation", children: a }) }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex grow flex-col gap-2", children: [
          i && /* @__PURE__ */ e.jsx("h3", { className: "text-18 leading-2 font-bold", id: m, children: i }),
          /* @__PURE__ */ e.jsx("div", { className: "text-14", id: p, children: t })
        ] }),
        o && /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: o,
            className: "justify-self-end",
            "aria-label": k("alert.close", "Close"),
            id: f,
            "aria-labelledby": `${f} ${m}`,
            children: /* @__PURE__ */ e.jsx(Gr, { className: "h-6" })
          }
        )
      ]
    }
  );
}, Zt = ({
  type: t,
  className: a,
  ...s
}) => {
  switch (t) {
    case "success":
      return /* @__PURE__ */ e.jsx(
        ie,
        {
          className: v("bg-success-light", a),
          role: "alert",
          icon: /* @__PURE__ */ e.jsx(
            mr,
            {
              className: "h-6 text-success-dark",
              "aria-hidden": "true"
            }
          ),
          ...s
        }
      );
    case "info":
      return /* @__PURE__ */ e.jsx(
        ie,
        {
          className: v("bg-info-light", a),
          icon: /* @__PURE__ */ e.jsx(
            Xr,
            {
              className: "h-6 text-info-dark",
              "aria-hidden": "true"
            }
          ),
          ...s
        }
      );
    case "warning":
      return /* @__PURE__ */ e.jsx(
        ie,
        {
          className: v("bg-[#fefce8]", a),
          role: "alert",
          icon: /* @__PURE__ */ e.jsx(
            Jr,
            {
              className: "h-6 text-[#facc15]",
              "aria-hidden": "true"
            }
          ),
          ...s
        }
      );
    case "error":
      return /* @__PURE__ */ e.jsx(
        ie,
        {
          role: "alert",
          className: v("bg-error-light", a),
          icon: /* @__PURE__ */ e.jsx(
            ur,
            {
              className: "h-6 text-error-dark",
              "aria-hidden": "true"
            }
          ),
          ...s
        }
      );
  }
}, xt = (t) => /* @__PURE__ */ C.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 27, viewBox: "0 0 24 27", fill: "none", ...t }, /* @__PURE__ */ C.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.79482 0.799758C11.5492 0.615388 13.3303 0.79687 15.0235 1.34137C17.3543 2.09093 19.4195 3.49662 20.9717 5.39002C22.524 7.28342 23.4973 9.58422 23.7753 12.0167C24.0532 14.4493 23.6239 16.9103 22.5387 19.105C21.4536 21.2998 19.7586 23.1351 17.657 24.3911C15.5554 25.6471 13.1362 26.2704 10.6893 26.1865C8.24235 26.1026 5.87153 25.315 3.86086 23.918C2.40024 22.9032 1.17468 21.5981 0.256076 20.0921C-0.319121 19.1491 0.180672 17.969 1.20203 17.5485L2.531 17.0012C4.32849 21.3596 9.12439 23.8126 13.8004 22.5597C18.8826 21.1979 21.8986 15.974 20.5368 10.8917C19.1751 5.80949 13.9511 2.79346 8.86891 4.15525C8.79497 4.17506 8.72147 4.19569 8.64842 4.21712L8.34793 3.09571C8.06205 2.02878 8.6963 0.915204 9.79482 0.799758Z", fill: "currentColor" })), Pe = ({ name: t, version: a = "outline", ...s }) => {
  const i = a === "solid" ? Zr[t] : zr[t];
  return /* @__PURE__ */ e.jsx(i, { "aria-hidden": "true", ...s });
}, _e = {
  sm: "h-2 w-2",
  md: "h-4 w-4",
  lg: "h-6 w-6"
}, fe = ({
  as: t,
  variant: a = "primary",
  size: s = "md",
  leftIcon: i,
  rightIcon: o,
  iconVersion: c,
  isLoading: m,
  children: p,
  disabled: f,
  ...k
}) => {
  const b = t || "button", h = f || m;
  return /* @__PURE__ */ e.jsxs(
    b,
    {
      ...k,
      className: v(
        "inline-flex items-center justify-center gap-2 rounded-2 border px-4 py-2 text-center font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2",
        {
          // Text size
          "text-sm leading-tight": s === "sm",
          "text-lg": s === "lg",
          "text-normal leading-normal": s === "md",
          // Cursor.
          "cursor-not-allowed": h,
          // Border.
          "border-transparent": ["primary", "secondary", "text-error"].includes(
            a
          ),
          // Colors.
          "bg-primary-hub-700 text-primary-white hover:bg-primary-hub focus:ring-primary-hub-500": a === "primary" && !h,
          "bg-secondary-accessible-dark-grey focus:ring-secondary-accessible-dark-grey text-primary-white hover:bg-secondary-turquoise": a === "secondary" && !h,
          "border-secondary-accessible-dark-grey text-secondary-accessible-dark-grey focus:ring-secondary-accessible-dark-grey bg-primary-white hover:bg-secondary-turquoise-50": a === "outline" && !h,
          "text-secondary-accessible-dark-grey focus:ring-secondary-accessible-dark-grey border-transparent bg-transparent hover:bg-secondary-turquoise-50": a === "text" && !h,
          "hover:text-error-50 border-transparent bg-transparent text-error focus:ring-error-dark": a === "text-error" && !h,
          // Disabled.
          "border-primary-light-grey bg-primary-lighter-grey text-primary-medium-grey": ["primary", "secondary"].includes(a) && h,
          "border-primary-medium-grey text-primary-medium-grey": a === "outline" && h,
          "border-transparent text-primary-medium-grey": (a === "text" || a === "text-error") && h
        },
        k.className
      ),
      disabled: h,
      children: [
        i && !m && /* @__PURE__ */ e.jsx(Pe, { name: i, className: _e[s] }),
        m && /* @__PURE__ */ e.jsx(
          xt,
          {
            className: v(_e[s], "animate-spin")
          }
        ),
        p,
        o && /* @__PURE__ */ e.jsx(Pe, { name: o, className: _e[s] })
      ]
    }
  );
}, ht = J.forwardRef(
  ({ children: t, className: a, ...s }, i) => /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: i,
      className: v(
        "box-border flex w-full flex-grow flex-col rounded-4 bg-primary-white shadow-md",
        a
      ),
      ...s,
      children: t
    }
  )
);
ht.displayName = "Card";
const Qt = ({
  className: t,
  children: a
}) => /* @__PURE__ */ e.jsx(
  "div",
  {
    className: `grow animate-pulse rounded-4 bg-primary-light-grey ${t ?? ""}`,
    children: a
  }
), hr = de(
  ({
    options: t,
    onChange: a,
    ariaLabel: s,
    value: i,
    placeholder: o,
    fullWidth: c = !0,
    disabled: m = !1
  }, p) => /* @__PURE__ */ e.jsx(
    "select",
    {
      className: `text-16 focus:ring-primary-hub-500500 block rounded-[6px] border-primary-light-grey py-2 pl-4 focus:border-primary-hub-500 focus:outline-none sm:text-sm ${c ? "w-full" : ""}`,
      onChange: a,
      "aria-label": s,
      value: i ?? "",
      disabled: m,
      ref: p,
      children: /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        o && /* @__PURE__ */ e.jsx("option", { value: "", disabled: !0, hidden: !0, children: o }),
        t.map((f) => /* @__PURE__ */ e.jsx("option", { value: f.value, children: f.name }, f.value))
      ] })
    }
  )
);
hr.displayName = "Select";
const G = de(
  ({ hint: t, className: a, label: s, required: i, isLoading: o, error: c, id: m, ...p }, f) => {
    const k = oe(), b = m ?? k, h = !!c, E = `${b}_error`;
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: v("w-full", {
          "opacity-50": o
        }),
        children: [
          s && /* @__PURE__ */ e.jsxs(
            "label",
            {
              htmlFor: b,
              className: "err text-14 block font-medium text-primary-darker-grey",
              children: [
                s,
                i && /* @__PURE__ */ e.jsx(
                  "span",
                  {
                    className: "inline-block scale-[1.2] pl-2 text-error",
                    "aria-hidden": "true",
                    children: "*"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: v("relative", {
                "mt-4": s
              }),
              children: /* @__PURE__ */ e.jsx(
                "input",
                {
                  id: b,
                  ref: f,
                  type: "text",
                  className: v(
                    "block w-full rounded-[6px] leading-normal placeholder:opacity-50 focus:outline-none disabled:cursor-not-allowed disabled:border-neutral-100 disabled:bg-neutral-100 disabled:text-primary-medium-grey",
                    {
                      "border-primary-medium-sky focus:border-primary-dark-sky focus:ring-primary-dark-sky": !h,
                      // Color schema.
                      "border-error-dark focus:border-error-dark focus:ring-error-dark": h,
                      // Padding.
                      "pr-40": h
                    },
                    a
                  ),
                  readOnly: o,
                  "aria-busy": o,
                  "aria-invalid": h,
                  "aria-errormessage": h ? E : void 0,
                  "aria-describedby": h ? E : `${b}-hint`,
                  "aria-required": i,
                  ...p
                }
              )
            }
          ),
          !h && t && /* @__PURE__ */ e.jsx(
            "p",
            {
              id: `${b}-hint`,
              className: "mt-2 text-sm text-primary-medium-grey",
              role: "note",
              "aria-live": "polite",
              children: t
            }
          ),
          h && /* @__PURE__ */ e.jsxs(
            "p",
            {
              id: E,
              className: "mt-2 flex gap-2 text-sm text-error-dark",
              role: "alert",
              children: [
                /* @__PURE__ */ e.jsxs("span", { className: "relative", children: [
                  /* @__PURE__ */ e.jsx(
                    Qr,
                    {
                      className: "h-6 w-6 text-error-light",
                      "aria-hidden": "true"
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    ur,
                    {
                      className: "absolute left-0 top-0 h-6 w-6 text-error-dark",
                      "aria-hidden": "true"
                    }
                  )
                ] }),
                c
              ]
            }
          )
        ]
      }
    );
  }
), gt = (t) => /* @__PURE__ */ e.jsx(fe, { ...t, as: Te });
function pt({
  title: t,
  titleId: a,
  ...s
}, i) {
  return /* @__PURE__ */ C.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: i,
    "aria-labelledby": a
  }, s), t ? /* @__PURE__ */ C.createElement("title", {
    id: a
  }, t) : null, /* @__PURE__ */ C.createElement("path", {
    fillRule: "evenodd",
    d: "M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z",
    clipRule: "evenodd"
  }));
}
const bt = C.forwardRef(pt), yt = bt;
function vt({
  title: t,
  titleId: a,
  ...s
}, i) {
  return /* @__PURE__ */ C.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: i,
    "aria-labelledby": a
  }, s), t ? /* @__PURE__ */ C.createElement("title", {
    id: a
  }, t) : null, /* @__PURE__ */ C.createElement("path", {
    fillRule: "evenodd",
    d: "M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z",
    clipRule: "evenodd"
  }));
}
const jt = C.forwardRef(vt), wt = jt;
function Nt({
  title: t,
  titleId: a,
  ...s
}, i) {
  return /* @__PURE__ */ C.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: i,
    "aria-labelledby": a
  }, s), t ? /* @__PURE__ */ C.createElement("title", {
    id: a
  }, t) : null, /* @__PURE__ */ C.createElement("path", {
    d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
  }));
}
const kt = C.forwardRef(Nt), Et = kt;
function ea({
  options: t,
  excluded: a
}) {
  const s = a == null ? void 0 : a.map((o) => o.value);
  return t == null ? void 0 : t.filter(
    (o) => !(s != null && s.includes(o.value))
  );
}
const Rt = ({
  placeholder: t,
  options: a,
  value: s
}) => {
  const i = Array.isArray(s);
  return a != null && a.length ? !i && (s != null && s.name) ? s.name : i && (s != null && s.length) ? `Selected (${s.length})` : t ? /* @__PURE__ */ e.jsx("span", { className: "text-neutral-700", children: t }) : /* @__PURE__ */ e.jsx("div", { className: "h-20" }) : "No options available";
}, Ct = de(
  ({
    label: t,
    isRequired: a,
    options: s,
    value: i,
    defaultValue: o,
    placeholder: c,
    disabled: m,
    error: p,
    onChange: f,
    multiple: k,
    name: b,
    optionsHeaderRender: h,
    fixPosition: E
  }, $) => /* @__PURE__ */ e.jsxs("div", { className: "w-full", children: [
    /* @__PURE__ */ e.jsx(
      Y,
      {
        by: "value",
        value: i,
        defaultValue: i || o,
        onChange: f,
        disabled: m || !s.length,
        multiple: k,
        name: b,
        children: ({ open: A, disabled: L }) => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          t && /* @__PURE__ */ e.jsxs(Y.Label, { className: "text-14 block font-medium text-primary-darker-grey", children: [
            t,
            a && /* @__PURE__ */ e.jsx("span", { className: "inline-block scale-[1.2] pl-4 text-error", children: "*" })
          ] }),
          /* @__PURE__ */ e.jsxs(
            "div",
            {
              className: v("relative", {
                "mt-4": t
              }),
              children: [
                /* @__PURE__ */ e.jsx(
                  Y.Button,
                  {
                    className: v(
                      "focus:ring-primary-hub-500500 relative h-[42px] w-full rounded-[6px] border py-8 pl-12 pr-40 text-left shadow-sm focus:border-primary-hub-500 focus:outline-none focus:ring-1 sm:text-sm",
                      {
                        "border-error": p,
                        "border-primary-light-grey": !p,
                        "cursor-default bg-primary-white": !L,
                        "cursor-not-allowed bg-neutral-100 text-primary-medium-grey": L,
                        "border-primary-hub text-error placeholder-error-light focus:border-error focus:ring-error": p,
                        "rounded-s-0": E === "right",
                        "rounded-e-0": E === "left"
                      }
                    ),
                    children: ({ value: _ }) => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                      /* @__PURE__ */ e.jsx("span", { className: "block truncate", children: Rt({
                        placeholder: c,
                        options: s,
                        value: i || _
                      }) }),
                      /* @__PURE__ */ e.jsx("span", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-8", children: /* @__PURE__ */ e.jsx(
                        wt,
                        {
                          className: "h-20 w-20 text-gray-400",
                          "aria-hidden": "true"
                        }
                      ) })
                    ] })
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  xr,
                  {
                    as: $e,
                    show: A && s.length > 0,
                    leave: "transition ease-in duration-100",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: /* @__PURE__ */ e.jsxs(Y.Options, { className: "text-16 absolute z-10 mt-4 max-h-[240px] w-full overflow-auto rounded-[6px] bg-primary-white py-4 shadow-lg ring-1 ring-primary-black ring-opacity-5 focus:outline-none sm:text-sm", children: [
                      h,
                      s.map((_) => /* @__PURE__ */ e.jsx(
                        Y.Option,
                        {
                          value: _,
                          disabled: _.disabled,
                          className: ({ active: S, disabled: j }) => v(
                            "relative select-none py-8 pl-12 pr-[36px]",
                            {
                              "text-neutral-900": !S,
                              "bg-primary-hub-700 text-primary-white": S,
                              "cursor-not-allowed text-primary-light-grey": j
                            }
                          ),
                          children: ({ active: S, selected: j }) => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                            /* @__PURE__ */ e.jsx(
                              "span",
                              {
                                className: v("block truncate", {
                                  "font-normal": !j,
                                  "font-semibold": j
                                }),
                                children: _.name
                              }
                            ),
                            j ? /* @__PURE__ */ e.jsx(
                              "span",
                              {
                                className: v(
                                  "absolute inset-y-0 right-0 flex items-center pr-4",
                                  {
                                    "text-primary-hub-700": !S,
                                    "text-primary-white": S
                                  }
                                ),
                                children: /* @__PURE__ */ e.jsx(
                                  yt,
                                  {
                                    "aria-hidden": "true",
                                    className: "h-20 w-20"
                                  }
                                )
                              }
                            ) : null
                          ] })
                        },
                        _.value
                      ))
                    ] })
                  }
                )
              ]
            }
          )
        ] })
      }
    ),
    p && /* @__PURE__ */ e.jsx("p", { className: "mt-8 text-sm text-error", children: p })
  ] })
), Fe = "umh-desktop-menu-state", St = (t) => (window.addEventListener("storage", t), () => window.removeEventListener("storage", t)), _t = () => localStorage.getItem(Fe) === "true", Tt = () => {
  const t = qr(St, _t);
  return { isOpen: t, toggle: () => {
    const s = `${!t}`;
    localStorage.setItem(Fe, s), window.dispatchEvent(
      new StorageEvent("storage", {
        key: Fe,
        newValue: s,
        oldValue: `${t}`,
        storageArea: window.localStorage,
        url: window.location.href
      })
    );
  } };
}, ra = ({ isFullscreen: t = !0 }) => {
  const a = Tt();
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: v(
        {
          absolute: !t,
          fixed: t,
          "md:pl-[256px]": t && a.isOpen
        },
        "inset-0 z-10 flex h-full w-full items-center justify-center bg-white/75"
      ),
      children: /* @__PURE__ */ e.jsx("div", { className: "h-6 w-6 animate-spin rounded-50 border-4 border-primary-hub-800 border-r-transparent" })
    }
  );
}, Ot = ({
  checked: t,
  onChange: a,
  isLoading: s,
  disabled: i,
  ariaLabel: o,
  secondary: c
}) => /* @__PURE__ */ e.jsx(
  tt,
  {
    checked: t,
    ...o && { "aria-label": o },
    "aria-checked": t,
    onChange: a,
    disabled: i,
    className: v(
      "focus:ring-primary-hub-500500 relative inline-flex h-24 w-[44px] flex-shrink-0 cursor-pointer rounded-50 border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2",
      {
        "bg-neutral-200": !t && !i,
        "bg-secondary-accessible-dark-grey": c && t && !i,
        "bg-primary-hub-700": t && !i,
        "pointer-events-none bg-neutral-200": i,
        "pointer-events-none": s
      }
    ),
    children: /* @__PURE__ */ e.jsx(
      "span",
      {
        "aria-hidden": "true",
        className: v(
          "pointer-events-none inline-block h-20 w-20 transform rounded-50 bg-primary-white shadow ring-0 transition duration-200 ease-in-out",
          {
            "translate-x-0": !t,
            "translate-x-full": t,
            "animate-pulse": s
          }
        )
      }
    )
  }
);
function ta({ leading: t, secondary: a, primary: s, textCenter: i, backColor: o = "bg-primary-hub" }) {
  return /* @__PURE__ */ e.jsx("div", { className: `${o} py-24 sm:py-32`, children: /* @__PURE__ */ e.jsx("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: /* @__PURE__ */ e.jsxs("div", { className: `mx-auto max-w-2xl ${i ? "text-center" : "lg:mx-0"}`, children: [
    t && /* @__PURE__ */ e.jsx("p", { className: "text-base font-semibold leading-7 text-white", children: t }),
    /* @__PURE__ */ e.jsx("h2", { className: "mt-2 text-4xl font-bold font-branded tracking-tight text-primary-white sm:text-6xl", children: s }),
    a && /* @__PURE__ */ e.jsx("p", { className: "mt-6 text-lg leading-8 font-thin text-primary-white", children: a })
  ] }) }) });
}
function Pt({
  leading: t,
  secondary: a,
  primary: s,
  textCenter: i,
  tightSecondary: o,
  bgColor: c
}) {
  return /* @__PURE__ */ e.jsx("div", { className: `${c ?? ""} py-24 sm:py-32`, children: /* @__PURE__ */ e.jsx("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `mx-auto max-w-2xl ${i ? "text-center" : "lg:mx-0"}`,
      children: [
        t && /* @__PURE__ */ e.jsx("p", { className: "text-base font-semibold leading-7 text-indigo-600", children: t }),
        /* @__PURE__ */ e.jsx("h2", { className: "mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl", children: s }),
        a && /* @__PURE__ */ e.jsx(
          "p",
          {
            className: `${o ? "mt-2" : "mt-6"} text-lg leading-8 text-gray-600`,
            children: a
          }
        )
      ]
    }
  ) }) });
}
const aa = ({
  name: t,
  label: a,
  checked: s,
  disabled: i
}) => {
  const { control: o } = ue(), { field: c } = me({ name: t, control: o });
  return /* @__PURE__ */ e.jsxs("div", { className: "mb-4 flex items-center", children: [
    s ? /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "checkbox",
        ...c,
        className: "mr-2 h-16 w-16 rounded-4 border-primary-light-grey",
        id: t,
        checked: s,
        disabled: i
      }
    ) : /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "checkbox",
        ...c,
        className: "mr-2 h-16 w-16 rounded-4 border-primary-light-grey",
        id: t,
        disabled: i
      }
    ),
    /* @__PURE__ */ e.jsx("label", { className: "text-base", htmlFor: t, children: a })
  ] });
}, sa = (t) => {
  const { control: a } = ue(), { field: s } = me({ name: t.name, control: a });
  return /* @__PURE__ */ e.jsx(Ct, { ...t, ...s });
}, na = (t) => {
  const { control: a } = ue(), { field: s } = me({ name: t.name, control: a });
  return /* @__PURE__ */ e.jsx(Ot, { ...s, ref: null, checked: s.value });
}, ia = (t) => {
  const { control: a } = ue(), { field: s } = me({ name: t.name, control: a });
  return /* @__PURE__ */ e.jsx(G, { ...s, ...t });
}, Ft = ({
  table: t,
  isLoading: a,
  renderSubComponent: s
}) => {
  const i = !t.getRowModel().rows.length;
  return /* @__PURE__ */ e.jsx("div", { className: "max-h-[600px] overflow-auto", children: /* @__PURE__ */ e.jsxs(
    "table",
    {
      className: "min-w-full divide-y divide-primary-light-grey",
      "aria-busy": a,
      "aria-live": "polite",
      children: [
        /* @__PURE__ */ e.jsx("thead", { className: "sticky top-0 bg-neutral-50", children: t.getHeaderGroups().map((o) => /* @__PURE__ */ e.jsx("tr", { children: o.headers.map((c) => {
          const m = ir(
            c.column.columnDef.header,
            c.getContext()
          );
          return /* @__PURE__ */ e.jsx(
            "th",
            {
              scope: "col",
              className: "text-14 py-4 text-left font-semibold text-primary-dark-grey first:pl-8 first:pr-4 first:font-semibold first:sm:pl-12",
              children: c.column.getCanSort() ? /* @__PURE__ */ e.jsxs(
                "button",
                {
                  type: "button",
                  className: "flex gap-8 capitalize",
                  onClick: c.column.getToggleSortingHandler(),
                  children: [
                    /* @__PURE__ */ e.jsx("span", { children: m }),
                    /* @__PURE__ */ e.jsx("span", { children: { asc: "▲", desc: "▼", none: "" }[c.column.getIsSorted()] ?? null })
                  ]
                }
              ) : m
            },
            c.id
          );
        }) }, o.id)) }),
        /* @__PURE__ */ e.jsx(
          "tbody",
          {
            className: "divide-y divide-neutral-300 bg-primary-white",
            "data-testid": "table-body",
            children: a || i ? /* @__PURE__ */ e.jsx(e.Fragment, { children: a ? /* @__PURE__ */ e.jsx(e.Fragment, { children: t.getHeaderGroups().map((o) => /* @__PURE__ */ e.jsx("tr", { className: "animate-pulse", children: o.headers.map((c, m) => /* @__PURE__ */ e.jsx(
              "td",
              {
                className: "p-4 first:pl-8 first:pr-4 first:sm:pl-4",
                children: /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: "h-12 w-1/2 bg-neutral-50",
                    "aria-label": "Loading"
                  }
                )
              },
              `${o.id}-${m}`
            )) }, o.id)) }) : /* @__PURE__ */ e.jsx("tr", { className: "relative h-96", children: /* @__PURE__ */ e.jsx("td", { className: "absolute flex h-96 w-full items-center justify-center text-neutral-500", children: "There is no data to show" }) }) }) : t.getRowModel().rows.map((o) => /* @__PURE__ */ e.jsxs($e, { children: [
              /* @__PURE__ */ e.jsx("tr", { children: o.getVisibleCells().map((c) => /* @__PURE__ */ e.jsx(
                "td",
                {
                  className: "text-14 whitespace-nowrap px-2 py-4 font-headline text-primary-medium-grey first:pl-8 first:pr-4 first:font-semibold first:sm:pl-12",
                  children: ir(
                    c.column.columnDef.cell,
                    c.getContext()
                  )
                },
                c.id
              )) }),
              o.getIsExpanded() && /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx("td", { colSpan: o.getVisibleCells().length, children: s == null ? void 0 : s({ row: o }) }) })
            ] }, o.id))
          }
        )
      ]
    }
  ) });
}, It = ({ children: t }) => /* @__PURE__ */ e.jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ e.jsx("div", { className: "grid min-w-full gap-4 py-4 align-middle md:px-4 lg:px-6", children: t }) }), $t = {
  xs: "h-2 w-2",
  sm: "h-2 w-2",
  md: "h-4 w-4",
  lg: "h-6 w-6",
  xl: "h-8 w-8",
  xxl: "h-10 w-10"
}, le = ({
  variant: t = "primary",
  icon: a,
  size: s = "md",
  ...i
}) => /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(
  "button",
  {
    ...i,
    className: v(
      "inline-flex items-center border font-medium focus:outline-none focus:ring-2 focus:ring-offset-2",
      {
        // Padding.
        "p-4": s !== "xl" || "xxl",
        "p-6": s === "xl",
        // Font size.
        "text-12": s === "xs",
        "text-14": ["sm", "md"].includes(s),
        "text-16": ["lg", "xl"].includes(s),
        // Line height.
        "leading-4": s === "sm",
        // Shadow.
        "shadow-sm": ["primary", "white"].includes(t),
        // Border.
        "border-transparent": ["primary", "secondary", "ghost"].includes(
          t
        ),
        // Colors.
        "focus:ring-primary-hub-500500 bg-primary-hub text-primary-white hover:bg-primary-hub-700": t === "primary" && !i.disabled,
        "text-primary-grey hover:bg-primary-hub-600 hover:text-primary-white focus:ring-primary-hub-500": t === "ghost" && !i.disabled,
        "focus:ring-primary-hub-500500 bg-primary-hub-100 text-primary-hub-700 hover:bg-primary-hub-200": t === "secondary" && !i.disabled,
        "focus:ring-primary-hub-500500 border-primary-light-grey bg-primary-white text-primary-darker-grey hover:bg-neutral-50": t === "white" && !i.disabled,
        // Disabled.
        "cursor-disabled border-primary-light-grey bg-primary-lighter-grey text-primary-medium-grey": i.disabled
      }
    ),
    children: a && /* @__PURE__ */ e.jsx(Pe, { name: a, className: v($t[s]) })
  }
) }), Dt = ({
  table: t,
  isLoading: a,
  options: s = [10, 20, 30, 40, 50]
}) => a || !t.getRowModel().rows.length ? null : /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between gap-2 border-t border-t-primary-light-grey px-2 py-1", children: [
  /* @__PURE__ */ e.jsxs("div", { className: "flex gap-2", children: [
    /* @__PURE__ */ e.jsx(
      le,
      {
        variant: "ghost",
        icon: "ChevronDoubleLeftIcon",
        onClick: () => t.setPageIndex(0),
        disabled: !t.getCanPreviousPage(),
        "aria-label": "First page"
      }
    ),
    /* @__PURE__ */ e.jsx(
      le,
      {
        variant: "ghost",
        icon: "ChevronLeftIcon",
        onClick: () => t.previousPage(),
        disabled: !t.getCanPreviousPage(),
        "aria-label": "Previous page"
      }
    ),
    /* @__PURE__ */ e.jsx("span", { className: "flex w-12 items-center justify-center font-semibold text-primary-dark-grey", children: `${t.getState().pagination.pageIndex + 1} of ${t.getPageCount()}` }),
    /* @__PURE__ */ e.jsx(
      le,
      {
        variant: "ghost",
        icon: "ChevronRightIcon",
        onClick: () => t.nextPage(),
        disabled: !t.getCanNextPage(),
        "aria-label": "Next page"
      }
    ),
    /* @__PURE__ */ e.jsx(
      le,
      {
        variant: "ghost",
        icon: "ChevronDoubleRightIcon",
        onClick: () => t.setPageIndex(t.getPageCount() - 1),
        disabled: !t.getCanNextPage(),
        "aria-label": "Last page"
      }
    )
  ] }),
  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ e.jsx("span", { className: "text-primary-dark-grey", children: "Show" }),
    /* @__PURE__ */ e.jsx(
      hr,
      {
        value: t.getState().pagination.pageSize.toString(),
        options: s.map((i) => ({
          value: i.toString(),
          name: i.toString()
        })),
        onChange: (i) => {
          t.setPageSize(Number(i.target.value));
        },
        ariaLabel: "Page size"
      }
    )
  ] })
] });
function Mt({
  data: t,
  columns: a,
  isLoading: s,
  canFilter: i,
  hasPagination: o,
  renderSubComponent: c,
  getRowCanExpand: m,
  onSelect: p,
  sorting: f,
  onSortingChange: k,
  pageSizeOptions: b
}, h) {
  const [E, $] = I(""), [A, L] = I(""), [_, S] = I({}), [j, xe] = I([]);
  ce(() => {
    p && p(Object.keys(_).map(Number));
  }, [p, _]);
  const he = Yr(
    (D, ee, be, ye) => {
      const W = at(D.getValue(ee), be);
      return ye({
        itemRank: W
      }), W.passed;
    },
    []
  ), ge = k ? {
    manualSorting: !0,
    onSortingChange: k,
    state: {
      sorting: f
    }
  } : {}, F = st({
    data: t,
    columns: a,
    state: {
      globalFilter: A,
      rowSelection: _,
      columnFilters: j
    },
    globalFilterFn: he,
    getCoreRowModel: nt(),
    getFilteredRowModel: it(),
    getPaginationRowModel: o ? lt() : void 0,
    getSortedRowModel: ot(),
    getExpandedRowModel: ct(),
    getRowCanExpand: m,
    enableRowSelection: !0,
    onRowSelectionChange: S,
    enableColumnFilters: !0,
    onColumnFiltersChange: xe,
    getFacetedUniqueValues: dt(),
    ...ge
  });
  ce(() => {
    const D = setTimeout(() => {
      L(E);
    }, 250);
    return () => {
      clearTimeout(D);
    };
  }, [E]), ce(() => {
    b && F.setPageSize(b[0]);
  }, [b, F]), Hr(h, () => F, [F]);
  const pe = (D) => $(D.target.value);
  return /* @__PURE__ */ e.jsxs(It, { children: [
    i && /* @__PURE__ */ e.jsx(
      G,
      {
        onChange: pe,
        placeholder: "Search in table"
      }
    ),
    /* @__PURE__ */ e.jsx(
      Ft,
      {
        isLoading: s,
        table: F,
        renderSubComponent: c
      }
    ),
    o && /* @__PURE__ */ e.jsx(Dt, { options: b, table: F })
  ] });
}
const At = de(Mt);
At.displayName = "Table";
const De = ({
  pages: t,
  withHomeIncluded: a = !0
}) => /* @__PURE__ */ e.jsxs(
  "nav",
  {
    role: "navigation",
    "aria-label": "Breadcrumb",
    className: "flex flex-col items-start md:flex-row",
    children: [
      a && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(
          Te,
          {
            className: "text-14 text-accessible-dark-turquoise font-normal leading-6",
            to: "/",
            children: "Home"
          }
        ),
        /* @__PURE__ */ e.jsx(nr, { className: "fill-accessible-dark-turquoise h-24" })
      ] }),
      t.map((s, i, o) => /* @__PURE__ */ e.jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ e.jsx(
          Te,
          {
            className: "text-14 text-accessible-dark-turquoise last:text-dark-grey hover:text-turquoise last:hover:text-dark-grey font-normal leading-6 last:font-bold",
            to: s.href,
            children: s.name
          }
        ),
        i !== o.length - 1 && /* @__PURE__ */ e.jsx(nr, { className: "fill-accessible-dark-turquoise h-24" })
      ] }, s.name))
    ]
  }
), gr = ({
  tabs: t
}) => /* @__PURE__ */ e.jsx("div", { className: "border-light-grey border-b", children: /* @__PURE__ */ e.jsx("nav", { className: "-mb-px flex space-x-32 overflow-x-auto", "aria-label": "Tabs", children: t.map((a) => /* @__PURE__ */ e.jsx(
  fr,
  {
    end: a.end,
    to: a.href,
    className: ({ isActive: s }) => `whitespace-nowrap border-b-2 px-4 py-16 text-sm ${s ? "border-accessible-dark-turquoise text-accessible-dark-turquoise font-bold" : "border-transparent font-medium text-primary-medium-grey hover:border-gray-300 hover:text-primary-darker-grey"}`,
    children: a.name
  },
  a.name
)) }) }), Lt = C.forwardRef(
  ({
    activeClassName: t,
    inActiveClassName: a,
    activeStyle: s,
    inActiveStyle: i,
    ...o
  }, c) => /* @__PURE__ */ e.jsx(
    fr,
    {
      ref: c,
      ...o,
      className: ({ isActive: m }) => [o.className, m ? t : a].filter(Boolean).join(" "),
      style: ({ isActive: m }) => ({
        ...o.style,
        ...m ? s : i
      })
    }
  )
), Bt = ({ steps: t }) => /* @__PURE__ */ e.jsx("div", { className: "border-light-grey border-b", children: /* @__PURE__ */ e.jsx("nav", { className: "-mb-px flex w-full overflow-x-auto", "aria-label": "Stepper", children: t.map((a) => /* @__PURE__ */ e.jsxs(
  Lt,
  {
    end: a.end,
    to: a.href,
    className: "w-full whitespace-nowrap border-b-2 px-4 py-16 text-sm font-bold",
    activeClassName: "border-accessible-dark-turquoise text-accessible-dark-turquoise",
    inActiveClassName: "hover:border-gray-300 border-transparent font-bold text-primary-light-grey hover:text-accessible-dark-turquoise hover:border-accessible-dark-turquoise",
    children: [
      /* @__PURE__ */ e.jsx("div", { className: "mb-2", children: a.name }),
      /* @__PURE__ */ e.jsx("span", { className: "font-normal text-primary-medium-grey", children: a.description })
    ]
  },
  a.name
)) }) });
function la({
  indeterminate: t,
  ...a
}) {
  const s = J.useRef(null);
  return J.useEffect(() => {
    typeof t == "boolean" && (s.current.indeterminate = !a.checked && t);
  }, [s, t, a.checked]), /* @__PURE__ */ e.jsx(
    "input",
    {
      type: "checkbox",
      ref: s,
      className: "focus:ring-primary-hub-500500 h-4 w-4 rounded border-gray-300 text-primary-hub-700",
      ...a
    }
  );
}
const oa = ({
  withImage: t,
  withBranding: a,
  heading: s,
  description: i,
  buttonLabel: o,
  buttonRoute: c
}) => /* @__PURE__ */ e.jsx("section", { "aria-labelledby": "cause-heading", children: /* @__PURE__ */ e.jsxs("div", { className: "relative bg-gray-800 px-6 py-32 sm:px-12 sm:py-40 lg:px-16", children: [
  t && /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 overflow-hidden", children: /* @__PURE__ */ e.jsx(
    "img",
    {
      src: "https://tailwindui.com/img/ecommerce-images/home-page-03-feature-section-full-width.jpg",
      alt: "",
      className: "h-full w-full object-cover object-center"
    }
  ) }),
  /* @__PURE__ */ e.jsx(
    "div",
    {
      "aria-hidden": "true",
      className: `absolute inset-0 ${a ? "bg-primary-hub" : "bg-gray-900"} bg-opacity-50`
    }
  ),
  /* @__PURE__ */ e.jsxs("div", { className: "relative mx-auto flex max-w-3xl flex-col items-center text-center", children: [
    /* @__PURE__ */ e.jsx(
      "h2",
      {
        id: "cause-heading",
        className: "text-3xl font-bold tracking-tight text-white sm:text-4xl",
        children: s
      }
    ),
    /* @__PURE__ */ e.jsx("p", { className: "mt-3 text-xl text-white", children: i }),
    /* @__PURE__ */ e.jsx(
      "a",
      {
        href: c,
        className: "mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto",
        children: o
      }
    )
  ] })
] }) }), ca = ({
  error: t,
  handleAction: a = () => window.location.reload(),
  actionName: s = "Reload page"
}) => /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 flex h-full w-full justify-center bg-white", children: /* @__PURE__ */ e.jsx("div", { className: "grid bg-white px-24 py-96 sm:py-[128px] lg:px-32", children: /* @__PURE__ */ e.jsxs("div", { className: "pt-32 text-center", children: [
  /* @__PURE__ */ e.jsx("p", { className: "text-16 font-semibold text-primary-hub", children: t == null ? void 0 : t.code }),
  /* @__PURE__ */ e.jsx("h1", { className: "text-dark-grey text-16 sm:text-24 mt-16 font-bold tracking-tight", children: "Sorry, we couldn't find the data you're looking for" }),
  /* @__PURE__ */ e.jsx("p", { className: "text-16 mt-24 leading-7 text-primary-darker-grey", children: t == null ? void 0 : t.message }),
  /* @__PURE__ */ e.jsx("div", { className: "mt-40 flex items-center justify-center gap-x-24", children: /* @__PURE__ */ e.jsx(fe, { onClick: a, children: s }) })
] }) }) }), da = ({ items: t }) => t != null && t.length ? /* @__PURE__ */ e.jsxs("div", { className: "mt-40", children: [
  /* @__PURE__ */ e.jsx("h2", { className: "mb-16 text-lg font-bold", children: "Danger Zone" }),
  /* @__PURE__ */ e.jsx("div", { className: "inline-flex w-full items-center rounded-4 border border-primary-hub bg-white", children: /* @__PURE__ */ e.jsx("ul", { className: "w-full", children: t.map(({ title: a, body: s, buttonText: i, onClickHandler: o }, c) => /* @__PURE__ */ e.jsxs(
    "li",
    {
      className: "align-center border-light-grey/40 flex justify-between border-b-[1px] p-20 last-of-type:border-none",
      children: [
        /* @__PURE__ */ e.jsxs("span", { className: "self-center", children: [
          /* @__PURE__ */ e.jsx(
            "p",
            {
              className: v("font-bold", {
                "mb-4": !!s
              }),
              children: a
            }
          ),
          s ? /* @__PURE__ */ e.jsx("p", { className: "text-sm", children: s }) : null
        ] }),
        /* @__PURE__ */ e.jsx(fe, { onClick: o, children: i })
      ]
    },
    c
  )) }) })
] }) : null, ua = ({
  title: t,
  children: a,
  open: s,
  handleClose: i,
  width: o,
  className: c = ""
}) => {
  const m = cr(() => `max-w-${o ?? "2xl"}`, [o]);
  return /* @__PURE__ */ e.jsxs(Se, { open: s, onClose: i, className: "relative z-40", children: [
    /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 bg-primary-dark-grey", "aria-hidden": "true" }),
    /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 overflow-y-auto", children: /* @__PURE__ */ e.jsx("div", { className: "flex min-h-full items-center justify-center p-4", children: /* @__PURE__ */ e.jsxs(
      Se.Panel,
      {
        className: `w-full rounded-2 bg-white p-4 shadow-xl ${m} ${c}`,
        children: [
          t && /* @__PURE__ */ e.jsx(Se.Title, { className: "mb-12 text-lg font-bold", children: t }),
          a
        ]
      }
    ) }) })
  ] });
}, ma = ({
  message: t,
  description: a,
  show: s,
  handleClose: i,
  variant: o,
  warning: c
}) => {
  const [m, p] = I(s), { t: f } = K();
  return /* @__PURE__ */ e.jsx(
    xr,
    {
      show: m,
      as: $e,
      enter: "transform ease-out duration-300 transition",
      enterFrom: "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2",
      enterTo: "translate-y-0 opacity-100 sm:translate-x-0",
      leave: "transition ease-in duration-100",
      leaveFrom: "opacity-100",
      leaveTo: "opacity-0",
      children: /* @__PURE__ */ e.jsx(
        "div",
        {
          role: "alertdialog",
          "aria-describedby": "notification-message",
          className: `pointer-events-auto w-full max-w-sm overflow-hidden rounded-4 border border-${c ? "hub-500" : "green-900"} bg-${c ? "hub-100" : "green-100"} shadow-lg ring-1 ring-black ring-opacity-5`,
          children: /* @__PURE__ */ e.jsx("div", { className: "p-16", children: /* @__PURE__ */ e.jsxs(
            "div",
            {
              className: v("flex", {
                "items-start": o !== "simple",
                "items-center": o === "simple"
              }),
              children: [
                !c && /* @__PURE__ */ e.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ e.jsx(
                  mr,
                  {
                    className: "h-24 w-24 text-green-900",
                    "aria-hidden": "true"
                  }
                ) }),
                /* @__PURE__ */ e.jsxs(
                  "div",
                  {
                    className: v("ml-12 w-0 flex-1", {
                      "-mt-2": o !== "simple"
                    }),
                    children: [
                      /* @__PURE__ */ e.jsx("p", { className: "text-dark-grey font-bold", id: "notification-message", children: t }),
                      a ? /* @__PURE__ */ e.jsx(
                        "p",
                        {
                          className: "text-14 mt-4 text-primary-medium-grey",
                          "data-testid": "notification-description",
                          children: a
                        }
                      ) : null
                    ]
                  }
                ),
                /* @__PURE__ */ e.jsx("div", { className: "ml-16 flex flex-shrink-0", children: o === "closeable" ? /* @__PURE__ */ e.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "inline-flex rounded-[6px] text-primary-medium-grey hover:text-primary-medium-grey focus:outline-none focus:ring-2 focus:ring-green-900 focus:ring-offset-2",
                    onClick: i || (() => {
                      p(!1);
                    }),
                    children: [
                      /* @__PURE__ */ e.jsx("span", { className: "sr-only", children: f("notification.close", "Close") }),
                      /* @__PURE__ */ e.jsx(
                        Et,
                        {
                          className: "h-20 w-20 text-green-900",
                          "aria-hidden": "true"
                        }
                      )
                    ]
                  }
                ) : null })
              ]
            }
          ) })
        }
      )
    }
  );
};
function fa({
  createLabel: t,
  headerPrimary: a,
  headerSecondary: s,
  createButtonLabel: i
}) {
  return /* @__PURE__ */ e.jsx("div", { className: "relative isolate h-full bg-white", children: /* @__PURE__ */ e.jsxs("div", { className: "mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2", children: [
    /* @__PURE__ */ e.jsx("div", { className: "relative px-3 pb-10 pt-12 sm:pt-16 lg:static lg:px-8 lg:py-24", children: /* @__PURE__ */ e.jsxs("div", { className: "mx-auto max-w-xl lg:mx-0 lg:max-w-lg", children: [
      /* @__PURE__ */ e.jsx("div", { className: "absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2", children: /* @__PURE__ */ e.jsxs(
        "svg",
        {
          className: "absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]",
          "aria-hidden": "true",
          children: [
            /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsx(
              "pattern",
              {
                id: "83fd4e5a-9d52-42fc-97b6-718e5d7ee527",
                width: 200,
                height: 200,
                x: "100%",
                y: -1,
                patternUnits: "userSpaceOnUse",
                children: /* @__PURE__ */ e.jsx("path", { d: "M130 200V.5M.5 .5H200", fill: "none" })
              }
            ) }),
            /* @__PURE__ */ e.jsx("rect", { width: "100%", height: "100%", strokeWidth: 0, fill: "white" }),
            /* @__PURE__ */ e.jsx("svg", { x: "100%", y: -1, className: "overflow-visible fill-gray-50", children: /* @__PURE__ */ e.jsx("path", { d: "M-470.5 0h201v201h-201Z", strokeWidth: 0 }) }),
            /* @__PURE__ */ e.jsx(
              "rect",
              {
                width: "100%",
                height: "100%",
                strokeWidth: 0,
                fill: "url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
              }
            )
          ]
        }
      ) }),
      /* @__PURE__ */ e.jsx(
        Pt,
        {
          primary: a,
          secondary: s,
          textCenter: !0,
          tightSecondary: !1
        }
      )
    ] }) }),
    /* @__PURE__ */ e.jsxs("div", { className: "px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48", children: [
      /* @__PURE__ */ e.jsx("div", { className: "px-14 py-8 md:flex md:items-center md:justify-between", children: /* @__PURE__ */ e.jsx("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight", children: t }) }) }),
      /* @__PURE__ */ e.jsxs("form", { className: "mx-auto max-w-xl lg:mr-0 lg:max-w-lg", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2", children: [
          /* @__PURE__ */ e.jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ e.jsx("div", { className: "mt-2.5", children: /* @__PURE__ */ e.jsx(
            G,
            {
              label: "Shop name",
              name: "shop-name",
              id: "shop-name",
              autoComplete: "shop-name",
              className: "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            }
          ) }) }),
          /* @__PURE__ */ e.jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ e.jsx("div", { className: "mt-2.5", children: /* @__PURE__ */ e.jsx(
            G,
            {
              type: "tel",
              label: "Phone number",
              name: "phone-number",
              id: "phone-number",
              autoComplete: "tel",
              className: "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            }
          ) }) }),
          /* @__PURE__ */ e.jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ e.jsx("div", { className: "mt-2.5", children: /* @__PURE__ */ e.jsx(
            G,
            {
              label: "Email",
              name: "email",
              id: "email",
              autoComplete: "email",
              className: "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            }
          ) }) })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "mt-12 flex justify-end", children: /* @__PURE__ */ e.jsx(
          fe,
          {
            type: "submit",
            size: "lg",
            className: "w-full rounded-8 px-5 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-hub-700",
            children: i
          }
        ) })
      ] })
    ] })
  ] }) });
}
const xa = () => /* @__PURE__ */ e.jsx("section", { className: "h-full w-full min-w-0 flex-1 bg-white", children: /* @__PURE__ */ e.jsx(Z, {}) }), pr = {
  breadcrumbs: [],
  updateBreadcrumbs: () => {
  }
}, Q = dr(
  pr
), ha = ({ children: t }) => {
  const [a, s] = I(pr.breadcrumbs);
  return /* @__PURE__ */ e.jsx(
    Q.Provider,
    {
      value: cr(
        () => ({
          breadcrumbs: a,
          updateBreadcrumbs: (i) => {
            s(i);
          }
        }),
        [a]
      ),
      children: t
    }
  );
}, ga = ({
  heading: t
}) => {
  const { breadcrumbs: a } = X(Q);
  return /* @__PURE__ */ e.jsxs("section", { className: "min-w-0 flex-1 bg-white pb-32", children: [
    /* @__PURE__ */ e.jsx(De, { pages: a }),
    t,
    /* @__PURE__ */ e.jsx("div", { className: "px-8", children: /* @__PURE__ */ e.jsx(Z, {}) })
  ] });
}, pa = ({
  steps: t,
  heading: a
}) => {
  const { breadcrumbs: s } = X(Q);
  return /* @__PURE__ */ e.jsxs("section", { className: "min-w-0 flex-1 bg-white pb-32", children: [
    /* @__PURE__ */ e.jsx(De, { pages: s }),
    a,
    t && /* @__PURE__ */ e.jsx("div", { className: "my-16", children: /* @__PURE__ */ e.jsx(Bt, { steps: t }) }),
    /* @__PURE__ */ e.jsx("div", { className: "px-8", children: /* @__PURE__ */ e.jsx(Z, {}) })
  ] });
}, ba = ({
  subMenu: t
}) => /* @__PURE__ */ e.jsxs("section", { className: "min-w-0 flex-1 bg-white pb-32", children: [
  t && /* @__PURE__ */ e.jsx("div", { className: "mb-16 bg-white md:sticky md:top-0 md:z-10", children: /* @__PURE__ */ e.jsx(gr, { tabs: t }) }),
  /* @__PURE__ */ e.jsx("div", { className: "px-8", children: /* @__PURE__ */ e.jsx(Z, {}) })
] }), ya = ({
  subMenu: t,
  heading: a
}) => {
  const { breadcrumbs: s } = X(Q);
  return /* @__PURE__ */ e.jsxs("section", { className: "min-w-0 flex-1 bg-white pb-32", children: [
    /* @__PURE__ */ e.jsx(De, { pages: s }),
    a,
    t && /* @__PURE__ */ e.jsx("div", { className: "my-16", children: /* @__PURE__ */ e.jsx(gr, { tabs: t }) }),
    /* @__PURE__ */ e.jsx(Z, {})
  ] });
}, br = dr(
  void 0
), va = () => {
  const t = X(br);
  if (!t)
    throw new Error("useSlideOver must be used within a SlideOverProvider");
  return t;
}, ja = ({ children: t }) => {
  const [a, s] = I(null), [i, o] = I(!1), p = {
    openSlideOver: a,
    openSlide: (f) => {
      s(f), o(!0);
    },
    closeSlide: () => {
      s(null), o(!1);
    },
    isOpen: i
  };
  return /* @__PURE__ */ e.jsx(br.Provider, { value: p, children: t });
}, wa = (t) => {
  const { breadcrumbs: a, updateBreadcrumbs: s } = X(Q);
  ce(() => {
    JSON.stringify(a) !== JSON.stringify(t) && s(t);
  }, [t, a, s]);
}, Ie = ({
  helmet: t,
  title: a,
  description: s,
  code: i,
  hideHomeLink: o
}) => {
  const { t: c } = K();
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs(ut, { children: [
      /* @__PURE__ */ e.jsx("title", { children: t }),
      /* @__PURE__ */ e.jsx("html", { className: "h-full" }),
      /* @__PURE__ */ e.jsx("body", { className: "h-full" })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "flex min-h-full w-full flex-col bg-white pb-48 pt-[64px]", children: /* @__PURE__ */ e.jsxs("main", { className: "mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-16 sm:px-24 lg:px-32", children: [
      /* @__PURE__ */ e.jsx("div", { className: "flex flex-shrink-0 justify-center", children: /* @__PURE__ */ e.jsxs("div", { className: "inline-flex", children: [
        /* @__PURE__ */ e.jsx("span", { className: "sr-only", children: "UMH" }),
        /* @__PURE__ */ e.jsx(Kr, { className: "h-24 w-auto" })
      ] }) }),
      /* @__PURE__ */ e.jsx("div", { className: "py-[64px]", children: /* @__PURE__ */ e.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ e.jsx("p", { className: "text-16 font-semibold text-error", children: i }),
        /* @__PURE__ */ e.jsx("h1", { className: "text-dark-grey mt-8 text-32 font-bold tracking-tight sm:text-48", children: a }),
        /* @__PURE__ */ e.jsx("p", { className: "mt-8 text-16 text-primary-medium-grey", children: s }),
        !o && /* @__PURE__ */ e.jsx("div", { className: "mt-24", children: /* @__PURE__ */ e.jsx(
          gt,
          {
            to: "/",
            rightIcon: "ArrowRightIcon",
            variant: "text-error",
            children: c("error-page.go-back-home", "Go back home")
          }
        ) })
      ] }) })
    ] }) })
  ] });
};
function Na() {
  var i;
  const { t } = K(), a = et(), s = t(
    "error-page.try-clearing-cache",
    "Try clearing your cache and try again."
  );
  return rt(a) ? ({}.VITE_DEBUG_UNIT_TESTS && console.log("🧼 ErrorBoundary.tsx: Route error response:", a), /* @__PURE__ */ e.jsx(
    Ie,
    {
      title: a.statusText,
      code: `${a.status}`,
      description: ((i = a.data) == null ? void 0 : i.message) || s
    }
  )) : ({}.VITE_DEBUG_UNIT_TESTS && console.log("🧼 ErrorBoundary.tsx: NON route error:", a), /* @__PURE__ */ e.jsx(
    Ie,
    {
      title: t(
        "error-page.something-went-wrong",
        "Something went wrong"
      ),
      code: t("error-page.application-error", "Application error"),
      description: s
    }
  ));
}
const ka = () => {
  const { t } = K();
  return /* @__PURE__ */ e.jsx(
    Ie,
    {
      title: t("error-page.404.title", "Page not found"),
      code: "404",
      description: t(
        "error-page.404.description",
        "Please check the URL in the address bar and try again."
      )
    }
  );
};
export {
  Zt as Alert,
  ie as AlertBase,
  De as Breadcrumbs,
  Q as BreadcrumbsContext,
  ha as BreadcrumbsProvider,
  fe as Button,
  ht as Card,
  Qt as CardLoader,
  la as ColumnCheckbox,
  ca as ComponentLevelError,
  xa as ContentLayout,
  ga as ContentLayoutWithBreadcrumbs,
  aa as ControlledCheckboxField,
  sa as ControlledListbox,
  na as ControlledSwitch,
  ia as ControlledTextField,
  da as DangerZone,
  ta as DarkHeaderSection,
  Na as ErrorBoundary,
  oa as FeaturedSection,
  Pt as HeaderSection,
  Pe as Icon,
  gt as LinkButton,
  Ct as Listbox,
  ra as LoadingSpinner,
  ua as Modal,
  ma as Notification,
  ka as Page404,
  Ie as PageLevelError,
  Bt as RouteStepper,
  hr as Select,
  ja as SlideOverProvider,
  fa as SplitCreationForm,
  pa as StepperWithBreadcrumbs,
  Ot as Switch,
  gr as TabMenu,
  ba as TabbedMenuLayout,
  ya as TabbedMenuLayoutWithBreadcrumbs,
  At as Table,
  Ft as TableBase,
  Dt as TablePaginationButtons,
  G as TextField,
  ea as getOptions,
  wa as useBreadcrumbs,
  Tt as useDesktopMenuState,
  va as useSlideOver
};
