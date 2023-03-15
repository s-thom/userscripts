// ==UserScript==
// @name         Bing Chat switcher
// @namespace    http://tampermonkey.net/
// @version      0.1.1
// @description  Uses a query parameter to determine whether searches should open the chat tab or not
// @author       Stuart Thomson <https://github.com/s-thom>
// @homepage     https://github.com/s-thom/userscripts
// @homepageURL  https://github.com/s-thom/userscripts
// @source       https://github.com/s-thom/userscripts/blob/main/scripts/bing-chat-switcher.user.js
// @updateURL    https://raw.githubusercontent.com/s-thom/userscripts/main/scripts/bing-chat-switcher.user.js
// @downloadURL  https://raw.githubusercontent.com/s-thom/userscripts/main/scripts/bing-chat-switcher.user.js
// @match        https://www.bing.com/search*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bing.com
// @grant        none
// ==/UserScript==

(async function () {
  "use strict";

  const q = new URLSearchParams(window.location.search).get("s_frs");
  if (q !== "true") {
    return;
  }

  function switchTab() {
    const chatTab = document.querySelector("#b-scopeListItem-conv a");
    chatTab.click();
  }

  function isChatMode() {
    return document.body.classList.contains("b_sydConvMode");
  }

  function elementReady(selector) {
    return new Promise((resolve, reject) => {
      let el = document.querySelector(selector);
      if (el) {
        resolve(el);
        return;
      }
      new MutationObserver((mutationRecords, observer) => {
        // Query for elements matching the specified selector
        Array.from(document.querySelectorAll(selector)).forEach((element) => {
          resolve(element);
          //Once we have resolved we don't need the observer anymore.
          observer.disconnect();
        });
      }).observe(document.documentElement, {
        childList: true,
        subtree: true,
      });
    });
  }

  await elementReady("#sydneyLetsChatWidgetContainer");
  switchTab();
  setTimeout(() => {
    if (!isChatMode()) {
      switchTab();
    }
  }, 1000);
})();
