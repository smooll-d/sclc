// ==UserScript==
// @name         Steam Community Language Changer
// @namespace    https://github.com/smooll-d
// @copyright    2024, Jakub Skowron
// @license      BSD-3-Clause
// @version      1.0.2
// @description  Changes language to preffered on Steam's community pages
// @author       smooll
// @match        https://steamcommunity.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=steamcommunity.com
// @grant        none
// @updateURL    https://github.com/smooll-d/sclc/raw/refs/heads/master/sclc.meta.js
// @downloadURL  https://github.com/smooll-d/sclc/releases/latest/download/sclc.user.js
// @supportURL   https://github.com/smooll-d/sclc/issues
// @homepageURL  https://github.com/smooll-d/sclc
// ==/UserScript==

// Input your preffered language (full name in english, lowercase, e.g. english, polish, german, japanese)
const language = "english";

// DO NOT TOUCH ANYTHING BEYOND THIS COMMENT UNLESS YOU UNDERSTAND THE CODE AND WOULD LIKE TO HELP IMPROVE IT
(function() {
    'use strict';

    // Parameter "l" responsible for setting page's language
    const languageParameter = "l";

    // Regex pattern to match Steam community page URL
    const pattern = new RegExp("https?:\/\/(?:www\.)?steamcommunity\.com\/.*");

    // Check if pattern matches URL of page. If it is, proceed further, if not, don't do anything
    if (pattern.test(window.location.href)) {
        // Retrieve parameters from community page URL
        const URLParameters = new URLSearchParams(window.location.search);

        // Check if URL has parameter "l" and if it's not equal to your preffered language
        // If both of these are true, proceed further, if any one of these is false, don't do anything
        if (URLParameters.has(languageParameter) && URLParameters.get(languageParameter) !== language) {
            // Set "l" to your preffered language
            URLParameters.set(languageParameter, language);

            // Actually change URL's parameters so the page can change to your preffered language
            window.location.search = URLParameters;
        }
    }
})();
