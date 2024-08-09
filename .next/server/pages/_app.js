(() => {
  var e = {};
  (e.id = 888),
    (e.ids = [888]),
    (e.modules = {
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
      9394: (e, t, a) => {
        'use strict';
        a.d(t, { Z: () => c });
        var r = a(997),
          s = a(6689),
          i = a(5404),
          n = a.n(i);
        class p extends s.Component {
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
              ? r.jsx('h1', {
                  className: n().errorBoundary,
                  children: 'Something went wrong.',
                })
              : this.props.children;
          }
        }
        let c = p;
      },
      5652: (e, t, a) => {
        'use strict';
        a.a(e, async (e, r) => {
          try {
            a.d(t, { Do: () => p, ZP: () => c });
            var s = a(3258),
              i = e([s]);
            s = (i.then ? (await i)() : i)[0];
            let n = (0, s.createSlice)({
                name: 'pages',
                initialState: { pageCount: null },
                reducers: {
                  setPageCount: (e, t) => {
                    e.pageCount = t.payload;
                  },
                },
              }),
              { setPageCount: p } = n.actions,
              c = n.reducer;
            r();
          } catch (e) {
            r(e);
          }
        });
      },
      2394: (e, t, a) => {
        'use strict';
        a.a(e, async (e, r) => {
          try {
            a.d(t, {
              Pq: () => o,
              ZP: () => u,
              ap: () => d,
              ph: () => l,
              ss: () => p,
              x_: () => _,
            });
            var s = a(3258),
              i = e([s]);
            s = (i.then ? (await i)() : i)[0];
            let n = (0, s.createSlice)({
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
                setPlanets: p,
                setLoading: c,
                setPlanetDetail: l,
                setSelected: o,
                rmSelected: d,
                clearSelected: _,
              } = n.actions,
              u = n.reducer;
            r();
          } catch (e) {
            r(e);
          }
        });
      },
      7764: (e, t, a) => {
        'use strict';
        a.a(e, async (e, r) => {
          try {
            a.d(t, { EJ: () => n, f2: () => o, su: () => c, vW: () => l });
            var s = a(9943),
              i = e([s]);
            s = (i.then ? (await i)() : i)[0];
            let n = (0, s.createApi)({
                reducerPath: 'planetsApi',
                baseQuery: (0, s.fetchBaseQuery)({
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
                useGetAllPlanetsQuery: p,
                useGetPlanetsQuery: c,
                useGetPlanetQuery: l,
                useGetPlanetDetailQuery: o,
              } = n;
            r();
          } catch (e) {
            r(e);
          }
        });
      },
      1821: (e, t, a) => {
        'use strict';
        a.a(e, async (e, r) => {
          try {
            a.d(t, { h: () => l });
            var s = a(3258),
              i = a(2394),
              n = a(5652),
              p = a(7764),
              c = e([s, i, n, p]);
            [s, i, n, p] = c.then ? (await c)() : c;
            let l = (0, s.configureStore)({
              reducer: {
                planets: i.ZP,
                pagesRed: n.ZP,
                [p.EJ.reducerPath]: p.EJ.reducer,
              },
              middleware: (e) => e().concat(p.EJ.middleware),
            });
            r();
          } catch (e) {
            r(e);
          }
        });
      },
      906: (e, t, a) => {
        'use strict';
        a.d(t, { N: () => i, f: () => n });
        var r = a(997),
          s = a(6689);
        let i = (0, s.createContext)({ theme: 'light', setTheme: () => {} }),
          n = ({ children: e }) => {
            let [t, a] = (0, s.useState)('light');
            return r.jsx(i.Provider, {
              value: { theme: t, setTheme: a },
              children: e,
            });
          };
      },
      3893: (e, t, a) => {
        'use strict';
        a.a(e, async (e, r) => {
          try {
            a.r(t), a.d(t, { default: () => _ });
            var s = a(997),
              i = a(906),
              n = a(3291),
              p = a(1821),
              c = a(9394);
            a(8634);
            var l = a(968),
              o = a.n(l),
              d = e([n, p]);
            [n, p] = d.then ? (await d)() : d;
            let _ = function ({ Component: e, pageProps: t }) {
              return s.jsx(n.Provider, {
                store: p.h,
                children: s.jsx(c.Z, {
                  children: (0, s.jsxs)(i.f, {
                    children: [
                      (0, s.jsxs)(o(), {
                        children: [
                          s.jsx('meta', { charSet: 'UTF-8' }),
                          s.jsx('meta', { content: 'UTF-8' }),
                          s.jsx('meta', {
                            name: 'viewport',
                            content: 'width=device-width, initial-scale=1.0',
                          }),
                          s.jsx('title', { children: 'star wars api' }),
                        ],
                      }),
                      s.jsx(e, { ...t }),
                      ';',
                    ],
                  }),
                }),
              });
            };
            r();
          } catch (e) {
            r(e);
          }
        });
      },
      8634: () => {},
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
    });
  var t = require('../webpack-runtime.js');
  t.C(e);
  var a = t((t.s = 3893));
  module.exports = a;
})();
