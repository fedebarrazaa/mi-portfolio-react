export function CopyText({text, title, subtitle, textdos, texttres}) {
    return (
        <section className="copy"> 
            <h1>{text}</h1>
            <p>{title}</p>
            <p>{subtitle}</p>
            <p>{textdos}</p>
            <div className="fede">
               <a href="https://fedebarraza.vercel.app/">
                {texttres}
            </a> 
            </div>
            
        </section>
        
    )
}