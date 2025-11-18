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

    //Make sure to set your username so that your individual tweets aren't removed when viewing them.
    let yourUsername = "AidanOsint";
    if (window.location.href.includes(yourUsername) != true){
        //Hides the individual tweets as well, in-case the feed magically comes back (can happen)
        newStyles.innerText += `div[data-testid="tweetText"] { display: none !important; }`;
    }

    //Hides the infinite scroll feed, still allows you to post, but causes extreme lag for some reason when writing the post in the chatbot. Better to prepare posts seperately or schedule them on Buffer.
    newStyles.innerText += `div[aria-label="Timeline: Your Home Timeline"] { display: none !important; }`;

    //Hides the new posts nudge that appears on the timeline, acts as a another nudge to draw your attention and interrupt your focus.
    newStyles.innerText += `button[aria-label="New posts are available. Push the period key to go to the them."] { display: none !important; }`;

    //Hides the number badges on the notification icon, which is a feature meant to draw your attention and interrupt your focus.
    newStyles.innerText += `div[aria-label$="unread items"] { display: none !important; }`;

    //Hides the entire trending section sidebar
    newStyles.innerText += `div[aria-label="Trending"] { display: none !important; }`;

    document.head.appendChild(newStyles);

    //This will force a redraw and flash the page for a second after new styles are added, fixes content being shown even when it shouldn't.
    document.body.style.display = 'none';

    //To-Do: Add mutationObserver to detect changes to the page title and revert them (would remove the only remaining nudge on the platform).
}

unshitify();

document.body.style.display = 'block';
})();
