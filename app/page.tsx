import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HomePage() {
  return (
    <section className="relative flex flex-col items-center justify-center h-[calc(100vh-160px)] text-center overflow-hidden rounded-lg shadow-lg">
      <Image
        src="/placeholder.svg?height=800&width=1200"
        alt="Tech background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 opacity-20" // The problematic backslash has been removed from here
        priority={true} // Set priority to true for LCP optimization [^1][^2]
      />
      <div className="relative z-10 p-8 bg-background/80 rounded-lg backdrop-blur-sm border border-border">
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-foreground">
          Welcome to My Tech Blog
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Your go-to source for the latest in web development, programming, and technology insights.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="/blog">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Explore All Posts
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
