import { Textos } from "../../../components/text/textos"

export function Contacto({ text, email, secondaryText, location, locationMe, work }) {
  return (
    <section className="section_contact">
      <div className="contact_container">
        <Textos
          text="[ Contacto ]"
          subtitle="Disponible para proyectos, colaboraciones y propuestas laborales."
        />

        <article className="article_contact">
          <div>
            <h3>{text}</h3>
            <p>{email}</p>
          </div>

          <div>
            <h3>{location}</h3>
            <p>{locationMe}</p>
            <p>{work}</p>
          </div>
        </article>
      </div>
    </section>
  );
}