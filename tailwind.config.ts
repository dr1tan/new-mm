import { setupInspiraUI } from '@inspira-ui/plugins';
import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';

export default {
  darkMode: 'class', // Make sure to use 'class'
  safelist: ['dark'],
  prefix: '',
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        markajpink: {
          DEFAULT: '#A288A6', // Base pink
          100: '#F0E7EE', // Light pink for accents
          200: '#DCC9D6', // Muted pink for secondary highlights
          300: '#C6AFC5', // Subtle pink for borders or lighter accents
          400: '#B299B4', // Soft pink
          500: '#A288A6', // Base pink
          600: '#927991', // Muted, deeper pink
          700: '#826A7D', // Warm mauve
          800: '#715B68', // Subtle mauve for depth
          900: '#614C55', // Dark mauve
        },

        markajneutral: {
          DEFAULT: '#595959', // Neutral gray
          100: '#F5F5F5', // Soft light gray for text or backgrounds
          200: '#E6E6E6', // Light neutral
          300: '#CCCCCC', // Cool neutral gray for components
          400: '#B3B3B3', // Medium gray
          500: '#595959', // Base neutral
          600: '#3A3A3A', // Deep neutral gray
          700: '#2B2B2B', // Dark gray for text or UI
          800: '#1C1C1C', // Rich dark gray
          900: '#121212', // Almost black
        },

        markajgold: {
          DEFAULT: '#C2A567', // Gold accent
          100: '#F8F3E7', // Soft, light gold
          200: '#EFE2C4', // Subtle gold for highlights
          300: '#E3D1A3', // Muted gold
          400: '#D7C283', // Warm gold
          500: '#C2A567', // Base gold
          600: '#A48651', // Deeper gold for depth
          700: '#876F45', // Dark gold
          800: '#6A5838', // Rich, deep gold
          900: '#4E412B', // Almost bronze
        },

        markajblue: {
          DEFAULT: '#6B8096', // Complementary cool blue
          100: '#E7ECF0', // Soft blue
          200: '#CBD5DE', // Light, muted blue
          300: '#B0C0CD', // Subtle blue for highlights
          400: '#95ABBB', // Cool blue
          500: '#6B8096', // Base blue
          600: '#576778', // Deeper blue
          700: '#47545F', // Darker blue for depth
          800: '#363F47', // Rich, deep blue
          900: '#252B30', // Almost black-blue
        },

        markajgreen: {
          DEFAULT: '#78997A', // Soft green
          100: '#E7F0E8', // Very light green
          200: '#C5DCC7', // Light muted green
          300: '#A3C7A6', // Soft green highlight
          400: '#82B287', // Warm green
          500: '#78997A', // Base green
          600: '#617C63', // Muted deep green
          700: '#4A5F4D', // Dark green for depth
          800: '#343F36', // Rich, deep green
          900: '#1D231F', // Almost black-green
        },

        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        xl: 'calc(var(--radius) + 4px)',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'], // Add Manrope as the default sans font
      },
    },
  },

  plugins: [animate, setupInspiraUI],
} satisfies Config;
