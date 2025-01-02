# SCLC
[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/Q5Q6187AYL)

SCLC (**S**team **C**ommunity **L**anguage **C**hanger) is a small and pretty basic Userscript that changes the language of Steam on any steamcommunity.com page..

>[!WARNING]
>This script does not change the language of the actual post, it's only purpose is to change Steam's language.

Have you ever tried to search for something Steam-related and clicked on a Steam community post on Google and the site was not in your language? Well, fear not dear user as this extension is going to help you!

When you have this extension installed it will change any Steam community site to your preffered language.

## Installation
There are two ways to install SCLC:
* Install from the [latest release](https://github.com/smooll-d/sclc/releases/latest)
* Install form [GreasyFork](https://greasyfork.org/pl/scripts/522391-steam-community-language-changer)

## Usage
By default SCLC is set to change every page to English. If you want to change that, edit the script in your userscript manager of choice, find the line shown below:

```js
const language = "english";
```

Next, change the `"english"` to your language of choice, e.g. `"polish"`, `"french"`, `"german"`. **Don't forget to save!**

Now, next time you click on a Steam community post with a different language set, it will automatically set it to your language.

>[!NOTE]
>The webpage will refresh to actually set the language, so wait patiently until it's refreshed!

>[!NOTE]
>If you enable the script while on a Steam community page, it will not refresh for you, you have to refresh manually, so the script can be enabled, it will then set the language and refresh one more time.

## To-Dos
Hopefully I can implement these in the future so it's much easier to use the script:
* [ ] Use browser language to set Steam's language so user doesn't have to edit the script and set it themself

## Support
If you enjoy using this Userscript and it helps you, consider making a donation to my [Ko-Fi](https://ko-fi.com/smooll).

Any amount of money is greatly appreciated and if you don't want to, you don't have to, this Userscript is completely free to use by anyone.

Your donation will help me realize my dream of programming as a career.

You can also give this project a star if you don't feel like donating!
