import { useOptimistic, useState, useTransition } from 'react'
import { toast } from 'react-toastify'

export const UpdateName = () => {
  const [name, setName] = useState('Name')
  const [isPending, startTransition] = useTransition()
  const [optimisticName, setOptimisticName] = useOptimistic<string, string>(
    name,
    (_, newName) => newName,
  )

  const handleUpdate = async (formData: FormData) => {
    const name = formData.get('name') as string
    startTransition(() => {
      setOptimisticName(name)
    })
    try {
      const response = await updateName(name)
      setName(response.name)
    } catch (error) {
      toast.error((error as Error).message)
    }
  }

  return (
    <form action={handleUpdate}>
      <div className='flex flex-col items-center gap-2'>
        <div className='font-bold text-3xl flex-shrink-0'>{optimisticName}</div>
        <input
          type='text'
          name='name'
          placeholder='Enter New Name'
          className='border rounded p-2 mb-2 flex-grow'
        />
        <button
          type='submit'
          disabled={isPending}
          className={`border rounded p-2 mb-2 transition-colors duration-300 bg-blue-600 text-white hover:bg-blue-700 w-full ${isPending ? 'bg-gray-400 cursor-not-allowed' : ''}`}
        >
          {isPending ? 'Updating...' : 'Update Name'}
        </button>
      </div>
    </form>
  )
}

const updateName = async (name: string): Promise<{ name: string }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.3 || name === '') {
        if (name === '') {
          reject(new Error('Name cannot be empty'))
        } else {
          reject(new Error('Failed to update name'))
        }
      } else {
        resolve({ name: name })
      }
    }, 1000)
  })
}
