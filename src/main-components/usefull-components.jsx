import React from 'react'

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
const MainCards = ({progLink="",quiLink="",elecLink=""}) =>{

    return(
        <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20  mx-auto px-3">
<div className="container ">
   <div className="flex flex-wrap mx-4">
      <div className="w-full md:w-1/2 xl:w-1/3 px-4 ">
         <div className="bg-slate-500 rounded-lg overflow-hidden mb-10">
            <img
               src="./programacion.jpg"
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
               <a
                  href={progLink}
                  className={classBtnHover}
                  
                 
                  >
               Más información
               </a>
            </div>
         </div>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 px-4">
         <div className="bg-slate-500 rounded-lg overflow-hidden mb-10">
            <img
               src="./quimica.jpg"
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
               <a
                  href={quiLink}
                  className={classBtnHover}
                  >
               Más información
               </a>
            </div>
         </div>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 px-4">
         <div className="bg-slate-500 rounded-lg overflow-hidden mb-10 ">
            <img
               src="./electro.jpg"
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
               <a
                  href={elecLink}
                  className={classBtnHover}
                  >
               Más información
               </a>
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
            <img className="w-40" src="./desarrollo-movil.png" alt="image1" />
         </div>
        
         <div className="flex sm:justify-self-end row-span-1">
            <Title span='Brandsen'/>
         
            <div className="flex justify-self-start">
               <img className="w-20 my-auto" src="./logo.png" alt="" />
            </div>
         </div>
        
        

       
       

         <div className="grid grid-cols-1 gap-4 place-items-center sm:mt-20 ">
         <img className="sm:w-40 w-40" src="./soporte-tecnico.png" alt="image2" />
         </div>
         <div className="grid grid-cols-1 gap-4 place-items-center sm:mt-20 ">
         <img className="sm:w-40 w-40" src="./matraz.png" alt="image2" />
         </div>
         
         
         </aside>
         <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium text-white" >Nuestras carreras</h1>
         </div>
   )
}

const MainFooter = () => {
   return (
      <footer className='grid grid-cols-2'>
         <p className='text-white text-start self-end'>Programación</p>
         <aside className='flex justify-self-end gap-3'>
            <p className='text-white place-self-end'>Maded with:</p>
            <img src="./react.svg"  className='w-8 place-self-start'alt="" />
            <img src="./Tailwind.svg" className='w-8' alt="" />
         </aside>
      </footer>
   )
}
export {
    MainCards,
    LayoutMain,
    MainFooter,
    Title
}