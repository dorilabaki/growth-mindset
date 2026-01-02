// Article content
export interface Article {
  slug: string
  title: string
  description: string
  category: string
  readTime: string
  date: string
  content: string
  faqs?: { question: string; answer: string }[]
}

export const articles: Article[] = [
  {
    slug: 'power-of-yet',
    title: 'The Power of "Yet": How One Word Can Transform Your Mindset',
    description: 'Discover how adding "yet" to your vocabulary can shift your perspective from fixed to growth-oriented thinking.',
    category: 'Mindset',
    readTime: '5 min read',
    date: '2024-01-15',
    content: `
## Introduction

Have you ever caught yourself saying "I can't do this" or "I'm not good at that"? These statements, while common, can trap us in a fixed mindset that limits our potential. But there's a simple, powerful word that can transform these limiting beliefs into opportunities for growth: **yet**.

## Understanding the Growth Mindset

Dr. Carol Dweck's groundbreaking research at Stanford University introduced the world to the concept of growth versus fixed mindsets. People with a fixed mindset believe their abilities are static—you're either smart or you're not, talented or you're not. In contrast, those with a growth mindset understand that abilities can be developed through dedication, hard work, and learning from failures.

## The Magic of "Yet"

When you add "yet" to the end of a limiting statement, something remarkable happens:

- "I can't solve this problem" becomes "I can't solve this problem **yet**"
- "I'm not good at public speaking" becomes "I'm not good at public speaking **yet**"
- "I don't understand this concept" becomes "I don't understand this concept **yet**"

This small word acknowledges your current state while opening the door to future growth and improvement.

## Practical Ways to Incorporate "Yet"

### 1. Catch Your Fixed Mindset Moments

Pay attention to when you use absolutes like "can't," "never," or "always" in negative contexts about your abilities. These are perfect opportunities to add "yet."

### 2. Create Visual Reminders

Post sticky notes in places you'll see them regularly. Write phrases like "Not there yet, but getting better every day."

### 3. Model It for Others

When you hear friends, family, or colleagues express fixed mindset statements, gently introduce "yet" into the conversation. This helps create a growth-oriented environment.

## The Neuroscience Behind "Yet"

Research shows that our brains are remarkably plastic—capable of forming new neural connections throughout our lives. When we approach challenges with a "yet" mentality, we:

- Reduce cortisol (stress hormone) levels
- Increase dopamine release, making learning more enjoyable
- Strengthen neural pathways associated with persistence and problem-solving

## Key Takeaways

- The word "yet" transforms limiting beliefs into possibilities
- A growth mindset can be developed with conscious practice
- Small language changes can lead to significant mindset shifts
- Neuroplasticity supports our ability to learn and grow at any age

## Conclusion

The power of "yet" lies in its ability to reframe our relationship with challenges and learning. By incorporating this simple word into your vocabulary, you're not just changing how you speak—you're rewiring how you think about your potential. Start today, and watch how this tiny shift creates ripples of growth throughout your life.
    `,
    faqs: [
      {
        question: 'What is the "power of yet" concept?',
        answer: 'The "power of yet" is a mindset technique where you add the word "yet" to limiting statements (e.g., "I can\'t do this" becomes "I can\'t do this yet"). This simple change shifts your perspective from fixed limitations to growth opportunities.',
      },
      {
        question: 'How does saying "yet" help with learning?',
        answer: 'Adding "yet" acknowledges your current state while keeping the door open for improvement. This reduces stress, increases motivation, and aligns with how our brains naturally learn through neuroplasticity.',
      },
    ],
  },
  {
    slug: 'embrace-failure-stepping-stone',
    title: 'Embrace Failure as a Stepping Stone to Success',
    description: 'Learn why failure is not the opposite of success but an essential part of the journey toward achieving your goals.',
    category: 'Resilience',
    readTime: '6 min read',
    date: '2024-01-10',
    content: `
## Introduction

In a world that often celebrates only victories, failure can feel like a shameful experience to hide. But what if failure isn't the opposite of success—but rather an essential ingredient of it? The most successful people in history haven't succeeded despite their failures; they've succeeded **because** of them.

## The Failure-Success Connection

Consider these examples:
- **Thomas Edison** failed thousands of times before inventing the light bulb
- **J.K. Rowling** was rejected by 12 publishers before Harry Potter found a home
- **Michael Jordan** was cut from his high school basketball team
- **Walt Disney** was told he "lacked imagination"

What sets these individuals apart isn't their ability to avoid failure—it's their response to it.

## Reframing Failure

### From Threat to Teacher

Every failure contains valuable information. When something doesn't work, you've learned one way that doesn't lead to your goal. This is not wasted effort—it's essential data.

### From Final to Feedback

A fixed mindset sees failure as a verdict: "I failed, therefore I'm a failure." A growth mindset sees failure as feedback: "This approach didn't work. What can I adjust?"

### From Shameful to Scientific

Scientists don't view unsuccessful experiments as personal failures. They're simply gathering data. What if you approached your life with the same scientific curiosity?

## The Fear of Failure

The fear of failure often causes more damage than failure itself. It leads to:

- **Procrastination**: Putting off tasks to avoid potential failure
- **Perfectionism**: Never finishing because it's never "good enough"
- **Playing small**: Avoiding challenges that might lead to growth
- **Missed opportunities**: Saying no to experiences that could transform you

## Building Failure Resilience

### 1. Normalize Failure

Start expecting failure as part of any worthwhile endeavor. The question isn't "Will I fail?" but "How will I respond when I fail?"

### 2. Fail Fast, Learn Faster

In the startup world, there's a concept called "failing fast"—the idea that quick, small failures lead to rapid learning and iteration. Apply this to your personal growth.

### 3. Document Your Failures

Keep a "failure resume" alongside your regular resume. List your failures and what you learned from each. This practice normalizes failure and highlights your growth.

### 4. Celebrate Attempts

Reward yourself for trying, not just for succeeding. This reinforces the behavior of taking risks and stepping outside your comfort zone.

## Key Takeaways

- Failure is feedback, not a final verdict
- The most successful people have failed the most
- Fear of failure causes more harm than failure itself
- Building failure resilience is a learnable skill

## Conclusion

Embracing failure doesn't mean seeking it out or celebrating poor performance. It means understanding that failure is an inevitable and valuable part of growth. When you stop fearing failure and start learning from it, you unlock a level of freedom and potential that those trapped in perfectionism will never know.
    `,
    faqs: [
      {
        question: 'Why is failure important for success?',
        answer: 'Failure provides essential feedback for improvement, builds resilience, and teaches lessons that success cannot. Every successful person has a history of failures that contributed to their eventual achievements.',
      },
      {
        question: 'How can I overcome the fear of failure?',
        answer: 'Start by reframing failure as feedback rather than a verdict. Normalize it by expecting it as part of growth, celebrate attempts rather than just outcomes, and document your failures to track what you learn from them.',
      },
    ],
  },
  {
    slug: 'daily-habits-growth-mindset',
    title: '7 Daily Habits That Cultivate a Growth Mindset',
    description: 'Practical, science-backed habits you can implement today to develop and strengthen your growth mindset.',
    category: 'Habits',
    readTime: '7 min read',
    date: '2024-01-05',
    content: `
## Introduction

A growth mindset isn't something you either have or don't have—it's a skill you can develop through consistent practice. Like building physical strength, developing a growth mindset requires daily exercise. Here are seven science-backed habits that can transform how you think about learning, challenges, and your own potential.

## Habit 1: Morning Reflection

Start your day with 5-10 minutes of reflection. Ask yourself:
- What did I learn yesterday?
- What challenge can I embrace today?
- What's one area where I can improve?

This practice primes your brain to look for learning opportunities throughout the day.

## Habit 2: Embrace One Challenge Daily

Deliberately seek out one thing that makes you slightly uncomfortable each day. It could be:
- Starting a conversation with a stranger
- Taking on a task at work you've been avoiding
- Learning something new, even for just 15 minutes

The key is consistency—small challenges add up to significant growth.

## Habit 3: Practice Strategic Self-Talk

Monitor your inner dialogue and consciously shift it toward growth:

| Fixed Mindset | Growth Mindset |
|---------------|----------------|
| "I'm not smart enough" | "I can learn this with effort" |
| "This is too hard" | "This will take time and practice" |
| "I made a mistake" | "Mistakes help me learn" |

## Habit 4: Seek Constructive Feedback

Rather than avoiding criticism, actively seek it out. Ask colleagues, friends, or mentors:
- "What's one thing I could do better?"
- "What feedback do you have for me?"
- "How could I improve in this area?"

View feedback as a gift—valuable information for your growth journey.

## Habit 5: Celebrate Effort, Not Just Results

At the end of each day, recognize your efforts regardless of outcomes:
- "I spent two hours learning that new skill"
- "I persisted through a difficult conversation"
- "I tried something new, even though it didn't work out"

This reinforces that effort is valuable in itself.

## Habit 6: Learn Something New Daily

Dedicate at least 15-30 minutes to learning every day:
- Read books or articles
- Listen to educational podcasts
- Take online courses
- Watch documentaries or tutorials

The content matters less than the habit of continuous learning.

## Habit 7: Evening Review

End your day with a brief review:
- What went well today?
- What could I have done differently?
- What will I focus on tomorrow?

This creates a growth feedback loop that compounds over time.

## Implementation Strategy

Don't try to adopt all seven habits at once. Instead:

1. **Week 1-2**: Start with morning reflection
2. **Week 3-4**: Add the daily challenge
3. **Week 5-6**: Incorporate strategic self-talk
4. Continue building until all habits are established

## Key Takeaways

- A growth mindset is built through daily practice
- Small, consistent habits create significant change
- Morning and evening rituals bookend your day with growth focus
- Seeking feedback accelerates your development

## Conclusion

These seven habits may seem simple individually, but their combined effect is transformative. Remember, the goal isn't perfection—it's progress. Start with one habit, practice it consistently, and gradually add more. Your future self will thank you for the investment you make today.
    `,
    faqs: [
      {
        question: 'How long does it take to develop a growth mindset?',
        answer: 'Developing a growth mindset is an ongoing journey rather than a destination. With consistent practice of growth-oriented habits, most people notice significant shifts in their thinking within 2-3 months, though the process of growth continues throughout life.',
      },
      {
        question: 'What is the most important habit for developing a growth mindset?',
        answer: 'While all habits contribute to growth, strategic self-talk may be the most foundational. How you speak to yourself shapes how you interpret experiences and respond to challenges. Shifting from fixed to growth-oriented self-talk creates a foundation for all other habits.',
      },
    ],
  },
  {
    slug: 'neuroplasticity-brain-change',
    title: 'Neuroplasticity: Your Brain Can Change at Any Age',
    description: 'Explore the science of neuroplasticity and how understanding your brain can empower your personal growth journey.',
    category: 'Science',
    readTime: '6 min read',
    date: '2024-01-01',
    content: `
## Introduction

For decades, scientists believed the adult brain was fixed—that after a certain age, you couldn't teach an old dog new tricks. This belief has been thoroughly debunked. Thanks to neuroplasticity, your brain is constantly changing, adapting, and growing new connections throughout your entire life.

## What Is Neuroplasticity?

Neuroplasticity (or neural plasticity) is your brain's ability to reorganize itself by forming new neural connections. This happens in response to:

- Learning new information or skills
- Environmental changes
- Behavioral changes
- Emotions and thoughts
- Injury and recovery

Think of your brain as a dynamic network of highways. Frequently used routes become superhighways (strong neural pathways), while neglected routes may fade away.

## The Science Behind Brain Change

### Synaptic Plasticity

When you learn something new, neurons fire together and wire together. The more you practice, the stronger these connections become. This is why repetition is so important in learning.

### Structural Plasticity

Your brain can actually grow new neurons (neurogenesis) and create new physical structures. Studies have shown that London taxi drivers, who must memorize thousands of streets, have larger hippocampi (the brain region associated with spatial memory) than average.

### Functional Plasticity

If one area of the brain is damaged, other areas can sometimes take over its functions. This remarkable adaptability demonstrates just how flexible our brains truly are.

## Neuroplasticity and Growth Mindset

Understanding neuroplasticity provides the scientific foundation for growth mindset. When you believe you can improve, you're not engaging in wishful thinking—you're acknowledging a fundamental truth about how your brain works.

This knowledge is empowering because it means:

- **Intelligence is not fixed**: You can become smarter through learning and practice
- **Skills are learnable**: Any skill can be developed with enough effort
- **Change is possible**: Even long-standing habits and thought patterns can be rewired

## How to Harness Neuroplasticity

### 1. Embrace Challenges

Challenging activities force your brain to create new neural pathways. Comfort may feel good, but it doesn't promote brain growth.

### 2. Practice Deliberately

Random practice isn't as effective as focused, deliberate practice. Concentrate on specific skills and push slightly beyond your current ability.

### 3. Get Enough Sleep

Sleep is when your brain consolidates learning and strengthens new neural connections. Prioritize 7-9 hours of quality sleep.

### 4. Exercise Regularly

Physical exercise increases blood flow to the brain and promotes the release of growth factors that support neuroplasticity.

### 5. Manage Stress

Chronic stress impairs neuroplasticity. Develop stress management techniques like meditation, deep breathing, or regular relaxation.

### 6. Stay Curious

Novel experiences stimulate brain growth. Travel, learn new skills, meet new people, and explore new ideas regularly.

## Key Takeaways

- Neuroplasticity proves your brain can change at any age
- Learning physically changes your brain's structure
- This scientific reality supports the growth mindset philosophy
- Simple lifestyle choices can enhance your brain's plasticity

## Conclusion

Neuroplasticity is perhaps the most empowering scientific discovery of our time. It proves that you're not stuck with the brain you have—you can actively shape it through your choices, habits, and mindset. Every time you learn something new, challenge yourself, or persist through difficulty, you're literally building a better brain.
    `,
    faqs: [
      {
        question: 'What is neuroplasticity in simple terms?',
        answer: "Neuroplasticity is your brain's ability to change and adapt throughout your life. It means your brain can form new connections, strengthen existing ones, and even grow new neurons in response to learning, experience, and practice.",
      },
      {
        question: 'Can you improve neuroplasticity as you age?',
        answer: "Yes! While neuroplasticity naturally decreases somewhat with age, you can enhance it through learning new skills, physical exercise, quality sleep, stress management, and staying mentally active. The brain remains capable of change throughout life.",
      },
    ],
  },
  {
    slug: 'comparison-trap-focus-journey',
    title: 'Escaping the Comparison Trap: Focus on Your Own Journey',
    description: 'Learn how to stop comparing yourself to others and embrace your unique path to growth and success.',
    category: 'Mindset',
    readTime: '5 min read',
    date: '2023-12-28',
    content: `
## Introduction

In the age of social media, comparison has become an epidemic. We scroll through curated highlight reels, measuring our behind-the-scenes against everyone else's best moments. This comparison trap is one of the greatest threats to a growth mindset—and to our mental health.

## The Problem with Comparison

When we compare ourselves to others, we typically:

- **Compare our weaknesses to their strengths**: We see their successes while acutely aware of our own struggles
- **Ignore context**: We don't know their sacrifices, failures, or advantages
- **Focus on outcomes, not processes**: We see where they are, not how they got there
- **Create false competitions**: Life isn't a zero-sum game where their success means our failure

## How Comparison Kills Growth

A growth mindset focuses on personal improvement—becoming better than you were yesterday. Comparison shifts this focus externally, leading to:

- **Discouragement**: "I'll never be that good, so why try?"
- **Envy**: Negative emotions that drain energy from growth
- **Shortcuts**: Attempting to skip steps others took to get ahead
- **Identity confusion**: Trying to follow someone else's path instead of your own

## Reframing: From Competition to Inspiration

The goal isn't to never notice others' achievements—it's to change how you respond:

### Before (Fixed Mindset Comparison)
"They're so successful. I'll never be like them. I must not be good enough."

### After (Growth Mindset Reframe)
"They've achieved something impressive. What can I learn from their journey that I can apply to my own path?"

## Practical Strategies

### 1. Limit Social Media

Curate your feeds ruthlessly. Follow accounts that inspire without triggering comparison. Take regular breaks from platforms that affect your mental state.

### 2. Create a "Comparison-Free" Practice

When you catch yourself comparing:
- Acknowledge the thought without judgment
- Remind yourself: "Their journey is not my journey"
- Refocus on your own goals and progress

### 3. Keep a Progress Journal

Document your own growth over time. When tempted to compare externally, look at how far you've come from where you started.

### 4. Compare to Your Past Self

The only fair comparison is you versus past you:
- "Am I better than I was last month?"
- "Have I learned something new this year?"
- "Am I closer to my goals than I was?"

### 5. Celebrate Others Genuinely

When you feel envy rising, practice genuine celebration. This transforms comparative energy into supportive energy and often comes back to benefit you.

## The Unique Journey Mindset

Every person has a unique combination of:
- Starting points
- Resources and opportunities
- Natural tendencies
- Life circumstances
- Goals and definitions of success

Comparing across these vastly different contexts is like comparing a fish's ability to climb trees with a monkey's. It's simply not a valid comparison.

## Key Takeaways

- Comparison is natural but can be managed
- External comparison undermines growth mindset
- The only valid comparison is with your past self
- Others' success can inspire rather than discourage

## Conclusion

Your journey is uniquely yours. No one else has your exact combination of experiences, challenges, and potential. When you embrace this truth and focus on your own growth, comparison loses its power. You're free to be inspired by others while running your own race, at your own pace, toward your own definition of success.
    `,
    faqs: [
      {
        question: 'Why is comparing yourself to others harmful?',
        answer: "Comparison is harmful because it often involves unfair contexts (comparing your struggles to others' highlights), creates discouragement, drains energy from personal growth, and can lead to envy and identity confusion. It shifts focus from personal improvement to external validation.",
      },
      {
        question: 'How can I stop comparing myself to others on social media?',
        answer: 'Limit your social media usage, curate your feeds to follow inspiring rather than triggering accounts, practice acknowledging comparison thoughts without judgment, keep a progress journal focused on your own growth, and take regular digital detox breaks.',
      },
    ],
  },
]

// Guide content
export interface Guide {
  slug: string
  title: string
  description: string
  readTime: string
  chapters: { title: string; content: string }[]
}

export const guides: Guide[] = [
  {
    slug: 'complete-guide-growth-mindset',
    title: 'The Complete Guide to Developing a Growth Mindset',
    description: 'A comprehensive guide covering everything you need to know about growth mindset: the science, practical applications, and transformation strategies.',
    readTime: '25 min read',
    chapters: [
      {
        title: 'Introduction: What Is a Growth Mindset?',
        content: `
A growth mindset is the belief that your abilities, intelligence, and talents can be developed through dedication, hard work, and learning. This concept, pioneered by psychologist Carol Dweck at Stanford University, has transformed how we understand human potential.

The opposite—a fixed mindset—assumes that our character, intelligence, and creative ability are static givens that we cannot meaningfully change. People with fixed mindsets believe you either have talent or you don't, you're smart or you're not.

Research has consistently shown that people with growth mindsets:
- Achieve more than those with fixed mindsets
- Handle setbacks more effectively
- Embrace challenges rather than avoid them
- View effort as the path to mastery
- Learn from criticism instead of ignoring it
- Find inspiration in others' success

This guide will walk you through understanding the science behind growth mindset, recognizing fixed mindset patterns, and implementing practical strategies to cultivate a growth-oriented approach to life.
        `,
      },
      {
        title: 'Chapter 1: The Science Behind Growth Mindset',
        content: `
## Neuroplasticity: The Brain's Ability to Change

For most of the 20th century, scientists believed the brain was fixed after childhood. We now know this is completely wrong. The brain remains "plastic"—capable of forming new connections and even growing new neurons—throughout our entire lives.

This scientific reality is the foundation of growth mindset. When you learn something new:
- Neurons form new connections (synapses)
- Repeated practice strengthens these connections
- The brain physically restructures itself

Studies using brain imaging technology have shown visible changes in brain structure after learning. London taxi drivers, for example, show enlarged hippocampi (the region responsible for spatial memory) compared to the general population.

## Key Research Findings

### The Power of Belief

Dweck's research found that students who were taught about neuroplasticity and the malleability of intelligence showed significant improvements in grades and motivation compared to control groups who received standard study skills training.

### Praise and Motivation

In a famous series of experiments, students praised for effort ("You worked really hard!") performed better on subsequent tasks than those praised for ability ("You're so smart!"). Ability praise actually led to decreased performance and risk avoidance.

### The Role of Struggle

Brain scans show increased activity during challenging tasks that involve struggle. This "productive struggle" is where the most learning happens. When tasks are too easy, the brain is barely engaged.

## The Neuroscience of Effort

When you're working hard at learning something difficult:
- The prefrontal cortex (planning and decision-making) is highly active
- The hippocampus (memory formation) is encoding new information
- Dopamine is released during "aha" moments, reinforcing learning
- New neural pathways are being constructed and strengthened

This is literally your brain growing. The struggle isn't a sign of failure—it's a sign of growth in action.
        `,
      },
      {
        title: 'Chapter 2: Recognizing Fixed Mindset Triggers',
        content: `
## Understanding Your Triggers

Even people with predominantly growth mindsets have fixed mindset triggers—situations that activate defensive, fixed thinking. Common triggers include:

### Challenge
When facing a difficult task, fixed mindset says: "This is too hard. I'm not capable."

### Criticism
When receiving feedback, fixed mindset says: "They're attacking me personally. They don't see my worth."

### Comparison
When seeing others succeed, fixed mindset says: "Their success proves my inadequacy."

### Setbacks
When experiencing failure, fixed mindset says: "This proves I don't have what it takes."

### Effort
When things require hard work, fixed mindset says: "If I was truly talented, this would come easily."

## The Fixed Mindset Voice

We all have an inner voice that can lean toward fixed or growth thinking. Learning to recognize this voice is the first step to changing it.

**Fixed mindset voice examples:**
- "You can't do this"
- "What if you fail?"
- "People will judge you"
- "You're not the kind of person who..."
- "It's too late to change"

## Mapping Your Personal Triggers

Take time to reflect on when you're most likely to slip into fixed mindset thinking:
- What situations make you defensive?
- When do you feel most threatened?
- What criticisms are hardest to hear?
- Where do you avoid challenges?

Understanding your triggers allows you to prepare growth mindset responses in advance.

## The Mindset Continuum

Remember: mindset isn't binary. Most people exist on a continuum, with growth mindset in some areas and fixed mindset in others. You might have:
- Growth mindset about athletic ability but fixed mindset about artistic talent
- Growth mindset about work skills but fixed mindset about social skills

Identifying your fixed mindset areas allows targeted growth.
        `,
      },
      {
        title: 'Chapter 3: Practical Strategies for Mindset Shift',
        content: `
## Strategy 1: Reframe Your Self-Talk

The words you use shape your thinking. Practice translating fixed statements into growth statements:

| Fixed | Growth |
|-------|--------|
| "I failed" | "I learned what doesn't work" |
| "I'm not good at this" | "I'm not good at this yet" |
| "This is too hard" | "This will take time and practice" |
| "I made a mistake" | "Mistakes help me improve" |
| "I can't do any better" | "I can always improve with effort" |

## Strategy 2: Embrace Productive Struggle

The brain grows most during challenging tasks. Deliberately seek experiences that:
- Push slightly beyond your current abilities
- Require sustained effort
- Involve some degree of failure and iteration

This doesn't mean constant struggle—balance is important. But regular, purposeful challenge is essential for growth.

## Strategy 3: Focus on Process, Not Just Outcomes

Shift attention from results to the learning process:
- Instead of "Did I win?" ask "Did I give my best effort?"
- Instead of "What grade did I get?" ask "What did I learn?"
- Instead of "Was I perfect?" ask "Am I improving?"

## Strategy 4: Learn from Criticism

Develop a protocol for receiving feedback:
1. Resist the initial defensive reaction
2. Listen fully without interrupting
3. Ask clarifying questions
4. Thank the person for their input
5. Reflect on what's useful
6. Create an action plan for improvement

## Strategy 5: Cultivate Curiosity

Curiosity is growth mindset in action. Practice:
- Asking questions without fear of looking ignorant
- Approaching new situations with openness
- Seeking out perspectives different from your own
- Viewing problems as puzzles to solve

## Strategy 6: Celebrate Others' Success

When you feel envy at someone's achievement:
1. Acknowledge the feeling without judgment
2. Reframe: "Their success shows what's possible"
3. Get curious: "What can I learn from their approach?"
4. Reach out: Congratulate them genuinely
        `,
      },
      {
        title: 'Chapter 4: Growth Mindset in Practice',
        content: `
## At Work

### Embracing Stretch Assignments
Seek projects that challenge you beyond your current skill level. When you don't know how to do something, say "I don't know how to do that yet, but I'd like to learn."

### Responding to Feedback
View performance reviews and criticism as information for growth, not verdicts on your worth. Ask managers for specific, actionable feedback regularly.

### Handling Setbacks
When projects fail or mistakes happen, focus on learning rather than blame. Ask: "What can we learn from this?" rather than "Whose fault was this?"

## In Relationships

### Communication
Believe that relationships can improve with effort. Instead of "That's just how they are," try "How can we grow together?"

### Conflict Resolution
Approach disagreements as opportunities to understand another perspective. Growth mindset in relationships means believing people can change and improve.

### Parenting
Praise children for effort, strategy, and improvement rather than innate ability. Model growth mindset by talking about your own learning process.

## In Learning

### Choosing Challenges
Deliberately select courses, books, and skills that stretch you. Easy wins feel good but don't promote growth.

### Tracking Progress
Keep a learning journal to document what you're studying and how you're improving. This creates tangible evidence of growth.

### Teaching Others
One of the best ways to solidify learning is to teach. Share what you're learning with others.

## In Health and Fitness

### Physical Capabilities
Believe your fitness can improve at any age. The body adapts to challenges just like the brain.

### Habit Formation
View habits as learnable skills. If you've failed to build a habit before, you haven't found the right approach yet.

### Recovery from Illness
A growth mindset supports healing. Believe in your body's ability to recover and adapt.
        `,
      },
      {
        title: 'Chapter 5: Maintaining Growth Mindset Long-Term',
        content: `
## Creating a Growth Environment

### Physical Space
Surround yourself with reminders of growth: books you're reading, progress trackers, inspirational quotes about learning and effort.

### Social Circle
Seek out growth-minded people. Attitudes are contagious—spend time with those who believe in improvement and embrace challenges.

### Information Diet
Consume content that reinforces growth: biographies of people who overcame obstacles, podcasts about learning, articles about neuroplasticity.

## Building Sustainable Habits

### Morning Growth Ritual
Start each day with growth-oriented reflection:
- What am I learning right now?
- What challenge will I embrace today?
- How will I respond to setbacks?

### Evening Review
End each day by reviewing:
- What did I learn today?
- Where did I demonstrate growth mindset?
- Where did fixed mindset show up?
- What will I do differently tomorrow?

### Weekly Practice
Set aside time each week for dedicated skill development. Treat this as non-negotiable growth time.

## Handling Regression

Everyone occasionally slides back into fixed mindset thinking. When this happens:
1. Notice without judgment
2. Get curious about the trigger
3. Remind yourself of growth mindset principles
4. Recommit to growth-oriented behavior
5. Move forward without dwelling on the slip

## The Long-Term View

Growth mindset is not a destination but a way of approaching life. The goal isn't to eliminate all fixed mindset thinking—that's unrealistic. The goal is to:
- Increasingly recognize fixed mindset patterns
- More quickly shift to growth-oriented responses
- Embrace an ever-expanding comfort zone
- Continue learning and growing throughout your life

Remember: the growth mindset journey itself follows growth mindset principles. You'll get better at it with practice, learn from setbacks, and continue improving over time.
        `,
      },
    ],
  },
  {
    slug: '30-day-mindset-transformation',
    title: 'From Fixed to Growth: A 30-Day Mindset Transformation',
    description: 'A practical, day-by-day guide to transforming your mindset over the course of one month.',
    readTime: '30 min read',
    chapters: [
      {
        title: 'Introduction: Your 30-Day Journey',
        content: `
## Welcome to Your Transformation

Over the next 30 days, you'll embark on a journey from fixed mindset patterns to a growth-oriented way of living. This isn't about quick fixes or surface-level changes—it's about rewiring how you think about challenges, failures, effort, and your own potential.

## How This Program Works

Each day includes:
- A core concept or practice to focus on
- A specific action to take
- A reflection prompt for journaling

The program is divided into four phases:
- **Days 1-7**: Awareness (recognizing your current patterns)
- **Days 8-14**: Reframing (changing how you interpret experiences)
- **Days 15-21**: Practice (building new habits)
- **Days 22-30**: Integration (solidifying your growth mindset)

## What You'll Need

- A journal or notebook
- 15-30 minutes daily
- An open mind
- Commitment to the process

## Setting Your Intention

Before beginning, take a moment to reflect:
- Why are you pursuing this transformation?
- What areas of life do you want to impact?
- What will be different when you've developed a stronger growth mindset?

Write down your answers. Return to them when motivation wavers.

Let's begin.
        `,
      },
      {
        title: 'Phase 1: Awareness (Days 1-7)',
        content: `
## Day 1: The Mindset Audit

**Concept:** Before changing anything, we need to understand where we're starting.

**Action:** Complete a personal mindset audit. For each area of life, rate yourself 1-5 (1 = very fixed, 5 = very growth-oriented):
- Intelligence and learning ability
- Athletic and physical abilities
- Creative talents
- Social and relationship skills
- Professional capabilities
- Emotional regulation

**Reflection:** Where are you most fixed? Where are you naturally growth-oriented?

---

## Day 2: Catching Fixed Mindset Thoughts

**Concept:** Fixed mindset thoughts often operate below conscious awareness.

**Action:** Set 3 alarms throughout the day. At each alarm, pause and notice your recent thoughts. Were any fixed in nature? Write them down.

**Reflection:** What patterns do you notice in your fixed mindset thinking?

---

## Day 3: Trigger Identification

**Concept:** Specific situations trigger fixed mindset responses.

**Action:** List 5 situations that make you feel defensive, inadequate, or avoidant. These are likely fixed mindset triggers.

**Reflection:** What do these triggers have in common?

---

## Day 4: The Fixed Mindset Voice

**Concept:** We all have an inner critic that speaks in fixed mindset language.

**Action:** Name your fixed mindset voice (some people call it their "inner critic" or give it a personal name). Throughout the day, notice when this voice speaks up.

**Reflection:** What messages does this voice typically deliver?

---

## Day 5: Observing Reactions to Failure

**Concept:** How we respond to failure reveals our mindset.

**Action:** Recall a recent failure or setback. Write in detail about how you reacted—emotionally, mentally, and behaviorally.

**Reflection:** What does this reaction reveal about your underlying beliefs?

---

## Day 6: Observing Reactions to Success

**Concept:** Mindset also shows in how we respond to success.

**Action:** Recall a recent success. How did you explain it to yourself? Luck? Talent? Effort? Circumstances?

**Reflection:** Do you take ownership of your successes as much as you should?

---

## Day 7: Week 1 Review

**Concept:** Integration and pattern recognition.

**Action:** Review your journal entries from the past week. Summarize:
- Your biggest fixed mindset patterns
- Your natural growth mindset areas
- Your most common triggers

**Reflection:** What surprised you about this week of awareness?
        `,
      },
      {
        title: 'Phase 2: Reframing (Days 8-14)',
        content: `
## Day 8: The Power of "Yet"

**Concept:** Adding "yet" transforms limitations into possibilities.

**Action:** Collect your fixed mindset statements from last week. Rewrite each one with "yet" at the end.

**Reflection:** How does adding "yet" change how you feel about these limitations?

---

## Day 9: Failure as Feedback

**Concept:** Every failure contains information for improvement.

**Action:** Take that failure from Day 5. Identify 3 specific lessons or insights it provided. How can you apply these going forward?

**Reflection:** How would viewing all failures as feedback change your relationship with risk?

---

## Day 10: The Effort Connection

**Concept:** In a growth mindset, effort isn't a sign of inadequacy—it's the path to mastery.

**Action:** Identify something you've always wished came easier. Write about how deliberate effort could develop this skill, step by step.

**Reflection:** Do you secretly believe talented people don't have to try hard? How does that belief affect you?

---

## Day 11: Reframing Criticism

**Concept:** Criticism is data for growth, not an attack on your worth.

**Action:** Recall a piece of criticism that stung. Rewrite the experience from a growth mindset perspective, focusing on what was useful in the feedback.

**Reflection:** What makes some criticism harder to hear than others?

---

## Day 12: Comparing for Inspiration

**Concept:** Others' success can inspire rather than threaten.

**Action:** Think of someone whose success you've envied. Write 5 things you could learn from their journey that apply to your own path.

**Reflection:** How can you shift from jealousy to curiosity?

---

## Day 13: Rewriting Your Stories

**Concept:** We all carry narratives about who we are and what we can do. These can be rewritten.

**Action:** Identify a limiting story you tell about yourself (e.g., "I'm not a math person"). Write a new, growth-oriented version of this story.

**Reflection:** How long have you been carrying this limiting story?

---

## Day 14: Week 2 Review

**Concept:** Consolidating your new interpretive frameworks.

**Action:** Create a personal "reframing cheat sheet"—a quick reference of your most common fixed mindset thoughts and their growth mindset translations.

**Reflection:** Which reframes feel most powerful for you?
        `,
      },
      {
        title: 'Phase 3: Practice (Days 15-21)',
        content: `
## Day 15: The Daily Challenge

**Concept:** Growth requires stepping outside your comfort zone.

**Action:** Identify one small challenge you've been avoiding. Do it today.

**Reflection:** How did it feel to push through avoidance?

---

## Day 16: Seeking Feedback

**Concept:** Proactively seeking feedback accelerates growth.

**Action:** Ask someone for specific feedback on something you're working to improve. Thank them genuinely for their input.

**Reflection:** What was hard about asking for feedback? What was valuable about receiving it?

---

## Day 17: Learning Something New

**Concept:** Novel learning experiences reinforce the growth mindset neural pathways.

**Action:** Spend 30 minutes learning something completely new—a skill, topic, or hobby you've never explored.

**Reflection:** How did it feel to be a beginner?

---

## Day 18: Teaching for Learning

**Concept:** Teaching others solidifies our own understanding and growth.

**Action:** Explain a growth mindset concept to someone who hasn't heard of it. Use your own examples.

**Reflection:** What did you understand more deeply by teaching it?

---

## Day 19: Effort Celebration

**Concept:** Celebrating effort reinforces the behavior of trying.

**Action:** At the end of the day, write down 5 moments where you gave significant effort, regardless of outcome. Celebrate each one.

**Reflection:** How does celebrating effort feel different from celebrating results?

---

## Day 20: The Productive Struggle

**Concept:** Deliberate practice means working at the edge of your abilities.

**Action:** Take something you're actively learning and spend 20 minutes on the hardest part—the part you usually skip or rush through.

**Reflection:** What happened in your brain during that productive struggle?

---

## Day 21: Week 3 Review

**Concept:** Establishing your growth practice routine.

**Action:** Design a sustainable daily growth practice—a set of 3-5 activities you can do each day to maintain growth mindset.

**Reflection:** What practices from this week do you want to continue long-term?
        `,
      },
      {
        title: 'Phase 4: Integration (Days 22-30)',
        content: `
## Day 22: Growth in Relationships

**Concept:** Growth mindset transforms how we relate to others.

**Action:** Identify one relationship you'd like to improve. Apply growth mindset principles—believe it can grow, seek feedback, put in effort.

**Reflection:** How does growth mindset change your approach to relationships?

---

## Day 23: Growth at Work

**Concept:** Professional development flourishes with growth mindset.

**Action:** Identify a stretch goal at work—something that would require you to grow new capabilities. Begin planning how to pursue it.

**Reflection:** What's holding you back from growth in your career?

---

## Day 24: Modeling Growth Mindset

**Concept:** Your mindset influences those around you.

**Action:** Intentionally model growth mindset for others today—share your learning process, admit what you don't know, celebrate effort over talent.

**Reflection:** How did people respond to your growth mindset modeling?

---

## Day 25: Handling Setbacks

**Concept:** Testing your growth mindset under pressure.

**Action:** Deliberately attempt something where failure is likely. When it doesn't work perfectly, practice your growth mindset response in real time.

**Reflection:** How different is your response to setbacks now compared to Day 1?

---

## Day 26: Long-Term Vision

**Concept:** Growth mindset is a lifelong orientation.

**Action:** Write a letter to yourself 5 years from now, describing who you'll become by consistently applying growth mindset principles.

**Reflection:** What becomes possible with 5 years of growth-oriented living?

---

## Day 27: Creating Your Environment

**Concept:** Your environment should support growth.

**Action:** Make 3 changes to your physical or social environment that will remind and encourage growth mindset.

**Reflection:** How does your environment currently support or hinder growth?

---

## Day 28: Teaching Your Mindset

**Concept:** Helping others develop growth mindset deepens your own.

**Action:** Create a simple guide or conversation outline you could use to introduce someone else to growth mindset.

**Reflection:** Who in your life could benefit from learning about growth mindset?

---

## Day 29: Gratitude for the Journey

**Concept:** Appreciating how far you've come fuels continued growth.

**Action:** Write a detailed gratitude entry about your 30-day journey—the challenges, the insights, the changes.

**Reflection:** What are you most grateful for from this experience?

---

## Day 30: Commitment to Growth

**Concept:** This is not the end, but a new beginning.

**Action:** Write a personal commitment to continued growth. Include:
- Your ongoing practices
- Your growth goals
- How you'll handle setbacks
- How you'll measure progress

**Reflection:** Who are you now, compared to 30 days ago? Who will you become?

---

## Congratulations

You've completed the 30-day transformation. But remember—developing a growth mindset is not a 30-day project. It's a lifetime practice. Return to these exercises whenever you need a refresh, and keep growing.
        `,
      },
    ],
  },
]

// Glossary terms
export interface GlossaryTerm {
  slug: string
  term: string
  definition: string
  fullExplanation: string
  relatedTerms: string[]
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: 'growth-mindset',
    term: 'Growth Mindset',
    definition: 'The belief that abilities and intelligence can be developed through dedication, hard work, and learning from failures.',
    fullExplanation: `
A growth mindset is a term coined by psychologist Carol Dweck to describe the belief that your most basic abilities can be developed through dedication and hard work—brains and talent are just the starting point. This view creates a love of learning and resilience that is essential for great accomplishment.

People with a growth mindset:
- Embrace challenges as opportunities to grow
- Persist in the face of setbacks
- See effort as the path to mastery
- Learn from criticism
- Find lessons and inspiration in others' success

The opposite is a fixed mindset—the belief that intelligence and abilities are static traits that cannot be significantly changed. Research consistently shows that those who adopt a growth mindset achieve more over time than those with fixed mindsets.

Growth mindset is not just about effort. It's about trying new strategies, seeking help when needed, and continuously learning. The good news is that mindset can be changed—neuroplasticity supports our ability to develop new ways of thinking at any age.
    `,
    relatedTerms: ['fixed-mindset', 'neuroplasticity', 'deliberate-practice'],
  },
  {
    slug: 'fixed-mindset',
    term: 'Fixed Mindset',
    definition: 'The belief that intelligence, abilities, and talents are fixed traits that cannot be significantly developed.',
    fullExplanation: `
A fixed mindset is the belief that your qualities are carved in stone. You have a certain amount of intelligence, a certain personality, and a certain moral character—and nothing you do can change that in any meaningful way.

People with a fixed mindset tend to:
- Avoid challenges that might reveal inadequacy
- Give up easily when obstacles arise
- See effort as fruitless if you don't have "natural talent"
- Ignore useful criticism
- Feel threatened by others' success

The fixed mindset creates an urgency to prove yourself over and over. If you have only a certain amount of intelligence, a certain personality, and a certain moral character—well, then you'd better prove you have a healthy dose of them. Every situation is evaluated: Will I succeed or fail? Will I look smart or dumb? Will I be accepted or rejected?

The good news is that mindset is not permanent. Through awareness and practice, fixed mindset patterns can be shifted toward growth orientation. Understanding when and where your fixed mindset appears is the first step to changing it.
    `,
    relatedTerms: ['growth-mindset', 'resilience'],
  },
  {
    slug: 'neuroplasticity',
    term: 'Neuroplasticity',
    definition: "The brain's ability to reorganize itself by forming new neural connections throughout life.",
    fullExplanation: `
Neuroplasticity (also known as neural plasticity or brain plasticity) refers to the brain's ability to change and adapt throughout a person's lifetime. This includes the ability to:

- Form new neural connections
- Strengthen existing pathways through repetition
- Reassign functions from damaged areas to healthy ones
- Grow new neurons (neurogenesis)

For much of the 20th century, scientists believed the adult brain was fixed and incapable of significant change. Research has thoroughly disproven this, showing that the brain remains plastic throughout life.

Key factors that promote neuroplasticity:
- Learning new skills
- Physical exercise
- Quality sleep
- Novel experiences
- Challenging mental activities
- Stress management

Neuroplasticity is the scientific foundation for the growth mindset concept. It proves that our brains can literally change based on our experiences, learning, and practice. When you believe you can improve and then act on that belief, you're not just thinking positively—you're engaging in a process that physically changes your brain.
    `,
    relatedTerms: ['growth-mindset', 'deliberate-practice'],
  },
  {
    slug: 'deliberate-practice',
    term: 'Deliberate Practice',
    definition: 'A structured form of practice specifically designed to improve performance, involving focused attention and specific goals.',
    fullExplanation: `
Deliberate practice is a highly structured activity with the specific goal of improving performance. It was first identified by psychologist Anders Ericsson, who studied how experts in various fields develop their skills.

Key characteristics of deliberate practice:

1. **Specific goals**: Working on particular aspects of performance, not just general practice
2. **Intense focus**: Full concentration, not mindless repetition
3. **Immediate feedback**: Knowing what's working and what isn't
4. **Working at the edge**: Practicing at a difficulty level that stretches current abilities
5. **Repetition with refinement**: Doing it again, but better each time

Deliberate practice is different from regular practice in several important ways:
- Regular practice is often comfortable; deliberate practice is often uncomfortable
- Regular practice maintains current skills; deliberate practice improves them
- Regular practice can be mindless; deliberate practice requires full engagement

Research shows that deliberate practice is the single most important factor in developing expertise in virtually any field. It's not just about putting in hours—it's about how you spend those hours. This concept directly supports growth mindset by showing that improvement is possible through the right kind of effort.
    `,
    relatedTerms: ['growth-mindset', 'neuroplasticity'],
  },
  {
    slug: 'resilience',
    term: 'Resilience',
    definition: 'The capacity to recover quickly from difficulties and adapt to challenging circumstances.',
    fullExplanation: `
Resilience is the ability to mentally and emotionally cope with adversity, trauma, or significant sources of stress. Rather than falling apart in the face of difficulty, resilient people find ways to adapt, recover, and often grow stronger.

Components of resilience:

1. **Emotional regulation**: Managing emotions during stressful situations
2. **Realistic optimism**: Believing in positive outcomes while accepting current reality
3. **Cognitive flexibility**: Finding new ways to interpret and respond to challenges
4. **Social connection**: Drawing on relationships for support
5. **Sense of purpose**: Having meaning that transcends immediate difficulties

Resilience is not a fixed trait—it can be developed over time. Building resilience involves:
- Developing strong relationships
- Accepting change as part of life
- Taking decisive action in difficult situations
- Nurturing a positive self-view
- Keeping things in perspective
- Maintaining hope and optimism

Resilience is closely linked to growth mindset. People who believe they can learn and grow are more likely to persist through difficulties, viewing setbacks as temporary and surmountable rather than permanent and defining.
    `,
    relatedTerms: ['growth-mindset', 'fixed-mindset'],
  },
]

// FAQ content
export interface FAQ {
  question: string
  answer: string
  category: string
}

export const faqs: FAQ[] = [
  {
    question: 'What is a growth mindset?',
    answer: 'A growth mindset is the belief that your abilities and intelligence can be developed through dedication, hard work, and learning from failures. This concept, developed by psychologist Carol Dweck, contrasts with a fixed mindset, which assumes abilities are static and unchangeable.',
    category: 'Basics',
  },
  {
    question: 'How is growth mindset different from positive thinking?',
    answer: "Growth mindset is not just about being positive. It's about believing in the ability to develop skills through effort and learning. You can have a growth mindset while acknowledging current limitations—the difference is believing those limitations can change. Positive thinking alone doesn't include this belief in development through practice.",
    category: 'Basics',
  },
  {
    question: 'Can you develop a growth mindset at any age?',
    answer: "Yes, you can develop a growth mindset at any age. Neuroplasticity research confirms that the brain remains capable of change throughout life. While children may adopt mindsets more easily, adults can consciously work to shift their thinking from fixed to growth-oriented through awareness, practice, and consistent effort.",
    category: 'Development',
  },
  {
    question: 'How long does it take to develop a growth mindset?',
    answer: "Developing a growth mindset is an ongoing journey rather than a destination with a fixed timeline. Most people begin noticing shifts in their thinking within 2-3 months of consistent practice. However, fully internalizing a growth mindset can take years of conscious effort, and even then, fixed mindset triggers may still arise in certain situations.",
    category: 'Development',
  },
  {
    question: 'What are common signs of a fixed mindset?',
    answer: 'Common signs of a fixed mindset include: avoiding challenges for fear of failure, giving up easily when obstacles arise, viewing effort as pointless if you lack natural talent, ignoring or becoming defensive about criticism, and feeling threatened by others\' success. You might also notice thoughts like "I\'m just not good at this" or "I can\'t change."',
    category: 'Identification',
  },
  {
    question: 'How can I help my children develop a growth mindset?',
    answer: 'To help children develop a growth mindset: praise effort and strategy rather than innate ability, encourage them to embrace challenges, teach them that mistakes are learning opportunities, model growth mindset thinking yourself, use "yet" language ("You can\'t do it yet"), and avoid labeling them as "smart" or "talented" in ways that suggest fixed traits.',
    category: 'Application',
  },
  {
    question: 'Is growth mindset scientifically proven?',
    answer: 'Yes, growth mindset is supported by significant scientific research. Dr. Carol Dweck and colleagues have conducted numerous studies showing that students taught about brain plasticity and the ability to grow intelligence showed greater academic improvement than control groups. Neuroplasticity research further supports the biological basis for growth mindset.',
    category: 'Research',
  },
  {
    question: 'Can growth mindset improve workplace performance?',
    answer: 'Research shows growth mindset significantly impacts workplace performance. Employees with growth mindsets are more likely to seek challenges, persist through setbacks, embrace feedback, and continuously develop new skills. Organizations that foster growth mindset culture see improved innovation, collaboration, and employee development.',
    category: 'Application',
  },
  {
    question: 'What role does failure play in growth mindset?',
    answer: "In a growth mindset, failure is viewed as an essential part of learning rather than a verdict on ability. Each failure provides valuable feedback about what doesn't work, informing future approaches. People with growth mindsets don't enjoy failure, but they don't fear it either—they understand it's a necessary step on the path to mastery.",
    category: 'Concepts',
  },
  {
    question: 'How can I overcome setbacks with a growth mindset?',
    answer: 'To overcome setbacks with a growth mindset: first, acknowledge your emotions without judgment. Then, reframe the setback as data—what can you learn? Ask what you could do differently next time. Seek feedback from others. Remember that setbacks are temporary and don\'t define your ability. Finally, create a specific plan for moving forward and get back to practice.',
    category: 'Application',
  },
]

// Feed content (LinkedIn-style posts)
export interface FeedPost {
  id: string
  content: string
  likes: number
  comments: number
  date: string
  category: string
}

export const feedPosts: FeedPost[] = [
  {
    id: '1',
    content: "Your brain doesn't have a \"full\" sign. Every single day, you're capable of learning something new—no matter your age. That's what neuroplasticity teaches us.\n\nStop telling yourself you're \"too old\" to learn.\nStop believing you've \"maxed out\" your potential.\n\nThe only limit is the one you accept.",
    likes: 2847,
    comments: 156,
    date: '2024-01-18',
    category: 'Motivation',
  },
  {
    id: '2',
    content: "Fixed mindset: \"I failed. I'm not good enough.\"\n\nGrowth mindset: \"I failed. Now I know one more way that doesn't work.\"\n\nSame experience. Completely different interpretation.\n\nThe story you tell yourself about your experiences shapes your entire life.",
    likes: 4521,
    comments: 289,
    date: '2024-01-16',
    category: 'Mindset',
  },
  {
    id: '3',
    content: "The phrase \"I can't do it\" closes doors.\n\nThe phrase \"I can't do it YET\" opens them.\n\nOne word. Complete transformation.\n\nStart adding \"yet\" to your vocabulary today.",
    likes: 6234,
    comments: 412,
    date: '2024-01-14',
    category: 'Tips',
  },
  {
    id: '4',
    content: "Praising kids for being \"smart\" actually hurts them.\n\nWhen they face something hard, they think: \"If I struggle, I must not be smart.\"\n\nSo they avoid challenges.\n\nInstead, praise effort:\n→ \"You worked really hard on that!\"\n→ \"I love how you didn't give up.\"\n→ \"Your practice is paying off!\"\n\nThis builds resilience, not fragility.",
    likes: 8912,
    comments: 567,
    date: '2024-01-12',
    category: 'Parenting',
  },
  {
    id: '5',
    content: "Your comfort zone is comfortable.\n\nBut nothing grows there.\n\nEvery master was once a disaster.\nEvery expert was once a beginner.\nEvery success story started with struggle.\n\nStep outside. Get uncomfortable. Grow.",
    likes: 5678,
    comments: 234,
    date: '2024-01-10',
    category: 'Motivation',
  },
  {
    id: '6',
    content: "The most successful people aren't the ones who never fail.\n\nThey're the ones who fail the most.\n\nThey try more things.\nThey take more risks.\nThey learn more lessons.\n\nEvery failure is a stepping stone when you have a growth mindset.",
    likes: 7234,
    comments: 445,
    date: '2024-01-08',
    category: 'Success',
  },
  {
    id: '7',
    content: "Fixed mindset sees feedback as criticism.\nGrowth mindset sees feedback as information.\n\nOne makes you defensive.\nThe other makes you better.\n\nHow you receive feedback determines how fast you grow.",
    likes: 3890,
    comments: 189,
    date: '2024-01-06',
    category: 'Mindset',
  },
  {
    id: '8',
    content: "Effort isn't a sign that you lack talent.\n\nEffort is how you DEVELOP talent.\n\nThe greatest athletes train daily.\nThe best writers write every day.\nThe top performers never stop practicing.\n\nStop waiting for things to come easy. Start working to make them easier.",
    likes: 5123,
    comments: 278,
    date: '2024-01-04',
    category: 'Motivation',
  },
]
