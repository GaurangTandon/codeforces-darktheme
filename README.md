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
    | Grandmaster                                  | ![red](https://user-images.githubusercontent.com/62207434/181259908-2df502e7-c398-4407-9bd6-1da3cdd8b920.png) red                  | ![#ff4747](https://user-images.githubusercontent.com/62207434/181260614-2738b0d5-f52d-4411-bd79-2ab9f9c37043.png) `#ff4747` |
    | Candidate master                             | ![violet](https://user-images.githubusercontent.com/62207434/181260265-1be718c2-e867-44d0-a066-e588e480fe3b.png) violet            | ![#ce8aff](https://user-images.githubusercontent.com/62207434/181260624-c29a5d22-6c11-4c19-9874-0acc28c64e3e.png) `#ce8aff` |
    | Expert                                       | ![blue](https://user-images.githubusercontent.com/62207434/181260319-bf58addb-b327-4c31-a340-6fde2c6c30d6.png) blue                | ![#757dff](https://user-images.githubusercontent.com/62207434/181260628-a04e4ed5-43b4-485a-8156-8c4a380a4d11.png) `#757dff` |
    | Specialist                                   | ![cyan](https://user-images.githubusercontent.com/62207434/181260378-738f0f7a-5302-41f1-851d-efcad298c265.png) cyan (`#03a89e`)    | ![#01bdb2](https://user-images.githubusercontent.com/62207434/181260639-e6cfad86-0b25-4f07-a23d-4ca73b17885b.png) `#01bdb2` |
    | Pupil                                        | ![green](https://user-images.githubusercontent.com/62207434/181260440-9b43353d-07ad-4c5c-bde7-1703bb413ac3.png) green (`#00d700`) | ![#00c700](https://user-images.githubusercontent.com/62207434/181260653-430462ca-ff29-48a4-ae08-d5ccbda4d648.png) `#00c700` |
    | Newbie                                       | ![gray](https://user-images.githubusercontent.com/62207434/181260480-d0c737a4-7367-454a-9dd2-3ebea0019265.png) gray                | ![#8c8c8c](https://user-images.githubusercontent.com/62207434/181260660-440aab86-daaa-495f-97be-72ab4463f114.png) `#8c8c8c` |

    To view all the color changes at once, view the table on the [blog post "Second Revolution of Colors and Titles"](https://codeforces.com/blog/entry/20638).

## External dependencies

Both are for dark theme syntax highlighting of code.

1. [prettyprint's desert.css](https://github.com/google/code-prettify/blob/master/styles/desert.css), since Codeforces depends on the same library for formatting submission's display ([Apache license](https://github.com/google/code-prettify/blob/master/COPYING)).
2. [Ace editor's monokai.css](https://github.com/ajaxorg/ace/blob/master/lib/ace/theme/monokai.css) since Codeforces' submission codebox uses the Ace editor ([BSD license](https://github.com/ajaxorg/ace/blob/master/LICENSE)).

## Contribution guidelines

PRs are most welcome! Though it may be better to first create an issue describing the problem the PR fixes and then create it, in order to get more alternate views on the problem.

## License

MIT License attached.
