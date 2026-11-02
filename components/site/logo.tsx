import Image from 'next/image'
import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-2 font-semibold tracking-tight', className)}>
      <Image
        src="/images/brand/rock-logo-white.png"
        alt="R.O.C.K"
        width={100}
        height={45}
        priority
        className="h-7 w-auto object-contain transition-opacity hover:opacity-90"
      />
    </span>
  )
}
