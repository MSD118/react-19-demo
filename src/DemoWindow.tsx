import { useState, useEffect } from 'react'
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
  { id: 'ref-clean-up', title: 'Ref Clean Up', component: RefCleanUpDemo },
  { id: 'use-optimistic-1', title: 'useOptimistic', component: UpdateName },
  { id: 'use-optimistic-2', title: 'useOptimistic', component: LikeButton },
  { id: 'ref-as-prop', title: 'Ref As Prop', component: RefAsPropDemo },
  { id: 'form', title: '<form>', component: FormDemo },
  {
    id: 'use-action-state',
    title: 'useActionState',
    component: UseActionStateDemo,
  },
  {
    id: 'use-form-status',
    title: 'useFormStatus',
    component: UseFormStatusDemo,
  },
  {
    id: 'use-for-context',
    title: `"use" for Context`,
    component: UseContextDemo,
  },
  {
    id: 'use-for-promise',
    title: `"use" for Promise`,
    component: UsePromiseDemo,
  },
  {
    id: 'support-for-document-metadata',
    title: `Support for Document Metadata`,
    component: MetaDataDemo,
  },
]

export const DemoWindow = () => {
  const [page, setPage] = useState(0)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const demoParam = params.get('demo')
    const demoIndex = DEMO.findIndex(({ id }) => id === demoParam)
    if (demoIndex === -1) {
      setPage(0)
    } else {
      setPage(demoIndex)
    }
  }, [])

  useEffect(() => {
    const demo = DEMO[page]
    window.history.replaceState(null, '', `?demo=${demo.id}`)
  }, [page])

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
