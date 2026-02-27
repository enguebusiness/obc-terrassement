import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nom, telephone, email, typeProjet, description, budget, zone } = body as {
      nom?: string;
      telephone?: string;
      email?: string;
      typeProjet?: string;
      description?: string;
      budget?: string;
      zone?: string;
    };

    if (!nom || !telephone || !typeProjet) {
      return NextResponse.json(
        { error: "Nom, téléphone et type de projet sont requis." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      // Pas de clé API — on log simplement et on retourne succès
      console.log("Nouvelle demande devis OBC Maçonnerie:", { nom, telephone, email, typeProjet, zone });
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);

    const fromEmail = process.env.RESEND_FROM_EMAIL || "OBC Maçonnerie <contact@obc-maconnerie.fr>";
    const adminEmail = process.env.ADMIN_EMAIL || "contact@obc-maconnerie.fr";

    await resend.emails.send({
      from: fromEmail,
      to: adminEmail,
      subject: `Nouvelle demande de devis — ${nom} (${typeProjet})`,
      html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:Arial,Helvetica,sans-serif;">
  <div style="max-width:560px;margin:0 auto;padding:32px 16px;">
    <div style="background:#ffffff;border-radius:16px;padding:32px;border:1px solid #e4e4e7;">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:24px;">
        <div style="width:40px;height:40px;background:#1B2A4A;border-radius:8px;display:flex;align-items:center;justify-content:center;">
          <span style="color:#E8772E;font-weight:bold;font-size:11px;">OBC</span>
        </div>
        <h2 style="margin:0;color:#111827;font-size:18px;">Nouvelle demande de devis</h2>
      </div>
      <table style="width:100%;border-collapse:collapse;">
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:14px;width:40%;">Nom</td>
          <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#111827;font-size:14px;font-weight:600;">${nom}</td>
        </tr>
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:14px;">Téléphone</td>
          <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#E8772E;font-size:14px;font-weight:600;">${telephone}</td>
        </tr>
        ${email ? `<tr>
          <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:14px;">Email</td>
          <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#111827;font-size:14px;">${email}</td>
        </tr>` : ""}
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:14px;">Type de projet</td>
          <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#111827;font-size:14px;font-weight:600;">${typeProjet}</td>
        </tr>
        ${zone ? `<tr>
          <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:14px;">Zone</td>
          <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#111827;font-size:14px;">${zone}</td>
        </tr>` : ""}
        ${budget ? `<tr>
          <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:14px;">Budget</td>
          <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#111827;font-size:14px;">${budget}</td>
        </tr>` : ""}
        ${description ? `<tr>
          <td style="padding:10px 0;color:#6b7280;font-size:14px;vertical-align:top;">Description</td>
          <td style="padding:10px 0;color:#111827;font-size:14px;">${description}</td>
        </tr>` : ""}
      </table>
      <p style="margin:24px 0 0 0;color:#9ca3af;font-size:12px;">Reçu le ${new Date().toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" })}</p>
    </div>
  </div>
</body>
</html>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Erreur API contact OBC:", err);
    return NextResponse.json(
      { error: "Erreur serveur. Appelez le 06 74 45 30 89." },
      { status: 500 }
    );
  }
}
