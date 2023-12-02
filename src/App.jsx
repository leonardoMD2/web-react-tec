import { useState } from 'react'
import { MainCards, LayoutMain, MainFooter } from './main-components/usefull-components'

const ProgLink = "./programacion.html"

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='bg-slate-950 h-100 grid auto-rows-min container-lg'>
      
      <LayoutMain/>
      <MainCards progLink={ProgLink}/>
      <MainFooter/>

   

    </main>
   
  )
}

export default App
