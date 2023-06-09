import { useCycle } from 'framer-motion';
import React, { useState } from 'react';

export default function useBurger() {
  const [viewRoutes, setViewRoutes] = useState<boolean>(false);
  const [burger, toogleBurger] = useCycle<boolean>(true, false);

  const openRoutes = () => setViewRoutes(true);
  const closeRoutes = () => {
    document.body.style.overflowY = 'auto';
    toogleBurger();
    setViewRoutes(false);
  };
  const routes = () => {
    console.log({ burger });

    viewRoutes
      ? (document.body.style.overflowY = 'auto')
      : (document.body.style.overflowY = 'hidden');
    toogleBurger();
    setViewRoutes(!viewRoutes);
    console.log({ burger });
  };

  return {
    viewRoutes,
    burger,
    closeRoutes,
    routes,
    toogleBurger,
  };
}
