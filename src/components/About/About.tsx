import Image from 'next/image';
import React from 'react';
import Down from '../icons/Down';
import ReactNative from '../icons/techs/ReactNative';
import Next from '../icons/techs/Next';
import Info from './Info';

export default function About() {
  return (
    <div className="about" id="about">
      <h1 className="about__welcome">
        Hola, Bienvenido <span className="about__greetings">👋</span> soy
        Jonatan Valdiviezo Desarrollador <Info icons={[<Next />]} text="Web" />
        <span> y </span> <Info icons={[<ReactNative />]} text="Mobile" /> Full
        Stack
      </h1>
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
      <h2 className="about__h2">Sobre Mi</h2>
      <ul className="about__ul">
        {Array.from({ length: 5 }, (_, i) => (
          <li key={i}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            nulla repellat similique modi. Quod, a nisi debitis voluptatem nam
            maiores molestiae porro nesciunt repudiandae suscipit totam
            aspernatur. Aspernatur, nobis suscipit.
          </li>
        ))}
      </ul>
    </div>
  );
}
