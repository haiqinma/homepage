/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--app-font-body)'],
        display: ['var(--app-font-display)'],
        body: ['var(--app-font-body)'],
        mono: ['var(--app-font-mono)']
      },
      colors: {
        yeying: {
          blue: '#1F5EFF',
          ink: '#151C2C',
          mint: '#16A085',
          amber: '#B7791F'
        }
      }
    }
  },
  plugins: []
}
