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
          <div className="profile">
            <img className="photo" src="/photos/Merloy.jpg" alt="Erick" />
            <div className="skills">
              <span>Full stack developer</span>
              <span>React.JS</span>
              <span>Java Script</span>
              <span>CSS</span>
              <span>HTML</span>
              <span>MySQL</span>
              <span>Node.JS</span>
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
