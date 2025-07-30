"use client"

import type React from "react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { DialogFooter } from "@/components/ui/dialog"
import type { Post } from "@/lib/mock-posts"

interface CreateBlogFormProps {
  onCreateBlog: (newBlog: Post) => void
  onClose: () => void
}

export function CreateBlogForm({ onCreateBlog, onClose }: CreateBlogFormProps) {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [authorName, setAuthorName] = useState("")
  const [imageUrl, setImageUrl] = useState("") // State for image URL

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (title.trim() && body.trim() && authorName.trim()) {
      const newBlog: Post = {
        id: Date.now(), // Simple unique ID
        userId: Math.floor(Math.random() * 10) + 1, // Assign a random userId for mock author
        title: title.trim(),
        body: body.trim(),
        imageUrl:
          imageUrl.trim() ||
          `/placeholder.svg?height=400&width=800&query=${encodeURIComponent(title.trim() || "blog post default")}`, // Use provided URL or generate
        authorName: authorName.trim(), // Include authorName
      }
      onCreateBlog(newBlog)
      // onClose() is called by the parent component after onCreateBlog
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="title" className="text-right">
          Title
        </Label>
        <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="col-span-3" required />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="authorName" className="text-right">
          Author Name
        </Label>
        <Input
          id="authorName"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          className="col-span-3"
          required
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="imageUrl" className="text-right">
          Image URL
        </Label>
        <Input
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="col-span-3"
          placeholder="e.g., https://example.com/image.jpg (optional)"
        />
      </div>
      <div className="grid grid-cols-4 items-start gap-4">
        <Label htmlFor="body" className="text-right pt-2">
          Content
        </Label>
        <Textarea
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="col-span-3 min-h-[150px]"
          required
        />
      </div>
      <DialogFooter>
        <Button type="submit">Create Blog</Button>
      </DialogFooter>
    </form>
  )
}
