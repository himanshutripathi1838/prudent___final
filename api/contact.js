import nodemailer from 'nodemailer';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const recentSubmissions = new Map();

function clean(value, limit) {
  return typeof value === 'string' ? value.trim().slice(0, limit) : '';
}

export default async function handler(request, response) {
  if (request.method !== 'POST') return response.status(405).json({ error: 'Method not allowed.' });

  const ip = request.headers['x-forwarded-for']?.split(',')[0] || request.socket?.remoteAddress || 'unknown';
  const now = Date.now();
  if (now - (recentSubmissions.get(ip) || 0) < 15000) return response.status(429).json({ error: 'Please wait before sending another message.' });

  const name = clean(request.body?.name, 120);
  const email = clean(request.body?.email, 254).toLowerCase();
  const phone = clean(request.body?.phone, 30);
  const subject = clean(request.body?.subject, 160);
  const message = clean(request.body?.message, 5000);
  if (!name || !EMAIL_PATTERN.test(email) || !subject || message.length < 10) return response.status(400).json({ error: 'Please provide a valid name, email, subject and message.' });

  const sender = process.env.EMAIL_SENDER;
  const password = process.env.EMAIL_PASSWORD;
  const recipients = (process.env.EMAIL_RECEIVER || '').split(',').map(value => value.trim()).filter(Boolean);
  if (!sender || !password || !recipients.length) return response.status(503).json({ error: 'Email service is not configured. Please email contact@prusys.com.' });

  try {
    const transporter = nodemailer.createTransport({ service: 'gmail', auth: { user: sender, pass: password } });
    await transporter.sendMail({
      from: `Prudent Systems Website <${sender}>`,
      to: recipients,
      replyTo: email,
      subject: `[Website] ${subject}`,
      text: [`Name: ${name}`, `Email: ${email}`, `Phone: ${phone || 'Not provided'}`, `Subject: ${subject}`, `Submitted: ${new Date().toISOString()}`, '', 'Message:', message].join('\n')
    });
    recentSubmissions.set(ip, now);
    return response.status(200).json({ ok: true });
  } catch {
    return response.status(502).json({ error: 'Message could not be sent. Please email contact@prusys.com.' });
  }
}
