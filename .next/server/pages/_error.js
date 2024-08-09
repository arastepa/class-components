(() => {
  var e = {};
  (e.id = 820),
    (e.ids = [820, 888, 660]),
    (e.modules = {
      1323: (e, t) => {
        'use strict';
        Object.defineProperty(t, 'l', {
          enumerable: !0,
          get: function () {
            return function e(t, r) {
              return r in t
                ? t[r]
                : 'then' in t && 'function' == typeof t.then
                  ? t.then((t) => e(t, r))
                  : 'function' == typeof t && 'default' === r
                    ? t
                    : void 0;
            };
          },
        });
      },
      5404: (e) => {
        e.exports = {
          container: 'app_container__L0ebM',
          input: 'app_input__bth_E',
          search: 'app_search__2r99Y',
          title: 'app_title__Qvqih',
          main: 'app_main__nK0Nl',
          mainContainer: 'app_mainContainer__oR0sh',
          detailsMain: 'app_detailsMain___hKgc',
          details: 'app_details__EhRS8',
          pageNumber: 'app_pageNumber__wbvvT',
          active: 'app_active__lcQZM',
          errorBtn: 'app_errorBtn__Y9fxB',
          errorBoundary: 'app_errorBoundary__jCPpE',
          spinner: 'app_spinner__ah_RP',
          spin: 'app_spin__t3L8N',
          header: 'app_header__6eGoq',
          errorPage: 'app_errorPage__W9Kwj',
          pages: 'app_pages__281m2',
          'checkboxes-list': 'app_checkboxes-list__l7tQH',
          btns: 'app_btns__JIo85',
          lightTheme: 'app_lightTheme__Cr338',
          darkTheme: 'app_darkTheme__IukLF',
          download: 'app_download__c3Dq4',
        };
      },
      4258: (e, t, r) => {
        'use strict';
        r.a(e, async (e, n) => {
          try {
            r.r(t),
              r.d(t, {
                config: () => g,
                default: () => p,
                getServerSideProps: () => _,
                getStaticPaths: () => h,
                getStaticProps: () => f,
                reportWebVitals: () => m,
                routeModule: () => j,
                unstable_getServerProps: () => b,
                unstable_getServerSideProps: () => v,
                unstable_getStaticParams: () => x,
                unstable_getStaticPaths: () => P,
                unstable_getStaticProps: () => y,
              });
            var a = r(7093),
              s = r(5244),
              i = r(1323),
              o = r(2899),
              l = r.n(o),
              d = r(3893),
              c = r(6971),
              u = e([d]);
            d = (u.then ? (await u)() : u)[0];
            let p = (0, i.l)(c, 'default'),
              f = (0, i.l)(c, 'getStaticProps'),
              h = (0, i.l)(c, 'getStaticPaths'),
              _ = (0, i.l)(c, 'getServerSideProps'),
              g = (0, i.l)(c, 'config'),
              m = (0, i.l)(c, 'reportWebVitals'),
              y = (0, i.l)(c, 'unstable_getStaticProps'),
              P = (0, i.l)(c, 'unstable_getStaticPaths'),
              x = (0, i.l)(c, 'unstable_getStaticParams'),
              b = (0, i.l)(c, 'unstable_getServerProps'),
              v = (0, i.l)(c, 'unstable_getServerSideProps'),
              j = new a.PagesRouteModule({
                definition: {
                  kind: s.x.PAGES,
                  page: '/_error',
                  pathname: '/_error',
                  bundlePath: '',
                  filename: '',
                },
                components: { App: d.default, Document: l() },
                userland: c,
              });
            n();
          } catch (e) {
            n(e);
          }
        });
      },
      6971: (e, t, r) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
          Object.defineProperty(t, 'default', {
            enumerable: !0,
            get: function () {
              return c;
            },
          });
        let n = r(167),
          a = r(997),
          s = n._(r(6689)),
          i = n._(r(7828)),
          o = {
            400: 'Bad Request',
            404: 'This page could not be found',
            405: 'Method Not Allowed',
            500: 'Internal Server Error',
          };
        function l(e) {
          let { res: t, err: r } = e;
          return {
            statusCode:
              t && t.statusCode ? t.statusCode : r ? r.statusCode : 404,
          };
        }
        let d = {
          error: {
            fontFamily:
              'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
            height: '100vh',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          },
          desc: { lineHeight: '48px' },
          h1: {
            display: 'inline-block',
            margin: '0 20px 0 0',
            paddingRight: 23,
            fontSize: 24,
            fontWeight: 500,
            verticalAlign: 'top',
          },
          h2: { fontSize: 14, fontWeight: 400, lineHeight: '28px' },
          wrap: { display: 'inline-block' },
        };
        class c extends s.default.Component {
          render() {
            let { statusCode: e, withDarkMode: t = !0 } = this.props,
              r =
                this.props.title || o[e] || 'An unexpected error has occurred';
            return (0, a.jsxs)('div', {
              style: d.error,
              children: [
                (0, a.jsx)(i.default, {
                  children: (0, a.jsx)('title', {
                    children: e
                      ? e + ': ' + r
                      : 'Application error: a client-side exception has occurred',
                  }),
                }),
                (0, a.jsxs)('div', {
                  style: d.desc,
                  children: [
                    (0, a.jsx)('style', {
                      dangerouslySetInnerHTML: {
                        __html:
                          'body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}' +
                          (t
                            ? '@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}'
                            : ''),
                      },
                    }),
                    e
                      ? (0, a.jsx)('h1', {
                          className: 'next-error-h1',
                          style: d.h1,
                          children: e,
                        })
                      : null,
                    (0, a.jsx)('div', {
                      style: d.wrap,
                      children: (0, a.jsxs)('h2', {
                        style: d.h2,
                        children: [
                          this.props.title || e
                            ? r
                            : (0, a.jsx)(a.Fragment, {
                                children:
                                  'Application error: a client-side exception has occurred (see the browser console for more information)',
                              }),
                          '.',
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            });
          }
        }
        (c.displayName = 'ErrorPage'),
          (c.getInitialProps = l),
          (c.origGetInitialProps = l),
          ('function' == typeof t.default ||
            ('object' == typeof t.default && null !== t.default)) &&
            void 0 === t.default.__esModule &&
            (Object.defineProperty(t.default, '__esModule', { value: !0 }),
            Object.assign(t.default, t),
            (e.exports = t.default));
      },
      5495: (e, t) => {
        'use strict';
        function r(e) {
          let {
            ampFirst: t = !1,
            hybrid: r = !1,
            hasQuery: n = !1,
          } = void 0 === e ? {} : e;
          return t || (r && n);
        }
        Object.defineProperty(t, '__esModule', { value: !0 }),
          Object.defineProperty(t, 'isInAmpMode', {
            enumerable: !0,
            get: function () {
              return r;
            },
          });
      },
      7828: (e, t, r) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (function (e, t) {
            for (var r in t)
              Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
          })(t, {
            default: function () {
              return _;
            },
            defaultHead: function () {
              return u;
            },
          });
        let n = r(167),
          a = r(8760),
          s = r(997),
          i = a._(r(6689)),
          o = n._(r(7215)),
          l = r(8039),
          d = r(1988),
          c = r(5495);
        function u(e) {
          void 0 === e && (e = !1);
          let t = [(0, s.jsx)('meta', { charSet: 'utf-8' })];
          return (
            e ||
              t.push(
                (0, s.jsx)('meta', {
                  name: 'viewport',
                  content: 'width=device-width',
                }),
              ),
            t
          );
        }
        function p(e, t) {
          return 'string' == typeof t || 'number' == typeof t
            ? e
            : t.type === i.default.Fragment
              ? e.concat(
                  i.default.Children.toArray(t.props.children).reduce(
                    (e, t) =>
                      'string' == typeof t || 'number' == typeof t
                        ? e
                        : e.concat(t),
                    [],
                  ),
                )
              : e.concat(t);
        }
        r(1997);
        let f = ['name', 'httpEquiv', 'charSet', 'itemProp'];
        function h(e, t) {
          let { inAmpMode: r } = t;
          return e
            .reduce(p, [])
            .reverse()
            .concat(u(r).reverse())
            .filter(
              (function () {
                let e = new Set(),
                  t = new Set(),
                  r = new Set(),
                  n = {};
                return (a) => {
                  let s = !0,
                    i = !1;
                  if (
                    a.key &&
                    'number' != typeof a.key &&
                    a.key.indexOf('$') > 0
                  ) {
                    i = !0;
                    let t = a.key.slice(a.key.indexOf('$') + 1);
                    e.has(t) ? (s = !1) : e.add(t);
                  }
                  switch (a.type) {
                    case 'title':
                    case 'base':
                      t.has(a.type) ? (s = !1) : t.add(a.type);
                      break;
                    case 'meta':
                      for (let e = 0, t = f.length; e < t; e++) {
                        let t = f[e];
                        if (a.props.hasOwnProperty(t)) {
                          if ('charSet' === t) r.has(t) ? (s = !1) : r.add(t);
                          else {
                            let e = a.props[t],
                              r = n[t] || new Set();
                            ('name' !== t || !i) && r.has(e)
                              ? (s = !1)
                              : (r.add(e), (n[t] = r));
                          }
                        }
                      }
                  }
                  return s;
                };
              })(),
            )
            .reverse()
            .map((e, t) => {
              let n = e.key || t;
              if (
                !r &&
                'link' === e.type &&
                e.props.href &&
                [
                  'https://fonts.googleapis.com/css',
                  'https://use.typekit.net/',
                ].some((t) => e.props.href.startsWith(t))
              ) {
                let t = { ...(e.props || {}) };
                return (
                  (t['data-href'] = t.href),
                  (t.href = void 0),
                  (t['data-optimized-fonts'] = !0),
                  i.default.cloneElement(e, t)
                );
              }
              return i.default.cloneElement(e, { key: n });
            });
        }
        let _ = function (e) {
          let { children: t } = e,
            r = (0, i.useContext)(l.AmpStateContext),
            n = (0, i.useContext)(d.HeadManagerContext);
          return (0, s.jsx)(o.default, {
            reduceComponentsToState: h,
            headManager: n,
            inAmpMode: (0, c.isInAmpMode)(r),
            children: t,
          });
        };
        ('function' == typeof t.default ||
          ('object' == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, '__esModule', { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
      },
      7215: (e, t, r) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
          Object.defineProperty(t, 'default', {
            enumerable: !0,
            get: function () {
              return i;
            },
          });
        let n = r(6689),
          a = () => {},
          s = () => {};
        function i(e) {
          var t;
          let { headManager: r, reduceComponentsToState: i } = e;
          function o() {
            if (r && r.mountedInstances) {
              let t = n.Children.toArray(
                Array.from(r.mountedInstances).filter(Boolean),
              );
              r.updateHead(i(t, e));
            }
          }
          return (
            null == r || null == (t = r.mountedInstances) || t.add(e.children),
            o(),
            a(() => {
              var t;
              return (
                null == r ||
                  null == (t = r.mountedInstances) ||
                  t.add(e.children),
                () => {
                  var t;
                  null == r ||
                    null == (t = r.mountedInstances) ||
                    t.delete(e.children);
                }
              );
            }),
            a(
              () => (
                r && (r._pendingUpdate = o),
                () => {
                  r && (r._pendingUpdate = o);
                }
              ),
            ),
            s(
              () => (
                r &&
                  r._pendingUpdate &&
                  (r._pendingUpdate(), (r._pendingUpdate = null)),
                () => {
                  r &&
                    r._pendingUpdate &&
                    (r._pendingUpdate(), (r._pendingUpdate = null));
                }
              ),
            ),
            null
          );
        }
      },
      1997: (e, t) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
          Object.defineProperty(t, 'warnOnce', {
            enumerable: !0,
            get: function () {
              return r;
            },
          });
        let r = (e) => {};
      },
      9394: (e, t, r) => {
        'use strict';
        r.d(t, { Z: () => l });
        var n = r(997),
          a = r(6689),
          s = r(5404),
          i = r.n(s);
        class o extends a.Component {
          constructor(e) {
            super(e), (this.state = { hasError: !1 });
          }
          static getDerivedStateFromError() {
            return { hasError: !0 };
          }
          componentDidCatch(e, t) {
            console.error('error from error boundary: ', e, t);
          }
          render() {
            return this.state.hasError
              ? n.jsx('h1', {
                  className: i().errorBoundary,
                  children: 'Something went wrong.',
                })
              : this.props.children;
          }
        }
        let l = o;
      },
      5652: (e, t, r) => {
        'use strict';
        r.a(e, async (e, n) => {
          try {
            r.d(t, { Do: () => o, ZP: () => l });
            var a = r(3258),
              s = e([a]);
            a = (s.then ? (await s)() : s)[0];
            let i = (0, a.createSlice)({
                name: 'pages',
                initialState: { pageCount: null },
                reducers: {
                  setPageCount: (e, t) => {
                    e.pageCount = t.payload;
                  },
                },
              }),
              { setPageCount: o } = i.actions,
              l = i.reducer;
            n();
          } catch (e) {
            n(e);
          }
        });
      },
      2394: (e, t, r) => {
        'use strict';
        r.a(e, async (e, n) => {
          try {
            r.d(t, {
              Pq: () => c,
              ZP: () => f,
              ap: () => u,
              ph: () => d,
              ss: () => o,
              x_: () => p,
            });
            var a = r(3258),
              s = e([a]);
            a = (s.then ? (await s)() : s)[0];
            let i = (0, a.createSlice)({
                name: 'planets',
                initialState: {
                  items: [],
                  isloading: !1,
                  planetDetail: null,
                  selected: [],
                },
                reducers: {
                  setPlanets: (e, t) => {
                    e.items = t.payload;
                  },
                  setPlanetDetail: (e, t) => {
                    e.planetDetail = t.payload;
                  },
                  setSelected: (e, t) => {
                    e.selected.find((e) => e.name === t.payload.name) ||
                      (e.selected = [...e.selected, t.payload]);
                  },
                  rmSelected: (e, t) => {
                    e.selected.find((e) => e.name === t.payload.name) &&
                      (e.selected = e.selected.filter(
                        (e) => e.name !== t.payload.name,
                      ));
                  },
                  clearSelected: (e) => {
                    e.selected = [];
                  },
                  setLoading: (e, t) => {
                    e.isloading = t.payload;
                  },
                },
              }),
              {
                setPlanets: o,
                setLoading: l,
                setPlanetDetail: d,
                setSelected: c,
                rmSelected: u,
                clearSelected: p,
              } = i.actions,
              f = i.reducer;
            n();
          } catch (e) {
            n(e);
          }
        });
      },
      7764: (e, t, r) => {
        'use strict';
        r.a(e, async (e, n) => {
          try {
            r.d(t, { EJ: () => i, f2: () => c, su: () => l, vW: () => d });
            var a = r(9943),
              s = e([a]);
            a = (s.then ? (await s)() : s)[0];
            let i = (0, a.createApi)({
                reducerPath: 'planetsApi',
                baseQuery: (0, a.fetchBaseQuery)({
                  baseUrl: 'https://swapi.dev/api/',
                }),
                endpoints: (e) => ({
                  getAllPlanets: e.query({ query: () => 'planets' }),
                  getPlanets: e.query({
                    query: (e) => `planets?search=&page=${e}`,
                  }),
                  getPlanet: e.query({
                    query: (e) => `planets?search=${e.trim()}`,
                  }),
                  getPlanetDetail: e.query({ query: (e) => `planets/${e}` }),
                }),
              }),
              {
                useGetAllPlanetsQuery: o,
                useGetPlanetsQuery: l,
                useGetPlanetQuery: d,
                useGetPlanetDetailQuery: c,
              } = i;
            n();
          } catch (e) {
            n(e);
          }
        });
      },
      1821: (e, t, r) => {
        'use strict';
        r.a(e, async (e, n) => {
          try {
            r.d(t, { h: () => d });
            var a = r(3258),
              s = r(2394),
              i = r(5652),
              o = r(7764),
              l = e([a, s, i, o]);
            [a, s, i, o] = l.then ? (await l)() : l;
            let d = (0, a.configureStore)({
              reducer: {
                planets: s.ZP,
                pagesRed: i.ZP,
                [o.EJ.reducerPath]: o.EJ.reducer,
              },
              middleware: (e) => e().concat(o.EJ.middleware),
            });
            n();
          } catch (e) {
            n(e);
          }
        });
      },
      906: (e, t, r) => {
        'use strict';
        r.d(t, { N: () => s, f: () => i });
        var n = r(997),
          a = r(6689);
        let s = (0, a.createContext)({ theme: 'light', setTheme: () => {} }),
          i = ({ children: e }) => {
            let [t, r] = (0, a.useState)('light');
            return n.jsx(s.Provider, {
              value: { theme: t, setTheme: r },
              children: e,
            });
          };
      },
      3893: (e, t, r) => {
        'use strict';
        r.a(e, async (e, n) => {
          try {
            r.r(t), r.d(t, { default: () => p });
            var a = r(997),
              s = r(906),
              i = r(3291),
              o = r(1821),
              l = r(9394);
            r(8634);
            var d = r(968),
              c = r.n(d),
              u = e([i, o]);
            [i, o] = u.then ? (await u)() : u;
            let p = function ({ Component: e, pageProps: t }) {
              return a.jsx(i.Provider, {
                store: o.h,
                children: a.jsx(l.Z, {
                  children: (0, a.jsxs)(s.f, {
                    children: [
                      (0, a.jsxs)(c(), {
                        children: [
                          a.jsx('meta', { charSet: 'UTF-8' }),
                          a.jsx('meta', { content: 'UTF-8' }),
                          a.jsx('meta', {
                            name: 'viewport',
                            content: 'width=device-width, initial-scale=1.0',
                          }),
                          a.jsx('title', { children: 'star wars api' }),
                        ],
                      }),
                      a.jsx(e, { ...t }),
                      ';',
                    ],
                  }),
                }),
              });
            };
            n();
          } catch (e) {
            n(e);
          }
        });
      },
      8634: () => {},
      5244: (e, t) => {
        'use strict';
        var r;
        Object.defineProperty(t, 'x', {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
          (function (e) {
            (e.PAGES = 'PAGES'),
              (e.PAGES_API = 'PAGES_API'),
              (e.APP_PAGE = 'APP_PAGE'),
              (e.APP_ROUTE = 'APP_ROUTE');
          })(r || (r = {}));
      },
      8039: (e, t, r) => {
        'use strict';
        e.exports = r(7093).vendored.contexts.AmpContext;
      },
      1988: (e, t, r) => {
        'use strict';
        e.exports = r(7093).vendored.contexts.HeadManagerContext;
      },
      2785: (e) => {
        'use strict';
        e.exports = require('next/dist/compiled/next-server/pages.runtime.prod.js');
      },
      968: (e) => {
        'use strict';
        e.exports = require('next/head');
      },
      6689: (e) => {
        'use strict';
        e.exports = require('react');
      },
      997: (e) => {
        'use strict';
        e.exports = require('react/jsx-runtime');
      },
      3258: (e) => {
        'use strict';
        e.exports = import('@reduxjs/toolkit');
      },
      9943: (e) => {
        'use strict';
        e.exports = import('@reduxjs/toolkit/query/react');
      },
      3291: (e) => {
        'use strict';
        e.exports = import('react-redux');
      },
      1017: (e) => {
        'use strict';
        e.exports = require('path');
      },
      8760: (e, t) => {
        'use strict';
        function r(e) {
          if ('function' != typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (r = function (e) {
            return e ? n : t;
          })(e);
        }
        t._ = t._interop_require_wildcard = function (e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ('object' != typeof e && 'function' != typeof e))
            return { default: e };
          var n = r(t);
          if (n && n.has(e)) return n.get(e);
          var a = { __proto__: null },
            s = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
            if ('default' !== i && Object.prototype.hasOwnProperty.call(e, i)) {
              var o = s ? Object.getOwnPropertyDescriptor(e, i) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(a, i, o)
                : (a[i] = e[i]);
            }
          return (a.default = e), n && n.set(e, a), a;
        };
      },
    });
  var t = require('../webpack-runtime.js');
  t.C(e);
  var r = (e) => t((t.s = e)),
    n = t.X(0, [899], () => r(4258));
  module.exports = n;
})();
