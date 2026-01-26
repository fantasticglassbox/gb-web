# Glassbox Website

A modern, responsive React.js website for Glassbox advertising solutions, featuring bilingual support (English/Indonesian) and smooth animations.

## Features

- 🌐 **Bilingual Support**: English and Indonesian (Bahasa Indonesia) localization
- 📱 **Responsive Design**: Mobile-first approach with Tailwind CSS
- ⚡ **Modern Stack**: React 18, TypeScript, and Framer Motion
- 🎨 **Smooth Animations**: Engaging user experience with Framer Motion
- 🚀 **Performance Optimized**: Fast loading and smooth interactions

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Internationalization**: i18next
- **Icons**: Heroicons
- **Build Tool**: Create React App

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd glassbox-web
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Audience.tsx    # Target audience section
│   ├── Features.tsx    # Key features
│   ├── Process.tsx     # Process overview
│   ├── WorkProcess.tsx # Detailed work process
│   ├── Platforms.tsx   # Advertising platforms
│   ├── Results.tsx     # Results showcase
│   ├── Partners.tsx    # Partners section
│   ├── Testimonials.tsx # Customer testimonials
│   ├── CTA.tsx         # Call-to-action
│   └── Footer.tsx      # Footer
├── locales/            # Translation files
│   ├── en/            # English translations
│   └── id/            # Indonesian translations
├── i18n.ts            # i18n configuration
├── App.tsx            # Main app component
└── index.css          # Global styles
```

## Localization

The website supports two languages:
- **English (en)**: Default language
- **Indonesian (id)**: Bahasa Indonesia

Language can be switched using the toggle button in the header. The selected language is persisted in localStorage.

## Customization

### Adding New Translations

1. Add new keys to both `src/locales/en/translation.json` and `src/locales/id/translation.json`
2. Use the translation in components with `t('key.path')`

### Styling

The project uses Tailwind CSS with custom colors defined in `tailwind.config.js`:
- `glassbox-blue`: Primary brand color
- `glassbox-dark`: Darker brand variant
- `glassbox-light`: Lighter brand variant

### Adding New Components

1. Create the component in `src/components/`
2. Import and use in `App.tsx`
3. Follow the existing pattern for animations and responsive design

## Deployment

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

### Deploy to Static Hosting

The built files can be deployed to any static hosting service like:
- Vercel
- Netlify
- AWS S3 + CloudFront
- GitHub Pages

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

© 2024 Glassbox. All rights reserved.# gb-web
# gb-web
