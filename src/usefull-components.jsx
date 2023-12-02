import React from 'react'


const MainCards = () =>{

    return(
        <section class="pt-20 lg:pt-[120px] pb-10 lg:pb-20  mx-auto px-3">
<div className="container ">
   <div className="flex flex-wrap -mx-4">
      <div className="w-full md:w-1/2 xl:w-1/3 px-4 ">
         <div className="bg-slate-500 rounded-lg overflow-hidden mb-10">
            <img
               src="./programacion.jpg"
               alt="image"
               className="w-full h-80"
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
                  href="javascript:void(0)"
                  className="
                  inline-block
                  py-2
                  px-7
                  border border-[#E5E7EB]
                  rounded-full
                  text-base text-body-color
                  font-medium
                  hover:border-primary hover:bg-primary hover:text-white
                  transition
                  "
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
               className="w-full h-80"
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
                  className="
                  inline-block
                  py-2
                  px-7
                  border border-[#E5E7EB]
                  rounded-full
                  text-base text-body-color
                  font-medium
                  hover:border-primary hover:bg-primary hover:text-white
                  transition
                  "
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
               className="w-full h-80"
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
                  className="
                  inline-block
                  py-2
                  px-7
                  border border-[#E5E7EB]
                  rounded-full
                  text-base text-body-color
                  font-medium
                  hover:border-primary hover:bg-primary hover:text-white
                  transition
                  "
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

export {
    MainCards
}