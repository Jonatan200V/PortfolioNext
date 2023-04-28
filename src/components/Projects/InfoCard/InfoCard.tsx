'use client';
import { Projects } from '@/app/types/types';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { variantsProject } from '@/variants/opacity';
type InfoCardProps = {
  project: Projects;
  openModal: (id: null) => void;
};

export default function InfoCard({ project, openModal }: InfoCardProps) {
  const [projectSingle, setProjectSingle] = useState<Projects[]>([project]);

  useEffect(() => {
    setProjectSingle([project]);
    return () => setProjectSingle([]);
  }, [project]);

  return (
    <>
      <motion.div
        variants={variantsProject}
        initial={'closed'}
        animate={'open'}
        exit={'closed'}
        className="projects__container"
      >
        <h2 className="projects__subtitle">{projectSingle[0].name}</h2>
      </motion.div>
      <motion.article
        variants={variantsProject}
        initial={'closed'}
        animate={'open'}
        exit={'closed'}
        className="projects__description"
      >
        <div className="projects__p">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem enim
          nobis dolores ea asperiores, ut voluptas reiciendis voluptatibus
          dolore deserunt sunt, quisquam facilis eos eius esse explicabo hic cum
          ipsam.
          <div className="projects__button">
            <div className="projects__btn">
              <button
                className="projects__click"
                onClick={() => openModal(null)}
              >
                Ver mas
              </button>
            </div>
          </div>
        </div>
        <motion.img
          variants={variantsProject}
          initial={'closed'}
          animate={'open'}
          exit={'closed'}
          layoutId={projectSingle[0].imageMobile}
          className="projects__img"
          src={projectSingle[0].imageMobile}
          alt={projectSingle[0].name}
          width={400}
          height={400}
        />
      </motion.article>
    </>
  );
}
