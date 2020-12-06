# Telegram Limits
This project describes Telegram limitations and displays them on [limits.tginfo.me/en](https://limits.tginfo.me/en)

## How to contribute
### Report problem or make a suggestion
- [Bug Tracker](https://github.com/tginfo/Telegram-Limits/issues/new)
- [Feedback](https://t.me/infowritebot) 

### Translations
The project is not ready yet to be multilangual, please check in few days

### How to work with data
1. All the data is located in `/data`, in `ru.js` and `en.js` files accordingly
2. File structure
```javascript
// Присваивание данных в ожидаемую переменную
window.data = [
    // Секция
    {
        // Section name
        "name": "Accounts",

        // Icon name from material.io/icons
        "icon": "account_circle",

        // RGB of the section accent color
        "color": "110, 80, 200",

        // Section contents
        "items": [
            {
                // Element that's being described
                "name": "Username",

                // Clarification (gray text after the name)
                "hint": "(e.g. @cameraman)",

                // The limitation
                "text": "5 to 32 symbols",

                // Icon name from material.io/icons
                "icon": "alternate_email"
            },

            {
                ...
            }
        ]
    },
    {
        ...
    }
];
```
3. Pull requests are welcomed
