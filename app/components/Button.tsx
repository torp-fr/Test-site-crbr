import Link from 'next/link'
import clsx from 'clsx'

interface ButtonProps {
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'tertiary'
  children: React.ReactNode
  className?: string
  target?: string
  rel?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export default function Button({
  href,
  onClick,
  variant = 'primary',
  children,
  className,
  target,
  rel,
  type = 'button',
  disabled,
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold text-sm transition-all duration-300 rounded'

  const variantClasses = {
    primary: 'bg-tactical-orange text-off-white hover:opacity-95 shadow-lg hover:shadow-xl px-6 py-3',
    secondary: 'border border-graphite text-graphite hover:bg-graphite hover:bg-opacity-5 px-6 py-3',
    tertiary: 'text-tactical-orange hover:opacity-80 underline',
  }

  const combinedClasses = clsx(baseClasses, variantClasses[variant], className)

  if (href) {
    return (
      <Link href={href} target={target} rel={rel} className={combinedClasses}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClasses}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
