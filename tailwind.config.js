/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
   
    extend: {
      width: {
        "27": "27%",
        "28": "28%",
        "29": "29%",
        "31": "31%"
      },
      colors: {
        MarineBlue: "hsl(213, 96%, 18%)",
        PurplishBlue: "hsl(243, 100%, 62%)",
       Pastelblue: "hsl(228, 100%, 84%)",
       Lightblue: "hsl(206, 94%, 87%)",
       Strawberryred: "hsl(354, 84%, 57%)",
       
       Coolgray: "hsl(231, 11%, 63%)",
       Lightgray: "hsl(229, 24%, 87%)",
       Magnolia: "hsl(217, 100%, 97%)",
       Alabaster: "hsl(231, 100%, 99%)",
       White: "hsl(0, 0%, 100%)"
           },
    },
  },
  plugins: [],
}

