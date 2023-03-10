import { inject, useSSRContext, ref, getCurrentInstance, computed, defineComponent, createVNode, resolveDynamicComponent, mergeProps, unref, withCtx, renderSlot, watch, onScopeDispose } from 'vue';
import { ssrRenderVNode, ssrRenderSlot } from 'vue/server-renderer';
import { nanoid } from 'nanoid';
import { kebabCase } from 'scule';
import { defu } from 'defu';

function set(object, paths, value, splitter = ".") {
  var _a;
  if (typeof paths === "string") {
    paths = paths.split(splitter);
  }
  const limit = paths.length - 1;
  for (let i = 0; i < limit; ++i) {
    const key2 = paths[i];
    object = (_a = object[key2]) != null ? _a : object[key2] = {};
  }
  const key = paths[limit];
  object[key] = value;
}
function get(object, paths, splitter = ".") {
  var _a;
  if (typeof paths === "string") {
    paths = paths.split(splitter);
  }
  const limit = paths.length - 1;
  for (let i = 0; i < limit; ++i) {
    const key2 = paths[i];
    object = (_a = object[key2]) != null ? _a : object[key2] = {};
  }
  const key = paths[limit];
  return object[key];
}
function walkTokens(obj, cb, paths = []) {
  let result = {};
  if (obj.value) {
    result = cb(obj, result, paths);
  } else {
    for (const k in obj) {
      if (obj[k] && typeof obj[k] === "object") {
        result[k] = walkTokens(obj[k], cb, [...paths, k]);
      }
    }
  }
  return result;
}
function normalizeConfig(obj, mqKeys, removeSchemaKeys = false) {
  let result = {};
  if (obj.value) {
    result = obj;
  } else {
    for (const k in obj) {
      if (k === "$schema") {
        if (!removeSchemaKeys) {
          result[k] = obj[k];
        }
        continue;
      }
      if (k === "utils") {
        result[k] = obj[k];
        continue;
      }
      if (obj[k] && (typeof obj[k] === "string" || typeof obj[k] === "number" || typeof obj[k] === "boolean" || typeof obj[k] === "symbol" || typeof obj[k] === "bigint")) {
        result[k] = { value: obj[k] };
      } else if (obj[k] && typeof obj[k] === "object") {
        const keys = Object.keys(obj[k]);
        if (keys.includes("initial") && keys.some((key) => mqKeys.includes(key))) {
          result[k] = { value: obj[k] };
          continue;
        }
        result[k] = normalizeConfig(obj[k], mqKeys, removeSchemaKeys);
      }
    }
  }
  return result;
}
const referencesRegex = new RegExp(
  "\\{([^}]+)\\}",
  "g"
);
const keyRegex = /{(.*)}/g;
const DARK = "@dark";
const LIGHT = "@light";
const INITIAL = "@initial";
const responsiveMediaQueryRegex = /^(:|\.)/;
function createTokensHelper(theme = {}, options = {}) {
  const defaultHelperOptions = {
    key: "attributes.variable",
    onNotFound: false,
    ...options
  };
  function $tokens(path = void 0, options2) {
    if (!path) {
      return unref(theme);
    }
    const $tokensOptions = { ...defaultHelperOptions, ...options2 };
    const { key, onNotFound } = $tokensOptions;
    const token = get(unref(theme), path);
    if (!token && typeof onNotFound === "function") {
      onNotFound(path, $tokensOptions);
      return;
    }
    return key ? token ? token[key] ? token[key] : get(token, key) : token : token;
  }
  return $tokens.bind(this);
}
function pathToVarName(path) {
  if (Array.isArray(path)) {
    path = path.join("-");
  }
  if (path.charAt(0) === "{" && path.charAt(path.length - 1) === "}") {
    path = path.substr(1, path.length - 2);
  }
  return `--${path.split(".").join("-")}`;
}
function resolveCssProperty(property, value, style, selectors, ctx, loc) {
  const directive = resolveCustomDirectives(property, value, selectors, ctx, loc);
  if (directive) {
    return directive;
  }
  if (ctx.utils[property]) {
    if (typeof ctx.utils[property] === "function") {
      return ctx.utils[property](value);
    }
    return value ? ctx.utils[property] : {};
  }
  value = castValues(property, value, ctx, loc);
  return {
    [property]: value
  };
}
function castValues(property, value, ctx, loc) {
  if (Array.isArray(value) || typeof value === "string" || typeof value === "number") {
    if (Array.isArray(value)) {
      value = value.map((v) => castValue(property, v, ctx, loc)).join(",");
    } else {
      value = castValue(property, value, ctx, loc);
    }
  }
  return value;
}
function castValue(property, value, ctx, loc) {
  if (typeof value === "number") {
    return value;
  }
  if (value.match(referencesRegex)) {
    value = resolveReferences(property, value, ctx, loc);
  }
  if (value === "{}") {
    return "";
  }
  return value;
}
function resolveReferences(_, value, ctx, loc) {
  if (!(typeof value === "string")) {
    return value;
  }
  value = value.replace(
    referencesRegex,
    (_2, tokenPath) => {
      const token = ctx.$tokens(tokenPath, { key: void 0, loc });
      const tokenValue = typeof token === "string" ? token : (token == null ? void 0 : token.variable) || (token == null ? void 0 : token.value);
      if (!tokenValue) {
        return `var(${pathToVarName(tokenPath)})`;
      }
      return tokenValue;
    }
  );
  return value;
}
function resolveCustomDirectives(property, value, selectors, ctx, loc) {
  if (property.startsWith("@")) {
    const resolveColorScheme = (scheme) => {
      scheme = ctx.options.colorSchemeMode === "class" ? `:root.${scheme}` : `@media (prefers-color-scheme: ${scheme})`;
      const isMedia = scheme.startsWith("@media");
      if (ctx == null ? void 0 : ctx.runtime) {
        return {
          "@media": {
            [scheme]: value
          }
        };
      }
      return {
        [isMedia ? scheme : `${scheme} &`]: value
      };
    };
    if (property === DARK) {
      return resolveColorScheme("dark");
    }
    if (property === LIGHT) {
      return resolveColorScheme("light");
    }
    if (property === INITIAL) {
      const token = ctx.$tokens("media.initial", { key: "value", onNotFound: false, loc });
      return {
        [`@media${token ? ` ${token}` : ""}`]: value
      };
    }
    const mediaQueries = ctx.$tokens("media", { key: void 0, loc });
    if (mediaQueries) {
      const query = property.replace("@", "");
      if (mediaQueries[query]) {
        return {
          [`@media ${mediaQueries[query].value}`]: value
        };
      }
    }
    return {
      [property]: value
    };
  }
}
const comma = /\s*,\s*(?![^()]*\))/;
const getResolvedSelectors = (parentSelectors, nestedSelectors) => parentSelectors.reduce(
  (resolvedSelectors, parentSelector) => {
    resolvedSelectors.push(
      ...nestedSelectors.map(
        (selector) => selector.includes("&") ? selector.replace(
          /&/g,
          /[ +>|~]/.test(parentSelector) && /&.*&/.test(selector) ? `:is(${parentSelector})` : parentSelector
        ) : `${parentSelector} ${selector}`
      )
    );
    return resolvedSelectors;
  },
  []
);
const { prototype: { toString } } = Object;
const stringify = (value, replacer = void 0) => {
  const used = /* @__PURE__ */ new WeakSet();
  const write = (cssText, selectors, conditions, name, data, isAtRuleLike) => {
    for (let i = 0; i < conditions.length; ++i) {
      if (!used.has(conditions[i])) {
        used.add(conditions[i]);
        cssText += `${conditions[i]}{`;
      }
    }
    if (selectors.length && !used.has(selectors)) {
      used.add(selectors);
      cssText += `${selectors}{`;
    }
    if (isAtRuleLike) {
      name = `${name} `;
    } else {
      name = `${kebabCase(name)}:`;
    }
    cssText += `${name + String(data)};`;
    return cssText;
  };
  const parse = (style, selectors, conditions, prevName, prevData) => {
    let cssText = "";
    for (const name in style) {
      const isAtRuleLike = name.charCodeAt(0) === 64;
      for (const data of isAtRuleLike && Array.isArray(style[name]) ? style[name] : [style[name]]) {
        if (replacer && (name !== prevName || data !== prevData)) {
          const next = replacer(name, data, style, selectors);
          if (next !== null) {
            cssText += typeof next === "object" && next ? parse(next, selectors, conditions, name, data) : next == null ? "" : next;
            continue;
          }
        }
        const isObjectLike = typeof data === "object" && data && data.toString === toString;
        if (isObjectLike) {
          if (used.has(selectors)) {
            used.delete(selectors);
            cssText += "}";
          }
          const usedName = Object(name);
          let nextSelectors;
          if (isAtRuleLike) {
            nextSelectors = selectors;
            cssText += parse(
              data,
              nextSelectors,
              conditions.concat(usedName)
            );
          } else {
            nextSelectors = selectors.length ? getResolvedSelectors(selectors, name.split(comma)) : name.split(comma);
            cssText += parse(
              data,
              nextSelectors,
              conditions
            );
          }
          if (used.has(usedName)) {
            used.delete(usedName);
            cssText += "}";
          }
          if (used.has(nextSelectors)) {
            used.delete(nextSelectors);
            cssText += "}";
          }
        } else {
          cssText = write(cssText, selectors, conditions, name, data, isAtRuleLike);
        }
      }
    }
    return cssText;
  };
  return parse(value, [], []);
};
const HYDRATION_SELECTOR = ".phy[--]";
function usePinceauRuntimeSheet($tokens, initialUtils = {}, colorSchemeMode, appId) {
  const sheet = ref();
  const utils2 = ref(initialUtils);
  const cache = {};
  const stringify$1 = (decl, loc) => stringify(
    decl,
    (property, value, style, selectors) => resolveCssProperty(
      property,
      value,
      style,
      selectors,
      { $tokens, utils: utils2.value, options: { colorSchemeMode, runtime: true } },
      loc
    )
  );
  function resolveStylesheet() {
    const global = globalThis || window;
    let style;
    let hydratableSheet;
    if (global && global.document) {
      const doc = global.document;
      hydratableSheet = doc.querySelector(`style#pinceau-runtime-hydratable${appId ? `-${appId}` : ""}`);
      const styleNode = doc.createElement("style");
      styleNode.id = `pinceau-runtime${appId ? `-${appId}` : ""}`;
      styleNode.type = "text/css";
      style = doc.head.appendChild(styleNode);
    }
    sheet.value = (style == null ? void 0 : style.sheet) || getSSRStylesheet();
    return hydratableSheet ? hydrateStylesheet(hydratableSheet) : void 0;
  }
  function hydrateStylesheet(el) {
    var _a, _b;
    const hydratableRules2 = {};
    for (const _rule of Object.entries(((_a = el == null ? void 0 : el.sheet) == null ? void 0 : _a.cssRules) || ((_b = sheet.value) == null ? void 0 : _b.cssRules) || {})) {
      const [index, rule] = _rule;
      const uids = resolveUid(rule);
      if (!uids || !uids.uid) {
        continue;
      }
      if (!hydratableRules2[uids.uid]) {
        hydratableRules2[uids.uid] = {};
      }
      const newIndex = sheet.value.insertRule(rule.cssText, Number(index));
      hydratableRules2[uids.uid][uids.type] = sheet.value.cssRules.item(newIndex);
    }
    if (el) {
      el.remove();
    }
    return hydratableRules2;
  }
  function toString2() {
    if (!sheet.value) {
      return "";
    }
    return Object.entries(sheet.value.cssRules).reduce(
      (acc, [, rule]) => {
        acc += `${rule == null ? void 0 : rule.cssText}
` || "";
        return acc;
      },
      ""
    );
  }
  function pushDeclaration(uid, type, declaration, previousRule, loc) {
    if (!Object.keys(declaration).length) {
      return;
    }
    const cssText = stringify$1(
      {
        "@media": {
          // Mark inserted declaration with unique id and type of runtime style
          [HYDRATION_SELECTOR]: { "--puid": `${uid}-${type}` },
          ...declaration
        }
      },
      loc
    );
    if (!cssText) {
      return;
    }
    if (previousRule) {
      deleteRule(previousRule);
    }
    const ruleId = sheet.value.insertRule(cssText);
    return sheet.value.cssRules[ruleId];
  }
  function deleteRule(rule) {
    const ruleIndex = Object.values(sheet.value.cssRules).indexOf(rule);
    if (typeof ruleIndex === "undefined" || isNaN(ruleIndex)) {
      return;
    }
    try {
      sheet.value.deleteRule(ruleIndex);
    } catch (e) {
    }
  }
  const hydratableRules = resolveStylesheet();
  return {
    stringify: stringify$1,
    cache,
    pushDeclaration,
    deleteRule,
    sheet,
    toString: toString2,
    hydratableRules
  };
}
function getSSRStylesheet() {
  return {
    cssRules: [],
    insertRule(cssText, index = this.cssRules.length) {
      this.cssRules.splice(index, 1, { cssText });
      return index;
    },
    deleteRule(index) {
      delete this.cssRules[index];
    }
  };
}
function resolveUid(rule) {
  const uidRule = rule.cssRules && rule.cssRules.length ? Object.entries(rule == null ? void 0 : rule.cssRules).find(([_, rule2]) => rule2.selectorText === HYDRATION_SELECTOR) : void 0;
  if (!uidRule) {
    return;
  }
  const uidRegex = /--puid:(.*)?-(c|v|p)?/m;
  const [, uid, type] = uidRule[1].cssText.match(uidRegex);
  if (!uid) {
    return;
  }
  return { uid, type };
}
function usePinceauRuntimeIds(instance, classes, _) {
  var _a, _b, _c;
  let uid;
  const el = (_a = instance == null ? void 0 : instance.vnode) == null ? void 0 : _a.el;
  if (el && el.classList) {
    el.classList.forEach(
      (elClass) => {
        if (uid) {
          return;
        }
        if (elClass.startsWith("pc-")) {
          uid = elClass.split("pc-")[1];
        }
      }
    );
  } else {
    uid = nanoid(6);
  }
  const scopeId = (_c = (_b = instance == null ? void 0 : instance.vnode) == null ? void 0 : _b.type) == null ? void 0 : _c.__scopeId;
  const ids = {
    uid,
    componentId: scopeId ? `[${scopeId}]` : "",
    uniqueClassName: `pc-${uid}`
  };
  classes.value.c = ids.uniqueClassName;
  return computed(() => ids);
}
function isToken(token) {
  return typeof token === "string" && keyRegex.test(token);
}
function scale(type, prop, scales, valueTransform) {
  if (typeof prop === "object") {
    return prop;
  }
  if (typeof prop === "string") {
    const to_ret = {};
    if (isToken(prop)) {
      to_ret.initial = prop;
      return to_ret;
    }
    if (typeof scales === "string") {
      to_ret.initial = `{${type}.${prop}.${scales}}`;
    }
    if (typeof scales === "object") {
      Object.entries(scales).forEach(
        ([mqId, scaleValue]) => {
          if (typeof prop === "string") {
            to_ret[mqId] = `{${type}.${prop}.${scaleValue}}`;
          }
        }
      );
    }
    return valueTransform ? Object.entries(to_ret).reduce(
      (acc, [key, value]) => {
        acc[key] = valueTransform(value);
        return acc;
      },
      {}
    ) : to_ret;
  }
}
const utils = {
  isToken,
  scale
};
function usePinceauThemeSheet(initialTheme, tokensHelperConfig = {}) {
  const sheet = ref();
  const theme = ref(initialTheme || {});
  tokensHelperConfig = Object.assign(
    {
      key: "variable"
    },
    tokensHelperConfig || {}
  );
  const $tokens = createTokensHelper(
    theme,
    tokensHelperConfig
  );
  let cache = {};
  resolveStylesheet();
  function findThemeSheet(document2) {
    var _a;
    for (const sheet2 of document2.styleSheets) {
      if ((_a = sheet2 == null ? void 0 : sheet2.ownerNode) == null ? void 0 : _a.textContent.includes("--pinceau-mq")) {
        return sheet2.ownerNode;
      }
    }
  }
  function resolveStylesheet() {
    var _a;
    const global = globalThis || window;
    if (global && global.document) {
      let sheetElement = document.querySelector("#pinceau-theme");
      if (!sheetElement) {
        sheetElement = findThemeSheet(document);
      }
      sheet.value = sheetElement == null ? void 0 : sheetElement.sheet;
      if (sheet.value) {
        hydrateStylesheet((_a = sheet.value) == null ? void 0 : _a.cssRules);
      }
    }
  }
  function hydrateStylesheet(cssRules) {
    cache = {};
    Object.entries(cssRules || {}).forEach(
      ([_, rule]) => {
        var _a, _b;
        if ((rule == null ? void 0 : rule.type) !== 4 && !((_a = rule == null ? void 0 : rule.cssText) == null ? void 0 : _a.includes("--pinceau-mq"))) {
          return false;
        }
        let currentTheme = "initial";
        (_b = rule.cssText.match(/--([\w-]+)\s*:\s*(.+?);/gm)) == null ? void 0 : _b.forEach((match) => {
          var _a2;
          const [variable, value] = match.replace(";", "").split(/:\s(.*)/s);
          if (variable === "--pinceau-mq") {
            currentTheme = value;
            if (!cache[value]) {
              const ruleReference = (_a2 = Object.entries((rule == null ? void 0 : rule.cssRules) || {}).find(([_2, cssRule]) => cssRule == null ? void 0 : cssRule.cssText.includes(`--pinceau-mq: ${value}`))) == null ? void 0 : _a2[1];
              if (ruleReference) {
                cache[value] = ruleReference;
              }
            }
            return;
          }
          const path = [...variable.substring(2).split("-")];
          set(theme.value, path, getSetValue(path, value, variable, currentTheme));
        });
      }
    );
  }
  function updateTheme(value) {
    var _a;
    const mqKeys = Array.from(/* @__PURE__ */ new Set(["dark", "light", ...Object.keys((value == null ? void 0 : value.media) || {}), ...Object.keys(((_a = theme.value) == null ? void 0 : _a.media) || {})]));
    const config = normalizeConfig(value || {}, mqKeys, true);
    walkTokens(config, (token, _, paths) => updateToken(paths, token.value));
  }
  function updateToken(path, value, mq = "initial") {
    var _a;
    if (typeof value === "object") {
      Object.entries(value).forEach(([mq2, mqValue]) => updateToken(path, mqValue, mq2));
      return;
    }
    const varName = pathToVarName(path);
    if (!(cache == null ? void 0 : cache[mq])) {
      createMqRule(mq);
    }
    const resolvedValue = resolveReferences(void 0, value, { $tokens });
    set(
      theme.value,
      path,
      getSetValue(path, resolvedValue, varName, mq)
    );
    (_a = cache == null ? void 0 : cache[mq]) == null ? void 0 : _a.style.setProperty(varName, resolvedValue);
  }
  function reactiveToken(path) {
    return computed(
      {
        get() {
          return get(theme.value, `${path}.value`);
        },
        set(v) {
          updateToken(path, v);
        }
      }
    );
  }
  function getSetValue(path, value, variable, mq = "initial") {
    const varRef = `var(${variable})`;
    const setValue = { value, variable: varRef };
    const existingValue = get(theme.value, path);
    if (existingValue) {
      if (typeof (existingValue == null ? void 0 : existingValue.value) === "object") {
        setValue.value = { ...existingValue.value, [mq]: value };
      } else {
        setValue.value = { initial: existingValue.value, [mq]: value };
      }
    }
    return setValue;
  }
  function createMqRule(mq) {
    var _a, _b, _c;
    if (cache == null ? void 0 : cache[mq]) {
      return cache == null ? void 0 : cache[mq];
    }
    let mqValue;
    if (mq === "dark" || mq === "light") {
      mqValue = `:root.${mq}`;
    } else {
      mqValue = (_c = (_b = (_a = theme.value) == null ? void 0 : _a.media) == null ? void 0 : _b[mq]) == null ? void 0 : _c.value;
    }
    let css;
    if (mqValue.match(responsiveMediaQueryRegex)) {
      css = `@media { ${mqValue} { --pinceau-mq: ${mq}; } }`;
    } else {
      css = `@media ${mqValue} { :root { --pinceau-mq: ${mq}; } }`;
    }
    cache[mq] = sheet.value.cssRules.item(sheet.value.insertRule(css, sheet.value.cssRules.length)).cssRules[0];
    return cache[mq];
  }
  return {
    $tokens,
    updateToken,
    updateTheme,
    reactiveToken,
    resolveStylesheet,
    theme
  };
}
function usePinceauComputedStyles(ids, computedStyles, sheet, loc) {
  var _a, _b;
  let rule = (_b = (_a = sheet.hydratableRules) == null ? void 0 : _a[ids.value.uid]) == null ? void 0 : _b.c;
  watch(
    computedStyles,
    (newComputedStyles) => {
      newComputedStyles = computedStylesToDeclaration(ids.value, newComputedStyles);
      rule = sheet.pushDeclaration(
        ids.value.uid,
        "c",
        newComputedStyles,
        rule,
        { ...loc, type: "c" }
      );
    },
    {
      immediate: !rule,
      deep: true
    }
  );
  onScopeDispose(() => rule && sheet.deleteRule(rule));
}
function computedStylesToDeclaration(ids, computedStyles) {
  const declaration = {};
  const targetId = `.${ids.uniqueClassName}${ids.componentId}`;
  if (computedStyles && Object.keys(computedStyles).length) {
    declaration[targetId] = declaration[targetId] || {};
    for (const [varName, _value] of Object.entries(computedStyles)) {
      const value = unref(_value);
      if (varName === "css") {
        declaration[targetId] = Object.assign(declaration[targetId], value);
        continue;
      }
      if (typeof value === "object") {
        for (const [mqId, mqPropValue] of Object.entries(value)) {
          const _value2 = unref(mqPropValue);
          if (!_value2) {
            continue;
          }
          if (mqId === "initial") {
            if (!declaration[targetId]) {
              declaration[targetId] = {};
            }
            if (!declaration[targetId]) {
              declaration[targetId] = {};
            }
            declaration[targetId][`--${varName}`] = _value2;
          }
          const mediaId = `@${mqId}`;
          if (!declaration[mediaId]) {
            declaration[mediaId] = {};
          }
          if (!declaration[mediaId][targetId]) {
            declaration[mediaId][targetId] = {};
          }
          declaration[mediaId][targetId][`--${kebabCase(varName)}`] = _value2;
        }
      } else {
        const _value2 = unref(value);
        if (_value2) {
          declaration[targetId][`--${kebabCase(varName)}`] = _value2;
        }
      }
    }
  }
  return declaration;
}
const usePinceauVariants = (ids, variants, props, sheet, classes, loc) => {
  var _a, _b;
  let rule = (_b = (_a = sheet.hydratableRules) == null ? void 0 : _a[ids.value.uid]) == null ? void 0 : _b.v;
  const variantsState = computed(() => variants && (variants == null ? void 0 : variants.value) ? resolveVariantsState(ids.value, props.value, variants.value) : {});
  const variantsClasses = ref([]);
  watch(
    variantsState,
    ({ cacheId, variantsProps }) => {
      let variantClass;
      if (sheet.cache[cacheId]) {
        const cachedRule = sheet.cache[cacheId];
        rule = cachedRule.rule;
        variantClass = cachedRule.variantClass;
        if (cachedRule == null ? void 0 : cachedRule.classes) {
          variantsClasses.value = cachedRule.classes;
        }
        cachedRule.count++;
      } else {
        variantClass = `pv-${nanoid(6)}`;
        const { declaration, classes: classes2 } = variantsToDeclaration(variantClass, ids.value, variants.value, variantsProps);
        variantsClasses.value = classes2;
        rule = sheet.pushDeclaration(ids.value.uid, "v", declaration, void 0, { ...loc, type: "v" });
        sheet.cache[cacheId] = { rule, variantClass, classes: classes2, count: 1 };
      }
      classes.value.v = variantClass;
    },
    {
      immediate: true
    }
  );
  onScopeDispose(
    () => {
      var _a2;
      const state = variantsState == null ? void 0 : variantsState.value;
      const cachedRule = (_a2 = sheet.cache) == null ? void 0 : _a2[state.cacheId];
      if (cachedRule) {
        cachedRule.count--;
        if (cachedRule.count <= 0) {
          sheet.deleteRule(cachedRule.rule);
          delete sheet.cache[state.cacheId];
        }
      }
    }
  );
  return { variantsClasses };
};
function variantsToDeclaration(variantClass, ids, variants, props) {
  var _a, _b;
  let classes = [];
  const declaration = {};
  if (props && Object.keys(props).length) {
    const targetId = `.${variantClass}`;
    for (const [propName, propValue] of Object.entries(props)) {
      if (typeof propValue === "object") {
        for (const [mqId, mqPropValue] of Object.entries(propValue)) {
          const _value = (mqPropValue == null ? void 0 : mqPropValue.toString()) || mqPropValue;
          const variantValue = variants[propName][_value];
          if (!variantValue) {
            continue;
          }
          if (!declaration[targetId]) {
            declaration[targetId] = {};
          }
          if (typeof variantValue === "string" || Array.isArray(variantValue) || (variantValue == null ? void 0 : variantValue.$class)) {
            const classAttr = typeof variantValue === "string" || Array.isArray(variantValue) ? variantValue : variantValue.$class;
            classes = [
              ...classes,
              ...typeof classAttr === "string" ? classAttr.split(" ") : classAttr
            ];
            delete variantValue.$class;
          }
          if (mqId === "initial") {
            if (!declaration[targetId]) {
              declaration[targetId] = {};
            }
            declaration[targetId] = defu(declaration[targetId], variantValue);
          }
          const mediaId = `@${mqId}`;
          if (!declaration[mediaId]) {
            declaration[mediaId] = {};
          }
          if (!declaration[mediaId][targetId]) {
            declaration[mediaId][targetId] = {};
          }
          declaration[mediaId][targetId] = defu(declaration[mediaId][targetId], variantValue);
        }
      } else {
        const _value = ((_a = propValue == null ? void 0 : propValue.toString) == null ? void 0 : _a.call(propValue)) || propValue;
        const variantValue = (_b = variants == null ? void 0 : variants[propName]) == null ? void 0 : _b[_value];
        if (!variantValue) {
          continue;
        }
        if (!declaration[targetId]) {
          declaration[targetId] = {};
        }
        declaration[targetId] = defu(declaration[targetId], variantValue);
      }
    }
  }
  return { declaration, classes };
}
function resolveVariantsState(ids, props, variants) {
  if (!props || !variants) {
    return {};
  }
  let cacheId = ids.componentId;
  const variantsProps = Object.entries(props).reduce(
    (acc, [propName, propValue]) => {
      if (!variants[propName]) {
        return acc;
      }
      if (typeof propValue === "object") {
        Object.entries(propValue).forEach(([key, value]) => cacheId += `${propName}:${key}:${value}|`);
      } else {
        cacheId += `${propName}:${propValue}|`;
      }
      acc[propName] = propValue;
      return acc;
    },
    {}
  );
  return { cacheId, variantsProps };
}
function usePinceauCssProp(ids, props, sheet, loc) {
  var _a, _b;
  let rule = (_b = (_a = sheet.hydratableRules) == null ? void 0 : _a[ids.value.uid]) == null ? void 0 : _b.p;
  const css = computed(() => {
    var _a2;
    return (_a2 = props.value) == null ? void 0 : _a2.css;
  });
  watch(
    css,
    (newCss) => {
      newCss = transformCssPropToDeclaration(ids.value, newCss);
      if (rule) {
        sheet.deleteRule(rule);
      }
      rule = sheet.pushDeclaration(
        ids.value.uid,
        "p",
        newCss,
        void 0,
        { ...loc, type: "c" }
      );
    },
    {
      immediate: !rule
    }
  );
  onScopeDispose(() => rule && sheet.deleteRule(rule));
}
function transformCssPropToDeclaration(ids, css) {
  const declaration = {};
  if (css) {
    const targetId = `.${ids.uniqueClassName}${ids.componentId}`;
    declaration[targetId] = Object.assign(declaration[targetId] || {}, css);
  }
  return declaration;
}
const defaultRuntimeOptions = {
  theme: {},
  utils: {},
  tokensHelperConfig: {},
  multiApp: false,
  colorSchemeMode: "media",
  dev: false
};
const plugin = {
  install(app, options) {
    options = Object.assign(defaultRuntimeOptions, options);
    const { theme, tokensHelperConfig, dev, multiApp, colorSchemeMode, utils: utils2 } = options;
    const themeSheet = usePinceauThemeSheet(theme);
    if (dev && true) {
      import('./debug-43adc91a.mjs').then(({ usePinceauRuntimeDebug }) => usePinceauRuntimeDebug(tokensHelperConfig));
    }
    const multiAppId = multiApp ? nanoid(6) : void 0;
    const runtimeSheet = usePinceauRuntimeSheet(themeSheet.$tokens, utils2, colorSchemeMode, multiAppId);
    function usePinceauRuntime2(props, variants, computedStyles) {
      const instance = getCurrentInstance();
      let loc;
      if (dev && true) {
        const { __file: file, __name: name } = instance.vnode.type;
        loc = { file, name };
      }
      const classes = ref({
        // Variants class
        v: "",
        // Unique class
        c: ""
      });
      const ids = usePinceauRuntimeIds(instance, classes);
      if (computedStyles && (computedStyles == null ? void 0 : computedStyles.value) && Object.keys(computedStyles.value).length > 0) {
        usePinceauComputedStyles(ids, computedStyles, runtimeSheet, loc);
      }
      let dynamicVariantClasses;
      if (variants && (variants == null ? void 0 : variants.value) && Object.keys(variants.value).length > 0) {
        const { variantsClasses } = usePinceauVariants(ids, variants, props, runtimeSheet, classes, loc);
        dynamicVariantClasses = variantsClasses;
      }
      if (props.value.css && Object.keys(props.value.css).length > 0) {
        usePinceauCssProp(ids, props, runtimeSheet, loc);
      }
      return {
        $pinceau: computed(() => {
          var _a;
          return `${classes.value.v} ${classes.value.c} ${(_a = dynamicVariantClasses == null ? void 0 : dynamicVariantClasses.value) == null ? void 0 : _a.join(" ")}`;
        })
      };
    }
    app.config.globalProperties.$pinceauRuntime = usePinceauRuntime2;
    app.config.globalProperties.$pinceauTheme = themeSheet;
    app.config.globalProperties.$pinceauSsr = { get: () => runtimeSheet.toString() };
    app.provide("pinceauRuntime", usePinceauRuntime2);
    app.provide("pinceauTheme", themeSheet);
  }
};
function usePinceauRuntime(props, variants, computedStyles) {
  return inject("pinceauRuntime")(props, variants, computedStyles);
}
function usePinceauTheme() {
  return inject("pinceauTheme");
}
function computedStyle(defaultValue, required = false) {
  return {
    type: [String, Object],
    default: defaultValue,
    required
  };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Container",
  __ssrInlineRender: true,
  props: {
    as: {
      type: String,
      required: false,
      default: "div"
    },
    ...{ "padded": { "required": false, "type": [Boolean, Object], "default": true }, "fluid": { "required": false, "type": [Boolean, Object], "default": false } }
  },
  setup(__props) {
    const __$pProps = __props;
    const __$pVariants = ref({ "padded": { "true": { "px": "{elements.container.padding.mobile}", "@xs": { "px": "{elements.container.padding.xs}" }, "@sm": { "px": "{elements.container.padding.sm}" }, "@md": { "px": "{elements.container.padding.md}" } } }, "fluid": { "true": {}, "false": { "maxWidth": "{elements.container.maxWidth}" } } });
    const { $pinceau } = usePinceauRuntime(computed(() => __$pProps), __$pVariants, void 0);
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.as), mergeProps({
        class: ["container", [unref($pinceau)]]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/globals/Container.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-63a0deda"]]);
const Container = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_0
});

export { Container as C, _export_sfc as _, __nuxt_component_0 as a, usePinceauRuntime as b, computedStyle as c, usePinceauTheme as d, plugin as p, utils as u };
//# sourceMappingURL=Container-1291608c.mjs.map
