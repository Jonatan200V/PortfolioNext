import GitHub from '../GitHub';
import Linkedin from '../Linkedin';
import { IconsLinks, Tech } from '../../../app/types/types';
import { backendIcons } from './backend';
import { controller } from './controllers';
import { frontend } from './frontend';
import { mobile } from './mobile';
export const linkGithub = 'https://github.com/Jonatan200V';
export const linkLinkedin =
  'https://www.linkedin.com/in/jonatan-valdiviezo2205/';
export const linkWhatsapp =
  'https://api.whatsapp.com/send?phone=2612112078&text=Hola como estas';
export const icons: IconsLinks[] = [
  {
    id: 100,
    href: linkGithub,
    icon: <GitHub />,
    name: 'Github',
    color: 1,
  },
  {
    id: 101,
    href: linkLinkedin,
    icon: <Linkedin />,
    name: 'Linkedin',
    color: 0,
  },
];
export const techsMap: [string, Tech[], number][] = [
  ['Desarrollo Frontend Web', frontend, 102],
  ['Desarrollo Backend Web y Mobile', backendIcons, 102],
  ['Desarrollo Frontend Mobile', mobile, 103],
  ['Controlador de versiones', controller, 103.8],
];
