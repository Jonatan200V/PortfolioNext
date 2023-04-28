import Css from '../techs/Css';
import Graph from '../techs/Graph';
import Html from '../techs/Html';
import Javascript from '../techs/Javascript';
import Next from '../techs/Next';
import ReactJS from '../techs/ReactJS';
import Redux from '../techs/Redux';
import Sass from '../techs/Sass';
import Typescript from '../techs/Typescript';
import { Tech } from '../../../app/types/types';

export const frontend: Tech[] = [
  {
    id: 120,
    icon: <Html />,
    name: 'HTML',
    description:
      'HTML (HyperText Markup Language) es un lenguaje de marcado utilizado para crear páginas web. Se compone de etiquetas que definen el contenido y estructura de la página, como encabezados, párrafos, enlaces, imágenes, formularios, entre otros elementos.',
    list: 1,
  },
  {
    id: 121,
    icon: <Css />,
    name: 'CSS',
    description:
      'CSS (Cascading Style Sheets) es un lenguaje utilizado para dar estilo y diseño a páginas web. Permite controlar la apariencia de los elementos HTML, como el color, tamaño, tipografía, margen, entre otros, para mejorar la presentación visual de la página.',
    list: 2,
  },
  {
    id: 122,
    icon: <Javascript />,
    name: 'Javascript',
    description:
      'JS (JavaScript) es un lenguaje de programación utilizado para crear aplicaciones web y añadir interactividad a páginas HTML. Permite manipular el contenido de la página, responder a eventos del usuario, validar formularios, crear animaciones, entre otras funcionalidades dinámicas y avanzadas.',
    list: 3,
  },
  {
    id: 123,
    icon: <Typescript />,
    name: 'Typescript',
    description:
      'TS (TypeScript) es un lenguaje de programación que extiende a JavaScript con características de tipado estático y otros elementos propios de la programación orientada a objetos. Permite detectar errores de programación antes de la ejecución, mejorar la escalabilidad y mantenibilidad del código, y aumentar la productividad del desarrollo de software.',
    list: 1,
  },
  {
    id: 124,
    icon: <ReactJS />,
    name: 'React Js',
    description:
      'ReactJS es una biblioteca de JavaScript utilizada para crear interfaces de usuario interactivas y reutilizables. Permite construir componentes UI modulares, que se actualizan automáticamente en respuesta a cambios de estado, eventos y datos externos.',
    list: 2,
  },
  {
    id: 125,
    icon: <Graph />,
    name: 'GraphQl',
    description:
      'GraphQL es un lenguaje de consulta y manipulación de datos utilizado para APIs, que permite a los clientes pedir solamente los datos que necesitan, en la forma que lo necesitan, de una manera eficiente.',
    list: 3,
  },
  {
    id: 126,
    icon: <Next color="#000" height={70} width={70} />,
    name: 'Next JS',
    description:
      'Next.js es un framework de React que facilita la creación de aplicaciones web avanzadas con características como enrutamiento del lado del servidor, generación de páginas estáticas y dinámicas, soporte para CSS y Sass, manejo de errores, entre otras.',
    list: 1,
  },
  {
    id: 127,
    icon: <Sass />,
    name: 'Sass',
    description:
      'Sass (Syntactically Awesome Style Sheets) es un preprocesador de CSS que permite agregar características como variables, anidamiento de reglas, funciones, mixins y más, para mejorar la legibilidad y mantenibilidad del código CSS.',
    list: 2,
  },
  {
    id: 128,
    icon: <Redux />,
    name: 'Redux',
    description:
      'Redux es una biblioteca de JavaScript utilizada para el manejo del estado de la aplicación en aplicaciones de una sola página (SPA) y en aplicaciones de múltiples páginas (MPA). Proporciona un contenedor de estado global que permite a los componentes de la aplicación acceder y actualizar el estado de manera eficiente y predecible.',
    list: 3,
  },
];
