# Competitions Page

This directory contains the competitions page and its associated components for the PowerWin Crypto Raffle platform.

## Structure

- `page.jsx` - Main competitions page component
- `CompetitionsSection.jsx` - Navigation section with competition categories
- `LiveWinnersSection.jsx` - Live winners display section
- `PrizeDisplaySection.jsx` - Prize display options (Live Winners, Provably Fair, Leaderboard)
- `WinnersListSection.jsx` - Footer section with navigation and support links
- `competitions.css` - Custom styles for the competitions page

## Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Interactive Elements**: Hover effects and animations for better user experience
- **Live Winners**: Real-time display of recent winners
- **Prize Categories**: Different types of competitions and prizes
- **Navigation Integration**: Seamlessly integrated with the main navbar

## Components

### CompetitionsSection
- Navigation tabs for different competition types
- Active state highlighting
- Responsive button layout

### LiveWinnersSection
- Grid layout for winner cards
- Animated pulse effect for live updates
- Prize amount and time display

### PrizeDisplaySection
- Three main sections: Live Winners, Provably Fair, Leaderboard
- Glass morphism design
- Icon integration

### WinnersListSection
- Footer with navigation links
- Support contact information
- Social media links
- Policy links

## Styling

The page uses:
- Tailwind CSS for utility classes
- Custom CSS for animations and effects
- Glass morphism design elements
- Responsive grid layouts
- Custom scrollbars for carousels

## Navigation

The competitions page is accessible via:
- Desktop navbar: "Competitions" dropdown
- Mobile menu: "Competitions" button
- Direct URL: `/competitions`

## Future Enhancements

- Add real-time data integration
- Implement competition filtering
- Add user participation tracking
- Integrate with blockchain for provably fair results 