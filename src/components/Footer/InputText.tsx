import React from 'react';

export type textName = 'name' | 'email' | 'phone' | 'lastname';
type Props = {
  name: string;
  onChange: (evt: React.ChangeEvent<HTMLInputElement>, name: textName) => void;
  text: string;
  textName: textName;
};

export default function InputText({ name, text, onChange, textName }: Props) {
  return (
    <div className="input">
      <input
        className="input__input"
        value={text}
        onChange={(evt) => onChange(evt, textName)}
      />
      <label
        className={`input__label ${text.length > 0 ? 'input__active' : ''}`}
      >
        {name}
      </label>
    </div>
  );
}
