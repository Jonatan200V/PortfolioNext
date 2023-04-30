'use client';
import React, { useState } from 'react';
import InputText, { textName } from './InputText';
import TextPurple from './TextPurple';
import TextFirstBlue from './TextFirstBlue';
import TextSecondBlue from './TextSecondBlue';

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
          <div className="projects__button">
            <div className="projects__btn">
              <button className="projects__click">Enviar</button>
            </div>
          </div>
        </div>
        <div className="footer__end">
          <div className="footer__left">
            <TextFirstBlue />
            <div className="footer__view--left">
              <TextPurple />
            </div>
            <TextSecondBlue />
          </div>
          <div className="footer__view--right">
            <TextPurple />
          </div>
        </div>
      </div>
    </div>
  );
}
