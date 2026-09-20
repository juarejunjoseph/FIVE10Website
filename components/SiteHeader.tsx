"use client";

import Link from "next/link";
import { useState } from "react";

const ASSET = "https://www.figma.com/api/mcp/asset/28fc86cc-d3af-49ba-a085-8fad769c3ae1";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <Link href="/" className="header-logo" onClick={close} aria-label="FIVE10 Productions home">
        <img src={`${ASSET}/14a8c.png`} alt="FIVE10 Productions" />
      </Link>

      <button
        className="menu-toggle"
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <img src={`${ASSET}/9b952.svg`} alt="" />
      </button>

      <div className={`menu-overlay-wrap ${open ? "is-open" : ""}`}>
        <nav className="menu-overlay" aria-label="Main navigation">
          <Link href="/" onClick={close}>Home</Link>
          <Link href="/about" onClick={close}>About</Link>
          <Link href="/projects" onClick={close}>Projects</Link>
          <Link href="/contact" onClick={close}>Contact Us</Link>
        </nav>
      </div>

      {open && <button className="menu-backdrop" aria-label="Close menu" onClick={close} />}
    </header>
  );
}
