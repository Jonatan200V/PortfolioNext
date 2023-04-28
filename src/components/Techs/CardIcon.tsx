'use client';
import React, { useState } from 'react';
import { Tech } from '../../app/types/types';
import Down from '../icons/Down';
import { AnimatePresence, motion } from 'framer-motion';
import { variantsProject } from '@/variants/opacity';
interface CardIconProps {
  tech: Tech;
  index: number;
  top: number;
}
export default function CardIcon({ tech, index, top }: CardIconProps) {
  const [view, setView] = useState<boolean>(false);
  const openInfoTech = () => setView(true);
  const closeInfoTech = () => setView(false);

  return (
    <article
      className="tech__article"
      onMouseEnter={openInfoTech}
      onMouseMove={openInfoTech}
      onMouseOut={closeInfoTech}
    >
      <div>{tech.icon}</div>
      <h3 className="tech__name">{tech.name}</h3>
      <AnimatePresence>
        {view && (
          <>
            <motion.div
              variants={variantsProject}
              initial={'closed'}
              animate={'open'}
              exit={'closed'}
              className="tech__description"
            >
              {tech.description}
            </motion.div>
            <motion.div
              variants={variantsProject}
              initial={'closed'}
              animate={'open'}
              exit={'closed'}
              className="tech__down"
              style={{
                bottom: `${top}%`,
              }}
            >
              <Down />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </article>
  );
}
