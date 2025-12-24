// Theme Configuration for Summit Tax Accounting
// Easily switch between different color themes by changing the 'currentTheme' variable

export type ThemeName = 'red' | 'blue' | 'green' | 'orange' | 'pink' | 'purple' | 'gold';

export const themes = {
  red: {
    primary: 'red',
    bg: 'bg-red-600',
    bgHover: 'hover:bg-red-500',
    border: 'border-red-700',
    text: 'text-red-400',
    textHover: 'hover:text-red-400',
    accent: 'red-500',
    accentLight: 'red-300',
    accentDark: 'red-900',
    shadow: 'shadow-red-500/20'
  },
  blue: {
    primary: 'blue',
    bg: 'bg-blue-600',
    bgHover: 'hover:bg-blue-500',
    border: 'border-blue-700',
    text: 'text-blue-400',
    textHover: 'hover:text-blue-400',
    accent: 'blue-500',
    accentLight: 'blue-300',
    accentDark: 'blue-900',
    shadow: 'shadow-blue-500/20'
  },
  green: {
    primary: 'green',
    bg: 'bg-green-600',
    bgHover: 'hover:bg-green-500',
    border: 'border-green-700',
    text: 'text-green-400',
    textHover: 'hover:text-green-400',
    accent: 'green-500',
    accentLight: 'green-300',
    accentDark: 'green-900',
    shadow: 'shadow-green-500/20'
  },
  orange: {
    primary: 'orange',
    bg: 'bg-orange-600',
    bgHover: 'hover:bg-orange-500',
    border: 'border-orange-700',
    text: 'text-orange-400',
    textHover: 'hover:text-orange-400',
    accent: 'orange-500',
    accentLight: 'orange-300',
    accentDark: 'orange-900',
    shadow: 'shadow-orange-500/20'
  },
  pink: {
    primary: 'pink',
    bg: 'bg-pink-600',
    bgHover: 'hover:bg-pink-500',
    border: 'border-pink-700',
    text: 'text-pink-400',
    textHover: 'hover:text-pink-400',
    accent: 'pink-500',
    accentLight: 'pink-300',
    accentDark: 'pink-900',
    shadow: 'shadow-pink-500/20'
  },
  purple: {
    primary: 'purple',
    bg: 'bg-purple-600',
    bgHover: 'hover:bg-purple-500',
    border: 'border-purple-700',
    text: 'text-purple-400',
    textHover: 'hover:text-purple-400',
    accent: 'purple-500',
    accentLight: 'purple-300',
    accentDark: 'purple-900',
    shadow: 'shadow-purple-500/20'
  },
  gold: {
    primary: 'gold',
    bg: 'bg-gold-600',
    bgHover: 'hover:bg-gold-500',
    border: 'border-gold-700',
    text: 'text-gold-400',
    textHover: 'hover:text-gold-400',
    accent: 'gold-500',
    accentLight: 'gold-300',
    accentDark: 'gold-900',
    shadow: 'shadow-gold-500/20'
  }
};

// CHANGE THIS TO SWITCH THEMES
export const currentTheme: ThemeName = 'red';

// Get current theme configuration
export const theme = themes[currentTheme];

// Helper functions for generating class names
export const getButtonClasses = (variant: 'primary' | 'secondary' = 'primary') => {
  if (variant === 'primary') {
    return `${theme.bg} ${theme.bgHover} text-white px-8 py-4 rounded-sm font-semibold text-lg transition-all shadow-lg ${theme.shadow} uppercase tracking-wider`;
  }
  return `border border-${theme.accent}/50 hover:border-${theme.accent} text-${theme.accent} hover:text-white px-8 py-4 rounded-sm font-semibold text-lg transition-all bg-dark/50 hover:bg-${theme.primary}-900/20 uppercase tracking-wider`;
};

export const getIconClasses = () => {
  return `w-16 h-16 bg-${theme.accentDark}/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-${theme.primary}-500/20 transition-colors`;
};

export const getTextClasses = () => {
  return `text-${theme.accent}`;
};
