module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        global: {
          background1: "var(--global-bg-1)",
          background2: "var(--global-bg-2)",
          background3: "var(--global-bg-3)",
          background4: "var(--global-bg-4)",
          text1: "var(--global-text-1)",
          text2: "var(--global-text-2)",
          text3: "var(--global-text-3)",
          text4: "var(--global-text-4)",
          text5: "var(--global-text-5)"
        },
        border: {
          primary: "var(--border-primary)",
          secondary: "var(--border-secondary)"
        }
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif']
      },
      boxShadow: {
        'custom': '-3px 5px 4px #2c2c2c'
      }
    }
  },
  plugins: []
};