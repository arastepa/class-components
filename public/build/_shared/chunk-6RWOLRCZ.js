import {
  ThemeContext
} from "/build/_shared/chunk-JKEROU74.js";
import {
  Link,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams
} from "/build/_shared/chunk-SS23MDIP.js";
import {
  app_module_default
} from "/build/_shared/chunk-6T7VV4D3.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  createHotContext
} from "/build/_shared/chunk-ZWRKLTZN.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:@remix-run/node
var require_node = __commonJS({
  "empty-module:@remix-run/node"(exports, module) {
    module.exports = {};
  }
});

// app/components/Search.tsx
var import_react2 = __toESM(require_react(), 1);

// app/Hooks/useHandleLS.tsx
var import_react = __toESM(require_react(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/Hooks/useHandleLS.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/Hooks/useHandleLS.tsx"
  );
  import.meta.hot.lastModified = "1723567649711.7607";
}
var UseHandleLS = () => {
  _s();
  const [prevSearch, setPrevSearch] = (0, import_react.useState)(typeof window !== "undefined" ? localStorage.getItem("previous") : "");
  (0, import_react.useEffect)(() => {
    if (typeof window !== "undefined")
      localStorage.setItem("previous", prevSearch);
  }, [prevSearch]);
  return {
    prevSearch,
    setPrevSearch
  };
};
_s(UseHandleLS, "gTXoWtw2gknDFPTGTRXqBzlH3TE=");
_c = UseHandleLS;
var useHandleLS_default = UseHandleLS;
var _c;
$RefreshReg$(_c, "UseHandleLS");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Search.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Search.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Search.tsx"
  );
}
var Search = (props) => {
  _s2();
  const {
    setPrevSearch
  } = useHandleLS_default();
  const [search, setSearch] = (0, import_react2.useState)("");
  const setPlanets = props.onSetPlanets;
  (0, import_react2.useEffect)(() => {
    const previous = typeof window !== "undefined" ? localStorage.getItem("previous") : "";
    if (previous)
      setSearch(previous);
  }, [setPlanets]);
  async function handleSubmit(ev) {
    ev.preventDefault();
    try {
      setPrevSearch(search);
      await props.onGetResponse(search);
    } catch (error) {
      return null;
    }
  }
  const handleChange = (val) => {
    setSearch(val);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: app_module_default.search, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { onSubmit: handleSubmit, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", defaultValue: typeof window !== "undefined" ? localStorage.getItem("previous") ?? "" : "", onChange: (val) => {
      handleChange(val.target.value);
    }, className: app_module_default.input, name: "search", "data-testid": "search" }, void 0, false, {
      fileName: "app/components/Search.tsx",
      lineNumber: 50,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "submit", value: "find", "data-testid": "searching" }, void 0, false, {
      fileName: "app/components/Search.tsx",
      lineNumber: 54,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Search.tsx",
    lineNumber: 49,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/Search.tsx",
    lineNumber: 48,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Search.tsx",
    lineNumber: 47,
    columnNumber: 10
  }, this);
};
_s2(Search, "gvm6aN8un7QLXk4VDDusqLMpCNU=", false, function() {
  return [useHandleLS_default];
});
_c2 = Search;
var Search_default = Search;
var _c2;
$RefreshReg$(_c2, "Search");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/Services/getPlanets.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/Services/getPlanets.ts"
  );
  import.meta.hot.lastModified = "1723567649719.7607";
}
var getPlanets = async (url) => {
  const requestOptions = {
    method: "GET"
  };
  try {
    const response = await fetch(`${url}`, requestOptions);
    const result = (await response.json()).results.map(
      (planet) => ({
        name: planet.name,
        climate: planet.climate,
        gravity: planet.gravity,
        population: planet.population
      })
    );
    return result;
  } catch (error) {
    return [];
  }
};
var getPageCount = async () => {
  const requestOptions = {
    method: "GET"
  };
  try {
    const response = await fetch(
      `https://swapi.dev/api/planets/`,
      requestOptions
    );
    const result = await response.json();
    const count = result.count;
    const planets = result.results;
    const pageCount = count / planets.length;
    return pageCount;
  } catch (error) {
    return 0;
  }
};
var getPlanet = async (url) => {
  const requestOptions = {
    method: "GET"
  };
  try {
    const response = await fetch(`${url}`, requestOptions);
    const result = await response.json();
    return result;
  } catch (error) {
    return null;
  }
};

// app/components/PageNumbers.tsx
var import_react4 = __toESM(require_react(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/PageNumbers.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/PageNumbers.tsx"
  );
}
var PageNumbers = ({
  pageCount
}) => {
  _s3();
  const {
    id
  } = useParams();
  const currentPage = id ? parseInt(id[0], 10) : 1;
  const {
    theme
  } = (0, import_react4.useContext)(ThemeContext);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: app_module_default.pages, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { className: `${app_module_default.nav_link} ${theme === "light" ? app_module_default.lightTheme : app_module_default.darkTheme} ${app_module_default.pageNumber}`, to: `/page/${Math.max(currentPage - 1, 1)}`, "data-testid": "prev-page", children: "Prev" }, "prev", false, {
      fileName: "app/components/PageNumbers.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    new Array(pageCount).fill(null).map((_, index) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { className: `${app_module_default.pageNumber} ${app_module_default.desktop} ${app_module_default.pageNumber} ${theme === "light" ? app_module_default.lightTheme : app_module_default.darkTheme}`, "data-testid": `link-${index}`, to: `/page/${index + 1}`, children: index + 1 }, index, false, {
        fileName: "app/components/PageNumbers.tsx",
        lineNumber: 44,
        columnNumber: 14
      }, this);
    }),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { className: `${app_module_default.nav_link} ${app_module_default.pageNumber} ${theme === "light" ? app_module_default.lightTheme : app_module_default.darkTheme} ${app_module_default.pageNumber}`, to: `/page/${Math.min(currentPage + 1, pageCount ?? 0)}`, "data-testid": "next-page", children: "Next" }, "next", false, {
      fileName: "app/components/PageNumbers.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/PageNumbers.tsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
};
_s3(PageNumbers, "XqSR8Jtbl6tBgALGK1WX8l3O3Cw=", false, function() {
  return [useParams];
});
_c3 = PageNumbers;
var PageNumbers_default = PageNumbers;
var _c3;
$RefreshReg$(_c3, "PageNumbers");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Main.tsx
var import_react7 = __toESM(require_react(), 1);

// app/components/Details.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Details.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Details.tsx"
  );
}
var Details = ({
  details,
  setDetails
}) => {
  _s4();
  const location = useLocation();
  const navigate = useNavigate();
  if (details) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: app_module_default.details, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: app_module_default.title, children: [
        "Name: ",
        details?.name
      ] }, void 0, true, {
        fileName: "app/components/Details.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
        "Gravity: ",
        details?.gravity
      ] }, void 0, true, {
        fileName: "app/components/Details.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
        "Population: ",
        details?.population
      ] }, void 0, true, {
        fileName: "app/components/Details.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
        "Climate: ",
        details?.climate
      ] }, void 0, true, {
        fileName: "app/components/Details.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
        "Orbital Period: ",
        details?.orbital_period
      ] }, void 0, true, {
        fileName: "app/components/Details.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
        "Diameter: ",
        details?.diameter
      ] }, void 0, true, {
        fileName: "app/components/Details.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
        "Rotation Period: ",
        details?.rotation_period
      ] }, void 0, true, {
        fileName: "app/components/Details.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
        "Surface Water: ",
        details?.surface_water
      ] }, void 0, true, {
        fileName: "app/components/Details.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
        "Terrain: ",
        details?.terrain
      ] }, void 0, true, {
        fileName: "app/components/Details.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "submit", value: "close", onClick: () => {
        const {
          pathname,
          hash
        } = location;
        const newUrl = `${pathname}${hash}`;
        navigate(newUrl);
        setDetails(null);
      }, "data-testid": `closeBtn` }, void 0, false, {
        fileName: "app/components/Details.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Details.tsx",
      lineNumber: 31,
      columnNumber: 12
    }, this);
  }
};
_s4(Details, "ZmJpvzBBf8J7VCgSKqUUk0eHjAY=", false, function() {
  return [useLocation, useNavigate];
});
_c4 = Details;
var Details_default = Details;
var _c4;
$RefreshReg$(_c4, "Details");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Flyout.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Flyout.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Flyout.tsx"
  );
}
var FlyOut = (props) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: app_module_default.btns, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: [
      props.selected.length,
      " items selected"
    ] }, void 0, true, {
      fileName: "app/components/Flyout.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { className: app_module_default.download, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: props.downloadUrl, download: `${props.selected.length}_planets.csv`, children: "download" }, void 0, false, {
      fileName: "app/components/Flyout.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Flyout.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "submit", value: "unselect all", onClick: () => {
      props.onSetSelected([]);
    } }, void 0, false, {
      fileName: "app/components/Flyout.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Flyout.tsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
};
_c5 = FlyOut;
var _c5;
$RefreshReg$(_c5, "FlyOut");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Main.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Main.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s5 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Main.tsx"
  );
}
var Main = (props) => {
  _s5();
  const [details, setDetails] = (0, import_react7.useState)(null);
  const [selected, setSelected] = (0, import_react7.useState)([]);
  const [loading, setLoading] = (0, import_react7.useState)(false);
  const {
    id
  } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const detail = searchParams.get("details");
  const planetId = detail ? (+(id ?? 1) - 1) * props.planets.length + +detail : null;
  const {
    theme
  } = (0, import_react7.useContext)(ThemeContext);
  (0, import_react7.useEffect)(() => {
    setLoading(true);
    if (detail && planetId) {
      getPlanet(`https://swapi.dev/api/planets/${(+(id ?? 1) - 1) * props.planets.length + +detail}`).then((planet) => {
        if (planet)
          setDetails(planet);
        setLoading(false);
      });
    }
    setLoading(false);
  }, [props.planets.length, planetId, detail, id]);
  const generateCSV = (data) => {
    const header = "Name,Gravity,Population,Climate\n";
    const rows = data.map((planet) => `${planet.name},${planet.gravity},${planet.population},${planet.climate}`).join("\n");
    return `${header}${rows}`;
  };
  const handleCheckboxChange = (planet, checked) => {
    if (checked) {
      setSelected((prevSelected) => [...prevSelected, planet]);
    } else {
      setSelected((prevSelected) => prevSelected.filter((selectedPlanet) => selectedPlanet.name !== planet.name));
    }
  };
  const getUrl = () => {
    const csvContent = generateCSV(selected);
    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;"
    });
    const url = URL.createObjectURL(blob);
    return url;
  };
  const handleOpen = (index) => {
    navigate(`?details=${index + 1}`);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: loading ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: app_module_default.spinner }, void 0, false, {
    fileName: "app/components/Main.tsx",
    lineNumber: 78,
    columnNumber: 18
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: `${app_module_default.mainContainer} ${theme === "light" ? app_module_default.lightTheme : app_module_default.darkTheme}`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: app_module_default.detailsMain, children: [
      props.planets.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: app_module_default.noData, children: "No Data" }, void 0, false, {
        fileName: "app/components/Main.tsx",
        lineNumber: 81,
        columnNumber: 43
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { className: app_module_default.main, children: props.planets.map((planet, index) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: app_module_default["checkboxes-list"], children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "checkbox", name: "selects", "data-testid": `flyout-${index}`, id: "", checked: !!selected.find((el) => el.name === planet.name), onChange: (e) => handleCheckboxChange(planet, e.target.checked) }, void 0, false, {
            fileName: "app/components/Main.tsx",
            lineNumber: 84,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { onClick: () => {
            handleOpen(index);
          }, "data-testid": `planet-${index}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: app_module_default.title, children: [
              "Name: ",
              planet.name
            ] }, void 0, true, {
              fileName: "app/components/Main.tsx",
              lineNumber: 92,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: [
              "Gravity: ",
              planet.gravity
            ] }, void 0, true, {
              fileName: "app/components/Main.tsx",
              lineNumber: 93,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: [
              "Population: ",
              planet.population
            ] }, void 0, true, {
              fileName: "app/components/Main.tsx",
              lineNumber: 94,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: [
              "Climate: ",
              planet.climate
            ] }, void 0, true, {
              fileName: "app/components/Main.tsx",
              lineNumber: 95,
              columnNumber: 27
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/Main.tsx",
            lineNumber: 91,
            columnNumber: 25
          }, this) }, void 0, false, {
            fileName: "app/components/Main.tsx",
            lineNumber: 87,
            columnNumber: 23
          }, this)
        ] }, index, true, {
          fileName: "app/components/Main.tsx",
          lineNumber: 83,
          columnNumber: 20
        }, this);
      }) }, void 0, false, {
        fileName: "app/components/Main.tsx",
        lineNumber: 81,
        columnNumber: 86
      }, this),
      details && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Details_default, { details, setDetails }, void 0, false, {
        fileName: "app/components/Main.tsx",
        lineNumber: 102,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Main.tsx",
      lineNumber: 80,
      columnNumber: 11
    }, this),
    selected.length !== 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(FlyOut, { selected, onSetSelected: setSelected, downloadUrl: getUrl() }, void 0, false, {
      fileName: "app/components/Main.tsx",
      lineNumber: 104,
      columnNumber: 37
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(PageNumbers_default, { pageCount: props.pageCount }, void 0, false, {
      fileName: "app/components/Main.tsx",
      lineNumber: 107,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Main.tsx",
    lineNumber: 78,
    columnNumber: 59
  }, this) }, void 0, false, {
    fileName: "app/components/Main.tsx",
    lineNumber: 77,
    columnNumber: 10
  }, this);
};
_s5(Main, "tFiwBtTO7eoMK0hPIXhmQThhCxY=", false, function() {
  return [useParams, useNavigate, useSearchParams];
});
_c6 = Main;
var Main_default = Main;
var _c6;
$RefreshReg$(_c6, "Main");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/ErrorBoundary/ErrorBtn.tsx
var import_react9 = __toESM(require_react(), 1);
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/ErrorBoundary/ErrorBtn.tsx"
  );
}
var ErrorBtn = class extends import_react9.Component {
  constructor(props) {
    super(props);
    this.handleError = () => {
      this.setState({ error: true });
    };
    this.state = { error: false };
  }
  render() {
    if (this.state.error === true)
      throw new Error("error from error btn");
    return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", { className: app_module_default.errorBtn, onClick: this.handleError, children: "throw error" }, void 0, false, {
      fileName: "app/ErrorBoundary/ErrorBtn.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/ErrorBoundary/ErrorBtn.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this);
  }
};

// app/assets/star-wars.png
var star_wars_default = "/build/_assets/star-wars-46HCIYCS.png";

// app/components/Header.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Header.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Header.tsx"
  );
}
var Header = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: app_module_default.header, "data-testid": "header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: app_module_default.logo, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { src: star_wars_default, alt: "", width: 200, height: 50, "data-testid": "headerImg" }, void 0, false, {
    fileName: "app/components/Header.tsx",
    lineNumber: 25,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/Header.tsx",
    lineNumber: 24,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Header.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
};
_c7 = Header;
var Header_default = Header;
var _c7;
$RefreshReg$(_c7, "Header");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/ErrorBoundary/ErrorBoundary.tsx
var import_react10 = __toESM(require_react(), 1);
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/ErrorBoundary/ErrorBoundary.tsx"
  );
}
var ErrorBoundary = class extends import_react10.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error("error from error boundary: ", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { className: app_module_default.errorBoundary, children: "Something went wrong." }, void 0, false, {
        fileName: "app/ErrorBoundary/ErrorBoundary.tsx",
        lineNumber: 32,
        columnNumber: 14
      }, this);
    }
    return this.props.children;
  }
};
var ErrorBoundary_default = ErrorBoundary;

export {
  Search_default,
  getPlanets,
  getPageCount,
  Main_default,
  ErrorBtn,
  Header_default,
  ErrorBoundary_default,
  require_node
};
//# sourceMappingURL=/build/_shared/chunk-6RWOLRCZ.js.map
