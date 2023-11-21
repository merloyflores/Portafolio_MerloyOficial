import { motion } from "framer-motion";
import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import { animate, initial, transition } from "../shared/config";
import "../shared/styles/index.scss";
import { MetaHTML } from "../shared/ui/MetaHTML";
import { Wrapper } from "../shared/ui/Wrapper";

const IndexPage: React.FC<PageProps> = () => {
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
        className="main-index"
        layout
        initial={initial}
        animate={animate}
        transition={isPortrait ? { duration: 0 } : transition}
      >
        <div>
          <div className="title">
            <span> Hola soy </span>
            <p> Merloy Flores </p>
          </div>
          <div className="index1">
            <div className="profile">
              <img className="photo" src="/photos/Merloy.jpg" alt="Erick" />
              <div className="skills">
                  <p>
                    Soy un apasionado desarrollador web full-stack con sede en Costa Rica, 
                    <br></br>
                    con una sólida experiencia en el desarrollo de software y diseño instruccional. 
                    <br></br>
                    Mi enfoque se centra en la creación de soluciones innovadoras y efectivas 
                    <br></br>
                    utilizando tecnologías de vanguardia.
                  </p>
              </div>
            </div>
          </div>
        </div>
      </motion.main>
    </Wrapper>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <MetaHTML>
    <title>Merloy Flores</title>
  </MetaHTML>
);
