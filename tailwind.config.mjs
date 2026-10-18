/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#f6f8f6', // Fondo mate descansado y suave que no fatiga la vista
          subtle: '#eef2ee',
          card: '#ffffff',
        },
        ficus: {
          50: '#f2f8f3',
          100: '#e1f0e4',
          200: '#c3e1c9',
          300: '#97cca2',
          400: '#64b073',
          500: '#3f9350',
          600: '#2d773c',
          700: '#1e622f', // Verde Ficus institucional
          800: '#1b4e28',
          900: '#174023',
          950: '#0a2312',
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      fontFamily: {
        sans: [
          'Plus Jakarta Sans',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
