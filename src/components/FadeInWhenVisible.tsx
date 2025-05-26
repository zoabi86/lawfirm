'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import React from 'react';

type Props = {
  children: React.ReactNode;
  delay?: number;
};

export default function FadeInWhenVisible({ children, delay = 0 }: Props) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
}

