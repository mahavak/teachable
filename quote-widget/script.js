// Maxwell Quote Widget - Comprehensive JavaScript Implementation
// Based on "Talent Is Never Enough" principles by John C. Maxwell

(function() {
    'use strict';

    // Extensive Quote Database
    const quotesDatabase = {
        belief: [
            { text: "Belief lifts your talent to a whole new level.", author: "John C. Maxwell" },
            { text: "The first person you have to inspire every day is yourself.", author: "John C. Maxwell" },
            { text: "When you believe you can—you can!", author: "John C. Maxwell" },
            { text: "Your attitude determines your altitude.", author: "Zig Ziglar" },
            { text: "Whether you think you can or think you can't, you're right.", author: "Henry Ford" },
            { text: "Believe in yourself! Have faith in your abilities!", author: "Norman Vincent Peale" },
            { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
            { text: "Belief creates the actual fact.", author: "William James" },
            { text: "Champions aren't made in gyms. Champions are made from something they have deep inside them - a desire, a dream, a vision.", author: "Muhammad Ali" },
            { text: "You have to believe in yourself when no one else does.", author: "Serena Williams" },
            { text: "Self-confidence is the first requisite to great undertakings.", author: "Samuel Johnson" },
            { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
            { text: "The moment you doubt whether you can fly, you cease forever to be able to do it.", author: "J.M. Barrie" },
            { text: "Trust yourself. You know more than you think you do.", author: "Benjamin Spock" },
            { text: "To be a great champion you must believe you are the best.", author: "Muhammad Ali" }
        ],
        initiative: [
            { text: "Initiative activates your talent.", author: "John C. Maxwell" },
            { text: "You don't have to be great to start, but you have to start to be great.", author: "Zig Ziglar" },
            { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
            { text: "Initiative is doing the right thing without being told.", author: "Victor Hugo" },
            { text: "Success seems to be connected with action. Successful people keep moving.", author: "Conrad Hilton" },
            { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
            { text: "Don't wait for opportunity. Create it.", author: "George Bernard Shaw" },
            { text: "Initiative is the ability to work without anyone telling you what to do.", author: "Elbert Hubbard" },
            { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
            { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
            { text: "Action is the foundational key to all success.", author: "Pablo Picasso" },
            { text: "Ideas without action are worthless.", author: "Helen Keller" },
            { text: "Initiative is to success what a lighted match is to a candle.", author: "Orlando A. Battista" },
            { text: "The distance between your dreams and reality is called action.", author: "Unknown" },
            { text: "Stop waiting for things to happen. Go out and make them happen.", author: "Unknown" }
        ],
        passion: [
            { text: "Passion energizes your talent.", author: "John C. Maxwell" },
            { text: "Nothing great in the world has been accomplished without passion.", author: "Georg Wilhelm Friedrich Hegel" },
            { text: "Passion is energy. Feel the power that comes from focusing on what excites you.", author: "Oprah Winfrey" },
            { text: "If you feel like there's something out there that you're supposed to be doing, if you have a passion for it, then stop wishing and just do it.", author: "Wanda Sykes" },
            { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
            { text: "Passion is the genesis of genius.", author: "Tony Robbins" },
            { text: "Follow your passion, and success will follow you.", author: "Terri Guillemets" },
            { text: "When you are enthusiastic about what you do, you feel this positive energy.", author: "Paulo Coelho" },
            { text: "Passion is oxygen of the soul.", author: "Bill Butler" },
            { text: "Without passion, you don't have energy; without energy, you have nothing.", author: "Warren Buffett" },
            { text: "Passion will move men beyond themselves, beyond their shortcomings, beyond their failures.", author: "Joseph Campbell" },
            { text: "Light yourself on fire with passion and people will come from miles to watch you burn.", author: "John Wesley" },
            { text: "If you can't figure out your purpose, figure out your passion.", author: "Bishop T.D. Jakes" },
            { text: "Chase your passion, not your pension.", author: "Denis Waitley" },
            { text: "Passion is the difference between having a job and having a career.", author: "Unknown" }
        ],
        focus: [
            { text: "Focus directs your talent.", author: "John C. Maxwell" },
            { text: "The successful warrior is the average man with laser-like focus.", author: "Bruce Lee" },
            { text: "Concentrate all your thoughts upon the work at hand.", author: "Alexander Graham Bell" },
            { text: "Where focus goes, energy flows and results show.", author: "T. Harv Eker" },
            { text: "The key to success is to focus on goals, not obstacles.", author: "Unknown" },
            { text: "Focus on being productive instead of busy.", author: "Tim Ferriss" },
            { text: "Starve your distractions, feed your focus.", author: "Unknown" },
            { text: "You can't depend on your eyes when your imagination is out of focus.", author: "Mark Twain" },
            { text: "The main thing is to keep the main thing the main thing.", author: "Stephen Covey" },
            { text: "Most people have no idea of the giant capacity we can immediately command when we focus all of our resources on mastering a single area of our lives.", author: "Tony Robbins" },
            { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
            { text: "Always remember, your focus determines your reality.", author: "George Lucas" },
            { text: "Focus is a matter of deciding what things you're not going to do.", author: "John Carmack" },
            { text: "My success, part of it certainly, is that I have focused in on a few things.", author: "Bill Gates" },
            { text: "If you want to be truly successful invest in yourself to get the knowledge you need to find your unique factor.", author: "Sydney Madwed" }
        ],
        preparation: [
            { text: "Preparation positions your talent.", author: "John C. Maxwell" },
            { text: "By failing to prepare, you are preparing to fail.", author: "Benjamin Franklin" },
            { text: "Before anything else, preparation is the key to success.", author: "Alexander Graham Bell" },
            { text: "Give me six hours to chop down a tree and I will spend the first four sharpening the axe.", author: "Abraham Lincoln" },
            { text: "The will to win is important, but the will to prepare is vital.", author: "Joe Paterno" },
            { text: "Success depends upon previous preparation, and without such preparation there is sure to be failure.", author: "Confucius" },
            { text: "Champions do not become champions when they win the event, but in the hours, weeks, months and years they spend preparing for it.", author: "Michael Jordan" },
            { text: "Spectacular achievement is always preceded by unspectacular preparation.", author: "Robert H. Schuller" },
            { text: "I will prepare and some day my chance will come.", author: "Abraham Lincoln" },
            { text: "The best preparation for tomorrow is doing your best today.", author: "H. Jackson Brown Jr." },
            { text: "Luck is what happens when preparation meets opportunity.", author: "Seneca" },
            { text: "Preparation is the key to success.", author: "Alexander Graham Bell" },
            { text: "Proper preparation prevents poor performance.", author: "Stephen Keague" },
            { text: "Today's preparation determines tomorrow's achievement.", author: "Unknown" },
            { text: "The more you sweat in practice, the less you bleed in battle.", author: "Navy SEALs" }
        ],
        practice: [
            { text: "Practice sharpens your talent.", author: "John C. Maxwell" },
            { text: "Practice isn't the thing you do once you're good. It's the thing you do that makes you good.", author: "Malcolm Gladwell" },
            { text: "Excellence is not a singular act but a habit. You are what you repeatedly do.", author: "Aristotle" },
            { text: "The expert in anything was once a beginner.", author: "Helen Hayes" },
            { text: "Practice makes perfect. After a long time of practicing, our work will become natural, skillful, swift, and steady.", author: "Bruce Lee" },
            { text: "Knowledge is of no value unless you put it into practice.", author: "Anton Chekhov" },
            { text: "An ounce of practice is worth more than tons of preaching.", author: "Mahatma Gandhi" },
            { text: "Champions keep playing until they get it right.", author: "Billie Jean King" },
            { text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Will Durant" },
            { text: "The more you practice, the luckier you get.", author: "Gary Player" },
            { text: "Practice is the best of all instructors.", author: "Publilius Syrus" },
            { text: "Repetition is the mother of learning, the father of action, which makes it the architect of accomplishment.", author: "Zig Ziglar" },
            { text: "Success is nothing more than a few simple disciplines, practiced every day.", author: "Jim Rohn" },
            { text: "Practice puts brains in your muscles.", author: "Sam Snead" },
            { text: "Every master was once a disaster.", author: "T. Harv Eker" }
        ],
        perseverance: [
            { text: "Perseverance sustains your talent.", author: "John C. Maxwell" },
            { text: "It's not that I'm so smart, it's just that I stay with problems longer.", author: "Albert Einstein" },
            { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
            { text: "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack of will.", author: "Vince Lombardi" },
            { text: "Many of life's failures are people who did not realize how close they were to success when they gave up.", author: "Thomas Edison" },
            { text: "Fall seven times, stand up eight.", author: "Japanese Proverb" },
            { text: "Champions keep going when they don't have anything left in their tank.", author: "Unknown" },
            { text: "Perseverance is failing 19 times and succeeding the 20th.", author: "Julie Andrews" },
            { text: "The man who moves a mountain begins by carrying away small stones.", author: "Confucius" },
            { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
            { text: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.", author: "Thomas Edison" },
            { text: "Through perseverance many people win success out of what seemed destined to be certain failure.", author: "Benjamin Disraeli" },
            { text: "Perseverance is not a long race; it is many short races one after the other.", author: "Walter Elliot" },
            { text: "The difference between the impossible and the possible lies in a person's determination.", author: "Tommy Lasorda" },
            { text: "Winners never quit and quitters never win.", author: "Vince Lombardi" }
        ],
        courage: [
            { text: "Courage tests your talent.", author: "John C. Maxwell" },
            { text: "Courage is not the absence of fear, but the triumph over it.", author: "Nelson Mandela" },
            { text: "All our dreams can come true if we have the courage to pursue them.", author: "Walt Disney" },
            { text: "It takes courage to grow up and become who you really are.", author: "E.E. Cummings" },
            { text: "Courage is resistance to fear, mastery of fear - not absence of fear.", author: "Mark Twain" },
            { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
            { text: "Have the courage to follow your heart and intuition.", author: "Steve Jobs" },
            { text: "Courage doesn't always roar. Sometimes courage is the quiet voice at the end of the day saying, 'I will try again tomorrow.'", author: "Mary Anne Radmacher" },
            { text: "You cannot swim for new horizons until you have courage to lose sight of the shore.", author: "William Faulkner" },
            { text: "The secret to happiness is freedom... And the secret to freedom is courage.", author: "Thucydides" },
            { text: "Courage is the most important of all the virtues because without courage, you can't practice any other virtue consistently.", author: "Maya Angelou" },
            { text: "Life shrinks or expands in proportion to one's courage.", author: "Anais Nin" },
            { text: "Courage is being scared to death... and saddling up anyway.", author: "John Wayne" },
            { text: "He who is not courageous enough to take risks will accomplish nothing in life.", author: "Muhammad Ali" },
            { text: "Courage is the first of human qualities because it is the quality which guarantees all others.", author: "Winston Churchill" }
        ],
        teachability: [
            { text: "Teachability expands your talent.", author: "John C. Maxwell" },
            { text: "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice.", author: "Brian Herbert" },
            { text: "Anyone who stops learning is old, whether at twenty or eighty.", author: "Henry Ford" },
            { text: "The more that you read, the more things you will know. The more that you learn, the more places you'll go.", author: "Dr. Seuss" },
            { text: "Education is not the filling of a pail, but the lighting of a fire.", author: "William Butler Yeats" },
            { text: "The beautiful thing about learning is that nobody can take it away from you.", author: "B.B. King" },
            { text: "Live as if you were to die tomorrow. Learn as if you were to live forever.", author: "Mahatma Gandhi" },
            { text: "The expert in anything was once a beginner.", author: "Helen Hayes" },
            { text: "A wise man can learn more from a foolish question than a fool can learn from a wise answer.", author: "Bruce Lee" },
            { text: "The only person who is educated is the one who has learned how to learn and change.", author: "Carl Rogers" },
            { text: "I am always doing that which I cannot do, in order that I may learn how to do it.", author: "Pablo Picasso" },
            { text: "Learning never exhausts the mind.", author: "Leonardo da Vinci" },
            { text: "The more I learn, the more I realize how much I don't know.", author: "Albert Einstein" },
            { text: "Tell me and I forget. Teach me and I remember. Involve me and I learn.", author: "Benjamin Franklin" },
            { text: "It's what you learn after you know it all that counts.", author: "John Wooden" }
        ],
        character: [
            { text: "Character protects your talent.", author: "John C. Maxwell" },
            { text: "Character is power.", author: "Booker T. Washington" },
            { text: "Be more concerned with your character than your reputation.", author: "John Wooden" },
            { text: "The true test of a man's character is what he does when no one is watching.", author: "John Wooden" },
            { text: "Character is doing the right thing when nobody's looking.", author: "J.C. Watts" },
            { text: "Ability may get you to the top, but it takes character to keep you there.", author: "Zig Ziglar" },
            { text: "Character cannot be developed in ease and quiet.", author: "Helen Keller" },
            { text: "The best index to a person's character is how he treats people who can't do him any good.", author: "Abigail Van Buren" },
            { text: "Weakness of attitude becomes weakness of character.", author: "Albert Einstein" },
            { text: "Character is simply habit long continued.", author: "Plutarch" },
            { text: "Nearly all men can stand adversity, but if you want to test a man's character, give him power.", author: "Abraham Lincoln" },
            { text: "Character is the real foundation of all worthwhile success.", author: "John Hays Hammond" },
            { text: "Good character is not formed in a week or a month. It is created little by little.", author: "Heraclitus" },
            { text: "Our character is what we do when we think no one is looking.", author: "H. Jackson Brown Jr." },
            { text: "Character is destiny.", author: "Heraclitus" }
        ],
        relationships: [
            { text: "Relationships influence your talent.", author: "John C. Maxwell" },
            { text: "You are the average of the five people you spend the most time with.", author: "Jim Rohn" },
            { text: "Surround yourself with only people who are going to lift you higher.", author: "Oprah Winfrey" },
            { text: "The quality of your life is the quality of your relationships.", author: "Tony Robbins" },
            { text: "If you want to go fast, go alone. If you want to go far, go together.", author: "African Proverb" },
            { text: "No one can whistle a symphony. It takes a whole orchestra to play it.", author: "H.E. Luccock" },
            { text: "The meeting of two personalities is like the contact of two chemical substances: if there is any reaction, both are transformed.", author: "Carl Jung" },
            { text: "Alone we can do so little; together we can do so much.", author: "Helen Keller" },
            { text: "Great things in business are never done by one person; they're done by a team of people.", author: "Steve Jobs" },
            { text: "The strength of the team is each individual member. The strength of each member is the team.", author: "Phil Jackson" },
            { text: "We rise by lifting others.", author: "Robert Ingersoll" },
            { text: "Teamwork makes the dream work.", author: "John C. Maxwell" },
            { text: "Coming together is a beginning, staying together is progress, and working together is success.", author: "Henry Ford" },
            { text: "None of us is as smart as all of us.", author: "Ken Blanchard" },
            { text: "It is literally true that you can succeed best and quickest by helping others to succeed.", author: "Napoleon Hill" }
        ],
        responsibility: [
            { text: "Responsibility strengthens your talent.", author: "John C. Maxwell" },
            { text: "The price of greatness is responsibility.", author: "Winston Churchill" },
            { text: "With great power comes great responsibility.", author: "Voltaire" },
            { text: "You must take personal responsibility. You cannot change the circumstances, the seasons, or the wind, but you can change yourself.", author: "Jim Rohn" },
            { text: "In the long run, we shape our lives, and we shape ourselves.", author: "Eleanor Roosevelt" },
            { text: "The moment you take responsibility for everything in your life is the moment you can change anything in your life.", author: "Hal Elrod" },
            { text: "Liberty means responsibility. That is why most men dread it.", author: "George Bernard Shaw" },
            { text: "Success on any major scale requires you to accept responsibility.", author: "Michael Korda" },
            { text: "You are not only responsible for what you say, but also for what you do not say.", author: "Martin Luther" },
            { text: "Responsibility is the price of freedom.", author: "Elbert Hubbard" },
            { text: "Hold yourself responsible for a higher standard than anybody expects of you.", author: "Henry Ward Beecher" },
            { text: "The willingness to accept responsibility for one's own life is the source from which self-respect springs.", author: "Joan Didion" },
            { text: "When you blame others, you give up your power to change.", author: "Robert Anthony" },
            { text: "Peak performance begins with your taking complete responsibility for your life and everything that happens to you.", author: "Brian Tracy" },
            { text: "Accountability breeds response-ability.", author: "Stephen Covey" }
        ],
        teamwork: [
            { text: "Teamwork multiplies your talent.", author: "John C. Maxwell" },
            { text: "Talent wins games, but teamwork and intelligence win championships.", author: "Michael Jordan" },
            { text: "None of us is as smart as all of us.", author: "Ken Blanchard" },
            { text: "Individually, we are one drop. Together, we are an ocean.", author: "Ryunosuke Satoro" },
            { text: "The nice thing about teamwork is that you always have others on your side.", author: "Margaret Carty" },
            { text: "Many hands make light work.", author: "John Heywood" },
            { text: "If everyone is moving forward together, then success takes care of itself.", author: "Henry Ford" },
            { text: "A team is not a group of people who work together. It is a group of people who trust each other.", author: "Simon Sinek" },
            { text: "It takes two flints to make a fire.", author: "Louisa May Alcott" },
            { text: "Unity is strength... when there is teamwork and collaboration, wonderful things can be achieved.", author: "Mattie Stepanek" },
            { text: "The best teamwork comes from men who are working independently toward one goal in unison.", author: "James Cash Penney" },
            { text: "No individual can win a game by himself.", author: "Pele" },
            { text: "Find a group of people who challenge and inspire you, spend a lot of time with them, and it will change your life.", author: "Amy Poehler" },
            { text: "Great teams do not hold back with one another.", author: "Patrick Lencioni" },
            { text: "Teamwork is the fuel that allows common people to attain uncommon results.", author: "Andrew Carnegie" }
        ]
    };

    // Widget State
    let state = {
        currentQuoteIndex: 0,
        autoRotate: false,
        currentPrinciple: 'all',
        currentTheme: 'default',
        fontSize: 'medium',
        favorites: [],
        history: [],
        viewCount: 0,
        shareCount: 0,
        dailyStreak: 0,
        lastVisit: null,
        rotationInterval: null
    };

    // DOM Elements
    let elements = {};

    // Initialize the widget
    function init() {
        loadState();
        cacheElements();
        buildQuotesList();
        setupEventListeners();
        applyTheme(state.currentTheme);
        applyFontSize(state.fontSize);
        displayQuote();
        updateStats();
        checkDailyStreak();
    }

    // Cache DOM elements
    function cacheElements() {
        elements = {
            quoteText: document.getElementById('quote-text'),
            quoteAuthor: document.getElementById('quote-author'),
            quotePrinciple: document.getElementById('quote-principle'),
            prevBtn: document.getElementById('prev-quote'),
            nextBtn: document.getElementById('next-quote'),
            randomBtn: document.getElementById('random-quote'),
            favoriteBtn: document.getElementById('favorite-quote'),
            shareBtn: document.getElementById('share-quote'),
            copyBtn: document.getElementById('copy-quote'),
            autoRotateToggle: document.getElementById('auto-rotate'),
            principleFilter: document.getElementById('principle-filter'),
            themeSelector: document.getElementById('theme-selector'),
            fontSizeSelector: document.getElementById('font-size'),
            viewCountSpan: document.getElementById('view-count'),
            favoriteCountSpan: document.getElementById('favorite-count'),
            shareCountSpan: document.getElementById('share-count'),
            streakCountSpan: document.getElementById('streak-count'),
            embedBtn: document.getElementById('embed-code'),
            embedModal: document.getElementById('embed-modal'),
            embedCodeArea: document.getElementById('embed-code-area'),
            copyEmbedBtn: document.getElementById('copy-embed'),
            closeEmbedBtn: document.getElementById('close-embed'),
            shareDropdown: document.getElementById('share-dropdown')
        };
    }

    // Build quotes list based on current filter
    function buildQuotesList() {
        state.quotesList = [];
        
        if (state.currentPrinciple === 'all') {
            // Include all quotes
            Object.keys(quotesDatabase).forEach(principle => {
                quotesDatabase[principle].forEach(quote => {
                    state.quotesList.push({
                        ...quote,
                        principle: principle
                    });
                });
            });
        } else if (state.currentPrinciple === 'favorites') {
            // Show only favorites
            state.quotesList = state.favorites;
        } else {
            // Show quotes from specific principle
            state.quotesList = quotesDatabase[state.currentPrinciple].map(quote => ({
                ...quote,
                principle: state.currentPrinciple
            }));
        }
        
        // Reset index if out of bounds
        if (state.currentQuoteIndex >= state.quotesList.length) {
            state.currentQuoteIndex = 0;
        }
    }

    // Setup event listeners
    function setupEventListeners() {
        // Navigation
        elements.prevBtn.addEventListener('click', () => navigateQuote('prev'));
        elements.nextBtn.addEventListener('click', () => navigateQuote('next'));
        elements.randomBtn.addEventListener('click', () => navigateQuote('random'));
        
        // Actions
        elements.favoriteBtn.addEventListener('click', toggleFavorite);
        elements.shareBtn.addEventListener('click', toggleShareDropdown);
        elements.copyBtn.addEventListener('click', copyQuote);
        
        // Settings
        elements.autoRotateToggle.addEventListener('change', toggleAutoRotate);
        elements.principleFilter.addEventListener('change', filterByPrinciple);
        elements.themeSelector.addEventListener('change', changeTheme);
        elements.fontSizeSelector.addEventListener('change', changeFontSize);
        
        // Embed
        elements.embedBtn.addEventListener('click', showEmbedModal);
        elements.copyEmbedBtn.addEventListener('click', copyEmbedCode);
        elements.closeEmbedBtn.addEventListener('click', hideEmbedModal);
        
        // Share options
        document.getElementById('share-twitter').addEventListener('click', () => shareQuote('twitter'));
        document.getElementById('share-linkedin').addEventListener('click', () => shareQuote('linkedin'));
        document.getElementById('share-facebook').addEventListener('click', () => shareQuote('facebook'));
        document.getElementById('share-email').addEventListener('click', () => shareQuote('email'));
        
        // Close share dropdown on outside click
        document.addEventListener('click', (e) => {
            if (!elements.shareBtn.contains(e.target) && !elements.shareDropdown.contains(e.target)) {
                elements.shareDropdown.classList.remove('active');
            }
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', handleKeyPress);
    }

    // Handle keyboard navigation
    function handleKeyPress(e) {
        switch(e.key) {
            case 'ArrowLeft':
                navigateQuote('prev');
                break;
            case 'ArrowRight':
                navigateQuote('next');
                break;
            case ' ':
                e.preventDefault();
                navigateQuote('random');
                break;
            case 'f':
                if (!e.ctrlKey && !e.metaKey) {
                    toggleFavorite();
                }
                break;
            case 'c':
                if (!e.ctrlKey && !e.metaKey) {
                    copyQuote();
                }
                break;
        }
    }

    // Navigate quotes
    function navigateQuote(direction) {
        if (state.quotesList.length === 0) return;
        
        switch(direction) {
            case 'prev':
                state.currentQuoteIndex = (state.currentQuoteIndex - 1 + state.quotesList.length) % state.quotesList.length;
                break;
            case 'next':
                state.currentQuoteIndex = (state.currentQuoteIndex + 1) % state.quotesList.length;
                break;
            case 'random':
                let newIndex;
                do {
                    newIndex = Math.floor(Math.random() * state.quotesList.length);
                } while (newIndex === state.currentQuoteIndex && state.quotesList.length > 1);
                state.currentQuoteIndex = newIndex;
                break;
        }
        
        displayQuote();
    }

    // Display current quote
    function displayQuote() {
        if (state.quotesList.length === 0) {
            elements.quoteText.textContent = "No quotes available for the selected filter.";
            elements.quoteAuthor.textContent = "";
            elements.quotePrinciple.textContent = "";
            return;
        }
        
        const quote = state.quotesList[state.currentQuoteIndex];
        
        // Fade out
        elements.quoteText.style.opacity = '0';
        elements.quoteAuthor.style.opacity = '0';
        elements.quotePrinciple.style.opacity = '0';
        
        setTimeout(() => {
            // Update content
            elements.quoteText.textContent = `"${quote.text}"`;
            elements.quoteAuthor.textContent = `— ${quote.author}`;
            elements.quotePrinciple.textContent = formatPrinciple(quote.principle);
            
            // Update favorite button
            updateFavoriteButton(quote);
            
            // Fade in
            elements.quoteText.style.opacity = '1';
            elements.quoteAuthor.style.opacity = '1';
            elements.quotePrinciple.style.opacity = '1';
            
            // Update history and stats
            addToHistory(quote);
            state.viewCount++;
            updateStats();
            saveState();
        }, 300);
    }

    // Toggle favorite
    function toggleFavorite() {
        const quote = state.quotesList[state.currentQuoteIndex];
        const favoriteIndex = state.favorites.findIndex(fav => 
            fav.text === quote.text && fav.author === quote.author
        );
        
        if (favoriteIndex === -1) {
            state.favorites.push(quote);
            elements.favoriteBtn.classList.add('active');
            showNotification('Added to favorites! ⭐');
        } else {
            state.favorites.splice(favoriteIndex, 1);
            elements.favoriteBtn.classList.remove('active');
            showNotification('Removed from favorites');
        }
        
        updateStats();
        saveState();
    }

    // Update favorite button state
    function updateFavoriteButton(quote) {
        const isFavorite = state.favorites.some(fav => 
            fav.text === quote.text && fav.author === quote.author
        );
        
        if (isFavorite) {
            elements.favoriteBtn.classList.add('active');
        } else {
            elements.favoriteBtn.classList.remove('active');
        }
    }

    // Toggle share dropdown
    function toggleShareDropdown() {
        elements.shareDropdown.classList.toggle('active');
    }

    // Share quote
    function shareQuote(platform) {
        const quote = state.quotesList[state.currentQuoteIndex];
        const text = `"${quote.text}" — ${quote.author}`;
        const url = window.location.href;
        
        let shareUrl;
        
        switch(platform) {
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
                shareUrl = `mailto:?subject=Inspiring Quote&body=${encodeURIComponent(text + '\n\n' + url)}`;
                break;
        }
        
        window.open(shareUrl, '_blank');
        
        state.shareCount++;
        updateStats();
        saveState();
        
        elements.shareDropdown.classList.remove('active');
        showNotification('Quote shared! 🎉');
    }

    // Copy quote
    function copyQuote() {
        const quote = state.quotesList[state.currentQuoteIndex];
        const text = `"${quote.text}" — ${quote.author}`;
        
        navigator.clipboard.writeText(text).then(() => {
            showNotification('Quote copied to clipboard! 📋');
        }).catch(err => {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            showNotification('Quote copied to clipboard! 📋');
        });
    }

    // Toggle auto-rotate
    function toggleAutoRotate() {
        state.autoRotate = elements.autoRotateToggle.checked;
        
        if (state.autoRotate) {
            startAutoRotate();
        } else {
            stopAutoRotate();
        }
        
        saveState();
    }

    // Start auto-rotation
    function startAutoRotate() {
        stopAutoRotate(); // Clear any existing interval
        state.rotationInterval = setInterval(() => {
            navigateQuote('next');
        }, 30000); // 30 seconds
    }

    // Stop auto-rotation
    function stopAutoRotate() {
        if (state.rotationInterval) {
            clearInterval(state.rotationInterval);
            state.rotationInterval = null;
        }
    }

    // Filter by principle
    function filterByPrinciple() {
        state.currentPrinciple = elements.principleFilter.value;
        state.currentQuoteIndex = 0;
        buildQuotesList();
        displayQuote();
        saveState();
    }

    // Change theme
    function changeTheme() {
        state.currentTheme = elements.themeSelector.value;
        applyTheme(state.currentTheme);
        saveState();
    }

    // Apply theme
    function applyTheme(theme) {
        document.body.className = `theme-${theme}`;
    }

    // Change font size
    function changeFontSize() {
        state.fontSize = elements.fontSizeSelector.value;
        applyFontSize(state.fontSize);
        saveState();
    }

    // Apply font size
    function applyFontSize(size) {
        const sizes = {
            small: '0.9em',
            medium: '1em',
            large: '1.2em',
            'x-large': '1.4em'
        };
        
        document.documentElement.style.setProperty('--font-size-multiplier', sizes[size]);
    }

    // Add to history
    function addToHistory(quote) {
        // Remove if already in history
        state.history = state.history.filter(item => 
            !(item.text === quote.text && item.author === quote.author)
        );
        
        // Add to beginning
        state.history.unshift({
            ...quote,
            viewedAt: new Date().toISOString()
        });
        
        // Keep only last 50
        if (state.history.length > 50) {
            state.history = state.history.slice(0, 50);
        }
    }

    // Check daily streak
    function checkDailyStreak() {
        const today = new Date().toDateString();
        const lastVisit = state.lastVisit ? new Date(state.lastVisit).toDateString() : null;
        
        if (lastVisit === today) {
            // Already visited today
            return;
        }
        
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toDateString();
        
        if (lastVisit === yesterdayStr) {
            // Visited yesterday, continue streak
            state.dailyStreak++;
        } else if (!lastVisit || lastVisit !== today) {
            // First visit or streak broken
            state.dailyStreak = 1;
        }
        
        state.lastVisit = new Date().toISOString();
        saveState();
    }

    // Update statistics display
    function updateStats() {
        elements.viewCountSpan.textContent = state.viewCount.toLocaleString();
        elements.favoriteCountSpan.textContent = state.favorites.length.toLocaleString();
        elements.shareCountSpan.textContent = state.shareCount.toLocaleString();
        elements.streakCountSpan.textContent = state.dailyStreak.toLocaleString();
    }

    // Show embed modal
    function showEmbedModal() {
        const embedCode = generateEmbedCode();
        elements.embedCodeArea.value = embedCode;
        elements.embedModal.classList.add('active');
    }

    // Hide embed modal
    function hideEmbedModal() {
        elements.embedModal.classList.remove('active');
    }

    // Generate embed code
    function generateEmbedCode() {
        const baseUrl = window.location.origin + window.location.pathname;
        return `<!-- Maxwell Quote Widget -->
<iframe 
    src="${baseUrl}" 
    width="100%" 
    height="400" 
    frameborder="0" 
    style="border: 1px solid #ddd; border-radius: 8px;">
</iframe>
<!-- End Maxwell Quote Widget -->`;
    }

    // Copy embed code
    function copyEmbedCode() {
        elements.embedCodeArea.select();
        document.execCommand('copy');
        showNotification('Embed code copied! 🚀');
    }

    // Show notification
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // Format principle name
    function formatPrinciple(principle) {
        return principle.charAt(0).toUpperCase() + principle.slice(1);
    }

    // Save state to localStorage
    function saveState() {
        const stateToSave = {
            currentQuoteIndex: state.currentQuoteIndex,
            autoRotate: state.autoRotate,
            currentPrinciple: state.currentPrinciple,
            currentTheme: state.currentTheme,
            fontSize: state.fontSize,
            favorites: state.favorites,
            history: state.history.slice(0, 20), // Save only recent 20
            viewCount: state.viewCount,
            shareCount: state.shareCount,
            dailyStreak: state.dailyStreak,
            lastVisit: state.lastVisit
        };
        
        try {
            localStorage.setItem('maxwellQuoteWidget', JSON.stringify(stateToSave));
        } catch (e) {
            console.warn('Failed to save state:', e);
        }
    }

    // Load state from localStorage
    function loadState() {
        try {
            const savedState = localStorage.getItem('maxwellQuoteWidget');
            if (savedState) {
                const parsed = JSON.parse(savedState);
                Object.assign(state, parsed);
                
                // Restore UI state
                if (elements.autoRotateToggle) {
                    elements.autoRotateToggle.checked = state.autoRotate;
                }
                if (elements.principleFilter) {
                    elements.principleFilter.value = state.currentPrinciple;
                }
                if (elements.themeSelector) {
                    elements.themeSelector.value = state.currentTheme;
                }
                if (elements.fontSizeSelector) {
                    elements.fontSizeSelector.value = state.fontSize;
                }
            }
        } catch (e) {
            console.warn('Failed to load state:', e);
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Cleanup on page unload
    window.addEventListener('beforeunload', () => {
        stopAutoRotate();
        saveState();
    });

})();