'use client';
import React from 'react';
import { motion } from 'framer-motion';
type ImageCardProps = {
  image: string;
  name: string;
};

export default function ImageCard({ image, name }: ImageCardProps) {
  return (
    <motion.img
      layoutId={image}
      src={image}
      alt={name}
      width={300}
      height={300}
      className="projects__image"
    />
  );
}
