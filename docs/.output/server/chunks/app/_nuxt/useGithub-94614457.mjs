import { e as useRequestEvent } from './app.config-832f5f68.mjs';

const useGithub = () => {
  const fetchRepository = (query) => {
    const url = `/api/_github/repository/${encodeParams(query)}.json`;
    addPrerenderPath(url);
    return $fetch(url, { responseType: "json" });
  };
  const fetchRelease = (query) => {
    const url = `/api/_github/releases/${encodeParams(query)}.json`;
    addPrerenderPath(url);
    return $fetch(url, { responseType: "json" });
  };
  const fetchLastRelease = (query) => {
    const url = `/api/_github/releases/${encodeParams({ ...query, last: true })}.json`;
    addPrerenderPath(url);
    return $fetch(url, { responseType: "json" });
  };
  const fetchReleases = (query) => {
    const url = `/api/_github/releases/${encodeParams(query)}.json`;
    addPrerenderPath(url);
    return $fetch(url, { responseType: "json" });
  };
  const fetchContributors = (query) => {
    const url = `/api/_github/contributors/${encodeParams(query)}.json`;
    addPrerenderPath(url);
    return $fetch(url, { responseType: "json" });
  };
  const fetchFileContributors = (query) => {
    const url = `/api/_github/contributors/file/${encodeParams(query)}.json`;
    addPrerenderPath(url);
    return $fetch(url, { responseType: "json" });
  };
  const fetchReadme = (query) => {
    const url = `/api/_github/readme/${encodeParams(query)}.json`;
    addPrerenderPath(url);
    return $fetch(url, { responseType: "json" });
  };
  const fetchCommits = (query) => {
    const url = `/api/_github/commits/${encodeParams(query)}.json`;
    addPrerenderPath(url);
    return $fetch(url, { responseType: "json" });
  };
  return {
    fetchRepository,
    fetchReleases,
    fetchRelease,
    fetchLastRelease,
    fetchContributors,
    fetchFileContributors,
    fetchReadme,
    fetchCommits
  };
};
function encodeParams(params) {
  return Object.entries(params).map(([key, value]) => `${key}_${String(value)}`).join(":");
}
function addPrerenderPath(path) {
  const event = useRequestEvent();
  event.res.setHeader(
    "x-nitro-prerender",
    [
      event.res.getHeader("x-nitro-prerender"),
      path
    ].filter(Boolean).join(",")
  );
}

export { useGithub as u };
//# sourceMappingURL=useGithub-94614457.mjs.map
