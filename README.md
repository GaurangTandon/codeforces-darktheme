# Codeforces Dark Theme
## Download instructions

1. Install Tampermonkey for your browser. ([Instructions](https://tampermonkey.net/)).
2. [**Click this link (White Nutella) **](https://github.com/LordLava/codeforces-darktheme/raw/master/codeforces-darktheme.user.js) to install Codeforces dark theme userscript.
  [**Click this link (Black Nutella) **](https://github.com/LordLava/codeforces-darktheme/raw/master/codeforces-darktheme-darknutella.user.js) to install Codeforces dark theme userscript.
3. Reload Codeforces twice.



A dark theme for Codeforces. [**Click to install**](https://github.com/LordLava/codeforces-darktheme/raw/master/codeforces-darktheme.user.js) (requires a userscript manager)

![screenshot of home page](./imgs/screenshot.png)

In case the script is updated later, you need not revisit the page. Tampermonkey auto fetches new updates every 24hrs by default. 

In case you're getting this warning:

> Apps, extensions, and user scripts can not be added from this website.

This warning is mainly to prevent vulnerable users from installing malicious extensions and apps. In my case, you can trust this userscript as its code is posted on GitHub, under public scrutiny. So, you can safely ignore the warning and proceed with installation.


## External dependencies

Both are for dark theme syntax highlighting of code.

1. [prettyprint's desert.css](https://github.com/google/code-prettify/blob/master/styles/desert.css), since Codeforces depends on the same library for formatting submission's display ([Apache license](https://github.com/google/code-prettify/blob/master/COPYING)).
2. [Ace editor's monokai.css](https://github.com/ajaxorg/ace/blob/master/lib/ace/theme/monokai.css) since Codeforces' submission codebox uses the Ace editor ([BSD license](https://github.com/ajaxorg/ace/blob/master/LICENSE)).

## Contribution guidelines

PRs are most welcome! Though it may be better to first create an issue describing the problem the PR fixes and then create it, in order to get more alternate views on the problem.

## License

MIT License attached.
