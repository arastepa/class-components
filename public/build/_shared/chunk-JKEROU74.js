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
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/ThemeContext/ThemeContext.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/ThemeContext/ThemeContext.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/ThemeContext/ThemeContext.tsx"
  );
  import.meta.hot.lastModified = "1723567649723.7607";
}
var ThemeContext = (0, import_react.createContext)({
  theme: "light",
  setTheme: () => {
  }
});
var ThemeProvider = ({
  children
}) => {
  _s();
  const [theme, setTheme] = (0, import_react.useState)("light");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeContext.Provider, { value: {
    theme,
    setTheme
  }, children }, void 0, false, {
    fileName: "app/ThemeContext/ThemeContext.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
};
_s(ThemeProvider, "c/tiXTWXTQispzpG//dV5FX41vQ=");
_c = ThemeProvider;
var _c;
$RefreshReg$(_c, "ThemeProvider");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  ThemeContext,
  ThemeProvider
};
//# sourceMappingURL=/build/_shared/chunk-JKEROU74.js.map
