import { Projects } from '@/app/types/types';
export const initialProject: Projects = {
  id: 200,
  description:
    'Es un clon de la pagina oficial de dota 2, trata de una homepage con funcionalidades de scroll, una seccion de heroes con filtrados el detalle de cada uno, dentro del mismo podemos encontrar muchas funciones de las habilidades de cada uno y tambien los videos que representan que hacen cada una y una seccion de noticias donde se informa las ultimas actualizaciones o eventos.',
  imageDesktop:
    'https://res.cloudinary.com/di0jcyqyv/image/upload/v1682657522/images-users/ms1ofemab8vliuxmjped.png',
  imageMobile:
    'https://res.cloudinary.com/di0jcyqyv/image/upload/v1682531383/images-users/fbrf4ilxa9zhqsyvcixp.png',
  name: 'Copia de pagina de DOTA 2',
  techsFrontend: [123, 126, 127, 128],
  techsBackend: [110, 111, 113, 117, 118],
  techsController: [140],
  linkGithub: 'https://github.com/Jonatan200V/DotaVersion2',
};

export const projectsMap: Projects[] = [
  {
    id: 201,
    description: '',
    imageDesktop: '',
    imageMobile:
      'https://res.cloudinary.com/di0jcyqyv/image/upload/v1682535504/images-users/c483csnqvfattgps7kao.png',
    name: 'Wenjei Wallet',
    techsFrontendMobile: [130, 131, 132],
    techsBackend: [114],
    techsController: [140],
  },
  {
    id: 202,
    description: '',
    imageDesktop: '',
    imageMobile:
      'https://res.cloudinary.com/di0jcyqyv/image/upload/v1682555554/images-users/vntpwdr8fcblumoughur.jpg',
    name: 'Resident Evil',
    techsFrontendMobile: [130, 131, 132],
    techsBackend: [114],
    techsController: [140],
  },
  {
    id: 203,
    description: '',
    imageDesktop: '',
    imageMobile:
      'https://res.cloudinary.com/di0jcyqyv/image/upload/v1682555562/images-users/oxmcei2azcsv82sksvnx.png',
    name: 'Dogs PI Soy Henry',
    techsFrontendMobile: [130, 131, 132],
    techsBackend: [114],
    techsController: [140],
  },
  {
    id: 204,
    description: '',
    imageDesktop: '',
    imageMobile:
      'https://res.cloudinary.com/di0jcyqyv/image/upload/v1682555565/images-users/yldlokfc4oyfecce61xf.png',
    name: 'Pokemon',
    techsFrontendMobile: [130, 131, 132],
    techsBackend: [114],
    techsController: [140],
  },
];
export const allProjects: Projects[] = [...projectsMap, initialProject];
