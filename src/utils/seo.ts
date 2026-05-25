import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/utils";
export function buildMetadata(input: { title: string; description: string; path: string; keywords?: string[] }): Metadata { return { title: input.title, description: input.description, keywords: input.keywords, alternates: { canonical: absoluteUrl(input.path) }, openGraph: { title: input.title, description: input.description, url: absoluteUrl(input.path) }, twitter: { card: "summary_large_image", title: input.title, description: input.description } }; }
