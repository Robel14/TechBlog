import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
      <Link href="/" className="text-2xl font-bold" prefetch={false}>
        My Blog
      </Link>
      <nav className="space-x-4">
        <Link href="/" prefetch={false}>
          <Button variant="ghost" className="text-primary-foreground hover:bg-primary/80">
            Home
          </Button>
        </Link>
        <Link href="/blog" prefetch={false}>
          <Button variant="ghost" className="text-primary-foreground hover:bg-primary/80">
            Blog
          </Button>
        </Link>
      </nav>
    </header>
  )
}
