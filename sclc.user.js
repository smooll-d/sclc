// ==UserScript==
// @name         Steam Community Language Changer
// @namespace    https://github.com/smooll-d
// @copyright    2024-2025, Jakub Skowron
// @license      BSD-3-Clause
// @version      1.1.0
// @description  Changes language to preffered on Steam's community pages
// @author       smooll
// @match        https://steamcommunity.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=steamcommunity.com
// @require      https://cdn.jsdelivr.net/npm/@trim21/gm-fetch@0.2.1
// @grant        GM.xmlHttpRequest
// @connect      raw.githubusercontent.com
// @updateURL    https://github.com/smooll-d/sclc/raw/refs/heads/master/sclc.meta.js
// @downloadURL  https://github.com/smooll-d/sclc/releases/latest/download/sclc.user.js
// @supportURL   https://github.com/smooll-d/sclc/issues
// @homepageURL  https://github.com/smooll-d/sclc
// ==/UserScript==

// Parameter "l" responsible for setting page's language
const languageParameter = "l";

// Regex pattern to match Steam community page URL
const pattern = new RegExp("https?:\/\/(?:www\.)?steamcommunity\.com\/.*");

// Language used by the browser
const browserLanguage = navigator.language;

// Preffered language that will be used to set Steam's language
let prefferedLanguage = "";

(async () => {
    'use strict';

    // Variable responsible for storing values from languages.json file, will be filled later
    const request = await GM_fetch("https://github.com/smooll-d/sclc/raw/refs/heads/browser-language/languages.json", {
        method: "GET",
        onerror: function(err) {
            console.log("sclc: failed to fetch languages.json! error: ", err);
        }
    });

    const languages = await request.json();

    // Check if pattern matches URL of page. If it is, proceed further, if not, don't do anything
    if (pattern.test(window.location.href)) {
        // Retrieve parameters from community page URL
        const URLParameters = new URLSearchParams(window.location.search);

        // Iterate through every langauge in langauges.json
        for (const language in languages) {
            console.log(language);
            // Check if any of the codes in languages.json equals the browserLanguage variable
            // If it does, proceed further, if it doesn't, set language to english
            if (browserLanguage === languages[language].code) {
                // Check if URL has parameter "l" and if it's not equal to your preffered language
                // If both of these are true, proceed further, if any one of these is false, don't do anything
                if (URLParameters.has(languageParameter) && URLParameters.get(languageParameter) !== languages[language].name) {
                    // Set "l" to your preffered language
                    URLParameters.set(languageParameter, languages[language].name);

                    // Actually change URL's parameters so the page can change to your preffered language
                    window.location.search = URLParameters;
                }
            } else {
                // Check if URL has parameter "l" and if it's not equal to english
                // If both of these are true, proceed further, if any one of these is false, don't do anything
                if (URLParameters.has(languageParameter) && URLParameters.get(languageParameter) !== "english") {
                    // Set "l" to english
                    URLParameters.set(languageParameter, "english");

                    // Actually change URL's parameters so the page can change to english
                    window.location.search = URLParameters;
                }
            }
        }
    }
})();
