module.exports = {
    content: ["**/*.njk"],
    theme: {
        fontFamily: {
            sans: ["Jost", "sans-serif"],
            display: ["Jost", "serif"],
        },
        colors: {
            primary: "#027A0E",
            secondary: "#DB1414",
        },
    },
    plugins: [require("@tailwindcss/typography")],
};