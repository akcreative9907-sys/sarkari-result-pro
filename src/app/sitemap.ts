import type { MetadataRoute } from "next";
import { featuredPosts } from "@/data";
import { absoluteUrl } from "@/lib/utils";
export default function sitemap(): MetadataRoute.Sitemap { return ["", "/jobs", "/results", "/admit-cards", "/answer-keys", "/admissions", "/syllabus", "/search"].map((path) => ({ url: absoluteUrl(path), lastModified: new Date() })).concat(featuredPosts.map((p) => ({ url: absoluteUrl(`/post/${p.slug}`), lastModified: new Date(p.closingDate) }))); }
