# Codeforces Dark Theme

A dark theme for Codeforces. [**Click to install**](https://github.com/GaurangTandon/codeforces-darktheme/raw/master/codeforces-darktheme.user.js) (requires a userscript manager)

![screenshot of home page](./imgs/screenshot.png)

**Accessibility in mind**: All colors used clear the minimum AA accessibility contrast ratio of 4.5:1, while most of them also clear the AAA contrast ratio of 7:1.

## Download instructions

1. Install Tampermonkey for your browser. ([Instructions](https://tampermonkey.net/)).
2. [**Click this link**](https://github.com/GaurangTandon/codeforces-darktheme/raw/master/codeforces-darktheme.user.js) to install Codeforces dark theme userscript.

In case the script is updated later, you need not revisit the page. Tampermonkey auto fetches new updates every 24hrs by default. 

In case you're getting this warning:

> Apps, extensions, and user scripts can not be added from this website.

This warning is mainly to prevent vulnerable users from installing malicious extensions and apps. In my case, you can trust this userscript as its code is posted on GitHub, under public scrutiny. So, you can safely ignore the warning and proceed with installation.

## Notes

1. **Rating color adjustments**: User handle colors needed to be reworked to be nice with the latest dark theme. That means the following colors now appear only ever so differently, but the sharp eyes amongst you may notice ;) These color adjustments are only meant to **improve contrast ratio of text** against a dark background.

    | users                                        | original color                                                            |                             new color                              |
    | -------------------------------------------- | ------------------------------------------------------------------------- | :----------------------------------------------------------------: |
    | admins, non-rated, first letter of legendary | black (`#000`)                                                            |                           white (`#fff`)                           |
    | Grandmaster                                  | ![red](https://placehold.it/15/ff0000/000000?text=+) red                  | ![#ff4747](https://placehold.it/15/ff4747/000000?text=+) `#ff4747` |
    | Candidate master                             | ![violet](https://placehold.it/15/aa00aa/000000?text=+) violet            | ![#ce8aff](https://placehold.it/15/ce8aff/000000?text=+) `#ce8aff` |
    | Expert                                       | ![blue](https://placehold.it/15/0000ff/000000?text=+) blue                | ![#757dff](https://placehold.it/15/757dff/000000?text=+) `#757dff` |
    | Specialist                                   | ![cyan](https://placehold.it/15/03A89E/000000?text=+) cyan (`#03a89e`)    | ![#01bdb2](https://placehold.it/15/01bdb2/000000?text=+) `#01bdb2` |
    | Pupil                                        | ![247d00](https://placehold.it/15/247d00/000000?text=+) green (`#00d700`) | ![#00c700](https://placehold.it/15/00c700/000000?text=+) `#00c700` |
    | Newbie                                       | ![gray](https://placehold.it/15/808080/000000?text=+) gray                | ![#8c8c8c](https://placehold.it/15/8c8c8c/000000?text=+) `#8c8c8c` |

    To view all the color changes at once, view the table on the [blog post "Second Revolution of Colors and Titles"](https://codeforces.com/blog/entry/20638).

## External dependencies

Both are for dark theme syntax highlighting of code.

1. [prettyprint's desert.css](https://github.com/google/code-prettify/blob/master/styles/desert.css), since Codeforces depends on the same library for formatting submission's display ([Apache license](https://github.com/google/code-prettify/blob/master/COPYING)).
2. [Ace editor's monokai.css](https://github.com/ajaxorg/ace/blob/master/lib/ace/theme/monokai.css) since Codeforces' submission codebox uses the Ace editor ([BSD license](https://github.com/ajaxorg/ace/blob/master/LICENSE)).

## Contribution guidelines

PRs are most welcome! Though it may be better to first create an issue describing the problem the PR fixes and then create it, in order to get more alternate views on the problem.

## License

MIT License attached.
