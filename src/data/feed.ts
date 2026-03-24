/**
 * FEED CONFIGURATION - Growth Mindset
 *
 * Add your top LinkedIn posts here. Each post needs:
 * - linkedInUrl: Direct link to the LinkedIn post
 * - content: The post text (copy from LinkedIn)
 * - likes, comments, reposts: Current engagement numbers
 * - date: When it was posted (YYYY-MM-DD)
 *
 * Tips:
 * - Feature your 5-10 best performing posts
 * - Update engagement numbers periodically
 * - Put newest/best posts first
 */

export interface FeedPost {
  id: string
  linkedInUrl: string
  content: string
  likes: number
  comments: number
  reposts?: number
  date: string
}

export const feedConfig = {
  pageName: "Growth Mindset",
  linkedInUrl: "https://www.linkedin.com/company/growth-mindset-big-brain/",
  followers: "240,891",
  description: "Daily inspiration and insights from our LinkedIn community.",
}

// Add your top posts below - update URLs and engagement numbers as needed
export const feedPosts: FeedPost[] = [
  // EXAMPLE POST - Replace with your actual posts
  {
    id: "1",
    linkedInUrl: "https://www.linkedin.com/company/growth-mindset-big-brain/posts/", // Replace with actual post URL
    content: `Your brain doesn't have a "full" sign. Every single day, you're capable of learning something new—no matter your age. That's what neuroplasticity teaches us.

Stop telling yourself you're "too old" to learn.
Stop believing you've "maxed out" your potential.

The only limit is the one you accept.`,
    likes: 2847,
    comments: 156,
    reposts: 89,
    date: "2024-01-18",
  },
  {
    id: "2",
    linkedInUrl: "https://www.linkedin.com/company/growth-mindset-big-brain/posts/",
    content: `Fixed mindset: "I failed. I'm not good enough."

Growth mindset: "I failed. Now I know one more way that doesn't work."

Same experience. Completely different interpretation.

The story you tell yourself about your experiences shapes your entire life.`,
    likes: 4521,
    comments: 289,
    reposts: 203,
    date: "2024-01-16",
  },
  {
    id: "3",
    linkedInUrl: "https://www.linkedin.com/company/growth-mindset-big-brain/posts/",
    content: `The phrase "I can't do it" closes doors.

The phrase "I can't do it YET" opens them.

One word. Complete transformation.

Start adding "yet" to your vocabulary today.`,
    likes: 6234,
    comments: 412,
    reposts: 341,
    date: "2024-01-14",
  },
  // --- Scraped 2026-03-24 ---
  {
    id: "4",
    linkedInUrl: "https://www.linkedin.com/company/growth-mindset-big-brain/posts/",
    content: `Same job. Same mindset. Same results.

If you want different outcomes, you have to think differently first.

The job doesn't change you. You change the job.`,
    likes: 808,
    comments: 39,
    date: "2026-03-24",
  },
  {
    id: "5",
    linkedInUrl: "https://www.linkedin.com/company/growth-mindset-big-brain/posts/",
    content: `Stop glorifying the grind.

Working 80 hours a week isn't a badge of honour.
It's a warning sign.

Rest is not the enemy of progress. It's the fuel for it.`,
    likes: 143,
    comments: 9,
    reposts: 9,
    date: "2026-03-24",
  },
  {
    id: "6",
    linkedInUrl: "https://www.linkedin.com/company/growth-mindset-big-brain/posts/",
    content: `You're not "bad at it."

You're just not patient enough to get good.

Every expert was once a complete beginner.
The only difference? They didn't quit before the breakthrough.`,
    likes: 118,
    comments: 10,
    date: "2026-03-24",
  },
  // Add more posts here...
]
