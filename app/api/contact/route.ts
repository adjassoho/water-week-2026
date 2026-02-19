import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Champs requis manquants.' }, { status: 400 });
    }

    // Configure SMTP — reads credentials from env vars at runtime.
    // Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS in your .env.local file.
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"SEA 2026 Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || 'audace@aims.ac.za',
      replyTo: email,
      subject: `[SEA 2026 Contact] ${subject || '(sans objet)'} — ${name}`,
      text: `Nom : ${name}\nEmail : ${email}\nObjet : ${subject || ''}\n\n${message}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
          <div style="background:linear-gradient(to right,#02345e,#058332);padding:24px;border-radius:8px 8px 0 0">
            <h2 style="color:#fff;margin:0">Nouveau message — SEA 2026</h2>
          </div>
          <div style="border:1px solid #e5e7eb;border-top:0;border-radius:0 0 8px 8px;padding:24px">
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:8px 0;color:#6b7280;width:80px">Nom</td><td style="font-weight:600">${name}</td></tr>
              <tr><td style="padding:8px 0;color:#6b7280">Email</td><td><a href="mailto:${email}">${email}</a></td></tr>
              ${subject ? `<tr><td style="padding:8px 0;color:#6b7280">Objet</td><td>${subject}</td></tr>` : ''}
            </table>
            <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0"/>
            <p style="white-space:pre-wrap;color:#111827">${message}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json({ error: 'Erreur serveur. Veuillez réessayer.' }, { status: 500 });
  }
}
