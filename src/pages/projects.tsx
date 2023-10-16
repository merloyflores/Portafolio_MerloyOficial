import { motion } from "framer-motion";
import { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import "react-toastify/dist/ReactToastify.css";
import { animate, initial, transition } from "../shared/config";
import "../shared/styles/index.scss";
import { ProjectsComponent } from "../shared/ui/Card";
import { MetaHTML } from "../shared/ui/MetaHTML";
import { Wrapper } from "../shared/ui/Wrapper";

const ProjectsPage: React.FC<PageProps> = () => {
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
        className="main-projects"
      >
        <ProjectsComponent />
      </motion.main>
    </Wrapper>
  );
};

export default ProjectsPage;

export const Head: HeadFC = () => (
  <MetaHTML>
    <title> Projects | Merloy </title>
  </MetaHTML>
);
