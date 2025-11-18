// ==UserScript==
// @name         X Unshitify
// @namespace    https://github.com/AidanSpeakss/xunshitify/
// @version      0.2
// @description  try to take over the world!
// @author       You, Me, Bob, Your Uncle, Everyone Ideally
// @run-at       document-start
// @match        https://www.x.com/*
// @match        https://x.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=x.com
// @grant        none
// @require http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

(function() {
    'use strict';
function unshitify(){
let newStyles = document.createElement('style');

    //Hides the infinite scroll feed, still allows you to posts, but may cause lag. Better to prepare posts seperately or schedule them on Buffer.
    newStyles.innerText += `div[aria-label="Timeline: Your Home Timeline"] { display: none !important; }`;

    //Hides the number badges on the notification icon, which is a feature meant to draw your attention and interrupt your focus.
    newStyles.innerText += `div[aria-label="New posts are available. Push the period key to go to the them."] { display: none !important; }`;

document.head.appendChild(newStyles);
}

unshitify();
})();
