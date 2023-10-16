import { motion } from "framer-motion";
import { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import { animate, initial, transition } from "../shared/config";
import "../shared/styles/index.scss";
import { SkillsComponent } from "../shared/ui/Card";
import { MetaHTML } from "../shared/ui/MetaHTML";
import { Wrapper } from "../shared/ui/Wrapper";

const SkillsPage: React.FC<PageProps> = () => {
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
        initial={initial}
        animate={animate}
        transition={isPortrait ? { duration: 0 } : transition}
        className="main-skills"
      >
        <SkillsComponent />
      </motion.main>
    </Wrapper>
  );
};

export default SkillsPage;

export const Head: HeadFC = () => (
  <MetaHTML>
    <title> Skills | Merloy Flores </title>
  </MetaHTML>
);
