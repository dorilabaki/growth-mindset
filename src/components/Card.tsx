import Link from 'next/link'
import { ReactNode } from 'react'

interface CardProps {
  href?: string
  children: ReactNode
  className?: string
}

export function Card({ href, children, className = '' }: CardProps) {
  const baseClasses = `block bg-surface-elevated rounded-2xl border border-neutral-200 p-6 transition-all hover:shadow-lg hover:border-neutral-300 ${className}`

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    )
  }

  return <div className={baseClasses}>{children}</div>
}

interface CardTitleProps {
  children: ReactNode
  as?: 'h2' | 'h3' | 'h4'
}

export function CardTitle({ children, as: Tag = 'h3' }: CardTitleProps) {
  return (
    <Tag className="font-display font-semibold text-lg text-neutral-900 mb-2">
      {children}
    </Tag>
  )
}

interface CardDescriptionProps {
  children: ReactNode
}

export function CardDescription({ children }: CardDescriptionProps) {
  return <p className="text-neutral-600 text-sm leading-relaxed">{children}</p>
}

interface CardTagProps {
  children: ReactNode
  variant?: 'default' | 'primary' | 'accent'
}

export function CardTag({ children, variant = 'default' }: CardTagProps) {
  const variants = {
    default: 'bg-neutral-100 text-neutral-700',
    primary: 'bg-primary-100 text-primary-700',
    accent: 'bg-accent-100 text-accent-700',
  }

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${variants[variant]} mb-3`}>
      {children}
    </span>
  )
}
