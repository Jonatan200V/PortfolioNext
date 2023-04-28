import React from 'react';

type Props = {
  close: () => void;
};
export interface LinksMobile {
  route: string;
  id: number;
  name: string;
}
const links: LinksMobile[] = [
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
];

export default function MenuMobile({ close }: Props) {
  return (
    <div className="routes">
      {links.map((link) => (
        <div className="routes__div" key={link.id}>
          <a className="routes__a" href={link.route} onClick={close}>
            {link.name}
          </a>
        </div>
      ))}
    </div>
  );
}