import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }
export function slugify(value: string) { return value.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "").slice(0, 90); }
export function formatDate(value?: string | Date | null) { if (!value) return "To be announced"; return new Intl.DateTimeFormat("en-IN", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(value)); }
export function absoluteUrl(path = "") { return `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}${path}`; }
