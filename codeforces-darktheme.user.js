// ==UserScript==
// @name         Codeforces dark mode
// @version      1.1.4
// @description  Improved dark mode for Codeforces
// @author       Gaurang Tandon & fork by David
// @match        https://codeforces.com/*
// @match        http://codeforces.com/*
// @match        https://calendar.google.com/calendar/embed*
// @match        https://www.facebook.com/v2.8/plugins/like.php*
// @resource     desertCSS  https://github.com/LordLava/codeforces-darktheme/raw/master/desert.css
// @resource     monokaiEditorTheme https://raw.githubusercontent.com/ajaxorg/ace/master/lib/ace/theme/monokai.css
// @resource     darkthemecss https://github.com/LordLava/codeforces-darktheme/raw/master/darktheme.css
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @run-at       document-start
// ==/UserScript==

(function () {
	"use strict";

	var colors = {
		tableGreyRow: "#181818",
		whiteTextColor: "rgb(240, 240, 240)",
		inputBoxBackgroundBorderColor: "#383838",
		redColorJustPassesA11Y: "#ff0000",
		genericLinkBlueColor: "#00a6ff"
	};

	function overrideStyleAttribute(elm, prop, value) {
		elm.setAttribute("style", elm.getAttribute("style") + `; ${prop}: ${value} !important; `);
	}

	if (window.self != window.top && /calendar\.google\.com/.test(window.self.location.hostname)) {
		// cannot add the other styles as they interfere with
		// calendar's elements (since the selectors are so generic)
		GM_addStyle(`
/* google calendar logo, see #13 */
div.logo-plus-button {
    filter: invert(1) hue-rotate(180deg);
}`);
		// rest of the google calendar has already been inverted
		// so return
		return;
	}

	var style = GM_getResourceText("darkthemecss"),
		desertCSS = GM_getResourceText("desertCSS");

	GM_addStyle(style);
	GM_addStyle(desertCSS);

	// to avoid long FOUT duration
	function applyFuncWhenElmLoaded(sel, func) {
		var elm = document.querySelectorAll(sel);
		if (!elm || elm.length == 0) return setTimeout(applyFuncWhenElmLoaded, 100, sel, func);
		for (let i = 0, len = elm.length; i < len; i++) func(elm[i]);
	}

	// some properties are added via element.style
	// need to override them via javascript

	// div div h3 a = the top header "@user's blog" whose color property is added via js
	applyFuncWhenElmLoaded(
		"#pageContent div div h3 a, .comment-table.highlight-blue .right .ttypography p, .comment-table.highlight-blue .right .info",
		function (elm) {
			var obs = new MutationObserver(function (mutationList, observer) {
				mutationList.forEach(function (mutation) {
					if (mutation.type == "attributes" && mutation.attributeName == "style") {
						elm.setAttribute("style", elm.getAttribute("style") + "; color: white !important; ");
					}
				});
			});
			overrideStyleAttribute(elm, "color", "white");

			obs.observe(elm, { attributes: true });
		}
	);

	applyFuncWhenElmLoaded(".datatable div:nth-child(5)", function (elm) {
		elm.classList.add("dark");
	});

	// in this case !important doesn't workthrough css stylesheet
	applyFuncWhenElmLoaded(".unread td", function (elm) {
		elm.style.backgroundColor = "#13203a !important";
	});

	(function detect404Page() {
		applyFuncWhenElmLoaded("body > h3", function (elm) {
			if (elm.innerText.startsWith("The requested URL was not found on this server.")) {
				document.body.classList.add("notfoundpage");
			}
		});
	})();

	(function fixLavaMenu() {
		applyFuncWhenElmLoaded(".second-level-menu-list li.backLava", function (elm) {
			elm.style.backgroundImage =
				"url(https://github.com/LordLava/codeforces-darktheme/raw/master/imgs/lava-right2.png)";
			elm.firstElementChild.style.backgroundImage =
				"url(https://github.com/LordLava/codeforces-darktheme/raw/master/imgs/lava-left2.png)";
		});
	})();

	(function fixAceEditor() {
		applyFuncWhenElmLoaded("#editor", function (elm) {
			var monokaiEditorThemeCSS = GM_getResourceText("monokaiEditorTheme"),
				aceChromeClass = "ace-chrome";
			GM_addStyle(monokaiEditorThemeCSS);
			elm.classList.remove(aceChromeClass);
			elm.classList.add("ace-monokai");

			// using a mutationobserver to revert addition of class ace-chome
			// goes into an infinite loop, presumably because the script run
			// by codeforces adds it back
			function checkAceClassRemoved() {
				if (elm.classList.contains(aceChromeClass)) {
					elm.classList.remove(aceChromeClass);
				}
			}
			setInterval(checkAceClassRemoved, 10);
		});
	})();

	(function fixColorRedGreenContrast() {
		if (document.readyState != "complete") {
			return setTimeout(fixColorRedGreenContrast, 100);
		}

		var elms = document.querySelectorAll("*");
		for (let i = 0, len = elms.length; i < len; i++) {
			if (getComputedStyle(elms[i]).color == "rgb(0, 128, 0)") {
				overrideStyleAttribute(elms[i], "color", "#00c700");
			}
		}

		elms = document.querySelectorAll("font");
		for (let i = 0, len = elms.length; i < len; i++) {
			if (elms[i].getAttribute("color") == "red") {
				elms[i].setAttribute("color", colors.redColorJustPassesA11Y);
			}
		}
	})();

	(function fixBlackTextInRightTableDuringContest() {
		applyFuncWhenElmLoaded(".rtable span", function (elm) {
			if (elm.style && elm.style.color == "rgb(0, 0, 0)"){
				overrideStyleAttribute(elm, "color", colors.whiteTextColor);
            }
		});
	})();
	(function() {var css = [
		"img[src*=\"images/codeforces-vs-coronavirus-65.png\"] { filter: invert(88.4%); }",
		"	img[src*=\"images/codeforces-logo-with-upper-gamma.png\"] { filter: invert(88.4%); }",
		"	img[src*=\"codeforces-logo-with-telegram.png\"] { filter: invert(88.4%); }",
		"	img[src*=\"honorcup-marathon-logo.png\"] { filter: invert(88.4%); }",
		"	img[src*=\"technocup-logo-en.png\"] { filter: invert(88.4%); }",
		"	img[src*=\"dasha-logo.png\"] { filter: invert(88.4%); }",
		"	img[src*=\"kotlin_heroes_page_header-55.png\"] { filter: invert(88.4%); }",
		"	img[src*=\"ffc2019-logo.png\"] { filter: invert(88.4%); }",
		"	img[src*=\"acs2018.png\"] { filter: invert(88.4%); }",
		"	img[src*=\"mailrucup-logo-70.png\"] { filter: invert(88.4%); }",
		"	img[src*=\"star-vkcup-2015-300.png\"] { filter: invert(88.4%); }",
		"	img[src*=\"lyft-5-logo-2.png\"] { filter: invert(88.4%); }",
		"	img[src*=\"vkcup2018/star-vkcup-2018-300.png\"] { filter: invert(88.4%); }",
		"	img[src*=\"acs2018.png.png\"] { filter: invert(88.4%); }",
		"	img[src*=\"memsql-startcup3-logo.png\"] { filter: invert(88.4%); }",
		"	img[src*=\"aimtech-logo.png\"] { filter: invert(88.4%); }",
		"	img[src*=\"star-vkcup-2017-300.png\"] { filter: invert(88.4%); }",
		"	img[src*=\"tinkoff-en-logo.png\"] { filter: invert(88.4%); }",
		"	img[src*=\"playrix2017-logo-x.png\"] { filter: invert(88.4%); }",
		"	img[src*=\"8vc/8vc-venturecup-logo.png\"] { filter: invert(88.4%); }",
		"	img[src*=\"rcc15-logo.jpg\"] { filter: invert(0%); }",
		"	img[src*=\"star-vkcup-2016-300.png\"] { filter: invert(88.4%); }",
		"	img[src*=\"croc-champ-eng.png\"] { filter: invert(88.4%); }",
		"	img[src*=\"wunderfund-logo.png\"] { filter: invert(88.4%); }",
		"	img[src*=\"custom/croc-en.gif\"] { filter: invert(88.4%); }",
		"	img[src*=\"memsql_logo_small.png\"] { filter: invert(88.4%); }",
		"	img[src*=\"zepto2014/logo2.png\"] { filter: invert(88.4%); }",
		"	img[src*=\"coder-strike-logo-04.png\"] { filter: invert(88.4%); }",
		"	img[src*=\"rockethon/HZ-LOGO-TAG-RGB-small.png\"] { filter: invert(88.4%); }",
		"	img[src*=\"bayan/bayan-logo.png\"] { filter: invert(88.4%); }",
		"	img[src*=\"yandex-algorithm-en-logo.png\"] { filter: invert(88.4%); }",
		"	img[src*=\"hsu.png\"] { filter: invert(88.4%); }"
	].join("\n");
	if (typeof GM_addStyle != "undefined") {
		GM_addStyle(css);
	} else if (typeof PRO_addStyle != "undefined") {
		PRO_addStyle(css);
	} else if (typeof addStyle != "undefined") {
		addStyle(css);
	} else {
		var node = document.createElement("style");
		node.type = "text/css";
		node.appendChild(document.createTextNode(css));
		var heads = document.getElementsByTagName("head");
		if (heads.length > 0) {
			heads[0].appendChild(node);
		} else {
			// no head yet, stick it whereever
			document.documentElement.appendChild(node);
		}
	}
	})();
	// cannot override through css since specifity issue
	(function improveLinkColorInGreenAlerts() {
		applyFuncWhenElmLoaded("div.alert-success a", function (elm) {
			overrideStyleAttribute(elm, "color", "#004794");
		});
	})();
})();
