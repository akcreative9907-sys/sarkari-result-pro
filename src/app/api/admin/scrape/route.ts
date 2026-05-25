import { NextResponse } from "next/server";
import { runUpdateEngine } from "@/scraper/engine";
export async function POST(request: Request) { if (request.headers.get("x-admin-key") !== process.env.ADMIN_API_KEY) return NextResponse.json({ error: "Unauthorized" }, { status: 401 }); return NextResponse.json(await runUpdateEngine()); }
