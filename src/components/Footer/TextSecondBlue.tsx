import React from 'react';
import { linkWhatsapp } from '../icons/maps';

export default function TextSecondBlue() {
  return (
    <div className="footer__text">
      <div>
        <p>
          Tambine puede comunicarse conmigo por{' '}
          <a className="footer__span" href={linkWhatsapp} target="_blank">
            Whatsapp
          </a>
          .
        </p>
        Espero poder haberle sido de utilidad me haria muy feliz saber que si
        comunicandose conmigo que tenga un buen dia que la pase bien 😁😊.
      </div>
      <div className="footer__background"></div>
    </div>
  );
}
