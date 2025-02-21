import { useState } from 'react'
import { FormDemo } from './FormDemo/FormDemo'
import { RefAsPropDemo } from './RefAsProp/RefAsPropDemo'
import { RefCleanUpDemo } from './RefDemo/RefCleanUpDemo'
import { UseActionStateDemo } from './UseActionStateDemo'
import { LikeButton } from './UseOptimistic/LikeButton'
import { UpdateName } from './UseOptimistic/UpdateName'
import { UseFormStatusDemo } from './UseFormStatusDemo'
import { UseContextDemo } from './Use/UseContextDemo'

const DEMO = [
  { title: 'Ref Clean Up', component: RefCleanUpDemo },
  { title: 'useOptimistic', component: UpdateName },
  { title: 'useOptimistic', component: LikeButton },
  { title: 'Ref As Prop', component: RefAsPropDemo },
  { title: '<form>', component: FormDemo },
  { title: 'useActionState', component: UseActionStateDemo },
  { title: 'useFormStatus', component: UseFormStatusDemo },
  { title: `"use" for Context`, component: UseContextDemo },
]

export const DemoWindow = () => {
  const [page, setPage] = useState(0)
  const handleNext = () => {
    if (DEMO.length === page + 1) return
    setPage((prev) => prev + 1)
  }
  const handlePrev = () => {
    if (page === 0) return
    setPage((prev) => prev - 1)
  }
  return (
    <div className='p-4 w-full min-h-screen'>
      <div className='flex gap-2 mb-4'>
        <button
          onClick={handlePrev}
          className='px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700'
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'
        >
          Next
        </button>
      </div>
      <div className='flex flex-col items-center '>
        {DEMO.map(({ title, component: Component }, index) =>
          page === index ? (
            <div key={index}>
              <h2 className='text-4xl font-bold text-center mb-10'>{title}</h2>
              <Component />
            </div>
          ) : null,
        )}
      </div>
    </div>
  )
}
