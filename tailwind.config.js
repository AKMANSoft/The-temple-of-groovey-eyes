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
        "whitepaper-image":"url(/images/white-paper.png)",
        "footer-image":"url(/images/footer.png)",
        "primary-image-mobile": "url(/images/theme-bg-mobile.png)",
      },
      backgroundPosition: {
        "primary-image": "center",
        "star-image":"center",
        "pillar-image": "center",
        "ourteam-image": "center",
        "whitepaper-image": "center",
        "footer-image": "center",
        "primary-image-mobile":"center",
      },
      backgroundSize: {
        "primary-image": "cover",
        "star-image": "cover",
        "pillar-image": "cover",
        "ourteam-image": "cover",
        "whitepaper-image": "fill",
        "footer-image": "cover",
        "primary-image-mobile": "cover",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '1' },
          '25%': { opacity: '0' },
          '50%': { opacity: '1' },

          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out', // Use the keyframes animation with a duration of 1 second
      },
      fontFamily: {
        'Inter': "Inter",
      },
      
    },
  },
  plugins: [],
}

