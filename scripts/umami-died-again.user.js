// ==UserScript==
// @name         Umami died again
// @namespace    http://tampermonkey.net/
// @version      0.1.0
// @description  Sometimes the Umami UI has a bug and just stops working until you delete the auth token.
// @author       Stuart Thomson <https://github.com/s-thom>
// @homepage     https://github.com/s-thom/userscripts
// @homepageURL  https://github.com/s-thom/userscripts
// @source       https://github.com/s-thom/userscripts/blob/main/scripts/umami-died-again.user.js
// @updateURL    https://raw.githubusercontent.com/s-thom/userscripts/main/scripts/umami-died-again.user.js
// @downloadURL  https://raw.githubusercontent.com/s-thom/userscripts/main/scripts/umami-died-again.user.js
// @match        https://stats.sthom.kiwi/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=umami.is
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  const ERROR_STRING_START =
    "Application error: a client-side exception has occurred";

  function deleteAuthAndReload() {
    localStorage.removeItem("umami.auth");
    window.location.reload();
  }

  /** @param node {HTMLElement} */
  function addButton(node) {
    const button = document.createElement("button");
    button.innerText = "Delete auth token";
    button.addEventListener("click", deleteAuthAndReload);

    node.appendChild(button);
  }

  const observer = new MutationObserver((mutationList, observer) => {
    for (const mutation of mutationList) {
      if (mutation.type === "childList") {
        for (const node of mutation.addedNodes) {
          const headings = node.querySelectorAll("h2");
          for (const heading of headings) {
            if (heading.textContent.startsWith(ERROR_STRING_START)) {
              observer.disconnect();
              addButton(heading.parentElement);
            }
          }
        }
      }
    }
  });

  const nextRoot = document.getElementById("__next");
  observer.observe(nextRoot, { childList: true });
})();
