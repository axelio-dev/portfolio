import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "axelio.dev@gmail.com",
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #020617; color: #e2e8f0; padding: 32px; border-radius: 12px;">
          <h2 style="color: #60a5fa; margin-bottom: 4px;">New message from your portfolio</h2>
          <p style="color: #64748b; font-size: 14px; margin-top: 0;">Received via contact form</p>
          <hr style="border: none; border-top: 1px solid #1e293b; margin: 24px 0;" />
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="color: #64748b; padding: 6px 0; width: 80px;">Name</td><td style="color: #f1f5f9;">${name}</td></tr>
            <tr><td style="color: #64748b; padding: 6px 0;">Email</td><td style="color: #f1f5f9;"><a href="mailto:${email}" style="color: #60a5fa;">${email}</a></td></tr>
            <tr><td style="color: #64748b; padding: 6px 0;">Subject</td><td style="color: #f1f5f9;">${subject}</td></tr>
          </table>
          <hr style="border: none; border-top: 1px solid #1e293b; margin: 24px 0;" />
          <p style="color: #64748b; font-size: 13px; margin-bottom: 8px;">Message</p>
          <div style="background: #0f172a; border: 1px solid #1e293b; border-radius: 8px; padding: 16px; color: #cbd5e1; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${message}</div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
