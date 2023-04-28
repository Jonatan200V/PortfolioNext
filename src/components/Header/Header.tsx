import React from 'react';
import Logo from './Logo';
import { Burger } from '../icons';
import { icons } from '../icons/maps';
import MenuMobile from './MenuMobile';
import BurgerAction from './BurgerAction';

export default function Header() {
  return (
    <header className="header">
      <div className="header__div">
        <Logo />
        <ul className="header__ul">
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
