import { useState } from 'react'
import { MainCards, LayoutMain, MainFooter, NavMain , TitleSecondary} from '../main-components/usefull-components'
import { ContainerGridResponsive } from '../main-components/prog'
import dataNoticias from '../main-components/datos-noticias.json'

const ProgLink = "/programacion.html"

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='bg-slate-950 h-100 grid auto-rows-min container-lg'>
      <NavMain/>
      <LayoutMain/>
      <MainCards />
      <TitleSecondary title={"Noticias"}/>
      <ContainerGridResponsive urlImg1={dataNoticias.primera.urlImg1} mainText1={dataNoticias.primera.mainText1} secondaryText1={dataNoticias.primera.secondaryText1}
                                    urlImg2={dataNoticias.segunda.urlImg1} mainText2={dataNoticias.segunda.mainText1} secondaryText2={dataNoticias.segunda.secondaryText1}
                                    urlImg3={dataNoticias.tercera.urlImg1} mainText3={dataNoticias.tercera.mainText1} secondaryText3={dataNoticias.tercera.secondaryText1}
                                    urlImg4={dataNoticias.cuarta.urlImg1} mainText4={dataNoticias.cuarta.mainText1} secondaryText4={dataNoticias.cuarta.secondaryText1}
            />
   
      <MainFooter/>
    </main>
   
  )
}

export default App
