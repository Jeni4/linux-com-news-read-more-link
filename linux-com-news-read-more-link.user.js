// ==UserScript==
// @name         Linux.com News - Read More redirect
// @namespace    https://github.com/Jeni4/linux-com-news-read-more-link
// @version      0.1
// @description
// @author       Jeni4
// @match        https://www.linux.com/news/*
// @grant        none
// @updateURL    https://github.com/Jeni4/linux-com-news-read-more-link/raw/master/linux-com-news-read-more-link.user.js
// @downloadURL  https://github.com/Jeni4/linux-com-news-read-more-link/raw/master/linux-com-news-read-more-link.user.js
// @license

// ==/UserScript==

(function() {
    'use strict';
    try {
        textLink="Read more at";
        nPage=-1;
        for( i=0; i < document.links.length; i++ )
            if( document.links[ i ].innerHTML.match( textLink ))
                window.location.href=document.links[i].href;
    }
    catch (e) {
        GM_log( 'www.linux.com News - Read More redirect - script exception: ' + e );
        alert ( 'www.linux.com News - Read More redirect - script exception: ' + e );
    }
}
)();
