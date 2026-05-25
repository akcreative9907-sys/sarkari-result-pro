import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
export async function GET() { const posts = await prisma.post.findMany({ where: { status: "PUBLISHED" }, include: { category: true, trending: true }, orderBy: { publishedAt: "desc" }, take: 20 }); return NextResponse.json({ posts }); }
