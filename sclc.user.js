// ==UserScript==
// @name         Steam Community Language Changer
// @namespace    https://github.com/smooll-d
// @copyright    2024-2025, Jakub Skowron
// @license      BSD-3-Clause
// @version      3.0.0
// @description  Changes Steam's language to browser's on community posts
// @author       smooll
// @match        https://steamcommunity.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=steamcommunity.com
// @run-at       document-start
// @updateURL    https://github.com/smooll-d/sclc/raw/refs/heads/master/sclc.meta.js
// @downloadURL  https://github.com/smooll-d/sclc/releases/latest/download/sclc.user.js
// @supportURL   https://github.com/smooll-d/sclc/issues
// @homepageURL  https://github.com/smooll-d/sclc
// ==/UserScript==

// Retrieve parameters from community page URL
const URLParameters = new URLSearchParams(window.location.search);

// Parameter "l" responsible for setting page's language
const languageParameter = "l";

(async () => {
    'use strict';

    // Check if URL has parameter "l"
    if (URLParameters.has(languageParameter)) {
        // Remove "l" parameter so Steam changes it's language automatically
        URLParameters.delete(languageParameter);

        // Update URL search parameters and refresh page
        window.location.search = URLParameters;
    }
})();
