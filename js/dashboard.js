// User Dashboard for Teachable App
// Displays user progress, statistics, and achievements

import { db, utils } from './supabase-config.js'
import authManager from './auth-manager.js'

class UserDashboard {
  constructor() {
    this.userId = null
    this.dashboardData = null
    this.init()
  }

  async init() {
    // Listen for auth changes
    authManager.onAuthStateChange((user) => {
      this.userId = user?.id || null
      if (this.userId) {
        this.loadDashboard()
      } else {
        this.hideDashboard()
      }
    })

    // Initialize if user is already logged in
    const currentUser = authManager.getCurrentUser()
    if (currentUser) {
      this.userId = currentUser.id
      await this.loadDashboard()
    }
  }

  // Load dashboard data
  async loadDashboard() {
    if (!this.userId) return

    try {
      this.showLoading()
      this.dashboardData = await db.getDashboardData(this.userId)
      this.renderDashboard()
    } catch (error) {
      console.error('Error loading dashboard:', error)
      this.showError('Failed to load dashboard data')
    }
  }

  // Render dashboard
  renderDashboard() {
    if (!this.dashboardData) return

    this.createDashboardHTML()
    this.updateStats()
    this.updateProgressCharts()
    this.updateRecentActivity()
    this.updateAchievements()
  }

  // Create dashboard HTML structure
  createDashboardHTML() {
    const existingDashboard = document.getElementById('user-dashboard')
    if (existingDashboard) return

    const dashboard = document.createElement('div')
    dashboard.id = 'user-dashboard'
    dashboard.className = 'user-dashboard'
    dashboard.innerHTML = `
      <div class="dashboard-header">
        <h2>📊 Your Progress Dashboard</h2>
        <button class="refresh-btn" id="refreshDashboard">
          <i class="fas fa-sync-alt"></i> Refresh
        </button>
      </div>

      <div class="dashboard-loading" id="dashboardLoading">
        <div class="loading-spinner"></div>
        <p>Loading your progress...</p>
      </div>

      <div class="dashboard-content" id="dashboardContent">
        <!-- Statistics Overview -->
        <section class="stats-overview">
          <h3>📈 Overview</h3>
          <div class="stats-grid">
            <div class="stat-card">
              <div class="stat-icon">🍅</div>
              <div class="stat-content">
                <div class="stat-number" id="totalPomodoros">0</div>
                <div class="stat-label">Pomodoro Sessions</div>
              </div>
            </div>
            <div class="stat-card">
              <div class="stat-icon">🎯</div>
              <div class="stat-content">
                <div class="stat-number" id="totalChallenges">0</div>
                <div class="stat-label">Challenges Completed</div>
              </div>
            </div>
            <div class="stat-card">
              <div class="stat-icon">📊</div>
              <div class="stat-content">
                <div class="stat-number" id="assessmentScore">-</div>
                <div class="stat-label">Latest Assessment</div>
              </div>
            </div>
            <div class="stat-card">
              <div class="stat-icon">🔥</div>
              <div class="stat-content">
                <div class="stat-number" id="dailyStreak">0</div>
                <div class="stat-label">Day Streak</div>
              </div>
            </div>
          </div>
        </section>

        <!-- Progress Charts -->
        <section class="progress-charts">
          <h3>📈 Progress Over Time</h3>
          <div class="charts-container">
            <div class="chart-card">
              <h4>Weekly Activity</h4>
              <canvas id="activityChart" width="400" height="200"></canvas>
            </div>
            <div class="chart-card">
              <h4>Principle Focus</h4>
              <canvas id="principleChart" width="400" height="200"></canvas>
            </div>
          </div>
        </section>

        <!-- Recent Activity -->
        <section class="recent-activity">
          <h3>🕒 Recent Activity</h3>
          <div class="activity-list" id="activityList">
            <!-- Dynamic content -->
          </div>
        </section>

        <!-- Achievements -->
        <section class="achievements">
          <h3>🏆 Achievements</h3>
          <div class="badges-container" id="badgesContainer">
            <!-- Dynamic content -->
          </div>
          <div class="achievement-progress">
            <h4>Achievement Points: <span id="achievementPoints">0</span></h4>
            <div class="progress-bar">
              <div class="progress-fill" id="achievementProgress"></div>
            </div>
          </div>
        </section>

        <!-- Quick Actions -->
        <section class="quick-actions">
          <h3>⚡ Quick Actions</h3>
          <div class="action-buttons">
            <a href="pomodoro-timer/index.html" class="action-btn">
              <i class="fas fa-play"></i> Start Pomodoro
            </a>
            <a href="assessment-tool/index.html" class="action-btn">
              <i class="fas fa-clipboard-check"></i> Take Assessment
            </a>
            <a href="challenge-generator/index.html" class="action-btn">
              <i class="fas fa-trophy"></i> Get Challenge
            </a>
            <a href="growth-tracker/index.html" class="action-btn">
              <i class="fas fa-chart-line"></i> Track Growth
            </a>
          </div>
        </section>
      </div>
    `

    // Add event listeners
    const refreshBtn = dashboard.querySelector('#refreshDashboard')
    refreshBtn.addEventListener('click', () => this.loadDashboard())

    // Insert dashboard into page
    const container = document.querySelector('.container') || document.body
    const header = container.querySelector('header')
    if (header) {
      header.insertAdjacentElement('afterend', dashboard)
    } else {
      container.insertBefore(dashboard, container.firstChild)
    }
  }

  // Update statistics
  updateStats() {
    const { stats, latestAssessment } = this.dashboardData

    if (stats) {
      document.getElementById('totalPomodoros').textContent = stats.total_pomodoros || 0
      document.getElementById('totalChallenges').textContent = stats.total_challenges_completed || 0
      document.getElementById('dailyStreak').textContent = stats.daily_visit_streak || 0
    }

    if (latestAssessment) {
      document.getElementById('assessmentScore').textContent = 
        Math.round(latestAssessment.total_score) + '%'
    }
  }

  // Update progress charts
  updateProgressCharts() {
    this.createActivityChart()
    this.createPrincipleChart()
  }

  // Create activity chart
  createActivityChart() {
    const canvas = document.getElementById('activityChart')
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const { recentPomodoros, recentChallenges } = this.dashboardData

    // Simple bar chart
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    const pomodoroData = new Array(7).fill(0)
    const challengeData = new Array(7).fill(0)

    // Process data by day of week
    recentPomodoros?.forEach(session => {
      const day = new Date(session.created_at).getDay()
      pomodoroData[day === 0 ? 6 : day - 1]++
    })

    recentChallenges?.forEach(challenge => {
      if (challenge.status === 'completed') {
        const day = new Date(challenge.created_at).getDay()
        challengeData[day === 0 ? 6 : day - 1]++
      }
    })

    // Draw chart
    this.drawBarChart(ctx, {
      labels: days,
      datasets: [
        { label: 'Pomodoros', data: pomodoroData, color: '#e74c3c' },
        { label: 'Challenges', data: challengeData, color: '#3498db' }
      ]
    })
  }

  // Create principle focus chart
  createPrincipleChart() {
    const canvas = document.getElementById('principleChart')
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const { recentPomodoros } = this.dashboardData

    // Count sessions by principle
    const principleCount = {}
    recentPomodoros?.forEach(session => {
      const principle = session.principle_id
      principleCount[principle] = (principleCount[principle] || 0) + 1
    })

    // Get top 5 principles
    const sortedPrinciples = Object.entries(principleCount)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5)

    const labels = sortedPrinciples.map(([id]) => `Principle ${id}`)
    const data = sortedPrinciples.map(([,count]) => count)

    // Draw pie chart
    this.drawPieChart(ctx, { labels, data })
  }

  // Simple bar chart implementation
  drawBarChart(ctx, chartData) {
    const { labels, datasets } = chartData
    const canvas = ctx.canvas
    const padding = 40
    const chartWidth = canvas.width - padding * 2
    const chartHeight = canvas.height - padding * 2

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Find max value
    const maxValue = Math.max(...datasets.flatMap(d => d.data)) || 1

    // Draw bars
    const barWidth = chartWidth / (labels.length * datasets.length + labels.length)
    
    datasets.forEach((dataset, datasetIndex) => {
      dataset.data.forEach((value, index) => {
        const barHeight = (value / maxValue) * chartHeight
        const x = padding + index * (barWidth * datasets.length + 10) + datasetIndex * barWidth
        const y = canvas.height - padding - barHeight

        ctx.fillStyle = dataset.color
        ctx.fillRect(x, y, barWidth, barHeight)

        // Draw value on top
        ctx.fillStyle = '#333'
        ctx.font = '12px Arial'
        ctx.textAlign = 'center'
        ctx.fillText(value, x + barWidth / 2, y - 5)
      })
    })

    // Draw labels
    ctx.fillStyle = '#333'
    ctx.font = '12px Arial'
    ctx.textAlign = 'center'
    labels.forEach((label, index) => {
      const x = padding + index * (barWidth * datasets.length + 10) + (barWidth * datasets.length) / 2
      ctx.fillText(label, x, canvas.height - 10)
    })
  }

  // Simple pie chart implementation
  drawPieChart(ctx, chartData) {
    const { labels, data } = chartData
    const canvas = ctx.canvas
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = Math.min(centerX, centerY) - 20

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const total = data.reduce((sum, value) => sum + value, 0)
    if (total === 0) return

    let currentAngle = -Math.PI / 2
    const colors = ['#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6']

    data.forEach((value, index) => {
      const sliceAngle = (value / total) * 2 * Math.PI

      // Draw slice
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle)
      ctx.lineTo(centerX, centerY)
      ctx.fillStyle = colors[index % colors.length]
      ctx.fill()

      // Draw label
      const labelAngle = currentAngle + sliceAngle / 2
      const labelX = centerX + Math.cos(labelAngle) * (radius * 0.7)
      const labelY = centerY + Math.sin(labelAngle) * (radius * 0.7)
      
      ctx.fillStyle = 'white'
      ctx.font = 'bold 12px Arial'
      ctx.textAlign = 'center'
      ctx.fillText(value, labelX, labelY)

      currentAngle += sliceAngle
    })
  }

  // Update recent activity
  updateRecentActivity() {
    const activityList = document.getElementById('activityList')
    if (!activityList) return

    const { recentPomodoros, recentChallenges } = this.dashboardData
    const activities = []

    // Add pomodoro activities
    recentPomodoros?.forEach(session => {
      activities.push({
        type: 'pomodoro',
        text: `Completed ${session.duration_minutes}min focus session on Principle ${session.principle_id}`,
        date: new Date(session.created_at),
        icon: '🍅'
      })
    })

    // Add challenge activities
    recentChallenges?.forEach(challenge => {
      if (challenge.status === 'completed') {
        activities.push({
          type: 'challenge',
          text: `Completed challenge: "${challenge.challenge_text.substring(0, 50)}..."`,
          date: new Date(challenge.completed_at),
          icon: '🎯'
        })
      }
    })

    // Sort by date
    activities.sort((a, b) => b.date - a.date)

    // Render activities
    if (activities.length === 0) {
      activityList.innerHTML = '<p class="no-activity">No recent activity. Start a Pomodoro session or take a challenge!</p>'
      return
    }

    activityList.innerHTML = activities.slice(0, 10).map(activity => `
      <div class="activity-item">
        <span class="activity-icon">${activity.icon}</span>
        <div class="activity-content">
          <p class="activity-text">${activity.text}</p>
          <span class="activity-date">${this.formatRelativeTime(activity.date)}</span>
        </div>
      </div>
    `).join('')
  }

  // Update achievements
  updateAchievements() {
    const { stats } = this.dashboardData
    if (!stats) return

    // Calculate achievement points
    const points = utils.calculateAchievementPoints(stats)
    const badges = utils.checkNewBadges(stats)

    // Update points display
    const pointsEl = document.getElementById('achievementPoints')
    if (pointsEl) pointsEl.textContent = points

    // Update progress bar
    const progressEl = document.getElementById('achievementProgress')
    if (progressEl) {
      const nextLevel = Math.ceil(points / 1000) * 1000
      const progress = (points % 1000) / 10
      progressEl.style.width = progress + '%'
    }

    // Update badges
    const badgesContainer = document.getElementById('badgesContainer')
    if (badgesContainer) {
      const badgeDefinitions = {
        quote_explorer: { name: 'Quote Explorer', icon: '📚', desc: 'Viewed 10 quotes' },
        quote_master: { name: 'Quote Master', icon: '🎓', desc: 'Viewed 100 quotes' },
        focus_beginner: { name: 'Focus Beginner', icon: '🎯', desc: 'Completed 10 Pomodoros' },
        focus_champion: { name: 'Focus Champion', icon: '🏆', desc: 'Completed 50 Pomodoros' },
        challenger: { name: 'Challenger', icon: '⚔️', desc: 'Completed 10 challenges' },
        challenge_master: { name: 'Challenge Master', icon: '👑', desc: 'Completed 30 challenges' },
        consistent_learner: { name: 'Consistent Learner', icon: '📅', desc: '7-day streak' },
        dedication_hero: { name: 'Dedication Hero', icon: '🔥', desc: '30-day streak' },
        self_aware: { name: 'Self Aware', icon: '🔍', desc: 'Took first assessment' },
        high_achiever: { name: 'High Achiever', icon: '⭐', desc: 'Average score 80%+' }
      }

      badgesContainer.innerHTML = badges.map(badgeId => {
        const badge = badgeDefinitions[badgeId]
        return badge ? `
          <div class="badge earned" title="${badge.desc}">
            <span class="badge-icon">${badge.icon}</span>
            <span class="badge-name">${badge.name}</span>
          </div>
        ` : ''
      }).join('')

      // Add locked badges
      Object.entries(badgeDefinitions).forEach(([id, badge]) => {
        if (!badges.includes(id)) {
          badgesContainer.innerHTML += `
            <div class="badge locked" title="${badge.desc}">
              <span class="badge-icon">🔒</span>
              <span class="badge-name">${badge.name}</span>
            </div>
          `
        }
      })
    }
  }

  // Show loading state
  showLoading() {
    const loading = document.getElementById('dashboardLoading')
    const content = document.getElementById('dashboardContent')
    
    if (loading) loading.style.display = 'flex'
    if (content) content.style.display = 'none'
  }

  // Hide loading state
  hideLoading() {
    const loading = document.getElementById('dashboardLoading')
    const content = document.getElementById('dashboardContent')
    
    if (loading) loading.style.display = 'none'
    if (content) content.style.display = 'block'
  }

  // Show error
  showError(message) {
    const dashboard = document.getElementById('user-dashboard')
    if (dashboard) {
      dashboard.innerHTML = `
        <div class="dashboard-error">
          <i class="fas fa-exclamation-triangle"></i>
          <p>${message}</p>
          <button onclick="location.reload()">Retry</button>
        </div>
      `
    }
  }

  // Hide dashboard
  hideDashboard() {
    const dashboard = document.getElementById('user-dashboard')
    if (dashboard) {
      dashboard.style.display = 'none'
    }
  }

  // Format relative time
  formatRelativeTime(date) {
    const now = new Date()
    const diff = now - date
    const minutes = Math.floor(diff / 60000)
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)

    if (days > 0) return `${days}d ago`
    if (hours > 0) return `${hours}h ago`
    if (minutes > 0) return `${minutes}m ago`
    return 'Just now'
  }
}

// Initialize dashboard
const userDashboard = new UserDashboard()

export default userDashboard