import { AnimatedTooltip } from '@/components/ui/animated-tooltip'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

interface BadgeLinkTooltip {
  name: string
  description: string
  link: string
}

export const BadgeLinkTooltip = ({
  name,
  description,
  link,
}: BadgeLinkTooltip) => {
  return (
    <AnimatedTooltip name={name} description={description}>
      <Badge variant="outline">
        <Link href={link} target="_blank">
          {name}
        </Link>
      </Badge>
    </AnimatedTooltip>
  )
}
