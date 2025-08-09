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
                'github_btn': 'View Source Code on GitHub',

                // Talent Website
                'talent_website_title': 'Talent Is Never Enough',
                'talent_website_subtitle': 'Discover the 13 Choices That Will Take You Beyond Your Talent',
                'talent_website_author': 'by John C. Maxwell',
                'talent_website_quote': '"The choices people make—not merely the skills they inherit—propel them onto greatness."',
                'talent_website_cta': 'Explore the 13 Principles',
                'talent_website_intro_title': 'Transform from Talent to Talent-Plus',
                'talent_website_intro_p1': 'New York Times best-selling author Dr. John C. Maxwell reveals that talent alone is never enough. Some talented people reach their full potential, while others self-destruct or remain trapped in mediocrity. What makes the difference?',
                'talent_website_intro_p2': 'Maxwell shares thirteen crucial choices that can transform anyone from having talent alone to becoming a "talent-plus" person who truly stands out.',
                'talent_website_principles_title': 'The 13 Principles',
                'principle_1_desc': 'The foundation of achievement starts with believing in yourself and your abilities.',
                'principle_2_desc': 'Passionate people have the energy and grit to go the extra mile.',
                'principle_3_desc': 'Nothing happens without taking the first step and making things happen.',
                'principle_4_desc': 'Concentration on specific goals channels your abilities in the right direction.',
                'principle_5_desc': 'Proper preparation sets you up for success when opportunities arise.',
                'principle_6_desc': 'Deliberate practice continuously improves and refines your abilities.',
                'principle_7_desc': 'Persistence through obstacles keeps you moving toward your goals.',
                'principle_8_desc': 'Bravery in the face of challenges reveals the true extent of your abilities.',
                'principle_9_desc': 'A continuous learning mindset opens doors to unlimited growth.',
                'principle_10_desc': 'Strong character serves as the foundation that protects your abilities.',
                'principle_11_desc': 'The connections you build significantly impact your potential for success.',
                'principle_12_desc': 'Taking ownership and accountability enhances your capabilities.',
                'principle_13_desc': 'Collaboration with others exponentially increases what you can achieve.',
                'principle_learn_more': 'Learn More',
                'talent_website_about_title': 'About John C. Maxwell',
                'talent_website_about_p1': 'John C. Maxwell is a #1 New York Times bestselling author, coach, and speaker who has sold more than 21 million books in fifty languages. He has been identified as the #1 leader in business by the American Management Association® and the most influential leadership expert in the world by Business Insider and Inc. magazine.',
                'talent_website_about_p2': 'As the founder of The John Maxwell Company, The John Maxwell Team, and EQUIP, his organizations have trained more than 5 million leaders worldwide.',
                'talent_website_footer': '&copy; 2024 Talent Is Never Enough Website. Educational purposes based on John C. Maxwell\'s work.'
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
                'github_btn': 'Bekijk Broncode op GitHub',

                // Talent Website
                'talent_website_title': 'Talent Is Nooit Genoeg',
                'talent_website_subtitle': 'Ontdek de 13 keuzes die je voorbij je talent brengen',
                'talent_website_author': 'door John C. Maxwell',
                'talent_website_quote': '"De keuzes die mensen maken - niet alleen de vaardigheden die ze erven - stuwen hen naar grootsheid."',
                'talent_website_cta': 'Verken de 13 principes',
                'talent_website_intro_title': 'Transformeer van talent naar talent-plus',
                'talent_website_intro_p1': 'New York Times best-selling auteur Dr. John C. Maxwell onthult dat talent alleen nooit genoeg is. Sommige getalenteerde mensen bereiken hun volledige potentieel, terwijl anderen zichzelf vernietigen of gevangen blijven in middelmatigheid. Wat maakt het verschil?',
                'talent_website_intro_p2': 'Maxwell deelt dertien cruciale keuzes die iedereen kunnen transformeren van alleen talent hebben naar een "talent-plus" persoon die er echt uitspringt.',
                'talent_website_principles_title': 'De 13 Principes',
                'principle_1_desc': 'De basis van prestatie begint met geloof in jezelf en je capaciteiten.',
                'principle_2_desc': 'Gepassioneerde mensen hebben de energie en de moed om een stap verder te gaan.',
                'principle_3_desc': 'Er gebeurt niets zonder de eerste stap te zetten en dingen te laten gebeuren.',
                'principle_4_desc': 'Concentratie op specifieke doelen stuurt je vaardigheden in de juiste richting.',
                'principle_5_desc': 'Een goede voorbereiding positioneert je voor succes wanneer kansen zich voordoen.',
                'principle_6_desc': 'Doelbewuste oefening verbetert en verfijnt je vaardigheden voortdurend.',
                'principle_7_desc': 'Doorzettingsvermogen door obstakels heen houdt je op weg naar je doelen.',
                'principle_8_desc': 'Moed in het aangezicht van uitdagingen onthult de ware omvang van je capaciteiten.',
                'principle_9_desc': 'Een mentaliteit van continu leren opent deuren naar onbeperkte groei.',
                'principle_10_desc': 'Een sterk karakter dient als de basis die je vaardigheden beschermt.',
                'principle_11_desc': 'De connecties die je opbouwt, beïnvloeden je potentieel voor succes aanzienlijk.',
                'principle_12_desc': 'Het nemen van eigendom en verantwoordelijkheid verbetert je capaciteiten.',
                'principle_13_desc': 'Samenwerking met anderen vermenigvuldigt exponentieel wat je kunt bereiken.',
                'principle_learn_more': 'Lees Meer',
                'talent_website_about_title': 'Over John C. Maxwell',
                'talent_website_about_p1': 'John C. Maxwell is een #1 New York Times bestsellerauteur, coach en spreker die meer dan 21 miljoen boeken heeft verkocht in vijftig talen. Hij is geïdentificeerd als de #1 leider in het bedrijfsleven door de American Management Association® en de meest invloedrijke leiderschapsexpert ter wereld door Business Insider en Inc. magazine.',
                'talent_website_about_p2': 'Als oprichter van The John Maxwell Company, The John Maxwell Team en EQUIP hebben zijn organisaties wereldwijd meer dan 5 miljoen leiders opgeleid.',
                'talent_website_footer': '&copy; 2024 Talent Is Nooit Genoeg Website. Educatieve doeleinden gebaseerd op het werk van John C. Maxwell.'
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