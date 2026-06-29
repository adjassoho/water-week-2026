'use client';

import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import type { CSSProperties, ReactNode } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  direction?: Direction;
  delay?: number;        // ms
  duration?: number;     // ms
  distance?: number;     // px
  threshold?: number;
  as?: React.ElementType;
}

const directionOffset: Record<Direction, string> = {
  up: 'translateY(VALpx)',
  down: 'translateY(-VALpx)',
  left: 'translateX(VALpx)',
  right: 'translateX(-VALpx)',
  none: 'none',
};

export default function AnimatedSection({
  children,
  className = '',
  style = {},
  direction = 'up',
  delay = 0,
  duration = 600,
  distance = 32,
  threshold = 0.12,
  as: Tag = 'div',
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold });

  const transform = isVisible
    ? 'none'
    : directionOffset[direction].replace('VAL', String(distance));


  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform,
        transition: `opacity ${duration}ms ease ${delay}ms, transform ${duration}ms ease ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}
