import './index.css'

export function Textos({text,subtitle}) {
    return (
        <article className='section_dos'> 
             <p>
            {text}
            </p>
        <h3>
            {subtitle}
            </h3>
        </article>
    )
}