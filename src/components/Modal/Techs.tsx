import { Tech } from '@/app/types/types';
import React from 'react';
interface TechsProps {
  techs?: Tech[];
  title: string;
}

export default function Techs({ techs, title }: TechsProps) {
  return (
    <div className="modal__techs">
      <h2 className="modal__h2">{title}</h2>
      <section className="modal__section">
        {techs?.map((tech) => (
          <div className="modal__icon">{tech.icon}</div>
        ))}
      </section>
    </div>
  );
}
