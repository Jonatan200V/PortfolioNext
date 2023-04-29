'use client';
import React, { useState } from 'react';
import InputText, { textName } from './InputText';
import { GitHub, Linkedin } from '../icons';

interface Form {
  name: string;
  lastname: string;
  phone: string;
  email: string;
  message: string;
}

interface State {
  form: Form;
}
const INITIAL_STATE_FORM: Form = {
  email: '',
  lastname: '',
  message: '',
  name: '',
  phone: '',
};
export default function Footer() {
  const [values, setValues] = useState<State['form']>(INITIAL_STATE_FORM);

  const handleChange = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    name: textName,
  ) => {
    const { value } = evt.currentTarget;
    setValues((state) => ({
      ...state,
      [name]: value,
    }));
  };
  return (
    <div className="footer" id="footer">
      <div className="footer__footer">
        <div className="footer__container">
          <h2 className="footer__h2">Contactame</h2>
          <div className="footer__inputs">
            <InputText
              onChange={handleChange}
              text={values.name}
              textName={'name'}
              name="Nombre"
            />
            <InputText
              onChange={handleChange}
              text={values.lastname}
              textName={'lastname'}
              name="Apellido"
            />
            <InputText
              onChange={handleChange}
              text={values.phone}
              textName={'phone'}
              name="Telefono"
            />
            <InputText
              onChange={handleChange}
              text={values.email}
              textName={'email'}
              name="Email"
            />
          </div>
          <div className="input footer__message">
            <textarea className="input__input footer__texarea" />
            <label className="input__label footer__msg">Mensaje</label>
          </div>
        </div>
        <div className="footer__end">
          <div>
            <div className="footer__text">
              Si quieres saber más sobre mí, puedes visitar mi perfil de
              <span className="footer__span">
                {' '}
                LinkedIn <Linkedin />{' '}
              </span>
              y el de ,
              <span className="footer__span">
                {' '}
                Github <GitHub />{' '}
              </span>
              puedes enviarme un mensaje a cualquier hora siempre estoy atento a
              cualquier cosita.
            </div>
            <p className="footer__text">
              Gracias por ver, espero te haya gustado atentamente, Jonatan
              Valdiviezo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
