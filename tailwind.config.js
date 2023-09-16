/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#0101FF",
        "secondary":"#E9E933",
        "pink":"#DA5AED",
      },
      backgroundImage: {

        "primary-image": "url(/images/theme.png)",
        "star-image": "url(/images/star.png)",
        "pillar-image":"url(/images/pillar.png)",
        "ourteam-image":"url(/images/ourteam.png)",
        "primary-image-mobile": "url(/images/theme-bg-mobile.png)",
      },
      backgroundPosition: {
        "primary-image": "center",
        "star-image":"center",
        "pillar-image": "center",
        "ourteam-image": "center",
      },
      backgroundSize: {
        "primary-image": "cover",
        "star-image": "cover",
        "pillar-image": "cover",
        "ourteam-image": "cover",
      },
      fontFamily: {
        'Inter': "Inter",
      },
      
    },
  },
  plugins: [],
}

