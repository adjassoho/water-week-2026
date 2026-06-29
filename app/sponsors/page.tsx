import FooterSection from '@/components/FooterSection';

const organizers = [
    {
        name: "Africa Centre of Excellence for Water (C2EA)",
        img: 'https://i.ibb.co/rGL6BZs2/logo-C2-EA.png',
    },
    {
        name: "National Institute of Water (INE/UAC)",
        img: 'https://i.ibb.co/8nLpXxbm/Logo-INE.png',
    },
];

const institutionalPartners = [
    {
        name: 'IAHS',
        full: 'International Association of Hydrological Sciences',
        img: 'https://i.ibb.co/XZW7BHKz/jhhv.png',
    },
    {
        name: 'FRIEND AOC',
        full: "Flow Regimes from International Experimental and Network Data — West & Central Africa",
        img: 'https://i.ibb.co/LXbQgQn9/jhfjhf.jpg',
    },
];

const comingSoonPartners = [
    { name: 'IRD', full: 'French National Research Institute for Sustainable Development' },
    {
        name: 'UNESCO', full: "United Nations Educational, Scientific and Cultural Organization"
    },
    { name: 'AFD', full: 'French Development Agency' },
    { name: 'World Bank', full: 'The World Bank Group' },
];

export default function SponsorsPage() {
    return (
        <div className="min-h-screen font-sans bg-white">

            {/* ===== Hero ===== */}
            <div
                className="py-16"
                style={{ background: 'linear-gradient(to right, #02345e 0%, #058332 100%)' }}
            >
                <div className="container mx-auto px-4 text-center">
                    <h1
                        className="text-4xl md:text-5xl font-extrabold text-white uppercase tracking-wider"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                        Sponsors &amp; <span className="font-accent italic font-medium">Partners</span>
                    </h1>
                </div>
            </div>

            {/* ===== Main Organizers ===== */}
            <div className="bg-[#f4f7f9] py-14">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="flex items-center gap-3 mb-8">
                        <div
                            className="w-1 h-10 rounded-full"
                            style={{ background: 'linear-gradient(to bottom, #02345e, #058332)' }}
                        />
                        <div>
                            <h2 className="text-2xl font-extrabold text-[#02345e]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                Main Organizers
                            </h2>
                            <p className="text-gray-400 text-sm">Co-organizing institutions of the conference</p>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {organizers.map((org, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 flex flex-col items-center gap-4 hover:shadow-md transition-shadow"
                            >
                                <div className="h-28 flex items-center justify-center">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={org.img}
                                        alt={org.name}
                                        className="max-h-28 max-w-full object-contain"
                                    />
                                </div>
                                <p className="text-[#02345e] font-semibold text-center text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                    {org.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ===== Institutional Partners ===== */}
            <div className="bg-white py-14">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="flex items-center gap-3 mb-8">
                        <div
                            className="w-1 h-10 rounded-full"
                            style={{ background: 'linear-gradient(to bottom, #02345e, #058332)' }}
                        />
                        <div>
                            <h2 className="text-2xl font-extrabold text-[#02345e]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                Institutional Partners
                            </h2>
                            <p className="text-gray-400 text-sm">Scientific and technical partner organizations</p>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {institutionalPartners.map((p, i) => (
                            <div
                                key={i}
                                className="bg-[#f4f7f9] rounded-2xl p-6 shadow-sm border border-gray-200 flex flex-col items-center gap-3 hover:shadow-md transition-shadow"
                            >
                                <div className="h-20 flex items-center justify-center">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={p.img}
                                        alt={p.name}
                                        className="max-h-20 max-w-full object-contain"
                                    />
                                </div>
                                <div className="text-center">
                                    <p className="text-[#02345e] font-bold text-sm">{p.name}</p>
                                    <p className="text-gray-400 text-xs mt-0.5 leading-tight">{p.full}</p>
                                </div>
                            </div>
                        ))}

                        {/* Coming-soon placeholder tiles */}
                        {comingSoonPartners.map((p, i) => (
                            <div
                                key={i}
                                className="bg-[#f4f7f9] rounded-2xl p-6 border border-dashed border-gray-300 flex flex-col items-center justify-center gap-2 min-h-[160px]"
                            >
                                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </div>
                                <p className="text-[#02345e] font-bold text-sm text-center">{p.name}</p>
                                <p className="text-gray-400 text-xs text-center leading-tight">{p.full}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <FooterSection />
        </div>
    );
}
