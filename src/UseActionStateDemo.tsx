import { startTransition, useActionState } from 'react'
import { requestFormReset } from 'react-dom'

export const UseActionStateDemo = () => {
  const [status, formAction, isPending] = useActionState(submitAction, null)

  const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    startTransition(() => {
      requestFormReset(e.currentTarget.form as HTMLFormElement)
    })
  }

  return (
    <form className='flex flex-col w-72' action={formAction}>
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
        {isPending ? 'Submitting...' : 'Submit'}
      </button>
      <div className='flex items-center justify-between'>
        <button
          type='reset'
          className='mr-2 p-2 bg-red-500 text-white rounded'
          onClick={handleReset}
        >
          Reset
        </button>
        <div className='text-green-500'>{status ? status?.status : null}</div>
      </div>
    </form>
  )
}

const submitAction = async (
  _: { status: string } | null,
  formData: FormData,
): Promise<{ status: string } | null> => {
  const firstName = formData.get('first-name')
  const lastName = formData.get('last-name')
  if (firstName && lastName) {
    await new Promise((resolve) => {
      setTimeout(resolve, 500)
    })
    return { status: 'success' }
  } else {
    await new Promise((resolve) => {
      setTimeout(resolve, 500)
    })
    return { status: 'error: Please fill in both fields' }
  }
}
