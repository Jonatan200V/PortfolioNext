import ReactNative from '../techs/ReactNative';
import Redux from '../techs/Redux';
import Typescript from '../techs/Typescript';
import { Tech } from '../../../app/types/types';

export const mobile: Tech[] = [
  {
    id: 130,
    icon: <ReactNative color="#000" height={70} width={70} />,
    name: 'React Native',
    description:
      'React Native es un framework de desarrollo móvil de código abierto basado en React que permite a los desarrolladores crear aplicaciones móviles nativas para iOS y Android utilizando JavaScript y React. Proporciona un conjunto de componentes predefinidos y herramientas de desarrollo que permiten una construcción rápida y eficiente de aplicaciones móviles multiplataforma.',
    list: 1,
  },
  {
    id: 131,
    icon: <Typescript />,
    name: 'Typescript',
    description:
      'TS (TypeScript) es un lenguaje de programación que extiende a JavaScript con características de tipado estático y otros elementos propios de la programación orientada a objetos. Permite detectar errores de programación antes de la ejecución, mejorar la escalabilidad y mantenibilidad del código, y aumentar la productividad del desarrollo de software.',
    list: 2,
  },
  {
    id: 132,
    icon: <Redux />,
    name: 'Redux',
    description:
      'Redux es una biblioteca de JavaScript utilizada para el manejo del estado de la aplicación en aplicaciones de una sola página (SPA) y en aplicaciones de múltiples páginas (MPA). Proporciona un contenedor de estado global que permite a los componentes de la aplicación acceder y actualizar el estado de manera eficiente y predecible.',
    list: 3,
  },
];
