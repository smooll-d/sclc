// ==UserScript==
// @name         Steam Community Language Changer
// @namespace    https://github.com/smooll-d
// @copyright    2024-2025, Jakub Skowron
// @license      BSD-3-Clause
// @version      2.0.1
// @description  Changes Steam's language to browser's on community posts
// @author       smooll
// @match        https://steamcommunity.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=steamcommunity.com
// @require      https://cdn.jsdelivr.net/npm/@trim21/gm-fetch@0.2.1
// @run-at       document-start
// @grant        GM.xmlHttpRequest
// @grant        GM.setValue
// @grant        GM.getValue
// @connect      raw.githubusercontent.com
// @connect      github.com
// @updateURL    https://github.com/smooll-d/sclc/raw/refs/heads/master/sclc.meta.js
// @downloadURL  https://github.com/smooll-d/sclc/releases/latest/download/sclc.user.js
// @supportURL   https://github.com/smooll-d/sclc/issues
// @homepageURL  https://github.com/smooll-d/sclc
// ==/UserScript==

// Retrieve parameters from community page URL
const URLParameters = new URLSearchParams(window.location.search);

// Parameter "l" responsible for setting page's language
const languageParameter = "l";

// Language used by the browser
const browserLanguage = navigator.language;

// Function responsible for changing the language
const changeLanguage = (language) => {
    // Set "l" to your preffered language
    URLParameters.set(languageParameter, language);

    // Actually change URL's parameters so the page can change to your preffered language
    window.location.search = URLParameters;
}

(async () => {
    'use strict';

    // Check if URL has parameter "l"
    if (URLParameters.has(languageParameter)) {
        // Send a request to github.com for languages.json
        const response = await GM_fetch("https://github.com/smooll-d/sclc/raw/refs/heads/master/languages.json", {
            method: "GET",
            onerror: function(err) {
                console.log("sclc: failed to fetch languages.json! error: ", err);
            }
        });

        // Store languages.json as JSON in languages
        const languages = await response.json();

        // Iterate through languages.json
        for (const language in languages) {
            // Check if languages.json has languages not anything else,
            // this check has to be here as if it wasn't the code in the if statement
            // would run for functions and other JavaScript things that languages
            // has (loosely explained + idk if I understand correctly), and we don't want that
            if (languages.hasOwnProperty(language)) {
                // Check if any of the codes in languages.json equals the browserLanguage variable
                if (browserLanguage === languages[language].code) {
                    // Add your preffred language to localStorage, so it's available on multiple executions of this script
                    await GM.setValue("sclc_pl", languages[language].name);
                }
            }
        }

        // Your preffered language
        const preferredLanguage = await GM.getValue("sclc_pl", "english");

        // Check if "l" is not equal to your preferred language
        // If it's not, change language to your preferred language.
        // If it is, don't do anything as it is already set to your preferred language
        if (URLParameters.get(languageParameter) !== preferredLanguage) {
            changeLanguage(preferredLanguage);
        }
    }
})();
