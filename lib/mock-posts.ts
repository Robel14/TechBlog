export interface Post {
  userId: number // Keeping userId for potential future use or consistency with JSONPlaceholder structure
  id: number
  title: string
  body: string
  imageUrl: string
  authorName: string // Added authorName
}

export const initialBlogPosts: Post[] = [
  {
    userId: 1,
    id: 101,
    title: "The Future of Web Development: A Look Ahead",
    body: "Explore the exciting trends shaping the web, from AI-powered tools to serverless architectures and the rise of WebAssembly. Discover how these innovations are changing the way we build and interact with online experiences.",
    imageUrl: "/placeholder.svg?height=400&width=800",
    authorName: "Alice Johnson",
  },
  {
    userId: 2,
    id: 102,
    title: "Mastering React Hooks: Tips and Best Practices",
    body: "Dive deep into React Hooks and learn how to leverage them for cleaner, more efficient, and reusable components. This guide covers common pitfalls and provides practical examples to elevate your React skills.",
    imageUrl: "/placeholder.svg?height=400&width=800",
    authorName: "Bob Williams",
  },
  {
    userId: 3,
    id: 103,
    title: "Understanding Serverless Functions: A Beginner's Guide",
    body: "Demystify serverless computing and understand how functions-as-a-service (FaaS) can simplify deployment and scaling. Learn about the benefits and use cases for building modern, event-driven applications.",
    imageUrl: "/placeholder.svg?height=400&width=800",
    authorName: "Charlie Brown",
  },
  {
    userId: 4,
    id: 104,
    title: "Optimizing Next.js Performance: A Comprehensive Checklist",
    body: "Boost your Next.js application's speed and responsiveness with this detailed checklist. From image optimization to data fetching strategies and code splitting, discover techniques to deliver a lightning-fast user experience.",
    imageUrl: "/placeholder.svg?height=400&width=800",
    authorName: "Diana Miller",
  },
  {
    userId: 5,
    id: 105,
    title: "The Power of Tailwind CSS: Rapid UI Development",
    body: "Unleash the potential of Tailwind CSS for building beautiful and responsive user interfaces with unprecedented speed. Learn how its utility-first approach streamlines styling and enhances developer productivity.",
    imageUrl: "/placeholder.svg?height=400&width=800",
    authorName: "Eve Davis",
  },
]
