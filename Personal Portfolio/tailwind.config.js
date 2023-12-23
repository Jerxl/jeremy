/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "text-colour": "var(--text-colour)",
        "text-colour2": "var(--text-colour2)",
        "bg-colour": "var(--bg-colour)",
        "bg-colour2": "var(--bg-colour2)",
        "bg-colour-hover": "var(--bg-colour-hover)",
        "bg-colour-hover2": "var(--bg-colour-hover2)",
        // ... and so on
      },
      backgroundImage: {
        "my-gradient": "var(--my-gradient)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
