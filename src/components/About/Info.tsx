'use client';
import React, { Fragment, useState } from 'react';
import Down from '../icons/Down';

interface InfoProps {
  text: string;
  icons: JSX.Element[];
}

export default function Info({ text, icons }: InfoProps) {
  const [viewTitle, setViewTitle] = useState<boolean>(false);
  const view = () => {
    setViewTitle(true);
  };
  const close = () => {
    setViewTitle(false);
  };
  return (
    <span
      className="about__lenguages"
      onMouseEnter={view}
      onMouseMove={view}
      onMouseOut={close}
    >
      {text}
      {viewTitle && (
        <span className="about__title">
          {icons.map((icon, index) => (
            <Fragment key={index}>{icon}</Fragment>
          ))}
          <Down />
        </span>
      )}
    </span>
  );
}
