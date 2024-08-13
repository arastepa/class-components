var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return isbot(request.headers.get("user-agent") || "") ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 40,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          let body = new PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(createReadableStreamFromReadable(body), {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 82,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          let body = new PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(createReadableStreamFromReadable(body), {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  Layout: () => Layout,
  default: () => root_default,
  links: () => links
});
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

// app/ThemeContext/ThemeContext.tsx
import { createContext, useState } from "react";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var ThemeContext = createContext({
  theme: "light",
  setTheme: () => {
  }
}), ThemeProvider = ({ children }) => {
  let [theme, setTheme] = useState("light");
  return /* @__PURE__ */ jsxDEV2(ThemeContext.Provider, { value: { theme, setTheme }, children }, void 0, !1, {
    fileName: "app/ThemeContext/ThemeContext.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
};

// css-bundle-plugin-ns:@remix-run/css-bundle
var cssBundleHref = "/build/css-bundle-3WT2MRJO.css";

// app/root.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var links = () => [
  ...cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []
  // ...
], Layout = ({ children }) => /* @__PURE__ */ jsxDEV3("html", { lang: "en", children: [
  /* @__PURE__ */ jsxDEV3("head", { children: [
    /* @__PURE__ */ jsxDEV3("meta", { charSet: "utf-8" }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV3("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV3(Meta, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 26,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV3(Links, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV3("body", { children: [
    children,
    /* @__PURE__ */ jsxDEV3(ScrollRestoration, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV3(Scripts, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 29,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/root.tsx",
  lineNumber: 22,
  columnNumber: 5
}, this), App = () => /* @__PURE__ */ jsxDEV3(ThemeProvider, { children: /* @__PURE__ */ jsxDEV3(Outlet, {}, void 0, !1, {
  fileName: "app/root.tsx",
  lineNumber: 41,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/root.tsx",
  lineNumber: 40,
  columnNumber: 5
}, this), root_default = App;

// app/routes/page.$id.tsx
var page_id_exports = {};
__export(page_id_exports, {
  MainPage: () => MainPage,
  default: () => page_id_default,
  loader: () => loader
});
import { useContext as useContext3, useState as useState5 } from "react";

// app/Styles/app.module.css
var app_module_default = { container: "app-module__container__uWkM8", input: "app-module__input__rqSGu", search: "app-module__search__nrczy", title: "app-module__title__tckYM", main: "app-module__main__ewN8b", mainContainer: "app-module__mainContainer__A67ip", detailsMain: "app-module__detailsMain__IyNeW", details: "app-module__details__YIOMc", pageNumber: "app-module__pageNumber__brbb0", active: "app-module__active__nqt-Y", errorBtn: "app-module__errorBtn__o4IKK", errorBoundary: "app-module__errorBoundary__vbpHW", spinner: "app-module__spinner__ilxLW", spin: "app-module__spin__sC7XO", header: "app-module__header__9p9fY", errorPage: "app-module__errorPage__WVbQg", pages: "app-module__pages__UkK7-", "checkboxes-list": "app-module__checkboxes-list__07642", btns: "app-module__btns__a-1DS", lightTheme: "app-module__lightTheme__9-arQ", darkTheme: "app-module__darkTheme__TSZl-", download: "app-module__download__5lDRv" };

// app/components/Search.tsx
import { useEffect as useEffect2, useState as useState3 } from "react";

// app/Hooks/useHandleLS.tsx
import { useEffect, useState as useState2 } from "react";
var UseHandleLS = () => {
  let [prevSearch, setPrevSearch] = useState2(
    typeof window < "u" ? localStorage.getItem("previous") : ""
  );
  return useEffect(() => {
    typeof window < "u" && localStorage.setItem("previous", prevSearch);
  }, [prevSearch]), { prevSearch, setPrevSearch };
}, useHandleLS_default = UseHandleLS;

// app/components/Search.tsx
import { Fragment, jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var Search = (props) => {
  let { setPrevSearch } = useHandleLS_default(), [search, setSearch] = useState3(""), setPlanets = props.onSetPlanets;
  useEffect2(() => {
    let previous = typeof window < "u" ? localStorage.getItem("previous") : "";
    previous && setSearch(previous);
  }, [setPlanets]);
  async function handleSubmit(ev) {
    ev.preventDefault();
    try {
      setPrevSearch(search), await props.onGetResponse(search);
    } catch {
      return null;
    }
  }
  let handleChange = (val) => {
    setSearch(val);
  };
  return /* @__PURE__ */ jsxDEV4(Fragment, { children: /* @__PURE__ */ jsxDEV4("div", { className: app_module_default.search, children: /* @__PURE__ */ jsxDEV4("form", { onSubmit: handleSubmit, children: [
    /* @__PURE__ */ jsxDEV4(
      "input",
      {
        type: "text",
        defaultValue: typeof window < "u" ? localStorage.getItem("previous") ?? "" : "",
        onChange: (val) => {
          handleChange(val.target.value);
        },
        className: app_module_default.input,
        name: "search",
        "data-testid": "search"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Search.tsx",
        lineNumber: 37,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ jsxDEV4("input", { type: "submit", value: "find", "data-testid": "searching" }, void 0, !1, {
      fileName: "app/components/Search.tsx",
      lineNumber: 51,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Search.tsx",
    lineNumber: 36,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/Search.tsx",
    lineNumber: 35,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Search.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}, Search_default = Search;

// app/components/PageNumbers.tsx
import { Link } from "@remix-run/react";
import { useContext } from "react";
import { useParams } from "@remix-run/react";
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var PageNumbers = ({ pageCount }) => {
  let { id } = useParams(), currentPage = id ? parseInt(id[0], 10) : 1, { theme } = useContext(ThemeContext);
  return /* @__PURE__ */ jsxDEV5("div", { className: app_module_default.pages, children: [
    /* @__PURE__ */ jsxDEV5(
      Link,
      {
        className: `${app_module_default.nav_link} ${theme === "light" ? app_module_default.lightTheme : app_module_default.darkTheme} ${app_module_default.pageNumber}`,
        to: `/page/${Math.max(currentPage - 1, 1)}`,
        "data-testid": "prev-page",
        children: "Prev"
      },
      "prev",
      !1,
      {
        fileName: "app/components/PageNumbers.tsx",
        lineNumber: 14,
        columnNumber: 7
      },
      this
    ),
    new Array(pageCount).fill(null).map((_, index) => /* @__PURE__ */ jsxDEV5(
      Link,
      {
        className: `${app_module_default.pageNumber} ${app_module_default.desktop} ${app_module_default.pageNumber} ${theme === "light" ? app_module_default.lightTheme : app_module_default.darkTheme}`,
        "data-testid": `link-${index}`,
        to: `/page/${index + 1}`,
        children: index + 1
      },
      index,
      !1,
      {
        fileName: "app/components/PageNumbers.tsx",
        lineNumber: 25,
        columnNumber: 11
      },
      this
    )),
    /* @__PURE__ */ jsxDEV5(
      Link,
      {
        className: `${app_module_default.nav_link} ${app_module_default.pageNumber} ${theme === "light" ? app_module_default.lightTheme : app_module_default.darkTheme} ${app_module_default.pageNumber}`,
        to: `/page/${Math.min(currentPage + 1, pageCount ?? 0)}`,
        "data-testid": "next-page",
        children: "Next"
      },
      "next",
      !1,
      {
        fileName: "app/components/PageNumbers.tsx",
        lineNumber: 36,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/PageNumbers.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}, PageNumbers_default = PageNumbers;

// app/components/Main.tsx
import { useContext as useContext2, useEffect as useEffect3, useState as useState4 } from "react";

// app/components/Details.tsx
import { useLocation, useNavigate } from "@remix-run/react";
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var Details = ({
  details,
  setDetails
}) => {
  let location = useLocation(), navigate = useNavigate();
  if (details)
    return /* @__PURE__ */ jsxDEV6("div", { className: app_module_default.details, children: [
      /* @__PURE__ */ jsxDEV6("p", { className: app_module_default.title, children: [
        "Name: ",
        details?.name
      ] }, void 0, !0, {
        fileName: "app/components/Details.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV6("p", { children: [
        "Gravity: ",
        details?.gravity
      ] }, void 0, !0, {
        fileName: "app/components/Details.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV6("p", { children: [
        "Population: ",
        details?.population
      ] }, void 0, !0, {
        fileName: "app/components/Details.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV6("p", { children: [
        "Climate: ",
        details?.climate
      ] }, void 0, !0, {
        fileName: "app/components/Details.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV6("p", { children: [
        "Orbital Period: ",
        details?.orbital_period
      ] }, void 0, !0, {
        fileName: "app/components/Details.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV6("p", { children: [
        "Diameter: ",
        details?.diameter
      ] }, void 0, !0, {
        fileName: "app/components/Details.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV6("p", { children: [
        "Rotation Period: ",
        details?.rotation_period
      ] }, void 0, !0, {
        fileName: "app/components/Details.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV6("p", { children: [
        "Surface Water: ",
        details?.surface_water
      ] }, void 0, !0, {
        fileName: "app/components/Details.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV6("p", { children: [
        "Terrain: ",
        details?.terrain
      ] }, void 0, !0, {
        fileName: "app/components/Details.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV6(
        "input",
        {
          type: "submit",
          value: "close",
          onClick: () => {
            let { pathname, hash } = location, newUrl = `${pathname}${hash}`;
            navigate(newUrl), setDetails(null);
          },
          "data-testid": "closeBtn"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Details.tsx",
          lineNumber: 26,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/Details.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this);
}, Details_default = Details;

// app/components/Flyout.tsx
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var FlyOut = (props) => /* @__PURE__ */ jsxDEV7("div", { className: app_module_default.btns, children: [
  /* @__PURE__ */ jsxDEV7("p", { children: [
    props.selected.length,
    " items selected"
  ] }, void 0, !0, {
    fileName: "app/components/Flyout.tsx",
    lineNumber: 11,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV7("button", { className: app_module_default.download, children: /* @__PURE__ */ jsxDEV7(
    "a",
    {
      href: props.downloadUrl,
      download: `${props.selected.length}_planets.csv`,
      children: "download"
    },
    void 0,
    !1,
    {
      fileName: "app/components/Flyout.tsx",
      lineNumber: 13,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/Flyout.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV7(
    "input",
    {
      type: "submit",
      value: "unselect all",
      onClick: () => {
        props.onSetSelected([]);
      }
    },
    void 0,
    !1,
    {
      fileName: "app/components/Flyout.tsx",
      lineNumber: 20,
      columnNumber: 7
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/components/Flyout.tsx",
  lineNumber: 10,
  columnNumber: 5
}, this);

// app/components/Main.tsx
import { useNavigate as useNavigate2, useParams as useParams2, useSearchParams } from "@remix-run/react";

// app/Services/getPlanets.ts
var getPlanets = async (url) => {
  let requestOptions = {
    method: "GET"
  };
  try {
    return (await (await fetch(`${url}`, requestOptions)).json()).results.map(
      (planet) => ({
        name: planet.name,
        climate: planet.climate,
        gravity: planet.gravity,
        population: planet.population
      })
    );
  } catch {
    return [];
  }
}, getPageCount = async () => {
  let requestOptions = {
    method: "GET"
  };
  try {
    let result = await (await fetch(
      "https://swapi.dev/api/planets/",
      requestOptions
    )).json(), count = result.count, planets = result.results;
    return count / planets.length;
  } catch {
    return 0;
  }
}, getPlanet = async (url) => {
  let requestOptions = {
    method: "GET"
  };
  try {
    return await (await fetch(`${url}`, requestOptions)).json();
  } catch {
    return null;
  }
};

// app/components/Main.tsx
import { Fragment as Fragment2, jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
var Main = (props) => {
  let [details, setDetails] = useState4(null), [selected, setSelected] = useState4([]), [loading, setLoading] = useState4(!1), { id } = useParams2(), navigate = useNavigate2(), [searchParams] = useSearchParams(), detail = searchParams.get("details"), planetId = detail ? (+(id ?? 1) - 1) * props.planets.length + +detail : null, { theme } = useContext2(ThemeContext);
  useEffect3(() => {
    setLoading(!0), detail && planetId && getPlanet(
      `https://swapi.dev/api/planets/${(+(id ?? 1) - 1) * props.planets.length + +detail}`
    ).then((planet) => {
      planet && setDetails(planet), setLoading(!1);
    }), setLoading(!1);
  }, [props.planets.length, planetId, detail, id]);
  let generateCSV = (data) => {
    let header = `Name,Gravity,Population,Climate
`, rows = data.map(
      (planet) => `${planet.name},${planet.gravity},${planet.population},${planet.climate}`
    ).join(`
`);
    return `${header}${rows}`;
  }, handleCheckboxChange = (planet, checked) => {
    setSelected(checked ? (prevSelected) => [...prevSelected, planet] : (prevSelected) => prevSelected.filter(
      (selectedPlanet) => selectedPlanet.name !== planet.name
    ));
  }, getUrl = () => {
    let csvContent = generateCSV(selected), blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    return URL.createObjectURL(blob);
  }, handleOpen = (index) => {
    navigate(`?details=${index + 1}`);
  };
  return /* @__PURE__ */ jsxDEV8(Fragment2, { children: loading ? /* @__PURE__ */ jsxDEV8("div", { className: app_module_default.spinner }, void 0, !1, {
    fileName: "app/components/Main.tsx",
    lineNumber: 74,
    columnNumber: 7
  }, this) : /* @__PURE__ */ jsxDEV8(
    "div",
    {
      className: `${app_module_default.mainContainer} ${theme === "light" ? app_module_default.lightTheme : app_module_default.darkTheme}`,
      children: [
        /* @__PURE__ */ jsxDEV8("div", { className: app_module_default.detailsMain, children: [
          props.planets.length === 0 ? /* @__PURE__ */ jsxDEV8("p", { className: app_module_default.noData, children: "No Data" }, void 0, !1, {
            fileName: "app/components/Main.tsx",
            lineNumber: 81,
            columnNumber: 11
          }, this) : /* @__PURE__ */ jsxDEV8("ul", { className: app_module_default.main, children: props.planets.map((planet, index) => /* @__PURE__ */ jsxDEV8("div", { className: app_module_default["checkboxes-list"], children: [
            /* @__PURE__ */ jsxDEV8(
              "input",
              {
                type: "checkbox",
                name: "selects",
                "data-testid": `flyout-${index}`,
                id: "",
                checked: !!selected.find((el) => el.name === planet.name),
                onChange: (e) => handleCheckboxChange(planet, e.target.checked)
              },
              void 0,
              !1,
              {
                fileName: "app/components/Main.tsx",
                lineNumber: 87,
                columnNumber: 23
              },
              this
            ),
            /* @__PURE__ */ jsxDEV8(
              "li",
              {
                onClick: () => {
                  handleOpen(index);
                },
                "data-testid": `planet-${index}`,
                children: /* @__PURE__ */ jsxDEV8("div", { children: [
                  /* @__PURE__ */ jsxDEV8("p", { className: app_module_default.title, children: [
                    "Name: ",
                    planet.name
                  ] }, void 0, !0, {
                    fileName: "app/components/Main.tsx",
                    lineNumber: 106,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ jsxDEV8("p", { children: [
                    "Gravity: ",
                    planet.gravity
                  ] }, void 0, !0, {
                    fileName: "app/components/Main.tsx",
                    lineNumber: 107,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ jsxDEV8("p", { children: [
                    "Population: ",
                    planet.population
                  ] }, void 0, !0, {
                    fileName: "app/components/Main.tsx",
                    lineNumber: 108,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ jsxDEV8("p", { children: [
                    "Climate: ",
                    planet.climate
                  ] }, void 0, !0, {
                    fileName: "app/components/Main.tsx",
                    lineNumber: 109,
                    columnNumber: 27
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/Main.tsx",
                  lineNumber: 105,
                  columnNumber: 25
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/components/Main.tsx",
                lineNumber: 99,
                columnNumber: 23
              },
              this
            )
          ] }, index, !0, {
            fileName: "app/components/Main.tsx",
            lineNumber: 86,
            columnNumber: 17
          }, this)) }, void 0, !1, {
            fileName: "app/components/Main.tsx",
            lineNumber: 83,
            columnNumber: 11
          }, this),
          details && /* @__PURE__ */ jsxDEV8(Details_default, { details, setDetails }, void 0, !1, {
            fileName: "app/components/Main.tsx",
            lineNumber: 117,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Main.tsx",
          lineNumber: 79,
          columnNumber: 11
        }, this),
        selected.length !== 0 && /* @__PURE__ */ jsxDEV8(
          FlyOut,
          {
            selected,
            onSetSelected: setSelected,
            downloadUrl: getUrl()
          },
          void 0,
          !1,
          {
            fileName: "app/components/Main.tsx",
            lineNumber: 120,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ jsxDEV8(PageNumbers_default, { pageCount: props.pageCount }, void 0, !1, {
          fileName: "app/components/Main.tsx",
          lineNumber: 126,
          columnNumber: 11
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Main.tsx",
      lineNumber: 76,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/Main.tsx",
    lineNumber: 72,
    columnNumber: 5
  }, this);
}, Main_default = Main;

// app/ErrorBoundary/ErrorBtn.tsx
import { Component } from "react";
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
var ErrorBtn = class extends Component {
  constructor(props) {
    super(props);
    this.handleError = () => {
      this.setState({ error: !0 });
    };
    this.state = { error: !1 };
  }
  render() {
    if (this.state.error === !0)
      throw new Error("error from error btn");
    return /* @__PURE__ */ jsxDEV9("div", { children: /* @__PURE__ */ jsxDEV9("button", { className: app_module_default.errorBtn, onClick: this.handleError, children: "throw error" }, void 0, !1, {
      fileName: "app/ErrorBoundary/ErrorBtn.tsx",
      lineNumber: 20,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/ErrorBoundary/ErrorBtn.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this);
  }
};

// app/assets/star-wars.png
var star_wars_default = "/build/_assets/star-wars-46HCIYCS.png";

// app/components/Header.tsx
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
var Header = () => /* @__PURE__ */ jsxDEV10("div", { className: app_module_default.header, "data-testid": "header", children: /* @__PURE__ */ jsxDEV10("div", { className: app_module_default.logo, children: /* @__PURE__ */ jsxDEV10(
  "img",
  {
    src: star_wars_default,
    alt: "",
    width: 200,
    height: 50,
    "data-testid": "headerImg"
  },
  void 0,
  !1,
  {
    fileName: "app/components/Header.tsx",
    lineNumber: 8,
    columnNumber: 9
  },
  this
) }, void 0, !1, {
  fileName: "app/components/Header.tsx",
  lineNumber: 7,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/Header.tsx",
  lineNumber: 6,
  columnNumber: 5
}, this), Header_default = Header;

// app/ErrorBoundary/ErrorBoundary.tsx
import { Component as Component2 } from "react";
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
var ErrorBoundary = class extends Component2 {
  constructor(props) {
    super(props), this.state = { hasError: !1 };
  }
  static getDerivedStateFromError() {
    return { hasError: !0 };
  }
  componentDidCatch(error, errorInfo) {
    console.error("error from error boundary: ", error, errorInfo);
  }
  render() {
    return this.state.hasError ? /* @__PURE__ */ jsxDEV11("h1", { className: app_module_default.errorBoundary, children: "Something went wrong." }, void 0, !1, {
      fileName: "app/ErrorBoundary/ErrorBoundary.tsx",
      lineNumber: 21,
      columnNumber: 14
    }, this) : this.props.children;
  }
}, ErrorBoundary_default = ErrorBoundary;

// app/routes/page.$id.tsx
import { json } from "@remix-run/node";
import { useLoaderData, useNavigation } from "@remix-run/react";
import { Fragment as Fragment3, jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
var loader = async ({ params }) => {
  let id = params.id, planetsData = await getPlanets(
    `https://swapi.dev/api/planets/?search=&page=${id || 1}`
  ), pageNum = await getPageCount();
  return json({ planetsData, pageNum });
}, MainPage = () => {
  let { planetsData, pageNum } = useLoaderData(), navigation = useNavigation(), [pageCount, setPageCount] = useState5(pageNum), [planets, setPlanets] = useState5(planetsData), { theme, setTheme } = useContext3(ThemeContext), toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }, getResponse = async (search) => {
    try {
      let response;
      search === "" ? (response = planetsData, setPageCount(await getPageCount())) : search !== "" && (response = await getPlanets(
        `https://swapi.dev/api/planets/?search=${search}`
      ), setPageCount(response ? Math.ceil(response.length / 10) : 0)), response !== void 0 && setPlanets(response);
    } catch {
      return null;
    }
  };
  return /* @__PURE__ */ jsxDEV12(ErrorBoundary_default, { children: /* @__PURE__ */ jsxDEV12("div", { className: app_module_default.container, children: [
    /* @__PURE__ */ jsxDEV12(Header_default, {}, void 0, !1, {
      fileName: "app/routes/page.$id.tsx",
      lineNumber: 60,
      columnNumber: 9
    }, this),
    navigation.state === "loading" ? /* @__PURE__ */ jsxDEV12("div", { className: app_module_default.spinner }, void 0, !1, {
      fileName: "app/routes/page.$id.tsx",
      lineNumber: 62,
      columnNumber: 9
    }, this) : /* @__PURE__ */ jsxDEV12(Fragment3, { children: [
      /* @__PURE__ */ jsxDEV12("div", { className: app_module_default.btns, children: [
        /* @__PURE__ */ jsxDEV12(ErrorBtn, {}, void 0, !1, {
          fileName: "app/routes/page.$id.tsx",
          lineNumber: 66,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV12("button", { className: app_module_default.switch, onClick: toggleTheme, children: `Switch to ${theme === "light" ? "Dark" : "Light"} Theme` }, void 0, !1, {
          fileName: "app/routes/page.$id.tsx",
          lineNumber: 67,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/page.$id.tsx",
        lineNumber: 65,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV12(Search_default, { onGetResponse: getResponse, onSetPlanets: setPlanets }, void 0, !1, {
        fileName: "app/routes/page.$id.tsx",
        lineNumber: 71,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV12("hr", {}, void 0, !1, {
        fileName: "app/routes/page.$id.tsx",
        lineNumber: 72,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV12(Main_default, { planets, pageCount }, void 0, !1, {
        fileName: "app/routes/page.$id.tsx",
        lineNumber: 73,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/page.$id.tsx",
      lineNumber: 64,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/page.$id.tsx",
    lineNumber: 59,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/page.$id.tsx",
    lineNumber: 58,
    columnNumber: 5
  }, this);
}, page_id_default = MainPage;

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  MainPage: () => MainPage2,
  default: () => index_default,
  loader: () => loader2
});
import { useContext as useContext4, useState as useState6 } from "react";
import { json as json2 } from "@remix-run/node";
import { useLoaderData as useLoaderData2, useNavigation as useNavigation2 } from "@remix-run/react";
import { Fragment as Fragment4, jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
var loader2 = async ({ params }) => {
  let id = params.id, planetsData = await getPlanets(
    `https://swapi.dev/api/planets/?search=&page=${id || 1}`
  ), pageNum = await getPageCount();
  return json2({ planetsData, pageNum });
}, MainPage2 = () => {
  let { planetsData, pageNum } = useLoaderData2(), navigation = useNavigation2(), [pageCount, setPageCount] = useState6(pageNum), [planets, setPlanets] = useState6(planetsData), { theme, setTheme } = useContext4(ThemeContext), toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }, getResponse = async (search) => {
    try {
      let response;
      search === "" ? (response = planetsData, setPageCount(await getPageCount())) : search !== "" && (response = await getPlanets(
        `https://swapi.dev/api/planets/?search=${search}`
      ), setPageCount(response ? Math.ceil(response.length / 10) : 0)), response !== void 0 && setPlanets(response);
    } catch {
      return null;
    }
  };
  return /* @__PURE__ */ jsxDEV13(ErrorBoundary_default, { children: /* @__PURE__ */ jsxDEV13("div", { className: app_module_default.container, children: [
    /* @__PURE__ */ jsxDEV13(Header_default, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 60,
      columnNumber: 9
    }, this),
    navigation.state === "loading" ? /* @__PURE__ */ jsxDEV13("div", { className: app_module_default.spinner }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 62,
      columnNumber: 9
    }, this) : /* @__PURE__ */ jsxDEV13(Fragment4, { children: [
      /* @__PURE__ */ jsxDEV13("div", { className: app_module_default.btns, children: [
        /* @__PURE__ */ jsxDEV13(ErrorBtn, {}, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 66,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV13("button", { className: app_module_default.switch, onClick: toggleTheme, children: `Switch to ${theme === "light" ? "Dark" : "Light"} Theme` }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 67,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 65,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV13(Search_default, { onGetResponse: getResponse, onSetPlanets: setPlanets }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 71,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV13("hr", {}, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 72,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV13(Main_default, { planets, pageCount }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 73,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 64,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 59,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 58,
    columnNumber: 5
  }, this);
}, index_default = MainPage2;

// app/routes/$.tsx
var __exports = {};
__export(__exports, {
  default: () => __default
});
import { jsxDEV as jsxDEV14 } from "react/jsx-dev-runtime";
var ErrorPage = () => /* @__PURE__ */ jsxDEV14("div", { className: app_module_default.errorPage, children: "404 not found" }, void 0, !1, {
  fileName: "app/routes/$.tsx",
  lineNumber: 4,
  columnNumber: 10
}, this), __default = ErrorPage;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-ID42QYHM.js", imports: ["/build/_shared/chunk-O4BRYNJ4.js", "/build/_shared/chunk-SS23MDIP.js", "/build/_shared/chunk-U4FRFQSK.js", "/build/_shared/chunk-XGOTYLZ5.js", "/build/_shared/chunk-7M6SC7J5.js", "/build/_shared/chunk-ZWRKLTZN.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-NFR5YXZQ.js", imports: ["/build/_shared/chunk-JKEROU74.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/$": { id: "routes/$", parentId: "root", path: "*", index: void 0, caseSensitive: void 0, module: "/build/routes/$-JPPYIUNB.js", imports: ["/build/_shared/chunk-6T7VV4D3.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-OAWZBX3B.js", imports: ["/build/_shared/chunk-6RWOLRCZ.js", "/build/_shared/chunk-6T7VV4D3.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/page.$id": { id: "routes/page.$id", parentId: "root", path: "page/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/page.$id-3N6ZN6YP.js", imports: ["/build/_shared/chunk-6RWOLRCZ.js", "/build/_shared/chunk-6T7VV4D3.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "30af1df6", hmr: { runtime: "/build/_shared/chunk-ZWRKLTZN.js", timestamp: 1723567843553 }, url: "/build/manifest-30AF1DF6.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, unstable_singleFetch: !1, unstable_lazyRouteDiscovery: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/page.$id": {
    id: "routes/page.$id",
    parentId: "root",
    path: "page/:id",
    index: void 0,
    caseSensitive: void 0,
    module: page_id_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/$": {
    id: "routes/$",
    parentId: "root",
    path: "*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
