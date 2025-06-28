// Authentication Manager for Teachable App
// Handles user login, signup, and session management

import { auth, db, utils } from './supabase-config.js'

class AuthManager {
  constructor() {
    this.currentUser = null
    this.authCallbacks = []
    this.init()
  }

  async init() {
    // Get current user
    this.currentUser = await auth.getCurrentUser()
    
    // Listen for auth state changes
    auth.onAuthStateChange((event, session) => {
      this.currentUser = session?.user || null
      this.handleAuthStateChange(event, session)
    })

    // Show auth UI if needed
    this.updateAuthUI()
  }

  // Handle authentication state changes
  async handleAuthStateChange(event, session) {
    console.log('Auth state changed:', event, session)
    
    if (event === 'SIGNED_IN') {
      await this.onUserSignedIn(session.user)
    } else if (event === 'SIGNED_OUT') {
      this.onUserSignedOut()
    }

    // Notify callbacks
    this.authCallbacks.forEach(callback => callback(this.currentUser))
    
    // Update UI
    this.updateAuthUI()
  }

  // User signed in
  async onUserSignedIn(user) {
    try {
      // Ensure user profile exists
      await utils.ensureProfile()
      
      // Initialize user stats if needed
      await db.getUserStats(user.id)
      
      // Update last visit
      await db.updateUserStats(user.id, {
        last_visit_date: utils.formatDate(new Date()),
        total_login_days: db.getUserStats(user.id).then(stats => 
          (stats.data?.total_login_days || 0) + 1
        )
      })

      this.showToast('Welcome back!', 'success')
    } catch (error) {
      console.error('Error on sign in:', error)
    }
  }

  // User signed out
  onUserSignedOut() {
    this.showToast('Signed out successfully', 'info')
  }

  // Sign up new user
  async signUp(email, password, userData = {}) {
    try {
      const { data, error } = await auth.signUp(email, password, userData)
      
      if (error) {
        this.showToast(error.message, 'error')
        return { success: false, error }
      }

      if (data.user && !data.user.email_confirmed_at) {
        this.showToast('Please check your email to confirm your account', 'info')
      }

      return { success: true, data }
    } catch (error) {
      console.error('Sign up error:', error)
      this.showToast('Failed to create account', 'error')
      return { success: false, error }
    }
  }

  // Sign in user
  async signIn(email, password) {
    try {
      const { data, error } = await auth.signIn(email, password)
      
      if (error) {
        this.showToast(error.message, 'error')
        return { success: false, error }
      }

      return { success: true, data }
    } catch (error) {
      console.error('Sign in error:', error)
      this.showToast('Failed to sign in', 'error')
      return { success: false, error }
    }
  }

  // Sign out user
  async signOut() {
    try {
      const { error } = await auth.signOut()
      
      if (error) {
        this.showToast(error.message, 'error')
        return { success: false, error }
      }

      return { success: true }
    } catch (error) {
      console.error('Sign out error:', error)
      this.showToast('Failed to sign out', 'error')
      return { success: false, error }
    }
  }

  // Get current user
  getCurrentUser() {
    return this.currentUser
  }

  // Check if user is authenticated
  isAuthenticated() {
    return !!this.currentUser
  }

  // Add auth state change callback
  onAuthStateChange(callback) {
    this.authCallbacks.push(callback)
    
    // Return unsubscribe function
    return () => {
      const index = this.authCallbacks.indexOf(callback)
      if (index > -1) {
        this.authCallbacks.splice(index, 1)
      }
    }
  }

  // Update authentication UI
  updateAuthUI() {
    const authButtons = document.querySelector('.auth-buttons')
    const userProfile = document.querySelector('.user-profile')
    
    if (this.isAuthenticated()) {
      // User is signed in
      if (authButtons) authButtons.style.display = 'none'
      if (userProfile) {
        userProfile.style.display = 'flex'
        this.updateUserProfileUI()
      }
    } else {
      // User is not signed in
      if (authButtons) authButtons.style.display = 'flex'
      if (userProfile) userProfile.style.display = 'none'
    }
  }

  // Update user profile UI
  async updateUserProfileUI() {
    if (!this.currentUser) return

    try {
      const { data: profile } = await db.getProfile(this.currentUser.id)
      const { data: stats } = await db.getUserStats(this.currentUser.id)

      // Update profile elements
      const usernameEl = document.querySelector('.user-username')
      const avatarEl = document.querySelector('.user-avatar')
      const statsEl = document.querySelector('.user-stats-summary')

      if (usernameEl) {
        usernameEl.textContent = profile?.username || profile?.full_name || this.currentUser.email
      }

      if (avatarEl) {
        if (profile?.avatar_url) {
          avatarEl.src = profile.avatar_url
        } else {
          // Use initials as fallback
          const initials = (profile?.full_name || this.currentUser.email)
            .split(' ')
            .map(word => word[0])
            .join('')
            .toUpperCase()
            .slice(0, 2)
          avatarEl.textContent = initials
        }
      }

      if (statsEl && stats) {
        statsEl.innerHTML = `
          <span class="stat-item">🍅 ${stats.total_pomodoros}</span>
          <span class="stat-item">🏆 ${stats.total_challenges_completed}</span>
          <span class="stat-item">🔥 ${stats.daily_visit_streak}</span>
        `
      }
    } catch (error) {
      console.error('Error updating user profile UI:', error)
    }
  }

  // Show authentication modal
  showAuthModal(mode = 'signin') {
    const modal = this.createAuthModal(mode)
    document.body.appendChild(modal)
    modal.style.display = 'flex'
  }

  // Create authentication modal
  createAuthModal(mode) {
    const modal = document.createElement('div')
    modal.className = 'auth-modal'
    modal.innerHTML = `
      <div class="modal-backdrop"></div>
      <div class="modal-content">
        <div class="modal-header">
          <h2>${mode === 'signin' ? 'Sign In' : 'Create Account'}</h2>
          <button class="close-btn">&times;</button>
        </div>
        <div class="modal-body">
          <form class="auth-form">
            ${mode === 'signup' ? `
              <div class="form-group">
                <label for="fullName">Full Name</label>
                <input type="text" id="fullName" name="fullName" placeholder="Enter your full name">
              </div>
            ` : ''}
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required>
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" id="password" name="password" placeholder="Enter your password" required>
            </div>
            <button type="submit" class="auth-submit-btn">
              ${mode === 'signin' ? 'Sign In' : 'Create Account'}
            </button>
          </form>
          <div class="auth-switch">
            ${mode === 'signin' 
              ? `Don't have an account? <a href="#" class="switch-mode">Sign up</a>`
              : `Already have an account? <a href="#" class="switch-mode">Sign in</a>`
            }
          </div>
        </div>
      </div>
    `

    // Add event listeners
    const closeBtn = modal.querySelector('.close-btn')
    const backdrop = modal.querySelector('.modal-backdrop')
    const form = modal.querySelector('.auth-form')
    const switchLink = modal.querySelector('.switch-mode')

    closeBtn.addEventListener('click', () => this.closeAuthModal(modal))
    backdrop.addEventListener('click', () => this.closeAuthModal(modal))
    
    switchLink.addEventListener('click', (e) => {
      e.preventDefault()
      this.closeAuthModal(modal)
      this.showAuthModal(mode === 'signin' ? 'signup' : 'signin')
    })

    form.addEventListener('submit', async (e) => {
      e.preventDefault()
      await this.handleAuthForm(e.target, mode, modal)
    })

    return modal
  }

  // Handle auth form submission
  async handleAuthForm(form, mode, modal) {
    const formData = new FormData(form)
    const email = formData.get('email')
    const password = formData.get('password')
    const fullName = formData.get('fullName')

    const submitBtn = form.querySelector('.auth-submit-btn')
    submitBtn.disabled = true
    submitBtn.textContent = mode === 'signin' ? 'Signing in...' : 'Creating account...'

    try {
      let result
      if (mode === 'signin') {
        result = await this.signIn(email, password)
      } else {
        result = await this.signUp(email, password, { full_name: fullName })
      }

      if (result.success) {
        this.closeAuthModal(modal)
      }
    } finally {
      submitBtn.disabled = false
      submitBtn.textContent = mode === 'signin' ? 'Sign In' : 'Create Account'
    }
  }

  // Close authentication modal
  closeAuthModal(modal) {
    modal.style.display = 'none'
    document.body.removeChild(modal)
  }

  // Show toast notification
  showToast(message, type = 'info') {
    // Try to use existing toast system
    if (window.showToast) {
      window.showToast(message, type)
      return
    }

    // Create simple toast
    const toast = document.createElement('div')
    toast.className = `auth-toast auth-toast-${type}`
    toast.textContent = message
    toast.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 12px 24px;
      border-radius: 8px;
      color: white;
      font-weight: 500;
      z-index: 10000;
      transform: translateX(400px);
      transition: transform 0.3s ease;
    `

    // Set background color based on type
    const colors = {
      success: '#27ae60',
      error: '#e74c3c',
      warning: '#f39c12',
      info: '#3498db'
    }
    toast.style.backgroundColor = colors[type] || colors.info

    document.body.appendChild(toast)

    // Animate in
    setTimeout(() => {
      toast.style.transform = 'translateX(0)'
    }, 100)

    // Remove after 3 seconds
    setTimeout(() => {
      toast.style.transform = 'translateX(400px)'
      setTimeout(() => {
        if (toast.parentNode) {
          document.body.removeChild(toast)
        }
      }, 300)
    }, 3000)
  }
}

// Create global instance
const authManager = new AuthManager()

// Export for use in other modules
export default authManager

// Also attach to window for global access
window.authManager = authManager