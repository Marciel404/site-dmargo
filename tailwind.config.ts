import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        fadeinright: 'faderight 1s',
        fadeinleft: 'fadeleft .5s',
        fadeinup: 'fadeup 2s',
        fadeindown: 'fadedown 2s',
      },
      keyframes: {
        faderight: {
          "0%": {
            "opacity": "0",
            "-webkit-transform": "translate3d(100%, 0, 0)",
            "transform": "translate3d(100%, 0, 0)",
          },
          "100%": {
            "opacity": "1",
            "-webkit-transform": "translate3d(0, 0, 0)",
            "transform": "translate3d(0, 0, 0)"
          }
        },
        fadeleft: {
          "from": {
            "left": "-300px",
            "opacity": "0"
          },
          "to": {
            "left": "0",
            "opacity": "1"
          }
        },
        fadeup: {
          "0%": {
            "opacity": "0",
            "-webkit-transform": "translate3d(0, 100%, 0)",
            "transform": "translate3d(0, 100%, 0)"
          },
          "100%": {
            "opacity": "1",
            "-webkit-transform": "translate3d(0, 0, 0)",
            "transform": "translate3d(0, 0, 0)"
          }
        },
        fadedown: {
          "0%": {
            "opacity": "0",
            "-webkit-transform": "translate3d(0, -100%, 0)",
            "transform": "translate3d(0, -100%, 0)"
          },
          "100%": {
            "opacity": "1",
            "-webkit-transform": "translate3d(0, 0, 0)",
            "transform": "translate3d(0, 0, 0)"
          }
        },
      }
    },
  },
  plugins: [],
}
export default config
