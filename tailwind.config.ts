import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        customColor: '#F1C40F',
        customNavTextColor: '#333333',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        patrick: ['Patrick Hand', 'cursive'],
        grypen: ['Qwitcher Grypen', 'cursive'],
      },
    },
  },
  plugins: [],
};
export default config;
