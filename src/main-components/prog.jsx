import '../css/index.css'
import {Title, MainFooter, NavMain, TitleSecondary, CardLittle, ButtonDownloadDC} from "./usefull-components.jsx"


const AppProg = ({mainText,urlImg}) => {
    return(
        <main className='bg-slate-950 h-100 grid auto-rows-min container-lg'>
                <NavMain/>
                <header className='flex justify-center'>
                    <Title title={"Técnico en Programación"}/>
                </header>
                
            
            <MainLayer texto={mainText} urlImg={urlImg}/>
            <TitleSecondary title='Laboratorios específicos'/>
            <section className='grid sm:grid-cols-2 xl:grid-cols-4 place-items-center py-6 grid-cols-1 gap-y-2'>
            <CardLittle division='4to Año' labNombre1='Programación' labNombre2='Sistemas Operativos' labNombre3='Hardware' labNombre4='Aplicaciones'/>
            <CardLittle division='5to Año' labNombre1='Programación' labNombre2='Diseño Web' labNombre3='Bases de Datos' labNombre4='Redes'/>
            <CardLittle division='6to Año' labNombre1='Programación' labNombre2='Procesos Industriales' labNombre3='Aplicaciones Webs Estáticas' labNombre4='Aplicaciones Webs Dinámicas'/>
            <CardLittle division='7mo Año' labNombre1='Sistemas Computacionales' labNombre2='Desarrollo para Móviles' labNombre3='Implementación de Sitios Webs Dinámicos' labNombre4=''/>
            </section>
        <MainFooter/>
      </main>
    )
}

const MainLayer = ({texto,urlImg}) =>{
    return(
        <div className='h-100 flex flex-col justify-center w-4/5 mx-auto'>
            <section className='grid sm:grid-cols-2 grid-cols-1 mt-4'>
                <article className='text-white h-80 flex justify-start'>
                    <img src={urlImg} alt="" className='max-h-full rounded'/>
                </article>
                <article className='text-white h-80 flex sm:items-center w-4/5 items-center sm:text-justify mx-auto '>
                {texto}
                </article>
            </section>
            <section className='grid sm:grid-cols-2 grid-cols-1 mt-4'>
                <article className='grid grid-rows-2 text-white h-80 sm:items-center w-4/5 items-center sm:text-justify mx-auto '>
                    {texto+" Desde el siguiente boton podrás descargar el diseño curricular de la carrera."}
                    <ButtonDownloadDC />
                </article>
                <article className='text-white h-80 flex justify-center'>
                    <img src={urlImg} alt="" className='max-h-full rounded'/>
                </article>
            </section>
        </div>
    )
}

export {
    AppProg
    
}