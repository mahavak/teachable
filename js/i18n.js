class I18n {
    constructor() {
        this.currentLanguage = localStorage.getItem('teachable-language') || 'en';
        this.translations = {};
        this.dbTranslations = new Map(); // Cache for database translations
        this.loadTranslations();
    }

    loadTranslations() {
        this.translations = {
            en: {
                // Header
                'signin': 'Sign In',
                'signup': 'Sign Up',
                'signout': 'Sign Out',
                'teachable': 'Teachable',
                'subtitle': 'Educational Projects Based on John C. Maxwell\'s<br>"Talent Is Never Enough"',
                'author': 'Maximizing Your Potential Through the 13 Principles',
                'quote': '"The choices people make—not merely the skills they inherit—propel them onto greatness."',
                'quote_author': '- John C. Maxwell',
                
                // Project Cards
                'pomodoro_title': 'Talent-Plus Pomodoro Timer',
                'pomodoro_desc': 'A productivity timer that integrates all 13 principles from Maxwell\'s book. Learn a new principle with each focus session while maximizing your productivity.',
                'pomodoro_btn': 'Start Timer',
                'pomodoro_features': '✨ Features: Progress tracking, teachability assessment, principle rotation',
                
                'website_title': 'Principles Website',
                'website_desc': 'Comprehensive website showcasing all 13 principles with detailed explanations, practical applications, and actionable insights for personal growth.',
                'website_btn': 'Explore Principles',
                'website_features': '📚 Includes: Detailed chapters, quotes, and implementation guides',
                
                'assessment_title': 'Complete Talent Assessment',
                'assessment_desc': 'Comprehensive 65-question assessment evaluating your strength across all 13 Maxwell principles with personalized recommendations and action plans.',
                'assessment_btn': 'Take Assessment',
                'assessment_features': '📊 Features: Detailed scoring, growth recommendations, downloadable results',
                
                'challenge_title': 'Daily Challenge Generator',
                'challenge_desc': 'Get personalized daily challenges based on Maxwell\'s principles. Build habits, earn points, unlock achievements, and track your growth journey.',
                'challenge_btn': 'Get Challenge',
                'challenge_features': '🏆 Features: 390+ challenges, gamification, streak tracking, social sharing',
                
                'growth_title': 'Personal Growth Tracker',
                'growth_desc': 'Advanced tracking system for habits, goals, and progress across all 13 principles with analytics, insights, and comprehensive reporting.',
                'growth_btn': 'Track Progress',
                'growth_features': '📊 Features: Daily tracking, goal setting, analytics dashboard, export reports',
                
                'quote_widget_title': 'Maxwell Quote Widget',
                'quote_widget_desc': 'Daily inspiration with 130+ quotes from Maxwell and leadership experts. Features favorites, sharing, themes, and auto-rotation for constant motivation.',
                'quote_widget_btn': 'Get Inspired',
                'quote_widget_features': '✨ Features: 130+ quotes, 5 themes, favorites system, social sharing',
                
                // Principles
                'principles_title': 'The 13 Talent-Plus Principles',
                'principle_1': 'Belief Lifts Your Talent',
                'principle_2': 'Passion Energizes Your Talent',
                'principle_3': 'Initiative Activates Your Talent',
                'principle_4': 'Focus Directs Your Talent',
                'principle_5': 'Preparation Positions Your Talent',
                'principle_6': 'Practice Sharpens Your Talent',
                'principle_7': 'Perseverance Sustains Your Talent',
                'principle_8': 'Courage Tests Your Talent',
                'principle_9': 'Teachability Expands Your Talent',
                'principle_10': 'Character Protects Your Talent',
                'principle_11': 'Relationships Influence Your Talent',
                'principle_12': 'Responsibility Strengthens Your Talent',
                'principle_13': 'Teamwork Multiplies Your Talent',
                
                // Footer
                'footer_based': 'Based on "Talent Is Never Enough" by John C. Maxwell',
                'footer_quote': '"Everything we know we learned from someone else!"',
                'github_btn': 'View Source Code on GitHub'
            },
            
            nl: {
                // Header
                'signin': 'Inloggen',
                'signup': 'Registreren',
                'signout': 'Uitloggen',
                'teachable': 'Leerbaar',
                'subtitle': 'Educatieve Projecten Gebaseerd op John C. Maxwell\'s<br>"Talent Is Never Enough"',
                'author': 'Maximaliseer Je Potentieel Door de 13 Principes',
                'quote': '"De keuzes die mensen maken—niet alleen de vaardigheden die ze erven—stuwen hen naar grootsheid."',
                'quote_author': '- John C. Maxwell',
                
                // Project Cards
                'pomodoro_title': 'Talent-Plus Pomodoro Timer',
                'pomodoro_desc': 'Een productiviteitstimer die alle 13 principes uit Maxwell\'s boek integreert. Leer een nieuw principe bij elke focussessie terwijl je je productiviteit maximaliseert.',
                'pomodoro_btn': 'Start Timer',
                'pomodoro_features': '✨ Functies: Voortgangsregistratie, leerbaarheidsbeoordeling, principerotatie',
                
                'website_title': 'Principes Website',
                'website_desc': 'Uitgebreide website die alle 13 principes toont met gedetailleerde uitleg, praktische toepassingen en uitvoerbare inzichten voor persoonlijke groei.',
                'website_btn': 'Verken Principes',
                'website_features': '📚 Bevat: Gedetailleerde hoofdstukken, citaten en implementatiegidsen',
                
                'assessment_title': 'Complete Talent Beoordeling',
                'assessment_desc': 'Uitgebreide beoordeling met 65 vragen die je sterkte evalueert over alle 13 Maxwell principes met persoonlijke aanbevelingen en actieplannen.',
                'assessment_btn': 'Doe Beoordeling',
                'assessment_features': '📊 Functies: Gedetailleerde scoring, groei-aanbevelingen, downloadbare resultaten',
                
                'challenge_title': 'Dagelijkse Uitdaging Generator',
                'challenge_desc': 'Krijg gepersonaliseerde dagelijkse uitdagingen gebaseerd op Maxwell\'s principes. Bouw gewoontes op, verdien punten, ontgrendel prestaties en volg je groeireis.',
                'challenge_btn': 'Krijg Uitdaging',
                'challenge_features': '🏆 Functies: 390+ uitdagingen, gamification, reeksregistratie, sociaal delen',
                
                'growth_title': 'Persoonlijke Groei Tracker',
                'growth_desc': 'Geavanceerd volgsysteem voor gewoontes, doelen en voortgang over alle 13 principes met analyses, inzichten en uitgebreide rapportage.',
                'growth_btn': 'Volg Voortgang',
                'growth_features': '📊 Functies: Dagelijkse tracking, doelstelling, analytics dashboard, export rapporten',
                
                'quote_widget_title': 'Maxwell Citaat Widget',
                'quote_widget_desc': 'Dagelijkse inspiratie met 130+ citaten van Maxwell en leiderschapsexperts. Bevat favorieten, delen, thema\'s en auto-rotatie voor constante motivatie.',
                'quote_widget_btn': 'Krijg Inspiratie',
                'quote_widget_features': '✨ Functies: 130+ citaten, 5 thema\'s, favorietensysteem, sociaal delen',
                
                // Principles
                'principles_title': 'De 13 Talent-Plus Principes',
                'principle_1': 'Geloof Verheft Je Talent',
                'principle_2': 'Passie Geeft Je Talent Energie',
                'principle_3': 'Initiatief Activeert Je Talent',
                'principle_4': 'Focus Stuurt Je Talent',
                'principle_5': 'Voorbereiding Positioneert Je Talent',
                'principle_6': 'Oefening Scherpt Je Talent',
                'principle_7': 'Doorzettingsvermogen Onderhoudt Je Talent',
                'principle_8': 'Moed Test Je Talent',
                'principle_9': 'Leerbaar Zijn Breidt Je Talent Uit',
                'principle_10': 'Karakter Beschermt Je Talent',
                'principle_11': 'Relaties Beïnvloeden Je Talent',
                'principle_12': 'Verantwoordelijkheid Versterkt Je Talent',
                'principle_13': 'Teamwerk Vermenigvuldigt Je Talent',
                
                // Footer
                'footer_based': 'Gebaseerd op "Talent Is Never Enough" door John C. Maxwell',
                'footer_quote': '"Alles wat we weten hebben we van iemand anders geleerd!"',
                'github_btn': 'Bekijk Broncode op GitHub'
            }
        };
    }

    async setLanguage(lang) {
        if (this.translations[lang]) {
            this.currentLanguage = lang;
            localStorage.setItem('teachable-language', lang);
            
            // Clear translation cache
            this.clearCache();
            
            // Update user preference in database if authenticated
            try {
                const { auth, i18nDb } = await import('./supabase-config.js');
                const user = await auth.getCurrentUser();
                if (user) {
                    await i18nDb.updateUserLanguage(user.id, lang);
                }
            } catch (error) {
                console.warn('Could not update user language preference:', error);
            }
            
            this.updatePage();
            
            // Trigger custom event for other components
            window.dispatchEvent(new CustomEvent('languageChanged', { 
                detail: { language: lang } 
            }));
        }
    }

    t(key) {
        return this.translations[this.currentLanguage][key] || this.translations['en'][key] || key;
    }

    updatePage() {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.t(key);
            
            if (element.tagName === 'INPUT' && element.type !== 'submit') {
                element.placeholder = translation;
            } else {
                element.innerHTML = translation;
            }
        });

        // Update document language attribute
        document.documentElement.lang = this.currentLanguage;
    }

    getCurrentLanguage() {
        return this.currentLanguage;
    }

    // Initialize user's preferred language from database
    async initializeUserLanguage() {
        try {
            const { auth, i18nDb } = await import('./supabase-config.js');
            const user = await auth.getCurrentUser();
            if (user) {
                const userLang = await i18nDb.getUserLanguage(user.id);
                if (userLang && userLang !== this.currentLanguage) {
                    await this.setLanguage(userLang);
                }
            }
        } catch (error) {
            console.warn('Could not load user language preference:', error);
        }
    }

    // Get translation from database with fallback to static translations
    async getDbTranslation(key, principleId = null) {
        const cacheKey = `${key}_${this.currentLanguage}_${principleId || ''}`;
        
        // Check cache first
        if (this.dbTranslations.has(cacheKey)) {
            return this.dbTranslations.get(cacheKey);
        }

        try {
            const { i18nDb } = await import('./supabase-config.js');
            
            let translation;
            if (principleId) {
                // Get principle-specific translation
                translation = await i18nDb.getPrincipleTranslation(principleId, this.currentLanguage);
                translation = translation?.title || this.t(key);
            } else {
                // Get general translation
                translation = await i18nDb.getTranslation(key, this.currentLanguage);
            }

            // Cache the result
            this.dbTranslations.set(cacheKey, translation);
            return translation;
        } catch (error) {
            console.warn('Database translation error:', error);
            return this.t(key); // Fallback to static translation
        }
    }

    // Clear translation cache (useful when language changes)
    clearCache() {
        this.dbTranslations.clear();
    }
}

// Export as default and make globally available
const i18n = new I18n();
window.i18n = i18n;
export default i18n;