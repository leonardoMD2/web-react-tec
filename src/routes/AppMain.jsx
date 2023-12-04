import { useState } from 'react'
import { MainCards, LayoutMain, MainFooter, NavMain, News } from '../main-components/usefull-components'

const ProgLink = "/programacion.html"

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='bg-slate-950 h-100 grid auto-rows-min container-lg'>
      <NavMain/>
      <LayoutMain/>
      <MainCards />
      <News/>
      <MainFooter/>
    </main>
   
  )
}

export default App
