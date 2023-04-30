'use client';
import React from 'react';
import { Burger } from '../icons';
import MenuMobile from './MenuMobile';
import { AnimatePresence } from 'framer-motion';
import useBurger from '@/hooks/useBurger';

export default function BurgerAction() {
  const { burger, closeRoutes, routes, viewRoutes, toogleBurger } = useBurger();
  return (
    <li className="header__burger">
      <button
        onClick={routes}
        className="header__btn"
        style={{
          zIndex: `${viewRoutes ? 20 : 1}`,
        }}
      >
        <Burger burger={burger} />
      </button>
      <AnimatePresence>
        {viewRoutes && <MenuMobile close={closeRoutes} />}
      </AnimatePresence>
    </li>
  );
}
