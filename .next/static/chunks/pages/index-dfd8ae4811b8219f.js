(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    8312: function (e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return a(8352);
        },
      ]);
    },
    8352: function (e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, {
          default: function () {
            return y;
          },
        });
      var n = a(5893),
        l = a(7294),
        s = a(38),
        i = a.n(s),
        c = (e) => {
          var t;
          return (0, n.jsx)('div', {
            className: i().search,
            children: (0, n.jsxs)('form', {
              onSubmit: e.onHandleSubmit,
              children: [
                (0, n.jsx)('input', {
                  type: 'text',
                  defaultValue:
                    null !== (t = localStorage.getItem('previous')) &&
                    void 0 !== t
                      ? t
                      : '',
                  onChange: (t) => {
                    e.onHandleChange(t.target.value);
                  },
                  className: i().input,
                  name: 'search',
                  'data-testid': 'search',
                }),
                (0, n.jsx)('input', {
                  type: 'submit',
                  value: 'find',
                  'data-testid': 'searching',
                }),
              ],
            }),
          });
        },
        r = a(9250),
        o = a(9655),
        d = a(5007),
        u = a(906),
        h = () => {
          let { id: e } = (0, r.UO)(),
            t = (0, d.v9)((e) => e.pagesRed.pageCount),
            a = e ? parseInt(e, 10) : 1,
            { theme: s } = (0, l.useContext)(u.N);
          return (0, n.jsxs)('div', {
            className: i().pages,
            children: [
              (0, n.jsx)(
                o.OL,
                {
                  className: ''
                    .concat(i().nav_link, ' ')
                    .concat('light' === s ? i().lightTheme : i().darkTheme, ' ')
                    .concat(i().pageNumber),
                  to: '/page/'.concat(Math.max(a - 1, 1)),
                  children: 'Prev',
                },
                'prev',
              ),
              Array(t)
                .fill(null)
                .map((e, t) =>
                  (0, n.jsx)(
                    o.OL,
                    {
                      'data-testid': 'link-'.concat(t),
                      className: (e) => {
                        let { isActive: t } = e;
                        return ''
                          .concat(
                            t
                              ? ''
                                  .concat(i().active, ' ')
                                  .concat(i().pageNumber)
                              : ''
                                  .concat(i().nav_link, ' ')
                                  .concat(i().pageNumber),
                            ' ',
                          )
                          .concat(
                            'light' === s ? i().lightTheme : i().darkTheme,
                          );
                      },
                      to: '/page/'.concat(t + 1),
                      children: t + 1,
                    },
                    t,
                  ),
                ),
              (0, n.jsx)(
                o.OL,
                {
                  className: ''
                    .concat(i().nav_link, ' ')
                    .concat(i().pageNumber, ' ')
                    .concat('light' === s ? i().lightTheme : i().darkTheme, ' ')
                    .concat(i().pageNumber),
                  to: '/page/'.concat(Math.min(a + 1, null != t ? t : 0)),
                  children: 'Next',
                },
                'next',
              ),
            ],
          });
        },
        p = a(2394),
        m = () => {
          let e = (0, d.v9)((e) => e.planets.planetDetail),
            t = (0, r.TH)(),
            a = (0, r.s0)(),
            l = (0, d.I0)();
          if (e)
            return (0, n.jsxs)('div', {
              className: i().details,
              children: [
                (0, n.jsxs)('p', {
                  className: i().title,
                  children: ['Name: ', null == e ? void 0 : e.name],
                }),
                (0, n.jsxs)('p', {
                  children: ['Gravity: ', null == e ? void 0 : e.gravity],
                }),
                (0, n.jsxs)('p', {
                  children: ['Population: ', null == e ? void 0 : e.population],
                }),
                (0, n.jsxs)('p', {
                  children: ['Climate: ', null == e ? void 0 : e.climate],
                }),
                (0, n.jsxs)('p', {
                  children: [
                    'Orbital Period: ',
                    null == e ? void 0 : e.orbital_period,
                  ],
                }),
                (0, n.jsxs)('p', {
                  children: ['Diameter: ', null == e ? void 0 : e.diameter],
                }),
                (0, n.jsxs)('p', {
                  children: [
                    'Rotation Period: ',
                    null == e ? void 0 : e.rotation_period,
                  ],
                }),
                (0, n.jsxs)('p', {
                  children: [
                    'Surface Water: ',
                    null == e ? void 0 : e.surface_water,
                  ],
                }),
                (0, n.jsxs)('p', {
                  children: ['Terrain: ', null == e ? void 0 : e.terrain],
                }),
                (0, n.jsx)('input', {
                  type: 'submit',
                  value: 'close',
                  onClick: () => {
                    let { pathname: e, hash: n } = t;
                    a(''.concat(e).concat(n)), l((0, p.ph)(null));
                  },
                  'data-testid': 'closeBtn',
                }),
              ],
            });
        },
        v = a(4328);
      let g = (e) => {
        let t = (0, d.I0)();
        return (0, n.jsxs)('div', {
          className: i().btns,
          children: [
            (0, n.jsxs)('p', {
              children: [e.selected.length, ' items selected'],
            }),
            (0, n.jsx)('button', {
              className: i().download,
              children: (0, n.jsx)('a', {
                href: e.downloadUrl,
                download: ''.concat(e.selected.length, '_planets.csv'),
                children: 'download',
              }),
            }),
            (0, n.jsx)('input', {
              type: 'submit',
              value: 'unselect all',
              onClick: () => {
                t((0, p.x_)());
              },
            }),
          ],
        });
      };
      var x = a(1163),
        j = (e) => {
          let [t, a] = (0, l.useState)(null),
            s = (0, x.useRouter)(),
            c = new URLSearchParams(s.asPath.split('?')[1] || ''),
            { id: o } = (0, r.UO)(),
            j = (0, d.v9)((e) => e.planets.selected),
            N = (0, d.I0)(),
            f = c.get('details'),
            b = f ? (+(null != o ? o : 1) - 1) * e.planets.length + +f : null,
            {
              data: k,
              isLoading: y,
              isFetching: _,
            } = (0, v.f2)(b, { skip: !b }),
            { theme: C } = (0, l.useContext)(u.N);
          (0, l.useEffect)(() => {
            k && (N((0, p.ph)(k)), a(k));
          }, [e.planets.length, k, N]);
          let w = (e) => {
            let t = e
              .map((e) =>
                ''
                  .concat(e.name, ',')
                  .concat(e.gravity, ',')
                  .concat(e.population, ',')
                  .concat(e.climate),
              )
              .join('\n');
            return ''.concat('Name,Gravity,Population,Climate\n').concat(t);
          };
          return (0, n.jsx)(n.Fragment, {
            children:
              y || _
                ? (0, n.jsx)('div', { className: i().spinner })
                : (0, n.jsxs)('div', {
                    className: ''
                      .concat(i().mainContainer, ' ')
                      .concat('light' === C ? i().lightTheme : i().darkTheme),
                    children: [
                      (0, n.jsxs)('div', {
                        className: i().detailsMain,
                        children: [
                          0 === e.planets.length
                            ? (0, n.jsx)('p', {
                                className: i().noData,
                                children: 'No Data',
                              })
                            : (0, n.jsx)('ul', {
                                className: i().main,
                                children: e.planets.map((e, t) =>
                                  (0, n.jsxs)(
                                    'div',
                                    {
                                      className: i()['checkboxes-list'],
                                      children: [
                                        (0, n.jsx)('input', {
                                          type: 'checkbox',
                                          name: 'selects',
                                          id: '',
                                          checked: !!j.find(
                                            (t) => t.name === e.name,
                                          ),
                                          onChange: (t) => {
                                            t.target.checked
                                              ? N((0, p.Pq)(e))
                                              : N((0, p.ap)(e));
                                          },
                                        }),
                                        (0, n.jsx)('li', {
                                          onClick: () => {
                                            s.push('?details='.concat(t + 1));
                                          },
                                          'data-testid': 'planet-'.concat(t),
                                          children: (0, n.jsxs)('div', {
                                            children: [
                                              (0, n.jsxs)('p', {
                                                className: i().title,
                                                children: ['Name: ', e.name],
                                              }),
                                              (0, n.jsxs)('p', {
                                                children: [
                                                  'Gravity: ',
                                                  e.gravity,
                                                ],
                                              }),
                                              (0, n.jsxs)('p', {
                                                children: [
                                                  'Population: ',
                                                  e.population,
                                                ],
                                              }),
                                              (0, n.jsxs)('p', {
                                                children: [
                                                  'Climate: ',
                                                  e.climate,
                                                ],
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    },
                                    t,
                                  ),
                                ),
                              }),
                          t && (0, n.jsx)(m, {}),
                        ],
                      }),
                      0 !== j.length &&
                        (0, n.jsx)(g, {
                          selected: j,
                          downloadUrl: (() => {
                            let e = new Blob([w(j)], {
                              type: 'text/csv;charset=utf-8;',
                            });
                            return URL.createObjectURL(e);
                          })(),
                        }),
                      (0, n.jsx)(h, {}),
                    ],
                  }),
          });
        },
        N = a(5766);
      class f extends l.Component {
        render() {
          if (!0 === this.state.error) throw Error('error from error btn');
          return (0, n.jsx)('div', {
            children: (0, n.jsx)('button', {
              className: i().errorBtn,
              onClick: this.handleError,
              children: 'throw error',
            }),
          });
        }
        constructor(e) {
          super(e),
            (0, N._)(this, 'handleError', () => {
              this.setState({ error: !0 });
            }),
            (this.state = { error: !1 });
        }
      }
      var b = () => {
          var e;
          let t = '';
          t =
            null !== (e = localStorage.getItem('previous')) && void 0 !== e
              ? e
              : '';
          let [a, n] = (0, l.useState)(t);
          return (
            (0, l.useEffect)(() => {
              localStorage.setItem('previous', a);
            }, [a]),
            { prevSearch: a, setPrevSearch: n }
          );
        },
        k = a(5652),
        y = () => {
          var e;
          let [t, a] = (0, l.useState)(''),
            [s, o] = (0, l.useState)([]),
            { setPrevSearch: h } = b(),
            { id: m } = (0, r.UO)(),
            g = (0, d.I0)(),
            {
              data: x,
              isLoading: N,
              isFetching: y,
            } = (0, v.vW)(
              null !== (e = localStorage.getItem('previous')) && void 0 !== e
                ? e
                : '',
            ),
            { data: _ } = (0, v.vW)(t),
            {
              data: C,
              isLoading: w,
              isFetching: S,
            } = (0, v.su)(void 0 === m ? 1 : +m),
            T = (0, l.useMemo)(
              () =>
                null == _
                  ? void 0
                  : _.results.map((e) => ({
                      name: e.name,
                      climate: e.climate,
                      gravity: e.gravity,
                      population: e.population,
                    })),
              [_],
            ),
            E = (0, l.useMemo)(
              () =>
                null == x
                  ? void 0
                  : x.results.map((e) => ({
                      name: e.name,
                      climate: e.climate,
                      gravity: e.gravity,
                      population: e.population,
                    })),
              [x],
            ),
            I = (0, l.useMemo)(
              () =>
                null == C
                  ? void 0
                  : C.results.map((e) => ({
                      name: e.name,
                      climate: e.climate,
                      gravity: e.gravity,
                      population: e.population,
                    })),
              [C],
            );
          (0, l.useEffect)(() => {
            let e = localStorage.getItem('previous');
            '' === e
              ? I && (o(I), g((0, p.ss)(I)))
              : e &&
                (E && o(E), g((0, k.Do)(E ? Math.ceil(E.length / 10) : 0)));
          }, [g, I, E, null == C ? void 0 : C.count]);
          let { theme: P, setTheme: D } = (0, l.useContext)(u.N);
          async function O(e) {
            e.preventDefault();
            try {
              h(t);
              let e = localStorage.getItem('previous') || t;
              await L(e);
            } catch (e) {
              return null;
            }
          }
          let L = async (e) => {
            try {
              let n;
              if ('' === t && '' === e) {
                if (((n = I), I)) {
                  var a;
                  g(
                    (0, k.Do)(
                      (null !== (a = null == C ? void 0 : C.count) &&
                      void 0 !== a
                        ? a
                        : 0) / I.length,
                    ),
                  );
                }
              } else
                '' !== t
                  ? ((n = T), g((0, k.Do)(n ? Math.ceil(n.length / 10) : 0)))
                  : '' !== e &&
                    ((n = E), g((0, k.Do)(n ? Math.ceil(n.length / 10) : 0)));
              void 0 !== n && o(n);
            } catch (e) {
              return null;
            }
          };
          return (0, n.jsxs)('div', {
            className: i().container,
            children: [
              (0, n.jsx)(f, {}),
              (0, n.jsx)('input', {
                'data-testid': 'switch',
                type: 'submit',
                onClick: () => {
                  D('light' === P ? 'dark' : 'light');
                },
                value: 'Switch to '.concat(
                  'light' === P ? 'Dark' : 'Light',
                  ' Theme',
                ),
              }),
              (0, n.jsx)(c, {
                onHandleSubmit: O,
                onHandleChange: (e) => {
                  a(e);
                },
              }),
              (0, n.jsx)('hr', {}),
              N || w || y || S
                ? (0, n.jsx)('div', {
                    className: i().spinner,
                    'data-testid': 'spinner',
                  })
                : (0, n.jsx)(j, { planets: s }),
            ],
          });
        };
    },
  },
  function (e) {
    e.O(0, [644, 335, 888, 774, 179], function () {
      return e((e.s = 8312));
    }),
      (_N_E = e.O());
  },
]);
