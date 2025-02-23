import { Suspense, use, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

export const UsePromiseDemo = () => {
  const [messagePromise, setMessagePromise] = useState<Promise<string> | null>(
    null,
  )
  const [show, setShow] = useState(false)
  function download() {
    setMessagePromise(fetchMessage())
    setShow(true)
  }

  return (
    <div className='flex flex-col items-center gap-4'>
      <button
        onClick={download}
        className='bg-blue-400 rounded-lg p-2 hover:bg-blue-500 shadow-lg'
      >
        Download message
      </button>
      {show && messagePromise && (
        <MessageContainer messagePromise={messagePromise} />
      )}
    </div>
  )
}

const MessageContainer = ({
  messagePromise,
}: {
  messagePromise: Promise<string>
}) => {
  return (
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <Suspense fallback={<p>Downloading message...</p>}>
        <Message messagePromise={messagePromise} />
      </Suspense>
    </ErrorBoundary>
  )
}

function Message({ messagePromise }: { messagePromise: Promise<string> }) {
  const message = use(messagePromise)
  return <p>Here is the message: {message}</p>
}

const fetchMessage = (): Promise<string> => {
  const random = Math.random()
  if (random < 0.5) {
    return new Promise((resolve) =>
      setTimeout(() => resolve('Hello, World!'), 2000),
    )
  } else {
    return new Promise((_, reject) => setTimeout(() => reject('Error'), 2000))
  }
}
