import { Projects } from '@/app/types/types';
import { AnimatePresence } from 'framer-motion';
import React from 'react';
import ProjectCard from './ProjectCard';

type ProjectsAllCardsProps = {
  projects: Projects[];
  onClickCardProject: (id: number) => void;
};

export default function ProjectsAllCards({
  projects,
  onClickCardProject,
}: ProjectsAllCardsProps) {
  return (
    <AnimatePresence>
      <section className="projects__section">
        {projects.map((project) => (
          <ProjectCard
            project={project}
            key={project.id}
            changeInfoCardProject={onClickCardProject}
          />
        ))}
      </section>
    </AnimatePresence>
  );
}
