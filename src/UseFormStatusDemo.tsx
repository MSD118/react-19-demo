import { useFormStatus } from 'react-dom'

const Form = ({ action }: React.FormHTMLAttributes<HTMLFormElement>) => {
  return (
    <form action={action}>
      <div className='flex flex-col w-72'>
        <div className='text-2xl font-bold mb-4 text-center'>Any Form</div>
        <Submit />
      </div>
    </form>
  )
}

const Submit = () => {
  const { pending } = useFormStatus()
  return (
    <button
      type='submit'
      disabled={pending}
      className={`mb-2 p-2 rounded ${
        pending ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-700'
      } text-white`}
    >
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  )
}

export const UseFormStatusDemo = () => {
  return <Form action={someService} />
}

const someService = async (formData: FormData): Promise<void> => {
  await new Promise<void>((resolve) => {
    setTimeout(resolve, 1000)
  })

  console.log('Form submitted: ', formData)

  return
}
