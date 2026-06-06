/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bnkr: {
          neonCyan: '#00D4FF',
          neonPink: '#FF69B4',
          neonTeal: '#40E0D0',
          neonPurple: '#b026ff',
          neonGreen: '#39ff14',
          neonYellow: '#fffb00',
          darkBg: '#09090b',
          cardBg: '#121214',
        }
      },
      boxShadow: {
        neonCyan: '0 0 15px rgba(0, 212, 255, 0.4)',
        neonPink: '0 0 15px rgba(255, 105, 180, 0.4)',
        neonTeal: '0 0 15px rgba(64, 224, 208, 0.4)',
        neonPurple: '0 0 15px rgba(176, 38, 255, 0.4)',
        neonGreen: '0 0 15px rgba(57, 255, 20, 0.4)',
        neonYellow: '0 0 15px rgba(255, 251, 0, 0.4)',
      }
    },
  },
  plugins: [],
}
