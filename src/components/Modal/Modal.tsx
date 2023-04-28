import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Projects } from '@/app/types/types';
import Image from 'next/image';
import { filterCard } from '@/utils/filterCard';
import Techs from './Techs';
import { GitHub } from '../icons';
import Youtube from '../icons/Youtube';
type ModalProps = {
  closeModal: () => void;
  searchCardInfoProject: (id: null) => void;
  project?: Projects | null;
};
const imageBackgroundName =
  'https://res.cloudinary.com/di0jcyqyv/image/upload/v1682632542/images-users/bk9durne12qccuzcbi33.png';
export default function Modal({
  closeModal,
  searchCardInfoProject,
  project,
}: ModalProps) {
  useEffect(() => {
    return () => searchCardInfoProject(null);
  }, []);
  const techs = filterCard(project);

  return (
    <motion.div
      className="modal"
      initial={{
        translateX: 700,
        opacity: 0,
      }}
      animate={{
        translateX: 0,
        opacity: 1,
      }}
      exit={{
        translateX: 100,
        opacity: 0,
      }}
      transition={{
        duration: 1.5,
        type: 'spring',
      }}
    >
      <section className="modal__container">
        <div className="modal__top">
          <span className="modal__name">{project?.name}</span>
          <button onClick={closeModal}>
            <Image
              src={
                'https://res.cloudinary.com/di0jcyqyv/image/upload/v1682660101/images-users/xljfevpvbn9azjz1fhxv.png'
              }
              alt="close"
              width={30}
              height={30}
            />
          </button>
        </div>
        <Image
          src={
            project?.imageDesktop ??
            'https://res.cloudinary.com/di0jcyqyv/image/upload/v1682633292/images-users/s6u623irokweux8n6zpn.png'
          }
          alt={String(project?.name)}
          width={320}
          height={400}
          className="modal__image"
        />
        <Techs title="Backend" techs={techs?.backendTech} />
        {techs?.frontendMobile !== undefined &&
        techs.frontendMobile.length > 0 ? (
          <Techs techs={techs.frontendMobile} title="Mobile" />
        ) : (
          <Techs techs={techs?.frontendTech} title="Frontend" />
        )}
        <Techs title="Otros" techs={techs?.controllerTech} />
        <div className="modal__description">{project?.description}</div>
        <div className="modal__links">
          <a href={project?.linkGithub} target="__blank">
            <GitHub height={35} width={35} color="#000" />
          </a>
          <a href={project?.linkYoutube} target="_blank">
            <Youtube height={35} width={35} color="#ff0000" />
          </a>
        </div>
      </section>
    </motion.div>
  );
}
