import { b as useRuntimeConfig } from './app.config-832f5f68.mjs';
import { defineComponent, computed, useSlots } from 'vue';
import { joinURL } from 'ufo';
import 'hookable';
import 'unctx';
import 'h3';

const GithubLink = defineComponent({
  props: {
    owner: {
      type: String,
      default: () => {
        var _a, _b;
        return (_b = (_a = useRuntimeConfig()) == null ? void 0 : _a.github) == null ? void 0 : _b.owner;
      },
      required: false
    },
    repo: {
      type: String,
      default: () => {
        var _a, _b;
        return (_b = (_a = useRuntimeConfig()) == null ? void 0 : _a.github) == null ? void 0 : _b.repo;
      },
      required: false
    },
    branch: {
      type: String,
      default: () => {
        var _a, _b;
        return (_b = (_a = useRuntimeConfig()) == null ? void 0 : _a.github) == null ? void 0 : _b.branch;
      },
      required: false
    },
    dir: {
      type: String,
      default: () => {
        var _a, _b;
        return (_b = (_a = useRuntimeConfig()) == null ? void 0 : _a.github) == null ? void 0 : _b.dir;
      },
      required: false
    },
    source: {
      type: String,
      required: false,
      default: void 0
    },
    page: {
      type: Object,
      required: false,
      default: void 0
    },
    contentDir: {
      type: String,
      required: false,
      default: "content"
    },
    edit: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  setup(props) {
    if (!props.owner || !props.repo || !props.branch) {
      throw new Error("If you want to use `GithubLink` component, you must specify: `owner`, `repo` and `branch`.");
    }
    const source = computed(() => {
      var _a, _b;
      let { repo, owner, branch, contentDir } = props;
      let prefix = "";
      if ((_b = (_a = useRuntimeConfig()) == null ? void 0 : _a.public) == null ? void 0 : _b.content) {
        let source2;
        const { sources } = useRuntimeConfig().public.content;
        for (const key in sources || []) {
          if (props.page._id.startsWith(key)) {
            source2 = sources[key];
            break;
          }
        }
        if ((source2 == null ? void 0 : source2.driver) === "github") {
          repo = source2.repo || props.repo || "";
          owner = source2.owner || props.owner || "";
          branch = source2.branch || props.branch || "main";
          contentDir = source2.dir || props.contentDir || "";
          prefix = source2.prefix || "";
        }
      }
      return { repo, owner, branch, contentDir, prefix };
    });
    const base = computed(() => joinURL("https://github.com", `${source.value.owner}/${source.value.repo}`));
    const path = computed(() => {
      var _a;
      const dirParts = [];
      if ((_a = props == null ? void 0 : props.page) == null ? void 0 : _a._path) {
        if (source.value.contentDir) {
          dirParts.push(source.value.contentDir);
        }
        dirParts.push(props.page._file.substring(source.value.prefix.length));
        return dirParts;
      }
      if (props.dir) {
        dirParts.push(props.dir);
      }
      if (props.source) {
        dirParts.push(props.source);
      }
      return dirParts;
    });
    const url = computed(() => {
      const parts = [base.value];
      if (props.edit) {
        parts.push("edit");
      } else {
        parts.push("tree");
      }
      parts.push(source.value.branch, ...path.value);
      return parts.filter(Boolean).join("/");
    });
    return {
      url
    };
  },
  render(ctx) {
    var _a;
    const { url } = ctx;
    const slots = useSlots();
    return (_a = slots == null ? void 0 : slots.default) == null ? void 0 : _a.call(slots, { url });
  }
});

export { GithubLink as default };
//# sourceMappingURL=GithubLink-f632fd3b.mjs.map
