import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import { MainCards } from './usefull-components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='bg-slate-950 h-screen grid auto-rows-min container-lg'>
      <header className='flex align-middle p-4 '>
      <img className='w-16 justify-self-start' src="./logo.png" alt=""  />
      <nav className='mx-auto flex items-center'>
      <h1 className='text-3xl font-bold text-slate-50 '>E.E.S.T N°1 
            <span className='font-medium'> - Brandsen</span></h1>
      </nav>
        
          
      </header>
      
      
      <MainCards/>
   

    </main>
   
  )
}

export default App
