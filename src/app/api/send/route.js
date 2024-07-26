import { NextResponse } from "next/server";
import Mailjet from 'node-mailjet';

const mailjet = new Mailjet({
  apiKey: process.env.MAILJET_API_KEY,
  apiSecret: process.env.MAILJET_API_SECRET
});

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);

  try {
    const result = await mailjet.post('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: {
            Email: process.env.FROM_EMAIL,
            Name: "Kva portfolio"
          },
          To: [
            {
              Email: email,
              Name: "Recipient"
            }
          ],
          Subject: subject,
          TextPart: `Thank you for contacting us!\n\nNew message submitted:\n${message}`,
          HTMLPart: `
            <h1>${subject}</h1>
            <p>Thank you for contacting us!</p>
            <p>New message submitted:</p>
            <p>${message}</p>
          `
        }
      ]
    });

    console.log(result.body);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}