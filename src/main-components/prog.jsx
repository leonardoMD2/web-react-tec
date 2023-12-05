import '../css/index.css'
import {Title, MainFooter, NavMain, TitleSecondary, CardLittle, ButtonDownloadDC, ContainerGridResponsive, BlogCard} from "./usefull-components.jsx"
import jsonDataMaterias from './datos-materias.json'
import jsonDataProyectos from './datos-proyectos.json'


console.log(jsonDataMaterias.dataProgramMat[0].materia1)


const AppProg = ({mainText,urlImg}) => {
    return(
        <main className='bg-slate-950 min-h-full 2xl:h-screen xl:min-h-screen sm:h-full md:min-h-screen grid auto-rows-auto container-lg'>
                <NavMain/>
                <header className='flex justify-center'>
                    <Title title={"Técnico en Programación"}/>
                </header>
                
            <ContainerGridResponsive urlImg1={jsonDataProyectos.dataProgram[0].urlImg1} mainText1={jsonDataProyectos.dataProgram[0].mainText1} secondaryText1={jsonDataProyectos.dataProgram[0].secondaryText1}
                urlImg2={jsonDataProyectos.dataProgram[1].urlImg1} mainText2={jsonDataProyectos.dataProgram[1].mainText1} secondaryText2={jsonDataProyectos.dataProgram[1].secondaryText1}
                urlImg3={jsonDataProyectos.dataProgram[2].urlImg1} mainText3={jsonDataProyectos.dataProgram[2].mainText1} secondaryText3={jsonDataProyectos.dataProgram[2].secondaryText1}
                urlImg4={jsonDataProyectos.dataProgram[3].urlImg1} mainText4={jsonDataProyectos.dataProgram[3].mainText1} secondaryText4={jsonDataProyectos.dataProgram[3].secondaryText1} btn={true}
            />
            <TitleSecondary title='Laboratorios específicos'/>
           
                <section className='grid sm:grid-cols-2 xl:grid-cols-4 place-items-center py-6 grid-cols-1 gap-8'>
                    <CardLittle division='4to Año' labNombre1={jsonDataMaterias.dataProgramMat[0].materia1} labNombre2={jsonDataMaterias.dataProgramMat[0].materia2} labNombre3={jsonDataMaterias.dataProgramMat[0].materia3} labNombre4={jsonDataMaterias.dataProgramMat[0].materia4}/>
                    <CardLittle division='5to Año' labNombre1={jsonDataMaterias.dataProgramMat[1].materia1} labNombre2={jsonDataMaterias.dataProgramMat[1].materia2} labNombre3={jsonDataMaterias.dataProgramMat[1].materia3} labNombre4={jsonDataMaterias.dataProgramMat[1].materia4}/>
                    <CardLittle division='6to Año' labNombre1={jsonDataMaterias.dataProgramMat[2].materia1} labNombre2={jsonDataMaterias.dataProgramMat[2].materia2} labNombre3={jsonDataMaterias.dataProgramMat[2].materia3} labNombre4={jsonDataMaterias.dataProgramMat[2].materia4}/>
                    <CardLittle division='7mo Año' labNombre1={jsonDataMaterias.dataProgramMat[3].materia1} labNombre2={jsonDataMaterias.dataProgramMat[3].materia2} labNombre3={jsonDataMaterias.dataProgramMat[3].materia3} labNombre4={jsonDataMaterias.dataProgramMat[3].materia4}/>
                </section>
        <MainFooter/>
      </main>
    )
}




export {
    AppProg,
    BlogCard,
    ContainerGridResponsive
    
}