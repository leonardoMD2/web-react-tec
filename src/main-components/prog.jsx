import '../css/index.css'
import {Title, MainFooter, NavMain, TitleSecondary, CardLittle, ButtonDownloadDC} from "./usefull-components.jsx"
import jsonDataMaterias from './datos-materias.json'
import jsonDataProyectos from './datos-proyectos.json'
const data = [{
    urlImg1: "/logo.png",
    mainText1: "ejemplo desde objeto",
    secondaryText1: "Ejemplo desde objt"
}]

console.log(jsonDataMaterias.dataProgramMat[0].materia1)


const AppProg = ({mainText,urlImg}) => {
    return(
        <main className='bg-slate-950 h-100 grid auto-rows-min container-lg'>
                <NavMain/>
                <header className='flex justify-center'>
                    <Title title={"Técnico en Programación"}/>
                </header>
                
            <ContainerGridResponsive urlImg1={data[0].urlImg1} mainText1={data[0].mainText1} secondaryText1={data[0].secondaryText1}
                urlImg2={data[0].urlImg1} mainText2={data[0].mainText1} secondaryText2={data[0].secondaryText1}
                urlImg3={data[0].urlImg1} mainText3={data[0].mainText1} secondaryText3={data[0].secondaryText1}
                urlImg4={data[0].urlImg1} mainText4={data[0].mainText1} secondaryText4={data[0].secondaryText1}
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


const BlogCard = ({mainText="Enlace al diseño curricular de Técnico en programación", secondaryText="",urlImg, btn}) => {
    if (btn){
        return (
            <div className="lg:flex">
            <img className="object-cover w-full h-56 rounded-lg lg:w-64" src={urlImg} alt=""/>
    
            <div className="flex flex-col justify-between py-6 lg:mx-6">
                <p href="#" className="text-xl font-semibold text-gray-800 dark:text-white ">
                    {mainText}
                    <p className='text-lg font-light text-gray-800 dark:text-white'>{secondaryText}</p>
                </p>
                <ButtonDownloadDC/>
            </div>
        </div>
        )
    }else{
        return (
            <div className="lg:flex">
            <img className="object-cover w-full h-56 rounded-lg lg:w-64" src={urlImg} alt=""/>
    
            <div className="flex flex-col justify-between py-6 lg:mx-6">
                <p href="#" className="text-xl font-semibold text-gray-800 dark:text-white ">
                    {mainText} 
                </p>
                <p className='text-lg font-light text-gray-800 dark:text-white'>{secondaryText}</p>
            </div>
        </div>
        )
    }
    
}
const ContainerGridResponsive = ({urlImg1="",urlImg2="",urlImg3="",urlImg4="", mainText1="", mainText2="",mainText3="",mainText4="", secondaryText1="",secondaryText2="",secondaryText3="",secondaryText4=""}) => {
    return (
        <section className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2"> 
            <BlogCard mainText={mainText1} secondaryText={secondaryText1} urlImg={urlImg1}/>
            <BlogCard mainText={mainText2} secondaryText={secondaryText2} urlImg={urlImg2}/>
            <BlogCard mainText={mainText3} secondaryText={secondaryText3} urlImg={urlImg3}/>
            <BlogCard mainText={mainText4} secondaryText={secondaryText4} urlImg={urlImg4} btn={true}/>
        </section>
    )
}

export {
    AppProg,
    BlogCard,
    ContainerGridResponsive
    
}