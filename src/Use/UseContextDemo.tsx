import { createContext, use, useState } from 'react'
import { Toggle } from '../Common/Components/Toggle'

type ThemeContextType = {
  text: string
  setText: (input: string) => void
}

const ThemeContext = createContext<ThemeContextType>({
  text: '',
  setText: () => null,
})

export const UseContextDemo = () => {
  const [text, setText] = useState('')

  return (
    <ThemeContext value={{ text, setText }}>
      <div className='flex flex-col items-center gap-4 w-100'>
        <Input />
        <DisplayBox />
      </div>
    </ThemeContext>
  )
}

const Input = () => {
  const { text, setText } = use(ThemeContext)
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
  const [toggle, setToggle] = useState(false)
  const { text } = toggle
    ? use(ThemeContext)
    : { text: 'This is the default text since toggle is off.' }

  return (
    <div className='flex flex-col items-center gap-4 w-full'>
      <div className='flex flex-row items-center gap-2 w-full'>
        <Toggle checked={toggle} onChange={(checked) => setToggle(checked)} />
        <div className='font-mono text-sm text-nowrap'>
          Toggle to show the text from the context.
        </div>
      </div>
      <div className='p-2 font-mono font-bold text-1xl w-full'>{text}</div>
    </div>
  )
}
