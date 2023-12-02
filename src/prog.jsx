import React from 'react'
import './css/index.css'
import {Title, MainFooter, NavMain} from "./main-components/usefull-components.jsx"


const AppProg = ({mainText,urlImg}) => {
    return(
        <main className='bg-slate-950 h-100 grid auto-rows-min container-lg'>
            <NavMain/>
            <header className='flex justify-center'>
                <Title title={"Técnico en Programación"}/>
            </header>
            
        
        <MainLayer texto={mainText} urlImg={urlImg}/>
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
                <article className='text-white h-80 flex sm:items-center w-4/5 items-center sm:text-justify mx-auto '>
                    {texto}
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