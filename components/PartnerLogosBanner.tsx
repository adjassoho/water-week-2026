'use client';

export default function PartnerLogosBanner() {
    const partners = [
        { name: 'C2EA', img: 'https://i.ibb.co/rGL6BZs2/logo-C2-EA.png' },
        { name: 'INE/UAC', img: 'https://i.ibb.co/8nLpXxbm/Logo-INE.png' },
        { name: 'IAHS', img: 'https://i.ibb.co/XZW7BHKz/jhhv.png' },
        { name: 'FRIEND AOC', img: 'https://i.ibb.co/LXbQgQn9/jhfjhf.jpg' },
        { name: 'UNESCO', img: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/UNESCO_logo.svg' },
    ];

    const announcements = [
        '🌍 A complete international scientific conference experience',
        '🤝 Plenary sessions, communications, training, and networking opportunities',
        '📄 Publication in SCOPUS-indexed journals',
        '🎓 Official training certificates guaranteed',
        '📅 July 30, 2026: Abstract submission deadline',
        '✅ August 30, 2026: Notification of acceptance (Oral / Poster)',
        '🗓️ September 15, 2026: Early-bird registration deadline',
        '📌 October 20, 2026: Conference opening',
    ];

    return (
        <div className="fixed top-[50px] left-0 right-0 z-40" style={{ fontFamily: 'DM Sans, sans-serif' }}>

            {/* ── Strip 1 : Partner Logos — scrolling marquee with soft edges ── */}
            <div
                className="overflow-hidden relative"
                style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.82)',
                    height: '54px',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    borderBottom: '1px solid rgba(0,0,0,0.06)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
                    maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
                }}
            >
                <div
                    className="flex items-center animate-marquee-logos whitespace-nowrap"
                    style={{ height: '54px' }}
                >
                    {/* First copy */}
                    {partners.map((partner, i) => (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            key={`a-${i}`}
                            src={partner.img}
                            alt={partner.name}
                            className="h-8 w-auto object-contain shrink-0 hover:scale-108 transition-all duration-300 cursor-pointer"
                            style={{ margin: '0 42px' }}
                        />
                    ))}
                    {/* Duplicate for seamless loop */}
                    {partners.map((partner, i) => (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            key={`b-${i}`}
                            src={partner.img}
                            alt={partner.name}
                            className="h-8 w-auto object-contain shrink-0 hover:scale-108 transition-all duration-300 cursor-pointer"
                            style={{ margin: '0 42px' }}
                        />
                    ))}
                </div>
            </div>

            {/* ── Strip 2 : Announcements — scrolling marquee with soft edges ── */}
            <div
                className="overflow-hidden whitespace-nowrap relative"
                style={{
                    backgroundColor: 'rgba(248, 250, 252, 0.9)',
                    height: '36px',
                    lineHeight: '36px',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    borderBottom: '1px solid rgba(0,0,0,0.04)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
                    maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
                }}
            >
                <div className="inline-block animate-marquee">
                    {announcements.map((text, i) => (
                        <span
                          key={i}
                          className="mx-12 hover:text-[#058332] transition-colors duration-200 cursor-default"
                          style={{ color: '#334155', fontSize: '13px', fontWeight: 500 }}
                        >
                          {text}
                        </span>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {announcements.map((text, i) => (
                        <span
                          key={`dup-${i}`}
                          className="mx-12 hover:text-[#058332] transition-colors duration-200 cursor-default"
                          style={{ color: '#334155', fontSize: '13px', fontWeight: 500 }}
                        >
                          {text}
                        </span>
                    ))}
                </div>
            </div>

        </div>
    );
}
