// ==UserScript==
// @name         Codeforces dark theme
// @version      0.1
// @description  dark theme for codeforces
// @author       Gaurang Tandon
// @match        https://codeforces.com/*
// @resource     desertCSS  https://github.com/google/code-prettify/raw/master/styles/desert.css
// @grant        GM_addStyle
// @grant        GM_getResourceText
// ==/UserScript==

(function() {
    'use strict';

    var colors = {
        tableGreyRow: "#353535"
    };

var style =
`
/* BACKGROUND/BORDER COLOR CHANGES */
body, .roundbox, .bottom-links {
    background-color: #1e1e1e !important;
}

.topic .content{
    border-left-color: #999 !important;
}

.comment-table{
    border-color: grey !important;
}

div.ttypography .bordertable thead th:not(:last-child){
     border-right-color: #000;
}

.search, .ac_input, input[type="text"]{
    background-color: #383838 !important;
}

.dark, .ttypography tbody tr:hover td{
    background-color: ${colors.tableGreyRow} !important;
}

/* codeforces uses code.prettyprint element but desert.css looks for pre.prettyprint */
pre {
    background-color: #333 !important;
}

/* these are inline code blocks */
div.ttypography .tt {
    color: #fff !important;
    border-color: #333 !important;
    background-color: #333 !important;
}

/* TEXT COLOR CHANGES */
.info,
.ttypography,
.ttypography table,
.ttypography h1, .ttypography h2, .ttypography h3, .ttypography h4, .ttypography h5, .ttypography h6,
.right-meta,
.tickLabel,
.personal-sidebar,
.roundbox
{
    color: rgb(220, 220, 220) !important;
}

.topic .title p {
    color: rgb(94, 146, 255) !important;
}

.caption.titled, .contest-state-phase {
    color: #6684c1 !important;
}

/* OTHER CHANGES */
.roundbox{
    border-radius: 5px;
}

.ttypography h5{
    font-weight: bold;
}

.roundbox-lt, .roundbox-lb, .roundbox-rt, .roundbox-rb{
    display: none;
}

.bottom-links {
    border-bottom-left-radius: 5px !important;
    border-bottom-right-radius: 5px !important;
}

.second-level-menu-list li {
    border-radius: 5px !important;
}

/* RATING COLOR CHANGES*/

a:link:not(.rated-user), a:visited:not(.rated-user){
    color: rgb(65, 131, 196) !important;
}

/* need to prefix overrides with tag name
 precedence woes :( */
span.legendary-user-first-letter, a.user-admin {
    color: #fff !important;
}

/* tr for the rating tables page*/
tr.user-blue td, span.user-blue, a.user-blue{
    color: #757dff !important;
}
`;

    GM_addStyle(style);

    var desertCSS = GM_getResourceText("desertCSS");
    GM_addStyle(desertCSS);

    // some properties are added via element.style
    // need to override them via javascript

    applyFuncWhenElmLoaded("#pageContent div div h3 a", function(elm){
        var obs = new MutationObserver(function(mutationList, observer){
            mutationList.forEach(function(mutation){
                console.log(mutation);
                if(mutation.type == "attributes" && mutation.attributeName == "style"){
                    elm.style.color = "white";
                }
            });
        });
        elm.style.color = "white";

        obs.observe(elm, {attributes: true});
    });

    function applyFuncWhenElmLoaded(sel, func){
        var elm = document.querySelector(sel);
        if(!elm) return setTimeout(applyFuncWhenElmLoaded, 100, sel, func);
        func(elm);
    }

    (function fixFBPluginText(){
        /*var reg = /<span id="u_0_4" data-usprocessed="true"/,
            m = window.innerHTML.match(reg);

        if(!m) return setTimeout(fixFBPluginText, 100)

        window.innerHTML =   */

        // get CORS error :(
        /*
        var ifr = document.querySelector(".fb-like iframe"),
            doc = ifr && ifr.contentWindow.document;
        if(!doc || !doc.body || !doc.body.parentElement || !doc.body.parentElement.id) return setTimeout(fixFBPluginText, 100);

        doc.querySelector("#u_0_4").style.color = "white";
        */
    })();
})();
