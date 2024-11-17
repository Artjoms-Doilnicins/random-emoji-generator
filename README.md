# Random Emoji Generator

[https://artjoms-doilnicins.github.io/random-emoji-generator/](https://artjoms-doilnicins.github.io/random-emoji-generator/)

A simple app that generates random emojis when a button is clicked. The app fetches emojis from an external API, displays a random emoji, and shows its name on the button.

## Features

### JavaScript

#### Key Features:

- **Emoji Array**:
  - The emojis are fetched from an external API (`emoji-api.com`) and stored in the `emoji` array. The array contains objects with `emojiName` (the emoji character) and `emojiCode` (its Unicode name).
 
- **Button Functionality** :
  - When the button is clicked, the app generates a random number, selects a random emoji from the array, and displays its name on the button and code below it.
 
- **Fetching Emojis** : 
  - The `addEmoji()` function fetches a list of 1500 emojis from the emoji API and populates the `emoji` array.

- **Initial Data Loading** : 
  - The `addEmoji()` function is called when the page loads to ensure that the emoji list is populated before any clicks happen.

## How It Works 

1. Click the "click" button to generate a random emoji and display its name.
