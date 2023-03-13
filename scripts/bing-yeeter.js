// ==UserScript==
// @name         Bing Yeeter
// @namespace    http://tampermonkey.net/
// @version      0.1.2
// @description  Closes automatically opened Bing tabs unless they were focused
// @author       Stuart Thomson <https://github.com/s-thom>
// @homepage     https://github.com/s-thom/userscripts
// @source       https://github.com/s-thom/userscripts/blob/main/scripts/bing-yeeter.js
// @updateURL    https://raw.githubusercontent.com/s-thom/userscripts/main/scripts/bing-yeeter.js
// @downloadURL  https://raw.githubusercontent.com/s-thom/userscripts/main/scripts/bing-yeeter.js
// @match        https://www.bing.com/search*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bing.com
// @grant        window.close
// ==/UserScript==

(function () {
  "use strict";

  const TAB_OPEN_DELAY_MS = 2000;

  const q = new URLSearchParams(window.location.search).get("s_frs");
  if (q !== "true") {
    return;
  }

  function onFocus(event) {
    if (document.visibilityState === "visible") {
      document.removeEventListener("visibilitychange", onFocus);
      clearTimeout(handle);
    }
  }
  document.addEventListener("visibilitychange", onFocus);

  const handle = setTimeout(() => window.close(), TAB_OPEN_DELAY_MS);
})();
