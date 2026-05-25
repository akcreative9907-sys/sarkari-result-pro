import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
export async function POST(request: Request) { const body = await request.json() as { userId: string; postId: string }; const bookmark = await prisma.bookmark.upsert({ where: { userId_postId: body }, update: {}, create: body }); return NextResponse.json({ bookmark }); }
