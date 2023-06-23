/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['DINPro-Bold', 'sans-serif'],
      serif: ['D-DIN', 'sans-serif']
    },
    extend: {}
  },
  plugins: [
    require('tailwindcss-animated')
  ]
}
