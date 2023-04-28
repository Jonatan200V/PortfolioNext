'use client';
import React from 'react';
import { Burger } from '../icons';
import useBurger from '@/hooks/useBurger';
import MenuMobile from '../Header/MenuMobile';

export default function BottomBurger() {
  const { burger, closeRoutes, routes, toogleBurger, viewRoutes } = useBurger();

  return (
    <div
      className="burger__bottom"
      style={{
        zIndex: `${viewRoutes ? 20 : 1}`,
      }}
    >
      <button onClick={routes}>
        <Burger burger={burger} toogleBurger={toogleBurger} view={viewRoutes} />
        {viewRoutes && <MenuMobile close={closeRoutes} />}
      </button>
    </div>
  );
}
