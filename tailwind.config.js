/** @type {import('tailwindcss').Config} */

const variants = {
  blue: {
    primary: {
      50: "hsl(248,100%,93%)",
      100: "hsl(248,53%,75%)",
      200: "hsl(248,53%,70%)",
      300: "hsl(248,53%,64%)",
      400: "hsl(248,53%,60%)",
      500: "hsl(248,53%,54%)",
      600: "hsl(248,53%,50%)",
      700: "hsl(248,53%,45%)",
      800: "hsl(248,53%,40%)",
      900: "hsl(248,53%,35%)",
    },
    secondary: {
      500: "#eff6ff",
      700: "#dbeafe",
      800: "##93c5fd",
    },
    noom: {
      select: "#f8f8f8",
      "select-50": "#f1f1f1",
      200: "#F6F4EE",
      orange: {
        500: "#111d2d",
        700: "rgb(16,29,45)",
      },
      green: {
        500: "hsl(221,83%,53%)",
        600: "hsl(221,83%,45%)",
        700: "hsl(221,83%,35%)",
        800: "hsl(221,83%,25%)",
      },
      stone: {
        400: "hsl(213,18%,68%)",
      },
      sky: {
        400: "#93c5fd",
      },
      text: {
        800: "#191717",
        900: "#333333",
      },
      blue: {
        800: "#111d2d",
      },
    },
    kraal: {
      blue: {
        500: "hsl(221,83%,53%)",
        600: "hsl(221,83%,45%)",
        700: "hsl(221,83%,35%)",
        800: "hsl(221,83%,25%)",
      },
      dark: {
        500: "#111d2d",
        600: "rgb(10,24,42)",
        700: "rgb(16,29,45)",
      },
      purple: {
        500: "#8d41fe"
      }
    },
    chatgpt: {
      300: "#444654",
      400: "#40414f",
      500: "#343541",
      // 600 is for sidebar
      600: "rgba(32,33,35)",
      700: "#2A2B32",
    },
    business: "#5f110e",
    "business-form": "#F6F4EE",
    modal: {
      raisin: {
        black: "#202123"
      },
      very: {
        dark: "#181A1C"
      },
      charcoal:"#343541"
    }
  },
  orange: {
    primary: {
      50: "hsl(248,100%,93%)",
      100: "hsl(248,53%,75%)",
      200: "hsl(248,53%,70%)",
      300: "hsl(248,53%,64%)",
      400: "hsl(248,53%,60%)",
      500: "hsl(248,53%,54%)",
      600: "hsl(248,53%,50%)",
      700: "hsl(248,53%,45%)",
      800: "hsl(248,53%,40%)",
      900: "hsl(248,53%,35%)",
    },
    secondary: {
      500: "rgb(246,244,238)",
      700: "rgb(228,222,206)",
      800: "rgb(211,201,180)",
    },
    noom: {
      200: "#F6F4EE",
      orange: {
        500: "rgb(251,81,59)",
        700: "rgb(170,53,33)",
      },
      green: {
        500: "221,83%,53%",
        600: "221,83%,45%",
        700: "221,83%,35%",
        800: "221,83%,25%",
      },
      stone: {
        // tailwind stone-400
        400: "#a8a29e",
      },
      sky: {
        400: "#b0eff3",
      },
      text: {
        900: "#191717",
      },
      blue: {
        800: "#1D3A44",
      },
    },
  },
};

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,html}"],
  theme: {
    extend: {
      colors: {
        ...variants.blue
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'playfair-display': ['Playfair Display', 'serif'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.5715' }],
        base: ['1rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        lg: ['1.125rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        xl: ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        '2xl': ['1.5rem', { lineHeight: '1.415', letterSpacing: '-0.01em' }],
        '3xl': ['2rem', { lineHeight: '1.3125', letterSpacing: '-0.01em' }],
        '4xl': ['2.25rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        '5xl': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        '6xl': ['4rem', { lineHeight: '1.1562', letterSpacing: '-0.01em' }],
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
    // require('tailwind-scrollbar'),
  ],
};

// config of kraal ai website
const kaalai = {
  content: [
    './index.html',
    './src/*/.{vue,js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        slate: {
          900: '#101D2D ',
        },
        blue: {
          500: '#5696FF ',
          600: '#2174EA ',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'playfair-display': ['Playfair Display', 'serif'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.5715' }],
        base: ['1rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        lg: ['1.125rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        xl: ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        '2xl': ['1.5rem', { lineHeight: '1.415', letterSpacing: '-0.01em' }],
        '3xl': ['2rem', { lineHeight: '1.3125', letterSpacing: '-0.01em' }],
        '4xl': ['2.25rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        '5xl': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        '6xl': ['4rem', { lineHeight: '1.1562', letterSpacing: '-0.01em' }],
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line global-require
    require('@tailwindcss/forms'),
  ],
};

