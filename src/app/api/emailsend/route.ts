import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

function validateFormData(name: string, email: string, message: string) {
  if (!name || !email || !message) {
    return false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

export async function POST(req: Request) {
  console.log('Używane poświadczenia:', {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  });
  try {
    const { name, email, message } = await req.json();

    if (!validateFormData(name, email, message)) {
      return NextResponse.json(
        { error: 'Nieprawidłowe dane' },
        { status: 400 }
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
      from: `${name} <${email}>`,
      to: 'cichorzklaudia@gmail.com',
      subject: 'Formularz Kontaktowy z Twojej strony',
      text: `Imię: ${name}\nEmail: ${email}\nWiadomość: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Wystąpił błąd:', error);
    return NextResponse.json(
      { error: 'Błąd podczas wysyłania wiadomości' },
      { status: 500 }
    );
  }
}
