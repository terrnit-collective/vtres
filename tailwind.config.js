/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#09090B',
        foreground: '#FAFAFA',
        card: 'hsl(240 10% 3.9%)',
        'card-foreground': 'hsl(0 0% 98%)',
        popover: 'hsl(240 10% 3.9%)',
        'popover-foreground': 'hsl(0 0% 98%)',
        primary: '#646cff',
        'primary-foreground': 'hsl(0 0% 98%)',
        secondary: '#535bf2',
        'secondary-foreground': 'hsl(0 0% 98%)',
        muted: 'hsl(240 3.7% 15.9%)',
        'muted-foreground': 'hsl(240 5% 64.9%)',
        accent: 'hsl(240 3.7% 15.9%)',
        'accent-foreground': 'hsl(0 0% 98%)',
        border: 'hsl(240 3.7% 15.9%)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [],
}