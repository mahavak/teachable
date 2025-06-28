// Assessment Questions Data
const assessmentQuestions = [
    // PRINCIPLE 1: BELIEF LIFTS YOUR TALENT (5 questions)
    {
        principle: 1,
        principleTitle: "Belief Lifts Your Talent",
        question: "I believe in my ability to achieve my goals despite obstacles.",
        category: "belief"
    },
    {
        principle: 1,
        principleTitle: "Belief Lifts Your Talent",
        question: "I regularly affirm my capabilities and potential for success.",
        category: "belief"
    },
    {
        principle: 1,
        principleTitle: "Belief Lifts Your Talent",
        question: "When facing challenges, I focus on solutions rather than problems.",
        category: "belief"
    },
    {
        principle: 1,
        principleTitle: "Belief Lifts Your Talent",
        question: "I view setbacks as learning opportunities rather than failures.",
        category: "belief"
    },
    {
        principle: 1,
        principleTitle: "Belief Lifts Your Talent",
        question: "I take on challenges that stretch my abilities because I believe I can grow.",
        category: "belief"
    },

    // PRINCIPLE 2: PASSION ENERGIZES YOUR TALENT (5 questions)
    {
        principle: 2,
        principleTitle: "Passion Energizes Your Talent",
        question: "I feel energized and excited when working on my most important goals.",
        category: "passion"
    },
    {
        principle: 2,
        principleTitle: "Passion Energizes Your Talent",
        question: "I can easily explain why my work matters to me and others.",
        category: "passion"
    },
    {
        principle: 2,
        principleTitle: "Passion Energizes Your Talent",
        question: "I often lose track of time when engaged in activities I'm passionate about.",
        category: "passion"
    },
    {
        principle: 2,
        principleTitle: "Passion Energizes Your Talent",
        question: "My enthusiasm inspires and motivates others around me.",
        category: "passion"
    },
    {
        principle: 2,
        principleTitle: "Passion Energizes Your Talent",
        question: "I actively seek ways to align my daily work with my deeper purpose.",
        category: "passion"
    },

    // PRINCIPLE 3: INITIATIVE ACTIVATES YOUR TALENT (5 questions)
    {
        principle: 3,
        principleTitle: "Initiative Activates Your Talent",
        question: "I take action on good ideas rather than waiting for perfect conditions.",
        category: "initiative"
    },
    {
        principle: 3,
        principleTitle: "Initiative Activates Your Talent",
        question: "I volunteer for challenging projects and new opportunities.",
        category: "initiative"
    },
    {
        principle: 3,
        principleTitle: "Initiative Activates Your Talent",
        question: "When I see problems, I propose solutions rather than just complaining.",
        category: "initiative"
    },
    {
        principle: 3,
        principleTitle: "Initiative Activates Your Talent",
        question: "I start projects and tasks without being asked or reminded.",
        category: "initiative"
    },
    {
        principle: 3,
        principleTitle: "Initiative Activates Your Talent",
        question: "I prefer to lead by example rather than wait for others to act first.",
        category: "initiative"
    },

    // PRINCIPLE 4: FOCUS DIRECTS YOUR TALENT (5 questions)
    {
        principle: 4,
        principleTitle: "Focus Directs Your Talent",
        question: "I can easily identify my top 3 priorities for any given day or week.",
        category: "focus"
    },
    {
        principle: 4,
        principleTitle: "Focus Directs Your Talent",
        question: "I minimize distractions and maintain concentration on important tasks.",
        category: "focus"
    },
    {
        principle: 4,
        principleTitle: "Focus Directs Your Talent",
        question: "I complete projects rather than jumping between multiple unfinished tasks.",
        category: "focus"
    },
    {
        principle: 4,
        principleTitle: "Focus Directs Your Talent",
        question: "I say 'no' to good opportunities that don't align with my key goals.",
        category: "focus"
    },
    {
        principle: 4,
        principleTitle: "Focus Directs Your Talent",
        question: "I regularly review and adjust my priorities based on what matters most.",
        category: "focus"
    },

    // PRINCIPLE 5: PREPARATION POSITIONS YOUR TALENT (5 questions)
    {
        principle: 5,
        principleTitle: "Preparation Positions Your Talent",
        question: "I thoroughly prepare for important meetings, presentations, and opportunities.",
        category: "preparation"
    },
    {
        principle: 5,
        principleTitle: "Preparation Positions Your Talent",
        question: "I research and plan before making significant decisions.",
        category: "preparation"
    },
    {
        principle: 5,
        principleTitle: "Preparation Positions Your Talent",
        question: "I anticipate potential challenges and prepare contingency plans.",
        category: "preparation"
    },
    {
        principle: 5,
        principleTitle: "Preparation Positions Your Talent",
        question: "I invest time in learning and skill development before I need them.",
        category: "preparation"
    },
    {
        principle: 5,
        principleTitle: "Preparation Positions Your Talent",
        question: "I organize my resources and environment to support my success.",
        category: "preparation"
    },

    // PRINCIPLE 6: PRACTICE SHARPENS YOUR TALENT (5 questions)
    {
        principle: 6,
        principleTitle: "Practice Sharpens Your Talent",
        question: "I regularly practice and refine my core skills and abilities.",
        category: "practice"
    },
    {
        principle: 6,
        principleTitle: "Practice Sharpens Your Talent",
        question: "I seek feedback to identify areas where I can improve my performance.",
        category: "practice"
    },
    {
        principle: 6,
        principleTitle: "Practice Sharpens Your Talent",
        question: "I challenge myself with increasingly difficult tasks to grow my abilities.",
        category: "practice"
    },
    {
        principle: 6,
        principleTitle: "Practice Sharpens Your Talent",
        question: "I dedicate specific time for deliberate practice of important skills.",
        category: "practice"
    },
    {
        principle: 6,
        principleTitle: "Practice Sharpens Your Talent",
        question: "I study and learn from experts in areas where I want to improve.",
        category: "practice"
    },

    // PRINCIPLE 7: PERSEVERANCE SUSTAINS YOUR TALENT (5 questions)
    {
        principle: 7,
        principleTitle: "Perseverance Sustains Your Talent",
        question: "I persist through difficulties and don't give up easily on important goals.",
        category: "perseverance"
    },
    {
        principle: 7,
        principleTitle: "Perseverance Sustains Your Talent",
        question: "I maintain my effort and commitment even when progress is slow.",
        category: "perseverance"
    },
    {
        principle: 7,
        principleTitle: "Perseverance Sustains Your Talent",
        question: "I view obstacles as temporary challenges rather than permanent barriers.",
        category: "perseverance"
    },
    {
        principle: 7,
        principleTitle: "Perseverance Sustains Your Talent",
        question: "I bounce back quickly from setbacks and disappointments.",
        category: "perseverance"
    },
    {
        principle: 7,
        principleTitle: "Perseverance Sustains Your Talent",
        question: "I stay committed to my long-term vision despite short-term frustrations.",
        category: "perseverance"
    },

    // PRINCIPLE 8: COURAGE TESTS YOUR TALENT (5 questions)
    {
        principle: 8,
        principleTitle: "Courage Tests Your Talent",
        question: "I am willing to take calculated risks to achieve my goals.",
        category: "courage"
    },
    {
        principle: 8,
        principleTitle: "Courage Tests Your Talent",
        question: "I speak up for what I believe is right, even when it's uncomfortable.",
        category: "courage"
    },
    {
        principle: 8,
        principleTitle: "Courage Tests Your Talent",
        question: "I face my fears and push through them to pursue what matters to me.",
        category: "courage"
    },
    {
        principle: 8,
        principleTitle: "Courage Tests Your Talent",
        question: "I am willing to fail in pursuit of something meaningful and important.",
        category: "courage"
    },
    {
        principle: 8,
        principleTitle: "Courage Tests Your Talent",
        question: "I step out of my comfort zone regularly to grow and learn.",
        category: "courage"
    },

    // PRINCIPLE 9: TEACHABILITY EXPANDS YOUR TALENT (5 questions)
    {
        principle: 9,
        principleTitle: "Teachability Expands Your Talent",
        question: "I actively seek feedback and different perspectives on my work.",
        category: "teachability"
    },
    {
        principle: 9,
        principleTitle: "Teachability Expands Your Talent",
        question: "I admit when I don't know something and ask for help or guidance.",
        category: "teachability"
    },
    {
        principle: 9,
        principleTitle: "Teachability Expands Your Talent",
        question: "I change my mind when presented with better information or evidence.",
        category: "teachability"
    },
    {
        principle: 9,
        principleTitle: "Teachability Expands Your Talent",
        question: "I observe and learn from people who are more skilled than I am.",
        category: "teachability"
    },
    {
        principle: 9,
        principleTitle: "Teachability Expands Your Talent",
        question: "I approach new situations with curiosity rather than assumptions.",
        category: "teachability"
    },

    // PRINCIPLE 10: CHARACTER PROTECTS YOUR TALENT (5 questions)
    {
        principle: 10,
        principleTitle: "Character Protects Your Talent",
        question: "I consistently act according to my values, even when no one is watching.",
        category: "character"
    },
    {
        principle: 10,
        principleTitle: "Character Protects Your Talent",
        question: "I keep my commitments and follow through on my promises.",
        category: "character"
    },
    {
        principle: 10,
        principleTitle: "Character Protects Your Talent",
        question: "I treat all people with respect and dignity, regardless of their position.",
        category: "character"
    },
    {
        principle: 10,
        principleTitle: "Character Protects Your Talent",
        question: "I take responsibility for my mistakes and learn from them.",
        category: "character"
    },
    {
        principle: 10,
        principleTitle: "Character Protects Your Talent",
        question: "I am honest and transparent in my dealings with others.",
        category: "character"
    },

    // PRINCIPLE 11: RELATIONSHIPS INFLUENCE YOUR TALENT (5 questions)
    {
        principle: 11,
        principleTitle: "Relationships Influence Your Talent",
        question: "I invest time and energy in building meaningful relationships.",
        category: "relationships"
    },
    {
        principle: 11,
        principleTitle: "Relationships Influence Your Talent",
        question: "I actively help others succeed and achieve their goals.",
        category: "relationships"
    },
    {
        principle: 11,
        principleTitle: "Relationships Influence Your Talent",
        question: "I listen actively and show genuine interest in others' perspectives.",
        category: "relationships"
    },
    {
        principle: 11,
        principleTitle: "Relationships Influence Your Talent",
        question: "I surround myself with people who challenge and inspire me to grow.",
        category: "relationships"
    },
    {
        principle: 11,
        principleTitle: "Relationships Influence Your Talent",
        question: "I communicate clearly and work well with diverse groups of people.",
        category: "relationships"
    },

    // PRINCIPLE 12: RESPONSIBILITY STRENGTHENS YOUR TALENT (5 questions)
    {
        principle: 12,
        principleTitle: "Responsibility Strengthens Your Talent",
        question: "I take ownership of my results, both successes and failures.",
        category: "responsibility"
    },
    {
        principle: 12,
        principleTitle: "Responsibility Strengthens Your Talent",
        question: "I focus on what I can control rather than blaming external circumstances.",
        category: "responsibility"
    },
    {
        principle: 12,
        principleTitle: "Responsibility Strengthens Your Talent",
        question: "I follow through on my commitments without needing to be reminded.",
        category: "responsibility"
    },
    {
        principle: 12,
        principleTitle: "Responsibility Strengthens Your Talent",
        question: "I proactively address problems rather than hoping they'll resolve themselves.",
        category: "responsibility"
    },
    {
        principle: 12,
        principleTitle: "Responsibility Strengthens Your Talent",
        question: "I set high standards for myself and hold myself accountable to them.",
        category: "responsibility"
    },

    // PRINCIPLE 13: TEAMWORK MULTIPLIES YOUR TALENT (5 questions)
    {
        principle: 13,
        principleTitle: "Teamwork Multiplies Your Talent",
        question: "I collaborate effectively and contribute positively to team efforts.",
        category: "teamwork"
    },
    {
        principle: 13,
        principleTitle: "Teamwork Multiplies Your Talent",
        question: "I celebrate others' successes and support their development.",
        category: "teamwork"
    },
    {
        principle: 13,
        principleTitle: "Teamwork Multiplies Your Talent",
        question: "I share credit for achievements and take shared responsibility for challenges.",
        category: "teamwork"
    },
    {
        principle: 13,
        principleTitle: "Teamwork Multiplies Your Talent",
        question: "I adapt my communication and work style to complement team members.",
        category: "teamwork"
    },
    {
        principle: 13,
        principleTitle: "Teamwork Multiplies Your Talent",
        question: "I actively seek ways to leverage the diverse strengths of team members.",
        category: "teamwork"
    }
];

// Assessment State
let currentQuestionIndex = 0;
let answers = [];
let currentScreen = 'welcome';

// DOM Elements
const screens = {
    welcome: document.getElementById('welcome'),
    assessment: document.getElementById('assessment'),
    results: document.getElementById('results')
};

const elements = {
    startButton: document.getElementById('startAssessment'),
    progressFill: document.getElementById('progressFill'),
    progressText: document.getElementById('progressText'),
    principleIndicator: document.getElementById('principleIndicator'),
    questionText: document.getElementById('questionText'),
    answerInputs: document.querySelectorAll('input[name="answer"]'),
    prevButton: document.getElementById('prevQuestion'),
    nextButton: document.getElementById('nextQuestion'),
    overallScore: document.getElementById('overallScore'),
    scoreInterpretation: document.getElementById('scoreInterpretation'),
    principleScores: document.getElementById('principleScores'),
    strengths: document.getElementById('strengths'),
    growthAreas: document.getElementById('growthAreas'),
    nextSteps: document.getElementById('nextSteps'),
    downloadButton: document.getElementById('downloadResults'),
    retakeButton: document.getElementById('retakeAssessment'),
    exploreButton: document.getElementById('exploreTools')
};

// Initialize Assessment
document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
    loadQuestion();
});

function setupEventListeners() {
    elements.startButton.addEventListener('click', startAssessment);
    elements.prevButton.addEventListener('click', previousQuestion);
    elements.nextButton.addEventListener('click', nextQuestion);
    elements.retakeButton.addEventListener('click', retakeAssessment);
    elements.downloadButton.addEventListener('click', downloadResults);
    elements.exploreButton.addEventListener('click', () => window.open('../index.html', '_self'));
    
    // Answer selection
    elements.answerInputs.forEach(input => {
        input.addEventListener('change', handleAnswerSelection);
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', handleKeyboard);
}

function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');
    currentScreen = screenName;
}

function startAssessment() {
    currentQuestionIndex = 0;
    answers = [];
    showScreen('assessment');
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex >= assessmentQuestions.length) {
        calculateResults();
        return;
    }
    
    const question = assessmentQuestions[currentQuestionIndex];
    
    // Update progress
    const progress = ((currentQuestionIndex + 1) / assessmentQuestions.length) * 100;
    elements.progressFill.style.width = `${progress}%`;
    elements.progressText.textContent = `Question ${currentQuestionIndex + 1} of ${assessmentQuestions.length}`;
    
    // Update question content
    elements.principleIndicator.textContent = `Principle ${question.principle}: ${question.principleTitle}`;
    elements.questionText.textContent = question.question;
    
    // Clear previous answers
    elements.answerInputs.forEach(input => input.checked = false);
    
    // Load saved answer if exists
    if (answers[currentQuestionIndex]) {
        const savedAnswer = answers[currentQuestionIndex];
        const input = document.querySelector(`input[name="answer"][value="${savedAnswer}"]`);
        if (input) input.checked = true;
    }
    
    // Update navigation buttons
    elements.prevButton.disabled = currentQuestionIndex === 0;
    elements.nextButton.disabled = !answers[currentQuestionIndex];
}

function handleAnswerSelection() {
    const selectedInput = document.querySelector('input[name="answer"]:checked');
    if (selectedInput) {
        answers[currentQuestionIndex] = parseInt(selectedInput.value);
        elements.nextButton.disabled = false;
        
        // Auto-advance after short delay
        setTimeout(() => {
            if (currentQuestionIndex < assessmentQuestions.length - 1) {
                nextQuestion();
            } else {
                // Last question - show complete button
                elements.nextButton.textContent = 'Complete Assessment';
                elements.nextButton.classList.add('btn-primary');
            }
        }, 500);
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function nextQuestion() {
    if (currentQuestionIndex < assessmentQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        calculateResults();
    }
}

function calculateResults() {
    // Calculate scores for each principle
    const principleScores = {};
    
    for (let i = 1; i <= 13; i++) {
        const principleQuestions = assessmentQuestions
            .map((q, index) => ({ ...q, answerIndex: index }))
            .filter(q => q.principle === i);
        
        const principleTotal = principleQuestions.reduce((sum, q) => {
            return sum + (answers[q.answerIndex] || 0);
        }, 0);
        
        const maxPossible = principleQuestions.length * 5;
        const percentage = Math.round((principleTotal / maxPossible) * 100);
        
        principleScores[i] = {
            score: percentage,
            raw: principleTotal,
            max: maxPossible,
            title: principleQuestions[0].principleTitle
        };
    }
    
    // Calculate overall score
    const overallPercentage = Math.round(
        Object.values(principleScores).reduce((sum, p) => sum + p.score, 0) / 13
    );
    
    displayResults(overallPercentage, principleScores);
    showScreen('results');
}

function displayResults(overallScore, principleScores) {
    // Display overall score
    elements.overallScore.textContent = overallScore;
    
    // Score interpretation
    let interpretation = getScoreInterpretation(overallScore);
    elements.scoreInterpretation.innerHTML = `
        <h3>Talent-Plus Level: ${interpretation.level}</h3>
        <p>${interpretation.description}</p>
    `;
    
    // Display principle scores
    elements.principleScores.innerHTML = '';
    Object.entries(principleScores).forEach(([principle, data]) => {
        const scoreItem = document.createElement('div');
        scoreItem.className = 'principle-score-item';
        
        const scoreClass = getScoreClass(data.score);
        
        scoreItem.innerHTML = `
            <div class="principle-name">Principle ${principle}: ${data.title}</div>
            <div class="score-bar">
                <div class="score-bar-fill ${scoreClass}" style="width: ${data.score}%"></div>
            </div>
            <div class="score-value">${data.score}%</div>
        `;
        
        elements.principleScores.appendChild(scoreItem);
    });
    
    // Generate recommendations
    generateRecommendations(principleScores);
}

function getScoreInterpretation(score) {
    if (score >= 85) {
        return {
            level: "Talent-Plus Master",
            description: "Exceptional! You demonstrate mastery across Maxwell's principles with outstanding leadership potential and consistent high performance."
        };
    } else if (score >= 75) {
        return {
            level: "Talent-Plus Advanced",
            description: "Excellent! You show strong capabilities across most principles with great potential for leadership and achievement."
        };
    } else if (score >= 65) {
        return {
            level: "Talent-Plus Developing",
            description: "Good progress! You have solid foundations in many principles with clear opportunities for continued growth."
        };
    } else if (score >= 50) {
        return {
            level: "Talent-Plus Emerging",
            description: "You're on the right track! Focus on developing key principles to unlock more of your potential."
        };
    } else {
        return {
            level: "Talent-Plus Foundation",
            description: "Great starting point! You have significant opportunities to develop these principles and transform your capabilities."
        };
    }
}

function getScoreClass(score) {
    if (score >= 80) return 'score-excellent';
    if (score >= 70) return 'score-good';
    if (score >= 60) return 'score-average';
    return 'score-needs-improvement';
}

function generateRecommendations(principleScores) {
    // Identify strengths (top 3 scores)
    const sortedPrinciples = Object.entries(principleScores)
        .sort(([,a], [,b]) => b.score - a.score);
    
    const strengths = sortedPrinciples.slice(0, 3);
    const growthAreas = sortedPrinciples.slice(-3).reverse();
    
    // Display strengths
    elements.strengths.innerHTML = '';
    strengths.forEach(([principle, data]) => {
        const li = document.createElement('li');
        li.textContent = `${data.title} (${data.score}%) - Continue leveraging this strength`;
        elements.strengths.appendChild(li);
    });
    
    // Display growth areas
    elements.growthAreas.innerHTML = '';
    growthAreas.forEach(([principle, data]) => {
        const li = document.createElement('li');
        li.textContent = `${data.title} (${data.score}%) - Focus here for maximum impact`;
        elements.growthAreas.appendChild(li);
    });
    
    // Generate next steps
    generateNextSteps(growthAreas);
}

function generateNextSteps(growthAreas) {
    const steps = [
        {
            title: "📚 Study Your Growth Areas",
            description: `Focus on the principle pages for ${growthAreas[0][1].title} and related concepts.`
        },
        {
            title: "🎯 Use the Pomodoro Timer",
            description: "Practice focused work sessions while learning about Maxwell's principles."
        },
        {
            title: "📝 Start a Growth Journal",
            description: "Track daily actions and reflections related to your lowest-scoring principles."
        },
        {
            title: "🤝 Find an Accountability Partner",
            description: "Share your results with someone who can support your development journey."
        }
    ];
    
    elements.nextSteps.innerHTML = '';
    steps.forEach(step => {
        const stepCard = document.createElement('div');
        stepCard.className = 'step-card';
        stepCard.innerHTML = `
            <h4>${step.title}</h4>
            <p>${step.description}</p>
        `;
        elements.nextSteps.appendChild(stepCard);
    });
}

function handleKeyboard(e) {
    if (currentScreen !== 'assessment') return;
    
    if (e.key === 'ArrowLeft' && !elements.prevButton.disabled) {
        previousQuestion();
    } else if (e.key === 'ArrowRight' && !elements.nextButton.disabled) {
        nextQuestion();
    } else if (e.key >= '1' && e.key <= '5') {
        const input = document.querySelector(`input[name="answer"][value="${e.key}"]`);
        if (input) {
            input.checked = true;
            handleAnswerSelection();
        }
    }
}

function retakeAssessment() {
    startAssessment();
}

function downloadResults() {
    // Create downloadable results summary
    const overallScore = elements.overallScore.textContent;
    const timestamp = new Date().toLocaleDateString();
    
    let resultsText = `Maxwell Talent-Plus Assessment Results\n`;
    resultsText += `Date: ${timestamp}\n`;
    resultsText += `Overall Score: ${overallScore}%\n\n`;
    
    resultsText += `PRINCIPLE SCORES:\n`;
    resultsText += `==================\n`;
    
    const scoreItems = document.querySelectorAll('.principle-score-item');
    scoreItems.forEach(item => {
        const name = item.querySelector('.principle-name').textContent;
        const score = item.querySelector('.score-value').textContent;
        resultsText += `${name}: ${score}\n`;
    });
    
    resultsText += `\nSTRENGTHS:\n`;
    resultsText += `==========\n`;
    const strengthItems = elements.strengths.querySelectorAll('li');
    strengthItems.forEach(item => {
        resultsText += `• ${item.textContent}\n`;
    });
    
    resultsText += `\nGROWTH AREAS:\n`;
    resultsText += `=============\n`;
    const growthItems = elements.growthAreas.querySelectorAll('li');
    growthItems.forEach(item => {
        resultsText += `• ${item.textContent}\n`;
    });
    
    resultsText += `\n\nBased on "Talent Is Never Enough" by John C. Maxwell\n`;
    resultsText += `Assessment created by Teachable - Maxwell Education Platform\n`;
    
    // Create and download file
    const blob = new Blob([resultsText], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = `Maxwell-Assessment-Results-${timestamp.replace(/\//g, '-')}.txt`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}