import React from 'react';
import { techsMap } from '../icons/maps';
import CardIcon from './CardIcon';

export default function Techs() {
  return (
    <div className="tech">
      <h2 className="tech__h2">Tecnologias</h2>
      <section className="tech__section">
        {techsMap.map((tech, i) => (
          <article className="tech__techs" key={i}>
            <h3 className="tech__h3">{tech[0]}</h3>
            <div className="tech__map">
              {tech[1].map((icon, index) => (
                <CardIcon
                  key={icon.id}
                  tech={icon}
                  index={index}
                  top={tech[2]}
                />
              ))}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
