import { ProjectData } from "../../data/ProjectData";
import { Project } from "../../models/Project";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import { motion as m } from "framer-motion";
import { PageHeader } from "../../components/PageHeader/PageHeader";

const animateProjects = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    delay: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 1,
      duration: 4,
      ease: [0.455, 0.03, 0.515, 0.955],
    },
  },
};

const animateProjectsCards = { hidden: { opacity: 0 }, show: { opacity: 1 } };

export const Projects = () => {
  return (
    <>
      <div className="projects 2xl:w-3/4 pt-16 mx-auto md:mx-10 2xl:mx-44 px-4">
        <PageHeader />
        <m.div
          key="projects"
          variants={animateProjects}
          exit={{ opacity: 0 }}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 md:gap-10 2xl:gap-3 p-4 pt-10 "
        >
          {ProjectData.map((project: Project) => (
            <m.div
              key={project.id}
              variants={animateProjectsCards}
              exit={{ opacity: 0 }}
              className="mb-5 max-w-72"
            >
              <ProjectCard project={project} key={project.id} />
            </m.div>
          ))}
        </m.div>
      </div>
    </>
  );
};
