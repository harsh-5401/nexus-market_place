// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class', // Enables class-based dark mode
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Ensures Tailwind scans all source files
  ],
  theme: {
    colors: {
      primary: '#000000',
      harsh: '#111111',
      tertiary: '#222222',
      quaternary: '#333333',
      quinary: '#444444',
    },
    screens: {
      xs: '375px',
      sm: '430px',   // Small screens (e.g., phones)
      md: '768px',   // Medium screens (e.g., tablets)
      lg: '1024px',
        // Large screens (e.g., desktops)
    },
    extend: {},
  },
  plugins: [],
}

export default config
