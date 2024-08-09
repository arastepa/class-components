'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [644],
  {
    2599: function (e, t, n) {
      var r, a, i, l;
      /**
       * @remix-run/router v1.17.1
       *
       * Copyright (c) Remix Software Inc.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.md file in the root directory of this source tree.
       *
       * @license MIT
       */ function s() {
        return (s = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      function h(e, t) {
        if (!1 === e || null == e) throw Error(t);
      }
      function o(e) {
        let { pathname: t = '/', search: n = '', hash: r = '' } = e;
        return (
          n && '?' !== n && (t += '?' === n.charAt(0) ? n : '?' + n),
          r && '#' !== r && (t += '#' === r.charAt(0) ? r : '#' + r),
          t
        );
      }
      function u(e) {
        let t = {};
        if (e) {
          let n = e.indexOf('#');
          n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
          let r = e.indexOf('?');
          r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e);
        }
        return t;
      }
      function c(e, t) {
        var n, r, a;
        let i, l;
        'string' == typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        let [s, h] =
            ((n = e.path),
            (r = e.caseSensitive),
            (a = e.end),
            void 0 === r && (r = !1),
            void 0 === a && (a = !0),
            (function (e, t) {
              if (!e) {
                'undefined' != typeof console && console.warn(t);
                try {
                  throw Error(t);
                } catch (e) {}
              }
            })(
              '*' === n || !n.endsWith('*') || n.endsWith('/*'),
              'Route path "' +
                n +
                '" will be treated as if it were "' +
                n.replace(/\*$/, '/*') +
                '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                n.replace(/\*$/, '/*') +
                '".',
            ),
            (i = []),
            (l =
              '^' +
              n
                .replace(/\/*\*?$/, '')
                .replace(/^\/*/, '/')
                .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
                .replace(
                  /\/:([\w-]+)(\?)?/g,
                  (e, t, n) => (
                    i.push({ paramName: t, isOptional: null != n }),
                    n ? '/?([^\\/]+)?' : '/([^\\/]+)'
                  ),
                )),
            n.endsWith('*')
              ? (i.push({ paramName: '*' }),
                (l += '*' === n || '/*' === n ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
              : a
                ? (l += '\\/*$')
                : '' !== n && '/' !== n && (l += '(?:(?=\\/|$))'),
            [new RegExp(l, r ? void 0 : 'i'), i]),
          o = t.match(s);
        if (!o) return null;
        let u = o[0],
          c = u.replace(/(.)\/+$/, '$1'),
          p = o.slice(1);
        return {
          params: h.reduce((e, t, n) => {
            let { paramName: r, isOptional: a } = t;
            if ('*' === r) {
              let e = p[n] || '';
              c = u.slice(0, u.length - e.length).replace(/(.)\/+$/, '$1');
            }
            let i = p[n];
            return (
              a && !i
                ? (e[r] = void 0)
                : (e[r] = (i || '').replace(/%2F/g, '/')),
              e
            );
          }, {}),
          pathname: u,
          pathnameBase: c,
          pattern: e,
        };
      }
      function p(e, t) {
        if ('/' === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        let n = t.endsWith('/') ? t.length - 1 : t.length,
          r = e.charAt(n);
        return r && '/' !== r ? null : e.slice(n) || '/';
      }
      function f(e, t, n, r) {
        return (
          "Cannot include a '" +
          e +
          "' character in a manually specified " +
          ('`to.' + t) +
          '` field [' +
          JSON.stringify(r) +
          '].  Please separate it out to the `to.' +
          n +
          '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
        );
      }
      function d(e, t) {
        let n = e.filter(
          (e, t) => 0 === t || (e.route.path && e.route.path.length > 0),
        );
        return t
          ? n.map((e, t) => (t === n.length - 1 ? e.pathname : e.pathnameBase))
          : n.map((e) => e.pathnameBase);
      }
      function m(e, t, n, r) {
        let a, i;
        void 0 === r && (r = !1),
          'string' == typeof e
            ? (a = u(e))
            : (h(
                !(a = s({}, e)).pathname || !a.pathname.includes('?'),
                f('?', 'pathname', 'search', a),
              ),
              h(
                !a.pathname || !a.pathname.includes('#'),
                f('#', 'pathname', 'hash', a),
              ),
              h(
                !a.search || !a.search.includes('#'),
                f('#', 'search', 'hash', a),
              ));
        let l = '' === e || '' === a.pathname,
          o = l ? '/' : a.pathname;
        if (null == o) i = n;
        else {
          let e = t.length - 1;
          if (!r && o.startsWith('..')) {
            let t = o.split('/');
            for (; '..' === t[0]; ) t.shift(), (e -= 1);
            a.pathname = t.join('/');
          }
          i = e >= 0 ? t[e] : '/';
        }
        let c = (function (e, t) {
            let n;
            void 0 === t && (t = '/');
            let {
              pathname: r,
              search: a = '',
              hash: i = '',
            } = 'string' == typeof e ? u(e) : e;
            return {
              pathname: r
                ? r.startsWith('/')
                  ? r
                  : ((n = t.replace(/\/+$/, '').split('/')),
                    r.split('/').forEach((e) => {
                      '..' === e
                        ? n.length > 1 && n.pop()
                        : '.' !== e && n.push(e);
                    }),
                    n.length > 1 ? n.join('/') : '/')
                : t,
              search: w(a),
              hash: y(i),
            };
          })(a, i),
          p = o && '/' !== o && o.endsWith('/'),
          d = (l || '.' === o) && n.endsWith('/');
        return !c.pathname.endsWith('/') && (p || d) && (c.pathname += '/'), c;
      }
      n.d(t, {
        Ep: function () {
          return o;
        },
        J0: function () {
          return h;
        },
        LX: function () {
          return c;
        },
        RQ: function () {
          return g;
        },
        X3: function () {
          return v;
        },
        Zn: function () {
          return p;
        },
        cm: function () {
          return d;
        },
        pC: function () {
          return m;
        },
      }),
        ((i = r || (r = {})).Pop = 'POP'),
        (i.Push = 'PUSH'),
        (i.Replace = 'REPLACE'),
        ((l = a || (a = {})).data = 'data'),
        (l.deferred = 'deferred'),
        (l.redirect = 'redirect'),
        (l.error = 'error');
      let g = (e) => e.join('/').replace(/\/\/+/g, '/'),
        w = (e) => (e && '?' !== e ? (e.startsWith('?') ? e : '?' + e) : ''),
        y = (e) => (e && '#' !== e ? (e.startsWith('#') ? e : '#' + e) : '');
      class v extends Error {}
      Symbol('deferred');
    },
  },
]);
