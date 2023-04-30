import Image from 'next/image';
import React from 'react';
import Down from '../icons/Down';
import ReactNative from '../icons/techs/ReactNative';
import Next from '../icons/techs/Next';
import Info from './Info';

interface AboutText {
  id: number;
  text: string;
}

const aboutText: AboutText[] = [
  {
    id: 501,
    text: 'Estudie programacion en la secundaria, despues empece haciendo cursos en freecodecamp y youtube cuando supe que esto era lo mio quise ponerme a prueba y me inscribi en el bootcamp de soy HENRY.',
  },
  {
    id: 502,
    text: 'Dentro de Soy Henry, más que aprender a programar, aprendí a comunicarme con otras personas y mejorar mis soft skill teniamos un proyecto individual y uno grupal lo genial venía en el último mencionado porque teníamos reuniones todos los días, y un mentor que nos acompañaba en ese trayecto iba entendiendo como seria trabajar de desarrollador el día a día.',
  },
  {
    id: 503,
    text: 'Después de Soy Henry tuve algunos trabajos de freelance junto a estos tuve que aprender en la marcha tecnologías que no había tocado tanto antes como Firebase, React Native y complementarlo con Typescript.',
  },
  {
    id: 504,
    text: 'Por último, y con todo lo que he contado hasta ahora quiero decir que soy una persona que le gusta aprender mucho más si tiene que ver con JavaScript pero en sí me gusta todo lo nuevo y también mejorar lo antiguo.',
  },
];
export default function About() {
  return (
    <div className="about" id="about">
      <h1 className="about__welcome">
        Hola, Bienvenido <span className="about__greetings">👋</span> soy
        Jonatan Valdiviezo Desarrollador <Info icons={[<Next />]} text="Web" />
        <span> y </span> <Info icons={[<ReactNative />]} text="Mobile" /> Full
        Stack
      </h1>
      <div className="about__container">
        <div className="about__item">
          <Image
            className="about__image"
            src="https://res.cloudinary.com/di0jcyqyv/image/upload/v1682451372/images-users/yrc3scgqn8imgmjpyyrs.jpg"
            alt="Perfil"
            width={250}
            height={250}
          />
          <div className="about__div">
            <p className="about__p">
              <a href="./downloads/CV.pdf" download className="about__a">
                Descargar CV
              </a>
              <span className="about__background" />
            </p>
          </div>
        </div>
        <div className="about__item">
          <h2 className="about__h2">Sobre Mi</h2>
          <ul className="about__ul">
            {aboutText.map((about) => (
              <li key={about.id}>{about.text}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
