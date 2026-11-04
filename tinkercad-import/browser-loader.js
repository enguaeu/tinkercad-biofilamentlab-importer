/* Optional online loader for Biofilament Lab. The self-contained bookmark remains available offline. */
(function (root) {
  "use strict";
  const loader = function () {
    if (!["www.tinkercad.com","tinkercad.com"].includes(location.hostname) ||
        !/^\/things\/[^/]+\/edit(?:\/|$)/.test(location.pathname)) {
      alert("Open your design in the Tinkercad editor, then click this bookmark.");
      return;
    }
    if (root.__layerlingImportSession?.busy || root.__biofilamentImportSession?.busy) {
      alert("Wait for the current export to finish, or cancel it before updating.");
      return;
    }
    if (root.__layerlingLoaderActive) return;
    root.__layerlingLoaderActive = true;
    root.__layerlingRuntimeLoaded = false;
    const script = document.createElement("script");
    let done = false;
    const finish = success => {
      if (done) return;
      done = true;
      clearTimeout(timer);
      script.remove();
      root.__layerlingLoaderActive = false;
      if (success && (root.__layerlingRuntimeLoaded || root.__biofilamentRuntimeLoaded) && typeof root.runLayerlingImport === "function") {
        void root.runLayerlingImport();
      } else {
        alert("Online importer blocked or unavailable. Use the self-contained bookmark from https://enguaeu.github.io/tinkercad-biofilamentlab-importer/ .");
      }
    };
    const timer = setTimeout(() => finish(false), 15000);
    script.referrerPolicy = "no-referrer";
    const baseSite = root.__BIOFILAMENT_IMPORTER_SITE__ || "https://enguaeu.github.io/tinkercad-biofilamentlab-importer/";
    script.src = baseSite + "importer.js?t=" + Date.now();
    script.onload = () => finish(true);
    script.onerror = () => finish(false);
    try { document.head.append(script); } catch (_) { finish(false); }
  };
  root.biofilamentLabLoadLatest = loader;
  root.layerlingLoadLatest = loader;
})(globalThis);
