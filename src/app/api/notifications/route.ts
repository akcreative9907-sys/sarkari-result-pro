import { NextResponse } from "next/server";
import { queueNotification, sendEmail, sendTelegram, sendWhatsApp } from "@/services/notifications";
export async function POST(request: Request) { const alert = await request.json(); const queued = await queueNotification(alert); await Promise.allSettled([sendEmail(alert), sendTelegram(alert), sendWhatsApp(alert)]); return NextResponse.json({ queued }); }
