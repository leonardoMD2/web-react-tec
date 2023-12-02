import {AppProg} from '../main-components/prog.jsx'

const textoProg = "El técnico secundario en programación es un programa educativo orientado a estudiantes de nivel secundario que desean adquirir habilidades prácticas en el campo de la programación informática. Esta formación tiene como objetivo proporcionar a los estudiantes una base sólida en conceptos fundamentales de programación y la capacidad de desarrollar software básico."
const urlProg = "/programacion.jpg"

const ProgMain = () => {
    return(
        <AppProg mainText={textoProg} urlImg={urlProg}/>
    )
}

export {
    ProgMain
}