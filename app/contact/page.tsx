'use client';

import { useState } from 'react';
import FooterSection from '@/components/FooterSection';

export default function ContactPage() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [errorMsg, setErrorMsg] = useState('');

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setStatus('sending');
        setErrorMsg('');
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            if (res.ok) {
                setStatus('success');
                setForm({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus('error');
                setErrorMsg(data.error || 'Une erreur est survenue.');
            }
        } catch {
            setStatus('error');
            setErrorMsg('Impossible de contacter le serveur. Vérifiez votre connexion.');
        }
    }

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
                        style={{ fontFamily: 'var(--font-heading)' }}
                    >
                        CONTACT
                    </h1>
                </div>
            </div>

            {/* ===== Main content ===== */}
            <div className="bg-[#f4f7f9] py-14">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid md:grid-cols-5 gap-8">

                        {/* Left — contact info */}
                        <div className="md:col-span-2">
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 h-full flex flex-col gap-6">
                                <div>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div
                                            className="w-1 h-8 rounded-full"
                                            style={{ background: 'linear-gradient(to bottom, #02345e, #058332)' }}
                                        />
                                        <h2 className="text-xl font-extrabold text-[#02345e]" style={{ fontFamily: 'var(--font-heading)' }}>
                                            Contactez-nous
                                        </h2>
                                    </div>

                                    {/* Email */}
                                    <a
                                        href="mailto:audace@aims.ac.za"
                                        className="flex items-center gap-3 group mb-6"
                                    >
                                        <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(5,131,50,0.1)' }}>
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="#058332" strokeWidth={1.8}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                            </svg>
                                        </div>
                                        <span className="text-[#02345e] font-medium text-sm group-hover:text-[#058332] transition-colors">
                                            audace@aims.ac.za
                                        </span>
                                    </a>

                                    {/* Location */}
                                    <div className="flex items-start gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'rgba(2,52,94,0.07)' }}>
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="#02345e" strokeWidth={1.8}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-[#02345e] font-semibold text-sm">Palais des Congrès de Cotonou</p>
                                            <p className="text-gray-400 text-xs mt-0.5">Cotonou, Bénin</p>
                                            <p className="text-gray-400 text-xs">6–10 Juillet 2026</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Social */}
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Réseaux sociaux</p>
                                    <div className="flex gap-3">
                                        <a
                                            href="https://facebook.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 text-[#02345e] hover:bg-[#02345e] hover:text-white hover:border-[#02345e] transition-all"
                                        >
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                            </svg>
                                        </a>
                                        <a
                                            href="https://linkedin.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 text-[#02345e] hover:bg-[#02345e] hover:text-white hover:border-[#02345e] transition-all"
                                        >
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right — Contact form */}
                        <div className="md:col-span-3">
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <div
                                        className="w-1 h-8 rounded-full"
                                        style={{ background: 'linear-gradient(to bottom, #02345e, #058332)' }}
                                    />
                                    <h2 className="text-xl font-extrabold text-[#02345e]" style={{ fontFamily: 'var(--font-heading)' }}>
                                        Envoyer un message
                                    </h2>
                                </div>

                                {status === 'success' ? (
                                    <div className="flex flex-col items-center gap-4 py-12 text-center">
                                        <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: 'rgba(5,131,50,0.1)' }}>
                                            <svg className="w-8 h-8 text-[#058332]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold text-[#02345e]">Message envoyé !</h3>
                                        <p className="text-gray-500 text-sm">Nous vous répondrons dans les meilleurs délais.</p>
                                        <button
                                            onClick={() => setStatus('idle')}
                                            className="mt-2 text-[#058332] text-sm font-semibold hover:underline"
                                        >
                                            Envoyer un autre message
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-xs font-semibold text-[#02345e] mb-1.5" htmlFor="name">
                                                    Nom complet <span className="text-red-400">*</span>
                                                </label>
                                                <input
                                                    id="name"
                                                    name="name"
                                                    type="text"
                                                    required
                                                    value={form.name}
                                                    onChange={handleChange}
                                                    placeholder="Jean Dupont"
                                                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-[#02345e] placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#058332]/30 focus:border-[#058332] transition-all"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-semibold text-[#02345e] mb-1.5" htmlFor="email">
                                                    Adresse email <span className="text-red-400">*</span>
                                                </label>
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    required
                                                    value={form.email}
                                                    onChange={handleChange}
                                                    placeholder="jean@exemple.com"
                                                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-[#02345e] placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#058332]/30 focus:border-[#058332] transition-all"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-semibold text-[#02345e] mb-1.5" htmlFor="subject">
                                                Objet
                                            </label>
                                            <input
                                                id="subject"
                                                name="subject"
                                                type="text"
                                                value={form.subject}
                                                onChange={handleChange}
                                                placeholder="Objet du message"
                                                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-[#02345e] placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#058332]/30 focus:border-[#058332] transition-all"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-semibold text-[#02345e] mb-1.5" htmlFor="message">
                                                Message <span className="text-red-400">*</span>
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                required
                                                rows={5}
                                                value={form.message}
                                                onChange={handleChange}
                                                placeholder="Écrivez votre message ici…"
                                                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-[#02345e] placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#058332]/30 focus:border-[#058332] transition-all resize-none"
                                            />
                                        </div>

                                        {status === 'error' && (
                                            <div className="flex items-center gap-2 p-3 rounded-xl bg-red-50 border border-red-200">
                                                <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                                </svg>
                                                <p className="text-red-600 text-sm">{errorMsg}</p>
                                            </div>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={status === 'sending'}
                                            className="w-full py-3 rounded-xl font-bold text-white text-sm flex items-center justify-center gap-2 transition-opacity disabled:opacity-60"
                                            style={{ background: 'linear-gradient(to right, #02345e, #058332)' }}
                                        >
                                            {status === 'sending' ? (
                                                <>
                                                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                                                    </svg>
                                                    Envoi en cours…
                                                </>
                                            ) : (
                                                <>
                                                    Envoyer le message
                                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0121.485 12 59.768 59.768 0 013.27 20.875L5.999 12zm0 0h7.5" />
                                                    </svg>
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <FooterSection />
        </div>
    );
}
