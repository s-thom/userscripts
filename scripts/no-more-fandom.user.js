// ==UserScript==
// @name         No more Fandom
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  Fandom wikis suck, redirect to Breezewiki for your viewing pleasure
// @author       Stuart Thomson <https://github.com/s-thom>
// @homepage     https://github.com/s-thom/userscripts
// @homepageURL  https://github.com/s-thom/userscripts
// @source       https://github.com/s-thom/userscripts/blob/main/scripts/no-more-fandom.user.js
// @updateURL    https://raw.githubusercontent.com/s-thom/userscripts/main/scripts/no-more-fandom.user.js
// @downloadURL  https://raw.githubusercontent.com/s-thom/userscripts/main/scripts/no-more-fandom.user.js
// @match        https://*.fandom.com/wiki/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=fandom.com
// @grant        GM_openInTab
// @grant        window.close
// ==/UserScript==

(function () {
  "use strict";

  const [, subdomain] = location.hostname.match(/([^.]+)\.fandom\.com/);
  const [, page] = location.pathname.match(/\/wiki\/(.*)/);

  GM_openInTab(`https://breezewiki.com/${subdomain}/wiki/${page}`);
  window.close();
})();
