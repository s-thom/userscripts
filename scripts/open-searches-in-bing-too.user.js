// ==UserScript==
// @name         Open searches in Bing too
// @namespace    http://tampermonkey.net/
// @version      0.1.1
// @description  Opens Google searches in Bing, but in the background
// @author       Stuart Thomson <https://github.com/s-thom>
// @homepage     https://github.com/s-thom/userscripts
// @homepageURL  https://github.com/s-thom/userscripts
// @source       https://github.com/s-thom/userscripts/blob/main/scripts/open-searches-in-bing-too.user.js
// @updateURL    https://raw.githubusercontent.com/s-thom/userscripts/main/scripts/open-searches-in-bing-too.user.js
// @downloadURL  https://raw.githubusercontent.com/s-thom/userscripts/main/scripts/open-searches-in-bing-too.user.js
// @match        https://www.google.com/search*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        GM_openInTab
// ==/UserScript==

(function () {
  "use strict";

  const q = new URLSearchParams(window.location.search).get("q");
  if (!q) {
    return;
  }

  const newQuery = new URLSearchParams({ q, s_frs: true });

  GM_openInTab(`https://www.bing.com/search?${newQuery.toString()}`);
})();
