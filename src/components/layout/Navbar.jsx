"use client";

import { navLinkDesktop, navLinkMobile } from "@/config/navbarconfig";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-bg-soft/80 backdrop-blur border-b border-primary/20 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center h-16 px-6">
        <h1 className="font-display text-xl text-primary">NYC Clinic</h1>

        <div className="hidden md:flex gap-6 text-xs tracking-[0.3em] uppercase text-primary">

          {navLinkDesktop.map((item,index)=>(
            <Link key={index} href={item.href}>{item.label}</Link>
          ))}

          {/* <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/reviews">Reviews</Link>
          <Link href="/contact">Contact</Link> */}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary text-2xl"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-bg-soft px-6 py-6 space-y-4 text-sm uppercase tracking-widest text-primary">
          {navLinkMobile.map((item,index)=>(
            <Link key={index} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
          ))}
        </div>
      )}
    </nav>
  );
}
