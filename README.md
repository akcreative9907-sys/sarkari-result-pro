# Sarkari Result Pro

Production-ready Next.js 15 App Router platform for government jobs, results, admit cards, answer keys, admissions, syllabus pages, smart search, AI summaries, notifications, SEO automation, and an admin workflow.

## Quick Start
1. Copy `.env.example` to `.env` and fill PostgreSQL/Supabase/OpenAI/notification credentials.
2. Install dependencies with your package manager.
3. Run `npx prisma generate` and `npx prisma db push`.
4. Start development with `npm run dev`.

## Automation
- `/api/cron/update` runs RSS + scraping ingestion with `Authorization: Bearer CRON_SECRET`.
- `npm run cron:update` starts a long-running node-cron worker.
- `vercel.json` triggers the update endpoint every 30 minutes.
