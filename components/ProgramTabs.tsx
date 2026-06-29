'use client';

import { useState } from 'react';

type EventType = 'admin' | 'ceremony' | 'social' | 'keynote' | 'session' | 'poster' | 'panel' | 'break' | 'competition';

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
        day: 'Tuesday',
        date: 'Oct. 20',
        label: 'Opening & Plenary Sessions',
        events: [
            { time: '08:00 - 09:30', title: 'Registration & Welcome', type: 'admin', location: 'Main Hall — Palais des Congrès' },
            { time: '09:30 - 10:30', title: 'Inaugural Keynote: "Digital Innovation and AI: New Levers for Sustainable Management of Water and Agriculture"', type: 'keynote', location: 'Main Hall' },
            { time: '10:30 - 11:30', title: 'Official Opening Ceremony', type: 'ceremony', description: 'Speeches from dignitaries, cultural performances, and awareness sketches.', location: 'Main Hall' },
            { time: '11:30 - 12:00', title: 'Coffee Break — Departure of official guests', type: 'social', location: 'Foyer' },
            { time: '12:00 - 14:15', title: 'Keynote Presentations', type: 'keynote', description: 'K1: Digital technology and innovation in education · K2: AI and data valorization for water and environment · K3: Digital innovation and precision agriculture in Africa (3 × 30 min + 15 min Q&A).', location: 'Main Hall' },
            { time: '14:15 - 15:30', title: 'Lunch', type: 'social', location: 'Exhibition Area' },
            { time: '15:30 - 17:30', title: 'Parallel Scientific Session Presentations', type: 'session', description: 'Thematic Streams 1 & 2: Digital Transformation / Open Data & AI.', location: 'Rooms A, B & C' },
            { time: '17:30 - 18:30', title: 'Innovation Stands Exhibition & Networking Cocktail', type: 'social', location: 'Exhibition Area' },
        ]
    },
    {
        day: 'Wednesday',
        date: 'Oct. 21',
        label: 'Panels & UNESCO-IHE/WDPP',
        events: [
            { time: '08:00 - 09:00', title: 'Registration & Setup', type: 'admin', location: 'Main Hall' },
            { time: '09:00 - 10:30', title: 'SPECIAL SESSION 1 — Cross-Debate: "AI vs. Classical Approaches for Forecasting Natural Phenomena"', type: 'panel', description: 'Comparing traditional physical/statistical models and AI for predicting floods, droughts, and agricultural yields (4 speakers, 1 moderator).', location: 'Main Hall' },
            { time: '10:30 - 11:00', title: 'Coffee Break', type: 'social' },
            { time: '11:00 - 12:30', title: 'HIGH-LEVEL PANEL — Education and Artificial Intelligence', type: 'panel', description: 'Responsibility, ethics, and sustainable use of AI in African educational systems (4 panelists, 1 moderator).', location: 'Main Hall' },
            { time: '12:30 - 14:00', title: 'Lunch', type: 'social' },
            { time: '14:00 - 15:30', title: 'SPECIAL SESSION 2 — UNESCO-IHE/WDPP [Part 1: Panel]', type: 'panel', description: 'Water diplomacy, transboundary governance, and capacity building in West Africa (3 experts from IHE Delft, 1 moderator).', location: 'Main Hall' },
            { time: '15:30 - 16:00', title: 'Coffee Break', type: 'social' },
            { time: '16:00 - 17:30', title: 'SPECIAL SESSION 2 — UNESCO-IHE/WDPP [Part 2: Presentations]', type: 'session', description: 'Presentations of projects funded or supported by the WDPP in Africa and alumni experience sharing (WaSahelNet booklet).', location: 'Room B' },
            { time: '17:30 - 18:30', title: 'Innovation Stands Exhibition & Networking', type: 'social', location: 'Exhibition Area' },
        ]
    },
    {
        day: 'Thursday',
        date: 'Oct. 22',
        label: 'Innovation, Science & Closing',
        events: [
            { time: '08:30 - 09:00', title: 'Registration & Setup', type: 'admin', location: 'Main Hall' },
            { time: '09:00 - 10:30', title: 'PriMI COMPETITION — Innovation Pitches', type: 'competition', description: 'Public pitches by the 10 selected innovations (10 min pitch + 5 min Q&A each).', location: 'Main Hall' },
            { time: '10:30 - 11:00', title: 'Coffee Break & Stands Visit', type: 'social', location: 'Exhibition Area' },
            { time: '11:00 - 13:00', title: 'Parallel Scientific Session Presentations', type: 'session', description: 'Thematic Streams 3 & 4: Educational Systems / Smart Water & Sludge Treatment Technologies.', location: 'Rooms A, B & C' },
            { time: '13:00 - 14:00', title: 'Lunch', type: 'social' },
            { time: '14:00 - 14:30', title: 'PriMI Jury Deliberation (closed session)', type: 'admin', location: 'Jury Room' },
            { time: '14:30 - 15:30', title: 'Closing Ceremony & PriMI Awards Presentation', type: 'ceremony', description: 'Cultural performance, reading of recommendations, closing speech, and award ceremony for the 3 winners.', location: 'Main Hall' },
        ]
    }
];

export default function ProgramTabs() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full max-w-5xl mx-auto px-4 font-sans">
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
                                                    event.type === 'competition' ? 'bg-yellow-100 text-yellow-700' :
                                                        event.type === 'ceremony' ? 'bg-purple-100 text-purple-700' :
                                                            event.type === 'panel' ? 'bg-green-100 text-green-700' :
                                                                'bg-gray-200 text-gray-700'}
                       `}>
                                                {event.type === 'keynote' && '🎤'}
                                                {event.type === 'social' && '☕'}
                                                {event.type === 'ceremony' && '🏆'}
                                                {event.type === 'session' && '📊'}
                                                {event.type === 'poster' && '📌'}
                                                {event.type === 'admin' && '📋'}
                                                {event.type === 'panel' && '🗣️'}
                                                {event.type === 'competition' && '🏅'}
                                                <span className="ml-1">
                                                    {event.type === 'keynote' ? 'Keynote' :
                                                        event.type === 'social' ? 'Break / Social' :
                                                            event.type === 'ceremony' ? 'Ceremony' :
                                                                event.type === 'session' ? 'Scientific Session' :
                                                                    event.type === 'panel' ? 'Panel' :
                                                                        event.type === 'competition' ? 'PriMI Competition' :
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
