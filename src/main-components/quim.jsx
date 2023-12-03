import '../css/index.css'
import {Title, MainFooter, NavMain, TitleSecondary, CardLittle, ButtonDownloadDC} from "./usefull-components.jsx"
import { ContainerGridResponsive, BlogCard } from './prog.jsx'
import { dataQuimica } from './datos.js'

const AppQuim = () => {
    return(
        <main className='bg-slate-950 h-100 grid auto-rows-min container-lg'>
                <NavMain/>
                <header className='flex justify-center'>
                    <Title title={"Técnico en Química"}/>
                </header>
                
            <ContainerGridResponsive urlImg1={dataQuimica[0].urlImg1} mainText1={dataQuimica[0].mainText1} secondaryText1={dataQuimica[0].secondaryText1}
                urlImg2={dataQuimica[1].urlImg1} mainText2={dataQuimica[1].mainText1} secondaryText2={dataQuimica[1].secondaryText1}
                urlImg3={dataQuimica[2].urlImg1} mainText3={dataQuimica[2].mainText1} secondaryText3={dataQuimica[2].secondaryText1}
                urlImg4={dataQuimica[3].urlImg1} mainText4={dataQuimica[3].mainText1} secondaryText4={dataQuimica[3].secondaryText1}
            />
            <TitleSecondary title='Laboratorios específicos'/>
           
                <section className='grid sm:grid-cols-2 xl:grid-cols-4 place-items-center py-6 grid-cols-1 gap-8'>
                    <CardLittle division='4to Año' labNombre1='Programación' labNombre2='Sistemas Operativos' labNombre3='Hardware' labNombre4='Aplicaciones'/>
                    <CardLittle division='5to Año' labNombre1='Programación' labNombre2='Diseño Web' labNombre3='Bases de Datos' labNombre4='Redes'/>
                    <CardLittle division='6to Año' labNombre1='Programación' labNombre2='Procesos Industriales' labNombre3='Aplicaciones Webs Estáticas' labNombre4='Aplicaciones Webs Dinámicas'/>
                    <CardLittle division='7mo Año' labNombre1='Sistemas Computacionales' labNombre2='Desarrollo para Móviles' labNombre3='Implementación de Sitios Webs Dinámicos' labNombre4=''/>
                </section>
        
        <MainFooter/>
      </main>
    )
}

export {
    AppQuim
}