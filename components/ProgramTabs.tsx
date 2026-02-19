'use client';

import { useState } from 'react';

type EventType = 'admin' | 'ceremony' | 'social' | 'keynote' | 'session' | 'poster' | 'panel' | 'break';

interface Event {
    time: string;
    title: string;
    type: EventType;
    description?: string;
    location?: string;
}

interface DaySchedule {
    day: string;
    date: string;
    label: string;
    events: Event[];
}

const scheduleData: DaySchedule[] = [
    {
        day: 'Lundi',
        date: '6 Juillet',
        label: 'Ouverture',
        events: [
            { time: '08:30 - 09:30', title: 'Inscription & Café de bienvenue', type: 'admin', location: 'Hall Principal' },
            { time: '09:30 - 11:00', title: 'Cérémonie d\'Ouverture Officielle', type: 'ceremony', description: 'Discours des officiels, partenaires et organisateurs.', location: 'Amphithéâtre Bel Mahi' },
            { time: '11:00 - 11:30', title: 'Pause Café & Photo de Groupe', type: 'social', location: 'Esplanade' },
            { time: '11:30 - 12:30', title: 'Keynote 1: Hydrologie et Changement Climatique', type: 'keynote', description: 'Intervenant: Pr. Lahcen Benaabidate', location: 'Amphithéâtre Bel Mahi' },
            { time: '12:30 - 14:00', title: 'Déjeuner', type: 'social', location: 'Restaurant' },
            { time: '14:00 - 15:30', title: 'Session Parallèle 1A: Ressources en Eau', type: 'session', location: 'Salle A' },
            { time: '14:00 - 15:30', title: 'Session Parallèle 1B: Qualité de l\'Eau', type: 'session', location: 'Salle B' },
            { time: '15:30 - 16:00', title: 'Pause Café', type: 'social' },
            { time: '16:00 - 17:30', title: 'Session Posters 1', type: 'poster', location: 'Hall d\'Exposition' },
        ]
    },
    {
        day: 'Mardi',
        date: '7 Juillet',
        label: 'Conférences',
        events: [
            { time: '09:00 - 10:30', title: 'Session Parallèle 2A: Hydrologie Urbaine', type: 'session', location: 'Salle A' },
            { time: '09:00 - 10:30', title: 'Session Parallèle 2B: Eaux Souterraines', type: 'session', location: 'Salle B' },
            { time: '10:30 - 11:00', title: 'Pause Café', type: 'social' },
            { time: '11:00 - 12:30', title: 'Keynote 2: Gestion Intégrée des Ressources', type: 'keynote', description: 'Intervenant: Dr. Oula Amrouni', location: 'Amphithéâtre Bel Mahi' },
            { time: '12:30 - 14:00', title: 'Déjeuner', type: 'social' },
            { time: '14:00 - 15:30', title: 'Session Spéciale: Table Ronde Experts', type: 'panel', location: 'Amphithéâtre Bel Mahi' },
            { time: '15:30 - 16:00', title: 'Pause Café', type: 'social' },
            { time: '16:00 - 17:30', title: 'Ateliers Techniques', type: 'session', location: 'Salles C & D' },
        ]
    },
    {
        day: 'Mercredi',
        date: '8 Juillet',
        label: 'Scientifique',
        events: [
            { time: '09:00 - 10:30', title: 'Session Parallèle 3A: Modélisation Hydrodynamique', type: 'session', location: 'Salle A' },
            { time: '09:00 - 10:30', title: 'Session Parallèle 3B: Écohydrologie', type: 'session', location: 'Salle B' },
            { time: '10:30 - 11:00', title: 'Pause Café', type: 'social' },
            { time: '11:00 - 12:30', title: 'Keynote 3: Innovations en Hydrologie', type: 'keynote', description: 'Intervenant: Pr. Yves Tramblay', location: 'Amphithéâtre Bel Mahi' },
            { time: '12:30 - 14:00', title: 'Déjeuner', type: 'social' },
            { time: '14:00 - 17:00', title: 'Sortie Technique / Visite de Terrain', type: 'social', description: 'Visite des installations hydrauliques locales.' },
            { time: '19:30', title: 'Dîner de Gala', type: 'social', location: 'Hôtel Azalaï' },
        ]
    },
    {
        day: 'Jeudi',
        date: '9 Juillet',
        label: 'Clôture',
        events: [
            { time: '09:00 - 10:30', title: 'Restitution des Ateliers', type: 'session', location: 'Amphithéâtre Bel Mahi' },
            { time: '10:30 - 11:00', title: 'Pause Café', type: 'social' },
            { time: '11:00 - 12:30', title: 'Cérémonie de Clôture & Remise des Prix', type: 'ceremony', location: 'Amphithéâtre Bel Mahi' },
            { time: '12:30 - 14:00', title: 'Déjeuner de Départ', type: 'social' },
        ]
    }
];

export default function ProgramTabs() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full max-w-5xl mx-auto px-4">
            {/* Tabs Navigation */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
                {scheduleData.map((day, index) => {
                    const isActive = activeTab === index;
                    return (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`
                px-6 py-3 rounded-full text-base font-bold uppercase tracking-wide transition-all duration-300
                ${isActive
                                    ? 'bg-[#058332] text-white border border-[#058332] shadow-md transform scale-105'
                                    : 'bg-white text-black border border-black hover:bg-gray-50'
                                }
              `}
                            style={{ fontFamily: 'var(--font-heading)' }}
                        >
                            {day.day} <span className={isActive ? 'opacity-100' : 'opacity-70 font-normal'}>{day.date}</span>
                        </button>
                    );
                })}
            </div>

            {/* Schedule Content */}
            <div className="min-h-[400px]">
                {scheduleData.map((day, dayIndex) => (
                    <div
                        key={dayIndex}
                        className={`transition-opacity duration-500 ${activeTab === dayIndex ? 'block opacity-100' : 'hidden opacity-0'}`}
                    >
                        <div className="space-y-4">
                            {day.events.map((event, eventIndex) => (
                                <div
                                    key={eventIndex}
                                    className="flex flex-col md:flex-row bg-[#f2f2f2] rounded-lg overflow-hidden border-l-[6px] border-[#1d5a8c] hover:shadow-md transition-shadow"
                                >
                                    {/* Time Column */}
                                    <div className="md:w-1/4 p-5 md:py-6 md:pl-6 md:pr-4 flex items-center md:items-start text-[#1d5a8c]">
                                        <div className="flex items-center gap-2 font-bold text-base md:text-xl">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            {event.time}
                                        </div>
                                    </div>

                                    {/* Content Column */}
                                    <div className="md:w-3/4 p-5 md:py-6 md:pr-6 md:pl-0">
                                        <h3 className="text-[#303a4d] text-xl font-bold mb-2 leading-tight">
                                            {event.title}
                                        </h3>

                                        {event.description && (
                                            <p className="text-gray-600 mb-2 text-sm leading-relaxed">
                                                {event.description}
                                            </p>
                                        )}

                                        <div className="flex flex-wrap gap-4 mt-3">
                                            {/* Location Badge */}
                                            {event.location && (
                                                <span className="inline-flex items-center gap-1 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                    {event.location}
                                                </span>
                                            )}

                                            {/* Type Badge */}
                                            <span className={`
                        inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase
                        ${event.type === 'keynote' ? 'bg-[#1d5a8c]/10 text-[#1d5a8c]' :
                                                    event.type === 'break' ? 'bg-orange-100 text-orange-700' :
                                                        event.type === 'ceremony' ? 'bg-purple-100 text-purple-700' :
                                                            'bg-gray-200 text-gray-700'}
                      `}>
                                                {event.type === 'keynote' && '🎤'}
                                                {event.type === 'social' && '☕'}
                                                {event.type === 'ceremony' && '🏆'}
                                                {event.type === 'session' && '📊'}
                                                {event.type === 'poster' && '📌'}
                                                {event.type === 'admin' && '📋'}
                                                <span className="ml-1">
                                                    {event.type === 'keynote' ? 'Keynote' :
                                                        event.type === 'social' ? 'Pause / Social' :
                                                            event.type === 'ceremony' ? 'Cérémonie' :
                                                                event.type === 'session' ? 'Session' :
                                                                    event.type}
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
