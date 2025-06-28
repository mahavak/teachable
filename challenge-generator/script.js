// Maxwell's 13 Principles Daily Challenge Generator
class MaxwellChallengeGenerator {
    constructor() {
        this.principles = this.initializePrinciples();
        this.badges = this.initializeBadges();
        this.userProgress = this.loadProgress();
        this.currentChallenge = null;
        
        this.initializeEventListeners();
        this.generateDailyChallenge();
        this.updateUI();
        this.renderPrinciples();
        this.renderBadges();
    }

    initializePrinciples() {
        return {
            belief: {
                name: "Belief Lifts Your Talent",
                icon: "💫",
                challenges: {
                    beginner: [
                        "Write down 3 specific talents you possess and one way each could help others today",
                        "Replace one negative self-talk phrase with a positive affirmation about your abilities",
                        "Share a compliment about someone else's talent with them directly",
                        "Identify one limiting belief you have and research evidence that contradicts it",
                        "Create a vision board with images representing your potential achievements",
                        "Read success stories of people who overcame similar challenges to yours",
                        "Practice power posing for 2 minutes before an important task",
                        "Write a letter to yourself from the perspective of your future successful self",
                        "Ask a trusted friend to list your top 5 strengths",
                        "Start your day by stating 'I believe in my ability to grow and improve'"
                    ],
                    intermediate: [
                        "Challenge yourself to try something you've always said you 'can't' do",
                        "Create a 30-day belief-building routine and start today",
                        "Mentor someone else in an area where you have talent",
                        "Document daily evidence of your growth and capabilities for one week",
                        "Reframe a recent failure as a learning opportunity and extract 3 lessons",
                        "Set a goal that requires you to believe in abilities you haven't fully developed yet",
                        "Practice visualization of yourself succeeding at your biggest current challenge",
                        "Seek feedback from someone whose opinion you value about your potential",
                        "Create a 'belief elevator pitch' - 30 seconds on why you believe in your potential",
                        "Join a community or group related to a talent you want to develop"
                    ],
                    advanced: [
                        "Design and implement a system to track and celebrate small daily wins",
                        "Become a belief advocate - help 3 people identify and believe in their hidden talents",
                        "Create a comprehensive plan to turn your strongest talent into your greatest impact",
                        "Establish a mastermind group focused on mutual belief and talent development",
                        "Write and publish content about the power of belief in talent development",
                        "Develop a signature method or approach based on your unique combination of talents",
                        "Coach someone to overcome a limiting belief you once held yourself",
                        "Create a belief-based decision-making framework for your major life choices",
                        "Launch a project that showcases your talent while serving others",
                        "Establish yourself as a thought leader in your area of greatest talent"
                    ]
                }
            },
            passion: {
                name: "Passion Energizes Your Talent",
                icon: "🔥",
                challenges: {
                    beginner: [
                        "Identify one activity that makes you lose track of time and do it today",
                        "Share your enthusiasm about something you love with someone new",
                        "Replace 30 minutes of mindless scrolling with pursuing a personal interest",
                        "Write down what you would do if you knew you couldn't fail",
                        "Connect with one person who shares your passion online or in person",
                        "Create a playlist that energizes you and listen to it during work",
                        "Spend 15 minutes learning something new about your favorite subject",
                        "Teach someone else something you're passionate about",
                        "Start your day by reading or watching content related to your passion",
                        "Notice and write down moments when you feel most energized today"
                    ],
                    intermediate: [
                        "Dedicate one hour daily this week to developing your passion",
                        "Find ways to incorporate your passion into your current work or responsibilities",
                        "Connect with a mentor or expert in your area of passion",
                        "Start a side project related to your passion with a specific deadline",
                        "Join or create a group of people who share your passion",
                        "Set a challenging but achievable goal related to your passion for next month",
                        "Document your passion journey through blogging, vlogging, or journaling",
                        "Volunteer your skills in your area of passion for a cause you care about",
                        "Attend an event, workshop, or conference related to your passion",
                        "Create a passion-driven morning routine that sets the tone for your day"
                    ],
                    advanced: [
                        "Design a career transition plan that aligns your work with your deepest passions",
                        "Launch a passion project that could potentially become a revenue stream",
                        "Become a community leader in your area of passion",
                        "Create educational content that helps others discover and develop their passions",
                        "Establish partnerships with others whose passions complement yours",
                        "Develop a unique methodology that combines your talents with your passions",
                        "Speak at events about the intersection of passion and talent",
                        "Create a scholarship or program that helps others pursue their passions",
                        "Write a comprehensive guide about pursuing passion in your field",
                        "Build a sustainable business model around your greatest passion"
                    ]
                }
            },
            initiative: {
                name: "Initiative Activates Your Talent",
                icon: "🚀",
                challenges: {
                    beginner: [
                        "Identify one problem you've been thinking about and take the first small step to address it",
                        "Volunteer for a task that no one else wants to do",
                        "Reach out to someone you admire and ask for a brief conversation",
                        "Start a project you've been putting off for 'someday'",
                        "Suggest an improvement to a process at work or in your community",
                        "Take the initiative to organize a social gathering with friends or colleagues",
                        "Research and apply for an opportunity you've been considering",
                        "Create something new instead of consuming content for one hour today",
                        "Take the first step toward learning a skill you've always wanted to develop",
                        "Initiate a difficult conversation you've been avoiding"
                    ],
                    intermediate: [
                        "Propose and lead a new initiative at work or in your community",
                        "Create a 30-day challenge for yourself and start today",
                        "Establish a new routine that moves you closer to your biggest goal",
                        "Take initiative to solve a problem that affects others, not just yourself",
                        "Start a side hustle or passion project with a concrete launch date",
                        "Initiate a collaboration with someone in your network",
                        "Take the lead on organizing an event or gathering",
                        "Create and share original content in your area of expertise",
                        "Initiate a mentorship relationship (as mentor or mentee)",
                        "Take on additional responsibility that showcases your talents"
                    ],
                    advanced: [
                        "Launch an innovative solution to a significant problem in your industry",
                        "Initiate a cross-functional project that creates value for multiple stakeholders",
                        "Start a movement or community around a cause you're passionate about",
                        "Take initiative to create new opportunities where none existed before",
                        "Develop and pitch a new business concept or major initiative",
                        "Initiate strategic partnerships that leverage your unique talents",
                        "Create a framework or system that others can use to develop initiative",
                        "Take the lead on a high-visibility project that showcases your capabilities",
                        "Initiate thought leadership by creating and sharing groundbreaking content",
                        "Start an organization, company, or foundation that amplifies your impact"
                    ]
                }
            },
            focus: {
                name: "Focus Directs Your Talent",
                icon: "🎯",
                challenges: {
                    beginner: [
                        "Choose your top 3 priorities for today and focus only on those",
                        "Practice single-tasking for one hour - do only one thing at a time",
                        "Turn off all notifications for 2 hours while working on your most important task",
                        "Create a distraction-free workspace for your most important work",
                        "Use the Pomodoro Technique for one work session today",
                        "Identify and eliminate your biggest time-waster for the day",
                        "Set a specific outcome for each meeting or work session",
                        "Practice saying 'no' to one request that doesn't align with your priorities",
                        "Create a morning routine that sets clear intentions for your day",
                        "Review and refine your to-do list to include only high-impact activities"
                    ],
                    intermediate: [
                        "Implement a weekly planning session to align your activities with your goals",
                        "Create theme days where each day focuses on specific types of work",
                        "Establish boundaries to protect your peak performance hours",
                        "Use time-blocking to dedicate specific hours to your most important work",
                        "Conduct a time audit for one week to identify where your attention really goes",
                        "Create a 'stop doing' list of activities that don't serve your main objectives",
                        "Implement a digital detox routine to improve your ability to focus deeply",
                        "Establish rituals that help you transition into deep work mode",
                        "Create accountability systems to maintain focus on your most important goals",
                        "Design your environment to naturally support focused work"
                    ],
                    advanced: [
                        "Develop a personal focus methodology that you can teach to others",
                        "Create a comprehensive system for managing attention across multiple major projects",
                        "Implement advanced focus techniques like deep work blocks and attention training",
                        "Design a life architecture that systematically eliminates focus-destroying activities",
                        "Become a focus coach or mentor for others struggling with distraction",
                        "Create tools or apps that help others improve their focus",
                        "Write about focus strategies and share your insights with a broader audience",
                        "Establish a reputation as someone who consistently delivers focused, high-quality work",
                        "Develop focus-based decision-making criteria for all major life choices",
                        "Create a focus-centered business model or career that leverages your ability to concentrate"
                    ]
                }
            },
            preparation: {
                name: "Preparation Positions Your Talent",
                icon: "📚",
                challenges: {
                    beginner: [
                        "Spend 30 minutes today preparing for tomorrow's most important task",
                        "Create a simple checklist for a recurring activity to improve your consistency",
                        "Research someone you admire and study how they prepared for success",
                        "Organize your workspace to support your most important work",
                        "Prepare thoughtful questions before your next meeting or conversation",
                        "Create a simple morning routine that prepares you for a successful day",
                        "Spend 15 minutes learning about a topic that will help you next week",
                        "Prepare your meals or clothes the night before to save decision energy",
                        "Create a backup plan for your most important project or goal",
                        "Review and update your skills inventory and identify areas for development"
                    ],
                    intermediate: [
                        "Create a comprehensive preparation routine for important presentations or meetings",
                        "Develop a systematic approach to learning new skills relevant to your goals",
                        "Establish a weekly review process to assess and plan your preparation needs",
                        "Create templates and systems that help you prepare more efficiently",
                        "Build a personal library of resources related to your areas of expertise",
                        "Develop scenario planning skills by preparing for multiple possible outcomes",
                        "Create a mentorship or learning plan with specific preparation milestones",
                        "Establish preparation rituals for high-stakes situations",
                        "Build relationships and networks that support your preparation efforts",
                        "Create a preparation dashboard to track your readiness for upcoming challenges"
                    ],
                    advanced: [
                        "Develop a signature preparation methodology that others can learn from",
                        "Create comprehensive preparation systems for complex, multi-faceted projects",
                        "Become known as someone who is always exceptionally well-prepared",
                        "Develop preparation training programs for your team or organization",
                        "Create tools and resources that help others improve their preparation",
                        "Establish yourself as a thought leader on the topic of preparation and readiness",
                        "Develop preparation-based consulting services or expertise",
                        "Create comprehensive contingency plans for major life and career scenarios",
                        "Build preparation into your personal brand and professional reputation",
                        "Develop advanced preparation techniques that give you a competitive advantage"
                    ]
                }
            },
            practice: {
                name: "Practice Sharpens Your Talent",
                icon: "⚡",
                challenges: {
                    beginner: [
                        "Practice your most important skill for 15 focused minutes today",
                        "Identify one aspect of your talent that needs improvement and practice it",
                        "Create a simple daily practice routine for something you want to get better at",
                        "Ask for feedback on your performance from someone you trust",
                        "Practice a skill in a low-stakes environment before using it in a high-stakes situation",
                        "Keep a practice journal to track your improvements and insights",
                        "Find a practice partner or accountability buddy for skill development",
                        "Break down a complex skill into smaller components and practice one today",
                        "Practice a skill you're already good at to maintain and improve it",
                        "Set a specific practice goal for this week and track your progress"
                    ],
                    intermediate: [
                        "Implement deliberate practice techniques to improve your most important skill",
                        "Create a systematic practice schedule that covers all aspects of your talent",
                        "Seek out challenging practice opportunities that stretch your abilities",
                        "Develop a feedback system to monitor and adjust your practice effectiveness",
                        "Practice teaching your skill to others as a way to deepen your own mastery",
                        "Create practice scenarios that simulate real-world challenges",
                        "Establish practice partnerships with others who share your commitment to improvement",
                        "Document and analyze your practice sessions to identify patterns and insights",
                        "Set progressive practice goals that gradually increase in difficulty",
                        "Create a practice environment that optimizes your learning and improvement"
                    ],
                    advanced: [
                        "Develop a comprehensive practice philosophy and methodology",
                        "Create practice programs and curricula for others in your field",
                        "Establish yourself as a practice coach or consultant",
                        "Conduct research on practice effectiveness in your area of expertise",
                        "Create innovative practice tools and techniques",
                        "Build a community of practice around your area of talent",
                        "Write about practice strategies and share your insights publicly",
                        "Develop practice-based business models or career opportunities",
                        "Create measurement systems to quantify practice effectiveness",
                        "Establish practice standards and certifications in your field"
                    ]
                }
            },
            perseverance: {
                name: "Perseverance Sustains Your Talent",
                icon: "💪",
                challenges: {
                    beginner: [
                        "Continue working on something difficult for 10 more minutes when you want to quit",
                        "Identify a challenge you're facing and write down 3 reasons to keep going",
                        "Share your current struggle with someone who can offer encouragement",
                        "Create a motivational quote or image that inspires you to persist",
                        "Break a large, overwhelming task into smaller, manageable steps",
                        "Celebrate a small win or progress you've made toward a difficult goal",
                        "Practice positive self-talk when facing a challenging situation",
                        "Remember and write about a time when your perseverance paid off",
                        "Create a support system for your most challenging current goal",
                        "Set a small, achievable milestone to maintain momentum on a difficult project"
                    ],
                    intermediate: [
                        "Develop a systematic approach to overcoming obstacles and setbacks",
                        "Create a perseverance plan for your most challenging long-term goal",
                        "Build resilience by intentionally taking on progressively harder challenges",
                        "Establish accountability systems that help you persist when motivation wanes",
                        "Create a collection of strategies for maintaining momentum during difficult periods",
                        "Practice reframing setbacks as learning opportunities and stepping stones",
                        "Develop emotional regulation skills to manage frustration and disappointment",
                        "Create persistence rituals and habits that support long-term effort",
                        "Build a network of mentors and peers who model perseverance",
                        "Establish reward systems that celebrate persistence, not just outcomes"
                    ],
                    advanced: [
                        "Develop a comprehensive philosophy and framework for sustaining long-term effort",
                        "Become a mentor or coach for others struggling with perseverance",
                        "Create systems and tools that help others develop persistence",
                        "Write about your perseverance journey and share insights publicly",
                        "Develop perseverance-based leadership principles and practices",
                        "Create training programs focused on building resilience and persistence",
                        "Establish yourself as a thought leader on overcoming adversity",
                        "Develop business models or careers that leverage your persistence",
                        "Create measurement systems for tracking and improving perseverance",
                        "Build communities focused on mutual support and sustained effort"
                    ]
                }
            },
            courage: {
                name: "Courage Tests Your Talent",
                icon: "🦁",
                challenges: {
                    beginner: [
                        "Speak up in a meeting or conversation where you usually stay quiet",
                        "Try something new that you've been afraid to attempt",
                        "Have an honest conversation about something important to you",
                        "Apply for an opportunity that feels slightly out of reach",
                        "Share your opinion on a topic you care about",
                        "Take a small risk that could lead to personal or professional growth",
                        "Stand up for someone or something you believe in",
                        "Ask for help with something you've been struggling with alone",
                        "Admit a mistake and take responsibility for it",
                        "Challenge yourself to do something that makes you slightly uncomfortable"
                    ],
                    intermediate: [
                        "Take on a challenging project that requires you to develop new skills",
                        "Have a difficult conversation that you've been avoiding",
                        "Apply for a position or opportunity that seems ambitious for your current level",
                        "Share your work or ideas publicly, even if they're not perfect",
                        "Take a calculated risk that could significantly advance your goals",
                        "Volunteer to lead a project or initiative that others find intimidating",
                        "Speak at an event or in a forum about something you're passionate about",
                        "Start a venture or project with uncertain outcomes",
                        "Challenge conventional thinking in your field or organization",
                        "Take a stand on an issue that matters to you, even if it's unpopular"
                    ],
                    advanced: [
                        "Launch an innovative project that challenges industry norms",
                        "Take on leadership roles in high-stakes, high-visibility situations",
                        "Become an advocate for significant change in your field or community",
                        "Start a business or organization that addresses a complex problem",
                        "Take principled stands that may involve personal or professional cost",
                        "Mentor others in developing courage and taking meaningful risks",
                        "Create platforms or opportunities for others to exercise courage",
                        "Develop courage-based decision-making frameworks",
                        "Write or speak about the role of courage in talent development",
                        "Build a reputation as someone who courageously pursues meaningful change"
                    ]
                }
            },
            teachability: {
                name: "Teachability Expands Your Talent",
                icon: "🌱",
                challenges: {
                    beginner: [
                        "Ask someone for feedback on something you're working on",
                        "Admit when you don't know something instead of pretending you do",
                        "Learn one new thing related to your area of expertise today",
                        "Ask thoughtful questions in a conversation instead of just sharing your opinions",
                        "Read an article or watch a video that challenges your current thinking",
                        "Practice active listening in your next important conversation",
                        "Thank someone who has taught you something valuable",
                        "Identify a skill gap you have and take the first step to address it",
                        "Join a learning community or group related to your interests",
                        "Replace defensive responses with curious questions when receiving feedback"
                    ],
                    intermediate: [
                        "Seek out mentors or advisors who can help you grow",
                        "Create a systematic learning plan for developing your talents",
                        "Regularly ask for feedback and act on the insights you receive",
                        "Study the methods and approaches of experts in your field",
                        "Practice intellectual humility by questioning your own assumptions",
                        "Engage with people who have different perspectives than your own",
                        "Create learning goals that stretch your current capabilities",
                        "Develop a growth mindset approach to challenges and setbacks",
                        "Establish regular learning routines and stick to them",
                        "Become a student again by taking courses or formal learning programs"
                    ],
                    advanced: [
                        "Develop a comprehensive personal learning and development philosophy",
                        "Create learning systems and methodologies that others can use",
                        "Become a master learner who models continuous growth for others",
                        "Establish learning partnerships and exchanges with other experts",
                        "Create content that helps others develop teachability and growth mindsets",
                        "Build learning-focused communities and organizations",
                        "Develop innovative approaches to skill and talent development",
                        "Become a thought leader on learning and development topics",
                        "Create measurement systems for tracking learning effectiveness",
                        "Establish teachability as a core component of your personal brand"
                    ]
                }
            },
            character: {
                name: "Character Protects Your Talent",
                icon: "⚖️",
                challenges: {
                    beginner: [
                        "Keep a promise you made, even if it's inconvenient",
                        "Tell the truth in a situation where lying would be easier",
                        "Do the right thing when no one is watching",
                        "Take responsibility for a mistake without making excuses",
                        "Treat someone with kindness who can't do anything for you",
                        "Stand up for your values in a small but meaningful way",
                        "Practice gratitude by thanking someone who has helped you",
                        "Choose integrity over convenience in a decision you face today",
                        "Be reliable by following through on a commitment you made",
                        "Practice humility by giving credit to others for their contributions"
                    ],
                    intermediate: [
                        "Develop a personal code of ethics and commit to living by it",
                        "Make a difficult decision based on your values rather than personal gain",
                        "Practice consistent character in both small and large situations",
                        "Seek to understand and address any character blind spots you may have",
                        "Build relationships based on trust and mutual respect",
                        "Practice emotional intelligence and self-regulation in challenging situations",
                        "Develop the courage to have difficult conversations when values are at stake",
                        "Create accountability systems that help you maintain character standards",
                        "Practice servant leadership by putting others' needs before your own",
                        "Develop consistency between your private and public behavior"
                    ],
                    advanced: [
                        "Become known as a person of exceptional character and integrity",
                        "Develop character-based leadership principles and practices",
                        "Create systems and cultures that promote character development in others",
                        "Make significant sacrifices to uphold your principles and values",
                        "Become a mentor or coach focused on character development",
                        "Write or speak publicly about the importance of character in talent development",
                        "Create character assessment and development tools",
                        "Build organizations or communities founded on strong character principles",
                        "Develop character-based decision-making frameworks",
                        "Establish a legacy based on character as much as achievement"
                    ]
                }
            },
            relationships: {
                name: "Relationships Influence Your Talent",
                icon: "🤝",
                challenges: {
                    beginner: [
                        "Reach out to one person in your network you haven't spoken to recently",
                        "Express genuine appreciation to someone who has supported your growth",
                        "Make an effort to really listen to someone today without planning your response",
                        "Offer help to someone without expecting anything in return",
                        "Connect two people in your network who could benefit from knowing each other",
                        "Have a meaningful conversation with someone instead of just small talk",
                        "Ask someone about their goals and how you might be able to support them",
                        "Share knowledge or resources that could help someone else succeed",
                        "Practice empathy by trying to understand someone else's perspective",
                        "Follow up on a conversation or commitment you made to someone"
                    ],
                    intermediate: [
                        "Develop a systematic approach to building and maintaining your professional network",
                        "Create value for others in your network through introductions, resources, or advice",
                        "Build relationships with people who challenge and inspire you to grow",
                        "Develop your emotional intelligence and interpersonal communication skills",
                        "Practice collaborative leadership and team-building skills",
                        "Seek out diverse relationships that expand your perspective and capabilities",
                        "Create mutual mentoring relationships where you both give and receive value",
                        "Develop conflict resolution and difficult conversation skills",
                        "Build relationships across different industries, generations, and backgrounds",
                        "Create systems for staying connected and adding value to your network"
                    ],
                    advanced: [
                        "Become a super-connector who helps others build meaningful relationships",
                        "Develop relationship-building systems and methodologies that others can use",
                        "Create communities and platforms that bring talented people together",
                        "Become known as someone who elevates and empowers others",
                        "Develop advanced networking and relationship strategies",
                        "Build strategic partnerships that multiply your impact and influence",
                        "Create content and resources about building meaningful professional relationships",
                        "Establish yourself as a thought leader on relationship-building and networking",
                        "Develop relationship-based business models and career strategies",
                        "Build a legacy based on the relationships you've built and the people you've helped"
                    ]
                }
            },
            responsibility: {
                name: "Responsibility Strengthens Your Talent",
                icon: "🎖️",
                challenges: {
                    beginner: [
                        "Take full ownership of a task or project without waiting to be asked",
                        "Accept responsibility for a mistake without blaming circumstances or others",
                        "Follow through completely on a commitment you've made",
                        "Take initiative to solve a problem rather than just pointing it out",
                        "Be accountable for your time and how you use it productively",
                        "Take responsibility for your own learning and development",
                        "Own the outcomes of your decisions, both positive and negative",
                        "Take care of something that belongs to someone else as if it were your own",
                        "Be responsible for your attitude and emotional reactions",
                        "Take ownership of your role in any relationship conflicts or misunderstandings"
                    ],
                    intermediate: [
                        "Develop a systematic approach to taking ownership of your results and outcomes",
                        "Take responsibility for developing others and helping them succeed",
                        "Own your role in team or organizational success and failure",
                        "Develop accountability systems that help you stay responsible to your goals",
                        "Take responsibility for creating positive change in your environment",
                        "Practice proactive responsibility by anticipating and preventing problems",
                        "Own your personal and professional development completely",
                        "Take responsibility for the impact of your work on others",
                        "Develop leadership skills by taking responsibility for group outcomes",
                        "Create responsibility-based decision-making criteria and standards"
                    ],
                    advanced: [
                        "Become known as someone who takes exceptional responsibility for outcomes",
                        "Develop responsibility-based leadership principles and practices",
                        "Create systems and cultures that promote responsibility in others",
                        "Take responsibility for major organizational or community outcomes",
                        "Develop responsibility assessment and development tools",
                        "Become a mentor or coach focused on developing responsibility in others",
                        "Write or speak about responsibility as a key component of talent development",
                        "Build organizations or communities founded on strong responsibility principles",
                        "Develop responsibility-based business models and career strategies",
                        "Create a legacy based on the responsibility you've taken for important outcomes"
                    ]
                }
            },
            teamwork: {
                name: "Teamwork Multiplies Your Talent",
                icon: "👥",
                challenges: {
                    beginner: [
                        "Actively contribute to a team meeting or group discussion today",
                        "Offer to help a colleague or team member with their work",
                        "Practice listening to understand rather than listening to respond in team interactions",
                        "Share credit for a success with others who contributed",
                        "Ask team members how you can better support their work",
                        "Contribute your unique talents to a group project or initiative",
                        "Practice giving constructive feedback to help a team member improve",
                        "Volunteer for a task that serves the team rather than just advancing your own goals",
                        "Resolve a minor conflict or misunderstanding with a team member",
                        "Celebrate a team member's achievement or contribution"
                    ],
                    intermediate: [
                        "Take on a leadership role in a team project or initiative",
                        "Develop skills that complement and enhance your team's overall capabilities",
                        "Practice facilitating effective team meetings and discussions",
                        "Create systems that improve your team's communication and collaboration",
                        "Help integrate a new team member or make someone feel included",
                        "Develop conflict resolution skills to help your team work through challenges",
                        "Practice servant leadership by focusing on what your team needs to succeed",
                        "Create opportunities for team members to showcase their talents",
                        "Develop cross-functional collaboration skills with other teams",
                        "Establish team accountability systems that help everyone perform their best"
                    ],
                    advanced: [
                        "Become known as an exceptional team builder and collaborator",
                        "Develop team development methodologies and systems",
                        "Create high-performing teams that consistently exceed expectations",
                        "Become a consultant or coach specializing in team effectiveness",
                        "Develop innovative approaches to team collaboration and communication",
                        "Build organizations or communities based on exceptional teamwork principles",
                        "Write or speak about teamwork as a multiplier of individual talent",
                        "Create assessment and development tools for team effectiveness",
                        "Establish yourself as a thought leader on team dynamics and collaboration",
                        "Build a legacy based on the teams you've built and the collaborative success you've created"
                    ]
                }
            }
        };
    }

    initializeBadges() {
        return [
            { id: 'first_challenge', name: 'First Steps', icon: '🎯', description: 'Complete your first challenge', requirement: 1 },
            { id: 'week_warrior', name: 'Week Warrior', icon: '📅', description: 'Complete 7 challenges', requirement: 7 },
            { id: 'streak_starter', name: 'Streak Starter', icon: '🔥', description: 'Maintain a 3-day streak', requirement: 3 },
            { id: 'believer', name: 'True Believer', icon: '💫', description: 'Complete 5 Belief challenges', requirement: 5 },
            { id: 'passionate', name: 'Passion Ignited', icon: '🔥', description: 'Complete 5 Passion challenges', requirement: 5 },
            { id: 'initiator', name: 'Action Taker', icon: '🚀', description: 'Complete 5 Initiative challenges', requirement: 5 },
            { id: 'focused', name: 'Laser Focused', icon: '🎯', description: 'Complete 5 Focus challenges', requirement: 5 },
            { id: 'prepared', name: 'Always Ready', icon: '📚', description: 'Complete 5 Preparation challenges', requirement: 5 },
            { id: 'dedicated', name: 'Practice Master', icon: '⚡', description: 'Complete 5 Practice challenges', requirement: 5 },
            { id: 'persistent', name: 'Never Give Up', icon: '💪', description: 'Complete 5 Perseverance challenges', requirement: 5 },
            { id: 'brave', name: 'Courage Under Fire', icon: '🦁', description: 'Complete 5 Courage challenges', requirement: 5 },
            { id: 'learner', name: 'Growth Mindset', icon: '🌱', description: 'Complete 5 Teachability challenges', requirement: 5 },
            { id: 'ethical', name: 'Integrity Champion', icon: '⚖️', description: 'Complete 5 Character challenges', requirement: 5 },
            { id: 'connected', name: 'Relationship Builder', icon: '🤝', description: 'Complete 5 Relationships challenges', requirement: 5 },
            { id: 'accountable', name: 'Ownership Mindset', icon: '🎖️', description: 'Complete 5 Responsibility challenges', requirement: 5 },
            { id: 'collaborator', name: 'Team Player', icon: '👥', description: 'Complete 5 Teamwork challenges', requirement: 5 },
            { id: 'consistent', name: 'Consistency King', icon: '👑', description: 'Maintain a 7-day streak', requirement: 7 },
            { id: 'dedicated_learner', name: 'Dedicated Learner', icon: '🎓', description: 'Complete 25 challenges', requirement: 25 },
            { id: 'maxwell_master', name: 'Maxwell Master', icon: '🏆', description: 'Complete 50 challenges', requirement: 50 },
            { id: 'talent_multiplier', name: 'Talent Multiplier', icon: '✨', description: 'Complete 100 challenges', requirement: 100 }
        ];
    }

    loadProgress() {
        const defaultProgress = {
            totalPoints: 0,
            completedChallenges: 0,
            currentStreak: 0,
            maxStreak: 0,
            lastChallengeDate: null,
            level: 1,
            earnedBadges: [],
            principleProgress: {},
            challengeHistory: [],
            preferredDifficulty: 'beginner'
        };

        try {
            const saved = localStorage.getItem('maxwellChallengeProgress');
            return saved ? { ...defaultProgress, ...JSON.parse(saved) } : defaultProgress;
        } catch (error) {
            console.error('Error loading progress:', error);
            return defaultProgress;
        }
    }

    saveProgress() {
        try {
            localStorage.setItem('maxwellChallengeProgress', JSON.stringify(this.userProgress));
        } catch (error) {
            console.error('Error saving progress:', error);
        }
    }

    generateDailyChallenge() {
        const today = new Date().toDateString();
        const lastChallengeDate = this.userProgress.lastChallengeDate;
        
        // Check if we need a new challenge for today
        if (lastChallengeDate !== today) {
            const principleKeys = Object.keys(this.principles);
            const randomPrinciple = principleKeys[Math.floor(Math.random() * principleKeys.length)];
            const principle = this.principles[randomPrinciple];
            
            const difficulty = this.userProgress.preferredDifficulty;
            const challenges = principle.challenges[difficulty];
            const randomChallenge = challenges[Math.floor(Math.random() * challenges.length)];
            
            this.currentChallenge = {
                id: `${randomPrinciple}_${Date.now()}`,
                principle: randomPrinciple,
                principleName: principle.name,
                principleIcon: principle.icon,
                description: randomChallenge,
                difficulty: difficulty,
                points: this.getPointsForDifficulty(difficulty),
                date: today,
                completed: false
            };
            
            this.updateChallengeUI();
        } else {
            // Load today's challenge from history
            const todayChallenge = this.userProgress.challengeHistory.find(c => c.date === today);
            if (todayChallenge) {
                this.currentChallenge = todayChallenge;
                this.updateChallengeUI();
            }
        }
    }

    getPointsForDifficulty(difficulty) {
        const pointsMap = {
            beginner: 10,
            intermediate: 20,
            advanced: 30
        };
        return pointsMap[difficulty] || 10;
    }

    updateChallengeUI() {
        if (!this.currentChallenge) return;

        document.getElementById('principleName').textContent = this.currentChallenge.principleName;
        document.getElementById('challengeDescription').textContent = this.currentChallenge.description;
        document.getElementById('challengePoints').textContent = this.currentChallenge.points;
        
        const difficultyBadge = document.getElementById('difficultyBadge');
        difficultyBadge.className = `difficulty-badge ${this.currentChallenge.difficulty}`;
        difficultyBadge.querySelector('.difficulty-text').textContent = 
            this.currentChallenge.difficulty.charAt(0).toUpperCase() + this.currentChallenge.difficulty.slice(1);

        const completeBtn = document.getElementById('completeBtn');
        if (this.currentChallenge.completed) {
            completeBtn.textContent = 'Completed!';
            completeBtn.disabled = true;
            completeBtn.style.background = '#10b981';
        } else {
            completeBtn.textContent = 'Complete Challenge';
            completeBtn.disabled = false;
            completeBtn.style.background = '';
        }
    }

    completeChallenge() {
        if (!this.currentChallenge || this.currentChallenge.completed) return;

        this.currentChallenge.completed = true;
        this.userProgress.totalPoints += this.currentChallenge.points;
        this.userProgress.completedChallenges += 1;
        
        // Update streak
        this.updateStreak();
        
        // Update principle progress
        const principle = this.currentChallenge.principle;
        if (!this.userProgress.principleProgress[principle]) {
            this.userProgress.principleProgress[principle] = 0;
        }
        this.userProgress.principleProgress[principle] += 1;
        
        // Add to challenge history
        const existingIndex = this.userProgress.challengeHistory.findIndex(c => c.id === this.currentChallenge.id);
        if (existingIndex >= 0) {
            this.userProgress.challengeHistory[existingIndex] = this.currentChallenge;
        } else {
            this.userProgress.challengeHistory.push(this.currentChallenge);
        }
        
        this.userProgress.lastChallengeDate = new Date().toDateString();
        
        // Update level
        this.updateLevel();
        
        // Check for new badges
        this.checkAndAwardBadges();
        
        this.saveProgress();
        this.updateUI();
        this.updateChallengeUI();
        this.renderPrinciples();
        
        // Show share modal
        this.showShareModal();
    }

    updateStreak() {
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        
        const todayString = today.toDateString();
        const yesterdayString = yesterday.toDateString();
        
        const lastCompleted = this.userProgress.challengeHistory
            .filter(c => c.completed)
            .sort((a, b) => new Date(b.date) - new Date(a.date))[0];
        
        if (!lastCompleted) {
            this.userProgress.currentStreak = 1;
        } else if (lastCompleted.date === yesterdayString) {
            this.userProgress.currentStreak += 1;
        } else if (lastCompleted.date === todayString) {
            // Already completed today, don't change streak
        } else {
            this.userProgress.currentStreak = 1;
        }
        
        this.userProgress.maxStreak = Math.max(this.userProgress.maxStreak, this.userProgress.currentStreak);
    }

    updateLevel() {
        const pointsForNextLevel = this.userProgress.level * 100;
        if (this.userProgress.totalPoints >= pointsForNextLevel) {
            this.userProgress.level += 1;
            this.showAchievementToast('Level Up!', `You've reached level ${this.userProgress.level}!`);
        }
    }

    checkAndAwardBadges() {
        this.badges.forEach(badge => {
            if (this.userProgress.earnedBadges.includes(badge.id)) return;
            
            let earned = false;
            
            switch (badge.id) {
                case 'first_challenge':
                    earned = this.userProgress.completedChallenges >= 1;
                    break;
                case 'week_warrior':
                    earned = this.userProgress.completedChallenges >= 7;
                    break;
                case 'streak_starter':
                    earned = this.userProgress.currentStreak >= 3;
                    break;
                case 'consistent':
                    earned = this.userProgress.currentStreak >= 7;
                    break;
                case 'dedicated_learner':
                    earned = this.userProgress.completedChallenges >= 25;
                    break;
                case 'maxwell_master':
                    earned = this.userProgress.completedChallenges >= 50;
                    break;
                case 'talent_multiplier':
                    earned = this.userProgress.completedChallenges >= 100;
                    break;
                default:
                    // Principle-specific badges
                    const principleMap = {
                        'believer': 'belief',
                        'passionate': 'passion',
                        'initiator': 'initiative',
                        'focused': 'focus',
                        'prepared': 'preparation',
                        'dedicated': 'practice',
                        'persistent': 'perseverance',
                        'brave': 'courage',
                        'learner': 'teachability',
                        'ethical': 'character',
                        'connected': 'relationships',
                        'accountable': 'responsibility',
                        'collaborator': 'teamwork'
                    };
                    
                    const principle = principleMap[badge.id];
                    if (principle) {
                        const progress = this.userProgress.principleProgress[principle] || 0;
                        earned = progress >= badge.requirement;
                    }
            }
            
            if (earned) {
                this.userProgress.earnedBadges.push(badge.id);
                this.showAchievementToast('Badge Earned!', badge.name);
            }
        });
    }

    showAchievementToast(title, message) {
        const toast = document.getElementById('achievementToast');
        const titleElement = toast.querySelector('.toast-title');
        const messageElement = toast.querySelector('#toastMessage');
        
        titleElement.textContent = title;
        messageElement.textContent = message;
        
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 4000);
    }

    showShareModal() {
        const modal = document.getElementById('shareModal');
        const shareText = document.getElementById('shareText');
        
        shareText.textContent = `I just completed a ${this.currentChallenge.difficulty} level challenge in "${this.currentChallenge.principleName}" and earned ${this.currentChallenge.points} points! 💪 #MaxwellChallenge #TalentDevelopment`;
        
        modal.classList.add('show');
    }

    skipChallenge() {
        this.generateNewChallenge();
    }

    generateNewChallenge() {
        const principleKeys = Object.keys(this.principles);
        let randomPrinciple, principle, challenges, randomChallenge;
        
        // Ensure we don't get the same challenge
        do {
            randomPrinciple = principleKeys[Math.floor(Math.random() * principleKeys.length)];
            principle = this.principles[randomPrinciple];
            challenges = principle.challenges[this.userProgress.preferredDifficulty];
            randomChallenge = challenges[Math.floor(Math.random() * challenges.length)];
        } while (this.currentChallenge && randomChallenge === this.currentChallenge.description);
        
        this.currentChallenge = {
            id: `${randomPrinciple}_${Date.now()}`,
            principle: randomPrinciple,
            principleName: principle.name,
            principleIcon: principle.icon,
            description: randomChallenge,
            difficulty: this.userProgress.preferredDifficulty,
            points: this.getPointsForDifficulty(this.userProgress.preferredDifficulty),
            date: new Date().toDateString(),
            completed: false
        };
        
        this.updateChallengeUI();
    }

    updateUI() {
        document.getElementById('streakCount').textContent = this.userProgress.currentStreak;
        document.getElementById('totalPoints').textContent = this.userProgress.totalPoints;
        document.getElementById('completedChallenges').textContent = this.userProgress.completedChallenges;
        document.getElementById('userLevel').textContent = this.userProgress.level;
        document.getElementById('badgeCount').textContent = this.userProgress.earnedBadges.length;
        
        // Update progress bar
        const currentLevelPoints = (this.userProgress.level - 1) * 100;
        const nextLevelPoints = this.userProgress.level * 100;
        const progressInLevel = this.userProgress.totalPoints - currentLevelPoints;
        const pointsNeeded = nextLevelPoints - currentLevelPoints;
        const progressPercentage = (progressInLevel / pointsNeeded) * 100;
        
        const progressBar = document.getElementById('progressBar');
        const progressText = document.getElementById('progressText');
        
        progressBar.style.width = `${progressPercentage}%`;
        progressText.textContent = `${Math.round(progressPercentage)}% to level ${this.userProgress.level + 1}`;
        
        // Update difficulty select
        const difficultySelect = document.getElementById('difficultySelect');
        difficultySelect.value = this.userProgress.preferredDifficulty;
    }

    renderPrinciples() {
        const principlesGrid = document.getElementById('principlesGrid');
        principlesGrid.innerHTML = '';
        
        Object.entries(this.principles).forEach(([key, principle]) => {
            const progress = this.userProgress.principleProgress[key] || 0;
            const totalChallenges = Object.values(principle.challenges).flat().length;
            
            const principleElement = document.createElement('div');
            principleElement.className = `principle-item ${progress > 0 ? 'completed' : ''}`;
            principleElement.innerHTML = `
                <div class="principle-item-title">
                    ${principle.icon} ${principle.name}
                </div>
                <div class="principle-progress">
                    <span>${progress} completed</span>
                    ${progress > 0 ? '<span class="principle-checkmark">✓</span>' : ''}
                </div>
            `;
            
            principlesGrid.appendChild(principleElement);
        });
    }

    renderBadges() {
        const badgesGrid = document.getElementById('badgesGrid');
        badgesGrid.innerHTML = '';
        
        // Show only recent badges (earned) and next few to unlock
        const earnedBadges = this.badges.filter(badge => this.userProgress.earnedBadges.includes(badge.id));
        const unlockedBadges = this.badges.filter(badge => !this.userProgress.earnedBadges.includes(badge.id)).slice(0, 6);
        
        const badgesToShow = [...earnedBadges.slice(-3), ...unlockedBadges.slice(0, 3)];
        
        badgesToShow.forEach(badge => {
            const isEarned = this.userProgress.earnedBadges.includes(badge.id);
            const badgeElement = document.createElement('div');
            badgeElement.className = `badge-item ${!isEarned ? 'locked' : ''}`;
            badgeElement.innerHTML = `
                <span class="badge-icon">${badge.icon}</span>
                <div class="badge-name">${badge.name}</div>
            `;
            badgeElement.title = badge.description;
            
            badgesGrid.appendChild(badgeElement);
        });
    }

    initializeEventListeners() {
        // Complete challenge button
        document.getElementById('completeBtn').addEventListener('click', () => {
            this.completeChallenge();
        });
        
        // Skip challenge button
        document.getElementById('skipBtn').addEventListener('click', () => {
            this.skipChallenge();
        });
        
        // Settings toggle
        document.getElementById('settingsToggle').addEventListener('click', () => {
            const panel = document.getElementById('settingsPanel');
            panel.classList.toggle('open');
        });
        
        // Difficulty change
        document.getElementById('difficultySelect').addEventListener('change', (e) => {
            this.userProgress.preferredDifficulty = e.target.value;
            this.saveProgress();
            this.generateNewChallenge();
        });
        
        // Reset progress
        document.getElementById('resetProgress').addEventListener('click', () => {
            if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
                localStorage.removeItem('maxwellChallengeProgress');
                location.reload();
            }
        });
        
        // Modal close
        document.getElementById('modalClose').addEventListener('click', () => {
            document.getElementById('shareModal').classList.remove('show');
        });
        
        // Share buttons
        document.getElementById('shareTwitter').addEventListener('click', () => {
            const text = document.getElementById('shareText').textContent;
            const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
            window.open(url, '_blank');
        });
        
        document.getElementById('shareLinkedIn').addEventListener('click', () => {
            const text = document.getElementById('shareText').textContent;
            const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}&summary=${encodeURIComponent(text)}`;
            window.open(url, '_blank');
        });
        
        document.getElementById('copyLink').addEventListener('click', () => {
            const text = document.getElementById('shareText').textContent;
            navigator.clipboard.writeText(text).then(() => {
                alert('Copied to clipboard!');
            });
        });
        
        // Close modal when clicking outside
        document.getElementById('shareModal').addEventListener('click', (e) => {
            if (e.target === e.currentTarget) {
                e.currentTarget.classList.remove('show');
            }
        });
    }
}

// Initialize the app when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new MaxwellChallengeGenerator();
});

// Add some additional utility functions
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Service Worker registration for offline capability (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}