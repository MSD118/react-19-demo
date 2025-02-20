import { UseTransitionDemo } from './UseTransitionDemo/UseTransitionDemo'
import { RefAsPropDemo } from './RefAsProp/RefAsPropDemo'
import { RefCleanUpDemo } from './RefDemo/RefCleanUpDemo'
import { LikeButton } from './UseOptimistic/LikeButton'
import { UpdateName } from './UseOptimistic/UpdateName'

const DEMO = [
  UseTransitionDemo,
  RefCleanUpDemo,
  UpdateName,
  LikeButton,
  RefAsPropDemo,
]

function App() {
  return (
    <div className='p-4 w-full min-h-screen'>
      <div className='flex flex-col items-center '>
        {DEMO.map((Component, index) => (
          <div key={index} className='mb-4'>
            <Component />
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
