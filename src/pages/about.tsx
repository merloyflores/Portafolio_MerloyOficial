import { motion } from "framer-motion";
import { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import { animate, initial, transition } from "../shared/config";
import "../shared/styles/index.scss";
import { IconVenezuela } from "../shared/ui/Icon";
import { MetaHTML } from "../shared/ui/MetaHTML";
import { Wrapper } from "../shared/ui/Wrapper";

const AboutPage: React.FC<PageProps> = () => {
  const [isPortrait, setIsPortrait] = React.useState(
    typeof window !== "undefined" &&
      window.matchMedia("(orientation: portrait)").matches
  );

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(orientation: portrait)");

    const handleOrientationChange = (event: MediaQueryListEvent) => {
      setIsPortrait(event.matches);
    };

    mediaQuery.addEventListener("change", handleOrientationChange);

    return () => {
      mediaQuery.removeEventListener("change", handleOrientationChange);
    };
  }, []);

  return (
    <Wrapper>
      <motion.main
        className="main-about"
        layout
        initial={initial}
        animate={animate}
        transition={isPortrait ? { duration: 0 } : transition}
      >
        <div className="left">
          <img className="photo" src="/photos/Merloy.jpg" alt="Erick" />
        </div>
        <ul className="right">
          <li className="presentation">Desarrollador Web Full stack</li>
            <br></br>
            <div>  
              Soy un apasionado desarrollador web full-stack con sede en Costa Rica, con una sólida experiencia en el desarrollo de software y diseño instruccional. 
              Mi enfoque se centra en la creación de soluciones innovadoras y efectivas utilizando tecnologías de vanguardia. 
              
            </div>
            <div>
                <ul>
                    <br></br>  
                      <b><h3>Experiencia en Desarrollo Web:</h3></b>
                      <br></br> 
                      He tenido la oportunidad de trabajar en una variedad de proyectos, empleando tecnologías de punta como React y Node.js. Algunos de mis logros más notables incluyen:
                      <li>
                        <b>Aplicación de Pronóstico del Clima:</b> Diseñé y desarrollé una aplicación que proporciona pronósticos meteorológicos precisos, permitiendo a los usuarios estar siempre preparados.
                      </li>

                      <li>
                        <b>Aplicación "Rick y Morty":</b> Creé una aplicación interactiva basada en la popular serie "Rick y Morty" que permite a los usuarios acceder a información detallada sobre personajes y eventos a través de una API, mejorando la experiencia de los fanáticos de la serie.
                      </li>

                      <li>
                        <b>Pokédex Interactiva:</b> Desarrollé una página web estilo Pokédex que permite a los usuarios explorar la vasta colección de Pokémon, brindando una experiencia única y educativa.
                      </li>

                      <li>
                        <b>Colaboración en Plataforma de Comercio Electrónico:</b> Participé activamente en el desarrollo de una plataforma de comercio electrónico, contribuyendo al diseño y la funcionalidad del sistema, lo que resultó en una experiencia de compra intuitiva y eficiente para los usuarios.
                      </li>
                      <br></br> 
                      <br></br> 
                      <b><h3>Habilidades de Desarrollo Instruccional:</h3></b>
                      <br></br> 
                      Además de mi experiencia como desarrollador, también soy un especialista en el uso de herramientas Power Platform.
                      <br></br>
                      <br></br>
                      Mi enfoque integral en el desarrollo web y el uso de herramientas de automatización me han proporcionado una base sólida para abordar proyectos de manera eficiente y colaborativa. Soy un apasionado por la creación de soluciones que marcan la diferencia y estoy comprometido a seguir aprendiendo y mejorando mis habilidades.
                      <br></br> 
                      Estoy ansioso por seguir contribuyendo a proyectos desafiantes y continuar creciendo como profesional en esta emocionante industria.
                </ul>
            </div>
        </ul>
      </motion.main>
    </Wrapper>
  );
};

export default AboutPage;

export const Head: HeadFC = () => (
  <MetaHTML>
    <title> About me | Merloy Flores </title>
  </MetaHTML>
);
