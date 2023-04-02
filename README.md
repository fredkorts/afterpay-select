# Afterpay Select component

This is a custom React component to replace the default select HTML element.

## Custom component for displaying and selecting options.

This component is built using the Swiper.js library. It takes an array of values and displays them for the user in the form of a carousel slider. The component is mobile-ready, able to adapt to smaller screen sizes and its easily usable with either your finger, mouse or keyboard.
It has a number of built in customization options to allow it to blend in with your applications style.

## Testing

You can test this component out either by downloading this repository or visiting the temporary site it's currently hosted on.

### Method 1: Download it

```
git clone git@github.com:fredkorts/afterpay-select.git afterpay-select
npm i
npm run dev
```

You can also build the app with

```
npm run build
```

### Method 2: Visit the page

```
https://6cbf2e1a.afterpay-select.pages.dev/
```

## Configuration Options

- subtitle (string) - This option allows you to modify the text on the card which is "€/Month" by default.
- primaryColor (string) - Change the color of the default options and the subtitle text.
- secondaryColor (string) - Change the color of the arrows and the currently selected valu.
- backgroundColor (string) - As the name suggests you can change the color of the background, currently it's set to white (#fff) by default.
- keyboardEnabled (boolean) - You can disable or enable the keyboard with this option. Simply adding this to the component without any values counts as true.
