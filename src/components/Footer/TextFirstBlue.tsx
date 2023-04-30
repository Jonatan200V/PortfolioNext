import React from 'react';
import { linkGithub, linkLinkedin } from '../icons/maps';

export default function TextFirstBlue() {
  return (
    <div className="footer__text">
      <div>
        Si quieres saber más sobre mí, puedes visitar mi perfil de
        <a className="footer__span" href={linkLinkedin} target="_blank">
          {' '}
          LinkedIn{' '}
        </a>
        y el de ,
        <a className="footer__span" href={linkGithub} target="_blank">
          {' '}
          Github{' '}
        </a>
        puedes enviarme un mensaje a cualquier hora siempre estoy atento a
        cualquier cosita.
      </div>
      <div className="footer__background"></div>
    </div>
  );
}
