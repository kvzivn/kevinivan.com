import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        n1: "var(--neutral-1)",
        n2: "var(--neutral-2)",
        n3: "var(--neutral-3)",
        n4: "var(--neutral-4)",
        n5: "var(--neutral-5)",
        n6: "var(--neutral-6)",
        n7: "var(--neutral-7)",
        n8: "var(--neutral-8)",
      },
      fontFamily: {
        serif: ["var(--font-lora)"],
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
        inter: ["var(--font-inter)"],
      },
      keyframes: {
        wobble: {
          from: {
            transform: "translate3d(0, 0, 0)",
          },

          "15%": {
            transform: "translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -5deg)",
          },

          "30%": {
            transform: "translate3d(10%, 0, 0) rotate3d(0, 0, 1, 3deg)",
          },

          "45%": {
            transform: "translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -3deg)",
          },

          "60%": {
            transform: "translate3d(2%, 0, 0) rotate3d(0, 0, 1, 2deg)",
          },

          "75%": {
            transform: "translate3d(-2%, 0, 0) rotate3d(0, 0, 1, -1deg)",
          },

          to: {
            transform: "translate3d(0, 0, 0)",
          },
        },
      },
      animation: {
        wobble: "wobble 1s 2.5s",
      },
    },
  },
  plugins: [],
}
export default config
