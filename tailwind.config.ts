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
        scale: {
          from: {
            transform: "scale3d(1, 1, 1)",
          },
          "50%": {
            transform: "scale3d(0.8, 0.8, 0.8)",
          },
          to: {
            transform: "scale3d(1, 1, 1)",
          },
        },
        "fan-left": {
          from: {
            transform: "translate3d(0, 0, 0)",
          },
          "50%": {
            transform: "translate3d(-2rem, 5%, 0) rotate3d(0, 0, 1, -12deg)",
          },
          to: {
            transform: "translate3d(0, 0, 0) scale3d(0.98, 0.98, 0.98)",
          },
        },
        "fan-right": {
          from: {
            transform: "translate3d(0, 0, 0)",
          },
          "50%": {
            transform: "translate3d(2rem, 5%, 0) rotate3d(0, 0, 1, 12deg)",
          },
          to: {
            transform: "translate3d(0, 0, 0) scale3d(0.98, 0.98, 0.98)",
          },
        },
      },
      animation: {
        scale: "scale 1.75s 2.25s",
        "fan-left": "fan-left 1.75s 2.25s forwards",
        "fan-right": "fan-right 1.75s 2.25s forwards",
      },
    },
  },
  plugins: [],
}
export default config
