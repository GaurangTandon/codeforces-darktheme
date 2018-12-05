// ==UserScript==
// @name         Codeforces dark theme
// @version      0.1
// @description  dark theme for codeforces
// @author       Gaurang Tandon
// @match        https://codeforces.com/*
// @match        https://calendar.google.com/calendar/embed
// @match        https://www.facebook.com/v2.8/plugins/like.php
// @match        https://www.facebook.com/v2.8/plugins/like.php/
// @match        https://www.facebook.com/v2.8/plugins/like.php/*
// @resource     desertCSS  https://github.com/google/code-prettify/raw/master/styles/desert.css
// @resource     monokaiEditorTheme https://raw.githubusercontent.com/ajaxorg/ace/master/lib/ace/theme/monokai.css
// @grant        GM_addStyle
// @grant        GM_getResourceText
// ==/UserScript==

(function() {
    'use strict';

    var colors = {
        tableGreyRow: "#2e2e2e",
        whiteTextColor: "rgb(220, 220, 220)",
        inputBoxBackgroundBorderColor: "#383838",
        redColorJustPassesA11Y: "#ff3333",
        genericLinkBlueColor: "#4d9fef"
    };

    console.log(window.location.hostname);

var style =
`
/* BACKGROUND/BORDER COLOR CHANGES */
body, .roundbox,
.bottom-links,
.datatable td:not(.dark), .datatable th,
#facebox .content {
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

.search, .ac_input, input[name$="Difficulty"], input[type="text"],
#title,
#comment {
    background-color: ${colors.inputBoxBackgroundBorderColor} !important;
    border-color: ${colors.inputBoxBackgroundBorderColor} !important;
    color: ${colors.whiteTextColor} !important;
}

.dark, .ttypography tbody tr:hover td, .status-frame-datatable tr td.dark {
    background-color: ${colors.tableGreyRow} !important;
}

div.ttypography tbody tr:hover th {
     color: black !important;
     border-color: black !important;
}

/* codeforces uses code.prettyprint element but desert.css looks for pre.prettyprint */
pre {
    background-color: #333 !important;
}

/* during contest, own submissions's row needs to be highlighted */
.datatable .highlighted-row td{
    background-color: #000 !important;
}

/* these are inline code blocks */
div.ttypography .tt {
    color: #fff !important;
    border-color: #333 !important;
    background-color: #333 !important;
}

.sidebar-menu ul li {
    border: none !important;
}

.sidebar-menu ul li:hover {
    border: 1px solid #2e2e2e !important;
    background-color: #2e2e2e !important;
}

/* submissions page and contest front page */
.problems tr.rejected-problem td.id {
    border-left-color: #ffabab !important;
}

.problems tr.rejected-problem td.act {
    background-color: #ffabab !important;
}

.problems tr.accepted-problem td.id {
    border-left-color: rgb(178, 224, 159) !important;
}

.problems tr.accepted-problem td.act{
    background-color: rgb(178, 224, 159) !important;
}

div.ttypography .MathJax {
    -webkit-filter: invert(1) !important;
    filter: invert(1)  !important;
}

div.ttypography a:hover, div.ttypography a:focus {
    background-color: #020466 !important;
}

table tbody tr th a img[alt^="Sort"] {
     filter: invert(1);
}

/* issues/#7 */
.datatable td.state[style^="back"]{
    background-color: #4a4a4a !important;
}

.datatable td.state[style^="back"] .notice {
    color: #cccccc !important;
}

/* markitup topic editor, make header and tag input boxes white */
.miu-complete, input[name^="tag"].ac_input
{
    background-color: ${colors.inputBoxBackgroundBorderColor} !important;
    border-color: ${colors.inputBoxBackgroundBorderColor} !important;
}

/* user search button */
input[type="submit"], input[type="button"], input[type="file"] {
    color: ${colors.whiteTextColor} !important;
    background: #4f4f4f !important;
    border-color: #4f4f4f !important;
}

/* fix for google calendar */
.CalendarPage_calendar {
    filter: invert(90%) hue-rotate(180deg);
    background: rgb(25, 25, 25);
}

.CalendarPage_calendar iframe{
    margin-top: 0px !important;
}

/* fix inverted google calendar logo */
.logo-plus-button {
     filter: invert(1) hue-rotate(180deg);
}

/* topic editor */
.miu-complete {
    background: #fff !important; /* #fff gets inverted */
    filter: invert(90%) hue-rotate(180deg);
}

/* fix CF logo's inverted colors */
.miu-complete .markItUp .markItUpButton12 a {
    filter: invert(90%) hue-rotate(180deg);
}

textarea[name="input"], textarea[name="output"] {
    background-color: #272822;
    color: white;
}

/* issues/#10 */
.delete-resource-link, .close {
    filter: invert(1);
    background-color: #e0e0e0 !important;
}

.close_image{
    opacity: 0.7 !important;
}

/* TEXT COLOR CHANGES */
.info /* below the blog headings */,
.ttypography /* generic class */,
.ttypography table,
.ttypography h1, .ttypography h2, .ttypography h3, .ttypography h4, .ttypography h5, .ttypography h6,
.right-meta,
.tickLabel /* the vertical and horizontal reading values on rating graph */,
.personal-sidebar,
.roundbox /* almost all bordered boxes on the page */,
#footer,
.pagination /* at bottom of tables of /ratings */,
#locationSelect /* country/org/city menu on top right of /ratings table */,
#pageContent /* container for everything on the page except the topbar, sideboxes and logo */, #pageContent > div:not(:first-child),
body.notfoundpage h3, /* notfoundpage class courtesy of JS function below */
#facebox .content,
.lang-chooser,
.page-index.active
{
    color: ${colors.whiteTextColor} !important;
}

a:not(:link):not(.rated-user), a:link:not(.rated-user), a:visited:not(.rated-user),
span.verdict-unsuccessful-challenge /* unsuccessful hacking attempt */,
span.cell-rejected /* rejected indicator on contests' standings */ {
    color: ${colors.genericLinkBlueColor} !important;
}

ul.second-level-menu-list li:hover a:hover {
    color: #014486 !important;
}

ul.second-level-menu-list li:hover a:link {
    color: #014486 !important;
}

li.selectedLava a:link {
    color: #014486 !important;
}

ul.second-level-menu-list:hover li:hover:not(.selectedLava) + .selectedLava a:link
/* ul.second-level-menu-list:hover li.selectedLava:not(:hover) a:link */ {
    color: ${colors.genericLinkBlueColor} !important;
}

/* for problem tags on /problemset */
a:link.notice {
    color: #bababa !important;
}

// the mathjax expressions that are
// denoted by images
.tex-formula {
    filter: invert(1) hue-rotate(180deg);
}

div ul.menu-list li a:link, div ul.menu-list li a:visited {
     color: white !important;
}

/* on submissions page */
.verdict-rejected {
    color: lightblue !important;
}

/* hack to increase specificity */
a.red-link[href^="/contestRegistration"] {
    background-color: #9a0000 !important;
    color: ${colors.whiteTextColor} !important;
}

/* center a to fix formatting mishap as seen on https://codeforces.com/blog/entry/63505 and other related
 company posts */
.topic .content center a {
    color: ${colors.whiteTextColor} !important;
}

.topic .title p {
    color: rgb(94, 146, 255) !important;
}

.caption.titled, .contest-state-phase {
    color: #91a5cd !important;
}

.input pre, .output pre,
/* embedded submissions display */
pre.input, pre.output, pre.answer, pre.checker, pre.diagnostics  {
    color: white !important;
}

span.contest-state-regular, .countdown {
    color: #bababa !important;
}

/* Datatables on Gym, Submissions, Friends list, etc.*/
/* its background color shows up as borders of the table */
.datatable, .status-frame-datatable {
    color: ${colors.whiteTextColor} !important;
    border-radius: 5px;
    background-color: #585858 !important;
}

.personal-sidebar div:nth-child(2) ul li:nth-child(2) span{
    color: #a8a8a8 !important;
}

.fix-tag-topic-contrast span a {
    color: white !important;
}

/* issues#6 */
#vote-list-filterDifficultyLowerBorder li a.vote-item:hover, #vote-list-filterDifficultyLowerBorder {
    filter: invert(1) hue-rotate(180deg);
}

/* OTHER CHANGES */
.roundbox{
    border-radius: 5px;
}

.ttypography h5{
    font-weight: bold;
}

.roundbox-lt, .roundbox-lb, .roundbox-rt, .roundbox-rb,
.datatable .lt, .datatable .lb, .datatable .rt, .datatable .rb, .datatable .ilt, .datatable .irt {
    display: none !important;
}

.bottom-links {
    border-bottom-left-radius: 5px !important;
    border-bottom-right-radius: 5px !important;
}

.second-level-menu-list li {
    border-radius: 5px !important;
}

td.dark span[style^="color: #0000bb;"]{
    color: #4e9fef !important;
}

.datatable td.state a[href$="standings"] {
    color: #8cc3f9 !important;
}

/* gym pages */
div.setting-name {
    color: #6c8bcc !important;
}

/* RATING COLOR CHANGES*/

/* need to prefix overrides with tag name
 precedence woes :( */
span.legendary-user-first-letter, a.user-admin, a.user-black {
    color: #fff !important;
}

/* tr for the rating tables page*/
tr.user-blue td, span.user-blue, a.user-blue{
    color: #757dff !important;
}

/* for a11y contrast coloring */
a.user-red, a.user-legendary {
    color: ${colors.redColorJustPassesA11Y} !important;
}

a.user-cyan{
    color: #01bdb2 !important;
}

a.user-violet {
    color: #ff6cff !important;
}
`;

    GM_addStyle(style);

    var desertCSS = GM_getResourceText("desertCSS");
    GM_addStyle(desertCSS);

    // some properties are added via element.style
    // need to override them via javascript

     // div div h3 a = the top header "@user's blog" whose color property is added via js
    applyFuncWhenElmLoaded("#pageContent div div h3 a, .comment-table.highlight-blue .right .ttypography p, .comment-table.highlight-blue .right .info", function(elm){
        var obs = new MutationObserver(function(mutationList, observer){
            mutationList.forEach(function(mutation){
                console.log(mutation);
                if(mutation.type == "attributes" && mutation.attributeName == "style"){
                    elm.setAttribute("style", elm.getAttribute("style") + "; color: white !important; ");
                }
            });
        });
        elm.setAttribute("style", elm.getAttribute("style") + "; color: white !important; ");

        obs.observe(elm, {attributes: true});
    });

    applyFuncWhenElmLoaded(".datatable div:nth-child(5)", function(elm){
        elm.classList.add("dark");
    });

    // to avoid long FOUT duration
    function applyFuncWhenElmLoaded(sel, func){
        var elm = document.querySelector(sel);
        if(!elm) return setTimeout(applyFuncWhenElmLoaded, 100, sel, func);
        if(Array.isArray(elm))
            for(let i = 0, len = elm.length; i < len; i++)
                func(elm[i]);
        else func(elm);
    }

    (function detect404(){
        applyFuncWhenElmLoaded("body > h3", function(elm){
            if(elm.innerText.startsWith("The requested URL was not found on this server.")){
                document.body.classList.add("notfoundpage");
            }
        });
    })();

    (function fixAceEditor() {
        applyFuncWhenElmLoaded("#editor", function(elm) {
            var monokaiEditorThemeCSS = GM_getResourceText("monokaiEditorTheme"),
                aceChromeClass = "ace-chrome";
            GM_addStyle(monokaiEditorThemeCSS);
            elm.classList.remove(aceChromeClass);
            elm.classList.add("ace-monokai");

            // using a mutationobserver to revert addition of class ace-chome
            // goes into an infinite loop, presumably because the script run
            // by codeforces adds it back
            function checkAceClassRemoved(){
                if(elm.classList.contains(aceChromeClass)){
                    elm.classList.remove(aceChromeClass);
                }
            }
            setInterval(checkAceClassRemoved, 10);
        });
    })();

    (function fixColorRedGreenContrast(){
        if(document.readyState == "complete"){
            var elms = document.querySelectorAll("*");
            for(let i = 0, len = elms.length; i < len; i++){
                if(getComputedStyle(elms[i]).color == "rgb(0, 128, 0)"){
                    elms[i].setAttribute("style", elms[i].getAttribute("style") + "; color: #00c700 !important; ");
                }
            }

            elms = document.querySelectorAll("font");
            for(let i = 0, len = elms.length; i < len; i++){
                if(elms[i].getAttribute("color") == "red"){
                    elms[i].setAttribute("color", colors.redColorJustPassesA11Y);
                }
            }
        }
        else setTimeout(fixColorRedGreenContrast, 100);
    })();

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
