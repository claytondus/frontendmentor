const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}',
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    colors: {
      'dark-purple': '#24053E',
      eucalyptus: '#44FFA1',
      'davys-grey': '#584D62',
      'ghost-white': '#FCF8FF',
      white: '#FFFFFF',
      transparent: 'transparent',
    },
    fontFamily: {
      sans: ['Manrope', 'sans-serif'],
      serif: ['Fraunces', 'serif'],
    },
    extend: {
      backgroundImage: {
        'hero-dark': "url('/images/background-dark.svg')",
      },
      borderRadius: {
        hero: '50% 125px',
      },
    },
  },
  plugins: [],
};
