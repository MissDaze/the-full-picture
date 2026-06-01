import { Link } from 'react-router-dom'

export default function Button({
  children,
  variant = 'primary',
  to,
  href,
  onClick,
  type = 'button',
  disabled,
  className = '',
  ...props
}) {
  const base =
    'inline-block px-7 py-3 text-sm font-medium tracking-wide transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
  const variants = {
    primary: 'bg-[#cc0000] text-[#f5f0e8] hover:bg-[#ff1a1a]',
    outline:
      'border border-[#cc0000] text-[#f5f0e8] hover:bg-[#cc0000] hover:text-[#f5f0e8]',
  }

  const cls = `${base} ${variants[variant]} ${className}`

  if (to) return <Link to={to} className={cls} {...props}>{children}</Link>
  if (href) return <a href={href} className={cls} {...props}>{children}</a>
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls} {...props}>
      {children}
    </button>
  )
}
