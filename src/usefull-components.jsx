import React from 'react'

const classBtnHover = `inline-block
py-2
px-7
border border-[#E5E7EB]
rounded-full
text-base text-body-color
font-medium
hover:border-primary hover:bg-blue-950 hover:text-white transition`
const MainCards = () =>{

    return(
        <section class="pt-20 lg:pt-[120px] pb-10 lg:pb-20  mx-auto px-3">
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
                     href="javascript:void(0)"
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
                  Lorem ipsum dolor sit amet pretium consectetur adipiscing
                  elit. Lorem consectetur adipiscing elit.
               </p>
               <a
                  href="#"
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
                     href="javascript:void(0)"
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
                  Lorem ipsum dolor sit amet pretium consectetur adipiscing
                  elit. Lorem consectetur adipiscing elit.
               </p>
               <a
                  href="javascript:void(0)"
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
                     href="javascript:void(0)"
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
                  Lorem ipsum dolor sit amet pretium consectetur adipiscing
                  elit. Lorem consectetur adipiscing elit.
               </p>
               <a
                  href="javascript:void(0)"
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
         <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
         <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
         <div className="flex justify-end content-center gap-3 max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
            <h2 className="self-center text-4xl font-bold sm:text-5xl text-white">
               E.E.S.T N° 1
               <span className="hidden sm:block text-4xl text-white">Brandsen</span>
            </h2>
            <div className="flex self-center">
               <img className="w-20 my-auto" src="./logo.png" alt="" />
            </div>
         </div>
            
         </div>

         <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
            <img className="w-40" src="./desarrollo-movil.png" alt="image1" />
         </div>
         </aside>

         <div className="grid grid-cols-2 place-items-center sm:mt-20">
         <img className="sm:w-40 w-40" src="./soporte-tecnico.png" alt="image2" />
         <img className="sm:w-40 w-40" src="./matraz.png" alt="image2" />
         </div>

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
    MainFooter
}