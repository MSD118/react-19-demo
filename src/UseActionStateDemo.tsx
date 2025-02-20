import { useActionState } from 'react'

export const UseActionStateDemo = () => {
  return (
    <>
      <AddToCartForm itemID='1' itemTitle='JavaScript: The Definitive Guide' />
      <AddToCartForm itemID='2' itemTitle='JavaScript: The Good Parts' />
    </>
  )
}

function AddToCartForm({
  itemID,
  itemTitle,
}: {
  itemID: string
  itemTitle: string
}) {
  const [message, formAction, isPending] = useActionState(addToCart, null)
  return (
    <form
      action={formAction}
      className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-2xl'
    >
      <h2 className='text-xl font-bold mb-4'>{itemTitle}</h2>
      <input type='hidden' name='itemID' value={itemID} />
      <div className='flex items-center gap-2'>
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Add to Cart
        </button>
        <p className='mt-4'>{isPending ? 'Loading...' : message}</p>
      </div>
    </form>
  )
}

const addToCart = async (
  _: string | null,
  formData: FormData,
): Promise<string> => {
  const itemID = formData.get('itemID')
  if (itemID === '1') {
    // Add a fake delay to make waiting noticeable.
    await new Promise((resolve) => {
      setTimeout(resolve, 500)
    })
    return 'Added to cart'
  } else {
    // Add a fake delay to make waiting noticeable.
    await new Promise((resolve) => {
      setTimeout(resolve, 2000)
    })
    return "Couldn't add to cart: the item is sold out."
  }
}

// export const UseActionStateDemo = () => {
//   const [state, formAction, isPending] = useActionState(increment, 0)
//   return (
//     <form
//       action={formAction}
//       className='px-8 pt-6 pb-8 mb-4 w-fit flex flex-col gap-4 justify-center items-center'
//     >
//       <button
//         type='submit'
//         className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
//       >
//         Increment
//       </button>
//       <div className='text-xl font-bold'>
//         {isPending ? 'Incrementing....' : state}
//       </div>
//     </form>
//   )
// }

// const increment = async (prevState: number) => {
//   await new Promise((resolve) => {
//     setTimeout(resolve, 500)
//   })
//   return prevState + 1
// }
