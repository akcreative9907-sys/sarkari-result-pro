"use client";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
export function ThemeToggle() { const [dark, setDark] = useState(false); useEffect(() => { document.documentElement.classList.toggle("dark", dark); }, [dark]); return <Button aria-label="Toggle theme" variant="ghost" size="icon" onClick={() => setDark((v) => !v)}>{dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}</Button>; }
