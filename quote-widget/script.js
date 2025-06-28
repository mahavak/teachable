// Maxwell Quote Widget - Enhanced Implementation
// Based on "Talent Is Never Enough" principles by John C. Maxwell

(function() {
    'use strict';

    // Comprehensive Quote Database with Maxwell's 13 Principles
    const quotesDatabase = {
        belief: [
            { text: "Belief lifts your talent to a whole new level.", author: "John C. Maxwell", context: "Your mindset determines your success. When you believe in yourself, you unlock your potential." },
            { text: "Whether you think you can or think you can't, you're right.", author: "Henry Ford", context: "Belief in yourself is the foundation of all achievement. Your thoughts shape your reality." },
            { text: "The first person you have to inspire every day is yourself.", author: "John C. Maxwell", context: "Self-belief starts with daily inspiration and positive self-talk." },
            { text: "Your attitude determines your altitude.", author: "Zig Ziglar", context: "A positive belief system elevates your performance and opportunities." },
            { text: "Believe in yourself! Have faith in your abilities!", author: "Norman Vincent Peale", context: "Self-confidence is the first step toward achieving your goals." }
        ],
        passion: [
            { text: "Passion energizes your talent.", author: "John C. Maxwell", context: "When you love what you do, you naturally excel at it." },
            { text: "Nothing great in the world has been accomplished without passion.", author: "Georg Wilhelm Friedrich Hegel", context: "Passion fuels persistence and drives extraordinary results." },
            { text: "The only way to do great work is to love what you do.", author: "Steve Jobs", context: "Passion transforms work into purpose and creates lasting fulfillment." },
            { text: "Passion is the genesis of genius.", author: "Tony Robbins", context: "Intense interest and enthusiasm unlock creative potential." },
            { text: "Without passion, you don't have energy; without energy, you have nothing.", author: "Warren Buffett", context: "Passion provides the energy needed for sustained effort and success." }
        ],
        initiative: [
            { text: "Initiative activates your talent.", author: "John C. Maxwell", context: "Taking the first step transforms potential into action." },
            { text: "The secret of getting ahead is getting started.", author: "Mark Twain", context: "Initiative means starting before you feel ready." },
            { text: "Don't wait for opportunity. Create it.", author: "George Bernard Shaw", context: "Proactive people make their own opportunities." },
            { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky", context: "Initiative requires taking action despite uncertainty." },
            { text: "Action is the foundational key to all success.", author: "Pablo Picasso", context: "Success comes from doing, not just thinking or planning." }
        ],
        focus: [
            { text: "Focus directs your talent.", author: "John C. Maxwell", context: "Concentrated effort produces extraordinary results." },
            { text: "The successful warrior is the average man with laser-like focus.", author: "Bruce Lee", context: "Focus transforms ordinary ability into exceptional performance." },
            { text: "Where focus goes, energy flows and results show.", author: "T. Harv Eker", context: "Attention directed produces measurable outcomes." },
            { text: "The main thing is to keep the main thing the main thing.", author: "Stephen Covey", context: "Focus means saying no to good things to say yes to great things." },
            { text: "Focus is a matter of deciding what things you're not going to do.", author: "John Carmack", context: "Focus requires elimination as much as concentration." }
        ],
        preparation: [
            { text: "Preparation positions your talent.", author: "John C. Maxwell", context: "Success is where preparation meets opportunity." },
            { text: "By failing to prepare, you are preparing to fail.", author: "Benjamin Franklin", context: "Preparation is the foundation of confident performance." },
            { text: "Give me six hours to chop down a tree and I will spend the first four sharpening the axe.", author: "Abraham Lincoln", context: "Preparation multiplies the effectiveness of effort." },
            { text: "The will to win is important, but the will to prepare is vital.", author: "Joe Paterno", context: "Preparation determines performance under pressure." },
            { text: "Champions do not become champions when they win the event, but in the hours, weeks, months and years they spend preparing for it.", author: "Michael Jordan", context: "Excellence is built through consistent preparation." }
        ],
        practice: [
            { text: "Practice sharpens your talent.", author: "John C. Maxwell", context: "Deliberate practice turns good into great." },
            { text: "Practice isn't the thing you do once you're good. It's the thing you do that makes you good.", author: "Malcolm Gladwell", context: "Practice precedes mastery, not the other way around." },
            { text: "Excellence is not a singular act but a habit. You are what you repeatedly do.", author: "Aristotle", context: "Consistent practice creates lasting excellence." },
            { text: "The expert in anything was once a beginner.", author: "Helen Hayes", context: "Everyone starts somewhere; practice bridges the gap." },
            { text: "Success is nothing more than a few simple disciplines, practiced every day.", author: "Jim Rohn", context: "Small, consistent practices compound into major results." }
        ],
        perseverance: [
            { text: "Perseverance sustains your talent.", author: "John C. Maxwell", context: "Persistence turns temporary defeat into ultimate victory." },
            { text: "Many of life's failures are people who did not realize how close they were to success when they gave up.", author: "Thomas Edison", context: "Breakthrough often comes just after the point of giving up." },
            { text: "Fall seven times, stand up eight.", author: "Japanese Proverb", context: "Resilience is getting up one more time than you fall down." },
            { text: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.", author: "Thomas Edison", context: "Perseverance is the difference between failure and success." },
            { text: "Winners never quit and quitters never win.", author: "Vince Lombardi", context: "Persistence is the ultimate competitive advantage." }
        ],
        courage: [
            { text: "Courage tests your talent.", author: "John C. Maxwell", context: "Courage reveals the true extent of your abilities." },
            { text: "Courage is not the absence of fear, but the triumph over it.", author: "Nelson Mandela", context: "Courage means acting despite fear, not without it." },
            { text: "All our dreams can come true if we have the courage to pursue them.", author: "Walt Disney", context: "Courage bridges the gap between dreams and reality." },
            { text: "You cannot swim for new horizons until you have courage to lose sight of the shore.", author: "William Faulkner", context: "Growth requires the courage to leave your comfort zone." },
            { text: "Life shrinks or expands in proportion to one's courage.", author: "Anais Nin", context: "Courage determines the size of your life and opportunities." }
        ],
        teachability: [
            { text: "Teachability expands your talent.", author: "John C. Maxwell", context: "A learning mindset multiplies your capabilities." },
            { text: "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice.", author: "Brian Herbert", context: "Teachability is a choice that unlocks continuous growth." },
            { text: "Anyone who stops learning is old, whether at twenty or eighty.", author: "Henry Ford", context: "Learning keeps you young and adaptable." },
            { text: "The more I learn, the more I realize how much I don't know.", author: "Albert Einstein", context: "Wisdom begins with recognizing what you don't know." },
            { text: "It's what you learn after you know it all that counts.", author: "John Wooden", context: "True learning begins when you think you know everything." }
        ],
        character: [
            { text: "Character protects your talent.", author: "John C. Maxwell", context: "Character provides the foundation for sustainable success." },
            { text: "The true test of a man's character is what he does when no one is watching.", author: "John Wooden", context: "Character is who you are when nobody is looking." },
            { text: "Character is doing the right thing when nobody's looking.", author: "J.C. Watts", context: "Integrity is the cornerstone of lasting achievement." },
            { text: "Ability may get you to the top, but it takes character to keep you there.", author: "Zig Ziglar", context: "Character sustains success where talent alone cannot." },
            { text: "Character is the real foundation of all worthwhile success.", author: "John Hays Hammond", context: "Success built on character lasts generations." }
        ],
        relationships: [
            { text: "Relationships influence your talent.", author: "John C. Maxwell", context: "Success is rarely a solo journey; relationships multiply impact." },
            { text: "You are the average of the five people you spend the most time with.", author: "Jim Rohn", context: "Choose relationships that elevate and inspire you." },
            { text: "Surround yourself with only people who are going to lift you higher.", author: "Oprah Winfrey", context: "Relationships should challenge you to become better." },
            { text: "The quality of your life is the quality of your relationships.", author: "Tony Robbins", context: "Strong relationships create a foundation for fulfillment." },
            { text: "Alone we can do so little; together we can do so much.", author: "Helen Keller", context: "Collaboration multiplies individual capabilities." }
        ],
        responsibility: [
            { text: "Responsibility strengthens your talent.", author: "John C. Maxwell", context: "Taking ownership develops character and capability." },
            { text: "The price of greatness is responsibility.", author: "Winston Churchill", context: "Great achievement requires great responsibility." },
            { text: "You must take personal responsibility. You cannot change the circumstances, the seasons, or the wind, but you can change yourself.", author: "Jim Rohn", context: "Responsibility is the foundation of personal power." },
            { text: "The moment you take responsibility for everything in your life is the moment you can change anything in your life.", author: "Hal Elrod", context: "Responsibility is the key to transformation." },
            { text: "Hold yourself responsible for a higher standard than anybody expects of you.", author: "Henry Ward Beecher", context: "Self-imposed standards drive excellence." }
        ],
        teamwork: [
            { text: "Teamwork multiplies your talent.", author: "John C. Maxwell", context: "Collaboration amplifies individual strengths." },
            { text: "Talent wins games, but teamwork and intelligence win championships.", author: "Michael Jordan", context: "Team success requires more than individual brilliance." },
            { text: "Individually, we are one drop. Together, we are an ocean.", author: "Ryunosuke Satoro", context: "Unity creates unstoppable force." },
            { text: "If everyone is moving forward together, then success takes care of itself.", author: "Henry Ford", context: "Aligned effort produces extraordinary results." },
            { text: "Teamwork is the fuel that allows common people to attain uncommon results.", author: "Andrew Carnegie", context: "Teamwork transforms ordinary into extraordinary." }
        ]
    };

    // Principle mapping
    const principleMap = {
        1: { key: 'belief', title: 'Belief Lifts Your Talent', icon: '💫' },
        2: { key: 'passion', title: 'Passion Energizes Your Talent', icon: '🔥' },
        3: { key: 'initiative', title: 'Initiative Activates Your Talent', icon: '🚀' },
        4: { key: 'focus', title: 'Focus Directs Your Talent', icon: '🎯' },
        5: { key: 'preparation', title: 'Preparation Positions Your Talent', icon: '📋' },
        6: { key: 'practice', title: 'Practice Sharpens Your Talent', icon: '⚡' },
        7: { key: 'perseverance', title: 'Perseverance Sustains Your Talent', icon: '💪' },
        8: { key: 'courage', title: 'Courage Tests Your Talent', icon: '🦁' },
        9: { key: 'teachability', title: 'Teachability Expands Your Talent', icon: '📚' },
        10: { key: 'character', title: 'Character Protects Your Talent', icon: '🛡️' },
        11: { key: 'relationships', title: 'Relationships Influence Your Talent', icon: '🤝' },
        12: { key: 'responsibility', title: 'Responsibility Strengthens Your Talent', icon: '⚖️' },
        13: { key: 'teamwork', title: 'Teamwork Multiplies Your Talent', icon: '👥' }
    };

    // Widget state
    let state = {
        currentQuote: null,
        currentPrincipleFilter: 'all',
        currentTheme: 'default',
        autoRotate: true,
        rotationInterval: null,
        favorites: JSON.parse(localStorage.getItem('maxwell-quote-favorites') || '[]'),
        history: JSON.parse(localStorage.getItem('maxwell-quote-history') || '[]'),
        stats: JSON.parse(localStorage.getItem('maxwell-quote-stats') || '{"viewed": 0, "shared": 0, "streak": 0, "lastVisit": null}')
    };

    // DOM elements
    let elements = {};

    // Initialize the widget
    function init() {
        cacheElements();
        setupEventListeners();
        updateDailyStreak();
        loadQuote();
        updateStats();
        updateFavorites();
        updateHistory();
        generateEmbedCode();
        
        // Start auto-rotation if enabled
        if (state.autoRotate) {
            startAutoRotation();
        }
    }

    // Cache DOM elements
    function cacheElements() {
        elements = {
            // Quote display
            quoteText: document.getElementById('quoteText'),
            quoteAuthor: document.getElementById('quoteAuthor'),
            quoteContext: document.getElementById('quoteContext'),
            principleIndicator: document.getElementById('principleIndicator'),
            
            // Action buttons
            newQuoteBtn: document.getElementById('newQuoteBtn'),
            favoriteBtn: document.getElementById('favoriteBtn'),
            shareBtn: document.getElementById('shareBtn'),
            copyBtn: document.getElementById('copyBtn'),
            
            // Controls
            principleFilter: document.getElementById('principleFilter'),
            autoRotateToggle: document.getElementById('autoRotate'),
            themeSelect: document.getElementById('themeSelect'),
            fontSizeSlider: document.getElementById('fontSize'),
            fontSizeValue: document.getElementById('fontSizeValue'),
            
            // Stats
            totalViewed: document.getElementById('totalViewed'),
            favoriteCount: document.getElementById('favoriteCount'),
            shareCount: document.getElementById('shareCount'),
            streakDays: document.getElementById('streakDays'),
            
            // Modal and other elements
            shareModal: document.getElementById('shareModal'),
            closeShareModal: document.getElementById('closeShareModal'),
            shareTextArea: document.getElementById('shareTextArea'),
            embedCode: document.getElementById('embedCode'),
            copyEmbedBtn: document.getElementById('copyEmbedBtn'),
            historyList: document.getElementById('historyList'),
            clearHistoryBtn: document.getElementById('clearHistoryBtn'),
            favoritesGrid: document.getElementById('favoritesGrid'),
            noFavorites: document.getElementById('noFavorites'),
            toast: document.getElementById('toast')
        };
    }

    // Setup event listeners
    function setupEventListeners() {
        // Action buttons
        elements.newQuoteBtn.addEventListener('click', getNewQuote);
        elements.favoriteBtn.addEventListener('click', toggleFavorite);
        elements.shareBtn.addEventListener('click', openShareModal);
        elements.copyBtn.addEventListener('click', copyQuote);
        
        // Controls
        elements.principleFilter.addEventListener('change', filterByPrinciple);
        elements.autoRotateToggle.addEventListener('change', toggleAutoRotation);
        elements.themeSelect.addEventListener('change', changeTheme);
        elements.fontSizeSlider.addEventListener('input', changeFontSize);
        
        // Share modal
        elements.closeShareModal.addEventListener('click', closeShareModal);
        elements.shareModal.addEventListener('click', (e) => {
            if (e.target === elements.shareModal) closeShareModal();
        });
        
        // Share buttons
        document.getElementById('shareTwitter').addEventListener('click', () => shareToSocial('twitter'));
        document.getElementById('shareLinkedIn').addEventListener('click', () => shareToSocial('linkedin'));
        document.getElementById('shareFacebook').addEventListener('click', () => shareToSocial('facebook'));
        document.getElementById('shareEmail').addEventListener('click', () => shareToSocial('email'));
        
        // Embed and history
        elements.copyEmbedBtn.addEventListener('click', copyEmbedCode);
        elements.clearHistoryBtn.addEventListener('click', clearHistory);
        
        // Keyboard shortcuts
        document.addEventListener('keydown', handleKeyPress);
    }

    // Get a new quote
    function getNewQuote() {
        const quotes = getFilteredQuotes();
        if (quotes.length === 0) return;
        
        // Get random quote (different from current)
        let newQuote;
        do {
            newQuote = quotes[Math.floor(Math.random() * quotes.length)];
        } while (quotes.length > 1 && newQuote === state.currentQuote);
        
        state.currentQuote = newQuote;
        displayQuote();
        addToHistory();
        updateStats('viewed');
    }

    // Get filtered quotes based on current principle filter
    function getFilteredQuotes() {
        if (state.currentPrincipleFilter === 'all') {
            // Return all quotes with principle info
            const allQuotes = [];
            Object.keys(quotesDatabase).forEach(key => {
                const principleNum = Object.keys(principleMap).find(num => principleMap[num].key === key);
                quotesDatabase[key].forEach(quote => {
                    allQuotes.push({
                        ...quote,
                        principle: parseInt(principleNum),
                        principleKey: key
                    });
                });
            });
            return allQuotes;
        } else {
            // Return quotes from specific principle
            const principleKey = principleMap[state.currentPrincipleFilter].key;
            return quotesDatabase[principleKey].map(quote => ({
                ...quote,
                principle: parseInt(state.currentPrincipleFilter),
                principleKey: principleKey
            }));
        }
    }

    // Display current quote
    function displayQuote() {
        if (!state.currentQuote) {
            getNewQuote();
            return;
        }

        const quote = state.currentQuote;
        const principleInfo = principleMap[quote.principle];
        
        // Update quote content
        elements.quoteText.textContent = quote.text;
        elements.quoteAuthor.textContent = `- ${quote.author}`;
        elements.quoteContext.textContent = quote.context;
        
        // Update principle indicator
        elements.principleIndicator.innerHTML = `
            <span class="principle-icon">${principleInfo.icon}</span>
            <span class="principle-text">Principle ${quote.principle}: ${principleInfo.title}</span>
        `;
        
        // Update favorite button
        updateFavoriteButton();
        
        // Animate quote card
        const quoteCard = document.getElementById('mainQuoteCard');
        quoteCard.style.animation = 'none';
        quoteCard.offsetHeight; // Trigger reflow
        quoteCard.style.animation = 'fadeIn 0.5s ease';
    }

    // Load initial quote
    function loadQuote() {
        // Load a random quote from Belief principle as default
        const beliefQuotes = quotesDatabase.belief.map(quote => ({
            ...quote,
            principle: 1,
            principleKey: 'belief'
        }));
        state.currentQuote = beliefQuotes[0];
        displayQuote();
    }

    // Toggle favorite
    function toggleFavorite() {
        if (!state.currentQuote) return;
        
        const quoteId = `${state.currentQuote.text}-${state.currentQuote.author}`;
        const existingIndex = state.favorites.findIndex(fav => 
            `${fav.text}-${fav.author}` === quoteId
        );
        
        if (existingIndex >= 0) {
            // Remove from favorites
            state.favorites.splice(existingIndex, 1);
            showToast('Removed from favorites', 'warning');
        } else {
            // Add to favorites
            state.favorites.push(state.currentQuote);
            showToast('Added to favorites!', 'success');
        }
        
        updateFavoriteButton();
        updateFavorites();
        saveState();
    }

    // Update favorite button appearance
    function updateFavoriteButton() {
        if (!state.currentQuote) return;
        
        const quoteId = `${state.currentQuote.text}-${state.currentQuote.author}`;
        const isFavorited = state.favorites.some(fav => 
            `${fav.text}-${fav.author}` === quoteId
        );
        
        const heartIcon = elements.favoriteBtn.querySelector('i');
        if (isFavorited) {
            heartIcon.className = 'fas fa-heart';
            elements.favoriteBtn.classList.add('favorited');
        } else {
            heartIcon.className = 'far fa-heart';
            elements.favoriteBtn.classList.remove('favorited');
        }
    }

    // Open share modal
    function openShareModal() {
        if (!state.currentQuote) return;
        
        const shareText = `"${state.currentQuote.text}" - ${state.currentQuote.author}\n\nFrom Maxwell's Principle ${state.currentQuote.principle}: ${principleMap[state.currentQuote.principle].title}\n\n#MaxwellQuotes #TalentIsNeverEnough`;
        
        elements.shareTextArea.value = shareText;
        elements.shareModal.classList.add('active');
    }

    // Close share modal
    function closeShareModal() {
        elements.shareModal.classList.remove('active');
    }

    // Share to social platforms
    function shareToSocial(platform) {
        if (!state.currentQuote) return;
        
        const text = elements.shareTextArea.value;
        const url = window.location.href;
        
        let shareUrl = '';
        
        switch (platform) {
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
                break;
            case 'linkedin':
                shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&summary=${encodeURIComponent(text)}`;
                break;
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`;
                break;
            case 'email':
                shareUrl = `mailto:?subject=${encodeURIComponent('Inspiring Quote from Maxwell')}&body=${encodeURIComponent(text + '\n\n' + url)}`;
                break;
        }
        
        if (shareUrl) {
            window.open(shareUrl, '_blank', 'width=600,height=400');
            updateStats('shared');
            closeShareModal();
            showToast('Quote shared!', 'success');
        }
    }

    // Copy quote to clipboard
    async function copyQuote() {
        if (!state.currentQuote) return;
        
        const copyText = `"${state.currentQuote.text}" - ${state.currentQuote.author}`;
        
        try {
            await navigator.clipboard.writeText(copyText);
            showToast('Quote copied to clipboard!', 'success');
        } catch (err) {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = copyText;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            showToast('Quote copied to clipboard!', 'success');
        }
    }

    // Filter quotes by principle
    function filterByPrinciple() {
        state.currentPrincipleFilter = elements.principleFilter.value;
        getNewQuote();
        saveState();
    }

    // Toggle auto-rotation
    function toggleAutoRotation() {
        state.autoRotate = elements.autoRotateToggle.checked;
        
        if (state.autoRotate) {
            startAutoRotation();
        } else {
            stopAutoRotation();
        }
        
        saveState();
    }

    // Start auto-rotation
    function startAutoRotation() {
        stopAutoRotation(); // Clear any existing interval
        state.rotationInterval = setInterval(getNewQuote, 30000); // 30 seconds
    }

    // Stop auto-rotation
    function stopAutoRotation() {
        if (state.rotationInterval) {
            clearInterval(state.rotationInterval);
            state.rotationInterval = null;
        }
    }

    // Change theme
    function changeTheme() {
        const theme = elements.themeSelect.value;
        document.body.setAttribute('data-theme', theme);
        state.currentTheme = theme;
        saveState();
    }

    // Change font size
    function changeFontSize() {
        const fontSize = elements.fontSizeSlider.value;
        elements.fontSizeValue.textContent = fontSize + 'px';
        document.documentElement.style.setProperty('--quote-font-size', fontSize + 'px');
        saveState();
    }

    // Handle keyboard shortcuts
    function handleKeyPress(e) {
        // Don't interfere with input fields
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        
        switch (e.key) {
            case ' ':
                e.preventDefault();
                getNewQuote();
                break;
            case 'f':
                e.preventDefault();
                toggleFavorite();
                break;
            case 'c':
                e.preventDefault();
                copyQuote();
                break;
            case 's':
                e.preventDefault();
                openShareModal();
                break;
        }
    }

    // Add quote to history
    function addToHistory() {
        if (!state.currentQuote) return;
        
        const historyItem = {
            ...state.currentQuote,
            timestamp: new Date().toISOString()
        };
        
        // Add to beginning and limit to 10 items
        state.history.unshift(historyItem);
        state.history = state.history.slice(0, 10);
        
        updateHistory();
        saveState();
    }

    // Update history display
    function updateHistory() {
        elements.historyList.innerHTML = '';
        
        state.history.forEach((item, index) => {
            const historyItem = document.createElement('div');
            historyItem.className = 'history-item';
            historyItem.innerHTML = `
                <div class="history-quote">"${item.text}"</div>
                <div class="history-meta">
                    <span>- ${item.author}</span>
                    <span>${new Date(item.timestamp).toLocaleDateString()}</span>
                </div>
            `;
            
            historyItem.addEventListener('click', () => {
                state.currentQuote = item;
                displayQuote();
                showToast('Quote loaded from history', 'info');
            });
            
            elements.historyList.appendChild(historyItem);
        });
    }

    // Clear history
    function clearHistory() {
        if (confirm('Are you sure you want to clear your quote history?')) {
            state.history = [];
            updateHistory();
            saveState();
            showToast('History cleared', 'info');
        }
    }

    // Update favorites display
    function updateFavorites() {
        elements.favoritesGrid.innerHTML = '';
        
        if (state.favorites.length === 0) {
            elements.noFavorites.style.display = 'block';
            return;
        }
        
        elements.noFavorites.style.display = 'none';
        
        state.favorites.forEach((favorite, index) => {
            const favoriteItem = document.createElement('div');
            favoriteItem.className = 'favorite-item';
            favoriteItem.innerHTML = `
                <div class="favorite-quote">"${favorite.text}"</div>
                <div class="favorite-author">- ${favorite.author}</div>
                <button class="remove-favorite" data-index="${index}" title="Remove from favorites">×</button>
            `;
            
            // Add click to load quote
            favoriteItem.addEventListener('click', (e) => {
                if (!e.target.classList.contains('remove-favorite')) {
                    state.currentQuote = favorite;
                    displayQuote();
                    showToast('Favorite quote loaded', 'success');
                }
            });
            
            // Add remove functionality
            const removeBtn = favoriteItem.querySelector('.remove-favorite');
            removeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                state.favorites.splice(index, 1);
                updateFavorites();
                updateFavoriteButton();
                saveState();
                showToast('Removed from favorites', 'warning');
            });
            
            elements.favoritesGrid.appendChild(favoriteItem);
        });
    }

    // Update statistics
    function updateStats(action = null) {
        if (action === 'viewed') {
            state.stats.viewed++;
        } else if (action === 'shared') {
            state.stats.shared++;
        }
        
        elements.totalViewed.textContent = state.stats.viewed;
        elements.favoriteCount.textContent = state.favorites.length;
        elements.shareCount.textContent = state.stats.shared;
        elements.streakDays.textContent = state.stats.streak;
        
        saveState();
    }

    // Update daily streak
    function updateDailyStreak() {
        const today = new Date().toDateString();
        const lastVisit = state.stats.lastVisit;
        
        if (lastVisit === today) {
            // Same day, no change
            return;
        }
        
        if (lastVisit) {
            const lastDate = new Date(lastVisit);
            const todayDate = new Date(today);
            const daysDiff = Math.floor((todayDate - lastDate) / (1000 * 60 * 60 * 24));
            
            if (daysDiff === 1) {
                // Consecutive day
                state.stats.streak++;
            } else if (daysDiff > 1) {
                // Streak broken
                state.stats.streak = 1;
            }
        } else {
            // First visit
            state.stats.streak = 1;
        }
        
        state.stats.lastVisit = today;
        saveState();
    }

    // Generate embed code
    function generateEmbedCode() {
        const embedCode = `<!-- Maxwell Quote Widget -->
<div id="maxwell-quote-widget" style="font-family: Arial, sans-serif; max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background: #f9f9f9;">
    <div style="text-align: center; margin-bottom: 15px;">
        <strong style="color: #3498db;">💎 Maxwell Quote Widget</strong>
    </div>
    <blockquote style="font-style: italic; margin: 0; font-size: 18px; line-height: 1.4; text-align: center;">
        "${state.currentQuote ? state.currentQuote.text : 'Loading inspirational quote...'}"
    </blockquote>
    <div style="text-align: center; margin-top: 10px; font-weight: bold; color: #2c3e50;">
        - ${state.currentQuote ? state.currentQuote.author : 'John C. Maxwell'}
    </div>
    <div style="text-align: center; margin-top: 15px;">
        <a href="${window.location.href}" target="_blank" style="color: #3498db; text-decoration: none; font-size: 14px;">View More Quotes →</a>
    </div>
</div>`;
        
        elements.embedCode.textContent = embedCode;
    }

    // Copy embed code
    async function copyEmbedCode() {
        try {
            await navigator.clipboard.writeText(elements.embedCode.textContent);
            showToast('Embed code copied!', 'success');
        } catch (err) {
            // Fallback
            elements.embedCode.select();
            document.execCommand('copy');
            showToast('Embed code copied!', 'success');
        }
    }

    // Show toast notification
    function showToast(message, type = 'info') {
        const toast = elements.toast;
        const icon = toast.querySelector('.toast-icon');
        const messageEl = toast.querySelector('.toast-message');
        
        // Set icon based on type
        const icons = {
            success: 'fas fa-check',
            warning: 'fas fa-exclamation-triangle',
            error: 'fas fa-times',
            info: 'fas fa-info-circle'
        };
        
        icon.className = `toast-icon ${icons[type] || icons.info}`;
        messageEl.textContent = message;
        
        // Show toast
        toast.classList.add('show');
        
        // Hide after 3 seconds
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

    // Save state to localStorage
    function saveState() {
        localStorage.setItem('maxwell-quote-favorites', JSON.stringify(state.favorites));
        localStorage.setItem('maxwell-quote-history', JSON.stringify(state.history));
        localStorage.setItem('maxwell-quote-stats', JSON.stringify(state.stats));
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();