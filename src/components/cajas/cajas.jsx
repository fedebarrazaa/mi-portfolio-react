import './index.css'

export function Cajas({title, subtitle, text, href}){
    return(
        <div className='box'> 
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <a href={href}>{text}</a>
        </div>
    )
}