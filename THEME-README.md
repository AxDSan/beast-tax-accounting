# Beast Tax Accounting - Theme Configuration

## How to Change Theme Colors

This website supports multiple color themes. You can easily switch between different color schemes by following these steps:

### Available Themes
- **red** (default) - Professional red theme
- **blue** - Clean blue theme
- **green** - Fresh green theme
- **orange** - Warm orange theme
- **pink** - Modern pink theme
- **purple** - Elegant purple theme
- **gold** - Premium gold theme (original)

### How to Change Theme

1. **Open the theme configuration file:**
   ```
   src/theme.ts
   ```

2. **Change the current theme:**
   Find this line at the bottom of the file:
   ```typescript
   export const currentTheme: ThemeName = 'red';
   ```

   Change `'red'` to any of the available theme names:
   ```typescript
   export const currentTheme: ThemeName = 'blue';    // Blue theme
   export const currentTheme: ThemeName = 'green';   // Green theme
   export const currentTheme: ThemeName = 'orange';  // Orange theme
   export const currentTheme: ThemeName = 'pink';    // Pink theme
   export const currentTheme: ThemeName = 'purple';  // Purple theme
   export const currentTheme: ThemeName = 'gold';    // Gold theme
   ```

3. **Save the file and restart the development server:**
   ```bash
   npm run develop
   ```

### Theme Features

Each theme includes:
- **Primary buttons** - Main call-to-action buttons
- **Secondary buttons** - Outline-style buttons
- **Icons** - Service and feature icons
- **Accents** - Text highlights, borders, and decorative elements
- **Gradients** - Background gradients and overlays

### Adding New Themes

To add a new color theme:

1. Add a new entry to the `themes` object in `src/theme.ts`
2. Define all the color properties for your new theme
3. Set the `currentTheme` to your new theme name

Example:
```typescript
yellow: {
  primary: 'yellow',
  bg: 'bg-yellow-600',
  bgHover: 'hover:bg-yellow-500',
  border: 'border-yellow-700',
  text: 'text-yellow-400',
  textHover: 'hover:text-yellow-400',
  accent: 'yellow-500',
  accentLight: 'yellow-300',
  accentDark: 'yellow-900',
  shadow: 'shadow-yellow-500/20'
}
```

### Current Theme: Red

The website is currently using the **Red** theme, which provides a professional and trustworthy appearance perfect for a tax accounting business.

### Video Background

The hero section features a beautiful video background from Pexels: [Business Meeting Video](https://videos.pexels.com/video-files/3191422/3191422-uhd_2732_1440_25fps.mp4)

---

**Note:** All themes maintain the same professional layout and typography while allowing you to customize the color scheme to match your brand preferences.
