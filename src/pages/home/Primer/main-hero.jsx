import { Hero } from './hero' //importo la function para poder usarla aca
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons' //importacion de los iconos
import fotopefil from "../../../assets/perfil.jpg" //importo la foto desde la carpeta assets
import './index.css'

export function PrimeraParte() {
    return (
        <>
        <Hero 
        title="Software Developer trainee y cositas de Diseñador UI/UX." 
        subtitle="Desarrollo experiencias digitales combinando código y diseño. Busco interfaces claras, modernas y funcionales, aprendiendo constantemente nuevas tecnologías."
        imagen={fotopefil}
        icon={[
        { icon: faGithub, link: "https://github.com/fedebarrazaa" },
        { icon: faLinkedin, link: "https://www.linkedin.com/in/federico-barraza-4735571a4/" },
        { icon: faInstagram, link: "https://www.instagram.com/fedebarraza__/" },
        ]}
        />
        </>
    )
}