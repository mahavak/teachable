// Maxwell's 13 Principles from "Talent Is Never Enough"
const MAXWELL_PRINCIPLES = [
    {
        id: 1,
        name: "Belief",
        description: "Belief lifts your talent",
        metrics: [
            { key: "self_confidence", label: "Self-Confidence Level", type: "slider", min: 1, max: 10 },
            { key: "positive_affirmations", label: "Positive Affirmations", type: "number", unit: "times" },
            { key: "belief_journal", label: "Belief Journal Entry", type: "text" }
        ]
    },
    {
        id: 2,
        name: "Passion",
        description: "Passion energizes your talent",
        metrics: [
            { key: "enthusiasm_level", label: "Enthusiasm Level", type: "slider", min: 1, max: 10 },
            { key: "passionate_activities", label: "Time on Passionate Activities", type: "number", unit: "minutes" },
            { key: "energy_rating", label: "Energy Rating", type: "slider", min: 1, max: 10 }
        ]
    },
    {
        id: 3,
        name: "Initiative",
        description: "Initiative activates your talent",
        metrics: [
            { key: "proactive_actions", label: "Proactive Actions Taken", type: "number", unit: "actions" },
            { key: "new_opportunities", label: "New Opportunities Created", type: "number", unit: "opportunities" },
            { key: "initiative_rating", label: "Initiative Rating", type: "slider", min: 1, max: 10 }
        ]
    },
    {
        id: 4,
        name: "Focus",
        description: "Focus directs your talent",
        metrics: [
            { key: "focus_hours", label: "Deep Focus Hours", type: "number", unit: "hours" },
            { key: "distractions_avoided", label: "Distractions Avoided", type: "number", unit: "times" },
            { key: "priority_completion", label: "Priority Task Completion", type: "slider", min: 0, max: 100 }
        ]
    },
    {
        id: 5,
        name: "Preparation",
        description: "Preparation positions your talent",
        metrics: [
            { key: "study_time", label: "Study/Research Time", type: "number", unit: "minutes" },
            { key: "skill_practice", label: "Skill Practice Time", type: "number", unit: "minutes" },
            { key: "preparation_quality", label: "Preparation Quality", type: "slider", min: 1, max: 10 }
        ]
    },
    {
        id: 6,
        name: "Practice",
        description: "Practice sharpens your talent",
        metrics: [
            { key: "deliberate_practice", label: "Deliberate Practice Time", type: "number", unit: "minutes" },
            { key: "skills_worked", label: "Skills Practiced", type: "number", unit: "skills" },
            { key: "practice_intensity", label: "Practice Intensity", type: "slider", min: 1, max: 10 }
        ]
    },
    {
        id: 7,
        name: "Perseverance",
        description: "Perseverance sustains your talent",
        metrics: [
            { key: "obstacles_overcome", label: "Obstacles Overcome", type: "number", unit: "obstacles" },
            { key: "persistence_rating", label: "Persistence Rating", type: "slider", min: 1, max: 10 },
            { key: "comeback_moments", label: "Comeback Moments", type: "number", unit: "moments" }
        ]
    },
    {
        id: 8,
        name: "Courage",
        description: "Courage tests your talent",
        metrics: [
            { key: "comfort_zone_exits", label: "Times Left Comfort Zone", type: "number", unit: "times" },
            { key: "brave_decisions", label: "Brave Decisions Made", type: "number", unit: "decisions" },
            { key: "courage_level", label: "Courage Level", type: "slider", min: 1, max: 10 }
        ]
    },
    {
        id: 9,
        name: "Teachability",
        description: "Teachability expands your talent",
        metrics: [
            { key: "learning_hours", label: "Learning Hours", type: "number", unit: "hours" },
            { key: "feedback_received", label: "Feedback Received", type: "number", unit: "instances" },
            { key: "openness_rating", label: "Openness to Learning", type: "slider", min: 1, max: 10 }
        ]
    },
    {
        id: 10,
        name: "Character",
        description: "Character protects your talent",
        metrics: [
            { key: "integrity_moments", label: "Integrity Moments", type: "number", unit: "moments" },
            { key: "character_strength", label: "Character Strength", type: "slider", min: 1, max: 10 },
            { key: "values_alignment", label: "Values Alignment", type: "slider", min: 1, max: 10 }
        ]
    },
    {
        id: 11,
        name: "Relationships",
        description: "Relationships influence your talent",
        metrics: [
            { key: "meaningful_connections", label: "Meaningful Connections", type: "number", unit: "connections" },
            { key: "relationship_investment", label: "Relationship Investment Time", type: "number", unit: "minutes" },
            { key: "relationship_quality", label: "Relationship Quality", type: "slider", min: 1, max: 10 }
        ]
    },
    {
        id: 12,
        name: "Responsibility",
        description: "Responsibility strengthens your talent",
        metrics: [
            { key: "ownership_taken", label: "Times Took Ownership", type: "number", unit: "times" },
            { key: "commitments_kept", label: "Commitments Kept", type: "number", unit: "commitments" },
            { key: "responsibility_rating", label: "Responsibility Rating", type: "slider", min: 1, max: 10 }
        ]
    },
    {
        id: 13,
        name: "Teamwork",
        description: "Teamwork multiplies your talent",
        metrics: [
            { key: "team_contributions", label: "Team Contributions", type: "number", unit: "contributions" },
            { key: "collaboration_hours", label: "Collaboration Hours", type: "number", unit: "hours" },
            { key: "teamwork_effectiveness", label: "Teamwork Effectiveness", type: "slider", min: 1, max: 10 }
        ]
    }
];

// Weekly reflection prompts
const REFLECTION_PROMPTS = [
    "Which principle showed the most growth this week?",
    "What specific actions led to your biggest breakthrough?",
    "How did you handle setbacks or challenges?",
    "What relationships did you strengthen this week?",
    "How did you step outside your comfort zone?",
    "What did you learn about yourself?",
    "How did you practice perseverance when things got difficult?",
    "What preparation paid off most this week?",
    "How did you demonstrate character in challenging situations?",
    "What new skills or knowledge did you acquire?",
    "How did you contribute to team success?",
    "What responsibility did you take ownership of?",
    "How did your belief in yourself manifest in actions?"
];

// Application State
class GrowthTracker {
    constructor() {
        this.data = this.loadData();
        this.currentView = 'dashboard';
        this.currentDate = new Date().toISOString().split('T')[0];
        this.currentWeek = this.getWeekRange(new Date());
        this.currentMonth = new Date();
        this.charts = {};
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.renderDashboard();
        this.renderPrinciplesOverview();
        this.updateDateDisplay();
        this.showView('dashboard');
    }

    // Data Management
    loadData() {
        const defaultData = {
            dailyTracking: {},
            weeklyReflections: {},
            goals: [],
            settings: {
                startDate: new Date().toISOString().split('T')[0]
            }
        };

        try {
            const saved = localStorage.getItem('growthTrackerData');
            return saved ? { ...defaultData, ...JSON.parse(saved) } : defaultData;
        } catch (error) {
            console.error('Error loading data:', error);
            return defaultData;
        }
    }

    saveData() {
        try {
            localStorage.setItem('growthTrackerData', JSON.stringify(this.data));
        } catch (error) {
            console.error('Error saving data:', error);
            this.showToast('Error saving data', 'error');
        }
    }

    // Event Listeners
    setupEventListeners() {
        // Navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const view = item.dataset.view;
                this.showView(view);
            });
        });

        // Daily tracking
        document.getElementById('trackingDate').addEventListener('change', (e) => {
            this.currentDate = e.target.value;
            this.renderDailyTracking();
        });

        document.getElementById('prevDay').addEventListener('click', () => {
            const date = new Date(this.currentDate);
            date.setDate(date.getDate() - 1);
            this.currentDate = date.toISOString().split('T')[0];
            document.getElementById('trackingDate').value = this.currentDate;
            this.renderDailyTracking();
        });

        document.getElementById('nextDay').addEventListener('click', () => {
            const date = new Date(this.currentDate);
            date.setDate(date.getDate() + 1);
            this.currentDate = date.toISOString().split('T')[0];
            document.getElementById('trackingDate').value = this.currentDate;
            this.renderDailyTracking();
        });

        document.getElementById('saveDailyTracking').addEventListener('click', () => {
            this.saveDailyTracking();
        });

        // Weekly reflection
        document.getElementById('prevWeek').addEventListener('click', () => {
            this.changeWeek(-1);
        });

        document.getElementById('nextWeek').addEventListener('click', () => {
            this.changeWeek(1);
        });

        // Goals
        document.getElementById('addNewGoal').addEventListener('click', () => {
            this.showGoalModal();
        });

        document.getElementById('goalForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.saveGoal();
        });

        // Modal
        document.querySelector('.close').addEventListener('click', () => {
            this.hideGoalModal();
        });

        // Analytics filters
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.renderAnalytics(e.target.dataset.period);
            });
        });

        // Calendar
        document.getElementById('prevMonth').addEventListener('click', () => {
            this.changeMonth(-1);
        });

        document.getElementById('nextMonth').addEventListener('click', () => {
            this.changeMonth(1);
        });

        // Export
        document.getElementById('exportData').addEventListener('click', () => {
            this.exportData();
        });

        // Set current date
        document.getElementById('trackingDate').value = this.currentDate;
        
        // Set export date defaults
        const today = new Date().toISOString().split('T')[0];
        const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
        document.getElementById('exportStart').value = thirtyDaysAgo;
        document.getElementById('exportEnd').value = today;
    }

    // View Management
    showView(viewName) {
        // Update navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelector(`[data-view="${viewName}"]`).classList.add('active');

        // Show view
        document.querySelectorAll('.view-section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(viewName).classList.add('active');

        this.currentView = viewName;

        // Render view-specific content
        switch (viewName) {
            case 'dashboard':
                this.renderDashboard();
                break;
            case 'daily-tracking':
                this.renderDailyTracking();
                break;
            case 'weekly-reflection':
                this.renderWeeklyReflection();
                break;
            case 'goals':
                this.renderGoals();
                break;
            case 'analytics':
                this.renderAnalytics('week');
                break;
            case 'calendar':
                this.renderCalendar();
                break;
            case 'export':
                this.renderExport();
                break;
        }
    }

    // Dashboard
    renderDashboard() {
        this.updateStreaks();
        this.updateQuickStats();
        this.updateRecentActivity();
        this.renderProgressChart();
        this.renderPrinciplesOverview();
    }

    updateStreaks() {
        const overallStreak = this.calculateOverallStreak();
        document.querySelector('.streak-number').textContent = overallStreak;

        const principleStreaksContainer = document.querySelector('.principle-streaks');
        principleStreaksContainer.innerHTML = '';

        MAXWELL_PRINCIPLES.forEach(principle => {
            const streak = this.calculatePrincipleStreak(principle.id);
            const streakElement = document.createElement('div');
            streakElement.className = `principle-streak ${streak > 0 ? 'active' : ''}`;
            streakElement.innerHTML = `
                <span>${principle.name}</span>
                <strong>${streak}</strong>
            `;
            principleStreaksContainer.appendChild(streakElement);
        });
    }

    updateQuickStats() {
        const totalDays = Object.keys(this.data.dailyTracking).length;
        const completionRate = this.calculateOverallCompletionRate();
        const activeGoals = this.data.goals.filter(goal => !goal.completed).length;

        document.getElementById('total-days').textContent = totalDays;
        document.getElementById('completion-rate').textContent = `${completionRate}%`;
        document.getElementById('active-goals').textContent = activeGoals;
    }

    updateRecentActivity() {
        const activityFeed = document.querySelector('.activity-feed');
        const activities = this.getRecentActivities();

        activityFeed.innerHTML = activities.length ? 
            activities.map(activity => `
                <div class="activity-item">
                    <div class="activity-icon">
                        <i class="${activity.icon}"></i>
                    </div>
                    <div class="activity-content">
                        <div class="activity-title">${activity.title}</div>
                        <div class="activity-time">${activity.time}</div>
                    </div>
                </div>
            `).join('') :
            '<div class="loading">No recent activity</div>';
    }

    renderProgressChart() {
        const ctx = document.getElementById('progressChart').getContext('2d');
        
        if (this.charts.progress) {
            this.charts.progress.destroy();
        }

        const last7Days = this.getLast7DaysData();
        
        this.charts.progress = new Chart(ctx, {
            type: 'line',
            data: {
                labels: last7Days.map(d => new Date(d.date).toLocaleDateString('en-US', { weekday: 'short' })),
                datasets: [{
                    label: 'Overall Progress',
                    data: last7Days.map(d => d.completion),
                    borderColor: '#4CAF50',
                    backgroundColor: 'rgba(76, 175, 80, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }

    renderPrinciplesOverview() {
        const container = document.querySelector('.principles-overview .principles-grid');
        
        container.innerHTML = MAXWELL_PRINCIPLES.map(principle => {
            const score = this.getPrincipleScore(principle.id);
            return `
                <div class="principle-card">
                    <div class="principle-number">${principle.id}</div>
                    <div class="principle-name">${principle.name}</div>
                    <div class="principle-score">${score}% this week</div>
                </div>
            `;
        }).join('');
    }

    // Daily Tracking
    renderDailyTracking() {
        const container = document.getElementById('principlesChecklist');
        const dayData = this.data.dailyTracking[this.currentDate] || {};

        container.innerHTML = MAXWELL_PRINCIPLES.map(principle => {
            const principleData = dayData[principle.id] || {};
            const isCompleted = principleData.completed || false;

            return `
                <div class="principle-item ${isCompleted ? 'completed' : ''}" data-principle="${principle.id}">
                    <div class="principle-header">
                        <div class="principle-title">
                            <span>${principle.id}. ${principle.name}</span>
                            <small>${principle.description}</small>
                        </div>
                        <div class="principle-toggle ${isCompleted ? 'active' : ''}" 
                             onclick="tracker.togglePrinciple(${principle.id})"></div>
                    </div>
                    <div class="principle-metrics">
                        ${principle.metrics.map(metric => this.renderMetricInput(principle.id, metric, principleData[metric.key])).join('')}
                    </div>
                </div>
            `;
        }).join('');

        // Load daily notes
        document.getElementById('dailyNotes').value = dayData.notes || '';
    }

    renderMetricInput(principleId, metric, value) {
        const inputId = `${principleId}_${metric.key}`;
        
        switch (metric.type) {
            case 'slider':
                return `
                    <div class="metric-item">
                        <div class="metric-label">${metric.label}</div>
                        <input type="range" 
                               class="metric-slider" 
                               id="${inputId}"
                               min="${metric.min}" 
                               max="${metric.max}" 
                               value="${value || metric.min}"
                               oninput="this.nextElementSibling.textContent = this.value">
                        <span>${value || metric.min}</span>
                    </div>
                `;
            case 'number':
                return `
                    <div class="metric-item">
                        <div class="metric-label">${metric.label} ${metric.unit ? `(${metric.unit})` : ''}</div>
                        <input type="number" 
                               class="metric-input" 
                               id="${inputId}"
                               value="${value || 0}" 
                               min="0">
                    </div>
                `;
            case 'text':
                return `
                    <div class="metric-item">
                        <div class="metric-label">${metric.label}</div>
                        <input type="text" 
                               class="metric-input" 
                               id="${inputId}"
                               value="${value || ''}"
                               placeholder="Enter details...">
                    </div>
                `;
            default:
                return '';
        }
    }

    togglePrinciple(principleId) {
        if (!this.data.dailyTracking[this.currentDate]) {
            this.data.dailyTracking[this.currentDate] = {};
        }
        if (!this.data.dailyTracking[this.currentDate][principleId]) {
            this.data.dailyTracking[this.currentDate][principleId] = {};
        }

        const isCompleted = this.data.dailyTracking[this.currentDate][principleId].completed || false;
        this.data.dailyTracking[this.currentDate][principleId].completed = !isCompleted;

        this.saveData();
        this.renderDailyTracking();
        this.updateStreaks();
    }

    saveDailyTracking() {
        if (!this.data.dailyTracking[this.currentDate]) {
            this.data.dailyTracking[this.currentDate] = {};
        }

        MAXWELL_PRINCIPLES.forEach(principle => {
            if (!this.data.dailyTracking[this.currentDate][principle.id]) {
                this.data.dailyTracking[this.currentDate][principle.id] = {};
            }

            principle.metrics.forEach(metric => {
                const inputId = `${principle.id}_${metric.key}`;
                const input = document.getElementById(inputId);
                if (input) {
                    this.data.dailyTracking[this.currentDate][principle.id][metric.key] = 
                        metric.type === 'number' ? parseInt(input.value) || 0 : input.value;
                }
            });
        });

        // Save daily notes
        this.data.dailyTracking[this.currentDate].notes = document.getElementById('dailyNotes').value;

        this.saveData();
        this.showToast('Daily progress saved successfully!');
        this.updateStreaks();
        this.updateQuickStats();
    }

    // Weekly Reflection
    renderWeeklyReflection() {
        this.updateWeekDisplay();
        this.renderReflectionPrompts();
        this.renderWeekSummary();
    }

    updateWeekDisplay() {
        const weekDisplay = document.querySelector('.week-display');
        const start = new Date(this.currentWeek.start);
        const end = new Date(this.currentWeek.end);
        
        weekDisplay.textContent = `${start.toLocaleDateString()} - ${end.toLocaleDateString()}`;
    }

    renderReflectionPrompts() {
        const container = document.querySelector('.prompt-list');
        const weekKey = `${this.currentWeek.start}_${this.currentWeek.end}`;
        const weeklyData = this.data.weeklyReflections[weekKey] || {};

        container.innerHTML = REFLECTION_PROMPTS.map((prompt, index) => `
            <div class="reflection-prompt">
                <h4>${prompt}</h4>
                <textarea 
                    id="prompt_${index}" 
                    placeholder="Reflect on this question..."
                    onblur="tracker.saveReflectionAnswer(${index}, this.value)"
                >${weeklyData[`prompt_${index}`] || ''}</textarea>
            </div>
        `).join('');
    }

    renderWeekSummary() {
        const container = document.querySelector('.summary-stats');
        const weekStats = this.getWeekStats(this.currentWeek);

        container.innerHTML = `
            <div class="week-stat">
                <h4>Days Tracked</h4>
                <span class="stat-value">${weekStats.daysTracked}/7</span>
            </div>
            <div class="week-stat">
                <h4>Average Completion</h4>
                <span class="stat-value">${weekStats.avgCompletion}%</span>
            </div>
            <div class="week-stat">
                <h4>Top Principle</h4>
                <span class="stat-value">${weekStats.topPrinciple}</span>
            </div>
            <div class="week-stat">
                <h4>Improvement Area</h4>
                <span class="stat-value">${weekStats.improvementArea}</span>
            </div>
        `;
    }

    changeWeek(direction) {
        const start = new Date(this.currentWeek.start);
        start.setDate(start.getDate() + (direction * 7));
        this.currentWeek = this.getWeekRange(start);
        this.renderWeeklyReflection();
    }

    saveReflectionAnswer(promptIndex, answer) {
        const weekKey = `${this.currentWeek.start}_${this.currentWeek.end}`;
        if (!this.data.weeklyReflections[weekKey]) {
            this.data.weeklyReflections[weekKey] = {};
        }
        this.data.weeklyReflections[weekKey][`prompt_${promptIndex}`] = answer;
        this.saveData();
    }

    // Goals Management
    renderGoals() {
        this.renderActiveGoals();
        this.renderCompletedGoals();
        this.populateGoalPrincipleSelect();
    }

    renderActiveGoals() {
        const container = document.getElementById('activeGoalsList');
        const activeGoals = this.data.goals.filter(goal => !goal.completed);

        container.innerHTML = activeGoals.length ?
            activeGoals.map(goal => this.renderGoalCard(goal)).join('') :
            '<p>No active goals. Create your first SMART goal!</p>';
    }

    renderCompletedGoals() {
        const container = document.getElementById('completedGoalsList');
        const completedGoals = this.data.goals.filter(goal => goal.completed);

        container.innerHTML = completedGoals.length ?
            completedGoals.map(goal => this.renderGoalCard(goal)).join('') :
            '<p>No completed goals yet.</p>';
    }

    renderGoalCard(goal) {
        const progress = this.calculateGoalProgress(goal);
        const daysLeft = this.getDaysUntilDeadline(goal.deadline);
        
        return `
            <div class="goal-item">
                <div class="goal-header">
                    <div>
                        <div class="goal-title">${goal.title}</div>
                        <div class="goal-principle">${goal.principle}</div>
                    </div>
                    <div class="goal-actions">
                        ${!goal.completed ? `
                            <button onclick="tracker.toggleGoalComplete('${goal.id}')" class="btn-secondary">
                                Complete
                            </button>
                        ` : ''}
                        <button onclick="tracker.deleteGoal('${goal.id}')" class="btn-secondary">
                            Delete
                        </button>
                    </div>
                </div>
                <div class="goal-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${progress}%"></div>
                    </div>
                </div>
                <div class="goal-deadline">
                    ${goal.completed ? 'Completed' : `${daysLeft} days remaining`}
                </div>
            </div>
        `;
    }

    showGoalModal() {
        document.getElementById('goalModal').style.display = 'block';
    }

    hideGoalModal() {
        document.getElementById('goalModal').style.display = 'none';
        document.getElementById('goalForm').reset();
    }

    populateGoalPrincipleSelect() {
        const select = document.getElementById('goalPrinciple');
        select.innerHTML = MAXWELL_PRINCIPLES.map(principle => 
            `<option value="${principle.name}">${principle.id}. ${principle.name}</option>`
        ).join('');
    }

    saveGoal() {
        const formData = new FormData(document.getElementById('goalForm'));
        const goal = {
            id: Date.now().toString(),
            title: document.getElementById('goalTitle').value,
            principle: document.getElementById('goalPrinciple').value,
            specific: document.getElementById('goalSpecific').value,
            measurable: document.getElementById('goalMeasurable').value,
            achievable: document.getElementById('goalAchievable').value,
            relevant: document.getElementById('goalRelevant').value,
            deadline: document.getElementById('goalDeadline').value,
            milestones: document.getElementById('goalMilestones').value.split(',').map(m => m.trim()).filter(m => m),
            created: new Date().toISOString().split('T')[0],
            completed: false
        };

        this.data.goals.push(goal);
        this.saveData();
        this.hideGoalModal();
        this.renderGoals();
        this.showToast('Goal created successfully!');
    }

    toggleGoalComplete(goalId) {
        const goal = this.data.goals.find(g => g.id === goalId);
        if (goal) {
            goal.completed = !goal.completed;
            goal.completedDate = goal.completed ? new Date().toISOString().split('T')[0] : null;
            this.saveData();
            this.renderGoals();
            this.showToast(goal.completed ? 'Goal completed! 🎉' : 'Goal reopened');
        }
    }

    deleteGoal(goalId) {
        if (confirm('Are you sure you want to delete this goal?')) {
            this.data.goals = this.data.goals.filter(g => g.id !== goalId);
            this.saveData();
            this.renderGoals();
            this.showToast('Goal deleted');
        }
    }

    // Analytics
    renderAnalytics(period = 'week') {
        this.renderPrincipleChart(period);
        this.renderConsistencyHeatmap(period);
        this.renderGrowthInsights(period);
        this.renderTopPrinciples(period);
    }

    renderPrincipleChart(period) {
        const ctx = document.getElementById('principleChart').getContext('2d');
        
        if (this.charts.principle) {
            this.charts.principle.destroy();
        }

        const data = this.getPrinciplePerformanceData(period);
        
        this.charts.principle = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: MAXWELL_PRINCIPLES.map(p => p.name),
                datasets: [{
                    label: 'Performance',
                    data: data,
                    borderColor: '#4CAF50',
                    backgroundColor: 'rgba(76, 175, 80, 0.1)',
                    pointBackgroundColor: '#4CAF50',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: '#4CAF50'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        });
    }

    renderConsistencyHeatmap(period) {
        const container = document.getElementById('heatmapContainer');
        const data = this.getConsistencyData(period);
        
        container.innerHTML = `
            <div class="heatmap-grid">
                ${data.map(day => `
                    <div class="heatmap-cell" 
                         style="background-color: ${this.getHeatmapColor(day.completion)}"
                         title="${day.date}: ${day.completion}%">
                    </div>
                `).join('')}
            </div>
        `;
    }

    renderGrowthInsights(period) {
        const container = document.querySelector('.insights-list');
        const insights = this.generateInsights(period);
        
        container.innerHTML = insights.map(insight => `
            <div class="insight-item">
                <i class="fas fa-lightbulb"></i>
                <span>${insight}</span>
            </div>
        `).join('');
    }

    renderTopPrinciples(period) {
        const container = document.querySelector('.top-principles');
        const topPrinciples = this.getTopPrinciples(period);
        
        container.innerHTML = topPrinciples.map((principle, index) => `
            <div class="top-principle">
                <span class="rank">${index + 1}</span>
                <span class="name">${principle.name}</span>
                <span class="score">${principle.score}%</span>
            </div>
        `).join('');
    }

    // Calendar
    renderCalendar() {
        this.updateMonthDisplay();
        this.renderCalendarGrid();
    }

    updateMonthDisplay() {
        document.getElementById('currentMonth').textContent = 
            this.currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    }

    renderCalendarGrid() {
        const grid = document.getElementById('calendarGrid');
        const firstDay = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth(), 1);
        const lastDay = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1, 0);
        const startDate = new Date(firstDay);
        startDate.setDate(startDate.getDate() - firstDay.getDay());

        // Add headers
        const headers = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let html = headers.map(day => `<div class="calendar-header">${day}</div>`).join('');

        // Add days
        const currentDate = new Date(startDate);
        for (let i = 0; i < 42; i++) {
            const dateStr = currentDate.toISOString().split('T')[0];
            const isCurrentMonth = currentDate.getMonth() === this.currentMonth.getMonth();
            const isToday = dateStr === new Date().toISOString().split('T')[0];
            const hasData = this.data.dailyTracking[dateStr];
            const completion = hasData ? this.calculateDayCompletion(dateStr) : 0;

            html += `
                <div class="calendar-day ${!isCurrentMonth ? 'other-month' : ''} ${isToday ? 'today' : ''} ${hasData ? 'has-data' : ''}"
                     style="background-color: ${isCurrentMonth && hasData ? this.getCalendarDayColor(completion) : ''}"
                     title="${dateStr}: ${completion}% completion">
                    ${currentDate.getDate()}
                </div>
            `;
            currentDate.setDate(currentDate.getDate() + 1);
        }

        grid.innerHTML = html;
    }

    changeMonth(direction) {
        this.currentMonth.setMonth(this.currentMonth.getMonth() + direction);
        this.renderCalendar();
    }

    // Export
    renderExport() {
        this.updateExportPreview();
    }

    updateExportPreview() {
        const container = document.getElementById('exportPreview');
        const format = document.querySelector('input[name="format"]:checked').value;
        const startDate = document.getElementById('exportStart').value;
        const endDate = document.getElementById('exportEnd').value;

        const stats = this.getExportStats(startDate, endDate);
        
        container.innerHTML = `
            <h4>Export Summary</h4>
            <p><strong>Format:</strong> ${format.toUpperCase()}</p>
            <p><strong>Date Range:</strong> ${startDate} to ${endDate}</p>
            <p><strong>Days of Data:</strong> ${stats.totalDays}</p>
            <p><strong>Principles Tracked:</strong> ${MAXWELL_PRINCIPLES.length}</p>
            <p><strong>Goals Included:</strong> ${stats.totalGoals}</p>
            <p><strong>Reflections:</strong> ${stats.totalReflections}</p>
        `;
    }

    exportData() {
        const format = document.querySelector('input[name="format"]:checked').value;
        const startDate = document.getElementById('exportStart').value;
        const endDate = document.getElementById('exportEnd').value;

        try {
            switch (format) {
                case 'pdf':
                    this.exportToPDF(startDate, endDate);
                    break;
                case 'csv':
                    this.exportToCSV(startDate, endDate);
                    break;
                case 'json':
                    this.exportToJSON(startDate, endDate);
                    break;
            }
            this.showToast('Export completed successfully!');
        } catch (error) {
            console.error('Export error:', error);
            this.showToast('Export failed. Please try again.', 'error');
        }
    }

    exportToPDF(startDate, endDate) {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        doc.setFontSize(20);
        doc.text('Personal Growth Report', 20, 30);
        
        doc.setFontSize(12);
        doc.text(`Period: ${startDate} to ${endDate}`, 20, 50);
        
        let yPosition = 70;
        
        // Add summary stats
        doc.setFontSize(16);
        doc.text('Summary Statistics', 20, yPosition);
        yPosition += 20;
        
        const stats = this.getExportStats(startDate, endDate);
        doc.setFontSize(12);
        doc.text(`Total Days Tracked: ${stats.totalDays}`, 20, yPosition);
        yPosition += 10;
        doc.text(`Average Completion Rate: ${stats.avgCompletion}%`, 20, yPosition);
        yPosition += 10;
        doc.text(`Total Goals: ${stats.totalGoals}`, 20, yPosition);
        yPosition += 20;
        
        // Add principle performance
        doc.setFontSize(16);
        doc.text('Principle Performance', 20, yPosition);
        yPosition += 20;
        
        MAXWELL_PRINCIPLES.forEach(principle => {
            const score = this.getPrincipleScore(principle.id, startDate, endDate);
            doc.setFontSize(12);
            doc.text(`${principle.id}. ${principle.name}: ${score}%`, 20, yPosition);
            yPosition += 10;
            
            if (yPosition > 280) {
                doc.addPage();
                yPosition = 20;
            }
        });
        
        doc.save(`growth-report-${startDate}-to-${endDate}.pdf`);
    }

    exportToCSV(startDate, endDate) {
        let csv = 'Date,Principle,Metric,Value\n';
        
        const start = new Date(startDate);
        const end = new Date(endDate);
        
        for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
            const dateStr = d.toISOString().split('T')[0];
            const dayData = this.data.dailyTracking[dateStr];
            
            if (dayData) {
                MAXWELL_PRINCIPLES.forEach(principle => {
                    const principleData = dayData[principle.id];
                    if (principleData) {
                        principle.metrics.forEach(metric => {
                            const value = principleData[metric.key];
                            if (value !== undefined) {
                                csv += `${dateStr},${principle.name},${metric.label},${value}\n`;
                            }
                        });
                    }
                });
            }
        }
        
        this.downloadFile(csv, `growth-data-${startDate}-to-${endDate}.csv`, 'text/csv');
    }

    exportToJSON(startDate, endDate) {
        const exportData = {
            metadata: {
                exportDate: new Date().toISOString(),
                startDate,
                endDate,
                version: '1.0'
            },
            principles: MAXWELL_PRINCIPLES,
            data: this.filterDataByDateRange(startDate, endDate)
        };
        
        const json = JSON.stringify(exportData, null, 2);
        this.downloadFile(json, `growth-backup-${startDate}-to-${endDate}.json`, 'application/json');
    }

    downloadFile(content, filename, mimeType) {
        const blob = new Blob([content], { type: mimeType });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }

    // Utility Functions
    calculateOverallStreak() {
        const today = new Date();
        let streak = 0;
        
        for (let i = 0; i < 365; i++) {
            const date = new Date(today);
            date.setDate(date.getDate() - i);
            const dateStr = date.toISOString().split('T')[0];
            const dayData = this.data.dailyTracking[dateStr];
            
            if (dayData && this.calculateDayCompletion(dateStr) >= 70) {
                streak++;
            } else {
                break;
            }
        }
        
        return streak;
    }

    calculatePrincipleStreak(principleId) {
        const today = new Date();
        let streak = 0;
        
        for (let i = 0; i < 365; i++) {
            const date = new Date(today);
            date.setDate(date.getDate() - i);
            const dateStr = date.toISOString().split('T')[0];
            const dayData = this.data.dailyTracking[dateStr];
            
            if (dayData && dayData[principleId] && dayData[principleId].completed) {
                streak++;
            } else {
                break;
            }
        }
        
        return streak;
    }

    calculateOverallCompletionRate() {
        const totalDays = Object.keys(this.data.dailyTracking).length;
        if (totalDays === 0) return 0;
        
        const totalCompletion = Object.values(this.data.dailyTracking)
            .reduce((sum, dayData) => sum + this.calculateDayCompletion(dayData), 0);
        
        return Math.round(totalCompletion / totalDays);
    }

    calculateDayCompletion(dateStrOrData) {
        let dayData;
        if (typeof dateStrOrData === 'string') {
            dayData = this.data.dailyTracking[dateStrOrData];
        } else {
            dayData = dateStrOrData;
        }
        
        if (!dayData) return 0;
        
        let completedPrinciples = 0;
        MAXWELL_PRINCIPLES.forEach(principle => {
            if (dayData[principle.id] && dayData[principle.id].completed) {
                completedPrinciples++;
            }
        });
        
        return Math.round((completedPrinciples / MAXWELL_PRINCIPLES.length) * 100);
    }

    getPrincipleScore(principleId, startDate = null, endDate = null) {
        const relevantData = startDate && endDate ? 
            this.filterDataByDateRange(startDate, endDate).dailyTracking :
            this.data.dailyTracking;
            
        const dates = Object.keys(relevantData);
        if (dates.length === 0) return 0;
        
        let completedDays = 0;
        dates.forEach(date => {
            const dayData = relevantData[date];
            if (dayData[principleId] && dayData[principleId].completed) {
                completedDays++;
            }
        });
        
        return Math.round((completedDays / dates.length) * 100);
    }

    getRecentActivities() {
        const activities = [];
        const today = new Date();
        
        for (let i = 0; i < 7; i++) {
            const date = new Date(today);
            date.setDate(date.getDate() - i);
            const dateStr = date.toISOString().split('T')[0];
            const dayData = this.data.dailyTracking[dateStr];
            
            if (dayData) {
                const completion = this.calculateDayCompletion(dateStr);
                activities.push({
                    title: `Day tracked with ${completion}% completion`,
                    time: this.formatRelativeTime(date),
                    icon: 'fas fa-check-circle'
                });
            }
        }
        
        return activities.slice(0, 5);
    }

    getLast7DaysData() {
        const data = [];
        const today = new Date();
        
        for (let i = 6; i >= 0; i--) {
            const date = new Date(today);
            date.setDate(date.getDate() - i);
            const dateStr = date.toISOString().split('T')[0];
            
            data.push({
                date: dateStr,
                completion: this.calculateDayCompletion(dateStr)
            });
        }
        
        return data;
    }

    getWeekRange(date) {
        const start = new Date(date);
        start.setDate(start.getDate() - start.getDay());
        const end = new Date(start);
        end.setDate(end.getDate() + 6);
        
        return {
            start: start.toISOString().split('T')[0],
            end: end.toISOString().split('T')[0]
        };
    }

    getWeekStats(weekRange) {
        let daysTracked = 0;
        let totalCompletion = 0;
        const principleScores = {};
        
        // Initialize principle scores
        MAXWELL_PRINCIPLES.forEach(p => {
            principleScores[p.name] = 0;
        });
        
        // Calculate stats for the week
        const start = new Date(weekRange.start);
        const end = new Date(weekRange.end);
        
        for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
            const dateStr = d.toISOString().split('T')[0];
            const dayData = this.data.dailyTracking[dateStr];
            
            if (dayData) {
                daysTracked++;
                const dayCompletion = this.calculateDayCompletion(dateStr);
                totalCompletion += dayCompletion;
                
                // Calculate principle scores
                MAXWELL_PRINCIPLES.forEach(principle => {
                    if (dayData[principle.id] && dayData[principle.id].completed) {
                        principleScores[principle.name]++;
                    }
                });
            }
        }
        
        const avgCompletion = daysTracked > 0 ? Math.round(totalCompletion / daysTracked) : 0;
        
        // Find top and bottom principles
        const sortedPrinciples = Object.entries(principleScores)
            .sort((a, b) => b[1] - a[1]);
        
        return {
            daysTracked,
            avgCompletion,
            topPrinciple: sortedPrinciples[0][0],
            improvementArea: sortedPrinciples[sortedPrinciples.length - 1][0]
        };
    }

    calculateGoalProgress(goal) {
        const created = new Date(goal.created);
        const deadline = new Date(goal.deadline);
        const now = new Date();
        
        const totalDays = Math.ceil((deadline - created) / (1000 * 60 * 60 * 24));
        const elapsedDays = Math.ceil((now - created) / (1000 * 60 * 60 * 24));
        
        return Math.min(Math.round((elapsedDays / totalDays) * 100), 100);
    }

    getDaysUntilDeadline(deadline) {
        const now = new Date();
        const end = new Date(deadline);
        const diffTime = end - now;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return Math.max(0, diffDays);
    }

    getPrinciplePerformanceData(period) {
        return MAXWELL_PRINCIPLES.map(principle => this.getPrincipleScore(principle.id));
    }

    getConsistencyData(period) {
        // Return heatmap data for the selected period
        const data = [];
        const days = this.getPeriodDays(period);
        
        days.forEach(dateStr => {
            data.push({
                date: dateStr,
                completion: this.calculateDayCompletion(dateStr)
            });
        });
        
        return data;
    }

    generateInsights(period) {
        const insights = [];
        const data = this.getConsistencyData(period);
        const avgCompletion = data.reduce((sum, d) => sum + d.completion, 0) / data.length;
        
        if (avgCompletion > 80) {
            insights.push("Excellent consistency! You're building strong habits.");
        } else if (avgCompletion > 60) {
            insights.push("Good progress! Try to maintain momentum.");
        } else {
            insights.push("Focus on consistency. Small daily actions compound over time.");
        }
        
        // Add more contextual insights
        const streak = this.calculateOverallStreak();
        if (streak > 7) {
            insights.push(`Amazing ${streak}-day streak! Keep it going!`);
        }
        
        return insights;
    }

    getTopPrinciples(period) {
        return MAXWELL_PRINCIPLES
            .map(principle => ({
                name: principle.name,
                score: this.getPrincipleScore(principle.id)
            }))
            .sort((a, b) => b.score - a.score)
            .slice(0, 5);
    }

    getPeriodDays(period) {
        const today = new Date();
        const days = [];
        let numDays;
        
        switch (period) {
            case 'week': numDays = 7; break;
            case 'month': numDays = 30; break;
            case 'year': numDays = 365; break;
            default: numDays = Object.keys(this.data.dailyTracking).length;
        }
        
        for (let i = numDays - 1; i >= 0; i--) {
            const date = new Date(today);
            date.setDate(date.getDate() - i);
            days.push(date.toISOString().split('T')[0]);
        }
        
        return days;
    }

    getHeatmapColor(completion) {
        if (completion >= 90) return '#4CAF50';
        if (completion >= 70) return '#8BC34A';
        if (completion >= 50) return '#FFC107';
        if (completion >= 30) return '#FF9800';
        if (completion > 0) return '#FF5252';
        return '#f5f5f5';
    }

    getCalendarDayColor(completion) {
        return this.getHeatmapColor(completion);
    }

    getExportStats(startDate, endDate) {
        const filteredData = this.filterDataByDateRange(startDate, endDate);
        const totalDays = Object.keys(filteredData.dailyTracking).length;
        const totalGoals = filteredData.goals.length;
        const totalReflections = Object.keys(filteredData.weeklyReflections).length;
        
        let totalCompletion = 0;
        Object.values(filteredData.dailyTracking).forEach(dayData => {
            totalCompletion += this.calculateDayCompletion(dayData);
        });
        
        const avgCompletion = totalDays > 0 ? Math.round(totalCompletion / totalDays) : 0;
        
        return {
            totalDays,
            totalGoals,
            totalReflections,
            avgCompletion
        };
    }

    filterDataByDateRange(startDate, endDate) {
        const start = new Date(startDate);
        const end = new Date(endDate);
        
        const filteredTracking = {};
        Object.entries(this.data.dailyTracking).forEach(([date, data]) => {
            const d = new Date(date);
            if (d >= start && d <= end) {
                filteredTracking[date] = data;
            }
        });
        
        const filteredGoals = this.data.goals.filter(goal => {
            const created = new Date(goal.created);
            return created >= start && created <= end;
        });
        
        return {
            dailyTracking: filteredTracking,
            goals: filteredGoals,
            weeklyReflections: this.data.weeklyReflections
        };
    }

    formatRelativeTime(date) {
        const now = new Date();
        const diffMs = now - date;
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        
        if (diffDays === 0) return 'Today';
        if (diffDays === 1) return 'Yesterday';
        return `${diffDays} days ago`;
    }

    updateDateDisplay() {
        const dateDisplay = document.querySelector('.date-display');
        if (dateDisplay) {
            dateDisplay.textContent = new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            });
        }
    }

    showToast(message, type = 'success') {
        const toast = document.getElementById('toast');
        toast.textContent = message;
        toast.className = `toast ${type} show`;
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
}

// Initialize the application
let tracker;
document.addEventListener('DOMContentLoaded', () => {
    tracker = new GrowthTracker();
});

// Make tracker globally available for onclick handlers
window.tracker = tracker;