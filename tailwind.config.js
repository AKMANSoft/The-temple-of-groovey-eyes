/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0101FF",
        secondary: "#E9E933",
        pink: "#DA5AED",
      },
      backgroundImage: {
        "primary-image": "url(/images/hero.png)",
        "star-image": "url(/images/star.jpg)",
        "pillar-image": "url(/images/pillar.jpg)",
        "ourteam-image": "url(/images/ourteam.jpg)",
        "whitepaper-image": "url(/images/white-paper.png)",
        "footer-image": "url(/images/footer.jpg)",
        "primary-image-mobile": "url(/images/theme-bg-mobile1.png)",
      },
      backgroundPosition: {
        "primary-image": "center",
        "star-image": "center",
        "pillar-image": "center",
        "ourteam-image": "center",
        "whitepaper-image": "center",
        "footer-image": "center",
        "primary-image-mobile": "center",
      },
      backgroundSize: {
        "primary-image": "cover",
        "star-image": "cover",
        "pillar-image": "cover",
        "ourteam-image": "cover",
        "whitepaper-image": "131px 197px",
        "footer-image": "cover",
        "primary-image-mobile": "cover",
      },
      keyframes: {
        "zoom-out": {
          "50%": { transform: "scale(1)" },
          "100%": {
            transform: "scale(0)",
            "margin-right": "px",
            "margin-top": "120px",
          },
        },
        "zoom-in": {
          "10%": {
            transform: "scale(0)",
            "margin-top": "120px",
            "margin-right": "120px",
          },
          "100%": { transform: "scale(1)" },
        },
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
        "zoom-out-in":
          "zoom-out  3s ease-in-out infinite , zoom-in 4s ease-in-out infinite",
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
