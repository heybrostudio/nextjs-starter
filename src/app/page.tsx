import { BadgeLinkTooltip } from '@/components/badge-link-tooltip'
import { Button } from '@/components/ui/button'
import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Libs = [
  {
    name: 'shadcn/ui',
    description: 'Beautifully designed components',
    link: 'https://ui.shadcn.com/',
  },
  {
    name: 'Aceternity UI',
    description: 'Make your websites look 10x awesome',
    link: 'https://ui.aceternity.com/',
  },
  {
    name: 'Framer Motion',
    description: 'A production-ready motion library for React',
    link: 'https://www.framer.com/motion/',
  },
  {
    name: 'Radix UI',
    description: 'An open source component library optimized',
    link: 'https://www.radix-ui.com/',
  },
  {
    name: 'Tailwind CSS',
    description: 'A utility-first CSS framework packed',
    link: 'https://tailwindcss.com/',
  },
  {
    name: 'Lucide',
    description: 'Lucide is an open-source icon library',
    link: 'https://lucide.dev/',
  },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-16 bg-slate-50 p-12">
      <div className="flex flex-col items-center justify-center gap-12">
        <Image src="/logo.svg" width={552} height={72} alt="Next.js Starter" />
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {Libs.map((lib) => (
            <BadgeLinkTooltip
              key={lib.name}
              name={lib.name}
              description={lib.description}
              link={lib.link}
            />
          ))}
        </div>
      </div>
      <Button size="lg">
        <Link
          href="https://github.com/heybrostudio/nextjs-starter"
          target="_blank"
          className="flex items-center gap-x-3"
        >
          <MoveRight />
          <span>View GitHub</span>
        </Link>
      </Button>
    </main>
  )
}
