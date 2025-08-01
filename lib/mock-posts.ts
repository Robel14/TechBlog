export interface Post {
  id: number
  title: string
  body: string
  userId: number
  imageUrl?: string
  authorName?: string // Added authorName
}

export const initialBlogPosts: Post[] = [
  {
    id: 1,
    title: "The Future of Web Development: A Look Ahead",
    body: "Explore the exciting trends shaping the web, from AI-powered tools to serverless architectures and the rise of WebAssembly. Discover how these innovations are transforming how we build and interact with online experiences.",
    userId: 1,
    imageUrl: "/download%20(1).jpg",
    authorName: "Alice Johnson",
  },
  {
    id: 2,
    title: "Mastering React Hooks: Tips and Best Practices",
    body: "Dive deep into React Hooks and learn how to leverage them for cleaner, more efficient, and reusable components. This guide covers common pitfalls and advanced patterns to help you write better React applications.",
    userId: 2,
    imageUrl: "/download%20(2).jpg",
    authorName: "Bob Williams",
  },
  {
    id: 3,
    title: "Understanding Serverless Functions: A Beginner's Guide",
    body: "Demystify serverless computing and understand how functions-as-a-service (FaaS) can simplify deployment and scaling. Learn about the benefits and use cases for serverless architectures in modern applications.",
    userId: 3,
    imageUrl: "/download%20(3).jpg",
    authorName: "Charlie Brown",
  },
  {
    id: 4,
    title: "The Impact of AI on Software Engineering",
    body: "Artificial intelligence is rapidly changing the landscape of software development. This post examines how AI tools are assisting developers, automating tasks, and opening new possibilities for innovation.",
    userId: 4,
    imageUrl: "/download.jpg",
    authorName: "Diana Prince",
  },
  {
    id: 5,
    title: "Building Scalable APIs with Node.js and Express",
    body: "Learn the fundamentals of building robust and scalable RESTful APIs using Node.js and the Express framework. We'll cover best practices for routing, middleware, and database integration.",
    userId: 5,
    imageUrl: "/download.png",
    authorName: "Eve Adams",
  },
  {
    id: 6,
    title: "Cybersecurity Essentials for Developers",
    body: "In an increasingly connected world, cybersecurity is paramount. This article provides essential security practices and considerations that every developer should be aware of to build more secure applications.",
    userId: 6,
    imageUrl: "/placeholder.svg?height=200&width=300",
    authorName: "Frank White",
  },
]
