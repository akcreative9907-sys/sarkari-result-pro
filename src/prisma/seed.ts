import { PrismaClient } from "@prisma/client";
import { categories, featuredPosts } from "../data";
import { slugify } from "../lib/utils";
const prisma = new PrismaClient();
async function main() { for (const c of categories) await prisma.category.upsert({ where: { slug: c.slug }, update: c, create: c }); for (const p of featuredPosts) { const category = await prisma.category.findUniqueOrThrow({ where: { slug: slugify(p.category) } }); await prisma.post.upsert({ where: { slug: p.slug }, update: {}, create: { type: p.type as never, status: "PUBLISHED", title: p.title, slug: p.slug, summary: p.summary, content: p.summary, organization: p.organization, categoryId: category.id, state: p.state, qualification: p.qualification, vacancyCount: p.vacancyCount, closingDate: new Date(p.closingDate), importantDates: {}, fees: {}, ageLimit: {}, officialUrl: "https://ssc.gov.in", sourceUrl: `https://ssc.gov.in/${p.slug}`, seoTitle: `${p.title} - Sarkari Signal`, metaDescription: p.summary, keywords: [p.category, p.organization, p.type], faqs: [] } }); } }
main().finally(() => prisma.$disconnect());
