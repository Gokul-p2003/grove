/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#F4EEE0',
          tint: '#EDE5D3',
          dark: '#E2D9C3',
        },
        ink: {
          DEFAULT: '#1F1B16',
          muted: '#524B42',
          faint: '#8F867A',
        },
        tomato: {
          DEFAULT: '#E4572E',
          tint: '#FDECE7',
          dark: '#BA3812',
        },
        moss: {
          DEFAULT: '#3F6B3A',
          tint: '#E8EFE7',
          light: '#5B8C54',
          dark: '#2E502A',
        },
        butter: {
          DEFAULT: '#F2C94C',
          tint: '#FEF8E8',
          light: '#F8DE7E',
          dark: '#C8A02A',
        },
        clay: {
          DEFAULT: '#C97A56',
          tint: '#F9ECE5',
        },
        sky: {
          tint: '#D6E4DE',
        },
      },
      fontFamily: {
        serif: ['"Young Serif"', 'Georgia', 'serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
        sans: ['"Familjen Grotesk"', 'sans-serif'],
      },
      boxShadow: {
        'hard': '4px 4px 0 #1F1B16',
        'hard-sm': '2px 2px 0 #1F1B16',
        'hard-lg': '6px 6px 0 #1F1B16',
        'hard-xl': '8px 8px 0 #1F1B16',
        'hard-active': '1px 1px 0 #1F1B16',
      },
      borderWidth: {
        '2': '2px',
        '3': '3px',
      },
    },
  },
  plugins: [],
};
