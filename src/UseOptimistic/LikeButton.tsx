import { useOptimistic, useTransition, useState } from 'react'
import { toast } from 'react-toastify'

export const LikeButton = () => {
  const [likes, setLikes] = useState(10)
  const [isPending, startTransition] = useTransition()
  const [optimisticLikes, setOptimisticLikes] = useOptimistic<number, number>(
    likes,
    (_, newState) => newState,
  )

  const handleLike = async () => {
    startTransition(() => {
      // Optimistically update the UI
      setOptimisticLikes(likes + 1)
    })

    try {
      // Simulate a server request
      await setLike()
      // Update actual state
      setLikes((prev) => prev + 1)
    } catch {
      toast.error('Failed to like')
    }
  }
  console.log(optimisticLikes)
  return (
    <form action={handleLike}>
      <div className='flex gap-8 justify-center items-center'>
        <button
          // onClick={handleLike}
          type='submit'
          disabled={isPending}
          className={`px-4 py-2 bg-blue-500 text-white rounded ${
            isPending ? 'bg-gray-400 cursor-not-allowed' : 'hover:bg-blue-700'
          }`}
        >
          👍 {optimisticLikes}
        </button>
      </div>
    </form>
  )
}

const setLike = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.4) {
        reject(new Error('Failed to like'))
      } else {
        resolve({ success: true })
      }
    }, 1000)
  })
}
