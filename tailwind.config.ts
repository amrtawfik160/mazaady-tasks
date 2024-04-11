import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem'
    },
    extend: {
      colors: {
        black: '#333333',
        primary: {
          '50': '#fef1f8',
          '100': '#fee5f2',
          '200': '#ffcae7',
          '300': '#ff9fd1',
          '400': '#ff64b1',
          '500': '#fe3691',
          '600': '#ef136d',
          '700': '#D20653',
          '800': '#ac0844',
          '900': '#8f0c3c',
          '950': '#58001f'
        },
        secondary: {
          '50': '#FFF5E9',
          '100': '#ffead2',
          '200': '#fed4aa',
          '300': '#fdb574',
          '400': '#FF951D',
          '500': '#f96a16',
          '600': '#ea500c',
          '700': '#c23a0c',
          '800': '#9a2f12',
          '900': '#7c2912',
          '950': '#431207'
        }
      },
      maxWidth: {
        '7xl': '1700px'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
} satisfies Config;

export default config;
