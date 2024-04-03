/** @type {import('tailwindcss').Config} */
const {colors} = require("./src/styles/colors");
const {fontFamily} = require("./src/styles/fontFamily");
module.exports = {
    content: ["./src/**/*.{ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors,
            fontFamily

        },
    },
    plugins: [],
}
