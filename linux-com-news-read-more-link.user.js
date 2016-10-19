// ==UserScript==
// @name         Linux.com News - Read More redirect
// @namespace    https://github.com/Jeni4/linux-com-news-read-more-link
// @version      1
// @description
// @author       Jeni4
// @match        https://www.linux.com/news/*
// @grant        none
// @updateURL    https://github.com/Jeni4/linux-com-news-read-more-link/raw/master/linux-com-news-read-more-link.user.js
// @downloadURL  https://github.com/Jeni4/linux-com-news-read-more-link/raw/master/linux-com-news-read-more-link.user.js
// @license

// ==/UserScript==

(function() {
    //'use strict';
    try {
        window.location.href = jQuery("div.field.field-name-body.field-type-text-with-summary p:last a").attr("href");
    }
    catch (e) {
        GM_log( 'www.linux.com News - Read More redirect - script exception: ' + e );
        alert ( 'www.linux.com News - Read More redirect - script exception: ' + e );
    }
}
)();
