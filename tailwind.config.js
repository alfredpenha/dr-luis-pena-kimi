/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          dark: "hsl(var(--primary-dark))",
          light: "hsl(var(--primary-light))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          hover: "hsl(var(--accent-hover))",
          light: "hsl(var(--accent-light))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        neutral: {
          white: "hsl(var(--neutral-white))",
          light: "hsl(var(--neutral-light))",
          border: "hsl(var(--neutral-border))",
          text: "hsl(var(--neutral-text))",
          heading: "hsl(var(--neutral-heading))",
        },
        success: "hsl(var(--success))",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        /* Display - Hero statements, powerful headings */
        'display': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '700' }],
        
        /* H1 - Primary section headings */
        'heading-1': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.025em', fontWeight: '700' }],
        
        /* H2 - Elegant sub-headings, refined */
        'heading-2': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.015em', fontWeight: '600' }],
        
        /* H3 - Section subheadings */
        'heading-3': ['1.875rem', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '600' }],
        
        /* H4 - Card titles, subsections */
        'heading-4': ['1.5rem', { lineHeight: '1.35', fontWeight: '500' }],
        
        /* H5 - Minor headings */
        'heading-5': ['1.25rem', { lineHeight: '1.4', fontWeight: '500' }],
        
        /* Body Large - Introduction text, featured content */
        'body-lg': ['1.125rem', { lineHeight: '1.8', fontWeight: '400' }],
        
        /* Body - Main paragraph text, optimized for reading comfort */
        'body': ['1rem', { lineHeight: '1.8', fontWeight: '400' }],
        
        /* Small - Secondary text, labels */
        'small': ['0.875rem', { lineHeight: '1.65', fontWeight: '400' }],
        
        /* Caption - Meta information, fine print */
        'caption': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.01em', fontWeight: '500' }],
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.04)",
        'card': '0 2px 8px -2px rgba(30, 42, 56, 0.08), 0 4px 16px -4px rgba(30, 42, 56, 0.04)',
        'card-hover': '0 8px 24px -4px rgba(30, 42, 56, 0.12), 0 12px 32px -8px rgba(30, 42, 56, 0.08)',
        'card-elevated': '0 16px 40px -8px rgba(30, 42, 56, 0.16), 0 24px 48px -12px rgba(30, 42, 56, 0.08)',
        'glow': '0 0 24px rgba(31, 111, 107, 0.25)',
        'glow-soft': '0 0 32px rgba(31, 111, 107, 0.15)',
        'header': '0 1px 3px rgba(30, 42, 56, 0.08)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "pulse-soft": {
          "0%, 100%": { transform: "scale(1)", boxShadow: "0 0 0 0 rgba(31, 111, 107, 0.2)" },
          "50%": { transform: "scale(1.01)", boxShadow: "0 0 0 8px rgba(31, 111, 107, 0)" },
        },
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-out-right": {
          "0%": { transform: "translateX(0)", opacity: "1" },
          "100%": { transform: "translateX(100%)", opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "fade-in-up": "fade-in-up 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "fade-in": "fade-in 0.4s ease-out forwards",
        "float": "float 4s ease-in-out infinite",
        "pulse-soft": "pulse-soft 2.5s ease-in-out infinite",
        "bounce-slow": "bounce-slow 2.5s ease-in-out infinite",
        "slide-in-right": "slide-in-right 0.3s ease-out forwards",
        "slide-out-right": "slide-out-right 0.3s ease-out forwards",
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'premium': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
