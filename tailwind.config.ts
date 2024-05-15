import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Outfit", "sans-serif"],
      },
      keyframes: {
        rotate: {
          to: {
            transform: 'rotate(360deg)',
          },
        },
        rotateReverse: {
          to: {
            transform: 'rotate(-360deg)',
          },
        },
      },
    },
  },
} satisfies Config;
