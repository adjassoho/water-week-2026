'use client';

export default function PartnerLogosBanner() {
    // Only logos confirmed to load correctly
    const partners = [
        { name: 'C2EA', img: 'https://i.ibb.co/rGL6BZs2/logo-C2-EA.png' },
        { name: 'INE/UAC', img: 'https://i.ibb.co/8nLpXxbm/Logo-INE.png' },
        { name: 'IAHS', img: 'https://i.ibb.co/XZW7BHKz/jhhv.png' },
        { name: 'FRIEND AOC', img: 'https://i.ibb.co/LXbQgQn9/jhfjhf.jpg' },
        { name: 'UNESCO', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/UNESCO_logo.svg/200px-UNESCO_logo.svg.png' },
    ];

    const announcements = [
        '🌍 Une expérience complète de conférence scientifique internationale',
        '🤝 Sessions plénières, communications, formations et opportunités de réseautage',
        '📄 Publications dans des revues indexées SCOPUS',
        '🎓 Certificats officiels de formation garantis',
        '📅 30 Mars 2026 : Date limite de soumission des résumés',
        '✅ 15 Avril 2026 : Notification d\'acceptation (Oral / Poster)',
        '🗓️ 30 Avril 2026 : Date limite d\'inscription anticipée',
        '📌 20 Juin 2026 : Date limite d\'inscription standard',
    ];

    return (
        <div className="fixed top-[50px] left-0 right-0 z-40" style={{ fontFamily: 'Inter, sans-serif' }}>

            {/* ── Strip 1 : Partner Logos — scrolling marquee ── */}
            <div
                className="overflow-hidden"
                style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    height: '52px',
                    backdropFilter: 'blur(8px)',
                    borderBottom: '1px solid rgba(0,0,0,0.07)',
                }}
            >
                <div
                    className="flex items-center animate-marquee-logos whitespace-nowrap"
                    style={{ height: '52px' }}
                >
                    {/* First copy */}
                    {partners.map((partner, i) => (
                        <img
                            key={`a-${i}`}
                            src={partner.img}
                            alt={partner.name}
                            className="h-8 w-auto object-contain shrink-0"
                            style={{ opacity: 0.75, margin: '0 48px', transition: 'opacity 0.2s' }}
                            onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                            onMouseLeave={e => (e.currentTarget.style.opacity = '0.75')}
                        />
                    ))}
                    {/* Duplicate for seamless loop */}
                    {partners.map((partner, i) => (
                        <img
                            key={`b-${i}`}
                            src={partner.img}
                            alt={partner.name}
                            className="h-8 w-auto object-contain shrink-0"
                            style={{ opacity: 0.75, margin: '0 48px', transition: 'opacity 0.2s' }}
                            onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                            onMouseLeave={e => (e.currentTarget.style.opacity = '0.75')}
                        />
                    ))}
                </div>
            </div>

            {/* ── Strip 2 : Announcements — scrolling marquee ── */}
            <div
                className="overflow-hidden whitespace-nowrap"
                style={{
                    backgroundColor: '#ffffff',
                    height: '36px',
                    lineHeight: '36px',
                    borderBottom: '1px solid #e5e7eb',
                }}
            >
                <div className="inline-block animate-marquee">
                    {announcements.map((text, i) => (
                        <span
                            key={i}
                            className="mx-10"
                            style={{ color: '#1e293b', fontSize: '13px', fontWeight: 500 }}
                        >
                            {text}
                        </span>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {announcements.map((text, i) => (
                        <span
                            key={`dup-${i}`}
                            className="mx-10"
                            style={{ color: '#1e293b', fontSize: '13px', fontWeight: 500 }}
                        >
                            {text}
                        </span>
                    ))}
                </div>
            </div>

        </div>
    );
}
