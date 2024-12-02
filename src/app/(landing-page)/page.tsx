import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-5 items-center justify-center h-full">
      <h1 className="text-4xl font-bold">
        Home
      </h1>
      <Link href="/app">
        <Button>Go to app</Button>
      </Link>
    </div>
  )
}
