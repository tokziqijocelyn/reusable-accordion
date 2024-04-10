"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.tsx
var accordion_exports = {};
__export(accordion_exports, {
  default: () => accordion_default
});
module.exports = __toCommonJS(accordion_exports);
var Component = __toESM(require("@radix-ui/react-accordion"));
var import_react = __toESM(require("react"));
var import_lucide_react = require("lucide-react");

// lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var accordionVariants = cn("bg-header", {
  variants: {
    variant: {
      default: "text-contentText",
      disabled: "text-disabledText "
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
var Accordion = (props) => {
  const {
    data,
    single = "single" /* Single */
    // icon
  } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component.Root, { type: single, className: "rounded-md ", collapsible: true, children: data.map((item) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, { value: props.data.header, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, { children: props.data.content }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: props.data.content }) })
    ] });
  }) });
};
var AccordionItem = import_react.default.forwardRef(
  (_a, forwardedRef) => {
    var _b = _a, { children, className } = _b, props = __objRest(_b, ["children", "className"]);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Component.Item,
      __spreadProps(__spreadValues({
        className: cn(
          "mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px]",
          className
        )
      }, props), {
        ref: forwardedRef,
        value: props.value,
        children
      })
    );
  }
);
var AccordionTrigger = import_react.default.forwardRef((_a, forwardedRef) => {
  var _b = _a, { children, className } = _b, props = __objRest(_b, ["children", "className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component.Header, { className: "flex", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    Component.Trigger,
    __spreadProps(__spreadValues({
      className: cn(
        "bg-red-300 py-3 px-2 flex flex-row justify-between min-h-0 w-full group",
        className
      )
    }, props), {
      ref: forwardedRef,
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_lucide_react.ChevronDown,
          {
            className: "text-contentText ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180",
            "aria-hidden": true
          }
        )
      ]
    })
  ) });
});
var AccordionContent = import_react.default.forwardRef((_a, forwardedRef) => {
  var _b = _a, { children, className } = _b, props = __objRest(_b, ["children", "className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    Component.Content,
    __spreadProps(__spreadValues({
      className: cn(
        "bg-white p-1 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]",
        className
      )
    }, props), {
      ref: forwardedRef,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-contentBar h-full w-1" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "py-[15px] px-5", children })
      ]
    })
  );
});
var accordion_default = Accordion;
//# sourceMappingURL=index.js.map