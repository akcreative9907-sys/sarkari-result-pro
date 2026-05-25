import { NextResponse } from "next/server";
import { runUpdateEngine } from "@/scraper/engine";
export const dynamic = "force-dynamic";
export async function GET(request: Request) { const token = request.headers.get("authorization")?.replace("Bearer ", ""); if (process.env.CRON_SECRET && token !== process.env.CRON_SECRET) return NextResponse.json({ error: "Unauthorized" }, { status: 401 }); const result = await runUpdateEngine(); return NextResponse.json(result); }
