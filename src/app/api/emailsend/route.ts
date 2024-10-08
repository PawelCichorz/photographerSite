import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Funkcja walidująca dane z formularza
function validateFormData(name: string, email: string, message: string) {
  if (!name || !email || !message) {
    return false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// Funkcja walidująca anty-spamowo
function validateAntiSpam(headers: Headers) {
  const userAgent = headers.get('user-agent') || '';
  const referer = headers.get('referer') || '';

  if (!userAgent || !referer.includes('your-domain.com')) {
    return false;
  }

  return true;
}

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!validateFormData(name, email, message)) {
      return NextResponse.json(
        { error: 'Nieprawidłowe dane' },
        { status: 400 }
      );
    }

    if (!validateAntiSpam(req.headers)) {
      return NextResponse.json(
        { error: 'Zablokowano jako potencjalny spam' },
        { status: 403 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: 'cichorzklaudia@gmail.com',
      subject: `Wiadomość od ${name}`,
      text: message,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Wystąpił błąd:', error); // logowanie błędu
    return NextResponse.json(
      { error: 'Błąd podczas wysyłania wiadomości' },
      { status: 500 }
    );
  }
}
