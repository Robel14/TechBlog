"use client" // This page must be a client component to access localStorage

import Image from "next/image"
import { CommentForm } from "@/components/comment-form"
import { initialBlogPosts, type Post } from "@/lib/mock-posts"
import { useState, useEffect } from "react"

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const postId = Number.parseInt(params.id)
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true)
      setError(null)
      try {
        // Try to find the post in initial static data
        let foundPost: Post | undefined = initialBlogPosts.find((p) => p.id === postId)

        // If not found, try to find it in localStorage (dynamically created posts)
        if (!foundPost) {
          const storedDynamicPosts = JSON.parse(localStorage.getItem("dynamicBlogPosts") || "[]") as Post[]
          foundPost = storedDynamicPosts.find((p) => p.id === postId)
        }

        if (foundPost) {
          setPost(foundPost)
          // No need to fetch author from JSONPlaceholder, use post.authorName directly
        } else {
          setError("Blog Post Not Found")
        }
      } catch (err) {
        console.error("Error fetching post:", err)
        setError("Failed to load blog post. Please try again.")
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [postId])

  if (loading) {
    return <div className="text-center py-12 text-lg">Loading blog post...</div>
  }

  if (error) {
    return (
      <div className="text-center py-12 text-red-500">
        <h1 className="text-3xl font-bold">Error</h1>
        <p className="text-muted-foreground mt-2">{error}</p>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="text-center py-12">
        <h1 className="text-3xl font-bold">Blog Post Not Found</h1>
        <p className="text-muted-foreground mt-2">The post you are looking for does not exist.</p>
      </div>
    )
  }

  return (
    <article className="max-w-3xl mx-auto space-y-8 py-8">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">{post.title}</h1>
        <p className="text-muted-foreground text-lg">
          By <span className="font-medium">{post.authorName || "Unknown Author"}</span>
        </p>
      </div>
      <Image
        src={post.imageUrl || "/placeholder.svg?height=400&width=800&query=blog post default"}
        alt={`Cover image for ${post.title}`}
        width={800}
        height={400}
        className="w-full h-auto rounded-lg object-cover"
      />
      <div className="prose prose-lg dark:prose-invert mx-auto">
        <p>{post.body}</p>
        <p>
          This is a placeholder for additional content. In a real application, you would have more detailed blog content
          here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
      </div>

      <section className="mt-12 border-t pt-8">
        <h2 className="text-2xl font-bold mb-6">Comments</h2>
        <CommentForm postId={post.id} />
      </section>
    </article>
  )
}
