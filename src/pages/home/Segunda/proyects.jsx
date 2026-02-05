import { Textos } from "../../../components/text/textos" //Con los .. voy volviendo para atras de las carpetas 
import { Cajas } from "../../../components/cajas/cajas"
import { SkillMe } from "../../../components/skill/skill"

export function Proyect() {
    return(
        <section className="projects">
            <section className="projects__section"> 
                <header className="projects__header">
                <Textos 
            text="01" 
            subtitle="Aquí tienes una muestra de mi trabajo: código sólido aplicado a ideas creativas"/>
            </header>

            <section className="projects__cards">
                <Cajas
            title="App Pokemon" 
            subtitle="Permite explorar Pokémon, ver sus tipos y estadísticas de forma interactiva y responsive." 
            text="Demo 🡵"
             href="https://fedebarrazaa.github.io/app-pokemon/" //pasar el link
            />        

                <Cajas
            title="App Palabra" 
            subtitle="Una herramienta interactiva para desordenar palabras y frases." 
            text="Demo 🡵"
             href="https://fedebarrazaa.github.io/app-desordenada/" //pasar el link
            />   

                <Cajas
            title="Padel io" 
            subtitle="¿Un juego? ¿una app? pronto lo sabremos. En desarrollo." 
            text=" 🡵"
            href="#" //pasar el link
            />    
            </section>
            </section>
            
            <section className="skills">
                <header className="skills__header">
                <Textos 
            text="02" 
            subtitle="Estas son las herramientas y lenguajes que utilizo para transformar ideas en experiencias digitales funcionales y escalables."/>
            </header>
            <section className="skills__list">   
            <SkillMe />
            </section>
            </section>
        </section>
    )
}