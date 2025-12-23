# Templates Directory

This directory contains all template files used by the generator. Files with `.template` extension will be processed and copied to generated projects.

## Template Variables

All templates use `{{VARIABLE}}` placeholders that get replaced during generation. Available variables:

### Client Information
- `beast-tax-accounting` - Project name (kebab-case)
- `Beast Tax Accounting` - Company display name
- `Professional services for your business needs` - Business description
- `Edwin Venezuela` - Author name

### Domain & URLs
- `https://beast-tax-accounting.com` - Full site URL
- `beast-tax-accounting.com` - Domain without protocol
- `links.beast-tax-accounting.com` - GoHighLevel domain
- `` - Twitter handle

### Contact Information
- `123-456-7890` - Phone number
- `123-456-7890` - WhatsApp number
- `info@clientdomain.com` - Email address
- `123 Main St` - Street address
- `City` - City
- `ST` - State/Province
- `12345` - ZIP/Postal code
- `Country` - Country
- `123 Main St, City, ST 12345` - Full address string
- `0` - Latitude
- `0` - Longitude

### Social Media
- `` - Facebook URL
- `` - Instagram URL
- `` - LinkedIn URL
- `` - YouTube URL
- `` - TikTok URL
- `` - Twitter URL
- `` - Formatted social links array for Navbar
- `` - Formatted social links array for Footer

### Branding
- `#f0fdf4` through `#14532d` - Color shades
- `#0a0a0a` - Dark background color

### GoHighLevel
- `https://links.beast-tax-accounting.com/js/form_embed.js` - Form embed script URL
- `` - English contact form URL
- `` - Spanish contact form URL
- `ghl-form` - Contact form ID
- `` - Personal booking widget URL
- `` - Business booking widget URL

### SEO
- `keyword1, keyword2, keyword3` - Comma-separated keywords
- `"keyword1",
      "keyword2",
      "keyword3"` - Formatted array for config files
- `en` - Default language (es/en)
- `en_US` - Locale string (e.g., es_PR)

### Navigation
- `` - Formatted external navigation links

### Feature Flags
- `{{I18N_ENABLED}}` - true/false for i18n support
- `{{ANIMATIONS_ENABLED}}` - true/false for animations
- `{{SEO_ENABLED}}` - true/false for SEO components
- `{{HERO_ENABLED}}` - true/false for hero section
- `{{TEAM_ENABLED}}` - true/false for team section
- `{{SERVICES_ENABLED}}` - true/false for services
- `{{CONTACT_FORM_ENABLED}}` - true/false for contact form
- `{{MODALS_ENABLED}}` - true/false for modals

## Conditional Blocks

Templates support conditional blocks using Handlebars-like syntax:

```

```

Example:
```

import { useI18n } from "../i18n"

```

## File Structure

Templates maintain the same directory structure as the generated project:

```
templates/
├── package.json.template
├── gatsby-config.ts.template
├── tailwind.config.js.template
├── tsconfig.json.template
├── postcss.config.js.template
├── gatsby-browser.js.template
├── gatsby-ssr.js.template
├── src/
│   ├── components/
│   │   ├── Hero.tsx.template
│   │   ├── Navbar.tsx.template
│   │   └── ...
│   ├── pages/
│   │   ├── index.tsx.template
│   │   ├── 404.tsx.template
│   │   └── ...
│   ├── i18n/
│   │   ├── I18nContext.tsx.template
│   │   └── ...
│   └── styles/
│       └── global.css.template
└── static/
    └── README-ASSETS.md
```

## Adding New Templates

1. Copy the file from `visionaccountingpr/`
2. Replace hardcoded values with `{{VARIABLE}}` placeholders
3. Add `.template` extension
4. Place in the same directory structure as the generated project
5. Add variable mappings in `src/replacements.ts` if needed

## Notes

- Template files are processed recursively
- All `.template` extensions are removed in the output
- Directories are created automatically
- Feature flags control which files are included

