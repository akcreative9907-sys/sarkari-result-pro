"use client";
import { useState } from "react";
export function useBookmarks() { const [ids, setIds] = useState<string[]>([]); async function toggle(postId: string, userId = "demo-user") { setIds((v) => v.includes(postId) ? v.filter((x) => x !== postId) : [...v, postId]); await fetch("/api/bookmarks", { method: "POST", body: JSON.stringify({ postId, userId }) }); } return { ids, toggle }; }
