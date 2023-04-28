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
    viewRoutes
      ? (document.body.style.overflowY = 'auto')
      : (document.body.style.overflowY = 'hidden');
    toogleBurger();
    setViewRoutes(!viewRoutes);
  };

  return {
    viewRoutes,
    burger,
    closeRoutes,
    routes,
    toogleBurger,
  };
}
