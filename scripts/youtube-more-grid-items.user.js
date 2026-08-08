// ==UserScript==
// @name         YouTube More Grid Items
// @namespace    http://tampermonkey.net/
// @version      0.1.0
// @description  Show 5 items per row in YouTube's grid views
// @author       Stuart Thomson <https://github.com/s-thom>
// @homepage     https://github.com/s-thom/userscripts
// @homepageURL  https://github.com/s-thom/userscripts
// @source       https://github.com/s-thom/userscripts/blob/main/scripts/youtube-more-grid-items.user.js
// @updateURL    https://raw.githubusercontent.com/s-thom/userscripts/main/scripts/youtube-more-grid-items.user.js
// @downloadURL  https://raw.githubusercontent.com/s-thom/userscripts/main/scripts/youtube-more-grid-items.user.js
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  // Function helper to inject css
  function addGlobalStyle(css) {
    const style = document.createElement("style");
    style.type = "text/css";
    style.textContent = css;
    document.head.appendChild(style);
  }

  addGlobalStyle(`
    ytd-rich-grid-renderer {
      --ytd-rich-grid-items-per-row: 5 !important;
    }
  `);
})();
