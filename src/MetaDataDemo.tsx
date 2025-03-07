import { useState } from 'react'

export const MetaDataDemo = () => {
  const [title, setTitle] = useState('MetaDataDemo')
  const post = {
    description: 'React 19 features',
    author: 'React AI',
  }
  return (
    <div className='flex flex-col items-center'>
      <title>{title}</title>
      <meta name="description" content={post.description} />
      <meta name="author" content={post.author} />
      <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className='border p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
      ></input>
    </div>
  )
}
