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
        <div id="contenedor">
          <ul className="right">
            <li className="presentation">Desarrollador Web Full stack</li>
              <br></br>
              <div>  
                  Soy un apasionado en el desarrollador web full stack con base en Costa Rica. Mi experiencia se ha centrado en la creación de aplicaciones web dinámicas y eficientes que ofrecen experiencias sólidas a los usuarios, me destaco como especialista en la automatización a través de Power Platform, simplificando procesos y potenciando la productividad.
                  <br></br>
                  <br></br>
                  Mi enfoque no se limita solo al desarrollo técnico, también soy un desarrollador instruccional, lo que me permite fusionar la tecnología con la pedagogía para crear soluciones educativas innovadoras y efectivas.
                  <br></br>
                  <br></br>
                  ¡Me encantaría ser parte de tu próximo proyecto y colaborar para llevarlo al siguiente nivel!
              </div>
          </ul>
        </div>
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
