import Express from '../techs/Express';
import Firebase from '../techs/Firebase';
import Graph from '../techs/Graph';
import Node from '../techs/Node';
import Postgres from '../techs/Postgres';
import Prisma from '../techs/Prisma';
import Sequelize from '../techs/Sequelize';
import TRPC from '../techs/TRPC';
import { Tech } from '../../../app/types/types';
import Typescript from '../techs/Typescript';

export const backendIcons: Tech[] = [
  {
    id: 110,
    icon: <Node />,
    name: 'Node JS',
    description:
      'Node es un entorno de tiempo de ejecución de JavaScript que permite ejecutar código en el lado del servidor. Node.js utiliza un modelo de entrada/salida sin bloqueo y es ampliamente utilizado para la creación de aplicaciones de red escalables y de alta capacidad.',
    list: 1,
  },
  {
    id: 111,
    icon: <Postgres />,
    name: 'Postgres',
    description:
      'PostgreSQL (también conocido como Postgres) es un sistema de gestión de bases de datos relacional (RDBMS) de código abierto y gratuito, utilizado para almacenar, recuperar y gestionar grandes cantidades de datos estructurados. Ofrece características como transacciones ACID, integridad de datos, consultas complejas y más.',
    list: 2,
  },
  {
    id: 112,
    icon: <Sequelize />,
    name: 'Sequelize',
    description:
      'Sequelize es una biblioteca de ORM (Mapeo Objeto-Relacional) para Node.js que permite interactuar con bases de datos relacionales de manera más sencilla y eficiente, utilizando objetos en lugar de sentencias SQL directamente. Soporta múltiples bases de datos, como PostgreSQL, MySQL, SQLite, y MSSQL.',
    list: 3,
  },
  {
    id: 113,
    icon: <Prisma />,
    name: 'Prisma',
    description:
      'Prisma es una biblioteca de ORM (Mapeo Objeto-Relacional) para Node.js que permite interactuar con bases de datos relacionales de manera sencilla y segura. Utiliza GraphQL para definir el modelo de datos y proporciona herramientas para generar automáticamente la capa de acceso a datos, lo que reduce la cantidad de código manual requerido. Soporta múltiples bases de datos, como PostgreSQL, MySQL y SQLite.',
    list: 1,
  },
  {
    id: 114,
    icon: <Firebase />,
    name: 'Firebase',
    description:
      'Firebase es una plataforma de desarrollo de aplicaciones móviles y web de Google que proporciona una variedad de servicios en la nube, como autenticación de usuarios, almacenamiento en la nube, base de datos en tiempo real, notificaciones push, análisis, hosting web y más.',
    list: 2,
  },
  {
    id: 115,
    icon: <Graph />,
    name: 'GraphQL',
    description:
      'GraphQL es un lenguaje de consulta y manipulación de datos utilizado para APIs, que permite a los clientes pedir solamente los datos que necesitan, en la forma que lo necesitan, de una manera eficiente.',
    list: 3,
  },
  {
    id: 116,
    icon: <TRPC />,
    name: 'TRPC',
    description:
      'trpc es un framework de comunicación entre el cliente y el servidor, que utiliza tipos de datos TypeScript para la definición de los servicios que proporciona el servidor y ofrece una API intuitiva para el cliente. Permite una comunicación más eficiente y segura entre ambos lados de la aplicación, y es compatible con varias bibliotecas de frontend y backend.',
    list: 1,
  },
  {
    id: 117,
    icon: <Express />,
    name: 'Express',
    description:
      'Express es un framework de Node.js utilizado para construir aplicaciones web, proporcionando un conjunto de herramientas y características para manejar solicitudes HTTP, definir rutas, manejar middleware, interactuar con bases de datos, entre otras. Es altamente personalizable y utilizado en una amplia variedad de aplicaciones web.',
    list: 2,
  },
  {
    id: 118,
    icon: <Typescript />,
    name: 'Typescript',
    description:
      'TS (TypeScript) es un lenguaje de programación que extiende a JavaScript con características de tipado estático y otros elementos propios de la programación orientada a objetos. Permite detectar errores de programación antes de la ejecución, mejorar la escalabilidad y mantenibilidad del código, y aumentar la productividad del desarrollo de software.',
    list: 3,
  },
];
