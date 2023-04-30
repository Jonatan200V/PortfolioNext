import React from 'react';
import Logo from './Logo';
import { icons } from '../icons/maps';
import BurgerAction from './BurgerAction';
import LinksPage from './LinksPage';
export default function Header() {
  return (
    <header className="header">
      <div className="header__div">
        <Logo />

        <ul className="header__ul">
          <LinksPage />
          {icons.map((icon, i) => (
            <li className="header__li" data-icon={icon.color === 0} key={i}>
              <a href={icon.href} target="_blank">
                {icon.icon}
              </a>
            </li>
          ))}
          <BurgerAction />
        </ul>
      </div>
    </header>
  );
}
