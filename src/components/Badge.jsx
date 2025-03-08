import { useState } from 'react'

const Badge = ({
  type = 'default',
  text = 'text',
  color = '',
  textColor = '',
  size = 'lg',
  rounded = 'full',
  dot = false,
  dotColor = 'default',
  dotPosition = 'top-right',
  dotText,
  icon
}) => {
  const [showTooltip, setShowTooltip] = useState(false)

  const types = {
    default: 'border-0 shadow-lg backdrop-blur-sm',
    bordered: 'border border-current shadow-lg ',
    icon: 'p-1 shadow-lg backdrop-blur-sm'
  }

  const sizes = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-3 py-1',
    lg: 'text-base px-4 py-1.5'
  }

  const roundeds = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-lg',
    lg: 'rounded-2xl',
    full: 'rounded-full'
  }

  const dotColors = {
    default: 'bg-neutral-500',
    primary: 'bg-blue-500',
    secondary: 'bg-indigo-500',
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    danger: 'bg-red-500'
  }

  const dotPositions = {
    'top-left': 'top-0 left-0 transform -translate-x-1/3 -translate-y-1/3',
    'top-right': 'top-0 right-0 transform translate-x-1/3 -translate-y-1/3',
    'bottom-left': 'bottom-0 left-0 transform -translate-x-1/3 translate-y-1/3',
    'bottom-right': 'bottom-0 right-0 transform translate-x-1/3 translate-y-1/3'
  }

  const typeClass = types[type]
  const sizeClass = sizes[size]
  const roundedClass = roundeds[rounded]
  const colorClass = color
  const textColorClass = textColor
  const dotPositionClass = dotPositions[dotPosition]
  const dotColorClass = dotColors[dotColor]

  const handleCopyColor = () => {
    if (text) {
      navigator.clipboard.writeText(text).then(() => {
        setShowTooltip(true)
        setTimeout(() => setShowTooltip(false), 1500) // Ocultar después de 1.5 segundos
      })
    }
  }

  const content = () => {
    if (type === 'icon') {
      return icon ? (
        <span className='inline-block'>{icon}</span>
      ) : (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='currentColor'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M14.235 19c.865 0 1.322 1.024 .745 1.668a3.992 3.992 0 0 1 -2.98 1.332a3.992 3.992 0 0 1 -2.98 -1.332c-.552 -.616 -.158 -1.579 .634 -1.661l.11 -.006h4.471z' />
          <path d='M12 2c1.358 0 2.506 .903 2.875 2.141l.046 .171l.008 .043a8.013 8.013 0 0 1 4.024 6.069l.028 .287l.019 .289v2.931l.021 .136a3 3 0 0 0 1.143 1.847l.167 .117l.162 .099c.86 .487 .56 1.766 -.377 1.864l-.116 .006h-16c-1.028 0 -1.387 -1.364 -.493 -1.87a3 3 0 0 0 1.472 -2.063l.021 -.143l.001 -2.97a8 8 0 0 1 3.821 -6.454l.248 -.146l.01 -.043a3.003 3.003 0 0 1 2.562 -2.29l.182 -.017l.176 -.004z' />
        </svg>
      )
    }

    return text
  }

  return (
    <div className='relative inline-block'>
      <span
        className={`uppercase relative inline-flex items-center justify-center font-medium cursor-pointer ${sizeClass} ${roundedClass} ${
          type === 'bordered' ? `bg-transparent` : colorClass
        } ${textColorClass} ${typeClass} hover:-translate-y-1 transition-transform duration-300 ease-in-out`}
        onClick={handleCopyColor}
      >
        {content()}
        {dot && (
          <span
            className={`absolute ${
              dotText ? 'px-1 rounded-md' : 'w-2.5 h-2.5 rounded-full'
            } ${dotColorClass} ${dotPositionClass}`}
          >
            {dotText}
          </span>
        )}
      </span>

      {showTooltip && (
        <div className='absolute bottom-full left-1/2 w-[102px] text-center transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-neutral-100 bg-zinc-700/30 backdrop-blur-sm rounded-md shadow-lg'>
          ¡Color copiado!
        </div>
      )}
    </div>
  )
}

export default Badge
