"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-green-600">
          VietFresh
        </Link>

        <nav className="hidden md:flex gap-8">
          <Link className="hover:text-green-600" href="/">Trang chủ</Link>
          <Link className="hover:text-green-600" href="/about">Giới thiệu</Link>
          <Link className="hover:text-green-600" href="/products">Sản phẩm</Link>
          <Link className="hover:text-green-600" href="/services">Dịch vụ</Link>
          <Link className="hover:text-green-600" href="/team">Đội ngũ</Link>
          <Link className="hover:text-green-600" href="/contact">Liên hệ</Link>
        </nav>

        <button
          className="md:hidden block text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-white border-t shadow px-6 py-4 flex flex-col gap-4">
          <Link href="/" onClick={() => setOpen(false)}>Trang chủ</Link>
          <Link href="/about" onClick={() => setOpen(false)}>Giới thiệu</Link>
          <Link href="/products" onClick={() => setOpen(false)}>Sản phẩm</Link>
          <Link href="/services" onClick={() => setOpen(false)}>Dịch vụ</Link>
          <Link href="/team" onClick={() => setOpen(false)}>Đội ngũ</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Liên hệ</Link>
        </nav>
      )}
    </header>
  );
}
