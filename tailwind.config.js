/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xl": "1450px"
      },
      colors: {
        primary: "#0101FF",
        secondary: "#E9E933",
        pink: "#DA5AED",
      },
      backgroundImage: {
        "star-image": "url(/images/star.jpg)",
        "ourteam-image": "url(/images/ourteam.jpg)",
        "primary-image-mobile": "url(/images/theme-bg-mobile1.png)",
        "borderImg" :'url(/images/shape.png)',
      },
      backgroundPosition: {
        "star-image": "center",
        "ourteam-image": "center",
        "primary-image-mobile": "center",
        'borderImg':'center'
      },
      backgroundSize: {
        "primary-image": "cover",
        "star-image": "cover",
        "ourteam-image": "cover",
        "primary-image-mobile": "cover",
        'borderImg':'cover'
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-300px * 2))" },
        },
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        // "zoom-out-in":
        //   "zoom-out  3s ease-in-out infinite , zoom-in 4s ease-in-out infinite",
        scroll: "scroll 10s linear infinite",
        "accordion-down": "accordion-down 0.3s ease-in-out",
        "accordion-up": "accordion-up 0.3s ease-in-out",
      },
      fontFamily: {
        Inter: "Inter",
      },
    },
  },
  plugins: [],
};
