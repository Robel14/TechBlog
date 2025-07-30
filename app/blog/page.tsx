"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { PostCard } from "@/components/post-card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { CreateBlogForm } from "@/components/create-blog-form"
import { initialBlogPosts, type Post } from "@/lib/mock-posts"

export default function BlogListPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Load initial posts and any dynamically created posts from localStorage
    const storedDynamicPosts = JSON.parse(localStorage.getItem("dynamicBlogPosts") || "[]") as Post[]
    // Combine dynamic posts (first) with initial static posts
    setPosts([...storedDynamicPosts, ...initialBlogPosts])
  }, [])

  const handleCreateBlog = (newBlog: Post) => {
    // Add new blog to the front of the current list
    const updatedPosts = [newBlog, ...posts]
    setPosts(updatedPosts)

    // Also save to localStorage for persistence across client-side routes
    const storedDynamicPosts = JSON.parse(localStorage.getItem("dynamicBlogPosts") || "[]") as Post[]
    localStorage.setItem("dynamicBlogPosts", JSON.stringify([newBlog, ...storedDynamicPosts]))

    setIsDialogOpen(false) // Close the dialog
    router.push(`/blog/${newBlog.id}`) // Redirect to the new blog post
  }

  const handleDeleteBlog = (id: number) => {
    // Filter out the deleted post from the current state
    const updatedPosts = posts.filter((post) => post.id !== id)
    setPosts(updatedPosts)

    // Update localStorage by filtering out the deleted post from dynamic posts
    const storedDynamicPosts = JSON.parse(localStorage.getItem("dynamicBlogPosts") || "[]") as Post[]
    const updatedDynamicPosts = storedDynamicPosts.filter((post) => post.id !== id)
    localStorage.setItem("dynamicBlogPosts", JSON.stringify(updatedDynamicPosts))
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">All Blog Posts</h1>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>Create New Blog</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Create New Blog Post</DialogTitle>
              <DialogDescription>Fill in the details below to create a new blog post.</DialogDescription>
            </DialogHeader>
            <CreateBlogForm onCreateBlog={handleCreateBlog} onClose={() => setIsDialogOpen(false)} />
          </DialogContent>
        </Dialog>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            // Check if the post ID exists in initialBlogPosts to determine if it's deletable
            isDeletable={!initialBlogPosts.some((p) => p.id === post.id)}
            onDelete={handleDeleteBlog}
          />
        ))}
      </div>
    </div>
  )
}
