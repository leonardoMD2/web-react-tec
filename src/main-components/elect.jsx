import '../css/index.css'
import {Title, MainFooter, NavMain, TitleSecondary, CardLittle, ButtonDownloadDC, ContainerGridResponsive, BlogCard} from "./usefull-components.jsx"
import  dataElectroProyectos  from './datos-proyectos.json'
import  dataElectroMateria from './datos-materias.json'

const AppElec = () => {
    return(
        <main className='bg-slate-950 grid auto-rows-auto container-lg'>
                <NavMain/>
                <header className='flex justify-center'>
                    <Title title={"Técnico en Electromecánica"}/>
                </header>
                
            <ContainerGridResponsive urlImg1={dataElectroProyectos.dataElectro[0].urlImg1} mainText1={dataElectroProyectos.dataElectro[0].mainText1} secondaryText1={dataElectroProyectos.dataElectro[0].secondaryText1}
                                    urlImg2={dataElectroProyectos.dataElectro[1].urlImg1} mainText2={dataElectroProyectos.dataElectro[1].mainText1} secondaryText2={dataElectroProyectos.dataElectro[1].secondaryText1}
                                    urlImg3={dataElectroProyectos.dataElectro[2].urlImg1} mainText3={dataElectroProyectos.dataElectro[2].mainText1} secondaryText3={dataElectroProyectos.dataElectro[2].secondaryText1}
                                    urlImg4={dataElectroProyectos.dataElectro[3].urlImg1} mainText4={dataElectroProyectos.dataElectro[3].mainText1} secondaryText4={dataElectroProyectos.dataElectro[3].secondaryText1} btn={true}
            />
            <TitleSecondary title='Talleres específicos'/>
           
                <section className={"grid sm:grid-cols-2 xl:grid-cols-4 place-items-center py-6 grid-cols-1 gap-8"}>
                    <CardLittle division='4to Año' labNombre1={dataElectroMateria.dataElectroMat[0].materia1} labNombre2={dataElectroMateria.dataElectroMat[0].materia2} labNombre3={dataElectroMateria.dataElectroMat[0].materia3} labNombre4={dataElectroMateria.dataElectroMat[0].materia4}/>
                    <CardLittle division='5to Año' labNombre1={dataElectroMateria.dataElectroMat[1].materia1} labNombre2={dataElectroMateria.dataElectroMat[1].materia2} labNombre3={dataElectroMateria.dataElectroMat[1].materia3} labNombre4={dataElectroMateria.dataElectroMat[1].materia4}/>
                    <CardLittle division='6to Año' labNombre1={dataElectroMateria.dataElectroMat[2].materia1} labNombre2={dataElectroMateria.dataElectroMat[2].materia2} labNombre3={dataElectroMateria.dataElectroMat[2].materia3} labNombre4={dataElectroMateria.dataElectroMat[2].materia4}/>
                    <CardLittle division='7mo Año' labNombre1={dataElectroMateria.dataElectroMat[3].materia1} labNombre2={dataElectroMateria.dataElectroMat[3].materia2} labNombre3={dataElectroMateria.dataElectroMat[3].materia3} labNombre4={dataElectroMateria.dataElectroMat[3].materia4}/>
                </section>
        
        <MainFooter/>
      </main>
    )
}

export {
    AppElec
}