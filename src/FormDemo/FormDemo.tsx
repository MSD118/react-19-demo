import { startTransition, useState } from 'react'
import { requestFormReset } from 'react-dom'

export const FormDemo = () => {
  const [status, setStatus] = useState('')

  const submitAction = (formData: FormData) => {
    const firstName = formData.get('first-name')
    const lastName = formData.get('last-name')
    if (firstName && lastName) {
      setStatus(`Hello ${firstName} ${lastName}`)
    } else {
      setStatus('Please fill in both fields')
    }
  }

  const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    startTransition(() => {
      requestFormReset(e.currentTarget.form as HTMLFormElement)
    })
  }

  return (
    <form className='flex flex-col w-72' action={submitAction}>
      <input
        type='text'
        name='first-name'
        placeholder='First Name'
        className='mb-2 p-2 border border-gray-300 rounded'
      ></input>
      <input
        type='text'
        name='last-name'
        placeholder='Last Name'
        className='mb-2 p-2 border border-gray-300 rounded'
      ></input>
      <button type='submit' className='mb-2 p-2 bg-blue-500 text-white rounded'>
        Submit
      </button>
      <div className='flex items-center justify-between'>
        <button
          type='reset'
          className='mr-2 p-2 bg-red-500 text-white rounded'
          onClick={handleReset}
        >
          Reset
        </button>
        <div className='text-green-500'>{status ? status : null}</div>
      </div>
    </form>
  )
}
