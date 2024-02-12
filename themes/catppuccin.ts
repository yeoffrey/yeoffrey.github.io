import { CatppuccinFlavor, flavors } from "@catppuccin/palette"

function extractColors({ colorEntries }: CatppuccinFlavor) {
  return Object.fromEntries(colorEntries.map(([color, formats]) => [color, formats.hex]))
}

const latte = extractColors(flavors.latte)
const mocha = extractColors(flavors.mocha)

export default {
  lightMode: {
    light: latte.base,
    lightgray: latte.lavender,
    gray: latte.subtext0,
    darkgray: latte.text,
    dark: latte.red,
    secondary: latte.blue,
    tertiary: latte.text,
    highlight: latte.crust,
  },
  darkMode: {
    light: mocha.crust,
    lightgray: mocha.lavender,
    gray: mocha.lavender,
    darkgray: mocha.text,
    dark: mocha.maroon,
    secondary: mocha.blue,
    tertiary: mocha.text,
    highlight: mocha.surface0,
  },
}
