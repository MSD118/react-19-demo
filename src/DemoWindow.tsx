import { useState } from 'react'
import { FormDemo } from './FormDemo/FormDemo'
import { RefAsPropDemo } from './RefAsProp/RefAsPropDemo'
import { RefCleanUpDemo } from './RefDemo/RefCleanUpDemo'
import { UseActionStateDemo } from './UseActionStateDemo'
import { LikeButton } from './UseOptimistic/LikeButton'
import { UpdateName } from './UseOptimistic/UpdateName'
import { UseFormStatusDemo } from './UseFormStatusDemo'
import { UseContextDemo } from './Use/UseContextDemo'
import { UsePromiseDemo } from './Use/UsePromiseDemo'
import { MetaDataDemo } from './MetaDataDemo'

const DEMO = [
  { title: 'Ref Clean Up', component: RefCleanUpDemo },
  { title: 'useOptimistic', component: UpdateName },
  { title: 'useOptimistic', component: LikeButton },
  { title: 'Ref As Prop', component: RefAsPropDemo },
  { title: '<form>', component: FormDemo },
  { title: 'useActionState', component: UseActionStateDemo },
  { title: 'useFormStatus', component: UseFormStatusDemo },
  { title: `"use" for Context`, component: UseContextDemo },
  { title: `"use" for Promise`, component: UsePromiseDemo },
  { title: `Support for Document Metadata `, component: MetaDataDemo },
]

export const DemoWindow = () => {
  const [page, setPage] = useState(0)
  return (
    <div className='p-4 w-full min-h-screen font-[cascadia_mono] flex flex-col justify-between'>
      <div className='flex flex-col items-center'>
        {DEMO.map(({ title, component: Component }, index) =>
          page === index ? (
            <div key={index}>
              <h2 className='text-4xl font-bold text-center mb-10'>{title}</h2>
              <Component />
            </div>
          ) : null,
        )}
      </div>
      <footer className='flex justify-between items-center mt-4'>
        <select
          value={page}
          onChange={(e) => setPage(Number(e.target.value))}
          className='px-4 py-2 bg-gray-200 rounded appearance-none'
        >
          {DEMO.map(({ title }, index) => (
            <option key={index} value={index}>
              {title}
            </option>
          ))}
        </select>
      </footer>
    </div>
  )
}
