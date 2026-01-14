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
  followers: "204,000+",
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
  // Add more posts here...
]
