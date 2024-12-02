import type { PropsWithChildren } from 'react'
import Image from 'next/image'

export default async function LandingPageLayout({ children }: PropsWithChildren) {
  return (
    <div className="h-screen w-full flex">
      <main className="w-full md:w-1/2 flex justify-center items-center p-5">
        {children}
      </main>
      <div
        className="w-full md:w-1/2 h-screen bg-cover bg-center bg-[#1A1B26] hidden md:flex items-center justify-center"
      >
        <Image src="/logo-login2.png" alt="logo-login" width={400} height={400} />
      </div>
    </div>
  )
}
