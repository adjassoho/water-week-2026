'use client';

import { useState, ReactNode } from 'react';

interface CollapsibleSectionProps {
    title: string;
    children: ReactNode;
    defaultOpen?: boolean;
    id?: string;
}

export default function CollapsibleSection({
    title,
    children,
    defaultOpen = true,
    id,
}: CollapsibleSectionProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <section id={id} className="font-sans" style={{ backgroundColor: '#f5f7f9' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Collapsible Header Bar — matches icar2026.org style */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex items-center gap-3 px-6 py-3 text-left cursor-pointer transition-colors duration-200 hover:brightness-95"
                    style={{
                        backgroundColor: '#c8d8e4',
                        borderRadius: '4px',
                        border: 'none',
                        outline: 'none',
                    }}
                    aria-expanded={isOpen}
                >
                    <span
                        className="text-xl font-bold leading-none select-none"
                        style={{ color: '#003366', minWidth: '16px' }}
                    >
                        {isOpen ? '–' : '+'}
                    </span>
                    <span
                        className="text-base font-bold uppercase tracking-wide"
                        style={{ color: '#003366' }}
                    >
                        {title}
                    </span>
                </button>

                {/* Collapsible Content */}
                <div
                    style={{
                        overflow: 'hidden',
                        maxHeight: isOpen ? '9999px' : '0px',
                        opacity: isOpen ? 1 : 0,
                        transition: 'max-height 0.4s ease, opacity 0.3s ease',
                    }}
                >
                    {children}
                </div>
            </div>
        </section>
    );
}
