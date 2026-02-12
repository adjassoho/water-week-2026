'use client';

import { useEffect, useRef, useState } from 'react';

export function useScrollReveal(threshold = 0.15) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [threshold]);

    return { ref, isVisible };
}

export function WaveDivider({
    color = '#ffffff',
    flip = false,
    className = ''
}: {
    color?: string;
    flip?: boolean;
    className?: string;
}) {
    return (
        <div className={`w-full overflow-hidden leading-[0] ${flip ? 'rotate-180' : ''} ${className}`}>
            <svg
                viewBox="0 0 1440 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative block w-[calc(100%+1.3px)] h-[60px] sm:h-[80px]"
                preserveAspectRatio="none"
            >
                <path
                    d="M0,40 C120,80 240,0 360,40 C480,80 600,20 720,50 C840,80 960,10 1080,40 C1200,70 1320,20 1440,50 L1440,120 L0,120 Z"
                    fill={color}
                />
            </svg>
        </div>
    );
}

export function SectionTitle({
    label,
    labelIcon,
    title,
    highlight,
    subtitle,
    light = false
}: {
    label: string;
    labelIcon: React.ReactNode;
    title: string;
    highlight: string;
    subtitle: string;
    light?: boolean;
}) {
    return (
        <div className="text-center mb-16">
            <div className={`${light ? 'section-label-light' : 'section-label'} mx-auto w-fit`}>
                {labelIcon}
                {label}
            </div>
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold mt-4 mb-4 ${light ? 'text-white' : 'text-[#0A2E4D]'
                }`} style={{ fontFamily: 'var(--font-heading)' }}>
                {title}{' '}
                <span className={light ? 'gradient-text-gold' : 'gradient-text'}>{highlight}</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${light ? 'text-white/60' : 'text-[#0A2E4D]/60'
                }`}>
                {subtitle}
            </p>
        </div>
    );
}
