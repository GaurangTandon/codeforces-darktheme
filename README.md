# Codeforces Dark Theme

A dark theme for Codeforces. [**Click to install**](https://github.com/GaurangTandon/codeforces-darktheme/raw/master/codeforces-darktheme.user.js) <sup>BETA</sup>

![screenshot of home page](./imgs/screenshot.png)

**Accessibility in mind**: All colors used clear the minimum AA accessibility contrast ratio of 4.5:1, while most of them also clear the AAA contrast ratio of 7:1.

## Download instructions

1. Install Tampermonkey for your browser. [Instructions here](https://tampermonkey.net/).
2. [**Click this link**](https://github.com/GaurangTandon/codeforces-darktheme/raw/master/codeforces-darktheme.user.js) to install Codeforces dark theme userscript. 

In case the script is updated later, you need not revisit the page. Tampermonkey auto fetches new updates every 24hrs by default.

## Notes

1. **Rating color adjustments**: User handle colors needed to be reworked to be nice with the latest dark theme. That means the following colors now appear only ever so differently, but the sharp eyes amongst you may notice ;) These color adjustments are only meant to **improve contrast ratio of text** against a dark background.

   - admins and non-rated users are now colored white (`#fff`) instead of black (`#000`). The first letter of legendary users is now also white instead of black.
   - Grandmaster users are now colored ![#ff3333](https://placehold.it/15/ff3333/000000?text=+) `#ff3333` instead of the usual ![violet](https://placehold.it/15/ff0000/000000?text=+) red.
   - candidate master users are now colored ![#ce8aff](https://placehold.it/15/ce8aff/000000?text=+) `#ce8aff` instead of the usual ![violet](https://placehold.it/15/aa00aa/000000?text=+) violet.
   - expert users are now colored ![#757dff](https://placehold.it/15/757dff/000000?text=+) `#757dff` instead of the usual ![blue](https://placehold.it/15/0000ff/000000?text=+) blue.
   - specialist users are now colored ![#01bdb2](https://placehold.it/15/01bdb2/000000?text=+) `#01bdb2` instead of the usual ![cyan](https://placehold.it/15/03A89E/000000?text=+) cyan (`#03a89e`).
   - pupil users are now colored ![#00c700](https://placehold.it/15/00c700/000000?text=+) `#00c700` instead of the usual ![247d00](https://placehold.it/15/247d00/000000?text=+) green (`#00d700`).
   

## External dependencies

Both are for dark theme syntax highlighting of code.

1. [prettyprint's desert.css](https://github.com/google/code-prettify/blob/master/styles/desert.css), since Codeforces depends on the same library for formatting submission's display.
2. [Ace editor's monokai.css](https://raw.githubusercontent.com/ajaxorg/ace/master/lib/ace/theme/monokai.css) since Codeforces' submission codebox uses the Ace editor.

## Contribution guidelines

Feel free to make a PR which clearly describes what issue is being fixed. Thus it may be better to first create an issue and then create a PR.

## License

MIT License attached.
