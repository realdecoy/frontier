import { toRef, isRef, reactive, computed } from 'vue';
import { u as useNuxtApp, l as __appConfig, f as useRoute } from './app.config-832f5f68.mjs';
import { withoutTrailingSlash } from 'ufo';

function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = "$s" + _key;
  const nuxt = useNuxtApp();
  const state = toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
function useAppConfig() {
  const nuxtApp = useNuxtApp();
  if (!nuxtApp._appConfig) {
    nuxtApp._appConfig = reactive(__appConfig);
  }
  return nuxtApp._appConfig;
}
const navBottomLink = (link) => {
  if (!link.children) {
    return link._path;
  }
  for (const child of (link == null ? void 0 : link.children) || []) {
    const result = navBottomLink(child);
    if (result) {
      return result;
    }
  }
};
const navDirFromPath = (path, tree) => {
  for (const file of tree) {
    if (file._path === path && !file._id) {
      return file.children;
    }
    if (file.children) {
      const result = navDirFromPath(path, file.children);
      if (result) {
        return result;
      }
    }
  }
};
const navPageFromPath = (path, tree) => {
  for (const file of tree) {
    if (file._path === path) {
      return file;
    }
    if (file.children) {
      const result = navPageFromPath(path, file.children);
      if (result) {
        return result;
      }
    }
  }
};
const navKeyFromPath = (path, key, tree) => {
  let value;
  const goDeep = (path2, tree2) => {
    for (const file of tree2) {
      if ((path2 == null ? void 0 : path2.startsWith(file._path)) && file[key]) {
        value = file[key];
      }
      if (file._path === path2) {
        return;
      }
      if (file.children) {
        goDeep(path2, file.children);
      }
    }
  };
  goDeep(path, tree);
  return value;
};
const useContentHelpers = () => {
  return {
    navBottomLink,
    navDirFromPath,
    navPageFromPath,
    navKeyFromPath
  };
};
const useContentState = () => {
  const pages = useState("dd-pages", () => ({}));
  const surrounds = useState("dd-surrounds", () => ({}));
  const navigation = useState("dd-navigation");
  const globals = useState("dd-globals", () => ({}));
  return {
    pages,
    surrounds,
    navigation,
    globals
  };
};
const useContent = () => {
  const { navigation, pages, surrounds, globals } = useContentState();
  const _path = computed(() => withoutTrailingSlash(useRoute().path));
  const page = computed(() => pages.value[_path.value]);
  const surround = computed(() => surrounds.value[_path.value]);
  const toc = computed(() => {
    var _a, _b;
    return (_b = (_a = page == null ? void 0 : page.value) == null ? void 0 : _a.body) == null ? void 0 : _b.toc;
  });
  const type = computed(() => {
    var _a;
    return (_a = page.value) == null ? void 0 : _a.type;
  });
  const excerpt = computed(() => {
    var _a;
    return (_a = page.value) == null ? void 0 : _a.excerpt;
  });
  const layout = computed(() => {
    var _a;
    return (_a = page.value) == null ? void 0 : _a.layout;
  });
  const next = computed(() => {
    var _a;
    return (_a = surround.value) == null ? void 0 : _a[1];
  });
  const prev = computed(() => {
    var _a;
    return (_a = surround.value) == null ? void 0 : _a[0];
  });
  return {
    // Refs
    globals,
    navigation,
    surround,
    page,
    // From page
    excerpt,
    toc,
    type,
    layout,
    // From surround
    next,
    prev
  };
};
const useDocus = () => {
  const docus = computed(() => {
    var _a;
    return ((_a = useAppConfig()) == null ? void 0 : _a.docus) || {};
  });
  const { navPageFromPath: navPageFromPath2, navDirFromPath: navDirFromPath2, navKeyFromPath: navKeyFromPath2 } = useContentHelpers();
  const { navigation, page } = useContent();
  const route = useRoute();
  const config = computed(
    () => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
      const titleTemplate = ((_a = docus == null ? void 0 : docus.value) == null ? void 0 : _a.titleTemplate) || navKeyFromPath2((_b = page == null ? void 0 : page.value) == null ? void 0 : _b._path, "titleTemplate", navigation.value || []) || `%s \xB7 ${((_c = docus == null ? void 0 : docus.value) == null ? void 0 : _c.title) || "Docus"}`;
      const main = ((_d = docus == null ? void 0 : docus.value) == null ? void 0 : _d.main) || {};
      const header = ((_e = docus == null ? void 0 : docus.value) == null ? void 0 : _e.header) || {};
      const aside = ((_f = docus == null ? void 0 : docus.value) == null ? void 0 : _f.aside) || {};
      const footer = ((_g = docus == null ? void 0 : docus.value) == null ? void 0 : _g.footer) || {};
      return {
        // Raw appConfig
        ...docus.value,
        // Merged attributes
        titleTemplate,
        main: {
          ...main,
          ...navKeyFromPath2(route.path, "main", navigation.value || []),
          ...(_h = page.value) == null ? void 0 : _h.main
        },
        header: {
          ...header,
          ...navKeyFromPath2(route.path, "header", navigation.value || []),
          ...(_i = page.value) == null ? void 0 : _i.header
        },
        aside: {
          ...aside,
          ...navKeyFromPath2(route.path, "aside", navigation.value || []),
          ...(_j = page.value) == null ? void 0 : _j.aside
        },
        footer: {
          ...footer,
          ...navKeyFromPath2(route.path, "footer", navigation.value || []),
          ...(_k = page.value) == null ? void 0 : _k.footer
        }
      };
    }
  );
  const tree = computed(() => {
    var _a, _b, _c, _d, _e;
    let nav = navigation.value || [];
    const _path = route.path;
    const level = ((_b = (_a = config == null ? void 0 : config.value) == null ? void 0 : _a.aside) == null ? void 0 : _b.level) || 0;
    const filtered = ((_d = (_c = config == null ? void 0 : config.value) == null ? void 0 : _c.aside) == null ? void 0 : _d.exclude) || [];
    if (level) {
      const path = _path.split("/");
      const leveledPath = path.splice(0, 1 + level).join("/");
      nav = navDirFromPath2(leveledPath, nav) || [];
      if (!Array.isArray(nav)) {
        nav = [nav];
      }
    }
    if (nav.length === 0) {
      nav = navPageFromPath2(((_e = page.value) == null ? void 0 : _e._path) || "/", navigation.value || []);
      if (!nav) {
        return [];
      }
      if (!Array.isArray(nav)) {
        nav = [nav];
      }
    }
    return nav.filter((item) => {
      if (filtered.includes(item._path)) {
        return false;
      }
      return true;
    });
  });
  return { tree, config };
};

export { useAppConfig as a, useDocus as b, useContent as c, useContentState as d, useContentHelpers as e, useState as u };
//# sourceMappingURL=useDocus-928368c4.mjs.map
