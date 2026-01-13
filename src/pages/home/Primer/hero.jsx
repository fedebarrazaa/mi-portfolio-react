//function con el primer componente
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' //IMPORTAMOS E INSTALAMOS PARA QUE FUNCIONEN LOS ICONOS

export function Hero({title, subtitle, imagen, icon}) {
  return (
    <section className="contenedor_uno">
      <article className='hero'>
        <div className="content">
          <header className='hero_text'>
            <h1>
              <strong>
              Federico Barraza.
              </strong>
              {title} 
              </h1>
            <p>{subtitle}</p>
            <div className='header_iconos'> 
              {icon.map((item, index) => (
              <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              >
              <FontAwesomeIcon icon={item.icon} className="iconos" />
              </a>
            ))}
            </div>
          </header>
          <img
            alt="mi foto"
            src={imagen}
            className='img'
          />
          </div>
          <div className="content_a">
              {icon.map((item, index) => (
              <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              >
              <FontAwesomeIcon icon={item.icon} className="iconos" />
              </a>
            ))}
              </div>
      </article>
    </section>
  )
}



/*
OTRA OPCION: 
const data = {
    title: 'Federico Barraza. Software Developer trainee y Diseñador UI/UX. ',
    subtitle: 'Creo cositas con diseños claros y modernos. Me actualizo constantemente en las últimas tecnologías.'
}*/