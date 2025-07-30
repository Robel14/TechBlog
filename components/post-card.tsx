"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import type { Post } from "@/lib/mock-posts" // Import Post type
import { Trash2 } from "lucide-react" // Import delete icon

interface PostCardProps {
  post: Post
  isDeletable: boolean
  onDelete: (id: number) => void
}

export function PostCard({ post, isDeletable, onDelete }: PostCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="relative">
        <Image
          src={post.imageUrl || "/placeholder.svg?height=400&width=800&query=blog post default"}
          alt={`Cover image for ${post.title}`}
          width={300}
          height={200}
          className="w-full h-48 object-cover rounded-t-lg mb-4"
        />
        {isDeletable && (
          <Button
            variant="destructive"
            size="icon"
            className="absolute top-4 right-4 rounded-full"
            onClick={() => onDelete(post.id)}
            aria-label={`Delete blog post: ${post.title}`}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        )}
        <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
        <CardDescription className="line-clamp-3">{post.body}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto">
        <Link href={`/blog/${post.id}`}>
          <Button className="w-full">Read More</Button>
        </Link>
      </CardContent>
    </Card>
  )
}
