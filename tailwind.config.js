/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        /* darkest grey - used for headings */
        clrgrey1: "#102a42",
        clrgrey2: "#243a52",
        clrgrey3: "#324d67",
        clrgrey4: "#48647f",
        /* grey used for paragraphs */
        clrgrey5: "#617d98",
        clrgrey6: "#829ab0",
        clrgrey7: "#9eb2c7",
        clrgrey8: "#bcccdc",
        clrgrey9: "#dae2ec",
        clrgrey10: "#f1f5f8",
        clrreddark: "#ba2626",
        clrredlight: "#e66b6b",
        clrgreendark: "#25bb32",
        clrgreenlight: "#6be675",
        clrblack: "#222"
      },
      gridTemplateColumns: {
        "navbar": "auto minmax(0,1fr) auto",
        "auto1": "auto 1fr",
        "topbar": "auto auto auto auto auto auto",
        "topbarMob": "1fr 132px auto auto"
      },
      maxWidth: {
        "navbar": "1170px"
      },
      animation: {
        'spin-fast': 'spin 0.6s linear infinite',
      },
      gridTemplateRows: {
        "auto": "1fr 50px",
        "nav": "auto 1fr",
      }
    },
  },
  plugins: [require('@tailwindcss/forms'),],
}
