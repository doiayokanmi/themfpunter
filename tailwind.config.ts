import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primaryColor)',
        overlay: 'var(--overlay)'
      },
      backgroundImage: {
        heroBg: "url('/image/oldtrafold.png')",
      },
    },
  },
  plugins: [],
}
export default config
