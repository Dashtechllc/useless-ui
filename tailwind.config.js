/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 50%',
        'pos-50': '50% 50%',
      },
      width: {
        inherit: 'inherit',
      },
      colors: {
        'brand-100': 'rgba(238, 245, 254, 1)',
        'brand-200': 'rgba(183, 210, 251, 1)',
        'brand-300': 'rgba(158, 193, 244, 1)',
        'brand-400': 'rgba(118, 169, 244, 1)',
        'brand-500': 'rgba(84, 143, 230, 1)',
        'brand-600': 'rgba(36, 108, 213, 1)',
        'brand-700': 'rgba(21, 79, 164, 1)',
        'brand-800': 'rgba(8, 48, 108, 1)',
        'brand-900': 'rgba(2, 28, 65, 1)',
        'neutral-100': 'rgba(220, 227, 236, 1)',
        'neutral-200': 'rgba(184, 193, 205, 1)',
        'neutral-300': 'rgba(129, 140, 154, 1)',
        'neutral-400': 'rgba(91, 105, 126, 1)',
        'neutral-500': 'rgba(56, 70, 90, 1)',
        'neutral-600': 'rgba(34, 50, 74, 1)',
        'neutral-700': 'rgba(20, 35, 55, 1)',
        'neutral-800': 'rgba(14, 27, 46, 1)',
        'neutral-900': 'rgba(5, 16, 32, 1)',
      },
    },
  },
  plugins: [],
};
