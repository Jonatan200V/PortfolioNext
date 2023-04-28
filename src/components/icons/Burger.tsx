'use client';
import * as React from 'react';
import { motion, useCycle } from 'framer-motion';

interface VariantsProps {
  d?: string;
  opacity?: number;
}

interface Duration {
  duration: number;
}
interface PropsPath {
  animate: VariantsProps;
  d?: string;
  transition?: Duration;
}

const Path = (props: PropsPath) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#fff"
    strokeLinecap="round"
    {...props}
  />
);

export const Burger = () => {
  const [burger, toogleBurger] = useCycle<boolean>(true, false);
  return (
    <button onClick={() => toogleBurger()} className="burger">
      <svg
        width="30"
        height="30"
        viewBox={`0 0 ${burger ? '22' : '20'} ${burger ? '20' : '19'}`}
      >
        <Path
          animate={
            burger ? { d: 'M 2 2.5 L 20 2.5' } : { d: 'M 3 16.5 L 17 2.5' }
          }
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          animate={burger ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.1 }}
        />
        <Path
          animate={
            burger
              ? { d: 'M 2 16.346 L 20 16.346' }
              : { d: 'M 3 2.5 L 17 16.346' }
          }
        />
      </svg>
    </button>
  );
};
