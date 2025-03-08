import { useState, useRef } from 'react'

const CodeBlock = ({ children }) => {
  const [copied, setCopied] = useState(false)
  const codeRef = useRef(null)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeRef.current.textContent)
      setCopied(true)
      setTimeout(() => setCopied(false), 3000)
    } catch (err) {
      console.error('Error copying text:', err)
    }
  }

  return (
    <div className='text-sm max-w-4xl w-auto mx-auto p-4 not-prose'>
      <div
        ref={codeRef}
        className='rounded-lg p-3 shadow-xl backdrop-blur-xl text-neutral-100 bg-zinc-700/30'
      >
        {children}
        <button
          onClick={handleCopy}
          className='absolute end-2 top-1 right-1 transition duration-300 text-neutral-100 hover:bg-white/20 hover:text-neutral-200 rounded-lg p-2 inline-flex items-center justify-center hover:scale-105 cursor-pointer'
        >
          {copied ? (
            <span className='inline-flex items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='size-4 text-blue-500 '
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path stroke='none' d='M0 0h24v24H0z' />
                <path d='M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z' />
                <path d='M4.012 16.737a2 2 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1' />
                <path d='M11 14l2 2l4 -4' />
              </svg>
            </span>
          ) : (
            <span className='inline-flex items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='size-4'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z' />
                <path d='M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1' />
              </svg>
            </span>
          )}
        </button>
      </div>
    </div>
  )
}

export default CodeBlock
