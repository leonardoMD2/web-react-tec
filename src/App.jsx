import { useState } from 'react'

import './css/App.css'
import { MainCards, LayoutMain, MainFooter } from './usefull-components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='bg-slate-950 h-100 grid auto-rows-min container-lg'>
      
      <LayoutMain/>
      <MainCards/>
      <MainFooter/>
   

    </main>
   
  )
}

export default App
