'use client';
import React, { useEffect, useState } from 'react';
import { Burger } from '../icons';
import useBurger from '@/hooks/useBurger';
import MenuMobile from '../Header/MenuMobile';
import { AnimatePresence } from 'framer-motion';

export default function BottomBurger() {
  const [index, setIndex] = useState<number>(20);

  const { burger, closeRoutes, routes, toogleBurger, viewRoutes } = useBurger();
  useEffect(() => {
    if (index === 1) {
      setIndex(() => 20);
    } else {
      setTimeout(() => setIndex(() => 1), 500);
    }
  }, [viewRoutes]);
  // useEffect(() => {
  //   if (index === 20) {
  //     setIndex(1);
  //   }
  // }, []);

  return (
    <div
      className="burger__bottom"
      style={{
        zIndex: `${index}`,
      }}
    >
      <div onClick={routes}>
        <Burger burger={burger} view={viewRoutes} />
      </div>
      <div className="burger__menu">
        <AnimatePresence>
          {viewRoutes && <MenuMobile close={closeRoutes} />}
        </AnimatePresence>
      </div>
    </div>
  );
}
