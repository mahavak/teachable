// Supabase Configuration for Teachable App
// Maxwell's "Talent Is Never Enough" Educational Platform

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

// Supabase configuration
const SUPABASE_URL = 'https://vurmpzlwbxqidhkjowzi.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1cm1wemx3YnhxaWRoa2pvd3ppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExMTkyODYsImV4cCI6MjA2NjY5NTI4Nn0.zT7LcBSihZ3GWPnfLLyfk2erfksxNHrz2OEBXLkgE6w'

// Create Supabase client
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// Auth helper functions
export const auth = {
  // Sign up new user
  async signUp(email, password, userData = {}) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: userData
      }
    })
    return { data, error }
  },

  // Sign in user
  async signIn(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    return { data, error }
  },

  // Sign out user
  async signOut() {
    const { error } = await supabase.auth.signOut()
    return { error }
  },

  // Get current user
  async getCurrentUser() {
    const { data: { user } } = await supabase.auth.getUser()
    return user
  },

  // Listen for auth changes
  onAuthStateChange(callback) {
    return supabase.auth.onAuthStateChange(callback)
  }
}

// Database helper functions
export const db = {
  // Profiles
  async getProfile(userId) {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single()
    return { data, error }
  },

  async updateProfile(userId, updates) {
    const { data, error } = await supabase
      .from('profiles')
      .upsert({ id: userId, ...updates })
      .select()
      .single()
    return { data, error }
  },

  // Pomodoro Sessions
  async savePomodoro(session) {
    const user = await auth.getCurrentUser()
    if (!user) throw new Error('User not authenticated')

    const { data, error } = await supabase
      .from('pomodoro_sessions')
      .insert({
        user_id: user.id,
        ...session
      })
      .select()
      .single()
    return { data, error }
  },

  async getPomodoroStats(userId, days = 30) {
    const startDate = new Date()
    startDate.setDate(startDate.getDate() - days)

    const { data, error } = await supabase
      .from('pomodoro_sessions')
      .select('*')
      .eq('user_id', userId)
      .gte('created_at', startDate.toISOString())
      .order('created_at', { ascending: false })
    
    return { data, error }
  },

  // Assessments
  async saveAssessment(assessment) {
    const user = await auth.getCurrentUser()
    if (!user) throw new Error('User not authenticated')

    const { data, error } = await supabase
      .from('assessments')
      .insert({
        user_id: user.id,
        ...assessment
      })
      .select()
      .single()
    return { data, error }
  },

  async getLatestAssessment(userId) {
    const { data, error } = await supabase
      .from('assessments')
      .select('*')
      .eq('user_id', userId)
      .order('completed_at', { ascending: false })
      .limit(1)
      .single()
    return { data, error }
  },

  // Challenges
  async saveChallenge(challenge) {
    const user = await auth.getCurrentUser()
    if (!user) throw new Error('User not authenticated')

    const { data, error } = await supabase
      .from('user_challenges')
      .upsert({
        user_id: user.id,
        ...challenge
      })
      .select()
      .single()
    return { data, error }
  },

  async getChallengeStats(userId, days = 30) {
    const startDate = new Date()
    startDate.setDate(startDate.getDate() - days)

    const { data, error } = await supabase
      .from('user_challenges')
      .select('*')
      .eq('user_id', userId)
      .gte('created_at', startDate.toISOString())
      .order('created_at', { ascending: false })
    
    return { data, error }
  },

  // Growth Tracking
  async saveGrowthEntry(entry) {
    const user = await auth.getCurrentUser()
    if (!user) throw new Error('User not authenticated')

    const { data, error } = await supabase
      .from('growth_entries')
      .upsert({
        user_id: user.id,
        ...entry
      })
      .select()
      .single()
    return { data, error }
  },

  async getGrowthData(userId, principleId = null, days = 90) {
    const startDate = new Date()
    startDate.setDate(startDate.getDate() - days)

    let query = supabase
      .from('growth_entries')
      .select('*')
      .eq('user_id', userId)
      .gte('entry_date', startDate.toISOString().split('T')[0])
      .order('entry_date', { ascending: true })

    if (principleId) {
      query = query.eq('principle_id', principleId)
    }

    const { data, error } = await query
    return { data, error }
  },

  // Goals
  async saveGoal(goal) {
    const user = await auth.getCurrentUser()
    if (!user) throw new Error('User not authenticated')

    const { data, error } = await supabase
      .from('user_goals')
      .insert({
        user_id: user.id,
        ...goal
      })
      .select()
      .single()
    return { data, error }
  },

  async updateGoal(goalId, updates) {
    const { data, error } = await supabase
      .from('user_goals')
      .update(updates)
      .eq('id', goalId)
      .select()
      .single()
    return { data, error }
  },

  async getUserGoals(userId) {
    const { data, error } = await supabase
      .from('user_goals')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
    return { data, error }
  },

  // Favorite Quotes
  async saveFavoriteQuote(quote) {
    const user = await auth.getCurrentUser()
    if (!user) throw new Error('User not authenticated')

    const { data, error } = await supabase
      .from('favorite_quotes')
      .upsert({
        user_id: user.id,
        ...quote
      })
      .select()
      .single()
    return { data, error }
  },

  async removeFavoriteQuote(quoteText, quoteAuthor) {
    const user = await auth.getCurrentUser()
    if (!user) throw new Error('User not authenticated')

    const { data, error } = await supabase
      .from('favorite_quotes')
      .delete()
      .eq('user_id', user.id)
      .eq('quote_text', quoteText)
      .eq('quote_author', quoteAuthor)
    return { data, error }
  },

  async getFavoriteQuotes(userId) {
    const { data, error } = await supabase
      .from('favorite_quotes')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
    return { data, error }
  },

  // Quote History
  async saveQuoteView(quote) {
    const user = await auth.getCurrentUser()
    if (!user) return { data: null, error: null } // Allow anonymous usage

    const { data, error } = await supabase
      .from('quote_history')
      .insert({
        user_id: user.id,
        ...quote
      })
      .select()
      .single()
    return { data, error }
  },

  async getQuoteHistory(userId, limit = 50) {
    const { data, error } = await supabase
      .from('quote_history')
      .select('*')
      .eq('user_id', userId)
      .order('viewed_at', { ascending: false })
      .limit(limit)
    return { data, error }
  },

  // User Statistics
  async getUserStats(userId) {
    const { data, error } = await supabase
      .from('user_stats')
      .select('*')
      .eq('user_id', userId)
      .single()
    
    if (error && error.code === 'PGRST116') {
      // No stats record exists, create one
      const { data: newStats, error: createError } = await supabase
        .from('user_stats')
        .insert({ user_id: userId })
        .select()
        .single()
      return { data: newStats, error: createError }
    }
    
    return { data, error }
  },

  async updateUserStats(userId, updates) {
    const { data, error } = await supabase
      .from('user_stats')
      .upsert({
        user_id: userId,
        ...updates,
        updated_at: new Date().toISOString()
      })
      .select()
      .single()
    return { data, error }
  },

  async incrementStat(userId, statName, increment = 1) {
    const user = await auth.getCurrentUser()
    if (!user) return { data: null, error: null }

    // Get current stats
    const { data: currentStats } = await this.getUserStats(userId)
    
    const updates = {
      [statName]: (currentStats?.[statName] || 0) + increment
    }

    return await this.updateUserStats(userId, updates)
  },

  // Dashboard data
  async getDashboardData(userId) {
    const [
      statsResult,
      recentPomodoros,
      recentChallenges,
      latestAssessment,
      favoriteQuotes
    ] = await Promise.all([
      this.getUserStats(userId),
      this.getPomodoroStats(userId, 7),
      this.getChallengeStats(userId, 7),
      this.getLatestAssessment(userId),
      this.getFavoriteQuotes(userId)
    ])

    return {
      stats: statsResult.data,
      recentPomodoros: recentPomodoros.data || [],
      recentChallenges: recentChallenges.data || [],
      latestAssessment: latestAssessment.data,
      favoriteQuotes: favoriteQuotes.data || [],
      errors: [
        statsResult.error,
        recentPomodoros.error,
        recentChallenges.error,
        latestAssessment.error,
        favoriteQuotes.error
      ].filter(Boolean)
    }
  }
}

// Real-time subscriptions
export const realtime = {
  // Subscribe to user stats changes
  subscribeToUserStats(userId, callback) {
    return supabase
      .channel(`user_stats_${userId}`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'user_stats',
          filter: `user_id=eq.${userId}`
        },
        callback
      )
      .subscribe()
  },

  // Subscribe to new achievements
  subscribeToAchievements(userId, callback) {
    return supabase
      .channel(`achievements_${userId}`)
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'user_stats',
          filter: `user_id=eq.${userId}`
        },
        (payload) => {
          // Check if badges_earned array changed
          if (payload.new.badges_earned !== payload.old.badges_earned) {
            callback(payload.new.badges_earned)
          }
        }
      )
      .subscribe()
  }
}

// Utility functions
export const utils = {
  // Check if user is authenticated
  async isAuthenticated() {
    const user = await auth.getCurrentUser()
    return !!user
  },

  // Get or create user profile
  async ensureProfile(userData = {}) {
    const user = await auth.getCurrentUser()
    if (!user) throw new Error('User not authenticated')

    const { data: profile, error } = await db.getProfile(user.id)
    
    if (error && error.code === 'PGRST116') {
      // Profile doesn't exist, create it
      return await db.updateProfile(user.id, {
        username: userData.username || user.email?.split('@')[0],
        full_name: userData.full_name || user.user_metadata?.full_name,
        ...userData
      })
    }
    
    return { data: profile, error }
  },

  // Format date for database
  formatDate(date) {
    return date.toISOString().split('T')[0]
  },

  // Calculate achievement points
  calculateAchievementPoints(stats) {
    let points = 0
    points += (stats.quotes_viewed || 0) * 1
    points += (stats.total_pomodoros || 0) * 5
    points += (stats.total_challenges_completed || 0) * 10
    points += (stats.assessments_taken || 0) * 50
    points += (stats.daily_visit_streak || 0) * 3
    return points
  },

  // Check for new badges
  checkNewBadges(stats) {
    const badges = []
    
    if (stats.quotes_viewed >= 10) badges.push('quote_explorer')
    if (stats.quotes_viewed >= 100) badges.push('quote_master')
    if (stats.total_pomodoros >= 10) badges.push('focus_beginner')
    if (stats.total_pomodoros >= 50) badges.push('focus_champion')
    if (stats.total_challenges_completed >= 10) badges.push('challenger')
    if (stats.total_challenges_completed >= 30) badges.push('challenge_master')
    if (stats.daily_visit_streak >= 7) badges.push('consistent_learner')
    if (stats.daily_visit_streak >= 30) badges.push('dedication_hero')
    if (stats.assessments_taken >= 1) badges.push('self_aware')
    if (stats.average_score >= 80) badges.push('high_achiever')
    
    return badges
  }
}

// Language and translation support
export const i18nDb = {
  // Get translation from database
  async getTranslation(key, languageCode = 'en') {
    const { data, error } = await supabase
      .rpc('get_translation', {
        p_key: key,
        p_language_code: languageCode
      })
    
    if (error) {
      console.warn('Translation fetch error:', error)
      return key // Return key as fallback
    }
    
    return data || key
  },

  // Get principle translation
  async getPrincipleTranslation(principleId, languageCode = 'en') {
    const { data, error } = await supabase
      .rpc('get_principle_translation', {
        p_principle_id: principleId,
        p_language_code: languageCode
      })
    
    if (error) {
      console.warn('Principle translation fetch error:', error)
      return null
    }
    
    return data && data.length > 0 ? data[0] : null
  },

  // Get all principle translations for a language
  async getAllPrincipleTranslations(languageCode = 'en') {
    const { data, error } = await supabase
      .from('principle_translations')
      .select('*')
      .eq('language_code', languageCode)
      .order('principle_id')
    
    return { data, error }
  },

  // Get challenge translation
  async getChallengeTranslation(challengeId, languageCode = 'en') {
    const { data, error } = await supabase
      .from('challenge_translations')
      .select('*')
      .eq('challenge_id', challengeId)
      .eq('language_code', languageCode)
      .single()
    
    if (error && error.code === 'PGRST116') {
      // No translation found, try English fallback
      const { data: fallback, error: fallbackError } = await supabase
        .from('challenge_translations')
        .select('*')
        .eq('challenge_id', challengeId)
        .eq('language_code', 'en')
        .single()
      
      return { data: fallback, error: fallbackError }
    }
    
    return { data, error }
  },

  // Get quote translation
  async getQuoteTranslation(quoteId, languageCode = 'en') {
    const { data, error } = await supabase
      .from('quote_translations')
      .select('*')
      .eq('quote_id', quoteId)
      .eq('language_code', languageCode)
      .single()
    
    if (error && error.code === 'PGRST116') {
      // No translation found, try English fallback
      const { data: fallback, error: fallbackError } = await supabase
        .from('quote_translations')
        .select('*')
        .eq('quote_id', quoteId)
        .eq('language_code', 'en')
        .single()
      
      return { data: fallback, error: fallbackError }
    }
    
    return { data, error }
  },

  // Update user's preferred language
  async updateUserLanguage(userId, languageCode) {
    const { data, error } = await supabase
      .from('profiles')
      .update({ preferred_language: languageCode })
      .eq('id', userId)
      .select()
      .single()
    
    return { data, error }
  },

  // Get user's preferred language
  async getUserLanguage(userId) {
    const { data, error } = await supabase
      .from('profiles')
      .select('preferred_language')
      .eq('id', userId)
      .single()
    
    if (error) {
      return 'en' // Default to English
    }
    
    return data?.preferred_language || 'en'
  }
}

// Export everything
export default {
  supabase,
  auth,
  db,
  realtime,
  utils,
  i18nDb
}