"use client";
import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigation } from "@/config/navigation";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  return (
    <header className="header">
      <Link href="/" className="wordmark" aria-label="Página inicial">
        {siteConfig.brand}
        <span>®</span>
      </Link>
      <nav className="desktop-nav" aria-label="Principal">
        {navigation.map((n) => (
          <a href={n.href} key={n.label}>
            {n.label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <ThemeToggle />
        <div className="header-cta">
          <Button>Vamos conversar</Button>
        </div>
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav id="mobile-menu" className="mobile-menu" aria-label="Menu mobile">
          {navigation.map((n) => (
            <a href={n.href} key={n.label} onClick={() => setOpen(false)}>
              {n.label}
              <ArrowUpRight />
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
