/** @type {import('tailwindcss').Config} */
module.exports =  {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require ("tailwindcss")],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#d1c1d7",
        
"secondary": "#f6cbd1",
        
"accent": "#b4e9d6",
        
"neutral": "#70acc7",
        
"base-100": "#ffffff",
        
"info": "#3b82f6",
        
"success": "#4ade80",
        
"warning": "#fbbd23",
        
"error": "#f87272",
        },
      },
    ],
  },
  }


