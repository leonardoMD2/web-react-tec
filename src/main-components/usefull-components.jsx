import React from 'react'
import { Link } from 'react-router-dom'
const classBtnHover = `inline-block
py-2
px-7
border border-[#E5E7EB]
rounded-full
text-base text-body-color
font-medium
hover:border-primary hover:bg-blue-950 hover:text-white transition`

const Title = ({title="E.E.S.T N° 1", span=""}) => {
   return(
   <h2 className="self-center text-4xl font-bold sm:text-5xl text-white">
              {title}
      <span className="hidden sm:block text-4xl text-white">{span}</span>
   </h2>
)  
}
const TitleSecondary = ({title}) =>{
   return (
      <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium text-white" >{title}</h1>
   )
}
const MainCards = ({progLink="/programacion",quiLink="",elecLink=""}) =>{

    return(
        <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20  mx-auto px-3">
<div className="container ">
   <div className="flex flex-wrap mx-4">
      <div className="w-full md:w-1/2 xl:w-1/3 px-4 ">
         <div className="bg-slate-500 rounded-lg overflow-hidden mb-10">
            <img
               src="/programacion.jpg"
               alt="image"
               className="w-full h-60"
               />
            <div className="transition-all p-8 sm:p-9 md:p-7 xl:p-9 text-center hover:bg-slate-300">
               <h3>
                  <a
                     href="#"
                     className="
                     font-semibold
                     text-dark text-xl
                     sm:text-[22px]
                     md:text-xl
                     lg:text-[22px]
                     xl:text-xl
                     2xl:text-[22px]
                     mb-4
                     block
                     hover:text-primary
                     "
                     >
                  Carrera de programación
                  </a>
               </h3>
               <p className="text-base text-body-color leading-relaxed mb-7">
                  Técnico en Programación
               </p>
               <Link to="/programacion"
                  className={classBtnHover}>
               Más información
               </Link>
            </div>
         </div>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 px-4">
         <div className="bg-slate-500 rounded-lg overflow-hidden mb-10">
            <img
               src="/quimica.jpg"
               alt="image"
               className="w-full h-60"
               />
            <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center hover:bg-slate-300 transition-all">
               <h3>
                  <a
                     href="#"
                     className="
                     font-semibold
                     text-dark text-xl
                     sm:text-[22px]
                     md:text-xl
                     lg:text-[22px]
                     xl:text-xl
                     2xl:text-[22px]
                     mb-4
                     block
                     hover:text-primary
                     "
                     >
                  Carrera de química
                  </a>
               </h3>
               <p className="text-base text-body-color leading-relaxed mb-7">
               Técnico en Química
               </p>
               <Link to={"/quimica"}
                  className={classBtnHover}
                  >
               Más información
               </Link>
            </div>
         </div>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 px-4">
         <div className="bg-slate-500 rounded-lg overflow-hidden mb-10 ">
            <img
               src="/electro.jpg"
               alt="image"
               className="w-full h-60"
               />
            <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center hover:bg-slate-300 transition-all">
               <h3>
                  <a
                     href="#"
                     className="
                     font-semibold
                     text-dark text-xl
                     sm:text-[22px]
                     md:text-xl
                     lg:text-[22px]
                     xl:text-xl
                     2xl:text-[22px]
                     mb-4
                     block
                     hover:text-primary
                     "
                     >
                  Carrera de electromecánica
                  </a>
               </h3>
               <p className="text-base text-body-color leading-relaxed mb-7">
               Técnico en Electromecánica
               </p>
               <Link to={"/electro"}
                  className={classBtnHover}
                  >
               Más información
               </Link>
            </div>
         </div>
      </div>
   </div>
</div>
        </section>
    )
}
const LayoutMain = () => {
   return(
      <div>
         <aside className="grid grid-cols-1 gap-4 mb-3  place-items-center sm:my-20 sm:grid-cols-2 p-4">
         <div className="flex sm:justify-self-start sm:row-start-1 row-start-2">
            <img className="w-40" src="/desarrollo-movil.png" alt="image1" />
         </div>
        
         <div className="flex sm:justify-self-end row-span-1">
            <Title span='Brandsen'/>
         
            <div className="flex justify-self-start">
               <img className="w-20 my-auto" src="/logo.png" alt="" />
            </div>
         </div>
        
        

       
       

         <div className="grid grid-cols-1 gap-4 place-items-center sm:mt-20 ">
         <img className="sm:w-40 w-40" src="/soporte-tecnico.png" alt="image2" />
         </div>
         <div className="grid grid-cols-1 gap-4 place-items-center sm:mt-20 ">
         <img className="sm:w-40 w-40" src="/matraz.png" alt="image2" />
         </div>
         
         
         </aside>
         <TitleSecondary title={"Nuestras carreras"}/>
         </div>
   )
}

const MainFooter = () => {
   return (
      <footer className='grid grid-cols-2'>
         <p className='text-white text-start self-end'>Programación</p>
         <aside className='flex justify-self-end gap-3'>
            <p className='text-white place-self-end'>Made with:</p>
            <img src="/react.svg"  className='w-8 place-self-start'alt="" />
            <img src="/Tailwind.svg" className='w-8' alt="" />
         </aside>
      </footer>
   )
}

const NavMain = ()=>{
   return(
      <header>

        <div className="py-2">
            <div className="">
                <nav className="flex items-center justify-between flex-wrap  ">
                    <div id="main-nav" className="w-full flex-grow lg:flex items-center lg:w-auto  ">
                        <div className="text-sm lg:flex-grow mt-2 mx-2 animated jackinthebox ">
                            <Link to={"/"}
                                className="block text-white lg:inline-block text-md font-bold  text-blue-500  sm:hover:border-indigo-400  hover:text-white mx-2 focus:text-blue-500  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
                                >
                                INICIO
                                </Link>
                            <Link to={"/programacion"}
                                className="block text-white lg:inline-block text-md font-bold   sm:hover:border-indigo-400  hover:text-blue-500 mx-2 focus:text-blue-500  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg">
                                PROGRAMACIÓN
                            </Link>
                            <Link to={"/quimica"}
                                className="block lg:inline-block text-white  text-md font-bold   sm:hover:border-indigo-400  hover:text-blue-500 mx-2 focus:text-blue-500  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg">
                                QUÍMICA
                              </Link>
                            <Link to={"/electro"}
                                className="block lg:inline-block text-md text-white font-bold   sm:hover:border-indigo-400  hover:text-blue-500 mx-2 focus:text-blue-500  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg">
                                ELECTROMECÁNICA
                              </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
  
</header>
   )
}

const CardLittle = ({division="Documentos", labNombre1="Laboratorio ejemplo",labNombre2="Laboratorio ejemplo",labNombre3="Laboratorio ejemplo",labNombre4="Laboratorio ejemplo"}) => {
   return(
      <article>
      <div className="flex w-72 flex-col rounded-xl bg-gray-300 bg-clip-border text-gray-700 shadow-md">
         <div className="p-3 w-52 mx-auto">
            <h5 className="mb-2 block font-sans text-xl font-semibold text-center leading-snug tracking-normal text-blue-gray-900 antialiased">
               {division}
            </h5>
            <p className="block font-sans text-base font-medium leading-relaxed text-inherit antialiased">
               {labNombre1}
            </p>
            <p className="block font-sans text-base font-medium leading-relaxed text-inherit antialiased">
               {labNombre2}
            </p>
            <p className="block font-sans text-base font-medium leading-relaxed text-inherit antialiased">
               {labNombre3}
            </p>
            <p className="block font-sans text-base font-medium leading-relaxed text-inherit antialiased">
               {labNombre4}
            </p>
         </div>
         </div>
      </article>
   )
}
const ButtonDownloadDC = () => {
   return(
      <button className={"h-12 w-48 overflow-hidden rounded-2xl text-base text-body-color font-medium bg-slate-600 hover:border-primary hover:bg-blue-950 hover:text-white transition"}>
         Descargar
         <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
      </button>
   )
} 

const News = ({title, text}) => {
   return(
      <h1 className='text-white text-xl text-center'>News here </h1>
   )
}
export {
    MainCards,
    LayoutMain,
    MainFooter,
    Title,
    NavMain,
    CardLittle,
    TitleSecondary,
    ButtonDownloadDC,
    classBtnHover,
    News
}