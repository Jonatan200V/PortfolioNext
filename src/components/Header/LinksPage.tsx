'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { links } from './MenuMobile';
export default function LinksPage() {
  const [selectPage, setSelectPage] = useState<number>(0);
  const changePage = (index: number) => setSelectPage(index);
  return (
    <motion.ul className="header__links">
      {links.map((link, index) => (
        <a href={link.route} key={link.id} onClick={() => changePage(index)}>
          <li className="header__lis">
            {link.name}
            {selectPage === index && (
              <motion.div className="underline" layoutId="underline" />
            )}
          </li>
        </a>
      ))}
    </motion.ul>
  );
}
