"use client"

import type React from "react"

import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Comment {
  id: number
  name: string
  comment: string
  date: string
}

export function CommentForm({ postId }: { postId: number }) {
  const [comments, setComments] = useState<Comment[]>([])
  const [name, setName] = useState("")
  const [commentText, setCommentText] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim() && commentText.trim()) {
      const newComment: Comment = {
        id: comments.length + 1,
        name: name.trim(),
        comment: commentText.trim(),
        date: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      }
      setComments([...comments, newComment])
      setName("")
      setCommentText("")
    }
  }

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h3 className="text-xl font-semibold">Leave a Comment</h3>
        <div>
          <Input id="name" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <Textarea
            id="comment"
            placeholder="Write your comment here..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            rows={5}
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Submit Comment
        </Button>
      </form>

      <div className="space-y-6">
        {comments.length === 0 ? (
          <p className="text-muted-foreground text-center">No comments yet. Be the first to comment!</p>
        ) : (
          comments.map((comment) => (
            <Card key={comment.id}>
              <CardContent className="p-4 flex items-start space-x-4">
                <Avatar className="w-10 h-10 border">
                  <AvatarImage src="/placeholder-user.jpg" alt={comment.name} />
                  <AvatarFallback>{comment.name.charAt(0).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-semibold">{comment.name}</CardTitle>
                    <span className="text-sm text-muted-foreground">{comment.date}</span>
                  </div>
                  <p className="text-muted-foreground mt-1">{comment.comment}</p>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
