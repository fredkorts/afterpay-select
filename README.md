# Afterpay Select Component

A custom React component for replacing the default HTML select element, built using the Swiper.js library. This mobile-ready component offers a carousel slider for displaying and selecting options, easily usable with a finger, mouse, or keyboard. It comes with built-in customization options to seamlessly integrate with your application's style.

## Features

- Mobile-ready and responsive design
- Customizable appearance with various configuration options
- Keyboard support (configurable)

## Demo

Test the component by either cloning the repository or visiting the temporary site it's currently hosted on.

### Method 1: Clone the repository

```
git clone git@github.com:fredkorts/afterpay-select.git afterpay-select
npm i
npm run dev
```

To build the app, run

```
npm run build
```

### Method 2: Visit the demo page

```
https://67c2d22c.afterpay-select.pages.dev/
```

## Configuration Options

- subtitle (string) - Modify the text on the card, which defaults to "€/Month".
- primaryColor (string) - Change the color of the default options and the subtitle text.
- secondaryColor (string) - Change the color of the arrows and the currently selected value.
- backgroundColor (string) - Change the background color, which is white (#fff) by default.
- keyboardEnabled (boolean) - Disable or enable keyboard support. Adding this option without a value defaults to true.
