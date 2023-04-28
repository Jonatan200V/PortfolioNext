'use client';
import { Projects } from '@/app/types/types';
import {
  allProjects,
  initialProject,
  projectsMap,
} from '@/components/Projects/map/projectsMap';
import { useEffect, useLayoutEffect, useState } from 'react';
export const viewWidth = 1250;
export default function useChangeProjectsCard() {
  const [project, setProject] = useState<Projects>(initialProject);
  const [projectModal, setProjectModal] = useState<Projects | null>();
  const [projects, setProjects] = useState<Projects[]>(projectsMap);
  const [view, setView] = useState<boolean>(true);
  const [viewModal, setViewModal] = useState<boolean>(false);
  const [viewCardInfo, setViewCardInfo] = useState<number>(0);
  // Vemos si se redimensiona la ventana con useLayoutEffect para que establezca los cambios a penas se carga el DOM
  useLayoutEffect(() => {
    function handleResize() {
      setViewCardInfo(window.outerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Hacemos que framer-motion tenga la animacion de exit y initial al destruir el componente cardInfo y volviendo a la vida en 500 segundos
  useEffect(() => {
    const idTime = setTimeout(() => setView(() => true), 500);
    return () => clearTimeout(idTime);
  }, [view]);
  const changeInfoCardProject = (id: number) => {
    const projectSearchId: Projects[] = [];
    const projectNotId: Projects[] = [];
    projects.forEach((project) => {
      if (project.id === id) {
        projectSearchId.push(project);
      } else {
        projectNotId.push(project);
      }
    });
    setView(() => false);
    if (projectSearchId) {
      setProject(() => projectSearchId[0]);
    }
    projectNotId.push(project);
    setProjects(() => projectNotId);
  };
  //  Busca la card del projecto con su respecto ID  o lo destruye pasandole null
  const searchCardInfoProject = (id: number | null) => {
    console.log({ id });
    if (id === null) setProjectModal(null);
    const project = allProjects.find((pro) => pro.id === id);
    console.log({ project });
    if (project) {
      setProjectModal(project);
    }
  };
  const cardInfoProject = () => {
    setProjectModal(project);
  };

  const openModal = (id: number | null) => {
    if (id === null) {
      cardInfoProject();
    } else {
      searchCardInfoProject(id);
    }

    setViewModal(() => true);
    document.body.style.overflow = 'hidden';
  };
  const closeModal = () => {
    setViewModal(() => false);
    document.body.style.overflow = 'auto';
  };
  const onClickCardProject = (id: number) => {
    if (viewCardInfo > viewWidth) {
      changeInfoCardProject(id);
    } else {
      console.log({ id });
      openModal(id);
    }
  };
  return {
    closeModal,
    openModal,
    viewModal,
    viewCardInfo,
    project,
    projects,
    view,
    onClickCardProject,
    projectModal,
    searchCardInfoProject,
  };
}
