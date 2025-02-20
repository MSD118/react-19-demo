import { useState } from 'react'

export const RefCleanUpDemo = () => {
  const [open, setOpen] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  return (
    <div className='flex flex-col items-center'>
      <button
        onClick={() => {
          setOpen(!open)
        }}
        className={`border rounded p-2 mb-2 transition-colors duration-300 bg-blue-600 text-white hover:bg-blue-700`}
      >
        Click
      </button>
      {!open ? (
        <input
          ////////////////
          ref={(ref) => {
            if (ref) {
              ref.focus()
            }

            return () => {
              setSubmitStatus('Input Submitted')
            }
          }}
          ////////////////
          type='text'
          placeholder='Enter text'
          className='border rounded p-2 mb-2'
        />
      ) : null}
      {submitStatus ? (
        <div className='text-green-500 font-bold'>{submitStatus}</div>
      ) : null}
    </div>
  )
}
