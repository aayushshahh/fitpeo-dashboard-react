/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      body: ['Work Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        background: "#141315",
        backgroundLight: "#1F2027",
        primaryWhite: "#FCFCFC",
        lightestGrey: "#A5A4A6",
        lightGrey: "#44444A",
        darkGrey: "#292A2F",
        primaryBlue: "var(--primary-accent)",
        cardBlue: "#2B3065",
        cardIconBlue: "#4761F4",
        cardGreen: "#285146",
        cardIconGreen: "#5BC691",
        cardRed: "#583438",
        cardIconRed: "#E06762",
        cardPink: "#542C48",
        cardIconPink: "#D64D9A",
        primaryGreen: "#5AC392",
        primaryRed: "#D75E5B",
        menuBlue: "#2B485D",
        menuIconBlue: "#4F9ED3",
        starYellow: "#F9DC5A"
      },
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(auto, 1fr))',
      },
      maxHeight: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}

