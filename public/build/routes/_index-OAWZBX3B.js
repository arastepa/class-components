import {
  ErrorBoundary_default,
  ErrorBtn,
  Header_default,
  Main_default,
  Search_default,
  getPageCount,
  getPlanets,
  require_node
} from "/build/_shared/chunk-6RWOLRCZ.js";
import {
  ThemeContext
} from "/build/_shared/chunk-JKEROU74.js";
import {
  useLoaderData,
  useNavigation
} from "/build/_shared/chunk-SS23MDIP.js";
import "/build/_shared/chunk-U4FRFQSK.js";
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
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_index.tsx
var import_react = __toESM(require_react(), 1);
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
}
var MainPage = () => {
  _s();
  const {
    planetsData,
    pageNum
  } = useLoaderData();
  const navigation = useNavigation();
  const [pageCount, setPageCount] = (0, import_react.useState)(pageNum);
  const [planets, setPlanets] = (0, import_react.useState)(planetsData);
  const {
    theme,
    setTheme
  } = (0, import_react.useContext)(ThemeContext);
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const getResponse = async (search) => {
    try {
      let response;
      if (search === "") {
        response = planetsData;
        setPageCount(await getPageCount());
      } else if (search !== "") {
        response = await getPlanets(`https://swapi.dev/api/planets/?search=${search}`);
        setPageCount(response ? Math.ceil(response.length / 10) : 0);
      }
      if (response !== void 0) {
        setPlanets(response);
      }
    } catch (error) {
      return null;
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ErrorBoundary_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: app_module_default.container, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header_default, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 78,
      columnNumber: 9
    }, this),
    navigation.state === "loading" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: app_module_default.spinner }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 79,
      columnNumber: 43
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: app_module_default.btns, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ErrorBtn, {}, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 81,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: app_module_default.switch, onClick: toggleTheme, children: `Switch to ${theme === "light" ? "Dark" : "Light"} Theme` }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 82,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 80,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search_default, { onGetResponse: getResponse, onSetPlanets: setPlanets }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 86,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 87,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Main_default, { planets, pageCount }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 88,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 79,
      columnNumber: 84
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 77,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 76,
    columnNumber: 10
  }, this);
};
_s(MainPage, "aT7EE5ghBpKV4R8w3y+kxu/EAsE=", false, function() {
  return [useLoaderData, useNavigation];
});
_c = MainPage;
var index_default = MainPage;
var _c;
$RefreshReg$(_c, "MainPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  index_default as default
};
//# sourceMappingURL=/build/routes/_index-OAWZBX3B.js.map
