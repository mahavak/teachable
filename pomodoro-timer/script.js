// Maxwell's 13 Principles Data
const principles = [
    {
        number: 1,
        title: "Belief Lifts Your Talent",
        description: "The foundation of achievement starts with believing in yourself and your abilities. As Henry Ford said: \"Whether you think you can or think you can't, you're right.\"",
        quote: "The difference between what we do and what we are capable of doing would suffice to solve most of the world's problems. - Gandhi"
    },
    {
        number: 2,
        title: "Passion Energizes Your Talent",
        description: "Passionate people have the energy and grit to go the extra mile. Passion gives you the extra energy when the going gets tough.",
        quote: "Nothing great in the world has been accomplished without passion. - Georg Wilhelm Friedrich Hegel"
    },
    {
        number: 3,
        title: "Initiative Activates Your Talent",
        description: "Nothing happens without taking the first step. You can have all the talent in the world, but without initiative, it remains dormant.",
        quote: "The way to get started is to quit talking and begin doing. - Walt Disney"
    },
    {
        number: 4,
        title: "Focus Directs Your Talent",
        description: "Concentration on specific goals channels your abilities in the right direction. Focus gives talent direction and purpose.",
        quote: "The successful warrior is the average man with laser-like focus. - Bruce Lee"
    },
    {
        number: 5,
        title: "Preparation Positions Your Talent",
        description: "Proper preparation sets you up for success when opportunities arise. Preparation positions your talent for maximum impact.",
        quote: "By failing to prepare, you are preparing to fail. - Benjamin Franklin"
    },
    {
        number: 6,
        title: "Practice Sharpens Your Talent",
        description: "Deliberate practice continuously improves and refines your abilities. Even the most talented individuals need practice to reach their potential.",
        quote: "Practice does not make perfect. Only perfect practice makes perfect. - Vince Lombardi"
    },
    {
        number: 7,
        title: "Perseverance Sustains Your Talent",
        description: "Persistence through obstacles keeps you moving toward your goals. Perseverance sustains your talent through difficult times.",
        quote: "It's not that I'm so smart, it's just that I stay with problems longer. - Albert Einstein"
    },
    {
        number: 8,
        title: "Courage Tests Your Talent",
        description: "Bravery in the face of challenges reveals the true extent of your abilities. Courage tests your talent under pressure.",
        quote: "Courage is not the absence of fear, but action in spite of it. - Mark Twain"
    },
    {
        number: 9,
        title: "Teachability Expands Your Talent",
        description: "A continuous learning mindset opens doors to unlimited growth. Everything we know we learned from someone else!",
        quote: "Live as if you were to die tomorrow. Learn as if you were to live forever. - Mahatma Gandhi"
    },
    {
        number: 10,
        title: "Character Protects Your Talent",
        description: "Strong character serves as the foundation that protects your abilities. Character is the basis of your talents.",
        quote: "Character is like a tree and reputation like a shadow. The shadow is what we think of it; the tree is the real thing. - Abraham Lincoln"
    },
    {
        number: 11,
        title: "Relationships Influence Your Talent",
        description: "The connections you build significantly impact your potential for success. Relationships influence your talent in profound ways.",
        quote: "The currency of real networking is not greed but generosity. - Keith Ferrazzi"
    },
    {
        number: 12,
        title: "Responsibility Strengthens Your Talent",
        description: "Taking ownership and accountability enhances your capabilities. Responsibility strengthens your talent through ownership.",
        quote: "The price of greatness is responsibility. - Winston Churchill"
    },
    {
        number: 13,
        title: "Teamwork Multiplies Your Talent",
        description: "Collaboration with others exponentially increases what you can achieve. Teamwork multiplies your talent beyond individual limits.",
        quote: "Alone we can do so little; together we can do so much. - Helen Keller"
    }
];

// Timer state
let timer = {
    minutes: 25,
    seconds: 0,
    isRunning: false,
    isPaused: false,
    isBreak: false,
    interval: null,
    focusTime: 25,
    breakTime: 5
};

// Stats
let stats = {
    completedSessions: parseInt(localStorage.getItem('completedSessions') || '0'),
    totalTime: parseInt(localStorage.getItem('totalTime') || '0'),
    currentStreak: parseInt(localStorage.getItem('currentStreak') || '0')
};

// Current principle index
let currentPrincipleIndex = 0;

// DOM elements
const timeDisplay = document.getElementById('timeDisplay');
const sessionType = document.getElementById('sessionType');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const focusTimeInput = document.getElementById('focusTime');
const breakTimeInput = document.getElementById('breakTime');
const notification = document.getElementById('notification');
const notificationTitle = document.getElementById('notificationTitle');
const notificationMessage = document.getElementById('notificationMessage');
const notificationClose = document.getElementById('notificationClose');

// Principle elements
const principleNumber = document.getElementById('principleNumber');
const principleTitle = document.getElementById('principleTitle');
const principleDescription = document.getElementById('principleDescription');
const principleQuote = document.getElementById('principleQuote');
const prevPrincipleBtn = document.getElementById('prevPrinciple');
const nextPrincipleBtn = document.getElementById('nextPrinciple');

// Stats elements
const completedSessionsEl = document.getElementById('completedSessions');
const totalTimeEl = document.getElementById('totalTime');
const currentStreakEl = document.getElementById('currentStreak');

// Assessment elements
const questionCheckboxes = document.querySelectorAll('.question-checkbox');
const assessmentResult = document.getElementById('assessmentResult');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    updateDisplay();
    updatePrincipleDisplay();
    updateStats();
    setupEventListeners();
    loadAssessmentFromStorage();
});

function setupEventListeners() {
    startBtn.addEventListener('click', startTimer);
    pauseBtn.addEventListener('click', pauseTimer);
    resetBtn.addEventListener('click', resetTimer);
    
    focusTimeInput.addEventListener('change', updateFocusTime);
    breakTimeInput.addEventListener('change', updateBreakTime);
    
    prevPrincipleBtn.addEventListener('click', previousPrinciple);
    nextPrincipleBtn.addEventListener('click', nextPrinciple);
    
    notificationClose.addEventListener('click', closeNotification);
    
    // Assessment checkboxes
    questionCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateAssessment);
    });
    
    // Auto-advance principle every session
    document.addEventListener('sessionComplete', advancePrinciple);
}

function updateDisplay() {
    const minutes = String(timer.minutes).padStart(2, '0');
    const seconds = String(timer.seconds).padStart(2, '0');
    timeDisplay.textContent = `${minutes}:${seconds}`;
    
    sessionType.textContent = timer.isBreak ? 'Break Time' : 'Focus Session';
    
    // Update body class for styling
    document.body.className = '';
    if (timer.isRunning && !timer.isPaused) {
        document.body.classList.add(timer.isBreak ? 'timer-break' : 'timer-running');
    } else if (timer.isPaused) {
        document.body.classList.add('timer-paused');
    }
    
    // Update page title
    document.title = `${minutes}:${seconds} - ${timer.isBreak ? 'Break' : 'Focus'} | Talent-Plus Timer`;
}

function startTimer() {
    if (!timer.isRunning) {
        timer.isRunning = true;
        timer.isPaused = false;
        
        timer.interval = setInterval(() => {
            if (timer.seconds === 0) {
                if (timer.minutes === 0) {
                    // Timer complete
                    completeSession();
                    return;
                }
                timer.minutes--;
                timer.seconds = 59;
            } else {
                timer.seconds--;
            }
            updateDisplay();
        }, 1000);
        
        startBtn.style.display = 'none';
        pauseBtn.style.display = 'inline-block';
    }
    updateDisplay();
}

function pauseTimer() {
    if (timer.isRunning) {
        timer.isRunning = false;
        timer.isPaused = true;
        clearInterval(timer.interval);
        
        startBtn.style.display = 'inline-block';
        pauseBtn.style.display = 'none';
    }
    updateDisplay();
}

function resetTimer() {
    timer.isRunning = false;
    timer.isPaused = false;
    clearInterval(timer.interval);
    
    timer.minutes = timer.isBreak ? timer.breakTime : timer.focusTime;
    timer.seconds = 0;
    
    startBtn.style.display = 'inline-block';
    pauseBtn.style.display = 'none';
    
    updateDisplay();
}

function completeSession() {
    timer.isRunning = false;
    clearInterval(timer.interval);
    
    if (!timer.isBreak) {
        // Complete focus session
        stats.completedSessions++;
        stats.totalTime += timer.focusTime;
        stats.currentStreak++;
        
        showNotification('Focus Session Complete!', 'Great work! Time for a break to recharge.');
        
        // Dispatch custom event for principle advancement
        document.dispatchEvent(new CustomEvent('sessionComplete'));
    } else {
        // Complete break
        showNotification('Break Complete!', 'Ready to focus again? Let\'s maximize your talent!');
    }
    
    // Switch between focus and break
    timer.isBreak = !timer.isBreak;
    timer.minutes = timer.isBreak ? timer.breakTime : timer.focusTime;
    timer.seconds = 0;
    
    startBtn.style.display = 'inline-block';
    pauseBtn.style.display = 'none';
    
    updateDisplay();
    updateStats();
    saveStats();
}

function updateFocusTime() {
    timer.focusTime = parseInt(focusTimeInput.value);
    if (!timer.isBreak && !timer.isRunning) {
        timer.minutes = timer.focusTime;
        timer.seconds = 0;
        updateDisplay();
    }
}

function updateBreakTime() {
    timer.breakTime = parseInt(breakTimeInput.value);
    if (timer.isBreak && !timer.isRunning) {
        timer.minutes = timer.breakTime;
        timer.seconds = 0;
        updateDisplay();
    }
}

function showNotification(title, message) {
    notificationTitle.textContent = title;
    notificationMessage.textContent = message;
    notification.classList.add('show');
    
    // Play notification sound (if supported)
    playNotificationSound();
}

function closeNotification() {
    notification.classList.remove('show');
}

function playNotificationSound() {
    // Create a simple notification beep
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 800;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
}

function updatePrincipleDisplay() {
    const principle = principles[currentPrincipleIndex];
    principleNumber.textContent = `Principle ${principle.number}`;
    principleTitle.textContent = principle.title;
    principleDescription.textContent = principle.description;
    principleQuote.textContent = principle.quote;
}

function previousPrinciple() {
    currentPrincipleIndex = (currentPrincipleIndex - 1 + principles.length) % principles.length;
    updatePrincipleDisplay();
}

function nextPrinciple() {
    currentPrincipleIndex = (currentPrincipleIndex + 1) % principles.length;
    updatePrincipleDisplay();
}

function advancePrinciple() {
    // Auto-advance to next principle after completing a focus session
    nextPrinciple();
}

function updateStats() {
    completedSessionsEl.textContent = stats.completedSessions;
    totalTimeEl.textContent = stats.totalTime;
    currentStreakEl.textContent = stats.currentStreak;
}

function saveStats() {
    localStorage.setItem('completedSessions', stats.completedSessions.toString());
    localStorage.setItem('totalTime', stats.totalTime.toString());
    localStorage.setItem('currentStreak', stats.currentStreak.toString());
}

function updateAssessment() {
    const checkedCount = Array.from(questionCheckboxes).filter(cb => cb.checked).length;
    const totalQuestions = questionCheckboxes.length;
    
    let resultClass = '';
    let resultText = '';
    
    if (checkedCount === totalQuestions) {
        resultClass = 'excellent';
        resultText = '🎉 Excellent! You have a highly teachable spirit. You\'re well-positioned to expand your talent through continuous learning.';
    } else if (checkedCount >= 7) {
        resultClass = 'good';
        resultText = '👍 Good! You show strong teachability. Focus on the areas where you answered "no" to further develop your learning mindset.';
    } else {
        resultClass = 'needs-improvement';
        resultText = '💪 Room for Growth: You have significant opportunities to develop your teachability. Remember: "Soften your attitude, learn humility, and remain teachable today."';
    }
    
    assessmentResult.className = `assessment-result show ${resultClass}`;
    assessmentResult.textContent = resultText;
    
    // Save assessment to localStorage
    const assessmentData = Array.from(questionCheckboxes).map(cb => cb.checked);
    localStorage.setItem('teachabilityAssessment', JSON.stringify(assessmentData));
}

function loadAssessmentFromStorage() {
    const savedAssessment = localStorage.getItem('teachabilityAssessment');
    if (savedAssessment) {
        const assessmentData = JSON.parse(savedAssessment);
        questionCheckboxes.forEach((checkbox, index) => {
            checkbox.checked = assessmentData[index] || false;
        });
        updateAssessment();
    }
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if (e.target.tagName === 'INPUT') return;
    
    switch(e.key) {
        case ' ':
            e.preventDefault();
            if (timer.isRunning) {
                pauseTimer();
            } else {
                startTimer();
            }
            break;
        case 'r':
            resetTimer();
            break;
        case 'ArrowLeft':
            previousPrinciple();
            break;
        case 'ArrowRight':
            nextPrinciple();
            break;
    }
});

// Reset stats button (hidden feature - double click on stats section)
document.querySelector('.stats-section').addEventListener('dblclick', function() {
    if (confirm('Reset all statistics? This cannot be undone.')) {
        stats = { completedSessions: 0, totalTime: 0, currentStreak: 0 };
        updateStats();
        saveStats();
        localStorage.removeItem('teachabilityAssessment');
        questionCheckboxes.forEach(cb => cb.checked = false);
        assessmentResult.classList.remove('show');
    }
});