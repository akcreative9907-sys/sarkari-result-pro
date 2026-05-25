"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
export function SearchBar() { const router = useRouter(); const [q, setQ] = useState(""); function submit(e: FormEvent) { e.preventDefault(); router.push(`/search?q=${encodeURIComponent(q)}`); } return <form onSubmit={submit} className="glass mx-auto flex w-full max-w-3xl items-center gap-2 rounded-lg p-2 shadow-glow"><Search className="ml-3 h-5 w-5 text-muted-foreground" /><Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by exam, department, qualification, state..." className="border-0 bg-transparent" /><Button type="submit">Search</Button></form>; }
