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
        'zoom-out': {
          '50%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)' },
        },
        'zoom-in': {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        "scroll": {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-250px * 2))' },
        },
      },
      animation: {
        'zoom-out-in': 'zoom-out 2s ease-in-out infinite , zoom-in 3s ease-in-out infinite',
        "scroll": 'scroll 10s linear infinite',

      },
      fontFamily: {
        'Inter': "Inter",
      },
      
    },
  },
  plugins: [],
}

