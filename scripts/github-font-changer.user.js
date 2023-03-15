// ==UserScript==
// @name         GitHub Font Changer
// @namespace    http://tampermonkey.net/
// @version      0.1.3
// @description  Change the font used in code blocks on GitHub
// @author       Stuart Thomson <https://github.com/s-thom>
// @homepage     https://github.com/s-thom/userscripts
// @homepageURL  https://github.com/s-thom/userscripts
// @source       https://github.com/s-thom/userscripts/blob/main/scripts/github-font-changer.user.js
// @updateURL    https://raw.githubusercontent.com/s-thom/userscripts/main/scripts/github-font-changer.user.js
// @downloadURL  https://raw.githubusercontent.com/s-thom/userscripts/main/scripts/github-font-changer.user.js
// @match        https://github.com/*
// @match        https://*.github.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  // Set your own font stack here
  const fonts = "'Jetbrains Mono', ui-monospace, monospace";

  // Function helper to inject css
  function addGlobalStyle(css) {
    const style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML = css;
    document.head.appendChild(style);
  }

  // Apply the font-family definition to code styles.
  addGlobalStyle(`
    code,
    .blob-code-inner,
    .blob-num {
      font-family: ${fonts} !important;
    }
  `);
})();
