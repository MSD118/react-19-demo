import { Ref, useRef } from 'react'

export const RefAsPropDemo = () => {
  const titleRef = useRef<HTMLDivElement>(null)

  return (
    <div className='flex flex-col items-center gap-2'>
      <button
        className='bg-blue-500 text-white font-bold py-2 px-4 rounded'
        onClick={() => {
          if (titleRef.current) {
            if (!titleRef.current.style.border) {
              titleRef.current.style.border = '4px solid black'
            } else {
              titleRef.current.style.border = ''
            }
          }
        }}
      >
        Switch Border
      </button>
      <TitleComponent title='Component with ref as a prop' ref={titleRef} />
    </div>
  )
}

const TitleComponent = ({
  title,
  ref,
}: {
  title: string
  ref: Ref<HTMLDivElement>
}) => {
  return (
    <div className='font-extrabold text-2xl p-2' ref={ref}>
      {title}
    </div>
  )
}
