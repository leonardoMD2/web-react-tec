import React from 'react'
import './css/index.css'
import {Title, MainFooter, MainCards} from "./main-components/usefull-components.jsx"


const AppProg = ({mainText,urlImg}) => {
    return(
        <main className='bg-slate-950 h-100 grid auto-rows-min container-lg'>
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
        <div className='h-screen flex flex-col justify-center w-4/5 mx-auto'>
            <section className='grid grid-cols-2 mt-4'>
                <article className='text-white h-80 flex justify-start'>
                    <img src={urlImg} alt="" className='max-h-full rounded'/>
                </article>
                <article className='text-white h-80 flex items-center w-4/5 text-justify '>
                {texto}
                </article>
            </section>
            <section className='grid grid-cols-2 mt-4'>
                <article className='text-white h-80 flex items-center w-4/5 text-justify '>
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