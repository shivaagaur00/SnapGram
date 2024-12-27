module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust the paths to match your project structure
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-in-out forwards",
      },
      colors: {
        bg_primary: '#FF6347',
        bg_hover: '#FF4500',
      },
    },
  },
  plugins: [],
};
