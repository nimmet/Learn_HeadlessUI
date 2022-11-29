import React,{useState} from 'react'
import { Transition } from '@headlessui/react'

const MyComponent = () => {
    const [isShowing, setIsShowing] = useState(false)

    return (
      <>
        <button onClick={() => setIsShowing((isShowing) => !isShowing)}
        className=" absolute top-2 left-5">
          Toggle
        </button>
        <Transition
          show={isShowing}
        
        >
         
         <Transition.Child
        enter="transition-opacity ease-linear duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
<div className=' h-screen w-full bg-black/50 '></div>
      </Transition.Child>

      {/* Sliding sidebar */}
      <div className=' fixed inset-0 overflow-y-auto'>
      <div className=' flex items-center justify-center p-4 text-center min-h-full'>

      <Transition.Child
        enter="transition ease-in-out duration-300 transform"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
      <div className='bg-white p-5  rounded-md cursor-pointer' onClick={() => setIsShowing((isShowing) => !isShowing)}>hide</div>
      </Transition.Child>
      </div>
</div>

        </Transition>
      </>
    )
}

export default MyComponent