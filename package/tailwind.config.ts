import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'screen-xl': '75rem',
        'screen-2xl': '83.75rem'
      },
      boxShadow: {
        'cause-shadow': '0px 4px 17px 0px #00000008',
      },
      transitionDuration: {
        '150': '150ms',
      },
      spacing: {
        '6.25': '6.25rem',
        '70%': '70%',
        '40%': '40%',
        '30%': '30%',
        '60%': '60%',
        8.5: '8.5rem',
        50: '50rem',
        51: "54.375rem",
        25: '35.625rem',
        29: '28rem',
        120: '120rem',
        45: '45rem',
        94: '22.5rem',
        3.75: '3.75rem'
      },
      inset: {
        '5%': '5%',
        '35%': '35%'
      },
      zIndex: {
        '1': '1',
        '2': '2',
        '999': '999'
      },
      colors: {
        primary: "#2CDD9B",
        secondary: "#1DC8CD",
        midnight_text: "#263238",
        muted: "#8D97B7",
        error: "#FF4D7E",
        warning: "#FF6A5B",
        light_grey: "#E9ECEF",
        grey: "#F5F7FA",
        dark_grey: "#8D97AD",
        border: "#E1E1E1",
        success: "#3cd278",
        section: "#F8FAFC",
        darkmode: "#081738",
        darklight: "#000f30",
        dark_border: "#224767",
        SkyBlueMist: "#C0D5FB",
      },
      fontSize: {
        56: [
          "3.5rem",
          {
            lineHeight: "3.875rem"
          }
        ],
        40: [
          "2.5rem",
          {
            lineHeight: "3rem",
          },
        ],
        36: [
          "2.25rem",
          {
            lineHeight: "2.625rem",
          },
        ],
        30: [
          "1.875rem",
          {
            lineHeight: "2.25rem",
          },
        ],
        28: [
          "1.75rem",
          {
            lineHeight: "2.25rem",
          },
        ],
        24: [
          "1.5rem",
          {
            lineHeight: "2rem",
          },
        ],
        22: [
          "1.375rem",
          {
            lineHeight: "2rem",
          },
        ],
        21: [
          "1.3125rem",
          {
            lineHeight: "1.875rem",
          },
        ],
        18: [
          "1.125rem",
          {
            lineHeight: "1.5rem",
          },
        ],
        17: [
          "1.0625rem",
          {
            lineHeight: "1.4875rem",
          },
        ],
        16: [
          "1rem",
          {
            lineHeight: "1.6875rem",
          },
        ],
        14: [
          "0.875rem",
          {
            lineHeight: "1.225rem",
          },
        ],
      },
      backgroundImage: {
        "hero-bg": "url('/images/hero/banner-bg.jpg')",
        "donation-bg": "url('/images/donate-banner.jpg')",
        "volunteer-bg": "url('/images/volunteer-bg.jpg')",
        "herosub-bg": "url('/images/herosub-banner.png')",
      },
    },
  },
  plugins: [],
};
export default config;
