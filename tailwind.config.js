/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "navbar": "auto minmax(0,1fr) auto",
        "services": "repeat(auto-fit, minmax(360px, 1fr))",
        "form": "1fr auto",
        "info": "125px 1fr",
        "products": "150px 1fr",
        "sort": "auto auto 1fr auto",
        "auto1": "auto 1fr",
        "200px": "200px 1fr"
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
  plugins: [],
}
