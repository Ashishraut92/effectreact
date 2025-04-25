import React, {useState, useEffect} from 'react';

import 'animate.css';
import 'remixicon/fonts/remixicon.css'


function App() {
const [open, setOpen] = useState(false)
const [openDialogue,setOpendialouge]= useState(false)

useEffect(()=>{
  setTimeout(()=>{
setOpen(true)
  },5000)
}, [])

useEffect(()=>{
setTimeout(()=>{
setOpendialouge(true)
},7000)
}, [])

  return (
    <div className='w-6/12 mx-auto py-16 xpace-x-8'>
      {
        open &&
        <div className='flex justify-between text-lg bg-green-400 py-3 px-4 rounded shadow animate__animated animate__bounceIn'>
      <div className='flex gap-2'>
      <strong>success !</strong>
      your create operation is successfully performed
      </div>
      <button onClick={()=>setOpen(false)} className='text-white '>
      <i className="ri-close-circle-fill"></i>
      </button>
      </div>
      }
    
    
    <button onClick={()=>setOpen(!open)} className='bg-violet-600 text-white px-8 py-2 rounded font-medium'>
      toggle message
    </button>
    <button onClick={()=>setOpendialouge(true)} className='ml-4 bg-rose-600 text-white px-8 py-2 rounded font-medium'>
      open dialog
    </button>
    {
      openDialogue &&
      <div className='animate__faster animate__animated animate__fadeIn fixed w-full h-full bg-zinc-900 top-0 left-0'>
      <div className='bg-white animate__aimated animate__bounceOut space-y-4 w-6/12 border-gray-200 p-8 shadow-xl rounded-xl fixed top-[50%] left-[50%] transform -translate-x-1/2 -translate-1/2'>
  <h1 className='text-xl font-semibold'>
    Privacy policy
  </h1>
  <p className='text-gray-600'>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint?
  </p>
  <button className='absolute top-3 left-3' onClick={()=>setOpendialouge(false)}>
    <i className='ri-close-circle-fill'></i>
  </button>
      </div>
      </div>
    }
    
    </div>
  )
}

export default App