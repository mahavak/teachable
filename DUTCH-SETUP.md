# Dutch Version Setup for Teachable

This guide explains how to set up the Dutch translation support for the Teachable educational platform.

## Overview

The Dutch version includes:
- ✅ Complete UI translation (English ↔ Dutch)
- ✅ Language toggle buttons on all pages
- ✅ Database schema with translation support
- ✅ User language preference storage
- ✅ Automatic fallback to English if translation missing

## Database Setup

### Step 1: Run the Dutch Translation Schema

Execute the SQL script in your Supabase SQL Editor:

```bash
# Navigate to the teach directory
cd /home/lau_1968/teach

# Copy the SQL content from database-setup-dutch.sql
# Then paste and run it in Supabase SQL Editor
```

The script will:
- Create translation tables
- Add Dutch translations for all 13 principles
- Add user language preference column
- Create translation functions with English fallback
- Insert basic UI translations

### Step 2: Verify Database Setup

After running the script, you should see these new tables:
- `translations` - UI text translations
- `principle_translations` - The 13 Maxwell principles in both languages
- `challenge_translations` - Daily challenge translations
- `quote_translations` - Quote translations
- Updated `profiles` table with `preferred_language` column

## Features

### Language Toggle
- Flag buttons: 🇺🇸 English | 🇳🇱 Nederlands
- Appears on all pages in the header
- Remembers user preference in localStorage
- Saves preference to database for authenticated users

### Translation System
- **Static translations**: Fast loading for common UI elements
- **Database translations**: Dynamic content like principles and challenges
- **Fallback system**: English shown if Dutch translation missing
- **Caching**: Database translations cached for performance

### Dutch Translations Included

#### The 13 Principles:
1. **Geloof Verheft Je Talent** (Belief Lifts Your Talent)
2. **Passie Geeft Je Talent Energie** (Passion Energizes Your Talent)
3. **Initiatief Activeert Je Talent** (Initiative Activates Your Talent)
4. **Focus Stuurt Je Talent** (Focus Directs Your Talent)
5. **Voorbereiding Positioneert Je Talent** (Preparation Positions Your Talent)
6. **Oefening Scherpt Je Talent** (Practice Sharpens Your Talent)
7. **Doorzettingsvermogen Onderhoudt Je Talent** (Perseverance Sustains Your Talent)
8. **Moed Test Je Talent** (Courage Tests Your Talent)
9. **Leerbaar Zijn Breidt Je Talent Uit** (Teachability Expands Your Talent)
10. **Karakter Beschermt Je Talent** (Character Protects Your Talent)
11. **Relaties Beïnvloeden Je Talent** (Relationships Influence Your Talent)
12. **Verantwoordelijkheid Versterkt Je Talent** (Responsibility Strengthens Your Talent)
13. **Teamwerk Vermenigvuldigt Je Talent** (Teamwork Multiplies Your Talent)

#### UI Elements:
- Authentication: Inloggen, Registreren, Uitloggen
- Navigation: All menu items and buttons
- Project descriptions: Pomodoro Timer, Assessment Tool, etc.
- Form elements: Save, Cancel, Delete, Edit
- Status messages: Loading, Completed, Pending

## Testing

### Test Page
A test page is available at `test-language-switch.html` to verify:
- Language switching functionality
- Translation display
- Button state updates
- Local storage persistence

### Manual Testing
1. Open `index.html` in a browser
2. Click the 🇳🇱 Nederlands button
3. Verify all text changes to Dutch
4. Refresh page - should remember Dutch selection
5. Click 🇺🇸 English to switch back

## File Structure

```
teach/
├── index.html                     # Updated with language toggle
├── js/
│   ├── i18n.js                   # Translation system
│   └── supabase-config.js        # Updated with translation functions
├── database-setup-dutch.sql      # Dutch database schema
├── test-language-switch.html     # Test page
└── DUTCH-SETUP.md               # This file
```

## Implementation Details

### JavaScript Files Modified:
- `js/i18n.js` - Complete translation system with database integration
- `js/supabase-config.js` - Added i18nDb functions for database translations
- `index.html` - Added language toggle and data-i18n attributes

### Key Functions:
- `i18n.setLanguage(lang)` - Switch language and update UI
- `i18n.initializeUserLanguage()` - Load user's preferred language
- `i18nDb.getTranslation(key, lang)` - Get translation from database
- `i18nDb.getPrincipleTranslation(id, lang)` - Get principle translation

### HTML Attributes:
- `data-i18n="key"` - Marks elements for translation
- `lang` attribute - Updated dynamically for accessibility

## Usage Examples

### In HTML:
```html
<h1 data-i18n="teachable">Teachable</h1>
<p data-i18n="subtitle">Educational Projects...</p>
```

### In JavaScript:
```javascript
// Switch language
await i18n.setLanguage('nl');

// Get translation
const text = i18n.t('signin'); // Returns "Inloggen" in Dutch

// Get principle translation from database
const principle = await i18nDb.getPrincipleTranslation(9, 'nl');
console.log(principle.title); // "Leerbaar Zijn Breidt Je Talent Uit"
```

## Next Steps

To extend the Dutch support:

1. **Add more translations** to the `database-setup-dutch.sql` file
2. **Translate dynamic content** like challenges and quotes
3. **Add language support to other tools** (Pomodoro Timer, Assessment, etc.)
4. **Add more languages** by extending the translation tables

## Troubleshooting

### Common Issues:
- **Translations not showing**: Check database connection and table setup
- **Language not persisting**: Verify localStorage and database updates
- **Fallback not working**: Ensure English translations exist as backup

### Debug Mode:
Enable console logging to see translation system activity:
```javascript
// Check current language
console.log('Current language:', i18n.getCurrentLanguage());

// Test translation
console.log('Translation test:', i18n.t('signin'));
```

## Support

The Dutch translation system is fully integrated and ready to use. All 13 Maxwell principles have been professionally translated, and the system supports:
- Bidirectional language switching
- User preference persistence
- Graceful fallbacks
- Performance optimization through caching

Enjoy using Teachable in Dutch! 🇳🇱