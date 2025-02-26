import { createContext, use, useContext, useState } from 'react'

type ContextType = {
  text: string
  setText: (input: string) => void
}

const Context = createContext<ContextType>({
  text: '',
  setText: () => null,
})

export const ContextAsProvider = () => {
  const [text, setText] = useState('')

  return (
    <Context value={{ text, setText }}>
      <div className='flex flex-col items-center gap-4 w-100'>
        <Input />
        <DisplayBox />
      </div>
    </Context>
  )
}

const Input = () => {
  const { text, setText } = use(Context)
  return (
    <input
      type='text'
      value={text}
      onChange={(e) => setText(e.target.value)}
      className='p-2 border border-gray-300 rounded w-full'
    ></input>
  )
}

const DisplayBox = () => {
  const { text } = useContext(Context)

  return <div className='p-2 font-mono font-bold text-1xl w-full'>{text}</div>
}
