import '../css/index.css'
import {Title, MainFooter, NavMain, TitleSecondary, CardLittle, ButtonDownloadDC} from "./usefull-components.jsx"
import { ContainerGridResponsive, BlogCard } from './prog.jsx'
import  dataQuimicaProyectos  from './datos-proyectos.json'
import  dataQuimicaMateria from './datos-materias.json'

const AppQuim = () => {
    return(
        <main className='bg-slate-950 xl:h-screen sm:h-full grid auto-rows-min container-lg'>
                <NavMain/>
                <header className='flex justify-center'>
                    <Title title={"Técnico en Química"}/>
                </header>
                
            <ContainerGridResponsive urlImg1={dataQuimicaProyectos.dataQuimica[0].urlImg1} mainText1={dataQuimicaProyectos.dataQuimica[0].mainText1} secondaryText1={dataQuimicaProyectos.dataQuimica[0].secondaryText1}
                                    urlImg2={dataQuimicaProyectos.dataQuimica[1].urlImg1} mainText2={dataQuimicaProyectos.dataQuimica[1].mainText1} secondaryText2={dataQuimicaProyectos.dataQuimica[1].secondaryText1}
                                    urlImg3={dataQuimicaProyectos.dataQuimica[2].urlImg1} mainText3={dataQuimicaProyectos.dataQuimica[2].mainText1} secondaryText3={dataQuimicaProyectos.dataQuimica[2].secondaryText1}
                                    urlImg4={dataQuimicaProyectos.dataQuimica[3].urlImg1} mainText4={dataQuimicaProyectos.dataQuimica[3].mainText1} secondaryText4={dataQuimicaProyectos.dataQuimica[3].secondaryText1}
            />
            <TitleSecondary title='Laboratorios específicos'/>
           
                <section className='grid sm:grid-cols-2 xl:grid-cols-4 place-items-center py-6 grid-cols-1 gap-8'>
                    <CardLittle division='4to Año' labNombre1={dataQuimicaMateria.dataQuimicaMat[0].materia1} labNombre2={dataQuimicaMateria.dataQuimicaMat[0].materia2} labNombre3={dataQuimicaMateria.dataQuimicaMat[0].materia3} labNombre4={dataQuimicaMateria.dataQuimicaMat[0].materia4}/>
                    <CardLittle division='5to Año' labNombre1={dataQuimicaMateria.dataQuimicaMat[1].materia1} labNombre2={dataQuimicaMateria.dataQuimicaMat[1].materia2} labNombre3={dataQuimicaMateria.dataQuimicaMat[1].materia3} labNombre4={dataQuimicaMateria.dataQuimicaMat[1].materia4}/>
                    <CardLittle division='6to Año' labNombre1={dataQuimicaMateria.dataQuimicaMat[2].materia1} labNombre2={dataQuimicaMateria.dataQuimicaMat[2].materia2} labNombre3={dataQuimicaMateria.dataQuimicaMat[2].materia3} labNombre4={dataQuimicaMateria.dataQuimicaMat[2].materia4}/>
                    <CardLittle division='7mo Año' labNombre1={dataQuimicaMateria.dataQuimicaMat[3].materia1} labNombre2={dataQuimicaMateria.dataQuimicaMat[3].materia2} labNombre3={dataQuimicaMateria.dataQuimicaMat[3].materia3} labNombre4={dataQuimicaMateria.dataQuimicaMat[3].materia4}/>
                </section>
        
        <MainFooter/>
      </main>
    )
}

export {
    AppQuim
}