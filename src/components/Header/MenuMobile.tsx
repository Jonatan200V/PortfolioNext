import React from 'react';
import { motion } from 'framer-motion';
import { variantsProject } from '@/variants/opacity';
type Props = {
  close: () => void;
};
export interface LinksMobile {
  route: string;
  id: number;
  name: string;
}
export const links: LinksMobile[] = [
  {
    route: '#about',
    id: 400,
    name: 'Sobre Mi',
  },
  {
    route: '#techs',
    id: 401,
    name: 'Tecnologias',
  },
  {
    route: '#projects',
    id: 402,
    name: 'Proyectos',
  },
  {
    route: '#footer',
    id: 403,
    name: 'Contactame',
  },
];

export default function MenuMobile({ close }: Props) {
  return (
    <motion.div
      className="routes"
      variants={variantsProject}
      animate={'open'}
      exit={'closed'}
      initial={'closed'}
    >
      {links.map((link) => (
        <div className="routes__div" key={link.id}>
          <a className="routes__a" href={link.route} onClick={close}>
            {link.name}
          </a>
        </div>
      ))}
    </motion.div>
  );
}
