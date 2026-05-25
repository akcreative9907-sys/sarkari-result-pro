import type { Metadata } from "next";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import "./globals.css";
export const metadata: Metadata = { metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"), title: { default: "Sarkari Signal - Latest Government Jobs, Results, Admit Cards", template: "%s | Sarkari Signal" }, description: "Premium Sarkari Result style platform for latest jobs, results, admit cards, answer keys, admissions, syllabus, and AI recommendations.", openGraph: { type: "website", siteName: "Sarkari Signal" }, twitter: { card: "summary_large_image" } };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en" suppressHydrationWarning><body className="min-h-screen bg-mesh"><Header />{children}<Footer /></body></html>; }
