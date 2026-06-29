'use client';

import Link from 'next/link';
import FooterSection from '@/components/FooterSection';

const abstractReqs = [
  '300–500 words maximum',
  'Include the title, authors, and affiliations',
  'Clear objectives and methodology',
  'Key findings and conclusions',
  '3 to 5 keywords',
];

const formattingReqs = [
  'Font: Garamond, 11 pt',
  'Line spacing: 1.15',
  'Margins: 1.5 cm (all sides)',
  'Submission in PDF format only',
  'Use the provided abstract template',
];

const importantDates = [
  { date: 'July 30, 2026', label: 'Abstract submission deadline' },
  { date: 'July 30, 2026', label: 'PriMI Innovation submission deadline' },
  { date: 'August 30, 2026', label: 'Notification of acceptance' },
  { date: 'October 20–22, 2026', label: 'Water and Sanitation Week — Cotonou, Benin' },
];

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-[#058332] flex-shrink-0 mt-0.5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function SubmissionPage() {
  return (
    <div className="min-h-screen font-sans bg-white">

      {/* ===== Hero ===== */}
      <div
        className="py-16"
        style={{
          background: 'linear-gradient(to right, #02345e 0%, #058332 100%)',
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1
            className="text-4xl md:text-5xl font-extrabold text-white uppercase tracking-wider"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Abstract <span className="font-accent italic font-medium">Submission</span>
          </h1>
        </div>
      </div>

      {/* ===== Instructions ===== */}
      <div className="py-14 bg-[#f4f7f9]">
        <div className="container mx-auto px-4 max-w-5xl">

          {/* Section header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-[#02345e] flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-[#02345e]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Submission Instructions
            </h2>
            <span className="ml-2 px-3 py-1 rounded-md bg-[#058332] text-white text-sm font-bold">
              English Only
            </span>
          </div>

          {/* Two-column cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Abstract Requirements */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-[#02345e] text-lg mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Abstract Content
              </h3>
              <ul className="space-y-3">
                {abstractReqs.map((req, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-gray-700 text-sm">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Formatting Guidelines */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-[#02345e] text-lg mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Formatting Guidelines
              </h3>
              <ul className="space-y-3">
                {formattingReqs.map((req, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-gray-700 text-sm">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Template button */}
          <div className="text-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-[#02345e] text-white font-semibold hover:bg-[#01254a] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Abstract Template
            </a>
          </div>
        </div>
      </div>

      {/* ===== CTA — Ready to submit / register ===== */}
      <div
        className="py-14"
        style={{
          background: 'linear-gradient(to right, #02345e 0%, #058332 100%)',
        }}
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-6">

            {/* Submit */}
            <div className="bg-white rounded-xl p-8 text-center shadow-md">
              <h3 className="text-xl font-bold text-[#02345e] mb-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Ready to submit?
              </h3>
              <p className="text-gray-500 text-sm mb-6">
                Click below to submit your abstract using our online submission form.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#058332] text-white font-semibold hover:bg-[#046c2a] transition-colors"
              >
                Submit Abstract
              </a>
            </div>

            {/* Register */}
            <div className="bg-white rounded-xl p-8 text-center shadow-md">
              <h3 className="text-xl font-bold text-[#02345e] mb-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Ready to register?
              </h3>
              <p className="text-gray-500 text-sm mb-6">
                Click below to register for the conference.
              </p>
              <Link
                href="/registration"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#058332] text-white font-semibold hover:bg-[#046c2a] transition-colors"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Important Dates ===== */}
      <div className="py-14 bg-[#f4f7f9]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-[#eef2f7] rounded-2xl p-8">

            {/* Section header */}
            <div className="flex items-center justify-center gap-3 mb-2">
              <svg className="w-6 h-6 text-[#058332]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h2 className="text-2xl font-bold text-[#02345e]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Important Dates
              </h2>
            </div>
            <p className="text-center text-gray-500 text-sm mb-8">
              Keep track of these key deadlines for submissions and registration
            </p>

            {/* Date cards grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {importantDates.map((d, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-5 border-l-4 border-[#058332] shadow-sm"
                >
                  <div className="font-bold text-[#058332] text-base mb-1">{d.date}</div>
                  <div className="text-gray-700 text-sm">{d.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
}
